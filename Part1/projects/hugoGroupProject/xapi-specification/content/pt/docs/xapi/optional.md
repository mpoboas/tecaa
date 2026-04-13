---
title: "Campos Opcionais"
description: "Quando e por que usar result, context, timestamp e authority para enriquecer declarações xAPI com dados úteis para análise."
slug: "optional-fields"
summary: ""
date: 2026-04-13T00:00:00Z
lastmod: 2026-04-13T00:00:00Z
draft: false
weight: 30
toc: true
---

## Visão geral

Depois da estrutura base (**Ator - Verbo - Objeto**), os campos opcionais são o que dá profundidade às declarações xAPI.

Nesta página, o foco é explicar **quando faz sentido usar** os campos opcionais mais comuns:

- `result`
- `context`
- `timestamp`
- `authority`

> Se ainda não viste os conceitos base, consulta [**Fundamentos**]({{< relref "fundamentals" >}}) e [**Estrutura Principal**]({{< relref "strucuture" >}}).

---

## Porque os campos opcionais importam

Campos opcionais não existem para "encher" declarações. Devem ser usados quando ajudam a responder a perguntas concretas, como:

- O formando teve sucesso?
- Em que módulo ou percurso ocorreu a ação?
- Quando aconteceu exatamente?
- Quem registou o evento?

A regra prática é simples: **incluir apenas o que melhora a interpretação e a análise**.

---

## 1) Resultado (Result)

O campo `result` descreve o **resultado da ação**.

Exemplo típico:

```json
{
  "result": {
    "score": { "raw": 85 },
    "success": true
  }
}
```

### Quando usar

- Quizzes e testes
- Avaliações com pontuação
- Atividades com resultado binário (aprovado/reprovado)

### Quando evitar

- Interações sem avaliação (por exemplo, abrir um recurso ou navegar entre páginas)

---

## 2) Contexto (Context)

O campo `context` explica o **contexto da ação**: em que curso, módulo, sessão ou percurso de aprendizagem ela se insere.

Exemplo simplificado:

```json
{
  "context": {
    "contextActivities": {
      "parent": [{ "id": "https://example.org/course/module-2" }]
    }
  }
}
```

### Quando usar

- Quando a mesma atividade aparece em vários módulos
- Quando precisas de ligar eventos a curso, unidade ou missão
- Quando o dashboard agrupa dados por contexto

### Quando evitar

- Em eventos isolados em que o objeto já é autoexplicativo

---

## 3) Carimbo de hora (Timestamp)

`timestamp` indica **quando o evento aconteceu**.

Exemplo:

```json
{
  "timestamp": "2026-04-07T14:35:20Z"
}
```

### Quando usar

- Quase sempre
- Ordenação de eventos e análise de sequência de aprendizagem
- Análise de duração, picos de utilização e reconstrução de timeline

Sem `timestamp`, a precisão temporal diminui e a análise perde qualidade.

---

## 4) Autoridade (Authority)

`authority` identifica **quem registou a declaração** (normalmente um sistema, serviço ou agente autorizado).

Exemplo:

```json
{
  "authority": {
    "name": "Twine Tracking Service",
    "mbox": "mailto:tracker@example.org"
  }
}
```

### Quando usar

- Integrações com múltiplas fontes de dados
- Ambientes em que auditoria da origem dos eventos é importante
- Cenários com proxy ou middleware a enviar declarações

### Quando evitar

- Fluxos simples em que o LRS já controla claramente a origem

---

## Integração com Twine

Num cenário interativo em Twine, o próprio jogador pode decidir que nível de detalhe quer registar.

Exemplo de decisões no jogo:

- "Queres guardar score?"
- "Queres guardar contexto?"

Com base nessas escolhas, o sistema monta a declaração com mais ou menos campos opcionais.

Isto ajuda a perceber, na prática, como a presença (ou ausência) de `result` e `context` altera a qualidade analítica dos dados recolhidos.

---

## Perspetiva GQM

Uma forma simples de avaliar se os campos opcionais estão a ser bem usados é aplicar GQM:

- **Goal**: garantir uso correto dos campos opcionais
- **Question**: os utilizadores/sistemas usam os campos quando fazem sentido?
- **Metric**: número (ou percentagem) de declarações com uso correto de cada campo

Este enquadramento liga a implementação técnica a objetivos de qualidade de dados.

---

## Exemplo completo

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
