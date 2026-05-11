# Project (First Part) – Global Report of Group 101

## TECAA

Master in Informatics Engineering - 2025/2026  
Porto, March 16, 2026

Guilherme Melo  
Miguel Póvoas  
Samuel Pinto  
Vicente Teixeira

Version 8, 2026-04-14

---

## Revision History

| Revision | Date       | Author(s)     | Description                                                             |
| -------- | ---------- | ------------- | ----------------------------------------------------------------------- |
| 1        | 2026-03-17 | Samuel Pinto  | Initial version                                                         |
| 2        | 2026-04-10 | Miguel Póvoas | S1 ownership map paths vs repository                                    |
| 3        | 2026-04-10 | Group         | Sections 5–6, tools                                                     |
| 4        | 2026-04-10 | Group         | Twine xAPI via Netlify proxy; shared LRS; CSP for `/stories/**`         |
| 5        | 2026-04-12 | Group         | GQM metrics updated                                                     |
| 6        | 2026-04-14 | Group         | Live deploy URL; ownership map; security evidence; sample commits       |
| 7        | 2026-04-14 | Group         | §6.2–6.3 GQM aggregation; §7 conclusion; references; appendix HAR index |

---

## Contents

1. Introduction
   1.1 Use of AI-generated content
2. Work distribution
   2.1 Team identification  
    2.2 RACI overview  
    2.3 Ownership map  
    2.4 Example commits (auditability)
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

| Student | Hugo pages (published)                                          | Twine story (repo path)             | Focus           |
| ------- | --------------------------------------------------------------- | ----------------------------------- | --------------- |
| S1      | `/docs/xapi/fundamentals/`, `/pt/docs/xapi/fundamentals/`       | `static/stories/xapi-fundamentals/` | Fundamentals    |
| S2      | `/docs/xapi/structure/`, `/pt/docs/xapi/structure/`             | `static/stories/xapi-structure/`    | Core structure  |
| S3      | `/docs/xapi/optional-fields/`, `/pt/docs/xapi/optional-fields/` | `static/stories/xapi-optional/`     | Optional fields |
| S4      | `/docs/xapi/validation/`, `/pt/docs/xapi/validation/`           | `static/stories/xapi-validation/`   | Validation      |

Standalone stories are also served under `/stories/xapi-<theme>/` on the deployed site (e.g. `/stories/xapi-fundamentals/`), matching the `static/stories/` layout.

## 2.4 Example commits (auditability)

Illustrative commits that reference issues and touch the Hugo project or this global report (verify in the repository with `git show <hash>`):

| Issue | Summary                                             | Commit hash                                |
| ----- | --------------------------------------------------- | ------------------------------------------ |
| #13   | Site restructure for project xAPI theme             | `224fb480284f2fb2c91bc0b68a5c21d40ed6ef79` |
| #14   | Defining tools, documentation site and GQM approach | `d2684482772a21e5b72e01016099d2e2a9f62563` |

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

**Teacher confirmation (email):**
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

- **Netlify** connects to the repository; publish directory **`public/`**.
- **Continuous Integration:** not planned as a separate pipeline; **Netlify’s deploy build** is the primary automated build step.

**Public production URL**

- **https://tecaa-isep.netlify.app/** (production deploy of the Hugo site in this repository).

## 5.5 Requirements Traceability Matrix

| Requirement (statement Table 2.1)                             | Where addressed                | Evidence in repository                                                                                                                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Deployment (public CDN/server)                                | §5.4                           | `[Part1/projects/hugoGroupProject/xapi-specification/netlify.toml](../../projects/hugoGroupProject/xapi-specification/netlify.toml)`; **live URL:** https://tecaa-isep.netlify.app/                                                                                                                                                                                                  |
| Security (server-side protection of LRS credentials/endpoint) | §5.6; §6.1 Goal 2 (first row)  | LRS credentials and endpoint URL are **not** in client or repo: local **`.env`** (gitignored) and **Netlify environment variables** in production. Browser traffic posts xAPI JSON only to **`/.netlify/functions/xapi-statement`**; see §5.6 and [`netlify/functions/xapi-statement.mjs`](../../projects/hugoGroupProject/xapi-specification/netlify/functions/xapi-statement.mjs). |
| Integration (Twine + xAPI, no credentials exposed in client)  | §5.3; §5.6; individual reports | `static/stories/xapi-*/`; [`netlify/functions/xapi-statement.mjs`](../../projects/hugoGroupProject/xapi-specification/netlify/functions/xapi-statement.mjs); [Twine 2](https://twinery.org/2/#/); LRS only via proxy + env (§5.6)                                                                                                                                                    |
| Bilingual Hugo documentation                                  | §5.3                           | `content/en/`, `content/pt/`; `config/_default/languages.toml`; `config/_default/module.toml`                                                                                                                                                                                                                                                                                        |

## 5.6 xAPI / LRS security (group)

The group meets the project requirement that **LRS credentials and the LRS endpoint are not exposed in client-side code** as follows.

1. **Secrets and LRS URL in environment only** — Values used to authenticate to the LRS live in a **`.env` file for local development** (never committed; see `.gitignore`) and in **Netlify site environment variables** for production. They are read only by the serverless proxy, not bundled into Twine exports or static assets.

2. **All xAPI posts go through the Netlify function** — The learning content sends statements to **`POST /.netlify/functions/xapi-statement`**, implemented in [`netlify/functions/xapi-statement.mjs`](../../projects/hugoGroupProject/xapi-specification/netlify/functions/xapi-statement.mjs). The function forwards the statement to the real LRS using server-side configuration.

**Runtime evidence (production):** DevTools capture on https://tecaa-isep.netlify.app/ shows the request targeting the Netlify function (no direct client call to the LRS host) and a sample payload containing only statement fields (actor, verb, object), not credentials:

- Request URL and `200 OK`: [`reports/api2.png`](reports/api2.png)
- Request payload (example `launched` statement): [`reports/api1.png`](reports/api1.png)
- **Sanitized HAR** exports (full runs, per checklist): listed under **Appendix A** with paths into each member’s `reports/` folder.

---

# 6. Goal Question Metric Approach

The group adopts the **Goal Question Metric (GQM)** method as required by the project statement. **Goal 1** concerns the Hugo documentation site; **Goal 2** concerns the Twine web component. Metrics below are **operational**: each has a scale, a target or interpretation rule, a tool, and a procedure.

**Measurement phases**

1. **Provisional plan** — Activity 1; refine after first content and stories exist.
2. **Revision** — Activity 2; update after structural/functional review.
3. **Final values** — Activity 3; recorded in individual reports and summarised here in §6.2–6.3.

## 6.1 Plan

### Goal 1

**Goal 1:** Analyse the Hugo documentation site for evaluation and improvement with respect to its **structural and functional quality** from the viewpoint of **developers**, in the context of future adoption of xAPI and LRS.

| Question (operational)                                                                                                                                   | Metric                                                                                          | Scale / interpretation                                                        | Tool(s)                                                       | Procedure (summary)                                                                                                                  | Evidence location                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------- |
| Is the documentation **professionally written** (grammar/style, voice, tone, cognitive load)?                                                            | Count of blocking issues + **High/Med/Low** severity notes                                      | Count (0 = none); each issue tagged by severity                               | Manual read; optional [Vale](https://vale.sh/) or spell-check | Review **owned** EN and PT markdown; list issues briefly; optional Vale run with config in repo if used                              | Individual **§2.2**;                     |
| Is the site **easy to navigate** to each primary guide, with a sensible **TOC** and **working links** (including **EN/PT**)?                             | Click count home → owned page; TOC **Y/N**; **broken link** count (or Pass/Fail after tool run) | Clicks: non-negative integer; TOC: Y/N per language; links: 0 failures target | Manual navigation                                             | From **`/`** and **`/pt/`**, count clicks to each owner’s `/docs/xapi/...` page; confirm TOC;                                        | Individual **§2.1–2.2**;                 |
| Does each guide include **necessary information for its theme**, use a **layout consistent** with teammate pages, and read **clearly** for its topic?    | Checklist / judgement: **OK** vs **needs improvement** (+ short justification)                  | Ordinal; team interprets “needs improvement” as actionable gaps               | Other `content/.../docs/xapi/` pages as reference             | Compare front matter, heading levels, examples, and cross-links to sibling pages; self-check coverage of the **ownership map** theme | Individual **§2.1–2.2**                  |
| Are **machine-readable labels and navigation aids** used (`title`, `description`, menus, search/breadcrumbs as the theme provides, **language switch**)? | Checklist: Pass/Fail **per item** (list which failed)                                           | Pass/Fail per sub-item                                                        | `hugo list`, front matter inspection, manual UI check         | Verify metadata on **EN and PT** owned pages; confirm language switch reaches the paired page; menus match group conventions         | Individual **§2.2**; optional screenshot |

### Goal 2

**Goal 2 (from statement):** Analyse the standalone **Twine** learning story web component for evaluation and improvement with respect to **xAPI tracking**, **structural quality**, and **narrative consistency**, from the viewpoint of instructional designers and developers, using an external LRS.

In practice each member answers the same **four operational questions** below. Values, partial conclusions, and **explicit tool reports** are written in **individual report §3.4**; §6.2–6.3 here aggregate across stories.

**Authoring:** [Twine 2](https://twinery.org/2/#/). **LRS:** [lrs.io](https://lrs.io/home/). **Local proxy:** `netlify dev` (or deployed site) so `POST /.netlify/functions/xapi-statement` reaches the LRS.

| Question (operational)                                                                              | Metric                                                                            | Scale / interpretation                                  | Tool(s)                                                                                                            | Procedure (summary)                                                                                                                                   | Evidence location                                                                                                                                                                  |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Are the **LRS endpoint and credentials** kept off the client (repo, Twine export, built `public/`)? | Pass/fail on “no secrets and no bare LRS URL” in those artefacts                  | Pass / Fail                                             | `.gitignore`; `rg`/grep (or equivalent) on sources + `public/` when built; optional **sanitised HAR** after deploy | Confirm `.env` is not committed; search exported story HTML and static output; optional HAR showing calls only to the site proxy, not to the LRS host | **§5.6**; [`reports/api1.png`](reports/api1.png), [`reports/api2.png`](reports/api2.png); individual **§3.3–3.4** (item 1); per-member `Part1/documentation/<NameNumber>/reports/` |
| After a **scripted playthrough**, do the **expected verbs** for that story show up in the LRS?      | Share of expected **verb types** observed vs the story’s §3.2 map (e.g. 5/5)      | Fraction or %; interpret against each story’s checklist | Browser; **lrs.io** Statements UI (or LRS export)                                                                  | `netlify dev` or production URL → open story → play to **End** → compare Statements list to **individual §3.2**                                       | Individual **§3.2–3.4** (item 2); screenshot or export under member `reports/`                                                                                                     |
| Is the **English instructional text** readable and **tonally** appropriate for the audience?        | **Flesch–Kincaid** (or equivalent) on passage body text + short **1–5** tone note | Grade level (approx.); rubric 1–5                       | Python `textstat` or some online tool                                                                              | Strip Harlowe macros/scripts; paste body text; run tool; keep **raw output** for the report                                                           | Individual **§3.4** (item 3); `reports/readability-*` or equivalent under member folder                                                                                            |
| Is **story flow** sound (**no dead ends**, no broken links)?                                        | Count of dead ends / broken links                                                 | Count (target **0**)                                    | **Twine 2** editor + manual playtest of every branch; optional **Twine statistics PDF**                            | Follow all links from **Start**; confirm every path reaches content or **End**; export stats PDF if required                                          | Individual **§3.4** (item 4); optional `static/stories/xapi-*/stats.pdf` (Appendix A)                                                                                              |

**Twine delivery requirements (statement):** branching, variables, clear **End** passage with final **completed** (or **scored**) statement including **result** where applicable — each story documents how these are met in **§3.1–3.2**; **story statistics PDF** in the repository where required (Appendix A).

## 6.2 Summary of findings

Below we **merge** everyone’s Goal 1 (**§2.2**) and Goal 2 (**§3.4**) tables from the four individual reports into one view. Owner codes match §2.3 (**S1** Miguel, **S2** Guilherme, **S3** Samuel, **S4** Vicente). Full prose, procedures, and file paths stay in each person’s markdown; this section is the group-level snapshot the coursework asked for.

### Goal 1 — Hugo documentation (structural & functional quality)

Questions are the same four operational rows already defined in **§6.1** above. Cells summarise what each member recorded; a dash means they answered the intent inside another row in their own table (see their **§2.2**).

| Question (operational) — §6.1                                                                                                                         | S1 — Fundamentals                                        | S2 — Structure                                                        | S3 — Optional fields                             | S4 — Validation                                        |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- | --------------------------------------------------------------------- | ------------------------------------------------ | ------------------------------------------------------ |
| Is the documentation **professionally written** (grammar/style, voice, tone, cognitive load)?                                                         | **0** blocking issues; no High/Med/Low notes             | **0** blocking; technical tone aligned with Doks                      | **0** blocking; PT mirrors EN naturally          | **0** blocking; technical tone consistent              |
| Is the site **easy to navigate** to each primary guide, with a sensible **TOC** and **working links** (including **EN/PT**)?                          | **1** click home → page; TOC **Y** EN/PT; links **Pass** | **2** clicks home → page; TOC **Y** EN/PT; manual link check **Pass** | **2** clicks; TOC **Y**; links **Pass**          | Manual navigation; **0** broken links in checked paths |
| Does each guide include **necessary information for its theme**, use a **layout consistent** with teammate pages, and read **clearly** for its topic? | **OK** (thematic + peer layout)                          | **OK** (mandatory fields theme)                                       | **OK** (optional-field theme + team patterns)    | **OK** (validation/IRI theme + structure)              |
| Are **machine-readable labels and navigation aids** used (`title`, `description`, menus, breadcrumbs, **language switch**)?                           | All sub-items **Pass** (see `hugo-list-output.csv`)      | **Pass** EN/PT front matter + language switch                         | **Pass** (`slug` `optional-fields`, `toc`, etc.) | **Pass** (`validation`, `toc`, `draft: false`, etc.)   |

### Goal 2 — Twine stories (xAPI tracking, structure, narrative)

Same four operational questions as **§6.1 Goal 2**. Verb fractions are **against each story’s own §3.2 map**

| Question (operational) — §6.1                                                   | S1 — `xapi-fundamentals`                                                                                                                                                                    | S2 — `xapi-structure`                                                                                                                                                                                  | S3 — `xapi-optional`                                                                                                             | S4 — `xapi-validation`                                                                                                      |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Are the **LRS endpoint and credentials** kept off the client?                   | **Pass** — static search + **sanitized HAR** + screenshots ([`../MiguelPovoas1201716/reports/tecaa-isep.netlify.app.har`](../MiguelPovoas1201716/reports/tecaa-isep.netlify.app.har), §3.3) | **Pass** — static + **HAR** ([`../GuilhermeMelo1211008/reports/core-structure.har`](../GuilhermeMelo1211008/reports/core-structure.har), §3.3)                                                         | **Pass** — static + **HAR** ([`../SamuelPinto1221316/reports/lrsRunHar.har`](../SamuelPinto1221316/reports/lrsRunHar.har), §3.3) | **Pass** — static scan + proxy-only send path; **sanitized HAR** still to archive per own §3.3 checklist line               |
| After a **scripted playthrough**, do the **expected verbs** show up in the LRS? | **5/5** types vs map (incl. double `responded` on retry path) — [`../MiguelPovoas1201716/reports/lrs-run.png`](../MiguelPovoas1201716/reports/lrs-run.png)                                  | **3/3** vs map (`launched`, `responded`, `completed`) — LRS screenshot in §3.2                                                                                                                         | **3/3** vs map (`initialized`, `responded`, `completed`) — `lrsRun.png` in §3.2                                                  | **5/5** expected by design (`initialized` … `completed`) — implementation described §3.2; runtime capture as per individual |
| Is the **English instructional text** readable and **tonally** appropriate?     | F–K **~9.0**; FRE **52** — [`../MiguelPovoas1201716/reports/flesch-kincaid-readability-report.pdf`](../MiguelPovoas1201716/reports/flesch-kincaid-readability-report.pdf)                   | F–K **~8–9** (fairly difficult), engineer-appropriate — [`../GuilhermeMelo1211008/reports/flesch-kincaid-readability-twine.pdf`](../GuilhermeMelo1211008/reports/flesch-kincaid-readability-twine.pdf) | “Easy” / instructional (Flesch PDF: `fleschKincaidTwineReadabilityReport.pdf`)                                                   | Readable technical English (qualitative; see §3.4)                                                                          |
| Is **story flow** sound (**no dead ends**, no broken links)?                    | **0** dead ends — stats PDF in `reports/`                                                                                                                                                   | **0** — all quiz paths to **End**                                                                                                                                                                      | **0** — linear quiz to **End**                                                                                                   | **0** — branching quiz loops then **End**                                                                                   |

**Where to look:** [`../MiguelPovoas1201716/IndividualReport_MiguelPovoas1201716.md`](../MiguelPovoas1201716/IndividualReport_MiguelPovoas1201716.md) §2.2–§3.4; [`../GuilhermeMelo1211008/IndividualReport_GuilhermeMelo1211008.md`](../GuilhermeMelo1211008/IndividualReport_GuilhermeMelo1211008.md) §2.2–§3.4; [`../SamuelPinto1221316/IndividualReport_SamuelPinto1221316.md`](../SamuelPinto1221316/IndividualReport_SamuelPinto1221316.md) §2.2–§3.4; [`../VicenteTeixeira1210974/IndividualReport_VicenteTeixeira1210974.md`](../VicenteTeixeira1210974/IndividualReport_VicenteTeixeira1210974.md) §2.2–§3.4.

## 6.3 Goal achievement analysis

**Goal 1 — did we meet the plan?** For all four owned page pairs (Fundamentals, Structure, Optional fields, Validation), the combined table in §6.2 shows **no** unresolved “needs improvement” flags: writing passes, navigation and bilingual switching work on the deployed site, and metadata lines up with the Doks layout we agreed in §4. The main **trade-off** was time: keeping **Portuguese** pages as full counterparts to English (not shallow stubs) cost review cycles, but the group decided early that bilingual Hugo content was non-negotiable for the brief, so we absorbed that cost in scheduling rather than dropping PT.

**Goal 2 — did we meet the plan?** Every Twine export posts xAPI only to **`/.netlify/functions/xapi-statement`**; nobody ships LRS Basic auth or a bare LRS URL in `static/stories/`. Verb coverage **matches each story’s own map** (quiz-only stories naturally emit fewer verb _types_ than richer flows). **Readability** sits in a band that fits **developers / master students**, which is exactly the audience from the project statement.

**Security (cross-cutting):** Post-deploy checks in **§5.6** plus the **HAR** files listed in Appendix A line up with the checklist: browser traffic stays on our origin for xAPI posts; secrets remain in **`.env`** (local) and **Netlify** env (production).

---

# 7. Conclusion

We set out to deliver **Theme 1** a technical documentation site on **xAPI core mechanics and compliance**, bilingual where Hugo requires it, with one **Twine** story per member and **secure** LRS integration. That is what shipped in **Part 1**: the site is public on **Netlify**, the four guides cover the ownership split in §2.3, and each story is playable from **`/stories/xapi-*/`** with statements visible in our shared test LRS.

**Why this solution:** Hugo + Thulite/Doks gave us multilingual docs without Docsy (course constraint), and **Netlify Functions** gave us the smallest server-side hop we needed to keep credentials off static exports—no bespoke backend, which mattered for a short academic block.

**Main takeaways:** (1) the **GQM** tables in §6.2 show Goal 1 and Goal 2 thresholds met for every member; (2) **traceability** is preserved because evidence lives under each student folder and in `static/stories/`; (3) the remaining polish is mostly **evidence hygiene** (one pending HAR) rather than design changes.

---

# References

- **Twine 2**: https://twinery.org/2/#/
- **xAPI** / ADL vocabulary references (as used in content): https://github.com/adlnet/xAPI_Vocabulary
- **Netlify** (hosting + Functions): https://docs.netlify.com/
- **lrs.io** (development LRS): https://lrs.io/home

---

# Appendix A – Evidence index

- **Individual tool reports:** `Part1/documentation/<NameNumber>/reports/` (Flesch PDFs, `hugo list` CSVs, Twine stats PDFs, LRS screenshots, **sanitized HAR** where uploaded)
- **Sanitized HAR files (Part 1 checklist):**
  - [`../MiguelPovoas1201716/reports/tecaa-isep.netlify.app.har`](../MiguelPovoas1201716/reports/tecaa-isep.netlify.app.har) (S1 — full story run, production)
  - [`../GuilhermeMelo1211008/reports/core-structure.har`](../GuilhermeMelo1211008/reports/core-structure.har) (S2)
  - [`../SamuelPinto1221316/reports/lrsRunHar.har`](../SamuelPinto1221316/reports/lrsRunHar.har) (S3)
- **Group screenshots (proxy / payload):** [`reports/api1.png`](reports/api1.png), [`reports/api2.png`](reports/api2.png) — see **§5.6**
- **xAPI proxy (server-side):** [`../../projects/hugoGroupProject/xapi-specification/netlify/functions/xapi-statement.mjs`](../../projects/hugoGroupProject/xapi-specification/netlify/functions/xapi-statement.mjs)
- `.env` remains local-only; see `.gitignore` in the Hugo project root
