---
title: "Fundamentals"
description: "Core concepts of the xAPI specification, its purpose, and how it compares to SCORM."
slug: "fundamentals"
summary: ""
date: 2026-03-24T22:36:00Z
lastmod: 2026-03-30T22:00:00Z
draft: false
weight: 10
toc: true
---

## Overview

The Experience API (xAPI) is a learning technology specification that enables the **collection, storage, and sharing of learning experiences** across multiple systems and environments.

It extends traditional eLearning tracking by allowing organisations to capture learning activities that occur **both online and offline**, inside and outside Learning Management Systems (LMSs).

---

## What is xAPI?

xAPI (Experience API) is an **IEEE-approved standard (IEEE 9274.1.1-2023)** designed to record and exchange data about learning experiences in a consistent, interoperable format.

It allows systems to securely communicate by sharing information about a person's or group's learning activities using a simple and flexible structure.

xAPI supports a wide range of learning scenarios, including:

- Mobile learning
- Simulations and serious games
- Real-world activities
- Social and collaborative learning
- Offline learning

This flexibility makes it suitable for modern, distributed learning environments.

---

## Core Concepts

### Statements

xAPI records learning activities using **statements**, which are structured data objects that describe a learning event. Every statement follows a simple grammatical format:

> **Actor – Verb – Object**

| Component  | Description              | Example                      |
| :--------- | :----------------------- | :--------------------------- |
| **Actor**  | Who performed the action | `"Miguel"`                   |
| **Verb**   | The action performed     | `"completed"`                |
| **Object** | The target of the action | `"xAPI Fundamentals course"` |

Together these components produce a human-readable record such as:

> *"Miguel completed the xAPI Fundamentals course."*

Statements can also carry additional structured data such as scores, timestamps, and contextual information to provide a richer picture of the learning event.

> 📄 For a detailed breakdown of all mandatory and optional statement fields, see [**Core Structure**]({{< relref "structure" >}}).

---

### Learning Record Store (LRS)

The **Learning Record Store (LRS)** is the system responsible for receiving, storing, and providing access to xAPI statements.

An LRS can:

- Operate independently of any LMS
- Be embedded within an existing LMS
- Forward or share data with other LRS systems

This enables interoperability and data portability across platforms.

---

## How xAPI Works

xAPI captures learning events through a simple but reliable workflow:

```
[Learning Activity]
       │
       ▼
[Application generates xAPI Statement]
       │  Actor – Verb – Object
       ▼
[Statement sent to LRS]
       │  (securely, via HTTP)
       ▼
[LRS stores and makes data available]
```

1. A user performs a learning activity
2. The application generates an xAPI statement describing it
3. The statement is securely sent to an LRS
4. The LRS stores it and makes it available for analysis and reporting

This process allows learning data to be collected continuously, regardless of where or how the activity takes place.

---

## Key Features and Benefits

### Flexibility

xAPI allows tracking of **custom learning experiences** using a simple and adaptable statement structure. Activities from any environment, whether a classroom, a game, or a mobile app, can be captured using the same format.

### Interoperability

Systems can exchange data using shared standardised formats, enabling **integration across different platforms and technologies**.

> 📄 For details on how IRIs and identifiers ensure interoperability, see [**Validation & IRIs**]({{< relref "validation" >}}).

### Tracking Beyond the LMS

Learning is not confined to LMS-based courses. xAPI natively supports:

- Informal and social learning
- Real-world performance tasks
- Offline activities with deferred data sync

### Device Independence

xAPI works across multiple devices and environments:

- Mobile phones and tablets
- Web applications and desktop software
- Simulators, games, and VR environments

A constant internet connection is **not required**. Data can be stored locally and synchronised when connectivity is restored.

### Data Portability

Learning records can be shared between LRS systems, allowing learner data to move across organisations and platforms without loss of fidelity.

---

## xAPI vs. SCORM

SCORM is a widely adopted eLearning standard focused on LMS-based content delivery. While effective for its era, it has significant limitations in modern, distributed learning environments.

| Feature | SCORM | xAPI |
|:--------|:-----:|:----:|
| Track completion | ✔ | ✔ |
| Track time | ✔ | ✔ |
| Track pass/fail | ✔ | ✔ |
| Report a single score | ✔ | ✔ |
| Report multiple scores | | ✔ |
| Detailed test results | | ✔ |
| No LMS required | | ✔ |
| No internet browser required | | ✔ |
| Keep complete control over your content | | ✔ |
| No cross-domain limitation | | ✔ |
| Use mobile apps for learning | | ✔ |
| Platform transition (i.e. computer to mobile) | | ✔ |
| Track serious games | | ✔ |
| Track simulations | | ✔ |
| Track informal learning | | ✔ |
| Track real-world performance | | ✔ |
| Track offline learning | | ✔ |
| Track interactive learning | | ✔ |
| Track adaptive learning | | ✔ |
| Track blended learning | | ✔ |
| Track long-term learning | | ✔ |
| Track team-based learning | | ✔ |

xAPI expands on SCORM by enabling **broader, more detailed tracking of learning experiences** across different contexts, while removing the dependency on a browser-based LMS environment.