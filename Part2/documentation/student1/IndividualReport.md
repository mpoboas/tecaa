# Project (Second Part) - Individual Report

## Metadata

- Course: Master in Informatics Engineering - 2025/2026
- Unit: TECAA
- Part: Project (Second Part)
- Report Type: Individual Report
- Student Name: Student 1
- Student ID: 1223344
- Group ID: Group X
- Repository Name: `TECAA20252026_Group X`
- Date: `\today`

## Revision History

| Version | Date       | Author    | Description                       |
| ------- | ---------- | --------- | --------------------------------- |
| 1       | 2026-05-05 | Student 1 | Initial version                   |
| 2       | 2026-05-12 | Student 1 | Extended analysis and GQM updates |

## Integrity statement

I hereby declare that I conducted this academic work with integrity. I have not plagiarised or applied any form of undue use of information or falsification of results along the process leading to its elaboration.

Therefore, the work presented in this document is original and authored by me, unless clearly stated otherwise. It has not previously been used for any other end.

I further declare that I have fully acknowledged the Code of Ethical Conduct of P.PORTO.

ISEP, `\today`

## Introduction

_This report covers the artefacts and analysis under my responsibility, focusing on the technical improvements (accessibility and performance) and my specific contributions to the Hands-on Workshop (HW) and AI materials. See the global report for the consolidated GQM plan and group-wide decisions._

### Use of AI-generated content

_[Clearly identify each AI system used. Specify which parts of your individual work involved AI-generated content (e.g., images, text generation, code assistance) and briefly explain the manner and extent to which each AI system contributed.]_

### Assigned scope (traceability)

**Assigned Hugo pages (Accessibility/Performance):** `/content/en/docs/<topic>/`  
**Workshop Component (HW items 1-4):** `<e.g., Item 3: Steps for the HW>`  
**AI Materials generated:** `<Path to assets in repo>`  
**Related issues:** #43, #51  
**Key commits:** `a1b2c3`, `d4e5f6`  
**Cross-ref:** Global report - Work distribution (RACI) and Ownership map.

## Technical Quality (Accessibility & Performance)

### Individual part: Baseline and Improvements

_Describe the baseline state of your assigned pages regarding accessibility (WCAG compliance, screen reader support, `tagpdf`) and performance (Core Web Vitals, load times). Detail the specific technical improvements you implemented and justify your decisions._

| Issue Found (Baseline)             | Improvement Implemented                           | Evidence (Commit/URL) |
| ---------------------------------- | ------------------------------------------------- | --------------------- |
| Missing ARIA labels on navigation  | Added `aria-label` attributes                     | `a1b2c3`              |
| Low contrast on text elements      | Updated CSS variables to meet WCAG AA             | `d4e5f6`              |
| Poor LCP score due to heavy images | Converted images to WebP and applied lazy loading | `778899`              |

### GQM approach (Goal 2)

_Description of the measurement plan for your individual responsibility regarding Goal 2 (Technical Quality). Inform the metrics used, their baseline values versus improved values, and provide a partial response to questions Q2.1 and Q2.2. This analysis serves as evidence for the aggregated summary in the global report. Explicitly mention the tool report(s) (e.g., Lighthouse, WAVE) stored in the repository._

## Hands-on Workshop and AI Materials

### Workshop Contributions

_Describe your specific role in preparing and executing the Hands-on Workshop. This may include drafting the presentation, formatting the standalone Twine story steps, creating the questionnaire, or managing the live session dynamics._

**_Self-Assessment of Standards:_** _Briefly confirm how the HW pages under your responsibility (e.g., the "Steps" page or "Prerequisites") comply with the structural and functional standards established in Part 1._

### Methodological reflection (AI and Mayer's Principles)

_Detail your methodological reflection regarding the generative AI tools you used. Critically analyze the AI-generated content (e.g., promotional assets, presentation slides) and justify how you applied or verified Mayer's Principles of Multimedia Learning (e.g., Coherence, Signaling, Spatial Contiguity) to ensure pedagogical effectiveness._

### GQM approach (Goal 1)

_Description of the measurement plan for your individual responsibility regarding Goal 1 (Workshop Effectiveness). Inform the metrics used, the data collected from the workshop participants (e.g., questionnaire results, task completion rates), and provide a partial response to questions Q1.1 and Q1.2._

## Other issues

_Show, with concrete examples, how you followed group conventions and ensured auditability._

- **Commit messages:** show 1-2 commit IDs that follow the template and reference Part 2 issues.
- **Naming/structure:** point to your folder and file names (e.g., for AI materials or accessibility reports) that meet the conventions.
- **Individual Reporting:** ensure your specific `stats.pdf` or data CSVs are properly placed in the repository.

## Conclusions

_Briefly summarise the main conclusions from each of your analysis chapters, based only on the evidence you gathered. Reflect on the process, the challenges of improving accessibility and performance, your experience with AI generation, and what may have impacted your analysis._

## References

- Bibliography style in LaTeX version: `ACM-Reference-Format`
- Bibliography source in LaTeX version: `ref.bib`
