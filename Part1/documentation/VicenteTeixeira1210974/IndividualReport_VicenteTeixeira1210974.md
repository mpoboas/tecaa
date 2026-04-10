# Project (First Part) – Individual Report

## TECAA
Master in Informatics Engineering – 2025/2026  
Porto, April 10, 2026

**Student:** Vicente Teixeira (1210974)

Version 2, 2026-04-10

---

## Revision History

| Revision | Date       | Author            | Description |
|----------|------------|-------------------|-------------|
| 1        | 2026-04-10 | Vicente Teixeira  | Initial version |
| 2        | 2026-04-10 | Vicente Teixeira  | Adjusted to Hugo-only scope |

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

ISEP, April 10, 2026

---

# 1. Introduction

This report covers the artefacts and analysis under my responsibility, using the group's authoritative requirements and measurement plan.

## 1.1 Use of AI-generated content

AI support was used to improve writing quality and section organization in this report and in the Hugo documentation page content.  
All final technical decisions and published content were reviewed manually.

## 1.2 Assigned scope (traceability)

- **Owned Hugo page (EN):**  
  `/content/docs/xapi/validation.md`

- **Twine story (standalone):**  
  pending for next phase

- **Related issues:** #10, #11, #12, #13, #14, #15
- **Key commits:** to be completed in next phase

Cross-reference: Global report - Work distribution (RACI) and Ownership map.

---

# 2. Documentation site

## 2.1 Individual part: characteristics and adequacy

My current contribution is the Hugo page `validation.md`, aligned with the team section `/docs/xapi/`.

Implemented aspects:
- page structure with front matter, headings, and tables
- explanation of validation goals and mandatory checks (`actor`, `verb`, `object`, `version`)
- IRI quality criteria and good vs weak examples
- validated statement example in JSON format

The page is intended to complement the existing `fundamentals`, `structure`, and `optional` pages and follows the same writing and formatting conventions used in the project.

## 2.2 GQM approach

Describe:
- your goal(s)
- questions
- metrics used
- collected values

This analysis serves as evidence for the global report aggregation.

---

# 3. Twine story

## 3.1 Technical description

Describe:
- branching logic (decisions)
- variables (e.g., `$score`, `$visitedPassages`)
- end passage with "completed"

---

## 3.2 xAPI statement map (evidence)

| Action        | Expected Verb        | Fields Sent                         | Result |
|--------------|----------------------|-------------------------------------|--------|
| Story load   | initialized/launched | Actor, Verb, Object, Timestamp      | TBD    |
| Choice       | experienced/responded| Actor, Verb, Object, Result         | TBD    |
| End          | completed/scored     | Actor, Verb, Object, Result         | TBD    |

Include LRS logs as evidence.

---

## 3.3 Security: client-side exposure tests

| Test                  | Method                        | Result |
|-----------------------|-------------------------------|--------|
| Static search         | Search for credentials        | TBD    |
| Network capture (HAR) | DevTools network logs         | TBD    |
| Proxy usage           | Requests via `/api/xapi`      | TBD    |

---

## 3.4 GQM approach

Describe:
- goal(s)
- questions
- metrics
- results

---

# 4. Other issues

Show evidence of conventions:

- **Commit messages:** reference issues
- **Naming conventions:** folder/file structure
- **Repository organization**

---

# 5. Conclusions

Summarise:
- main findings
- challenges
- impact on analysis

---

# References

List all references used.
