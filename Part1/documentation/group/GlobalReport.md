# Project (First Part) – Global Report of Group X

## TECAA

Master in Informatics Engineering - 2025/2026  
Porto, March 16, 2026

Guilherme Melo  
Miguel Póvoas  
Samuel Pinto  
Vicente Teixeira

Version 5, 2026-04-10

---

## Revision History

| Revision | Date       | Author(s)     | Description                                                     |
| -------- | ---------- | ------------- | --------------------------------------------------------------- |
| 1        | 2026-03-17 | Samuel Pinto  | Initial version                                                 |
| 2        | 2026-04-10 | Miguel Póvoas | S1 ownership map paths vs repository                            |
| 3        | 2026-04-10 | Group         | Sections 5–6, tools                                             |
| 4        | 2026-04-10 | Group         | Twine xAPI via Netlify proxy; shared LRS; CSP for `/stories/**` |

---

## Contents

1. Introduction
   1.1 Use of AI-generated content
2. Work distribution
   2.1 Team identification  
    2.2 RACI overview  
    2.3 Ownership map
3. Tools and technologies
4. General conventions
5. Documentation site
6. Goal Question Metric Approach
7. Conclusion
   References  
    Appendix

---

## Integrity Statement

I hereby declare that I conducted this academic work with integrity...

---

# 1. Introduction

This global report is the authoritative source for group-wide requirements, process, and measurement plan. Individual reports reference and detail the evidence in their scope.

## 1.1 Use of AI-generated content

Clearly identify each AI system used, specify which parts of your work involved AI-generated content, and explain how it was used.

---

# 2. Work distribution

## 2.1 Team identification

| Code | Name             | Student # | GitHub                |
| ---- | ---------------- | --------- | --------------------- |
| S1   | Miguel Póvoas    | 1201716   | @mpoboas              |
| S2   | Guilherme Melo   | 1211008   | @GuilhermeMelo1211008 |
| S3   | Samuel Pinto     | 1221316   | @samuelpinto04        |
| S4   | Vicente Teixeira | 1210974   | @VIC3N7E              |

---

## 2.2 RACI overview

| Work item       | Responsible | Accountable | Consulted | Informed |
| --------------- | ----------- | ----------- | --------- | -------- |
| Theme selection | S2          | S2          | S3        | S1, S4   |
| Report Creation | S3          | S3          | S2        | S1, S4   |
| Ownership map   | S3          | S3          | S1, S2    | S4       |

---

## 2.3 Ownership map

| Student | Hugo Pages                                                          | Twine Story                         | Focus           |
| ------- | ------------------------------------------------------------------- | ----------------------------------- | --------------- |
| S1      | `/docs/xapi/fundamentals/` (EN), `/pt/docs/xapi/fundamentals/` (PT) | `static/stories/xapi-fundamentals/` | Fundamentals    |
| S2      | /docs/xapi/structure                                                | /stories/xapi-structure             | Core structure  |
| S3      | /docs/xapi/optional                                                 | /stories/xapi-optional              | Optional fields |
| S4      | /docs/xapi/validation                                               | /stories/xapi-validation            | Validation      |

---

# 3. Tools and technologies

| Tool              | Version / URL                               | License / note           | Reason                                                                                                               |
| ----------------- | ------------------------------------------- | ------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| Hugo              | 0.156.0 (Netlify build; see `netlify.toml`) | Apache-2.0               | Static site generator                                                                                                |
| Node.js           | 24.13.1                                     | —                        | `npm install`, theme pipeline                                                                                        |
| Twine             | [Twine 2](https://twinery.org/2/#/)         | GPL-3.0                  | Branching stories + export to standalone HTML                                                                        |
| LRS               | [lrs.io](https://lrs.io/home)               | Service terms per vendor | Receive and inspect xAPI statements during development                                                               |
| Netlify           | —                                           | —                        | Build + host static site (`public/`); no separate CI pipeline planned for now                                        |
| Netlify Functions | Node (see `netlify.toml`)                   | —                        | **xAPI proxy:** `POST /.netlify/functions/xapi-statement` → group LRS with Basic auth from env (no secrets in Twine) |
| HAR export        | Browser DevTools                            | —                        | Optional network evidence (when required by coursework)                                                              |

---

# 4. General conventions

- Commit messages must follow the format of : #Issue number followed by a short message;
- Only a global README will be used, the rest of the documentation must be in the global and individual markdown reports;
- Folder structure must be /content/en/docs/xapi/THEME/ for english pages, /content/pt/docs/xapi/THEME/ for portuguese pages and /static/stories/xapi-THEME/ for twine stories.
- For individual folders and reports the following naming convention should be used: Student Name Number, e.g JohnDoe1234567

---

# 5. Documentation site

## 5.1 Subject

The group works **Theme 1** from the project statement: **The xAPI Specification: Core Mechanics and Compliance** (mandatory and optional statement fields, IRIs, validation, comparison with related standards where relevant). Themes 2–4 in the statement are **out of scope**.

**Teacher confirmation (email):** _(date sent / date accepted — to be filled by the group.)_
Date sent: 03/17/2026
Date accepted: 03/17/2026

## 5.2 Theme selection

**Constraint:** Docsy is **not** allowed for this project.

**Criteria used**

| Criterion                         | Weight (group consensus) | Notes                                  |
| --------------------------------- | ------------------------ | -------------------------------------- |
| Not Docsy                         | Mandatory                | Hard filter                            |
| Documentation-oriented Hugo theme | High                     | Side nav, search, multi-page docs      |
| Multilingual support              | High                     | EN + PT content                        |
| Maintenance / community           | Medium                   | Releases, issues, docs                 |
| License                           | Mandatory                | Compatible with academic + public repo |
| Fit with Netlify static build     | High                     | `hugo build`, Node for assets          |

**Alternatives considered (shortlist)**

| Option                                    | Outcome                                          |
| ----------------------------------------- | ------------------------------------------------ |
| Thulite + Doks (npm `@thulite/doks-core`) | **Selected** — matches current repository layout |

**Decision:** The site uses **Thulite** with the **Doks**-based stack bundled in `Part1/projects/hugoGroupProject/xapi-specification` (Hugo module mounts to `@thulite/doks-core`, `@thulite/core`, etc.).

**Contributors:** Theme selection is owned by **S2** (Responsible/Accountable) with **S3** consulted and **S1, S4** informed, per §2.2 RACI.

## 5.3 Structure / pages

**Repository root (Hugo project):** `Part1/projects/hugoGroupProject/xapi-specification/`.

**Content**

- English: `content/en/docs/...` (and other sections under `content/en/` as needed).
- Portuguese: `content/pt/docs/...` for translated pages; English content may complement missing PT pages via Hugo module mounts (`sites.matrix` + `sites.complements`), as configured in `config/_default/module.toml`.

**Published URLs (default language without subdir)**

- English home: `/`
- English docs: `/docs/...` (e.g. `/docs/xapi/fundamentals/`)

**Portuguese**

- Home: `/pt/`
- Docs: `/pt/docs/...`

**Primary xAPI doc pages (per §2.3 ownership)**

| Student | Topic             | Typical EN URL                |
| ------- | ----------------- | ----------------------------- |
| S1      | Fundamentals      | `/docs/xapi/fundamentals/`    |
| S2      | Core structure    | `/docs/xapi/structure/`       |
| S3      | Optional fields   | `/docs/xapi/optional-fields/` |
| S4      | Validation / IRIs | `/docs/xapi/validation/`      |

**Twine (authoring vs delivery)**

- **Authoring:** [Twine 2](https://twinery.org/2/#/) (`.twee` sources may live in the repo for collaboration; the **assessed artefact** is **standalone HTML** published to `static/stories/xapi-<theme>/`, typically `index.html`, with a **public URL** after Netlify deploy).
- **Delivered artefacts:** exported HTML under `static/stories/xapi-<theme>/` (see §4), linked from the documentation as agreed per member.

**LRS for development/testing:** [lrs.io](https://lrs.io/home).

## 5.4 Customisation, build, and deployment

**Customisations (non-exhaustive)**

- Local layout overrides under `layouts/` (e.g. `home.html`, `_partials/header/header.html`, `_partials/footer/footer.html`) for branding and multilingual menu URLs.
- `i18n/en.toml`, `i18n/pt.toml` for theme strings.
- `assets/js/flexsearch.en.js`, `flexsearch.pt.js` per Doks multilingual guidance.
- `config/_default/menus/menus.en.toml`, `menus.pt.toml` for navigation labels.

**Build (local / Netlify)**

- From project directory: `npm install` then `hugo build --gc --minify` (Netlify sets `--baseURL "${URL}"`).
- **Twine + LRS smoke test:** use the Netlify CLI **`netlify dev`** from the Hugo project root so **Hugo output and `netlify/functions/`** run together and local **`.env`** is available to the xAPI proxy (plain `hugo server` alone does not serve the function).
- Pinned tool versions: see `[build.environment]` in `[netlify.toml](../../projects/hugoGroupProject/xapi-specification/netlify.toml)` (Hugo **0.156.0**, Node **24.13.1**, Go **1.26.0**, Dart Sass **1.97.3**).

**Hosting**

- **Netlify** connects to the repository; publish directory `**public/`\*\*.
- **Continuous Integration:** not planned as a separate pipeline; **Netlify’s deploy build** is the primary automated build step.

**Public production URL**

- _(To be added after first successful deploy — e.g. `https://<site>.netlify.app`.)_

## 5.5 Requirements Traceability Matrix

| Requirement (statement Table 2.1)                             | Where addressed                                   | Evidence in repository                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------- | ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Deployment (public CDN/server)                                | §5.4                                              | `[Part1/projects/hugoGroupProject/xapi-specification/netlify.toml](../../projects/hugoGroupProject/xapi-specification/netlify.toml)`; **live URL:** _(TBD)_                                                                                                            |
| Security (server-side protection of LRS credentials/endpoint) | §6.1 Goal 2 (first row); post-deploy verification | LRS credentials and endpoint URL live only in a `**.env` file** for local use (never committed) and in **Netlify environment variables** for production; Twine/client bundles must not contain them. Evidence (grep on built output, optional HAR) **after deploy\*\*. |
| Integration (Twine + xAPI, no credentials exposed in client)  | §5.3; individual reports                          | `static/stories/xapi-*/`; [`netlify/functions/xapi-statement.mjs`](../../projects/hugoGroupProject/xapi-specification/netlify/functions/xapi-statement.mjs); [Twine 2](https://twinery.org/2/#/); LRS only via proxy + env (see §5.3)                                  |
| Bilingual Hugo documentation                                  | §5.3                                              | `content/en/`, `content/pt/`; `config/_default/languages.toml`; `config/_default/module.toml`                                                                                                                                                                          |

---

# 6. Goal Question Metric Approach

The group adopts the **Goal Question Metric (GQM)** method as required by the project statement. **Goal 1** concerns the Hugo documentation site; **Goal 2** concerns the Twine web component. Metrics below are **operational**: each has a scale, a target or interpretation rule, a tool, and a procedure.

**Measurement phases**

1. **Provisional plan** — Activity 1; refine after first content and stories exist.
2. **Revision** — Activity 2; update after structural/functional review.
3. **Final values** — Activity 3; recorded in individual reports and summarised here in §6.2–6.3.

## 6.1 Plan

### Goal 1

**Goal 1:** Analyse the Hugo documentation site for the purpose of evaluation and improvement with respect to its **structural and functional quality** from the viewpoint of **developers**, in the context of future adoption of xAPI and LRS.

| Question (operational)                                                             | Metric                                          | Scale / interpretation                        | Tool(s)                                                          | Procedure (summary)                                                                                                                                  | Evidence location                              |
| ---------------------------------------------------------------------------------- | ----------------------------------------------- | --------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| Is the documentation professionally written (grammar/style, tone, cognitive load)? | Count of blocking issues + qualitative severity | Count (0 = none); note High/Med/Low per issue | Manual review + optional [Vale](https://vale.sh/) or spell-check | Each owner reviews own EN (and PT if present) pages; optional Vale config in repo; record findings in individual report                              | Individual §2.x; optional `reports/vale-*.txt` |
| Is the site organised for easy navigation to each primary xAPI guide?              | Clicks from home to owned page; TOC present     | Clicks: integer; TOC: binary (Y/N per page)   | Manual navigation; Hugo `toc` front matter                       | From `/` and `/pt/`, count clicks to each `/docs/xapi/...` primary page; confirm TOC on page                                                         | Individual report + screenshot optional        |
| Are descriptions technically accurate?                                             | Count of confirmed errors / corrections         | Count                                         | Peer review + IEEE/xAPI spec references                          | Cross-check claims vs spec; log discrepancies                                                                                                        | Individual report                              |
| Do the primary xAPI pages use a consistent format and structure with each other?   | Alignment with peer pages                       | OK / needs improvement                        | Other `docs/xapi/` pages as reference                            | Each author compares their page to teammates’ pages (front matter, headings, examples, links) and adjusts to match; **no shared checklist document** | Individual report                              |
| Is each owned page clear for its topic?                                            | Quick self-check                                | Y/N + short note if No                        | —                                                                | Each author re-reads their own page and states whether it clearly covers their scope                                                                 | Individual report                              |
| Are labels/metadata/nav aids present (title, description, menus, language switch)? | Binary + short checklist                        | Pass/Fail per item                            | Manual + `hugo list` / front matter review                       | Verify `title`, `description`, menu entries, PT/EN switch on sample pages                                                                            | Individual report                              |

### Goal 2

**Goal 2 (from statement):** Analyse the standalone **Twine** learning story web component for evaluation and improvement with respect to **xAPI tracking**, **structural quality**, and **narrative consistency** (and security in a later revision), from the viewpoint of instructional designers and developers, using an external LRS.

**Authoring:** [Twine 2](https://twinery.org/2/#/). **LRS:** [lrs.io](https://lrs.io/home/).

| Question (operational)                                           | Metric                                           | Scale / interpretation                                                     | Tool(s)                                                                                 | Procedure (summary)                                                                                                                                                                                                                                                               | Evidence location                                             |
| ---------------------------------------------------------------- | ------------------------------------------------ | -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| Are LRS credentials and endpoint protected from client exposure? | Binary: secrets absent from repo + client bundle | Pass = no keys/endpoint in git, `public/`, or Twine export; Fail otherwise | `.gitignore` + `rg`/grep on sources and post-build `public/`; optional HAR after deploy | **Credentials and LRS endpoint are kept only in a `.env` file** (local, not committed) and mirrored as **Netlify env vars** when deployed—not embedded in Twine HTML/JS or Hugo static output. **Full verification** (documented grep/HAR) is run **after the site is deployed**. | Individual reports + `reports/security-*.md` _(after deploy)_ |
| Are learner interactions correctly sent and accepted by the LRS? | Statement success rate                           | % of expected statements seen in LRS vs test script                        | Twine export + browser; **lrs.io** UI/logs                                              | Scripted walkthrough (load → choices → end); compare to expected verb list (initialized/launched, experienced/responded, completed/scored)                                                                                                                                        | Individual §3.x; LRS screenshots/export if available          |
| Is narrative voice consistent and appropriate for audience?      | Flesch-Kincaid grade level (EN) + short rubric   | Grade level (approx.); rubric 1–5                                          | e.g. Python `textstat`, or online readability with method cited                         | Run on exported passage text; team rubric for tone                                                                                                                                                                                                                                | Individual report                                             |
| Is story flow logical without dead ends?                         | Dead-end count; avg time per branch (optional)   | Count; seconds optional                                                    | Twine editor + playtest                                                                 | Map passages/links; playtest branches                                                                                                                                                                                                                                             | Individual report; Twine stats PDF per course                 |

**Twine delivery requirements (statement):** branching, variables, clear **End** passage with final **completed** (or **scored**) statement including **result** where applicable — each individual story must document how these are met; **story statistics PDF** stored in the repository (path pattern under Appendix A).

## 6.2 Summary of findings

_(To be completed in Activity 3.)_

Each member fills metric values and evidence in their **individual report**. The group will add here a **short aggregate table**: one row per metric (or per metric×owner), columns for **value**, **link to individual section**, and **link to raw tool output** (if any). Aggregation rules (e.g. sum of reported issues, all stories must pass the LRS statement test) will be agreed before final submission.

## 6.3 Goal achievement analysis

_(To be completed in Activity 3.)_

Planned content: (1) whether Goal 1 thresholds were met and main gaps for the documentation set; (2) whether Goal 2 thresholds were met for stories and xAPI behaviour; (3) trade-offs (e.g. depth of PT translation vs time). **Security:** confirm post-deploy that secrets stayed in `.env` / Netlify env only and never appeared in client or static output.

---

# 7. Conclusion

Summarise:

- final decision
- key reasons
- main findings

---

# References

List all references used.

---

# Appendix A – Evidence index

- Tool reports: `Part1/documentation/reports/` or `Part1/reports/` _(create when first outputs exist)_
- GQM notes / scripts: same as above or `Part1/gqm/` _(optional)_
- Security artefacts: `reports/security-*.md` (grep logs, optional HAR) **after deploy**; `.env` remains local-only (see `.gitignore`)
- xAPI proxy (server-side): `Part1/projects/hugoGroupProject/xapi-specification/netlify/functions/xapi-statement.mjs`
- Twine stats (PDF): `Part1/projects/hugoGroupProject/xapi-specification/static/stories/xapi-*/stats.pdf` _(or path agreed per story)_
