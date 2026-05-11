# Project (First Part) - Individual Report

## TECAA

Master in Informatics Engineering - 2025/2026  
Porto, April 13, 2026

**Student:** Vicente Teixeira (1210974)

Version 3, 2026-04-13

---

## Revision History

| Revision | Date       | Author           | Description |
| -------- | ---------- | ---------------- | ----------- |
| 1        | 2026-04-10 | Vicente Teixeira | Initial version |
| 2        | 2026-04-10 | Vicente Teixeira | Adjusted to Hugo-only scope |
| 3        | 2026-04-13 | Vicente Teixeira | Adapted report to S4 Validation and new standalone story |

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

ISEP, April 13, 2026

---

# 1. Introduction

This report covers the artefacts and analysis under my responsibility, aligned with the group requirements and GQM framework.

## 1.1 Use of AI-generated content

AI support was used to improve wording, structure, and consistency of this report and to refine technical phrasing in the Validation/IRI narrative.  
All technical choices, metric interpretations, and final published content were manually reviewed and validated by me.

Identific was used before submission as required by the course rules; evidence file to attach in `reports/` (e.g., `reports/identific-*.pdf` or equivalent export).

## 1.2 Assigned scope (traceability)

- **Owned Hugo page (repository path):**
  - English: [`/content/en/docs/xapi/validation.md`](../../projects/hugoGroupProject/xapi-specification/content/en/docs/xapi/validation.md)

- **Published site path:**
  - English: `/docs/xapi/validation/`

- **Twine source story (repository path):**
  - [`/static/stories/xapi-validation/story.twee`](../../projects/hugoGroupProject/xapi-specification/static/stories/xapi-validation/story.twee)

- **Twine standalone HTML (assessed artefact, repository path):**
  - [`/static/stories/xapi-validation/index.html`](../../projects/hugoGroupProject/xapi-specification/static/stories/xapi-validation/index.html)

- **Expected published story path (public URL after deploy):**
  - `/stories/xapi-validation/`

- **Related issues:** #10, #11, #12, #13, #14, #15

- **Key commits:** to update with final hashes from `git log --oneline -- content/en/docs/xapi/validation.md static/stories/xapi-validation/`

Cross-reference: Global report work distribution (RACI) and ownership map.

---

# 2. Documentation site

## 2.1 Individual part: characteristics and adequacy

My documentation scope is the **Validation and IRIs** page in the xAPI section:

- [`content/en/docs/xapi/validation.md`](../../projects/hugoGroupProject/xapi-specification/content/en/docs/xapi/validation.md)

The page covers:

- validation goals (completeness, conformance, interoperability, auditability);
- mandatory checks for core fields (`actor`, `verb`, `object`, `version`);
- type and structure checks;
- IRI quality rules (absolute, stable, specific, consistent);
- practical good-vs-weak IRI examples;
- validated statement example with interpretable fields.

The page is integrated in the same section and navigation model as the teammates' pages (`fundamentals`, `structure`, `optional-fields`) and keeps the same format conventions (front matter, heading hierarchy, tables, and code blocks).

## 2.2 GQM approach

The following questions operationalize Goal 1 for my scope (`/docs/xapi/validation/`).

### Goal 1

**Goal 1:** Analyse the Hugo documentation site for evaluation and improvement with respect to structural and functional quality from the viewpoint of developers, in the context of xAPI/LRS adoption.

| Question (operational) | Metric | Scale / interpretation | Tool(s) | Procedure (my scope) | My collected value | Answer (draft) |
| --- | --- | --- | --- | --- | --- | --- |
| Is the page professionally written (grammar/style/tone/cognitive load)? | Number of blocking issues + severity notes | Count (0 = no blocking issues) | Manual read | Read `validation.md` end-to-end and flagged grammar/style load issues. | **0 blocking issues**, no high/medium severity notes. | Yes. The page is clear, technical, and consistent with the documentation tone. |
| Is navigation to the guide easy and links coherent? | Click count from `/` to `/docs/xapi/validation/`; broken links count | Lower click count is better; 0 broken links target | Manual navigation | Navigated from docs index and tested key internal links. | Reachable in docs flow with consistent section navigation; **0 broken links detected in manual checks**. | Yes. Navigation and link behavior are adequate for the section context. |
| Are technical statements accurate against expected xAPI validation rules? | Number of corrections required after review | Count (0 = no correction) | Manual cross-check + peer references | Compared claims in page text against xAPI mandatory statement structure and common verb/object IRI patterns. | **0 corrections required** in final version. | Yes. The technical description is consistent with the intended validation scope. |
| Does the page include sufficient information for its theme and remain consistent with teammate layout? | Checklist OK/needs improvement | Ordinal | Compare with peer pages | Compared structure and depth against sibling docs pages. | **OK** in thematic coverage and structure consistency. | Yes. Content depth and layout match project conventions. |
| Are machine-readable labels and navigation aids correctly configured? | Checklist: title/description/slug/toc/draft | Pass/Fail by item | Front matter inspection | Validated front matter fields and their values. | title: Pass; description: Pass; slug: Pass (`validation`); toc: Pass; draft: Pass (`false`). | Yes. Required metadata and navigation aids are present. |

---

# 3. Twine story

**Story source file:** [`static/stories/xapi-validation/story.twee`](../../projects/hugoGroupProject/xapi-specification/static/stories/xapi-validation/story.twee)

**Standalone HTML file:** [`static/stories/xapi-validation/index.html`](../../projects/hugoGroupProject/xapi-specification/static/stories/xapi-validation/index.html)

**Export note:** HTML is exported manually from this `.twee` source.

## 3.1 Technical description

### Branching structure

The story is intentionally short and non-linear around one validation decision:

| Passage/state | Role |
| --- | --- |
| Start | Resets score/progress and sends `initialized` |
| Intro | Explains why validation matters; sends `launched` |
| Validation Checks | Lists practical checks; sends `experienced` |
| Quick Quiz | Decision point for selecting the correct verb IRI |
| Not yet | Wrong answer path; sends `responded` with `success: false`; loops back |
| Correct | Right answer path; sends `responded` with `success: true` |
| End | Sends `completed` with result score/success/completion/duration |

### State variables

- **`score`**: starts at `0`; set to `1` on correct quiz answer.
- **`steps`**: increments on each rendered state to expose progress.

### Completion behavior

On End, the story sends a `completed` statement with:

- `result.score` (`raw`, `min`, `max`, `scaled`)
- `result.success` (`true` when `score >= 1`)
- `result.completion: true`
- `result.duration` using session start and elapsed time

## 3.2 xAPI statement map (evidence)

| Action | Expected Verb | Fields Sent | Result |
| --- | --- | --- | --- |
| Story load (Start) | `initialized` | Actor, Verb, Object, Timestamp, Version | Pass (implemented) |
| Intro entry | `launched` | Actor, Verb, Object, Timestamp, Version | Pass (implemented) |
| Validation checks section | `experienced` | Actor, Verb, Object, Timestamp, Version | Pass (implemented) |
| Quiz answer (wrong/right) | `responded` | Actor, Verb, Object, Result (`success`, `response`) | Pass (implemented) |
| Story finish (End) | `completed` | Actor, Verb, Object, Result (`score`, `success`, `completion`, `duration`) | Pass (implemented) |

Expected runtime verification procedure (after exporting HTML from `story.twee`):

1. Run local site (`netlify dev`) or deployed site.
2. Open `/stories/xapi-validation/` and complete one full run (including one wrong then one right answer).
3. Confirm all expected verb types are visible in LRS statement listing.

## 3.3 Security: client-side exposure tests

| Test | Method | Result |
| --- | --- | --- |
| Static search | Search built story and docs for endpoint secrets/tokens/credentials | Pass (no hardcoded credentials found) |
| Network capture (HAR) | Browser DevTools during full run | To complete (capture and sanitize) |
| Proxy usage | Confirm xAPI POST requests target `/.netlify/functions/xapi-statement` (or `/api/xapi` redirect when configured) | Pass (implemented in story helper) |

## 3.4 GQM approach

This section applies Goal 2 to my own story (`xapi-validation`).

**Goal (individual scope):** Verify that the story produces expected xAPI events, is navigable, and does not expose LRS credentials/client endpoints.

**Questions used:**

1. Are endpoint and credentials hidden from client-side artefacts?
2. Do all expected verb types appear in an LRS run?
3. Is the narrative readable for intended learners?
4. Are there dead ends in story navigation?

**Collected/expected metrics:**

- **Client exposure:** Pass/Fail on repository and built story scan for secrets; current value: **Pass**.
- **LRS behavior:** ratio of expected verbs present after one full run; target: **5/5**.
- **Narrative readability:** readability index report on exported text; target: understandable technical language for bachelor/master audience.
- **Structure:** dead ends count; target: **0**.

---

# 4. Other issues

Evidence of convention alignment:

- **Commit messages:** should reference issues (e.g., `#10`, `#11`, ...).
- **Naming conventions:** `VicenteTeixeira1210974` folder, `xapi-validation` story folder, and xAPI docs path naming style.
- **Repository organization:** individual report, evidence reports, and story assets follow Part 1 documentation structure.
- **Tool reports/evidence paths:** include generated files under `Part1/documentation/VicenteTeixeira1210974/reports/` (LRS screenshot, HAR, readability, Identific evidence).

---

# 5. Conclusions

For my S4 scope, both artefacts (documentation page and standalone story) are aligned with the project quality goals:

- the documentation page is technically consistent and structurally integrated in the xAPI docs section;
- the interactive story models the validation topic and emits the expected xAPI events through the project proxy path;
- remaining validation evidence is operational (runtime capture in LRS and sanitized HAR export).

Main next step is to attach final runtime captures and commit hashes to close all checklist evidence points.

---

# References

- xAPI specification and ADL verb IRIs
- Hugo documentation
- Twine concepts for branching stories
- Netlify Functions / proxy approach (`/.netlify/functions/xapi-statement`)
- Project global report and checklist criteria
