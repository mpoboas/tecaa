---
title: "Core Structure"
description: "A breakdown of the xAPI statement model, mandatory fields, JSON examples, and validation rules."
slug: "structure"
summary: ""
date: 2026-03-30T00:00:00Z
lastmod: 2026-03-30T00:00:00Z
draft: false
weight: 20
toc: true
---

## Overview

The xAPI specification defines a **structured format for recording learning events**, known as statements.

Each statement must follow a consistent model to ensure that different systems can **interpret and exchange data reliably**.

This page focuses on the **core structure and required elements** of xAPI statements.

---

## Statement Model

An xAPI statement represents a single learning interaction and is based on a simple conceptual model:

> **Actor – Verb – Object**

This model describes:

- **Who** performed an action
- **What** action was performed
- **On what** the action was performed

Although the model is simple, it is designed to be extended with additional data when needed.

---

## Mandatory Fields

### Actor

The **actor** identifies the entity that performed the action.

It can represent:

- An individual user
- A group of users

The actor must be uniquely identifiable so that learning records can be correctly associated with a specific entity.

---

### Verb

The **verb** defines the action performed by the actor.

Examples of actions include:

- `completed`
- `started`
- `answered`

To avoid ambiguity, verbs are not just plain text. They are associated with **unique identifiers**, ensuring that their meaning remains consistent across systems.

---

### Object

The **object** represents the target of the action.

It can refer to:

- A course
- An assessment
- A learning activity

The object provides context about **what the action relates to**.

---

### Version

The **version** field specifies which version of the xAPI specification was used to generate the statement.

This is important for:

- Ensuring compatibility between systems
- Supporting future updates to the specification

---

## JSON Examples

### Valid Statement Example

```json
{
  "actor": {
    "name": "Guilherme",
    "mbox": "mailto:guilherme@example.com"
  },
  "verb": {
    "id": "http://example.com/verbs/completed",
    "display": { "en": "completed" }
  },
  "object": {
    "id": "http://example.com/activities/course",
    "definition": {
      "name": { "en": "Example Course" }
    }
  },
  "version": "1.0.3"
}
```

### Invalid Statement Example

```json
{
  "actor": {
    "name": "guilherme"
  },
  "object": {
    "id": "http://example.com/activities/course"
  }
}
```

Issues in this example:

- Missing `verb` field
- Actor is not uniquely identified
- Missing `version` field

---

## Validation Rules

To comply with the xAPI specification, statements must follow a set of validation rules:

- All **mandatory fields must be present**
- Each field must follow the correct **structure and data type**
- Identifiers must be **valid and consistently formatted**
- Statements must be **complete enough to be interpreted** without ambiguity


---

## Interactive Module

Below is a short interactive tour of the concepts on this page.

<iframe src="/stories/xapi-structure/index.html" width="100%" height="600px" frameborder="0" style="border: 1px solid #ccc; border-radius: 8px;"></iframe>

