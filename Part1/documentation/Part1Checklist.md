### Group part

| Criterion | To Check |
| :--- | :--- |
| **Work Distribution & Auditability** | (1) Team identification table (name, student #, GitHub handle)<br>(2) RACI overview completed<br>(3) Ownership map for documentation site and stories<br>(4) Key commits + issue references listed and verifiable |
| **General Conventions & Repository Discipline** | (1) Commit message conventions defined and followed; commits reference issues - mandatory<br>(2) Agreed folder/file naming conventions applied consistently (including individual report naming: NameNumber)<br>(3) Reports maintained in text-friendly formats (e.g., LaTeX/Markdown) with history in git<br>(4) Evidence of complete and coherent group tasks in the repository |
| **Documentation Site Compliance (Hugo)** | (1) Theme selection process documented; prohibited usage of Docsy<br>(2) Bilingual policy enforced (Hugo docs EN/PT) and link checks reported<br>(3) Public deployment on server/CDN with live URL<br>(4) Requirements Traceability Matrix (RTM) centralizes project requirements with evidence links |
| **GQM (Group Plan & Aggregation)** | (1) Goal(s) with key characteristics and justified thresholds<br>(2) Questions tied to metrics intended to answer EACH question<br>(3) Aggregated summary of findings from individual analyses<br>(4) Goal achievement analysis with critical discussion |
| **LRS Security Architecture (Group)** | (1) Server-side proxy (or equivalent) for xAPI; no direct client calls to LRS<br>(2) No client-side exposure of LRS endpoint/credentials<br>(3) Evidence stored in repo (sanitized HAR files; static searches)<br>(4) Security guidelines and decisions documented in the global report |
| **Integrity & Use of AI-Generated Content (Group)** | (1) Integrity statement present and Identific used - mandatory<br>(2) Section lists AI systems used (if any)<br>(3) Specifies which parts involved AI-generated content<br>(4) Briefly explains the extent and manner of AI contribution |

---

### Individual part

| Criterion | To Check |
| :--- | :--- |
| **Individual GQM Analysis (within assigned scope)** | (1) States Goal and related Questions for the artefacts under individual responsibility<br>(2) Defines Metrics with scale/thresholds and documents the collection procedure (**with tool reports**)<br>(3) Presents metric values with verifiable repository evidence<br>(4) Provides partial answers to Questions grounded on collected values |
| **Twine Story – xAPI Tracking** | (1) Standalone HTML opens directly in the browser (public URL)<br>(2) xAPI statements include initialized/launched and experienced/responded events<br>(3) Final completion statement includes result (score, success, duration)<br>(4) Story statistics PDF and other relevant evidence stored in the repository |
| **Twine Story – LRS Security (no client-side exposure)** | (1) No exposure of LRS endpoint/credentials in client-side code<br>(2) Server-side proxy (or equivalent) mediates xAPI requests<br>(3) Runtime evidence provided (sanitized HAR capture during full run)<br>(4) Static source evidence provided (search/grep patterns for secrets/endpoint) |
| **Documentation Pages – Characteristics & Adequacy** | (1) Information architecture and content of owned pages are described<br>(2) Bilingual compliance is met where applicable (Hugo docs EN/PT; Twine in EN)<br>(3) Alignment with group conventions (naming, links, menus, breadcrumbs)<br>(4) Explicit references to tools/reports used for link checks or similar |
| **Traceability & Ownership** | (1) Assigned scope declared (folders/pages/stories)<br>(2) Related issues listed and cross-referenced in commits<br>(3) Key commits identified (introduce pages; wire Twine story)<br>(4) Cross‑reference to global RACI/Ownership map is correct |
| **Integrity & Use of AI-Generated Content** | (1) Integrity statement present and Identific used - mandatory<br>(2) Section lists AI systems used (if any)<br>(3) Specifies which parts involved AI-generated content<br>(4) Briefly explains the extent and manner of AI contribution |