---
title: "Optional Fields"
description: "How and when to use Result, Context, Timestamp, and Authority to enrich xAPI statements without losing clarity."
slug: "optional-fields"
summary: ""
date: 2026-04-07T00:00:00Z
lastmod: 2026-04-07T00:00:00Z
draft: false
weight: 30
toc: true
---

## Overview

After the base structure (**Actor - Verb - Object**), optional fields are what add depth to xAPI.

This page focuses on explaining **when it makes sense to use** each common optional field:

- `result`
- `context`
- `timestamp`
- `authority`

> If you have not reviewed the model basics yet, see [**Fundamentals**]({{< relref "fundamentals" >}}) and [**Core Structure**]({{< relref "structure" >}}).

---

## Why Optional Fields Matter

Optional fields are not there to "fill" a statement. They should be used when they help answer specific questions, such as:

- Did the learner succeed?
- In which module or activity did this happen?
- When exactly did it happen?
- Who registered the event?

The practical rule is simple: **include only what improves interpretation and analysis**.

---

## 1) Result

The `result` field describes the **outcome of the action**.

Typical example:

```json
{
  "result": {
    "score": { "raw": 85 },
    "success": true
  }
}
```

### When to use

- Quizzes and tests
- Scored assessments
- Activities with binary completion outcomes (pass/fail)

### When to avoid

- Interactions with no evaluation (for example, opening a resource or navigating to another page)

---

## 2) Context

The `context` field explains the **context of the action**: which course, module, session, or learning path it belongs to.

Simplified example:

```json
{
  "context": {
    "contextActivities": {
      "parent": [{ "id": "https://example.org/course/module-2" }]
    }
  }
}
```

### When to use

- When the same activity appears in multiple modules
- When you need to link events to a course, unit, or mission
- When your dashboard groups data by context

### When to avoid

- In isolated events where the object is already self-explanatory

---

## 3) Timestamp

`timestamp` indicates **when the event happened**.

Example:

```json
{
  "timestamp": "2026-04-07T14:35:20Z"
}
```

### When to use

- Almost always
- Event ordering and learning sequence analysis
- Duration analysis, usage peaks, and timeline reconstruction

Without `timestamp`, temporal precision is reduced and analysis becomes weaker.

---

## 4) Authority

`authority` identifies **who registered the statement** (usually a system, service, or authorized agent).

Example:

```json
{
  "authority": {
    "name": "Twine Tracking Service",
    "mbox": "mailto:tracker@example.org"
  }
}
```

### When to use

- Integrations with multiple data sources
- Environments where event-origin auditing is important
- Scenarios with proxy or middleware-based statement delivery

### When to avoid

- Simple flows where the LRS already controls origin clearly

---

## Full Example

```json
{
  "actor": {
    "name": "Student 3",
    "mbox": "mailto:student3@example.org"
  },
  "verb": {
    "id": "http://adlnet.gov/expapi/verbs/completed",
    "display": { "en": "completed" }
  },
  "object": {
    "id": "https://example.org/activities/final-quiz"
  },
  "result": {
    "score": { "raw": 85 },
    "success": true
  },
  "context": {
    "contextActivities": {
      "parent": [{ "id": "https://example.org/course/module-2" }]
    }
  },
  "timestamp": "2026-04-07T14:35:20Z",
  "authority": {
    "name": "Twine Tracking Service",
    "mbox": "mailto:tracker@example.org"
  },
  "version": "1.0.3"
}
```

---

## Interactive module

Use the standalone interactive story below to explore when to include optional fields while generating xAPI events.

<iframe title="xAPI Optional Fields interactive module" src="/stories/xapi-optional/" width="100%" height="720" loading="lazy" style="display:block;max-width:100%;min-height:32rem;border:1px solid var(--bs-border-color, #dee2e6);border-radius:0.375rem"></iframe>

[Open the module in a full tab](/stories/xapi-optional/) if you prefer.
