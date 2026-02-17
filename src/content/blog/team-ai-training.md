---
title: "How to Train Your Team on AI: Lessons from 30+ Workshops"
date: "2025-01-15"
excerpt: "Most AI training is forgettable. Here's what we've learned from running 30+ hands-on workshops with engineering and ops teams."
---

We've run over 30 AI workshops in the last year—with engineering teams, ops teams, sales teams, even finance teams.

Some were wildly successful: 6 months later, 80% of participants are daily AI users.

Some flopped: people left inspired, then never used the tools again.

Here's what made the difference.

## The Problem: Most Training Is A One-Time Event

The typical pattern:
1. Company buys AI tool licenses
2. Runs a 1-hour lunch-and-learn
3. Sends a follow-up email with links
4. Wonders why adoption is low

This fails because:
- **It's too short**: 1 hour isn't enough to build muscle memory
- **It's too generic**: Examples don't map to real work
- **There's no forcing function**: No reason to keep practicing
- **There's no follow-up**: Questions go unanswered

Result: people try it once, get mediocre results, and revert to old habits.

## What Works: Training As A System, Not An Event

Here's our model (tested 30+ times):

### Phase 1: Hands-On Workshop (90-120 mins)

**Format**: Live coding, not slides. Use *their* codebase or workflows.

**Structure**:
1. **Context setup** (15 mins): Show how AI understands codebases, docs, tickets
2. **Live demos** (30 mins): 2-3 real tasks (refactor, debug, document)
3. **Pair practice** (30 mins): Participants code with AI while we circulate
4. **Pattern extraction** (15 mins): Document what worked (becomes team playbook)

**Key principle**: Real work, real code, real PRs. Not toy examples.

---

### Phase 2: Automations (Weeks 2-3)

Training builds skills. Automations remove friction.

We ship 1-3 workflow automations so AI becomes *infrastructure*, not a choice. Examples:
- Auto-generate PR descriptions from commits
- Turn meeting notes into Jira tickets
- Post weekly status updates from GitHub + Slack

**Why this matters**: People forget to use tools. But if the tool is part of the workflow, adoption is automatic.

---

### Phase 3: Async Support (Ongoing)

We set up:
- **Slack channel** for questions
- **Office hours** (weekly 30-min drop-in)
- **Prompt library** (50+ examples from the workshop)
- **Internal champion** (one person who becomes the go-to expert)

**Why this matters**: Adoption happens over weeks, not days. People need a way to ask "how do I...?" without scheduling a meeting.

---

## The 5 Mistakes That Kill Adoption

### 1. Making It A Presentation
If you're sharing your screen for 90 minutes, you're doing it wrong. People need to *use* the tool.

**Fix**: Structure it as 50% demo, 50% hands-on practice.

---

### 2. Using Generic Examples
"Let's build a todo app" doesn't teach someone how to debug a production incident in *their* stack.

**Fix**: Use their actual codebase, tickets, and workflows. If they use Django, demo Django. If they use Jira, demo Jira.

---

### 3. Skipping The "When Not To Use AI" Talk
If you oversell AI, people will try it on the wrong problems, get bad results, and lose trust.

**Fix**: Be explicit about failure modes. AI is bad at: novel algorithms, architecture decisions, high-security code, legal/compliance. Teach people the boundaries.

---

### 4. No Follow-Up
One workshop doesn't change habits. Without follow-up, people forget.

**Fix**: Schedule 3 check-ins over the next month. Ask: "What worked? What didn't? What questions do you have?"

---

### 5. No Measurement
If you don't track adoption, you won't know what's working.

**Fix**: Measure:
- **Active daily users** (not just licensed users)
- **Time saved** (via workflow automation)
- **Use case breadth** (how many tasks, not just one person doing everything)

If those numbers don't move, iterate.

---

## What Success Looks Like

After a good training program:

- **Week 1**: 60-80% of participants use the tool at least once
- **Month 1**: 30-50% use it daily
- **Month 3**: It's invisible—people don't think about it, they just use it
- **Month 6**: New hires learn it as part of onboarding

We also track:
- PRs with AI assistance (should be 40-60% after 3 months)
- Time spent on repetitive tasks (should drop 20-40%)
- Questions in Slack (more = good; means people are experimenting)

---

## Our Workshop Playbook (You Can Steal This)

Here's the exact format we use:

### Pre-Work (1 week before)
- Survey: "What repetitive tasks do you hate?"
- Pick 3-5 tasks to demo (refactor, debug, test, document, ticket)
- Prep a branch in the team's repo

### Workshop Day (90-120 mins)
1. **Intro** (5 mins): Why AI, what to expect
2. **Context setup** (15 mins): How AI reads code, how to write `.cursorrules`
3. **Live demo #1** (20 mins): Refactor a component, show prompt iteration
4. **Live demo #2** (20 mins): Fix a bug, show debugging workflow
5. **Pair practice** (30 mins): Participants pick a task and code
6. **Debrief** (15 mins): What worked? What patterns can we document?

### Post-Workshop (Same day)
- Share:
  - Prompt library (30-50 examples)
  - `.cursorrules` file for the repo
  - Slack channel for questions
  - Link to office hours

### Week 2-3
- Build 1-3 automations (e.g., PR summaries, ticket generation)
- Run one office hours session
- Collect feedback

### Week 4
- Measure usage
- Create rollout plan for wider team
- Document lessons learned

---

## Training Different Roles

AI adoption looks different across roles:

### Developers
- **Focus**: Code generation, refactors, tests, debugging
- **Tools**: Cursor, GitHub Copilot, Claude Code
- **Metric**: PRs with AI assistance

### Ops / SREs
- **Focus**: Incident triage, runbooks, automation
- **Tools**: OpenClaw, Warp, ChatGPT for scripting
- **Metric**: Time to resolve incidents

### Product / Managers
- **Focus**: Meeting notes → tickets, status updates, research
- **Tools**: ChatGPT, Notion AI, OpenClaw agents
- **Metric**: Time spent on meta-work

### Sales / Support
- **Focus**: Email drafts, lead research, knowledge base search
- **Tools**: ChatGPT, HubSpot AI, Intercom AI
- **Metric**: Response time, email quality

---

## Want Us To Run A Workshop For Your Team?

We've done this 30+ times. We know what works.

We'll run a 2-hour hands-on workshop with *your* codebase, then ship 1-3 automations over the next 2 weeks.

[Book a 30-min discovery call →](mailto:hello@aishifthq.com)

---

**Bonus: Our Pre-Workshop Survey Template**

Copy this into a Google Form:

1. What's your role? (Developer / Ops / Manager / Other)
2. Have you used AI coding tools before? (Never / Once or twice / Weekly / Daily)
3. What's one repetitive task you'd love to automate?
4. What's one thing you're skeptical about with AI?
5. What does success look like for you in 3 months?

Use the answers to customize the workshop.
