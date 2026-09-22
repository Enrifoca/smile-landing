---
layout: ../../layouts/BlogPost.astro
title: why long running tasks are the real moat for enterprise agents
date: 23 september 2026
description: Enterprise work spans hours, tools, and approvals. Here is how we design agents that keep state across long running workflows.
excerpt: most chatbots answer one question and forget the rest. enterprise work happens across hours, tools, and approvals. here is how we design agents that do not lose the plot.
---

the first wave of AI tools was built for quick answers. ask a question, get a paragraph. that is useful for individuals, but it is rarely how a company works.

real enterprise work stretches across hours, sometimes days. a monthly compliance review pulls data from a CRM, a billing system, and a shared drive. a due diligence report needs cross references, follow up questions, and a final approval before it is sent. these are not chat turns. they are projects.

## state is the hard part

the hardest thing about automating these workflows is not the language model. it is keeping state. an agent that loses context after thirty seconds cannot finish a report. an agent that cannot pause for human approval will make expensive mistakes.

that is why we built smile:D around long running tasks from day one:

- every task has a plan that survives restarts.
- the agent checkpoints progress after each step.
- it stops for approval before writing, saving, or sending anything.
- it can resume later without asking the user to repeat the brief.

## from prompt to process

when we build a custom agent for a client, the first thing we map is not the model. it is the process. what triggers the task? which tools does it touch? who approves the output? where does the final report go?

once the process is clear, we encode it into modules. each module handles one stage: gather, draft, review, approve, deliver. the model is just the engine inside a much larger machine.

## the result

the result is an employee grade agent. it does not hallucinate a report and email it. it produces a draft, waits for a human, and learns from feedback. it runs for as long as the work takes.

that is the difference between a chatbot and a coworker.
