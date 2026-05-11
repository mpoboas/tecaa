---
title: "Validação e IRIs"
description: "Regras de validação, critérios de qualidade de IRI e verificações práticas para manter declarações xAPI interoperáveis."
slug: "validation"
summary: ""
date: 2026-04-10T00:00:00Z
lastmod: 2026-04-10T00:00:00Z
draft: false
weight: 40
toc: true
---

## Visão geral

A validação garante que as declarações xAPI estão corretas do ponto de vista sintático e também fazem sentido do ponto de vista semântico.
Na prática, isto significa que os campos obrigatórios estão presentes, que os IRIs estão bem formados e que as declarações podem ser interpretadas sem ambiguidade por sistemas externos.

---

## Objetivos da validação

O processo de validação procura atingir quatro objetivos de qualidade:

- **Completude**: os campos obrigatórios existem (`actor`, `verb`, `object`, `version`)
- **Conformidade**: os valores seguem a forma e o tipo esperados
- **Interoperabilidade**: IRIs e identificadores são estáveis e globalmente únicos
- **Auditabilidade**: as declarações transportam contexto suficiente para suportar análise

---

## Verificações obrigatórias

### 1) Presença dos campos base

Cada declaração deve incluir:

- `actor`: identifica de forma única o formando ou grupo
- `verb`: identificador da ação e etiqueta legível por humanos
- `object`: identificador da atividade
- `version`: versão da especificação usada para produzir a declaração

A ausência de qualquer um destes campos torna a declaração inadequada para processamento fiável entre sistemas.

### 2) Verificações de tipo e estrutura

A validação deve rejeitar valores malformados, como:

- formato `mbox` inválido em `actor`
- ausência de `id` em `verb` ou `object`
- fragmentos de payload não conformes com JSON

### 3) Verificações de qualidade de IRI

Os IRIs devem ser:

- **absolutos** (não caminhos relativos)
- **estáveis** (mesmo significado ao longo do tempo)
- **específicos** (propriedade e intenção claras)
- **consistentes** (mesmo estilo de nomenclatura entre histórias/páginas)

---

## Exemplos de IRI forte vs fraco

| Tipo | Melhor prática | Prática fraca | Porque importa |
| :--- | :------------- | :------------ | :------------- |
| IRI de verbo | `http://adlnet.gov/expapi/verbs/completed` | `completed` | Consistência semântica global |
| IRI de atividade | `https://tecca-group.example/xapi/validation/story` | `story1` | Rastreabilidade entre sistemas |
| IRI de contexto | `https://tecca-group.example/xapi/module/validation` | `/module/1` | Estabilidade e portabilidade |

---

## Checklist prática para este projeto

Use esta checklist antes de publicar conteúdo que produz declarações:

1. Confirmar que todos os campos obrigatórios existem (`actor`, `verb`, `object`, `version`).
2. Confirmar que os identificadores do ator são válidos e suficientemente únicos para rastreabilidade.
3. Confirmar que os IDs de verbo e objeto são IRIs válidos.
4. Confirmar que os carimbos temporais existem e estão em formato ISO-8601 válido.
5. Confirmar que os campos opcionais só são incluídos quando melhoram a clareza da análise.
6. Confirmar que as declarações podem ser interpretadas sem ambiguidade por sistemas externos.

---

## Exemplo de declaração validada

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

Esta declaração cumpre os campos obrigatórios, usa semântica de verbo globalmente interpretável e inclui dados de resultado úteis para analytics.

---

## Módulo interativo

Use o módulo interativo autónomo abaixo para rever decisões de validação e de IRI enquanto são gerados eventos xAPI.

<iframe title="Módulo interativo xAPI Validation" src="/stories/xapi-validation/" width="100%" height="720" loading="lazy" style="display:block;max-width:100%;min-height:32rem;border:1px solid var(--bs-border-color, #dee2e6);border-radius:0.375rem"></iframe>

[Abrir o módulo num separador completo](/stories/xapi-validation/) se preferir.
