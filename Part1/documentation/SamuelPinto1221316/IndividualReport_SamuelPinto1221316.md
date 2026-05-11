# Project (First Part) – Individual Report

## TECAA

Master in Informatics Engineering – 2025/2026  
Porto, April 14, 2026

**Student:** Samuel Pinto (1221316)

Version 3, 2026-04-14

---

## Revision History

| Revision | Date       | Author       | Description                                           |
|----------| ---------- | ------------ | ----------------------------------------------------- |
| 1        | 2026-04-07 | Samuel Pinto | Initial template version                              |
| 2        | 2026-04-14 | Samuel Pinto | Report drafted and aligned with the group structure   |
| 3        | 2026-04-14 | Samuel Pinto | Finalized Optional Fields scope, story, and evidence  |

---

## Contents

1. Introduction  
   1.1 Use of AI-generated content  
   1.2 Assigned scope (traceability)
2. Documentation site  
   2.1 Individual part: characteristics and adequacy  
   2.2 GQM approach
3. Twine story  
   3.1 Technical description  
   3.2 xAPI statement map (evidence)  
   3.3 Security: client-side exposure tests  
   3.4 GQM approach
4. Other issues
5. Conclusions  
   References

---

## Integrity Statement

I hereby declare that I conducted this academic work with integrity. I have not plagiarised or applied any form of undue use of information or falsification of results along the process leading to its elaboration.

Therefore, the work presented in this document is original and authored by me, unless clearly stated otherwise. It has not previously been used for any other end.

I further declare that I have fully acknowledged the Code of Ethical Conduct of P.PORTO.

ISEP, April 14, 2026

---

# 1. Introduction

This report covers the artefacts and analysis under my responsibility, following the group requirements and the GQM plan defined in the global report.

## 1.1 Use of AI-generated content

The following AI systems were used during the work:

- **GitHub Copilot (JetBrains integration):** used to accelerate drafting and refinement of the Optional Fields markdown pages and this report.
- **AI chat assistant support:** used for wording alternatives, bilingual consistency checks, and report structure suggestions.

Use policy in this work:

- AI suggestions were treated as drafts.
- All technical claims, repository paths, and links were manually checked before saving.
- Final responsibility for correctness, scope, and conclusions remains mine.

## 1.2 Assigned scope (traceability)

- **Owned Hugo pages (repository paths, relative to the group project root):**
  - English: [`/content/en/docs/xapi/optional.md`](../../projects/hugoGroupProject/xapi-specification/content/en/docs/xapi/optional.md)
  - Portuguese: [`/content/pt/docs/xapi/optional.md`](../../projects/hugoGroupProject/xapi-specification/content/pt/docs/xapi/optional.md)

- **Published site paths:**
  - English: `/docs/xapi/optional-fields/`
  - Portuguese: `/pt/docs/xapi/optional-fields/`

- **Twine story scope (ownership map):**
  - Repository path: `static/stories/xapi-optional/`
  - Public URL: `/stories/xapi-optional/`

- **Evidence reports stored in `reports/`:**
  - `fleschKincaidHugoReadabilityReport.pdf` — evidence that the Hugo optional-fields page is easy to read.
  - `fleschKincaidTwineReadabilityReport.pdf` — evidence that the Twine story text is easy to read.
  - `hugoListOutput.csv` — output from `hugo list`, used to confirm Hugo page listing and structure.
  - `lrsRun.png` — screenshot proving that the Twine run sends statements to the LRS.
  - `lrsRunHar.har` — HAR capture of the Twine runtime requests, used as security evidence.
  - `twineStoryStatistics.pdf` — story statistics and summary evidence for the Twine quiz.

- **Related issues:** #7, #8, #9, #13, #14, #15

- **Key commits:**
  - `6819167` — `#7 Optional Fields small update, translation created`
  - `2df2dc3` — `#13 #1 Portuguese language added to hugo.`
  - `be94273` — `#9 Individual report creation`

Cross-reference: Global report ownership map and RACI in [`../group/GlobalReport.md`](../group/GlobalReport.md), §2.2–§2.3.

---

# 2. Documentation site

## 2.1 Individual part: characteristics and adequacy

My documentation scope is the **Optional Fields** theme in the xAPI section.

- **English page:** `content/en/docs/xapi/optional.md`
- **Portuguese page:** `content/pt/docs/xapi/optional.md`

Both pages share the same conceptual structure and were designed for bilingual parity:

1. Why optional fields matter
2. `result` — score, success, and outcome
3. `context` — module, course, or activity context
4. `timestamp` — temporal traceability
5. `authority` — who registered the statement
6. Twine integration perspective
7. Full JSON example

This part is adequate to the assigned theme because it does more than list fields: it explains **when to use** them and **when to avoid** them.

In particular:

- `result` is presented as the field for quizzes, scored tests, and pass/fail activities.
- `context` is used when the same activity needs to be linked to a module, course, or learning path.
- `timestamp` is described as almost always useful because it improves sequence and timeline analysis.
- `authority` is explained as the field that records who registered the statement, especially useful with proxies or middleware.

The pages also follow the same style as the rest of the xAPI documentation:

- correct front matter;
- clear heading hierarchy;
- JSON examples;
- internal cross-links to the xAPI section pages;
- consistent bilingual slug strategy (`optional-fields`).

The Portuguese version was written to mirror the English page while remaining natural in Portuguese, as requested.

## 2.2 GQM approach

This section applies **Goal 1** from the global report to my owned pages: Optional Fields EN/PT.

### Goal 1

**Goal 1:** Analyse the Hugo documentation site for evaluation and improvement with respect to its **structural and functional quality** from the viewpoint of **developers**, in the context of future adoption of xAPI and LRS.

| Question (operational) | Metric | Scale / interpretation | Tool(s) | Procedure (summary) | Evidence location |
| --- | --- | --- | --- | --- | --- |
| Is the documentation **professionally written** (grammar/style, voice, tone, cognitive load)? | Count of blocking issues + **High/Med/Low** severity notes | Count (0 = none); each issue tagged by severity | Manual read; optional [Vale](https://vale.sh/) or spell-check | Review **owned** EN and PT markdown; list issues briefly; optional Vale run with config in repo if used | Value: **0 blocking issues**; no high-severity language issues. Conclusion: Pass. Evidence: `Part1/documentation/SamuelPinto1221316/reports/fleschKincaidHugoReadabilityReport.pdf`, this section (`§2.2`). |
| Is the site **easy to navigate** to each primary guide, with a sensible **TOC** and **working links** (including **EN/PT**)? | Click count home -> owned page; TOC **Y/N**; **broken link** count (or Pass/Fail after tool run) | Clicks: non-negative integer; TOC: Y/N per language; links: 0 failures target | Manual navigation | From **`/`** and **`/pt/`**, count clicks to each owner's `/docs/xapi/...` page; confirm TOC | Value: click count = **2** (EN and PT paths), TOC present in both pages, and links resolve in the current structure. Conclusion: Pass. Evidence: `Part1/documentation/SamuelPinto1221316/reports/hugoListOutput.csv`, this section (`§2.2`). |
| Does each guide include **necessary information for its theme**, use a **layout consistent** with teammate pages, and read **clearly** for its topic? | Checklist / judgement: **OK** vs **needs improvement** (+ short justification) | Ordinal; team interprets "needs improvement" as actionable gaps | Other `content/.../docs/xapi/` pages as reference | Compare front matter, heading levels, examples, and cross-links to sibling pages; self-check coverage of the **ownership map** theme | Value: **OK**; coverage and formatting are aligned with team patterns. Conclusion: Pass. Evidence: this section (`§2.1` and `§2.2`). |
| Are **machine-readable labels and navigation aids** used (`title`, `description`, menus, search/breadcrumbs as the theme provides, **language switch**)? | Checklist: Pass/Fail **per item** (list which failed) | Pass/Fail per sub-item | `hugo list`, front matter inspection, manual UI check | Verify metadata on **EN and PT** owned pages; confirm language switch reaches the paired page; menus match group conventions | Value: `title` Pass, `description` Pass, `slug` Pass (`optional-fields`), `draft:false` Pass, `toc:true` Pass, language parity Pass. Conclusion: Pass. Evidence: `Part1/documentation/SamuelPinto1221316/reports/hugoListOutput.csv`, this section (`§2.2`). |

Evidence reports used for this section:

- `fleschKincaidHugoReadabilityReport.pdf`
- `hugoListOutput.csv`

---

# 3. Twine story

## 3.1 Technical description

My assigned Twine scope is **xAPI Optional Fields** (`/stories/xapi-optional/`). The source is maintained in `static/stories/xapi-optional/story.twee` and exported to `static/stories/xapi-optional/index.html` for publication.

### Main design

The current story is a **simple linear quiz** with one question per optional-field concept:

1. `result`
2. `context`
3. `timestamp`
4. `authority`

Each question has one correct option and one incorrect option. The learner gets immediate feedback and continues to the next question.

The story uses these state variables:

- `$score` (0 to 4)
- `$steps` (visited-passage counter)
- `_success` (computed at the end from score threshold)

### Flow summary

| Passage | Role |
| --- | --- |
| Start | Initializes the state and sends `initialized` |
| Q1 / Q1Right / Q1Wrong | Question on `result`; sends `responded` on answer |
| Q2 / Q2Right / Q2Wrong | Question on `context`; sends `responded` on answer |
| Q3 / Q3Right / Q3Wrong | Question on `timestamp`; sends `responded` on answer |
| Q4 / Q4Right / Q4Wrong | Question on `authority`; sends `responded` on answer |
| End | Computes score result and sends final `completed` |

### Behaviour of the final statement

The final statement is sent in `End` and always includes a quiz result block:

- `result.score.raw` in range 0..4;
- `result.score.min = 0`, `result.score.max = 4`, and `result.score.scaled = raw / 4`;
- `result.success` based on threshold (`score >= 3`);
- `result.completion = true`;
- `result.duration` from session start;
- `timestamp` and `version: 1.0.3` added by the shared helper.

The story also sends all xAPI statements through the Netlify proxy endpoint `/.netlify/functions/xapi-statement`, which keeps credentials off the client.

## 3.2 xAPI statement map (evidence)

The current quiz emits the following xAPI verbs and fields:

| Action | Expected Verb | Fields Sent | Result |
| --- | --- | --- | --- |
| Story load (`Start`) | `initialized` | Actor, Verb, Object, Timestamp | Pass |
| Answer each quiz question (`Q1*`, `Q2*`, `Q3*`, `Q4*`) | `responded` | Actor, Verb, Object, Timestamp, `result.success`, `result.response` | Pass |
| Finish (`End`) | `completed` | Actor, Verb, Object, Timestamp, `result.score`, `result.success`, `result.completion`, `result.duration` | Pass |

This map is consistent with the current quiz design: one response statement per answered question and one completion statement with final score.

Evidence reports used for this section:

- `twineStoryStatistics.pdf`
- `lrsRun.png`

## 3.3 Security: client-side exposure tests

The story was checked from the source HTML to confirm that sensitive LRS details are not embedded in the client.

| Test | Method | Result |
| --- | --- | --- |
| Static search | Scan exported HTML for credentials or a bare LRS endpoint | Pass |
| Network target | Inspect the helper code used to send statements | Pass |
| Proxy usage | Confirm that requests go to the Netlify function endpoint | Pass |

Observed security properties:

- the client uses `/.netlify/functions/xapi-statement` as the only send target;
- no Basic auth credentials appear in the exported HTML;
- the story keeps LRS interaction server-side through the proxy;
- the `authority` field is used as xAPI metadata, not as a leak of secrets.

Evidence reports used for this section:

- `lrsRunHar.har`
- `lrsRun.png`

## 3.4 GQM approach

This section maps my Twine scope to **Goal 2** from the global report.

**Goal 2 (from statement, applied to my story):** Analyse the standalone **Twine** learning story web component for evaluation and improvement with respect to **xAPI tracking**, **structural quality**, and **narrative consistency**, from the viewpoint of instructional designers and developers, using an external LRS.

| Question (operational) | Metric | Scale / interpretation | Tool(s) | Procedure (summary) | Evidence location |
| --- | --- | --- | --- | --- | --- |
| Are the **LRS endpoint and credentials** kept off the client (repo, Twine export, built `public/`)? | Pass/fail on "no secrets and no bare LRS URL" in those artefacts | Pass / Fail | `.gitignore`; `rg`/grep (or equivalent) on sources + `public/` when built; optional **sanitised HAR** after deploy | Confirm `.env` is not committed; search exported story HTML and static output; optional HAR showing calls only to the site proxy, not to the LRS host | Value: **Pass**. The story uses `/.netlify/functions/xapi-statement`; no LRS credentials are embedded in client output. Evidence: `Part1/documentation/SamuelPinto1221316/reports/lrsRunHar.har`, `Part1/documentation/SamuelPinto1221316/reports/lrsRun.png`, `§3.3`. |
| After a **scripted playthrough**, do the **expected verbs** for that story show up in the LRS? | Share of expected **verb types** observed vs the story's §3.2 map (e.g. 5/5) | Fraction or %; interpret against each story's checklist | Browser; **lrs.io** Statements UI (or LRS export) | `netlify dev` or production URL -> open story -> play to **End** -> compare Statements list to **individual §3.2** | Value: **3/3** expected verb types observed for this quiz model. Conclusion: Pass. Evidence: `Part1/documentation/SamuelPinto1221316/reports/lrsRun.png`, `Part1/documentation/SamuelPinto1221316/reports/twineStoryStatistics.pdf`, `§3.2`. |
| Is the **English instructional text** readable and **tonally** appropriate for the audience? | **Flesch-Kincaid** (or equivalent) on passage body text + short **1-5** tone note | Grade level (approx.); rubric 1-5 | Python `textstat` or some online tool | Strip Harlowe macros/scripts; paste body text; run tool; keep **raw output** for the report | Value: readability classified as easy to read; tone is clear and instructional. Conclusion: Pass. Evidence: `Part1/documentation/SamuelPinto1221316/reports/fleschKincaidTwineReadabilityReport.pdf`, `§3.4`. |
| Is **story flow** sound (**no dead ends**, no broken links)? | Count of dead ends / broken links | Count (target **0**) | **Twine 2** editor + manual playtest of every branch; optional **Twine statistics PDF** | Follow all links from **Start**; confirm every path reaches content or **End**; export stats PDF if required | Value: **0** dead ends/broken links. Conclusion: Pass. Evidence: `Part1/documentation/SamuelPinto1221316/reports/twineStoryStatistics.pdf`, `§3.1` and `§3.4`. |

---

# 4. Other issues

Conventions and repository discipline in my scope:

- **Naming conventions:** respected for the individual folder/report (`SamuelPinto1221316`) and xAPI content paths.
- **Repository organisation:** EN/PT optional pages are stored under the expected Hugo multilingual structure.
- **Traceability:** the story export is present in `static/stories/xapi-optional/`, and the report references the exact repository files and public URLs.
- **Consistency with the global report:** the optional-fields scope matches the ownership map in [`../group/GlobalReport.md`](../group/GlobalReport.md).

---

# 5. Conclusions

Main findings for my owned documentation and Twine scope:

- The Optional Fields pages (EN/PT) are implemented and aligned with the group style and ownership boundaries.
- The content answers the key question of this theme: **when** optional fields should be used.
- The Twine story now uses a simple 4-question quiz (one per optional field) with final score reporting (`0/4` to `4/4`).
- Metadata, bilingual consistency, and proxy-based statement delivery are all in place for publication under `/docs/xapi/optional-fields/`, `/pt/docs/xapi/optional-fields/`, and `/stories/xapi-optional/`.
- The evidence reports in `reports/` document readability, Hugo listing output, LRS runtime proof, HAR security capture, and story statistics.

---

# References

- xAPI (Experience API) specification resources and ADL documentation.
- IEEE 9274.1.1-2023 (as cited in the group documentation context).
- Hugo documentation: https://gohugo.io/documentation/
- Twine 2: https://twinery.org/2/#/
- LRS service used by the group: https://lrs.io/home
- Netlify documentation: https://docs.netlify.com/
- Group report: [`../group/GlobalReport.md`](../group/GlobalReport.md)
