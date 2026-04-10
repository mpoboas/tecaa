---
title: "Fundamentos"
description: "Conceitos centrais da especificação xAPI, o seu propósito e a comparação com o SCORM: registo de experiências de aprendizagem em múltiplos sistemas."
slug: "fundamentals"
summary: ""
date: 2026-03-24T22:36:00Z
lastmod: 2026-04-10T12:00:00Z
draft: false
weight: 10
toc: true
---

## Visão geral

A Experience API (xAPI) é uma especificação de tecnologia de aprendizagem que permite a **recolha, armazenamento e partilha de experiências de aprendizagem** entre vários sistemas e ambientes.

Estende o acompanhamento tradicional de eLearning ao permitir que as organizações registem atividades de aprendizagem que ocorrem **tanto em linha como fora de linha**, dentro e fora dos sistemas de gestão de aprendizagem (LMS).

---

## O que é o xAPI?

O xAPI (Experience API) é um **padrão aprovado pelo IEEE (IEEE 9274.1.1-2023)** concebido para registar e trocar dados sobre experiências de aprendizagem num formato consistente e interoperável.

Permite que os sistemas comuniquem de forma segura, partilhando informação sobre as atividades de aprendizagem de uma pessoa ou grupo através de uma estrutura simples e flexível.

O xAPI suporta um vasto leque de cenários de aprendizagem, incluindo:

- Aprendizagem móvel
- Simulações e jogos sérios
- Atividades no mundo real
- Aprendizagem social e colaborativa
- Aprendizagem offline

Esta flexibilidade torna-o adequado a ambientes de aprendizagem modernos e distribuídos.

---

## Conceitos centrais

### Declarações (statements)

O xAPI regista atividades de aprendizagem através de **declarações (_statements_)**, que são objetos de dados estruturados que descrevem um evento de aprendizagem. Cada declaração segue um formato gramatical simples:

> **Ator – Verbo – Objeto**

| Componente | Descrição            | Exemplo                       |
| :--------- | :------------------- | :---------------------------- |
| **Ator**   | Quem realizou a ação | `"Miguel"`                    |
| **Verbo**  | A ação realizada     | `"concluiu"`                  |
| **Objeto** | O alvo da ação       | `"Curso de fundamentos xAPI"` |

Em conjunto, estes componentes produzem um registo legível por humanos, tal como:

> _"Miguel concluiu o curso de fundamentos xAPI."_

As declarações podem ainda transportar dados estruturados adicionais, como pontuações, carimbos de data/hora e informação contextual, para oferecer uma visão mais rica do evento de aprendizagem.

> 📄 Para uma descrição detalhada de todos os campos obrigatórios e opcionais das declarações, consulte [**Estrutura principal**](/docs/xapi/structure/) (documentação em inglês).

---

### Learning Record Store (LRS)

O **Learning Record Store (LRS)** é o sistema responsável por receber, armazenar e disponibilizar o acesso às declarações xAPI.

Um LRS pode:

- Funcionar de forma independente de qualquer LMS
- Estar integrado num LMS existente
- Encaminhar ou partilhar dados com outros sistemas LRS

Isto permite interoperabilidade e portabilidade de dados entre plataformas.

---

## Como funciona o xAPI

O xAPI regista eventos de aprendizagem através de um fluxo de trabalho simples mas fiável:

```
[Atividade de aprendizagem]
       │
       ▼
[Aplicação gera declaração xAPI]
       │  Ator – Verbo – Objeto
       ▼
[Declaração enviada ao LRS]
       │  (de forma segura, via HTTP)
       ▼
[LRS armazena e disponibiliza os dados]
```

1. O utilizador realiza uma atividade de aprendizagem
2. A aplicação gera uma declaração xAPI que a descreve
3. A declaração é enviada de forma segura para um LRS
4. O LRS armazena-a e disponibiliza-a para análise e relatórios

Este processo permite que os dados de aprendizagem sejam recolhidos de forma contínua, independentemente do local ou da forma como a atividade ocorre.

---

## Funcionalidades e benefícios principais

### Flexibilidade

O xAPI permite acompanhar **experiências de aprendizagem personalizadas** com uma estrutura de declarações simples e adaptável. Atividades de qualquer ambiente — sala de aula, jogo ou aplicação móvel — podem ser registadas no mesmo formato.

### Interoperabilidade

Os sistemas podem trocar dados com formatos normalizados partilhados, permitindo a **integração entre diferentes plataformas e tecnologias**.

> 📄 Para detalhes sobre como os IRIs e os identificadores garantem a interoperabilidade, consulte [**Validação e IRIs**](/docs/xapi/validation/) (documentação em inglês).

### Acompanhamento para além do LMS

A aprendizagem não se limita a cursos baseados em LMS. O xAPI suporta nativamente:

- Aprendizagem informal e social
- Tarefas de desempenho no mundo real
- Atividades offline com sincronização diferida dos dados

### Independência de dispositivo

O xAPI funciona em vários dispositivos e ambientes:

- Telemóveis e tablets
- Aplicações Web e software de secretária
- Simuladores, jogos e ambientes de realidade virtual

Uma ligação à Internet **permanente não é obrigatória**. Os dados podem ser armazenados localmente e sincronizados quando a conectividade for restabelecida.

### Portabilidade dos dados

Os registos de aprendizagem podem ser partilhados entre sistemas LRS, permitindo que os dados dos formandos transitem entre organizações e plataformas sem perda de fidelidade.

---

## xAPI vs. SCORM

O SCORM é um padrão de eLearning amplamente adotado, focado na distribuição de conteúdo via LMS. Embora eficaz para a sua época, apresenta limitações significativas em ambientes de aprendizagem modernos e distribuídos.

| Funcionalidade                                           | SCORM | xAPI |
| :------------------------------------------------------- | :---: | :--: |
| Acompanhar conclusão                                     |   ✔   |  ✔   |
| Acompanhar tempo                                         |   ✔   |  ✔   |
| Acompanhar aprovação/reprovação                          |   ✔   |  ✔   |
| Reportar uma única pontuação                             |   ✔   |  ✔   |
| Reportar várias pontuações                               |       |  ✔   |
| Resultados detalhados de testes                          |       |  ✔   |
| Sem necessidade de LMS                                   |       |  ✔   |
| Sem necessidade de navegador Web                         |       |  ✔   |
| Controlo total sobre o seu conteúdo                      |       |  ✔   |
| Sem limitação entre domínios                             |       |  ✔   |
| Utilizar aplicações móveis para aprender                 |       |  ✔   |
| Transição de plataforma (ex.: computador para telemóvel) |       |  ✔   |
| Acompanhar jogos sérios                                  |       |  ✔   |
| Acompanhar simulações                                    |       |  ✔   |
| Acompanhar aprendizagem informal                         |       |  ✔   |
| Acompanhar desempenho no mundo real                      |       |  ✔   |
| Acompanhar aprendizagem offline                          |       |  ✔   |
| Acompanhar aprendizagem interativa                       |       |  ✔   |
| Acompanhar aprendizagem adaptativa                       |       |  ✔   |
| Acompanhar aprendizagem mista (_blended_)                |       |  ✔   |
| Acompanhar aprendizagem de longo prazo                   |       |  ✔   |
| Acompanhar aprendizagem em equipa                        |       |  ✔   |

O xAPI alarga o SCORM ao permitir um **acompanhamento mais amplo e detalhado das experiências de aprendizagem** em diferentes contextos, eliminando a dependência de um ambiente LMS baseado exclusivamente no navegador.

---

## Módulo interativo

Segue-se um pequeno percurso interativo dos conceitos desta página.

<iframe title="Módulo interativo xAPI Fundamentals" src="/stories/xapi-fundamentals/" width="100%" height="720" loading="lazy" style="display:block;max-width:100%;min-height:32rem;border:1px solid var(--bs-border-color, #dee2e6);border-radius:0.375rem"></iframe>

[Abrir o módulo num separador completo](/stories/xapi-fundamentals/) se preferir.

