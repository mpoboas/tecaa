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

- **Related issues:** #7, #8, #9, #13, #14, #15

- **Key commits:**
  - `6819167` — `#7 Optional Fields small update, translation created`
  - `2df2dc3` — `#13 #1 Portuguese language added to hugo. Fundamentals doc page created in pt.`
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

**Goal 1:** Analyse the Hugo documentation site for evaluation and improvement with respect to structural and functional quality, from the developer viewpoint.

| Question (operational) | Metric | Scale / interpretation | Tool(s) | Procedure (Optional EN/PT) | My collected value | Answer |
| --- | --- | --- | --- | --- | --- | --- |
| Is the documentation professionally written (grammar/style, voice, tone, cognitive load)? | Count of blocking issues + High/Med/Low notes | Count (0 = none) | Manual review | Read EN and PT optional pages end-to-end and note writing issues | **0 blocking issues**; no high-severity language issues detected | Yes. Writing is clear and consistent in both language variants. |
| Is the site easy to navigate to this guide, with sensible TOC and working links (including EN/PT)? | TOC Y/N; link checks pass/fail | TOC present + links resolving | Front matter and markdown link inspection | Check front matter (`toc: true`) and internal links (`relref`) in both files | TOC configured in both pages; internal sibling links present; slug and section routing are coherent | Yes. Navigation metadata is correct and the page fits the xAPI section flow. |
| Are technical descriptions accurate relative to xAPI scope? | Count of confirmed technical errors | Count (0 = none) | Peer comparison + source review | Cross-check claims against existing xAPI pages, the story export, and xAPI semantics | **0 confirmed errors** in the current review cycle | Yes. Content is technically coherent with optional-field semantics. |
| Does the guide include necessary information for its theme and remain consistent with teammate layout? | Checklist: OK / needs improvement | Ordinal | Comparison with peer pages | Compare front matter, heading levels, examples, and section flow with `fundamentals` and `structure` pages | **OK** | Yes. Theme coverage and formatting are aligned with group documentation patterns. |
| Are machine-readable labels/navigation aids used (`title`, `description`, slug, language consistency)? | Pass/Fail per item | Pass/Fail | Front matter inspection | Verify metadata in EN/PT optional pages | `title`: Pass; `description`: Pass; `slug`: Pass (`optional-fields`); `draft: false`: Pass; `toc: true`: Pass; language parity: Pass | Yes. Required metadata is present and consistent for bilingual publication. |

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

## 3.4 GQM approach

This section maps my Twine scope to **Goal 2** from the global report.

**Goal (individual scope):** Evaluate whether the Optional Fields Twine quiz correctly assesses understanding of optional-field usage while preserving safe client architecture.

Questions and values for my scope:

1. **Are endpoint and credentials kept off the client?**  
   - **Metric:** Pass/Fail from static scan  
   - **Value:** Pass  
   - **Interpretation:** The HTML export references only the proxy endpoint, so secrets are not exposed in the story.

2. **Do expected verbs appear in the story flow?**  
   - **Metric:** fraction of expected verb types emitted by the design  
   - **Value:** **3/3** verb types (`initialized`, `responded`, `completed`)  
   - **Interpretation:** The quiz flow emits the verb set expected by this simplified assessment model.

3. **Is the narrative clear and appropriate?**  
   - **Metric:** manual tone/readability review  
   - **Value:** clear, short, and instructional  
   - **Interpretation:** The English narrative is readable and matches the learning objective.

4. **Is navigation sound (no dead ends)?**  
   - **Metric:** dead-end count  
   - **Value:** **0**  
   - **Interpretation:** All answer paths converge to the `End` passage.

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

---

# References

- xAPI (Experience API) specification resources and ADL documentation.
- IEEE 9274.1.1-2023 (as cited in the group documentation context).
- Hugo documentation: https://gohugo.io/documentation/
- Twine 2: https://twinery.org/2/#/
- LRS service used by the group: https://lrs.io/home
- Netlify documentation: https://docs.netlify.com/
- Group report: [`../group/GlobalReport.md`](../group/GlobalReport.md)
