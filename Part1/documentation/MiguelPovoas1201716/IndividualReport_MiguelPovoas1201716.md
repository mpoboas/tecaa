# Project (First Part) – Individual Report

## TECAA

Master in Informatics Engineering – 2025/2026  
Porto, April 10, 2026

**Student:** Miguel Póvoas (1201716)

Version 3, 2026-04-10

---

## Revision History

| Revision | Date       | Author        | Description                                    |
| -------- | ---------- | ------------- | ---------------------------------------------- |
| 1        | 2026-03-17 | Miguel Póvoas | Initial version                                |
| 2        | 2026-03-18 | Miguel Póvoas | Extended description                           |
| 3        | 2026-04-10 | Miguel Póvoas | Corrected identity, repository paths, and URLs |

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

This report covers the artefacts and analysis under my responsibility, using the group’s authoritative requirements and measurement plan.

## 1.1 Use of AI-generated content

Clearly identify each AI system used, specify which parts of your work involved AI-generated content, and briefly explain the manner and extent to which each AI system contributed.

## 1.2 Assigned scope (traceability)

- **Owned Hugo pages (repository paths, relative to the group project root):**
  - English: [`/content/en/docs/xapi/fundamentals.md`](../../projects/hugoGroupProject/xapi-specification/content/en/docs/xapi/fundamentals.md)
  - Portuguese: [`/content/pt/docs/xapi/fundamentals.md`](../../projects/hugoGroupProject/xapi-specification/content/pt/docs/xapi/fundamentals.md)

- **Published site paths (Hugo, default language without subdir + Portuguese):**
  - English: `/docs/xapi/fundamentals/`
  - Portuguese: `/pt/docs/xapi/fundamentals/`

- **Twine story (standalone):**  
  `/stories/<name>/index.html` (public URL)

- **Related issues:** #1, #2, #3, #13, #14, #15
- **Key commits:**

Cross-reference: Global report – Work distribution (RACI) and Ownership map.

---

# 2. Documentation site

## 2.1 Individual part: characteristics and adequacy

My scope is the **Fundamentals** page in the xAPI documentation section. In the repository it is implemented as:

- **English** markdown at `content/en/docs/xapi/fundamentals.md` (slug `fundamentals`, section `docs` under the multilingual content layout used by the Hugo site).
- **Portuguese** translation at `content/pt/docs/xapi/fundamentals.md`, with the same slug so language switching and complements/fallback behave consistently with the rest of the site.

The page introduces xAPI (purpose, statements Actor–Verb–Object, LRS role, workflow, comparison with SCORM) and cross-links to sibling pages (e.g. structure, validation) where those topics are developed in depth. Navigation to this page is available from the main menu (Docs → fundamentals entry) and from the xAPI section index.

Further narrative (menus, breadcrumbs, bilingual link checks, tool-based link validation) will be completed in line with the group measurement plan.

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
- end passage with “completed”

---

## 3.2 xAPI statement map (evidence)

| Action     | Expected Verb         | Fields Sent                    | Result |
| ---------- | --------------------- | ------------------------------ | ------ |
| Story load | initialized/launched  | Actor, Verb, Object, Timestamp | Pass   |
| Choice     | experienced/responded | Actor, Verb, Object, Result    | Pass   |
| End        | completed/scored      | Actor, Verb, Object, Result    | Pass   |

Include LRS logs as evidence.

---

## 3.3 Security: client-side exposure tests

| Test                  | Method                         | Result |
| --------------------- | ------------------------------ | ------ |
| Static search         | grep for credentials/endpoints | Pass   |
| Network capture (HAR) | DevTools network logs          | Pass   |
| Proxy usage           | Requests via `/api/xapi`       | Pass   |

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
