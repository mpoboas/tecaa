# Project (Second Part) — Individual Report

## TECAA

Master in Informatics Engineering — 2025/2026  
Porto, May 12, 2026

**Student:** Miguel Póvoas (1201716)  
**Group:** 101  
**Repository:** `TECAA20252026_101`

Version 3, 2026-05-12

---

## Revision History

| Revision | Date       | Author        | Description                                      |
| -------- | ---------- | ------------- | ------------------------------------------------ |
| 1        | 2026-05-12 | Miguel Póvoas | Activity 1 HW artefacts, AI methodology, traceability |
| 2        | 2026-05-12 | Miguel Póvoas | Gamma / ChatGPT / Gemini prompts and tool attribution |
| 3        | 2026-05-12 | Miguel Póvoas | GQM plan aligned verbatim with global report §6 |

---

## Contents

1. Introduction  
   1.1 Use of AI-generated content  
   1.2 Assigned scope (traceability)
2. Technical quality (accessibility and performance)  
   2.1 Baseline and improvements  
   2.2 Goal Question Metric approach
3. Hands-on workshop and AI materials  
   3.1 Workshop contributions  
   3.2 Motivational image pipeline  
   3.3 AI presentation (two tools)  
   3.4 Mayer’s principles and limitations
4. Other issues
5. Conclusions  
   References

---

## Integrity statement

I hereby declare that I conducted this academic work with integrity. I have not plagiarised or applied any form of undue use of information or falsification of results along the process leading to its elaboration.

The work presented in this document is original and authored by me, unless clearly stated otherwise. It has not previously been used for any other end.

I further declare that I have fully acknowledged the Code of Ethical Conduct of P.PORTO.

ISEP, May 12, 2026

---

# 1. Introduction

This report covers Part 2 work under my responsibility: the hands-on workshop (HW) promotional and presentation artefacts delivered in Activity 1, traceability for those assets, and the measurement plan for my assigned Hugo pages and Twine story. Accessibility, performance baselines, workshop runtime data, and Goal 1/2 numeric results are scheduled for Activities 2–3; this revision documents what is already in the repository and how it was produced.

The group plan, RACI, and GQM thresholds live in [`../group/GlobalReport.md`](../group/GlobalReport.md).

## 1.1 Use of AI-generated content

| AI system | Parts of the work | Manner and extent |
| --------- | ----------------- | ----------------- |
| **Gamma** | [`xAPI-in-Action.pdf`](../../artefacts/hw/presentations/S1/xAPI-in-Action.pdf) — narrative-flow workshop deck | I pasted the English prompt in §3.3.1; Gamma generated the slide deck from the problem→concept→demo→practice→reflection brief. I reviewed technical claims (site URL, proxy, story paths), adjusted wording where needed, and exported the PDF committed under `presentations/S1/`. |
| **ChatGPT** | [`presentation2.json`](../../artefacts/hw/presentations/S1/presentation2.json) — strict 12-slide JSON + appendix | I used the JSON-only prompt in §3.3.2. ChatGPT returned the slide array with two Mayer tags per slide; I kept link placeholders and slide 8 aligned with `/stories/xapi-structure/`. The appendix (risks, assumptions, pre-delivery checks) was part of the same prompt; it is not stored as a separate file in the repo. |
| **Google Gemini** (image generation, one chat thread) | Base graphic in `ai-images/S1/`; bus-stop and highway mockups in `mockups/S1/` | Three prompts in sequence (§3.2): hero artwork, then billboard, then bus-stop poster. I kept outputs that stayed legible at poster scale and dropped weak variants before commit. |
| **Cursor** | This report and path cross-checks | Assisted drafting and repository path verification; I reviewed every claim against committed files and commits. |

Metric values, Lighthouse/axe exports, questionnaire CSV rows, and workshop conclusions are not claimed here until the corresponding runs and session data exist.

## 1.2 Assigned scope (traceability)

**Owned Hugo pages (baseline vs improved — Activity 2):**

- English: [`../../../Part1/projects/hugoGroupProject/xapi-specification/content/en/docs/xapi/fundamentals.md`](../../../Part1/projects/hugoGroupProject/xapi-specification/content/en/docs/xapi/fundamentals.md)
- Portuguese: [`../../../Part1/projects/hugoGroupProject/xapi-specification/content/pt/docs/xapi/fundamentals.md`](../../../Part1/projects/hugoGroupProject/xapi-specification/content/pt/docs/xapi/fundamentals.md)
- Published: `/docs/xapi/fundamentals/`, `/pt/docs/xapi/fundamentals/` on https://tecaa-isep.netlify.app/

**Twine story (Part 1, referenced in workshop deck):**  
[`../../../Part1/projects/hugoGroupProject/xapi-specification/static/stories/xapi-fundamentals/index.html`](../../../Part1/projects/hugoGroupProject/xapi-specification/static/stories/xapi-fundamentals/index.html) — public URL https://tecaa-isep.netlify.app/stories/xapi-fundamentals/

**Accessibility statement (Part 2):** `Part2/documentation/MiguelPovoas1201716/accessibility-statement.md` — to be added with Activity 2 tool runs.

**Activity 1 HW artefacts (S1):**

| Asset | Repository path |
| ----- | ---------------- |
| Motivational / final graphic | [`../../artefacts/hw/ai-images/S1/Gemini_Generated_Image_6xter76xter76xte.png`](../../artefacts/hw/ai-images/S1/Gemini_Generated_Image_6xter76xter76xte.png) |
| Mockup — bus-stop poster | [`../../artefacts/hw/mockups/S1/Gemini_Generated_Image_d10fvpd10fvpd10f.png`](../../artefacts/hw/mockups/S1/Gemini_Generated_Image_d10fvpd10fvpd10f.png) |
| Mockup — highway billboard | [`../../artefacts/hw/mockups/S1/Gemini_Generated_Image_vbdxbbvbdxbbvbdx.png`](../../artefacts/hw/mockups/S1/Gemini_Generated_Image_vbdxbbvbdxbbvbdx.png) |
| Presentation PDF (Gamma) | [`../../artefacts/hw/presentations/S1/xAPI-in-Action.pdf`](../../artefacts/hw/presentations/S1/xAPI-in-Action.pdf) |
| Presentation JSON (ChatGPT) | [`../../artefacts/hw/presentations/S1/presentation2.json`](../../artefacts/hw/presentations/S1/presentation2.json) |

**Related issues:** #24 (AI presentations), #25 (promotional images and mockups)

**Key commits (verify with `git show <hash>`):**

| Issue | Summary | Commit hash |
| ----- | ------- | ----------- |
| #24 | First AI presentation (PDF + artefact layout) | `53374aa` |
| #24 | Second AI presentation (JSON) | `d76ad38` |
| #25 | Promotional images and mockups | `b0121f1` |

**Cross-reference:** Global report §1.2–1.3 ([`../group/GlobalReport.md`](../group/GlobalReport.md)). I am S1: accountable for the Part 2 GQM plan and issue conventions; responsible for fundamentals accessibility/performance; consulted on Hugo workshop wiring (S3 responsible).

---

# 2. Technical quality (accessibility and performance)

## 2.1 Baseline and improvements

Not measured in this revision. Activity 2 will capture baseline and improved versions of my fundamentals pages (EN + PT) using axe/WAVE and Lighthouse in a documented lab profile, per §2.2 Goal 2 (Q2.1, Q2.2).

| Issue found (baseline) | Improvement implemented | Evidence |
| ---------------------- | ------------------------ | -------- |
| *Pending Activity 2* | *Pending Activity 2* | `Part2/artefacts/reports/` and/or `reports/` under this folder |

## 2.2 Goal Question Metric approach

Authoritative group plan: [`../group/GlobalReport.md`](../group/GlobalReport.md) §6. The subsections below reproduce that section verbatim.

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

# 3. Hands-on workshop and AI materials

## 3.1 Workshop contributions

For Activity 1 my deliverables are the **motivational image set** (graphic + mockups) and **candidate English presentation** (PDF plus JSON companion), stored under `Part2/artefacts/hw/` for the group vote described in Global report §5.1–5.2.

I am not responsible for editing the global report (S4) or Hugo workshop pages (S3); I support GQM wording and issue hygiene as accountable owner in the RACI table.

**Standards (Part 1):** The deck points participants to the live bilingual site, the fundamentals guide, the structure Twine story (`/stories/xapi-structure/`), and validation docs — consistent with Part 1 ownership and the Netlify xAPI proxy (no LRS secrets in the client). Full HW site pages (main, prerequisites, steps, questionnaire) are still to be wired in Hugo.

## 3.2 Motivational image pipeline

**Intent:** Campaign-style artwork for the xAPI hands-on workshop — central xAPI hub with learning data flowing in, readable as a web hero or outdoor poster, with a small “WORKSHOP” wordmark.

**Process:** All three images came from **one Gemini chat**, in order: base hero, highway billboard mockup, bus-stop poster mockup. The base PNG is the candidate final graphic; the mockups check legibility at print/outdoor scale.

**Prompt 1 — base graphic (committed as `ai-images/S1/Gemini_Generated_Image_6xter76xter76xte.png`):**

```text
Professional illustration for a university workshop poster: abstract learning analytics theme, stylized data flowing into a central node labeled “xAPI”, minimal geometric shapes, navy and teal palette, plenty of whitespace, no text except optional small “WORKSHOP” wordmark, flat vector style, 16:9, high contrast for web hero banner
```

**Prompt 2 — highway billboard mockup (`mockups/S1/Gemini_Generated_Image_vbdxbbvbdxbbvbdx.png`):**

```text
Put it in a giang billboard on a busy highway
```

**Prompt 3 — bus-stop mockup (`mockups/S1/Gemini_Generated_Image_d10fvpd10fvpd10f.png`):**

```text
Put it in a bus stop promotional poster
```

**Outcome:** Three PNG files under `ai-images/S1/` and `mockups/S1/` (see §1.2). Group vote on the motivational image was still open when this report was written.

## 3.3 AI presentation (two tools)

**Topic:** English 50–60 minute hands-on workshop on xAPI fundamentals, site navigation, statement anatomy, optional fields, validation/IRIs, live send via our Netlify proxy, LRS verification, common failures, and client-side credential hygiene — aligned with our Part 1 Hugo site and Twine stories.

### 3.3.1 Tool A — Gamma → `xAPI-in-Action.pdf`

**Prompt (verbatim):**

```text
You are an instructional designer creating a workshop presentation.
Output in English only.

Context: We are MSc Informatics Engineering students at ISEP. We built a bilingual Hugo/Thulite documentation site about xAPI (Experience API), deployed on Netlify at https://tecaa-isep.netlify.app/. The site covers four topics: Fundamentals, Core Structure, Optional Fields, and Validation & IRIs. Each section has a companion Twine interactive story at /stories/xapi-*/. Statements are sent to a test LRS via a Netlify serverless function proxy (no API credentials exposed in the browser).

Task: Generate a NARRATIVE-FLOW slide deck (story arc: problem → concept → demo → practice → reflection) for a 50–60 minute hands-on workshop for MSc peers. The deck serves as the introductory presentation before participants follow the step-by-step workshop page on our site.

Audience: MSc students in informatics; mixed prior knowledge of xAPI; some have never sent an xAPI statement.

Learning objectives:
1. State in one sentence what xAPI is and why statements matter for modern e-learning.
2. Identify the three mandatory components of a statement (Actor–Verb–Object) and the role of the LRS.
3. Navigate the site sections and choose the correct Twine story for their assigned task.
4. Send one xAPI statement via the proxy and confirm it appears in the test LRS UI.
5. Recognise at least two common failure modes (network error, malformed IRI) and how to recover.

Deliverables:
A) Narrative outline: section headings with a one-line story beat per section.
B) Slide-by-slide plan: title + max 4 bullets (max 10 words each) + a "visual idea" field (one sentence describing what image or diagram belongs on the slide).
C) Speaker notes per slide: 2–3 short sentences with timing hints (total ~50–60 min including hands-on).
D) Mayer checklist: for every slide, cite exactly one of Mayer's principles (coherence, signaling, segmenting, redundancy, spatial contiguity, temporal contiguity, modality, personalisation, pre-training, voice) and one sentence justifying the choice.
E) Limitations section: three things that could confuse participants, two things to verify live before May 12, one thing explicitly out of scope.

Constraints:
- Narrative arc must be explicit: label each slide with its story-beat role (hook / build / turn / payoff / coda).
- Max 14 slides total.
- No filler quotes; no frameworks unrelated to xAPI or Mayer.
- Do not claim security guarantees beyond: proxy hides credentials, env vars on Netlify.
```

Gamma produced the deck; I exported [`xAPI-in-Action.pdf`](../../artefacts/hw/presentations/S1/xAPI-in-Action.pdf) after checking URLs, proxy wording, and story references against the live site.

### 3.3.2 Tool B — ChatGPT → `presentation2.json`

**Prompt (verbatim):**

```text
English only. Strict JSON output first, then a short appendix.

You are producing machine-readable slide content for an xAPI hands-on workshop presentation.

Site context: Hugo/Thulite bilingual docs at https://tecaa-isep.netlify.app/ covering xAPI Fundamentals, Core Structure, Optional Fields, Validation & IRIs. Twine stories at /stories/xapi-*/. Statements sent via Netlify proxy function (no secrets in client).

Output a JSON array of exactly 12 slide objects. Each object must have these keys:
{
  "id": integer,
  "title": string (max 8 words),
  "bullets": array of 3–4 strings (max 12 words each),
  "speaker_notes": string (2 sentences, include timing hint in seconds),
  "visual_idea": string (one sentence),
  "mayer_principles": array of exactly 2 strings from: ["coherence","signaling","segmenting","redundancy","spatial_contiguity","temporal_contiguity","modality","personalisation","pre-training","voice"]
}

Required slides (include all):
- Slide 1: "What is xAPI?" — definition, why statements matter
- Slide with id 5: "Actor – Verb – Object" — mandatory components only
- Slide with id 8: "Sending a Statement via Proxy" — step-by-step, reference /stories/xapi-structure/
- Slide with id 10: "Common Failures" — exactly 4 bullets: malformed IRI, wrong endpoint, CORS block, LRS UI delay
- Slide with id 11: "Lab Safety — No Secrets in Client" — proxy pattern explanation
- Slide with id 12: "Next Steps + Links" — bullets must be placeholders like "[LINK: prerequisites page]"

Remaining slides: distribute content covering site navigation, optional fields overview, LRS verification steps, and Q&A.

After the JSON, add an appendix (plain text, max 20 lines) covering:
1. Three risks specific to a live demo environment.
2. Two assumptions made about participant setup.
3. What to test before delivery on May 12.
4. One Mayer principle you found hardest to apply in JSON format and why.

No markdown formatting outside the appendix. No prose before the JSON array.
```

Committed output: [`presentation2.json`](../../artefacts/hw/presentations/S1/presentation2.json) (12 slides, two Mayer tags per slide).

### 3.3.3 Comparison

| Aspect | Gamma (PDF) | ChatGPT (JSON) |
| ------ | ----------- | -------------- |
| Strength | Narrative arc, speaker timing, story-beat labels, facilitator-ready deck | Machine-readable, diffable, fixed slide ids and required titles for demo/LRS/safety slides |
| Weakness | Less convenient to version-control slide text outside Gamma | Appendix not committed separately; link placeholders still need Hugo paths at publish time |
| Mayer | One principle + justification per slide in the Gamma deliverable spec | Two principles per slide in JSON fields |
| My edits | Technical accuracy pass before PDF export | Kept proxy/story references; placeholders on slide 12 for prerequisites and docs links |

Neither output was used without review; claims were checked against https://tecaa-isep.netlify.app/ and Part 1 security notes.

## 3.4 Mayer’s principles and limitations

In **Gamma**, the prompt required one Mayer principle and justification per slide in the deck deliverable. In **`presentation2.json`**, each slide lists **two** principles (e.g. slide 8: temporal contiguity + segmenting for the proxy walkthrough; slide 11: personalisation + coherence for lab safety).

**Limitations:** Models invent plausible but wrong IRI examples and LRS UI steps; Gamma timing is approximate until rehearsed; JSON `visual_idea` fields are descriptions only; Gemini mockups may add decorative QR/registration text; large PNGs may need compression before Hugo hero use (performance, Activity 2). The ChatGPT appendix (live-demo risks, participant assumptions, May 12 checks) was not committed as its own file.

---

# 4. Other issues

- **Commit messages:** `#24` and `#25` prefixes on commits `53374aa`, `d76ad38`, `b0121f1` (see §1.2).
- **Naming/structure:** S1 folders under `Part2/artefacts/hw/{ai-images,mockups,presentations}/S1/` per [`../../artefacts/hw/README.md`](../../artefacts/hw/README.md).
- **Reporting:** This file lives at `Part2/documentation/MiguelPovoas1201716/IndividualReport.md`; Activity 2 adds `accessibility-statement.md` and tool reports under `Part2/artefacts/reports/` or a local `reports/` folder as needed.

---

# 5. Conclusions

Activity 1 for my scope is the committed HW promotional assets (Gemini) and dual-tool presentation package (**Gamma** PDF + **ChatGPT** JSON), with prompts recorded in §3.2–3.3 and paths traceable to issues #24 and #25. Accessibility, performance, Hugo HW pages, group votes, and Goal 1/2 measurements are the next tranche of work; this report does not state baseline or workshop scores until those artefacts exist.

---

## References

- Part 2 project statement: [`../ProjectStatementPt2.md`](../ProjectStatementPt2.md)
- Part 2 global report: [`../group/GlobalReport.md`](../group/GlobalReport.md)
- Part 1 individual report (fundamentals + Twine): [`../../../Part1/documentation/MiguelPovoas1201716/IndividualReport_MiguelPovoas1201716.md`](../../../Part1/documentation/MiguelPovoas1201716/IndividualReport_MiguelPovoas1201716.md)
- Mayer, R. E. — multimedia learning principles (as applied in slide design notes)
- WCAG 2.2: https://www.w3.org/TR/WCAG22/
- Web Vitals: https://web.dev/articles/vitals
