/**
 * Proxies xAPI statements to lrs.io using Basic auth from env (never exposed to the browser).
 * POST JSON body: a single xAPI statement object, or an array of statements (xAPI batch).
 * Env (group-shared LRS): XAPI_LRS_ENDPOINT, XAPI_LRS_USERNAME, XAPI_LRS_PASSWORD
 */
export const handler = async (event) => {
  const cors = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: cors, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { "Content-Type": "application/json", ...cors },
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  const endpoint = process.env.XAPI_LRS_ENDPOINT;
  const user = process.env.XAPI_LRS_USERNAME;
  const pass = process.env.XAPI_LRS_PASSWORD;

  if (!endpoint || !user || !pass) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json", ...cors },
      body: JSON.stringify({ error: "LRS env vars missing on server" }),
    };
  }

  const base = endpoint.replace(/\/?$/, "/");
  const url = `${base}statements`;

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json", ...cors },
      body: JSON.stringify({ error: "Invalid JSON body" }),
    };
  }

  const isBatch = Array.isArray(payload);
  const isObject = payload !== null && typeof payload === "object" && !isBatch;
  if (!isObject && !isBatch) {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json", ...cors },
      body: JSON.stringify({ error: "Body must be a statement object or an array of statements" }),
    };
  }

  const auth = Buffer.from(`${user}:${pass}`, "utf8").toString("base64");

  const lrsRes = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${auth}`,
      "X-Experience-API-Version": "1.0.3",
    },
    body: JSON.stringify(payload),
  });

  const text = await lrsRes.text();
  const ok = lrsRes.status === 204 || lrsRes.status === 200;

  return {
    statusCode: ok ? 200 : lrsRes.status,
    headers: { "Content-Type": "application/json", ...cors },
    body: JSON.stringify({
      ok,
      lrsStatus: lrsRes.status,
      lrsBody: text.slice(0, 1000),
    }),
  };
};
