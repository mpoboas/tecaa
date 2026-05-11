# TECAA — Group 101

Course project for **TECAA** (Mestrado em Engenharia Informática, [ISEP](https://www.isep.ipp.pt/) — 2025/26). This repo is mainly our **Part 1** submission: a small bilingual documentation site about **xAPI** (Experience API), plus Twine stories that send statements to an LRS without exposing credentials in the browser.

**Live site (Part 1):** [tecaa-isep.netlify.app](https://tecaa-isep.netlify.app/)

There is a `Part2/` folder in the tree for the second half of the unit; we have not finished that work yet, so treat anything under `Part2/` as early or placeholder material unless we say otherwise.

---

## What we actually built (Part 1)

We picked **theme 1** from the assignment brief: the xAPI specification angle — core mechanics, statement shape, optional fields, validation, and how it fits next to things like SCORM. The public site is static (Hugo), with **English and Portuguese** content where we own pages.

Each of us also shipped a **standalone Twine** story (exported HTML) under `static/stories/`. The stories talk to an LRS through a **Netlify Function** that runs server-side; the real endpoint and Basic auth live in environment variables, not in the Twine bundle.

Written deliverables (global + individual reports, GQM tables, tool outputs) sit under `Part1/documentation/`. If you are grading or reviewing the coursework, that folder is probably what you want alongside the code.

---

## Repo layout (short)

| Path | What it is |
|------|------------|
| `Part1/projects/hugoGroupProject/xapi-specification/` | The Hugo site: content, theme wiring, `netlify/functions/xapi-statement.mjs`, Twine exports in `static/stories/` |
| `Part1/documentation/group/` | Global report for the group |
| `Part1/documentation/<Name><Number>/` | Individual reports and evidence (CSV, PDFs, screenshots) per student |
| `Part1/documentation/ProjectStatement.md` | Official brief from the course |
| `Part2/` | Reserved for Part 2 — not complete |

---

## Running the site locally

From `Part1/projects/hugoGroupProject/xapi-specification/`:

1. Install dependencies: `npm install`
2. Copy `.env.example` to `.env` and fill in the LRS variables (we use [lrs.io](https://lrs.io/home) for development).
3. For a normal content preview you can use `hugo server` (or `hugo build`).

If you need **xAPI statements to reach the LRS** (Twine → proxy → LRS), run **`netlify dev`** from the same folder so Hugo and the function run together. Plain `hugo server` will not serve `/.netlify/functions/xapi-statement`.

Pinned versions for CI-style builds are in `netlify.toml` (Hugo, Node, etc.).

---

## Who worked on this

Group **101**, Part 1:

- Guilherme Melo  
- Miguel Póvoas  
- Samuel Pinto  
- Vicente Teixeira  

---

## License and reuse

This is **coursework**. Do not assume you can reuse reports or submissions as-is for your own assignments. The Hugo theme stack and tools we depend on have their own licenses; check upstream projects if you are copying build setup.

If something in the README drifts from the repo (URLs, paths), the **global report** in `Part1/documentation/group/GlobalReport.md` is the place we try to keep aligned with reality.
