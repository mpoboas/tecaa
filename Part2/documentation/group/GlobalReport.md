# Project (Second Part) — Global Report of Group 101

## Metadata

- Course: Master in Informatics Engineering — 2025/2026  
- Unit: TECAA  
- Part: Project (Second Part)  
- Group ID: Group 101  
- Repository: `TECAA20252026_101`  
- Date: 2026-05-11

## Revision History


| Version | Date       | Author        | Description                                          |
| ------- | ---------- | ------------- | ---------------------------------------------------- |
| 1       | 2026-05-11 | Miguel Póvoas | Conventions, RACI, GQM plan, voting, artefact layout |


---

## Integrity statement

We declare that we conducted this academic work with integrity. We have not plagiarised or applied any form of undue use of information or falsification of results along the process leading to its elaboration.

The work presented in this document is original and authored by our team, unless clearly stated otherwise. It has not previously been used for any other end.

We have fully acknowledged the Code of Ethical Conduct of P.PORTO.

ISEP, 2026-05-11  

---

## Introduction

This is where we record group decisions for Part 2: the hands-on workshop on top of the existing xAPI site, accessibility and performance work, and the GQM plan. Each person still owns the detail in their individual report. Markdown only, no `.docx`.

### Use of AI-generated content (group)


| AI / tooling | Where it shows up                             | How we used it                                                                                                                        |
| ------------ | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| *Fill in*    | Motivational image, slides, any drafting here | Everyone documents their own prompts in the individual report; this table only lists shared stuff after we vote on the image and PDF. |


After the vote, update the table and point to files under `[Part2/artefacts/hw/selected/](../../artefacts/hw/selected/)`.

---

## 1. Work distribution

### 1.1 Team identification

Same four people as Part 1 — [Part1/documentation/group/GlobalReport.md](../../../Part1/documentation/group/GlobalReport.md) §2.1.


| Code | Name             | Student # | GitHub handle         |
| ---- | ---------------- | --------- | --------------------- |
| S1   | Miguel Póvoas    | 1201716   | @mpoboas              |
| S2   | Guilherme Melo   | 1211008   | @GuilhermeMelo1211008 |
| S3   | Samuel Pinto     | 1221316   | @samuelpinto04        |
| S4   | Vicente Teixeira | 1210974   | @VIC3N7E              |


### 1.2 RACI overview


| Work item                                                                               | Responsible | Accountable | Consulted  | Informed |
| --------------------------------------------------------------------------------------- | ----------- | ----------- | ---------- | -------- |
| Part 2 global report (`GlobalReport.md`: structure, RACI, GQM tables, revisions)        | S4          | S1          | S2, S3     | —        |
| Commit message rules, `Part2/artefacts/` layout, issue board, milestones, lab check-ins | S1          | S1          | S2, S3, S4 | —        |
| GQM plan Part 2 (Goal 1 HW + Goal 2 accessibility/performance)                          | S1          | S1          | S2, S3, S4 | —        |
| Motivational HW image: one candidate each, then vote                                    | S2          | S1          | S3         | S4       |
| HW slides in English (PDF): one candidate each, then vote                               | S2          | S2          | S1, S3, S4 | —        |
| Merges and PR hygiene on default branch                                                 | S4          | S1          | S2, S3     | —        |
| Hugo workshop pages, questionnaire wiring, Twine links on the site                      | S3          | S1          | S1, S2, S4 | —        |
| Accessibility and performance — S1 (fundamentals pages + story)                         | S1          | S1          | S2, S3     | S4       |
| Accessibility and performance — S2 (structure pages + story)                            | S2          | S2          | S1, S3     | S4       |
| Accessibility and performance — S3 (optional-fields pages + story)                      | S3          | S3          | S1, S2     | S4       |
| Accessibility and performance — S4 (validation pages + story)                           | S4          | S4          | S1, S2     | S3       |
| Workshop day (12 May) and runtime data                                                  | S4          | S1          | S2, S3     | —        |
| GQM aggregation and closing narrative for Part 2                                        | S1          | S1          | S2, S3, S4 | —        |


S4 (Vicente) is responsible for editing and updating this global report; S1 (Miguel) stays accountable for what goes in it and for the GQM plan. S1 also runs the issue board, milestones, and commit conventions. S2 (Guilherme) owns the motivational image and the English slide/PDF track (including the group vote on those). S3 (Samuel) owns Hugo changes for the workshop section, questionnaire page, and Twine links. Each member stays accountable for their own accessibility and performance row below. S4 still coordinates merges to default branch and workshop-day logistics.

### 1.3 Ownership map

Hugo project from Part 1: `[Part1/projects/hugoGroupProject/xapi-specification/](../../../Part1/projects/hugoGroupProject/xapi-specification/)`. Everyone does baseline vs improved on the same page pairs as before: WCAG 2.2 level A required, AA where we can; Core Web Vitals in the lab. Brief §2.1.


| Student | Hugo content (EN + PT)                                                           | Accessibility statement (Part 2)                                        | Individual report folder                                   |
| ------- | -------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | ---------------------------------------------------------- |
| S1      | `content/en/docs/xapi/fundamentals/`, `content/pt/docs/xapi/fundamentals/`       | `Part2/documentation/MiguelPovoas1201716/accessibility-statement.md`    | `[../MiguelPovoas1201716/](../MiguelPovoas1201716/)`       |
| S2      | `content/en/docs/xapi/structure/`, `content/pt/docs/xapi/structure/`             | `Part2/documentation/GuilhermeMelo1211008/accessibility-statement.md`   | `[../GuilhermeMelo1211008/](../GuilhermeMelo1211008/)`     |
| S3      | `content/en/docs/xapi/optional-fields/`, `content/pt/docs/xapi/optional-fields/` | `Part2/documentation/SamuelPinto1221316/accessibility-statement.md`     | `[../SamuelPinto1221316/](../SamuelPinto1221316/)`         |
| S4      | `content/en/docs/xapi/validation/`, `content/pt/docs/xapi/validation/`           | `Part2/documentation/VicenteTeixeira1210974/accessibility-statement.md` | `[../VicenteTeixeira1210974/](../VicenteTeixeira1210974/)` |


Twine stays under `static/stories/xapi-`* as in Part 1; new HW pages will link there once they exist.

Issues and commits: keep the live list in your individual report; use the row below for the remote URL and any group-level hashes you care about.


| Milestone | Issues URL                     | Reference commits  |
| --------- | ------------------------------ | ------------------ |
| Part 2    | *add when you have the remote* | *update as you go* |


---

## 2. General conventions

### 2.1 Commit messages and issues

- Format: `#<issue> short imperative description`  
Example: `#42 Add Part 2 HW artefact folders and global report`  
- Part 2 deliverables: at least one open issue per commit.  
- PRs: someone else reviews before merge to default branch; S4 coordinates.

### 2.2 Naming and folder structure

- HW assets: `[Part2/artefacts/hw/](../../artefacts/hw/README.md)` — see README for `ai-images/Sx/`, `mockups/Sx/`, `presentations/Sx/`, `selected/`.  
- Reports: `Part2/documentation/group/` and `Part2/documentation/<NameNumber>/`.  
- Questionnaire CSV: `Part2/artefacts/data/` once you have an export.

### 2.3 Continuity with Part 1

Paths EN/PT e Twine como em [Part1/documentation/group/GlobalReport.md](../../../Part1/documentation/group/GlobalReport.md) §4 e §5.3.

---

## 3. Tools and technologies


| Tool             | Role                                                                                            |
| ---------------- | ----------------------------------------------------------------------------------------------- |
| axe / WAVE       | Accessibility audits baseline vs improved; exports in `reports/` or `Part2/artefacts/reports/`. |
| Lighthouse (lab) | Accessibility score, performance, LCP/INP/CLS; note machine, throttling, URL.                   |
| Twine 2          | Existing stories; HW steps link to them.                                                        |
| Hugo + Doks      | New workshop pages on the site.                                                                 |
| Git              | History; ship prompts or short notes next to PDFs/images when useful.                           |


---

## 4. Documentation site

Live site from Part 1: [https://tecaa-isep.netlify.app/](https://tecaa-isep.netlify.app/)

Part 2 adds the HW section (home, prerequisites, steps with Twine, questionnaire) and edits to the guides for accessibility and performance. §4.1 fills in with real paths as we ship.

### 4.1 Requirements traceability matrix (initial)


| Requirement                                | Where                                           | Evidence                 |
| ------------------------------------------ | ----------------------------------------------- | ------------------------ |
| HW home + image                            | §4, Hugo                                        | —                        |
| Prerequisites + slides                     | §4, `Part2/artefacts/hw/selected/presentation/` | —                        |
| Steps + Twine                              | §1.3, `static/stories/`                         | —                        |
| Questionnaire page + CSV                   | §5.3, `Part2/artefacts/data/`                   | —                        |
| Accessibility / performance (two versions) | §6, individual reports                          | tool exports in the repo |


---

## 5. Hands-on workshop materials

Brief §2.2.1: everyone produces their own motivational image and their own PDF first; the group votes after that.

### 5.1 Motivational image — selection process

What we rank on:

1. Fits the xAPI workshop and how the site already looks.
2. Readable as a web hero and on a print-style mockup (poster/mug).
3. Contrast: do not rely on washed-out colour alone for important information.
4. Traceability: ship a `prompts.md` or equivalent with the candidate.
5. File size: not heavier than the layout needs.

How:

1. Drop your candidate under `Part2/artefacts/hw/ai-images/<Sx>/` and mockups under `mockups/<Sx>/` — layout in `[Part2/artefacts/hw/README.md](../../artefacts/hw/README.md)`.
2. S2 checks all four are on default branch, opens one issue “Vote: HW motivational image” with links.
3. Everyone posts a ranked ballot in the comments (1 = best); ties go to S1.
4. Winner copied to `Part2/artefacts/hw/selected/motivational/`; close the issue with a short decision note.

**Outcome:** not done yet — waiting for all four candidates on main.

### 5.2 Presentation document — selection process

What we rank on:

1. Clear English for a masters-level room.
2. Mayer’s principles visible in the deck (coherence, signalling, segmenting, careful redundancy).
3. Matches HW goals and the Part 1 xAPI theme.
4. Length fits a 50–60 minute slot — brief §2.2.1.4.
5. Two AI tools compared per person, prompts differ across people; the group PDF is one coherent deck, not unrelated slides glued together.

How: same rhythm as §5.1; S2 opens “Vote: HW presentation PDF”; S1 breaks ties on deck quality; winning PDF in `Part2/artefacts/hw/selected/presentation/`.

**Outcome:** not done yet — waiting for all four PDFs on main.

### 5.3 Questionnaire definition

Questionnaire = opinions. Whether people actually finished tasks comes from logs, completion counts, Twine/LRS traces where that applies — brief §2.2.1.2. Full wording, site page, and `Part2/artefacts/data/hw_results.csv` land when the instrument exists; then update this section with issue ids and the path.

---

## 6. Goal Question Metric approach

Goal 1: workshop effectiveness and satisfaction. Goal 2: accessibility and performance. The table is the plan we agreed on; numbers go in once we have workshop data and Lighthouse/axe runs.

### 6.1 Plan

#### Goal 1 — Evaluate HW effectiveness and participant satisfaction


| ID   | Question                    | Metric                               | Scale / values                                | Tool(s)                                                                         | Threshold / success rule                                                | Evidence location                                                |
| ---- | --------------------------- | ------------------------------------ | --------------------------------------------- | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Q1.1 | Technical tasks completed?  | Completion rate + per-task checklist | % finishing core tasks; 0/1 per critical step | Questionnaire; LRS counts for agreed verbs; Twine path; optional screen capture | ≥75% on all core **or** short written excuse (time box, instructor log) | Individual GQM Goal 1; `Part2/artefacts/data/*.csv`; LRS exports |
| Q1.2 | Instructor/support quality? | Likert mean/median                   | 1–5                                           | Questionnaire                                                                   | Median ≥4 on the main support item **or** qualitative note if it misses | Same CSV + workshop notes in §6.2                                |


#### Goal 2 — Ensure compliance and inclusive UX (accessibility / performance)


| ID   | Question                  | Metric                                                  | Scale / values                   | Tool(s)                             | Threshold / success rule                                                     | Evidence location                                           |
| ---- | ------------------------- | ------------------------------------------------------- | -------------------------------- | ----------------------------------- | ---------------------------------------------------------------------------- | ----------------------------------------------------------- |
| Q2.1 | Accessibility compliance? | Serious/critical counts from axe or similar; WCAG 2.2 A | Count + pass/fail on A           | axe, WAVE, Lighthouse accessibility | Improved build: 0 critical; A satisfied (AA if we get there)                 | `Part2/artefacts/reports/`, member folders; statements §1.3 |
| Q2.2 | UX performance?           | LCP, INP, CLS; Lighthouse performance score             | ms / score; baseline vs improved | Lighthouse, same profile every time | Improved wins on ≥2 of 3 CWV **or** performance score +8 on the same profile | Same; lab setup described in each individual report         |


Notes:

- Goal 2: write down machine, throttling, network, cache, run order so someone else can repeat it — brief §2.1.1.2.  
- Goal 1: cross-check questionnaire answers with logs/completion when that data exists.

### 6.2 Summary of findings

Empty until we have workshop data and the individual write-ups.

### 6.3 Goal achievement analysis

Empty until close-out: what worked, what did not, priorities, link back to §6.1 thresholds.

---

## 7. Conclusion

Empty until the end of Part 2.

---

## References

- [ProjectStatementPt2.md](../ProjectStatementPt2.md)  
- [Part1 global report](../../../Part1/documentation/group/GlobalReport.md)  
- WCAG 2.2: [https://www.w3.org/TR/WCAG22/](https://www.w3.org/TR/WCAG22/)  
- Web Vitals: [https://web.dev/articles/vitals](https://web.dev/articles/vitals)

---

## Appendix — Evidence index (repository paths)


| Artefact            | Path                                                                  |
| ------------------- | --------------------------------------------------------------------- |
| HW AI images        | `Part2/artefacts/hw/ai-images/S1/` … `S4/`                            |
| HW mockups          | `Part2/artefacts/hw/mockups/S1/` … `S4/`                              |
| HW presentations    | `Part2/artefacts/hw/presentations/S1/` … `S4/`                        |
| Selected after vote | `Part2/artefacts/hw/selected/motivational/`, `selected/presentation/` |
| Questionnaire CSV   | `Part2/artefacts/data/hw_results.csv`                                 |
| Tool reports        | `Part2/artefacts/reports/`                                            |
| This report         | `Part2/documentation/group/GlobalReport.md`                           |


