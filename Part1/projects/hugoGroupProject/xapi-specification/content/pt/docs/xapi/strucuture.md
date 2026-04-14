---
title: "Estrutura Principal"
description: "Uma análise do modelo de declarações xAPI, campos obrigatórios, exemplos em JSON e regras de validação."
slug: "structure"
summary: ""
date: 2026-03-30T00:00:00Z
lastmod: 2026-03-30T00:00:00Z
draft: false
weight: 20
toc: true
---

## Visão Geral

A especificação xAPI define um **formato estruturado para registar eventos de aprendizagem**, conhecidos como declarações (statements).

Cada declaração deve seguir um modelo consistente para garantir que diferentes sistemas conseguem **interpretar e trocar dados de forma fiável**.

Esta página foca-se na **estrutura principal e nos elementos obrigatórios** das declarações xAPI.

---

## Modelo de Declaração

Uma declaração xAPI representa uma interação de aprendizagem única e baseia-se num modelo conceptual simples:

> **Ator – Verbo – Objeto**

Este modelo descreve:

- **Quem** realizou a ação
- **Qual** a ação realizada
- **Sobre o que** foi realizada a ação

Apesar de o modelo ser simples, foi desenhado para ser estendido com dados adicionais quando necessário.

---

## Campos Obrigatórios

### Ator (Actor)

O **ator** identifica a entidade que realizou a ação.

Pode representar:

- Um utilizador individual
- Um grupo de utilizadores

O ator deve ser unicamente identificável para que os registos de aprendizagem possam ser corretamente associados a uma entidade específica.

---

### Verbo (Verb)

O **verbo** define a ação realizada pelo ator.

Exemplos de ações incluem:

- `completou` (completed)
- `começou` (started)
- `respondeu` (answered)

Para evitar ambiguidades, os verbos não são apenas texto simples. Estão associados a **identificadores únicos**, garantindo que o seu significado se mantém consistente entre sistemas.

---

### Objeto (Object)

O **objeto** representa o alvo da ação.

Pode referir-se a:

- Um curso
- Uma avaliação
- Uma atividade de aprendizagem

O objeto fornece contexto sobre **a que a ação se refere**.

---

### Versão (Version)

O campo **versão** especifica qual a versão da especificação xAPI que foi usada para gerar a declaração.

Isto é importante para:

- Garantir compatibilidade entre sistemas
- Suportar futuras atualizações à especificação

---

## Exemplos em JSON

### Exemplo de Declaração Válida

```json
{
  "actor": {
    "name": "Guilherme",
    "mbox": "mailto:guilherme@example.com"
  },
  "verb": {
    "id": "http://example.com/verbs/completed",
    "display": { "en": "completed", "pt-PT": "completou" }
  },
  "object": {
    "id": "http://example.com/activities/course",
    "definition": {
      "name": { "en": "Example Course", "pt-PT": "Curso de Exemplo" }
    }
  },
  "version": "1.0.3"
}
```

### Exemplo de Declaração Inválida

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

Problemas neste exemplo:

- Falta o campo `verb` (verbo)
- O ator não está identificado de forma única
- Falta o campo `version` (versão)

---

## Regras de Validação

Para estarem em conformidade com a especificação xAPI, as declarações devem seguir um conjunto de regras de validação:

- Todos os **campos obrigatórios devem estar presentes**
- Cada campo deve seguir a **estrutura e o tipo de dados** corretos
- Os identificadores devem ser **válidos e formatados de forma consistente**
- As declarações devem ser **completas o suficiente para serem interpretadas** sem ambiguidades

Se estas condições não forem cumpridas, a declaração pode ser rejeitada ou ignorada pelo sistema recetor.

---

## Módulo Interativo

Segue-se um pequeno percurso interativo dos conceitos desta página.

<iframe src="/stories/xapi-structure/index.html" width="100%" height="600px" frameborder="0" style="border: 1px solid #ccc; border-radius: 8px;"></iframe>