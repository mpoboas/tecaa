
# Project (First Part) – Individual Report

## TECAA
Master in Informatics Engineering – 2025/2026  
Porto, March 16, 2026

**Student:** Guilherme Melo (1211008)

Version 4, 2026-04-14

---

## Revision History

| Revision | Date       | Author    | Description           |
|----------|------------|-----------|-----------------------|
| 1        | 2026-03-17 | Guilherme Melo | Initial version       |
| 2        | 2026-03-18 | Guilherme Melo | Extended description  |
| 3        | 2026-04-10 | Guilherme Melo | Added GQM approach    |
| 4        | 2026-04-14 | Guilherme Melo | Final technical details|

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

ISEP, March 16, 2026

---

# 1. Introduction

This report covers the artefacts and analysis under my responsibility, using the group’s authoritative requirements and measurement plan.

## 1.1 Use of AI-generated content

- **Antigravity (Google DeepMind):** Primary coding assistant used for Hugo site configuration, Twine story development (Harlowe 3), Netlify Function implementation, and documentation translation. It assisted in resolving technical issues such as Harlowe/JavaScript bridge validation and Hugo FlexSearch multi-language assets.


## 1.2 Assigned scope (traceability)

- **Owned Hugo pages (EN/PT):**  
  `/content/en/docs/xapi/structure.md`  
  `/content/pt/docs/xapi/structure.md`

- **Twine story (standalone):**  
  `/stories/xapi-structure/index.html`


- **Related issues:** #4, #5, #6, #13, #14, #15
- **Key commits:** `#5 Core Structure Twine` , `#4 Initial xAPI Structure documentation`

- **Key commits (Fundamentals content + Twine; verify with `git show <hash>`):**

| Issue | Summary                                | Commit hash                                |
| ----- | -------------------------------------- | ------------------------------------------ |
| #5    | Core Structure Twine                   | `a97a9d78c1c1e8ba93ee45f963b2de246540fc2e` |
| #4    | Initial xAPI Structure documentation   | `e05105b52effb8bf0295187127f97df0f7826658` |

Cross-reference: Global report – Work distribution (RACI) and Ownership map.

---

# 2. Documentation site

## 2.1 Individual part: characteristics and adequacy

The **Core Structure** documentation section (Portuguese: *Estrutura Principal*) provides a deep dive into the mandatory xAPI components.
- **Structure:** Hierarchical organization covering Actor, Verb, Object, and Version with standard Doks heading levels.
- **Adequacy:** The page uses premium aesthetics (clear JSON blocks, semantic HTML5, and helpful tips) to guide developers. 
- **Bilingual Support:** Full content parity between English and Portuguese, ensuring developers from different backgrounds can access the rules.
- **Interactive module:** Embedded Twine module at the bottom of the page to reinforce the concepts via active learning.


## 2.2 GQM approach

This section applies the **Goal–Question–Metric (GQM)** model to evaluate the `Core Structure` documentation page from the viewpoint of developers.

### Goal 1 — Hugo Documentation Site
**Analyse** the `Core Structure` page for the purpose of **evaluation and improvement** with respect to its **structural and functional quality** from the viewpoint of **developers**.

| Question (operational) | Metric | Procedure & Result |
| :--- | :--- | :--- |
| Is the documentation **professionally written**? | Count of severity notes | **Result:** 0 blocking issues. The page uses a technical but clear tone, matching the Doks theme style. |
| Is the site **easy to navigate** (including **EN/PT**)? | Click count; TOC Y/N | **Result:** 2 clicks from Home. TOC is present and functional in both languages. Link checker (manual) confirms all cross-links are valid. |
| Does the guide include **necessary information** for its theme? | Checklist judgement | **Result:** **OK**. Covers the 4 mandatory xAPI fields (Actor, Verb, Object, Version) as specified in theme 1 requirements. |
| Are **navigation aids** used (Title, Description, Lang Switch)? | Checklist Pass/Fail | **Result:** **Pass**. Both EN and PT pages have full frontmatter metadata and the language switch correctly toggles between `en/docs/xapi/structure.md` and `pt/docs/xapi/structure.md`. |

---

# 3. Twine story

**Story file:** [`static/stories/xapi-structure/index.html`](../../projects/hugoGroupProject/xapi-specification/static/stories/xapi-structure/index.html)

## 3.1 Technical description

The Twine story "xAPI Core Structure Assessment" was developed using **Harlowe 3.3.9**.
- **Logic:** A linear progression through 6 knowledge checks covering the 4 mandatory fields (Actor, Verb, Object, Version) plus a final JSON construction challenge.
- **Variables:** 
  - `$score`: Tracks correct answers (0-6).
  - `$q1_answer`, `$q6_answer`: Captures user string inputs for validation.
- **Interactivity:** Uses a mix of choice-based links and text inputs. A JavaScript bridge was implemented for Q6 to validate JSON syntax and ensure all mandatory root keys are present before awarding points.
- **xAPI Integration:** Statements are sent via a global `xapi` object defined in `StoryJavaScript`.


---

## 3.2 xAPI statement map

| Action        | Expected Verb        | Fields Sent                         | Result |
|--------------|--------------------|-------------------------------------|--------|
| xAPI Core Structure Course   | launched           | Actor, Verb, Object, Version        | Pass   |
| Question #: (title of the question)     | responded          | Actor, Verb, Object, Result(success)| Pass   |
| xAPI Core Structure Course   | completed          | Actor, Verb, Object, Result(score)  | Pass   |

**Evidence:**
 ![LRS statements listing for xAPI Structure (Twine)](reports/lrs-run.png)

**Statistics:**
- [xAPI Structure Story Statistics (Twine)](reports/TwineStats.pdf)

---

## 3.3 Security: client-side exposure tests

| Test                         | Method                          | Result |
|------------------------------|----------------------------------|--------|
| Static search                | grep for credentials/endpoints   | Pass   |
| Network capture (HAR)        | Checked for LRS Basic Auth       | Pass (See [`reports/core-structure.har`](reports/core-structure.har)) |
| Proxy usage                  | Requests via `/.netlify/functions/xapi-statement` | Pass   |


---

## 3.4 GQM approach

### Goal 2 — Standalone Twine Learning Story
**Analyse** the standalone Twine learning story for the purpose of **evaluation and improvement** with respect to its **security, xAPI tracking, and flow**.

| Question (operational) | Metric | Procedure & Result |
| :--- | :--- | :--- |
| Are **LRS credentials** kept off the client? | Pass/Fail on secrets | **Result: Pass.** Credentials live only in Netlify env variables and `.env` (gitignored). Verify via §3.3. |
| Do the **expected verbs** show up in the LRS? | Share of expected verb types | **Result: 3/3.** `launched`, `responded`, and `completed` statements were all correctly logged in the LRS. |
| Is the **instructional text** readable/tonally appropriate? | Flesch-Kincaid / tone note | **Result: Grade Level 8-9 (Fairly difficult).** The tone is instructional and professional, suitable for software engineers. [`reports/flesch-kincaid-readability-twine.pdf`](reports/flesch-kincaid-readability-twine.pdf)|
| Is **story flow** sound (no dead ends)? | Count of dead ends | **Result: 0.** All 6 questions and the final JSON assessment correctly lead to the "Summary" and "End" passages. |



---

# 4. Other issues

Show evidence of conventions:

- **Commit messages:** Example commit message: `#5 Core Structure Twine`
- **Naming conventions:** `docs/xapi/` and `stories/xapi-structure/`

---

# 5. Conclusions

The implementation successfully combined technical documentation with interactive validation.
- **Findings:** xAPI tracking provides granular visibility into student difficulties (e.g., identifying which specific field is most often forgotten in JSON).
- **Challenges:** Harlowe 3's restricted JavaScript scope required a hidden-element bridge to transfer data from HTML textareas to story variables. Port management in local development (Netlify 8888 vs Hugo 1313) was critical for API functional testing.
- **Conclusion:** The site is fully compliant with the team's xAPI tracking and security mandates.


---

# References

**Twine 2** – Open-source tool for telling interactive, non-linear stories. [https://twinery.org/2/#/](https://twinery.org/2/#/)  
**Thulite (Doks Theme)** – Modern documentation theme for Hugo. [https://thulite.io/](https://thulite.io/)  
**LRS.io** – Veracity Learning Record Store platform. [https://lrs.io/home](https://lrs.io/home)  
**Group Global Report** – Technical documentation and shared decisions of Group 101. [../group/GlobalReport.md](../group/GlobalReport.md)  
**Project Statement** – TECAA 2025/2026 Part 1 Requirements. [../ProjectStatement.md](../ProjectStatement.md)  
**Part 1 Checklist** – Evaluation criteria for Group and Individual components. [../Part1Checklist.md](../Part1Checklist.md)