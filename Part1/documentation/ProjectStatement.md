# Project (First Part)
## TECAA
### Master in Informatics Engineering - 2025/2026
**Instituto Superior de Engenharia do Porto (isep)**
**Porto, March 16, 2026**
**Isabel Azevedo (IFP)**
**Version 3**
**INFORMÁTICA**

---

## Revision History

| Revision | Date | Author(s) | Description |
| :--- | :--- | :--- | :--- |
| 1 | 2026-03-06 | ifp | Initial version |
| 2 | 2026-03-08 | ifp | More details |
| 3 | 2026-03-16 | ifp | Last review |

---

## Contents

| | |
| :--- | :--- |
| List of Figures | V |
| 1 Introduction | 1 |
| 2 Project Description | 3 |
| 2.1 Business Context | 3 |
| 2.1.1 General requirements | 4 |
| 2.1.2 Goal Question Metric approach | 5 |
| 2.2 Academic context | 7 |
| 2.2.1 Hugo theme selection | 7 |
| 2.2.2 Twine story | 7 |
| 2.2.3 Artefacts in the repository | 8 |
| 3 Suggested process | 11 |
| 4 Terms and conditions | 13 |
| 4.1 Feedback and guidance | 13 |
| 4.2 Submission | 13 |
| 4.3 Evaluation | 14 |
| 4.3.1 Grade: group component | 14 |
| 4.3.2 Grade: individual component | 15 |
| References | 17 |

---

## 1 Introduction

The project is formative and summative, and it is up to the students to ask for feedback.

It has two parts:
1. 1st part-60% of final TECAA classification. Group work with individual evaluation.
2. 2nd part-40% of final TECAA classification. Group work with individual evaluation.

The groups must have up to four elements from the same laboratory class. All groups must be approved by the lab teacher.

---

## 2 Project Description

This chapter establishes the context and motivation for the first phase of the TECAA project. The following sections detail the business environment (2.1) and the corresponding academic framework (2.2).

### 2.1 Business Context

The scenario involves a software development company specialised in static websites. Having successfully integrated the Hugo generator [3] into their workflow, the company is now expanding its services into the E-learning sector. Due to increasing client demand for data-driven learning solutions, specifically regarding xAPI and Learning Record Stores (LRS), the company has initiated a professional development program. Not all employees understand Portuguese, and English is often used. Consider that they completed high school and that most of them are software engineers.

To upscale the technical expertise of its workforce, four development teams were tasked with creating specialised documentation websites. Within these teams, each person is responsible for a specific part, which could include several related pages, but not exclusively support pages. All individual parts must integrate a Twine story available as a full, independent HTML document intended to be opened directly in a browser. These sites serve as a technical knowledge base for employees, covering four critical domains of the xAPI ecosystem:

1. **The xAPI Specification: Core Mechanics and Compliance**
Focuses on the normative aspects of the standard. It covers mandatory fields (Actor, Verb, Object, Version) and optional ones (Result, Context, Authority, Timestamp), the use of unique IRIs, and validation rules.

2. **The Statement Architect: Mastering JSON Structures**
Delves into the technical syntax and data types. It explores xAPI Profiles, nested structures, and how to accurately document learner progress using the result object.

3. **LRS Infrastructure, Security, and Connectivity**
Addresses the system as a whole. It documents the secure connection between learning content and the LRS, including mandatory headers, handshaking protocols (to verify identity and version compatibility), and LRS HTTP error codes.

4. **Data to Decisions: Learning Analytics and Visualisation**
Focuses on the output layer. It describes how to use LRS data to generate dashboards and insights that support business and pedagogical decision-making.

Each subject will be worked on exclusively by one team and the theme chosen by my team is 1, all other themes should be ignored from now on. A degree of thematic overlap is expected and encouraged to ensure a cohesive understanding of the ecosystem. The Twine story must use the xAPI specification to track activities.

#### 2.1.1 General requirements

Every documentation website must adhere to a specific set of technical and functional standards, as summarised in Table 2.1.

**Table 2.1: Technical and Functional Project Requirements**

| Feature | Requirement Description |
| :--- | :--- |
| Deployment | Hosting on any Web Server or Content Delivery Network (CDN), publicly available. |
| Security | Mandatory use of server-side logic to prevent the exposure of LRS credentials and the LRS Endpoint in the client-side code. |
| Integration | Inclusion of a functional Twine story, exported to work as a standalone web component, integrated with the xAPI tracking layer. |
| Language | Hugo documentation should be bilingual, but the content of Twine stories should be in English. |

This initiative ensures that every developer in the company possesses the necessary skills to implement secure, scalable, and standards-compliant learning analytics. It should help company employees, as any developer must have these skills. The site can be hosted as described in Table 2.1. All documentation websites must include some stories previously developed in Twine and prepared to work without it, but not showing credentials when sending xAPI statements to an LRS. Each person must develop a specific part and have a story published on a page, as explained.

#### 2.1.2 Goal Question Metric approach

The measurements must be goal-oriented, using the Goal Question Metric (GQM) approach. Provisory Goals were already set:

* **Goal 1:** Analyse the Hugo documentation site for the purpose of evaluation and improvement with respect to its structural and functional quality from the viewpoint of developers in the context of a future company-wide adoption of xAPI and LRS.
* **Goal 2:** Analyse the standalone Twine learning story web component for the purpose of evaluation and improvement with respect to its security (credential and endpoint protection), xAPI tracking functioning, structural quality, and narrative consistency from the viewpoint of instructional designers and developers in the context of tracking learner progress via an external Learning Record Store (LRS) for future usage.

Tables 2.2 and 2.3 provide some questions and metrics for, respectively, Goal 1 and Goal 2. They are start points to be changed as necessary. In addition, refine the metrics specifying their scale type, possible values and their meaning (how to interpret them), and the tool(s) to collect values. The procedure to obtain values must be documented, using tools or not. If you have several pages to consult, you might need to aggregate values from them using allowed operations or select some parts for your analysis.

**Table 2.2: GQM Metrics for the Hugo Documentation Site**

| GQM Question (Operational) | Proposed Metric (Quantitative) |
| :--- | :--- |
| Is the documentation professionally written (Grammar/Style) with proper voice/tone and care to reduce cognitive load? | Count of spelling/grammar errors, Compliance score (%) against Microsoft/Google style guides, ... - *to be detailed by the team* |
| Is the site organised for easy navigation to specific document parts? | Number of clicks to reach the X guide/concept, Presence of a logical Table of Contents, ... - *to be detailed by the team* |
| Are descriptions accurate? | Count of technical errors found ... - *to be detailed by the team* |
| Does the guide include all necessary information for X? | Checklist of required components - *to be detailed by the team* |
| Does the documentation enable a successful and rapid action Y? | Time to Y (TTHW) - *to be detailed by the team* |
| Are machine-readable labels and metadata used, breadcrumbs or other mechanisms that facilitate search and navigation? | ... - *to be detailed by the team* |

**Table 2.3: GQM Metrics for the Twine Web Component**

| GQM Question (Operational) | Proposed Metric (Quantitative) |
| :--- | :--- |
| Are the LRS credentials and the LRS endpoint protected from exposure in the web component? | Binary (Yes/No): Are ... - *to be detailed by the team* |
| Are learner interactions correctly recorded and sent to the LRS? | Percentage of successful xAPI statements validated against the LRS log during a test session... - *to be detailed by the team* |
| Is the narrative voice consistent and adequate for the users' education level? | Flesch-Kincaid grade level and qualitative assessment of instructional tone... - *to be detailed by the team* |
| Is the story flow logical and free of navigation errors? | Count of "dead-end" passages and average time spent per branch... - *to be detailed by the team* |

---

### 2.2 Academic context

The team must develop and analyse the documentation website on several criteria (structural and functional quality). Each person must be responsible for a story and a single Web page in language(s) that matter for their users, gather the metric values respecting the GQM plan, and answer the questions for their part.

The group can detail the fictional business context if the requirements are considered underspecified. When choosing any tool, students should consider the conditions for its use, knowing that they may have to show how it was used. Therefore, tools with a limited period of use cannot be chosen, e.g., 14-day free trials of proprietary analytics software. Thus, consider the need for use until the end of the semester.

The group must communicate their decision on the subject for their work by email to the lab teacher. The acceptance, or rejection, will be indicated in the same way. Topic assignments will be made according to the order of requests.

#### 2.2.1 Hugo theme selection

Docsy theme was used in the first weeks and is not allowed to be used in the project. The selection of a theme for the Hugo static site generator must follow a process documented in the group report. Contributors for the theme selection must be specified in the group documentation.

#### 2.2.2 Twine story

The story must have some characteristics. For its narrative and structural quality, these points matter:
* **Branching Logic:** Unlike a linear document, the story must utilise Twine's core strength: non-linear navigation. It should include decision points that lead to different passages based on user input.
* **State Management:** Use Twine variables (e.g., $score, $visitedPassages) to track learner progress internally before sending that data to the xAPI layer.
* **Clear Completion State:** The story must have a defined "End" passage where a final "completed" xAPI statement is triggered.

The xAPI Tracking Layer acts as a bridge between the Twine engine and the LRS with these statement triggers:
* **Initialization:** Sends an "initialized" or "launched" statement when the story first loads.
* **Interactions:** Sends "experienced" or "responded" statements when a user clicks a specific link or makes a choice.
* **Results:** Sends a "scored" or "completed" statement at the end, including the result object (score, success, duration).

Have the story statistics in PDF format (see example at Moodle) and other appropriate files on the team repository. Your story must have more characters, words, passages and links than the one created for a lab class to exemplify the integration with an LRS. You should defend the relevance of your story at the individual report and how it reinforces your part of the documentation website.

#### 2.2.3 Artefacts in the repository

The project is a group assignment. Each group will work in a specific repository. Consider the structure already provided, which can be adapted to the group's needs. Consistency across all artefacts is valued. The group must agree on the format for all documentation that will be produced and folder and file naming conventions to adopt.

Commit the developed artefacts to the team repository. Agree and adopt best practices for the commit messages [1]. Typically, commit messages differentiate between group and individual activities, pure documentation from others, and always mention the related issues. All work must be auditable through the group repository and not through any other tool or application.

Reports generated by tools and scripts for their usage must be included. Images are useful in individual and group reports if properly described and analysed, with references to the tool report in the group repository. However, these images have no value without the respective tool reports.

**Individual and group reports**

Consistency across all artefacts is valued: the group must agree on the format for all documentation that will be produced, not only for the global and individual reports. A global report should describe what matters for all team members, including the work division and generic aspects, even if not suggested in the template.

The individual report must detail the activities of each team member. Its file designation should reflect the student name and number, for instance, AnaMaria1223344. Use the same designation for the individual folder in the group repository.

Report changes must be visible when verifying the commits, so a format such as markdown or latex will be appropriate, and any others that allow the writer to use plain text and markup tagging conventions to define formatting and the general structure of a document. However, before adopting an alternative, check its appropriateness with the lab teacher. For example, docx files for individual or group reports are not allowed since git doesn't allow tracking their changes.

Looking at the git repository, it should be possible to see all the history of changes from each student in all the artefacts, including the individual and group reports. For example, if students use Overleaf to work with LaTeX files, the changes should be committed to the git repository; the history presented in Overleaf is not accepted as proof of changes from the student. Use the LaTeX templates available at Moodle with the opportune amendments or adapt them to other formats that respect the restriction indicated in the previous paragraphs.

---

## 3 Suggested process

The proposed process includes several activities. These can be developed either in parallel or sequentially, approximately once per week. The team should organise and divide the work as appropriate and necessary.

* **Activity 1:**
  * Describe the criteria for the theme and its use with Hugo selection
  * Have the website working locally with temporary content
  * Decide the part of the documentation website that each person will develop and supporting pages
  * State conventions to be followed for global and individual reports and the documentation site
  * Make a division of tasks and accordingly create issues in the group repository, and always reference the appropriate one in commit messages
  * Develop your individual part
  * Delineate a provisional Measurement Plan (MP) using GQM, with attention to how to use the measures to answer the respective questions

* **Activity 2:**
  * Develop your Twine story and make it ready to work as delineated in a public URL, executing a security audit
  * Structural quality: revise the GQM plan and update goals, questions and metrics
  * Functional quality: revise the GQM plan and update goals, questions and metrics

* **Activity 3:**
  * Verify bilingual links and deploy the website, and make visible the documentation site
  * GQM approach for the individual part: finalise and document in the individual report
  * GQM approach for the global part: analyse the Measurement Plan, especially if the goal(s) have the key characteristics, and how to aggregate the metric values to answer the questions. Finalise and document in the global report

These activities must be documented and made visible in the group repository to allow for monitoring and feedback when necessary or requested. Keep both global and individual reports up-to-date over time with multiple commits.

---

## 4 Terms and conditions

### 4.1 Feedback and guidance

It is important to have all group members in lab classes to have guidance and feedback, but others might also support the project. All groups must provide updates on their progress. Gather frequent feedback over several lab classes, not just the ones near submission. Students free from attending classes must comply with all other rules (e.g., deadlines) and provide frequent feedback on their work as previously agreed with the teachers.

### 4.2 Submission

Pay attention to all delivery dates (available at Moodle). The file to submit is obtained from the repository. It is a zip file with all the repository contents. All elements submit this file at Moodle with signed integrity statements.

The use of content generated by artificial intelligence (AI) in the TECAA project (including, but not limited to, texts, figures, images and code) is not prohibited. However, include a section titled "Use of AI-generated content" in the reports to identify the AI systems used and the specific parts using Al-generated content, accompanied by a brief explanation of the level at which the Al system was used to generate the content. Consider the limits for Al-generated text for reports indicated on Moodle. Several other forms of academic malpractice are prohibited.

The link at Moodle allows multiple submissions so that you can detect issues and correct them before the submission in the respective week. It must be used for individual and group final reports BEFORE submitting the work for evaluation at the respective link.

Use the designation of the group repository to name the file to submit, for instance, TECAA20252026_NNN, where NNN is the group number. Complete the report along the weeks in LaTeX or Markdown format. Before submission to Moodle, generate reports in PDF format and maintain them in the repository. PDF documents must include tables of contents, figures, tables, and code extracts, as well as page numbering. Analyse the necessity to update the gitignore file.

### 4.3 Evaluation

The grades can vary for each student since the assessment is individual. Regardless of the division of tasks, every work aspect has to be widely discussed. Thus, all group members need to know what was decided and developed besides all course topics.

However, the commits, with appropriate messages referring to the issue/task, must reflect the work division. Be aware that they impact the grades as the work carried out by each person must be auditable.

The work will be presented and evaluated as stated by the lab teachers, who define the evaluation dates. Students must inform them as soon as possible in case of planned absence.

The grade for this part of the project includes:
* group (25%) and
* individual (75%) components.

#### 4.3.1 Grade: group component

The following aspects are important:
* Coherence and suitability of the artefacts produced,
* Completeness of group tasks documented in the repository, supported by justified decisions and clear evidence of the student's contribution to those tasks, supported by what is available and documented in the repository, as stated in the project description, respecting all rules.

Remember: individual evaluation. All students should be able to answer questions about the project.

#### 4.3.2 Grade: individual component

These points are considered:
* Coherence and suitability of the artefacts produced and completeness of the student's tasks documented in the artefacts in the repository, with justified decisions and respecting all rules
* Knowledge about the course topics applied or discussed in classes until the assessment, which may not be related to the project under evaluation

---

## References

[1] Bolaji Ayodeji. 2019. How to Write Good Commit Messages: Practical Git Guide. https://www.freecodecamp.org/news/writing-good-commit-messages-a-practical-guide/
[2] Google Developers. 2023. Measure performance with the RAIL model. https://web.dev/rail/
[3] Hugo authors. [n. d.]. The world's fastest framework for building websites. https://gohugo.io/
[4] Paul Irish and Paul Lewis. 2015. Introducing RAIL: A User-Centric Model For Performance. https://www.smashingmagazine.com/2015/10/rail-user-centric-model-performance/ Section: General.
[5] Walton. 2022. Web Vitals. https://web.dev/vitals/