import json, urllib.request, time

API = "https://api.supabase.com/v1/projects/etbmmljggjgwkfphqdrf/database/query"
AUTH = "Bearer sbp_8e1a01705fe0f194bacc024058d707ce75bff405"

def run_sql(sql):
    data = json.dumps({"query": sql}).encode()
    for attempt in range(3):
        try:
            req = urllib.request.Request(API, data=data, headers={"Authorization": AUTH, "Content-Type": "application/json"})
            resp = urllib.request.urlopen(req)
            result = resp.read().decode()
            time.sleep(1)  # Rate limit
            return result
        except urllib.error.HTTPError as e:
            print(f"  HTTP {e.code} on attempt {attempt+1}, retrying in {(attempt+1)*3}s...")
            time.sleep((attempt+1) * 3)
    return '{"error": "failed after 3 attempts"}'

# All enrichment data
cases = {
    "00a5292c-4ffc-413d-af8f-6905b125f692": {  # Automated Compliance Report Generation
        "workflow_steps": [
            {"step": 1, "title": "Data Collection", "description": "AI agent connects to transaction databases, risk assessment tools, and audit log systems to gather raw compliance data automatically."},
            {"step": 2, "title": "Framework Mapping", "description": "Maps collected data against regulatory frameworks (SOX, APRA, Basel III) to identify relevant reporting requirements."},
            {"step": 3, "title": "Report Generation", "description": "Compiles structured reports with executive summaries, data tables, risk indicators, and trend analysis."},
            {"step": 4, "title": "Review & Routing", "description": "Routes draft reports to compliance officers for review, tracks approvals, and files final versions."}
        ],
        "benefits": ["80% reduction in manual data gathering time", "Consistent report formatting across all regulatory submissions", "Real-time compliance status visibility for leadership", "Reduced risk of human error in data compilation", "Audit trail for every report generation step"],
        "before_after": {
            "before": ["Analysts spend 2-3 days gathering data from 5+ systems", "Manual copy-paste into report templates", "Inconsistent formatting across reports", "Last-minute scrambles before filing deadlines"],
            "after": ["Data gathered automatically in under 30 minutes", "Reports auto-generated with consistent formatting", "Compliance officers review and approve digitally", "Reports ready days before deadlines"]
        },
        "implementation_time": "2-3 weeks",
        "roi_highlight": "Saves 40+ hours per reporting cycle with 99.5% data accuracy"
    },
    "5659de28-273e-44cf-9203-a41af3bb7ff7": {  # Fraud Detection Alert Routing
        "workflow_steps": [
            {"step": 1, "title": "Stream Monitoring", "description": "Continuously monitors transaction streams across all channels — card payments, wire transfers, ACH, and digital wallets."},
            {"step": 2, "title": "Anomaly Detection", "description": "ML models score each transaction based on velocity, geography, amount patterns, and merchant category deviations."},
            {"step": 3, "title": "Alert Enrichment", "description": "High-risk transactions are enriched with customer history, device fingerprints, and related transaction context."},
            {"step": 4, "title": "Smart Routing", "description": "Alerts are prioritized by severity and routed to the right analyst team with full context."}
        ],
        "benefits": ["70% faster mean-time-to-response on fraud alerts", "Reduced false positive rate through contextual enrichment", "Automatic escalation prevents alerts from going stale", "Clear audit trail for regulatory reporting", "Analysts focus on investigation, not triage"],
        "before_after": {
            "before": ["Analysts manually review hundreds of raw alerts daily", "No prioritization — first-in-first-out processing", "Context requires checking 3-4 different systems", "Critical alerts sometimes buried under false positives"],
            "after": ["Alerts auto-prioritized by risk score and severity", "Full context attached — no system-hopping needed", "Critical alerts surface immediately to senior analysts", "False positives filtered, saving hours of review time"]
        },
        "implementation_time": "3-4 weeks",
        "roi_highlight": "Reduces fraud losses by catching high-risk transactions 70% faster"
    },
    "8424f228-f7ee-4d6e-8520-8c1d4f3339d8": {  # Client Onboarding
        "workflow_steps": [
            {"step": 1, "title": "Document Request", "description": "Sends personalized document request emails to new clients with clear checklists and upload links."},
            {"step": 2, "title": "ID Verification", "description": "OCR extracts data from uploaded ID documents. Automated checks verify identity against KYC databases."},
            {"step": 3, "title": "CRM & Account Setup", "description": "Client data auto-populates CRM records. Account provisioning triggers fire once verification passes."},
            {"step": 4, "title": "Welcome Sequence", "description": "Client receives personalized welcome package with account details, assigned relationship manager, and next steps."}
        ],
        "benefits": ["Onboarding reduced from 5 days to under 24 hours", "Zero manual data entry into CRM systems", "Automated KYC compliance with full audit trail", "Better client experience from day one", "Relationship managers focus on clients, not paperwork"],
        "before_after": {
            "before": ["Manual email chains requesting documents over days", "Staff manually types client data into CRM", "KYC checks require manual verification calls", "New clients wait 3-5 days before accessing services"],
            "after": ["Automated document collection with progress tracking", "OCR extracts and populates all systems automatically", "KYC verified digitally in minutes", "Clients onboarded within 24 hours"]
        },
        "implementation_time": "3-4 weeks",
        "roi_highlight": "Cuts onboarding time by 80% while improving compliance coverage"
    },
    "1818bda9-4384-4573-b0a2-0d6c3cfa647e": {  # Invoice Processing
        "workflow_steps": [
            {"step": 1, "title": "Invoice Ingestion", "description": "Invoices arrive via email, upload portal, or EDI. AI extracts sender, amounts, line items, and payment terms."},
            {"step": 2, "title": "Matching & Validation", "description": "Auto-matches invoices to purchase orders and delivery receipts. Flags discrepancies for human review."},
            {"step": 3, "title": "Approval Routing", "description": "Routes to appropriate approvers based on amount thresholds, department, and vendor category."},
            {"step": 4, "title": "Payment Scheduling", "description": "Approved invoices are queued for payment according to terms, with early-pay discount optimization."}
        ],
        "benefits": ["95% straight-through processing rate", "Capture early payment discounts automatically", "Eliminate duplicate payment risk", "Real-time AP visibility for cash flow forecasting", "Reduce invoice processing cost by 75%"],
        "before_after": {
            "before": ["Staff manually keys invoice data into AP system", "PO matching requires checking multiple spreadsheets", "Approval chains take 5-10 business days", "Missed early-pay discounts cost thousands monthly"],
            "after": ["Invoices auto-extracted and matched in seconds", "Three-way match happens automatically", "Approvals completed in 1-2 days via mobile", "Early-pay discounts captured consistently"]
        },
        "implementation_time": "2-3 weeks",
        "roi_highlight": "Reduces invoice processing cost from $15 to $3 per invoice"
    },
    "91daaf86-a91f-47e4-bb43-ea645baaaba1": {  # Patient Intake
        "workflow_steps": [
            {"step": 1, "title": "Form Digitization", "description": "Paper or PDF intake forms are scanned. OCR and NLP extract patient demographics, medical history, and insurance details."},
            {"step": 2, "title": "Data Validation", "description": "Extracted data validated against insurance databases and existing patient records. Conflicts flagged."},
            {"step": 3, "title": "EHR Population", "description": "Validated data auto-populates the Electronic Health Record system, creating or updating patient profiles."},
            {"step": 4, "title": "Care Team Routing", "description": "Patient assigned to appropriate care coordinator based on condition, specialty needs, and provider availability."}
        ],
        "benefits": ["Eliminate 15+ minutes of manual data entry per patient", "Reduce transcription errors by 95%", "Urgent cases identified and flagged within minutes", "Staff can focus on patient care instead of paperwork", "Seamless insurance verification at intake"],
        "before_after": {
            "before": ["Receptionist manually types intake forms into EHR", "Insurance verification requires phone calls", "Urgent conditions may not be flagged until provider review", "Patient waits 20-30 minutes for intake processing"],
            "after": ["Forms scanned and data extracted in under 2 minutes", "Insurance verified automatically against databases", "Urgent conditions flagged immediately for triage", "Patient processing reduced to under 5 minutes"]
        },
        "implementation_time": "3-4 weeks",
        "roi_highlight": "Processes 4x more patients per hour with 95% fewer data entry errors"
    },
    "6b069330-0e12-49f9-8cf9-5f8f9b09cb01": {  # Appointment Reminder
        "workflow_steps": [
            {"step": 1, "title": "Schedule Scan", "description": "Agent pulls upcoming appointments from the scheduling system, checking 48-hour and 24-hour windows."},
            {"step": 2, "title": "Message Personalization", "description": "Generates personalized reminders with appointment time, provider name, location, and preparation instructions."},
            {"step": 3, "title": "Multi-Channel Delivery", "description": "Sends via patient-preferred channel — SMS, email, or voice call — with automatic retry on failed delivery."},
            {"step": 4, "title": "Response Tracking", "description": "Tracks confirmations, reschedules, and no-responses. Updates scheduling system and alerts staff to cancellations."}
        ],
        "benefits": ["Reduce no-show rates by 30-45%", "Free up front desk staff from reminder calls", "Patients get preparation instructions automatically", "Cancellations detected early, enabling waitlist fills", "Multi-language support for diverse patient populations"],
        "before_after": {
            "before": ["Front desk staff make 50-100 reminder calls daily", "Calls often go to voicemail with no confirmation", "No-show rates of 15-25% waste provider time", "Cancelled slots rarely filled from waitlist in time"],
            "after": ["Automated reminders sent at optimal times", "One-click confirm/reschedule via SMS", "No-show rates drop to 5-10%", "Cancellations trigger automatic waitlist notifications"]
        },
        "implementation_time": "1-2 weeks",
        "roi_highlight": "Reduces no-shows by 35% — recovering thousands in lost revenue monthly"
    },
    "ce9fab8b-52b2-47d2-8dac-325c65418e31": {  # Clinical Trial
        "workflow_steps": [
            {"step": 1, "title": "Criteria Parsing", "description": "AI parses trial inclusion/exclusion criteria from clinical trial protocols into structured rules."},
            {"step": 2, "title": "Patient Matching", "description": "Scans patient records against active trial criteria — demographics, diagnoses, lab values, medication history."},
            {"step": 3, "title": "Eligibility Scoring", "description": "Each potential match receives an eligibility score with detailed breakdown of met/unmet criteria."},
            {"step": 4, "title": "Referral Generation", "description": "High-scoring matches generate referral packets with supporting evidence, sent to research coordinators."}
        ],
        "benefits": ["Screen 10x more patients per trial than manual review", "Identify eligible patients within hours, not weeks", "Reduce screen failure rates by matching more accurately", "Improve trial enrollment timelines", "Ensure no eligible patient is overlooked"],
        "before_after": {
            "before": ["Research nurses manually review charts for eligibility", "Can only screen 5-10 patients per day per trial", "Eligible patients often missed due to volume", "Screen failure rates of 40-60%"],
            "after": ["Entire patient database screened in hours", "Hundreds of potential matches identified per trial", "Screen failure rates drop to 15-25%", "Research nurses focus on consenting, not screening"]
        },
        "implementation_time": "4-6 weeks",
        "roi_highlight": "Accelerates trial enrollment by 3x while reducing screen failures by 50%"
    },
    "83c3a684-6ff4-473a-a4fd-cc91e35cf43f": {  # Contract Review
        "workflow_steps": [
            {"step": 1, "title": "Document Upload", "description": "Contracts uploaded in any format (PDF, Word, scanned). OCR handles scanned documents automatically."},
            {"step": 2, "title": "Clause Identification", "description": "NLP identifies key sections: payment terms, liability caps, IP rights, termination, indemnification, and confidentiality."},
            {"step": 3, "title": "Deviation Analysis", "description": "Compares extracted clauses against standard templates and playbook. Highlights non-standard language and risk areas."},
            {"step": 4, "title": "Review Summary", "description": "Generates structured review summary with risk ratings, recommended changes, and comparison to standard terms."}
        ],
        "benefits": ["Review contracts 80% faster than manual process", "Never miss a non-standard clause again", "Consistent application of review standards", "Junior associates can handle initial reviews confidently", "Build institutional knowledge from every reviewed contract"],
        "before_after": {
            "before": ["Associates spend 3-5 hours per contract on initial review", "Risk of missing non-standard clauses in long documents", "Inconsistent review quality across team members", "No easy way to compare against standard templates"],
            "after": ["AI pre-review completed in under 10 minutes", "Every clause compared against playbook automatically", "Consistent risk flagging regardless of reviewer", "Associates focus on negotiation strategy, not clause hunting"]
        },
        "implementation_time": "4-6 weeks",
        "roi_highlight": "Saves 3-4 hours per contract review with 99% clause detection accuracy"
    },
    "9d5c5ce8-7013-4bb1-9d03-05c8c30bf04f": {  # Legal Research
        "workflow_steps": [
            {"step": 1, "title": "Research Query", "description": "Attorney inputs research question. AI formulates comprehensive search queries across legal databases."},
            {"step": 2, "title": "Case Retrieval", "description": "Retrieves relevant cases, statutes, and regulations from LexisNexis, Westlaw, or internal precedent databases."},
            {"step": 3, "title": "Analysis & Summary", "description": "Generates summaries with key holdings, reasoning, and relevance. Organizes by jurisdiction and precedential value."},
            {"step": 4, "title": "Memo Export", "description": "Compiles findings into a structured research memo with proper citations, ready for inclusion in briefs."}
        ],
        "benefits": ["Complete preliminary research in 30 minutes vs. 4-6 hours", "Never miss relevant precedent in your jurisdiction", "Proper citation formatting saves additional editing time", "Research quality consistent across all seniority levels", "Build a searchable library of research summaries over time"],
        "before_after": {
            "before": ["Associates spend half a day on preliminary research", "Search queries may miss relevant case law", "Manual citation checking and formatting", "Research quality varies by experience level"],
            "after": ["Comprehensive research memo in 30 minutes", "Broader search coverage catches more relevant cases", "Citations auto-formatted to required style", "Consistent research thoroughness regardless of who asks"]
        },
        "implementation_time": "3-4 weeks",
        "roi_highlight": "Reduces legal research time by 75% while improving coverage breadth"
    },
    "f8a0df54-480d-453b-8134-178c067b6ffd": {  # Matter Intake
        "workflow_steps": [
            {"step": 1, "title": "Client Information", "description": "New matter details collected via structured intake form — client info, opposing parties, matter type, and key dates."},
            {"step": 2, "title": "Conflict Check", "description": "Automated conflict search across all existing matters, clients, opposing parties, and affiliated entities."},
            {"step": 3, "title": "Matter Creation", "description": "Creates case folders, assigns matter numbers, sets up billing codes, and populates practice management system."},
            {"step": 4, "title": "Team Notification", "description": "Notifies assigned attorneys with intake summary, conflict check results, and upcoming deadlines."}
        ],
        "benefits": ["Conflict checks completed in minutes, not hours", "Zero risk of missed conflicts across firm history", "Standardized matter setup reduces administrative overhead", "Attorneys receive complete intake briefs immediately", "Compliance with ethical obligations automated"],
        "before_after": {
            "before": ["Intake coordinator manually searches for conflicts", "Conflict checks miss variations in entity names", "Matter setup takes 1-2 days of admin work", "Attorneys receive incomplete intake information"],
            "after": ["Automated conflict search with fuzzy name matching", "Every entity variation checked in seconds", "Matter fully set up within the hour", "Attorneys get complete intake brief with conflict results"]
        },
        "implementation_time": "2-3 weeks",
        "roi_highlight": "Eliminates conflict check delays and reduces matter setup time by 90%"
    },
    "e2a44af5-fd4b-498f-8bf7-86a625f4da38": {  # Customer Review Sentiment
        "workflow_steps": [
            {"step": 1, "title": "Review Monitoring", "description": "Continuously monitors reviews across Google, Yelp, Amazon, Trustpilot, and social media channels."},
            {"step": 2, "title": "Sentiment Scoring", "description": "NLP analyzes each review for sentiment, emotion, and specific product/service mentions."},
            {"step": 3, "title": "Response Drafting", "description": "Generates personalized response drafts matching brand voice. Negative reviews get empathetic, solution-oriented responses."},
            {"step": 4, "title": "Escalation & Reporting", "description": "Urgent negative reviews flagged for immediate attention. Weekly sentiment dashboards sent to product and CS teams."}
        ],
        "benefits": ["Monitor reviews across all platforms in real-time", "Respond to negative reviews within hours, not days", "Identify product issues from review patterns early", "Maintain consistent brand voice across all responses", "Track sentiment trends for product decisions"],
        "before_after": {
            "before": ["Staff checks review platforms manually once a week", "Negative reviews sit unanswered for days", "No systematic tracking of sentiment trends", "Response quality varies by who is writing"],
            "after": ["All reviews captured and analyzed in real-time", "Response drafts ready within minutes of posting", "Sentiment trends visible in weekly dashboards", "Consistent, on-brand responses every time"]
        },
        "implementation_time": "2-3 weeks",
        "roi_highlight": "Improves average review rating by 0.3-0.5 stars within 3 months"
    },
    "89312cec-6645-446b-9f78-f583801c5a4f": {  # Inventory Restock
        "workflow_steps": [
            {"step": 1, "title": "Demand Analysis", "description": "Analyzes historical sales data, seasonal patterns, promotional calendars, and external signals to predict demand."},
            {"step": 2, "title": "Inventory Monitoring", "description": "Tracks real-time inventory levels across all locations. Calculates days-of-supply for each SKU."},
            {"step": 3, "title": "Reorder Recommendations", "description": "Generates optimal reorder quantities and timing based on lead times, minimum order quantities, and storage capacity."},
            {"step": 4, "title": "PO Generation", "description": "Creates purchase orders for approved recommendations and sends to suppliers. Tracks order status."}
        ],
        "benefits": ["Reduce stockouts by 40-60%", "Lower excess inventory carrying costs by 20-30%", "Optimize order quantities for supplier discounts", "Seasonal demand shifts anticipated automatically", "Free up planners for strategic decisions"],
        "before_after": {
            "before": ["Planners manually check spreadsheets for reorder points", "Stockouts discovered when customers complain", "Over-ordering ties up cash in excess inventory", "Seasonal shifts catch the team off guard"],
            "after": ["AI predicts demand and triggers reorders proactively", "Stockouts prevented with days-of-supply alerts", "Order quantities optimized for cost and capacity", "Seasonal patterns factored in months ahead"]
        },
        "implementation_time": "3-4 weeks",
        "roi_highlight": "Reduces stockouts by 50% and excess inventory by 25%"
    },
    "909fd73d-cba2-497b-8067-7308299c3fee": {  # Personalized Marketing
        "workflow_steps": [
            {"step": 1, "title": "Audience Segmentation", "description": "Analyzes customer purchase history, browsing behavior, and demographics to create dynamic micro-segments."},
            {"step": 2, "title": "Content Generation", "description": "AI generates personalized email copy, subject lines, product recommendations, and promotional offers per segment."},
            {"step": 3, "title": "Campaign Assembly", "description": "Assembles multi-channel campaigns with A/B test variants and optimal send times."},
            {"step": 4, "title": "Performance Analysis", "description": "Tracks open rates, click-throughs, conversions, and revenue attribution. Feeds learnings back."}
        ],
        "benefits": ["3-5x improvement in email engagement rates", "Personalized offers increase conversion by 20-35%", "Marketing team produces campaigns 10x faster", "Continuous learning improves targeting over time", "Consistent brand voice across all touchpoints"],
        "before_after": {
            "before": ["One-size-fits-all email blasts to entire list", "Campaign creation takes 2-3 days per campaign", "Generic subject lines with 15-20% open rates", "No systematic A/B testing"],
            "after": ["Micro-segmented campaigns with personalized content", "Campaigns generated in hours, not days", "Personalized subject lines achieve 35-45% open rates", "Automated A/B testing on every send"]
        },
        "implementation_time": "3-4 weeks",
        "roi_highlight": "Increases email revenue per send by 3-5x through personalization"
    },
    "8390bf01-74d7-431d-9d20-cdae05b54873": {  # Code Review
        "workflow_steps": [
            {"step": 1, "title": "PR Detection", "description": "Monitors GitHub/GitLab for new pull requests. Triggers analysis when PRs are opened or updated."},
            {"step": 2, "title": "Code Analysis", "description": "Reviews diff for code quality, potential bugs, security vulnerabilities, performance issues, and style compliance."},
            {"step": 3, "title": "Summary Generation", "description": "Generates human-readable review summary with categorized findings: critical issues, suggestions, and highlights."},
            {"step": 4, "title": "Team Communication", "description": "Posts summary as PR comment and notifies relevant reviewers in Slack. Tracks resolution of flagged issues."}
        ],
        "benefits": ["Every PR gets consistent, thorough initial review", "Critical bugs caught before human review begins", "Reduces review turnaround time by 50%", "Junior devs learn from automated feedback", "Frees senior engineers for architectural discussions"],
        "before_after": {
            "before": ["Senior engineers spend 30-60 min per PR review", "Review quality inconsistent — depends on reviewer workload", "Some PRs wait days for initial review", "Easy-to-miss bugs slip through tired eyes"],
            "after": ["AI pre-review posted within minutes of PR creation", "Consistent quality checks on every single PR", "Human reviewers focus on logic and architecture", "Common bugs caught automatically before they reach review"]
        },
        "implementation_time": "1-2 weeks",
        "roi_highlight": "Catches 40% of bugs before human review, saving 30 min per PR"
    },
    "5d8cc199-5c44-4c85-b027-40849b02279e": {  # Support Ticket Classification
        "workflow_steps": [
            {"step": 1, "title": "Ticket Ingestion", "description": "New tickets from email, chat, web forms, and phone transcripts are captured and normalized."},
            {"step": 2, "title": "Classification", "description": "NLP categorizes tickets by type (bug, feature request, billing, access), product area, and urgency level."},
            {"step": 3, "title": "Auto-Response", "description": "Known issues get instant auto-responses with relevant KB articles. Complex tickets get acknowledgment with ETA."},
            {"step": 4, "title": "Smart Routing", "description": "Routes to the right team and individual based on category, expertise, workload, and SLA requirements."}
        ],
        "benefits": ["90% classification accuracy from day one", "First response time reduced from hours to minutes", "Even workload distribution across support team", "Auto-resolution of 20-30% of common tickets", "SLA compliance improved through priority-aware routing"],
        "before_after": {
            "before": ["Support lead manually reads and assigns every ticket", "Misrouted tickets bounce between teams", "Common questions answered manually every time", "SLA breaches from delayed triage"],
            "after": ["Tickets classified and routed in under 30 seconds", "Right team gets it first time, every time", "Known issues resolved automatically with KB links", "SLA tracking built into the routing logic"]
        },
        "implementation_time": "2-3 weeks",
        "roi_highlight": "Reduces first response time by 80% and auto-resolves 25% of tickets"
    },
    "e6b71db6-ee1e-4fe4-8a86-e16ab00d2571": {  # Employee Onboarding
        "workflow_steps": [
            {"step": 1, "title": "Trigger & Setup", "description": "New hire record in HRIS triggers automated onboarding. Creates accounts, assigns equipment, and schedules orientation."},
            {"step": 2, "title": "Checklist Management", "description": "Dynamic checklist generated based on role, department, and location. Tasks assigned to IT, HR, manager, and new hire."},
            {"step": 3, "title": "Progress Tracking", "description": "Daily check-ins with new hire via Slack. Tracks completion of training modules, document submissions, and setup tasks."},
            {"step": 4, "title": "Day-30 Review", "description": "Generates onboarding completion report. Identifies any incomplete items and schedules manager check-in."}
        ],
        "benefits": ["Zero tasks fall through the cracks", "New hires productive 40% faster", "HR team handles 3x more concurrent onboardings", "Consistent experience regardless of location or department", "Complete audit trail of onboarding compliance"],
        "before_after": {
            "before": ["HR manually tracks onboarding in spreadsheets", "IT access requests submitted via email, often delayed", "New hires don't know who to ask about what", "Onboarding completion varies wildly by manager"],
            "after": ["Every task auto-assigned with deadlines and reminders", "IT access provisioned automatically on day one", "New hire gets a personal Slack checklist and guide", "100% onboarding completion tracked and reported"]
        },
        "implementation_time": "2-3 weeks",
        "roi_highlight": "New hires reach full productivity 40% faster with zero dropped tasks"
    },
    "dd0fe0c5-5e48-40be-94a8-fa4b3567d9a5": {  # Incident Response Triage
        "workflow_steps": [
            {"step": 1, "title": "Alert Detection", "description": "Monitors alerting systems (PagerDuty, Datadog, CloudWatch). Captures alert details, severity, and affected services."},
            {"step": 2, "title": "Impact Assessment", "description": "Correlates alert with service dependency maps, recent deployments, and historical incident patterns."},
            {"step": 3, "title": "Runbook Execution", "description": "Matches incident type to runbooks. Executes automated diagnostic steps and suggests remediation actions."},
            {"step": 4, "title": "Communication", "description": "Creates incident channel, pages on-call engineers, posts status updates, and tracks time-to-resolution."}
        ],
        "benefits": ["Mean-time-to-acknowledge reduced by 60%", "Automated diagnostics run before humans are paged", "Consistent incident response regardless of who is on-call", "Post-incident reports generated automatically", "Historical pattern matching prevents repeat incidents"],
        "before_after": {
            "before": ["On-call engineer woken up, spends 15 min understanding the alert", "Manual investigation across multiple dashboards", "Incident communication via ad-hoc Slack messages", "Post-mortems written from memory days later"],
            "after": ["Alert triaged with context before engineer is paged", "Diagnostic data gathered automatically and presented", "Incident channel created with all context attached", "Timeline and actions logged in real-time for post-mortem"]
        },
        "implementation_time": "3-4 weeks",
        "roi_highlight": "Reduces MTTR by 45% with automated diagnostics and communication"
    },
    "5f36459b-adf8-44d4-a538-0fa8568f855f": {  # Meeting Notes
        "workflow_steps": [
            {"step": 1, "title": "Recording & Transcription", "description": "Meeting audio captured via Zoom/Teams/Meet. Real-time transcription with speaker identification."},
            {"step": 2, "title": "Summary Generation", "description": "AI generates structured summary: key decisions, discussion points, and open questions."},
            {"step": 3, "title": "Action Item Extraction", "description": "Identifies action items with assigned owners, deadlines, and context. Detects implicit commitments."},
            {"step": 4, "title": "Distribution & Tracking", "description": "Summary and action items posted to Slack/Notion. Tasks created in project management tools."}
        ],
        "benefits": ["No more 'what did we decide?' moments", "Action items tracked automatically — nothing falls through", "Meeting summaries available within minutes", "Searchable archive of all meeting decisions", "Attendees focus on discussion, not note-taking"],
        "before_after": {
            "before": ["Someone volunteers to take notes (poorly)", "Action items discussed but not formally tracked", "Absent team members miss context entirely", "Decisions forgotten by next meeting"],
            "after": ["Comprehensive summary generated automatically", "Action items extracted and assigned in task tools", "Anyone can catch up in 2 minutes", "Decisions documented and searchable forever"]
        },
        "implementation_time": "1-2 weeks",
        "roi_highlight": "Saves 30 minutes per meeting and ensures 100% action item follow-through"
    },
    "9590749f-55ec-4926-ae53-e1cc3e88016d": {  # Product Analytics Digest
        "workflow_steps": [
            {"step": 1, "title": "Data Aggregation", "description": "Pulls metrics from analytics platforms — Amplitude, Mixpanel, Google Analytics — on a daily/weekly schedule."},
            {"step": 2, "title": "Trend Analysis", "description": "Identifies significant changes, anomalies, and trends. Compares against targets and historical baselines."},
            {"step": 3, "title": "Narrative Generation", "description": "Writes a human-readable digest highlighting what changed, why it matters, and what to watch."},
            {"step": 4, "title": "Distribution", "description": "Delivers digest to executives via email/Slack at preferred time. Includes interactive charts and drill-down links."}
        ],
        "benefits": ["Executives get insights without requesting reports", "Anomalies surfaced proactively, not discovered late", "Consistent metrics definition across the organization", "Analytics team freed from repetitive reporting", "Data-driven culture reinforced through regular visibility"],
        "before_after": {
            "before": ["Exec asks analyst for metrics — takes 1-2 days", "Weekly reports are stale by the time they arrive", "Different teams report different numbers for same metric", "Anomalies discovered by accident"],
            "after": ["Daily digest in exec inbox before 9 AM", "Anomalies flagged the day they happen", "Single source of truth for all key metrics", "Analysts focus on deep analysis, not report generation"]
        },
        "implementation_time": "2-3 weeks",
        "roi_highlight": "Delivers executive-ready insights daily, saving 10+ analyst hours per week"
    },
    "519db857-8998-406e-b823-495261f03af8": {  # Predictive Maintenance
        "workflow_steps": [
            {"step": 1, "title": "Sensor Monitoring", "description": "Collects real-time data from IoT sensors — vibration, temperature, pressure, current draw — across all equipment."},
            {"step": 2, "title": "Pattern Recognition", "description": "ML models trained on historical failure data identify early warning patterns that precede equipment failures."},
            {"step": 3, "title": "Maintenance Scheduling", "description": "Predicts optimal maintenance windows based on equipment condition, production schedule, and parts availability."},
            {"step": 4, "title": "Work Order Generation", "description": "Creates detailed work orders with predicted issue, recommended actions, required parts, and priority level."}
        ],
        "benefits": ["Reduce unplanned downtime by 35-50%", "Extend equipment lifespan by 20-30%", "Lower maintenance costs by scheduling proactively", "Optimize spare parts inventory based on predicted needs", "Safety improved by preventing catastrophic failures"],
        "before_after": {
            "before": ["Maintenance on fixed schedules — regardless of actual condition", "Unexpected breakdowns halt production for hours or days", "Spare parts either overstocked or unavailable", "Technicians react to failures instead of preventing them"],
            "after": ["Maintenance triggered by actual equipment condition", "Failures predicted 2-4 weeks before they occur", "Parts ordered just-in-time based on predictions", "Technicians fix issues during planned windows"]
        },
        "implementation_time": "4-6 weeks",
        "roi_highlight": "Prevents costly unplanned downtime — typically saving $50K-500K per incident"
    },
    "9334efe3-dd68-4bb0-9a74-3b4ba1546aa2": {  # QA Report
        "workflow_steps": [
            {"step": 1, "title": "Data Collection", "description": "Gathers quality metrics from inspection stations, test equipment, and production line sensors automatically."},
            {"step": 2, "title": "Analysis & Trending", "description": "Statistical process control analysis identifies out-of-spec trends, emerging defect patterns, and process drift."},
            {"step": 3, "title": "Report Generation", "description": "Compiles shift/daily/weekly QA reports with charts, SPC data, defect Pareto analysis, and corrective action tracking."},
            {"step": 4, "title": "Alert & Distribution", "description": "Out-of-spec conditions trigger immediate alerts. Reports distributed to QA managers, production leads, and engineering."}
        ],
        "benefits": ["Real-time quality visibility across all production lines", "Catch process drift before it produces defects", "Consistent report format meets ISO/regulatory requirements", "Reduce manual QA documentation time by 80%", "Historical quality data searchable for root cause analysis"],
        "before_after": {
            "before": ["QA inspectors manually compile reports end of shift", "Process drift undetected until defects pile up", "Report formats inconsistent across shifts and lines", "Quality data lives in spreadsheets, hard to analyze"],
            "after": ["Reports generated automatically with real-time data", "SPC alerts catch drift as it happens", "Standardized formats meet audit requirements", "All quality data in one searchable system"]
        },
        "implementation_time": "3-4 weeks",
        "roi_highlight": "Detects quality issues 5x faster, reducing scrap and rework by 30%"
    },
    "ca15913a-b928-48f9-a4b3-b112c4f3c9c9": {  # Supply Chain
        "workflow_steps": [
            {"step": 1, "title": "Exception Detection", "description": "Monitors supplier shipments, inventory levels, production schedules, and logistics in real-time for deviations."},
            {"step": 2, "title": "Impact Analysis", "description": "Assesses downstream impact — affected orders, production delays, customer commitments."},
            {"step": 3, "title": "Resolution Options", "description": "Generates alternatives: expedite shipping, switch suppliers, adjust production schedule, or notify customers."},
            {"step": 4, "title": "Execution & Tracking", "description": "Executes approved resolution — creates POs, adjusts schedules, sends notifications — and tracks until resolved."}
        ],
        "benefits": ["Supply chain disruptions caught in minutes, not days", "Automated impact assessment prevents cascading delays", "Pre-negotiated backup suppliers activated automatically", "Customer communication proactive, not reactive", "Continuous improvement from exception pattern analysis"],
        "before_after": {
            "before": ["Supply chain team discovers delays when parts don't arrive", "Manual analysis of which orders are affected", "Scrambling to find alternatives under time pressure", "Customers learn about delays after they're already impacted"],
            "after": ["Delays detected from carrier tracking in real-time", "Impact on orders and customers calculated instantly", "Alternative suppliers and routes suggested immediately", "Customers notified proactively with revised ETAs"]
        },
        "implementation_time": "3-4 weeks",
        "roi_highlight": "Reduces supply chain disruption impact by 60% through early detection"
    },
    "682f8b64-2729-4856-963f-f9042555567c": {  # Alumni Engagement
        "workflow_steps": [
            {"step": 1, "title": "Alumni Profiling", "description": "Aggregates alumni data from CRM, LinkedIn, donation history, event attendance, and email engagement."},
            {"step": 2, "title": "Segmentation", "description": "Creates dynamic segments based on graduation year, giving capacity, engagement level, interests, and location."},
            {"step": 3, "title": "Campaign Personalization", "description": "Generates personalized outreach — event invitations, giving appeals, mentorship opportunities — per segment."},
            {"step": 4, "title": "Engagement Tracking", "description": "Tracks responses, event attendance, donations, and mentorship sign-ups. Feeds back into alumni profiles."}
        ],
        "benefits": ["Increase alumni engagement rates by 40-60%", "Personalized outreach drives higher donation conversion", "Identify high-potential donors early", "Reduce manual campaign creation time by 75%", "Build stronger alumni community connections"],
        "before_after": {
            "before": ["Same newsletter blast to all 50,000 alumni", "Engagement rates below 5%", "High-potential donors not identified until they self-select", "Event attendance declining year over year"],
            "after": ["Personalized communications based on interests and history", "Engagement rates of 15-25%", "Donor cultivation automated based on engagement signals", "Event invitations targeted to likely attendees"]
        },
        "implementation_time": "3-4 weeks",
        "roi_highlight": "Increases alumni donation rates by 25-40% through personalized engagement"
    },
    "eb484d14-af2c-485e-a47a-33e5493c6b24": {  # Course Recommendation
        "workflow_steps": [
            {"step": 1, "title": "Student Profile Analysis", "description": "Analyzes academic history, declared major, completed prerequisites, GPA trends, and expressed interests."},
            {"step": 2, "title": "Requirement Mapping", "description": "Maps remaining degree requirements against available course offerings for upcoming semesters."},
            {"step": 3, "title": "Recommendation Generation", "description": "Generates personalized course recommendations optimized for degree progress, schedule preferences, and workload balance."},
            {"step": 4, "title": "Advisor Review", "description": "Recommendations shared with academic advisor for review. Student receives finalized suggestions with registration links."}
        ],
        "benefits": ["Students graduate on time more consistently", "Course selection stress reduced significantly", "Advisors spend time on mentoring, not schedule planning", "Improved course fill rates through better matching", "At-risk students identified through enrollment patterns"],
        "before_after": {
            "before": ["Students browse course catalog manually", "Advisors spend 30+ minutes per student on scheduling", "Students miss prerequisites and delay graduation", "Popular courses oversubscribed, niche courses underenrolled"],
            "after": ["Personalized recommendations in student portal", "Advisor meetings focus on career goals, not logistics", "Prerequisite conflicts caught before registration", "Better demand prediction for course capacity planning"]
        },
        "implementation_time": "4-6 weeks",
        "roi_highlight": "Improves 4-year graduation rate by 10-15% through optimized course planning"
    },
    "fd7654b4-55d4-4424-b5e9-22c07e350ceb": {  # Grading Assistant
        "workflow_steps": [
            {"step": 1, "title": "Submission Collection", "description": "Collects assignments from LMS (Canvas, Blackboard, Moodle). Supports essays, code submissions, and structured responses."},
            {"step": 2, "title": "Initial Assessment", "description": "AI evaluates against rubric criteria — structure, content accuracy, originality, code correctness, citation quality."},
            {"step": 3, "title": "Feedback Generation", "description": "Generates detailed, constructive feedback for each rubric dimension. Highlights strengths and areas for improvement."},
            {"step": 4, "title": "Instructor Review", "description": "Presents AI assessment alongside submission for instructor review. Instructor adjusts grades and feedback as needed."}
        ],
        "benefits": ["Grading turnaround reduced from 2 weeks to 2 days", "Every student gets detailed, personalized feedback", "Consistent rubric application across all submissions", "Instructors focus on teaching, not grading", "Plagiarism and AI-generation detection built in"],
        "before_after": {
            "before": ["Instructors spend 15-30 minutes grading each paper", "Feedback quality drops as fatigue sets in", "Students wait 2-3 weeks for grades", "Rubric application varies based on grading order"],
            "after": ["AI pre-grades in seconds per submission", "Consistent, detailed feedback on every paper", "Grades returned within 48 hours", "Instructor reviews AI assessment in 3-5 minutes per paper"]
        },
        "implementation_time": "3-4 weeks",
        "roi_highlight": "Saves instructors 10+ hours per assignment cycle while improving feedback quality"
    },
    "d0214397-567d-43f2-806a-0d00794d283f": {  # Citizen Service Request
        "workflow_steps": [
            {"step": 1, "title": "Request Intake", "description": "Citizens submit requests via web portal, phone, email, or in-person. AI normalizes all inputs into structured requests."},
            {"step": 2, "title": "Classification", "description": "NLP categorizes request type (permits, complaints, information, services) and assigns priority based on urgency and impact."},
            {"step": 3, "title": "Department Routing", "description": "Routes to appropriate department and caseworker based on request type, jurisdiction, and current workload."},
            {"step": 4, "title": "Status Tracking", "description": "Citizens receive automatic status updates. Caseworkers get deadline reminders. Supervisors see response time dashboards."}
        ],
        "benefits": ["Average response time reduced by 50-70%", "Citizens get updates without calling to ask", "Equal service quality regardless of submission channel", "Workload balanced across departments automatically", "Performance metrics available for public accountability"],
        "before_after": {
            "before": ["Requests sit in email inboxes until manually triaged", "Citizens call repeatedly to check status", "Some departments overwhelmed while others are idle", "No visibility into average response times"],
            "after": ["Requests classified and routed within minutes", "Automated status updates at every stage", "Workload distributed evenly across staff", "Real-time dashboards show service performance"]
        },
        "implementation_time": "3-4 weeks",
        "roi_highlight": "Reduces average citizen request response time from 10 days to 3 days"
    },
    "b22032bc-f8ef-4f03-8a7b-020fdbe2e12e": {  # FOIA
        "workflow_steps": [
            {"step": 1, "title": "Request Parsing", "description": "FOIA requests parsed for scope, date ranges, document types, and specific records requested."},
            {"step": 2, "title": "Document Search", "description": "Automated search across document management systems, email archives, and databases for responsive records."},
            {"step": 3, "title": "Redaction Assistance", "description": "AI identifies content requiring redaction under applicable exemptions (privacy, security, deliberative process)."},
            {"step": 4, "title": "Response Assembly", "description": "Compiles response package with cover letter, responsive documents, redaction log, and exemption citations."}
        ],
        "benefits": ["Process 3x more FOIA requests with same staff", "Consistent exemption application reduces legal risk", "Meet statutory deadlines more reliably", "Complete audit trail for every redaction decision", "Reduce backlog of pending requests"],
        "before_after": {
            "before": ["Staff manually searches file shares and email for records", "Redaction decisions inconsistent across reviewers", "Statutory deadlines frequently missed", "Growing backlog of pending requests"],
            "after": ["Automated search returns responsive documents in hours", "AI-suggested redactions with cited exemptions", "Deadline tracking and escalation built in", "Backlog cleared through faster processing"]
        },
        "implementation_time": "4-6 weeks",
        "roi_highlight": "Triples FOIA processing capacity while improving compliance with deadlines"
    },
    "9ec4446b-4f13-447c-8e87-1baba693d991": {  # Grant Application Scoring
        "workflow_steps": [
            {"step": 1, "title": "Application Intake", "description": "Grant applications collected via portal. AI extracts key fields: budget, timeline, objectives, team qualifications."},
            {"step": 2, "title": "Criteria Scoring", "description": "Each application scored against published evaluation criteria. Generates detailed scorecard with evidence."},
            {"step": 3, "title": "Comparative Ranking", "description": "Applications ranked by score with comparative analysis. Flags potential conflicts of interest and compliance issues."},
            {"step": 4, "title": "Panel Preparation", "description": "Generates review panel briefing packages with scorecards, application summaries, and discussion guides."}
        ],
        "benefits": ["Process 5x more applications in same review period", "Consistent scoring against published criteria", "Reduce bias through standardized initial assessment", "Reviewers focus on borderline cases, not obvious ones", "Complete audit trail for funding decisions"],
        "before_after": {
            "before": ["Reviewers read 50-100 page applications end-to-end", "Scoring varies significantly between reviewers", "Review panels spend time on clear accept/reject cases", "Applicants wait months for decisions"],
            "after": ["AI pre-scores against criteria with evidence citations", "Consistent baseline scoring across all applications", "Panels focus discussion on competitive applications", "Decision timelines cut by 40-60%"]
        },
        "implementation_time": "4-6 weeks",
        "roi_highlight": "Reduces grant review cycle by 50% while improving scoring consistency"
    }
}

count = 0
for uid, data in cases.items():
    ws = json.dumps(data["workflow_steps"]).replace("'", "''")
    ben = "{" + ",".join('"' + b.replace("'", "''").replace('"', '\\"') + '"' for b in data["benefits"]) + "}"
    ba = json.dumps(data["before_after"]).replace("'", "''")
    it = data["implementation_time"]
    roi = data["roi_highlight"].replace("'", "''")
    
    sql = f"""UPDATE use_cases SET 
        workflow_steps = '{ws}'::jsonb, 
        benefits = '{ben}'::text[], 
        before_after = '{ba}'::jsonb, 
        implementation_time = '{it}', 
        roi_highlight = '{roi}' 
        WHERE id = '{uid}';"""
    
    result = run_sql(sql)
    count += 1
    if "error" in result.lower():
        print(f"ERROR on {uid}: {result}")
    else:
        print(f"✅ {count}/28 updated")

print(f"\nDone! {count} use cases enriched.")
