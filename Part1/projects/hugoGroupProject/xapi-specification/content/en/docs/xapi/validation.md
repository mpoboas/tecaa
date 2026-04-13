---
title: "Validation and IRIs"
description: "Validation rules, IRI quality criteria, and practical checks to keep xAPI statements interoperable."
slug: "validation"
summary: ""
date: 2026-04-10T00:00:00Z
lastmod: 2026-04-10T00:00:00Z
draft: false
weight: 40
toc: true
---

## Overview

Validation ensures xAPI statements are both syntactically correct and semantically meaningful.
In practice, this means mandatory fields are present, IRIs are well-formed, and statements can be interpreted without ambiguity by downstream tools.

---

## Validation goals

The validation process targets four quality goals:

- **Completeness**: required fields exist (`actor`, `verb`, `object`, `version`)
- **Conformance**: values follow expected shape and type
- **Interoperability**: IRIs and identifiers are stable and globally unique
- **Auditability**: statements carry enough context to support analysis

---

## Mandatory checks

### 1) Core field presence

Every statement should include:

- `actor`: uniquely identifies the learner or group
- `verb`: action identifier and human-readable label
- `object`: activity identifier
- `version`: specification version used to produce the statement

Missing any of these fields makes the statement unsuitable for reliable cross-system processing.

### 2) Type and structure checks

Validation should reject malformed values such as:

- invalid `mbox` format in `actor`
- missing `id` in `verb` or `object`
- non-JSON-conformant payload fragments

### 3) IRI quality checks

IRIs should be:

- **absolute** (not relative paths)
- **stable** (same meaning over time)
- **specific** (clear ownership and intent)
- **consistent** (same naming style across stories/pages)

---

## Good vs weak IRI examples

| Type | Better practice | Weak practice | Why it matters |
| :--- | :-------------- | :------------ | :------------- |
| Verb IRI | `http://adlnet.gov/expapi/verbs/completed` | `completed` | Global semantic consistency |
| Activity IRI | `https://tecca-group.example/xapi/validation/story` | `story1` | Traceability across systems |
| Context IRI | `https://tecca-group.example/xapi/module/validation` | `/module/1` | Stability and portability |

---

## Practical checklist for this project

Use this checklist before publishing statement-producing content:

1. Confirm all mandatory fields are present (`actor`, `verb`, `object`, `version`).
2. Confirm actor identifiers are valid and unique enough for traceability.
3. Confirm verb and object IDs are valid IRIs.
4. Confirm timestamps are present and in valid ISO-8601 format.
5. Confirm optional fields are only included when they improve analysis clarity.
6. Confirm statements can be interpreted without ambiguity by external systems.

---

## Example validated statement

```json
{
  "actor": {
    "name": "Vicente Teixeira",
    "mbox": "mailto:1210974@isep.ipp.pt"
  },
  "verb": {
    "id": "http://adlnet.gov/expapi/verbs/completed",
    "display": { "en": "completed" }
  },
  "object": {
    "id": "https://tecca-group.example/xapi/validation/story-end"
  },
  "result": {
    "success": true,
    "score": { "raw": 100, "min": 0, "max": 100 }
  },
  "timestamp": "2026-04-10T18:20:00Z",
  "version": "1.0.3"
}
```

This statement satisfies mandatory fields, uses globally interpretable verb semantics, and carries result data needed for analytics.

---

## Interactive module

Use the standalone interactive story below to review validation and IRI decisions while generating xAPI events.

<iframe title="xAPI Validation interactive module" src="/stories/xapi-validation/" width="100%" height="720" loading="lazy" style="display:block;max-width:100%;min-height:32rem;border:1px solid var(--bs-border-color, #dee2e6);border-radius:0.375rem"></iframe>

[Open the module in a full tab](/stories/xapi-validation/) if you prefer.
