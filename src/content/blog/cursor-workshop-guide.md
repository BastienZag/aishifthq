---
title: "How to Run a Cursor Workshop That Actually Changes Developer Habits"
date: "2025-02-05"
excerpt: "Generic AI training doesn't stick. Here's how we run Cursor + Claude Code workshops that turn \"I tried it once\" into daily practice."
---

Most AI coding tool workshops follow the same script: someone shares their screen, codes a todo app, and everyone leaves thinking "cool, but what about *my* work?"

That's not training. That's a demo.

If you want your developers to actually adopt Cursor (or Claude Code, Copilot, etc.), you need to run a workshop that builds **muscle memory** with **their code**.

Here's how we do it at AI Shift HQ.

## The Problem With Generic Examples

When you demo AI with a todo app or a trivial refactor:
- Developers don't see how it applies to *their* codebase
- They don't learn *when* to use AI vs. when to code manually
- They don't build prompting patterns for *their* domain
- There's no forcing function to keep practicing

Result: they try it once, get mediocre results, and revert to old habits.

## Our Workshop Format: Real Code, Real PRs

### Pre-work (30 mins)
1. **Pick a real repo** (ideally the team's main codebase)
2. **Identify 3-5 tasks** that map to daily work:
   - Refactor a component
   - Add test coverage
   - Fix a bug from your backlog
   - Migrate a deprecated API
   - Write documentation from code

3. **Prep a branch** (optional: seed it with a ticket or issue)

### Workshop (90-120 mins)

**Part 1: Context rules (15 mins)**
- Show how Cursor uses `.cursorrules` and `.cursorignore`
- Walk through a good context file for your stack
- Demo: "How do I get Cursor to understand our conventions?"

**Part 2: Live coding (45 mins)**
We pick 2-3 tasks from the pre-work list and live-code them. The format:

1. **Show the task** (e.g., "Add test coverage to this module")
2. **Prompt out loud** (so people hear the pattern)
3. **Narrate decisions**: "I'm accepting this, rejecting that, why I'm rephrasing"
4. **Open the PR** (so people see the end-to-end flow)

Key: Use *your* codebase. If your backend is Django, code Django. If it's React, code React. If you have a weird monorepo setup, code *that*.

**Part 3: Pair practice (30 mins)**
Developers pair up and pick a task. They:
- Write a prompt
- Run it
- Review the output
- Iterate

We circulate and help. The goal: they get comfortable prompting in *their* context.

**Part 4: Playbook creation (15 mins)**
We capture patterns:
- "When to use Cmd+K vs. chat"
- "How to ask for tests"
- "How to handle ambiguous requirements"
- "Red flags: when AI is guessing"

These become team docs.

### Post-workshop
- We create a `.cursorrules` file for the repo
- We share a prompt library (30-50 examples from the workshop)
- We run async office hours (Slack channel or weekly 30-min drop-ins)

## Common Mistakes to Avoid

### 1. Making it a presentation
If you're sharing your screen for 90 minutes, you're doing it wrong. Developers need to *write code*.

### 2. Using toy examples
"Let's build a calculator" doesn't teach someone how to refactor a React component with Redux. Use real tasks.

### 3. Skipping the "when not to use AI" conversation
AI is bad at: architecture decisions, high-security code, novel algorithms. If you don't teach people the failure modes, they'll lose trust fast.

### 4. No follow-up
One workshop doesn't change habits. You need:
- A Slack channel for questions
- Weekly "AI wins" sharing
- Prompt templates in your wiki
- At least one person who becomes the internal champion

## What Success Looks Like

After a good workshop:
- **Week 1**: 60-80% of attendees use the tool at least once
- **Month 1**: 30-50% use it daily
- **Month 3**: It's invisible—people don't think about it, they just use it

We also track:
- PRs opened with AI assistance
- Time spent on repetitive tasks (refactors, tests, docs)
- Questions in Slack (more = good; means people are experimenting)

## The Bigger Picture: Adoption Is a System

A workshop is the entry point. But real adoption needs:
- **Automations** that make AI part of the workflow (e.g., auto-generate PR descriptions, auto-suggest reviewers)
- **Templates** so people don't start from scratch every time
- **Champions** who evangelize and help peers
- **Measurement** so you know what's working

We run this as a 4-week pilot: Week 1 is the workshop, Weeks 2-4 are building automations and rollout plans.

## Want Help Running One?

We run these workshops for engineering teams across Australia and globally. If you want to level up your team's AI skills with *your* codebase, let's talk.

[Book a 30-min call →](mailto:hello@aishifthq.com)

---

**Bonus: Our Cursor .cursorrules Template**

Here's a starter template we use for TypeScript/React teams:

```
# Project Context
- Stack: Next.js 14, TypeScript, Tailwind CSS
- Style: Functional components, hooks, server components where possible
- Testing: Jest + React Testing Library

# Code Style
- Use TypeScript strict mode
- Prefer `const` over `let`
- Use named exports
- Keep components under 200 lines
- Write tests for business logic

# AI Instructions
- When generating components, include TypeScript types
- When writing tests, cover happy path + 2 edge cases
- When refactoring, explain breaking changes in comments
- Default to server components unless client interactivity is needed
```

Adapt it to your stack and iterate.
