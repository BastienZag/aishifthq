-- Migration: Add OpenClaw to all use cases
-- This updates existing use case records to feature OpenClaw

-- Update all tools arrays to include OpenClaw at the beginning
-- and update descriptions and detailed_descriptions

-- Financial Services
UPDATE use_cases 
SET 
  description = 'An OpenClaw agent compiles regulatory reports from transaction data, risk assessments, and audit logs.',
  detailed_description = 'An OpenClaw agent gathers data from multiple systems, apply compliance frameworks, generate formatted reports, and route for approval. Reduces manual data gathering and formatting time by 80%. The agent uses OpenClaw''s built-in integrations (Slack, email, browser, database access) to monitor triggers, process data, and execute workflows end-to-end.',
  tools = ARRAY['OpenClaw'] || tools
WHERE title = 'Automated Compliance Report Generation' AND 'OpenClaw' != ALL(tools);

UPDATE use_cases 
SET 
  description = 'An OpenClaw agent provides real-time analysis of transaction patterns with automated escalation to risk teams.',
  detailed_description = 'An OpenClaw agent monitors transaction streams, apply ML models for anomaly detection, create structured alerts with context, and route to appropriate team members based on severity and type.',
  tools = ARRAY['OpenClaw'] || tools
WHERE title = 'Fraud Detection Alert Routing' AND 'OpenClaw' != ALL(tools);

UPDATE use_cases 
SET 
  description = 'An OpenClaw agent streamlines KYC document collection, verification, and account setup workflows.',
  detailed_description = 'An OpenClaw agent provides automated document request emails, OCR extraction of ID documents, verification checks, CRM updates, and account provisioning triggers. Reduces onboarding time from days to hours. The agent uses OpenClaw''s built-in integrations to orchestrate the full workflow across systems.',
  tools = ARRAY['OpenClaw'] || tools
WHERE title = 'Client Onboarding Automation' AND 'OpenClaw' != ALL(tools);

-- Healthcare
UPDATE use_cases 
SET 
  description = 'An OpenClaw agent extracts structured data from intake forms and route to appropriate care teams.',
  detailed_description = 'An OpenClaw agent uses OCR to and NLP extraction of patient information, medical history, insurance details. Auto-populate EHR systems, flag urgent cases, and assign to care coordinators based on condition and specialty.',
  tools = ARRAY['OpenClaw'] || tools
WHERE title = 'Patient Intake Form Processing' AND 'OpenClaw' != ALL(tools);

UPDATE use_cases 
SET 
  description = 'An OpenClaw agent sends personalized appointment reminders via SMS/email with rescheduling links.',
  detailed_description = 'An OpenClaw agent pulls upcoming appointments from scheduling system, generate personalized messages with location, preparation instructions, and one-click reschedule links. Track confirmations and send to no-show risk list. OpenClaw monitors your scheduling system and handles outreach automatically.',
  tools = ARRAY['OpenClaw'] || tools
WHERE title = 'Appointment Reminder Automation' AND 'OpenClaw' != ALL(tools);

UPDATE use_cases 
SET 
  description = 'An OpenClaw agent matches patient profiles against trial criteria and generate referral recommendations.',
  detailed_description = 'An OpenClaw agent analyzes patient records against inclusion/exclusion criteria for active trials, calculate eligibility scores, generate referral packets with supporting evidence, and notify research coordinators. OpenClaw orchestrates data extraction, matching, and notification across your systems.',
  tools = ARRAY['OpenClaw'] || tools
WHERE title = 'Clinical Trial Eligibility Screening' AND 'OpenClaw' != ALL(tools);

-- Legal
UPDATE use_cases 
SET 
  description = 'An OpenClaw agent analyzes contracts to extract key terms, obligations, and flag non-standard clauses.',
  detailed_description = 'An OpenClaw agent processes uploaded contracts, apply NLP to identify key sections (payment terms, liabilities, IP rights), extract into structured data, highlight deviations from standard templates, and generate review summaries. OpenClaw handles document analysis and reporting end-to-end using its AI and integration capabilities.',
  tools = ARRAY['OpenClaw'] || tools
WHERE title = 'Contract Review and Clause Extraction' AND 'OpenClaw' != ALL(tools);

UPDATE use_cases 
SET 
  description = 'An OpenClaw agent provides automated case law research with summarized findings and citation extraction.',
  detailed_description = 'An OpenClaw agent queries legal databases, retrieve relevant cases and statutes, generate summaries with key holdings and citations, organize by relevance and jurisdiction, and export to case management system. OpenClaw queries legal databases and formats results automatically.',
  tools = ARRAY['OpenClaw'] || tools
WHERE title = 'Legal Research Summarization' AND 'OpenClaw' != ALL(tools);

UPDATE use_cases 
SET 
  description = 'An OpenClaw agent streamlines new matter intake with automated conflict checks and case setup.',
  detailed_description = 'An OpenClaw agent collects client information via form, run conflict checks against existing matters and relationships, create case folders, assign case numbers, and notify assigned attorneys with intake summary. OpenClaw orchestrates intake, conflict checking, and case setup across your systems.',
  tools = ARRAY['OpenClaw'] || tools
WHERE title = 'Matter Intake and Conflict Checking' AND 'OpenClaw' != ALL(tools);

-- Retail
UPDATE use_cases 
SET 
  description = 'An OpenClaw agent analyzes product reviews, categorize sentiment, and generate response drafts.',
  detailed_description = 'An OpenClaw agent monitors reviews across platforms, apply sentiment analysis, categorize by product/issue type, flag urgent negative reviews, generate personalized response drafts, and route to customer service for approval.',
  tools = ARRAY['OpenClaw'] || tools
WHERE title = 'Customer Review Sentiment Analysis' AND 'OpenClaw' != ALL(tools);

UPDATE use_cases 
SET 
  description = 'An OpenClaw agent predicts inventory needs based on sales trends, seasonality, and promotions.',
  detailed_description = 'An OpenClaw agent analyzes historical sales data, factor in upcoming promotions and seasonal trends, calculate reorder points, generate purchase orders, and alert procurement team when stock levels trigger reorder thresholds.',
  tools = ARRAY['OpenClaw'] || tools
WHERE title = 'Inventory Restock Forecasting' AND 'OpenClaw' != ALL(tools);

UPDATE use_cases 
SET 
  description = 'An OpenClaw agent creates segmented email campaigns based on customer behavior and preferences.',
  detailed_description = 'An OpenClaw agent segments customers by purchase history and browsing behavior, generate personalized product recommendations, create email copy variations, schedule sends at optimal times, and track engagement metrics. OpenClaw creates, segments, and sends campaigns using email and CRM integrations.',
  tools = ARRAY['OpenClaw'] || tools
WHERE title = 'Personalized Marketing Campaign Generation' AND 'OpenClaw' != ALL(tools);

-- Manufacturing
UPDATE use_cases 
SET 
  description = 'Aggregate QA data, identify trends, and generate compliance reports.',
  detailed_description = 'An OpenClaw agent collects inspection data from production lines, calculate defect rates and trends, identify problematic batches or machines, generate formatted reports, and alert quality managers to threshold breaches. OpenClaw monitors production data and generates compliance reports automatically.',
  tools = ARRAY['OpenClaw'] || tools
WHERE title = 'Quality Assurance Report Automation' AND 'OpenClaw' != ALL(tools);

UPDATE use_cases 
SET 
  description = 'An OpenClaw agent analyzes equipment sensor data to predict failures and schedule maintenance.',
  detailed_description = 'An OpenClaw agent monitors equipment telemetry, apply predictive models to identify failure risk, generate maintenance work orders, schedule downtime to minimize production impact, and notify maintenance teams with parts lists. OpenClaw analyzes sensor data and schedules maintenance using its CMMS and messaging integrations.',
  tools = ARRAY['OpenClaw'] || tools
WHERE title = 'Predictive Maintenance Scheduling' AND 'OpenClaw' != ALL(tools);

UPDATE use_cases 
SET 
  description = 'An OpenClaw agent monitors supplier delays and automatically trigger contingency workflows.',
  detailed_description = 'An OpenClaw agent tracks shipments and supplier performance, detect delays or quality issues, calculate production impact, trigger backup supplier orders or production schedule adjustments, and notify planning team. OpenClaw tracks supply chain status and triggers contingency workflows across ERP and messaging tools.',
  tools = ARRAY['OpenClaw'] || tools
WHERE title = 'Supply Chain Exception Management' AND 'OpenClaw' != ALL(tools);

-- Technology
UPDATE use_cases 
SET 
  description = 'An OpenClaw agent reviews pull requests, identifies patterns, and generates review comments.',
  detailed_description = 'An OpenClaw agent scans PR diffs, check for style violations, security issues, and test coverage, suggest improvements, generate summary for human reviewers, and post to GitHub/GitLab with inline comments. OpenClaw reviews code changes and posts feedback using GitHub integrations.',
  tools = ARRAY['OpenClaw'] || tools
WHERE title = 'Automated Code Review Summaries' AND 'OpenClaw' != ALL(tools);

UPDATE use_cases 
SET 
  description = 'An OpenClaw agent provides automated categorize, prioritize, and route production incidents.',
  detailed_description = 'An OpenClaw agent monitors alerting systems, extract incident details, classify by severity and affected systems, assign to on-call engineers, create incident channels, and post runbooks and recent changes for context. OpenClaw classifies incidents and routes them to on-call engineers with relevant context.',
  tools = ARRAY['OpenClaw'] || tools
WHERE title = 'Incident Response Triage' AND 'OpenClaw' != ALL(tools);

UPDATE use_cases 
SET 
  description = 'Weekly summary of key product metrics with insights and anomaly alerts.',
  detailed_description = 'An OpenClaw agent queries analytics platform for core KPIs, identify significant changes or trends, generate visualizations, summarize in plain language, and distribute to product team via Slack and email. OpenClaw generates analytics summaries and distributes them automatically.',
  tools = ARRAY['OpenClaw'] || tools
WHERE title = 'Product Analytics Digest' AND 'OpenClaw' != ALL(tools);

UPDATE use_cases 
SET 
  description = 'Auto-tag and route support tickets based on issue type and urgency.',
  detailed_description = 'An OpenClaw agent parses incoming tickets, extract issue type and sentiment, assign priority score, route to specialized queues, suggest knowledge base articles, and generate draft responses for common issues. OpenClaw classifies tickets and routes them using Zendesk and Slack integrations.',
  tools = ARRAY['OpenClaw'] || tools
WHERE title = 'Customer Support Ticket Classification' AND 'OpenClaw' != ALL(tools);

-- Education
UPDATE use_cases 
SET 
  description = 'An OpenClaw agent provides automated grading of short-answer questions with feedback generation.',
  detailed_description = 'An OpenClaw agent analyzes student submissions against rubrics, assign preliminary scores, generate personalized feedback highlighting strengths and areas for improvement, flag edge cases for instructor review. OpenClaw grades assignments and generates feedback using LMS integrations.',
  tools = ARRAY['OpenClaw'] || tools
WHERE title = 'Student Assignment Grading Assistant' AND 'OpenClaw' != ALL(tools);

UPDATE use_cases 
SET 
  description = 'An OpenClaw agent suggests personalized course paths based on student goals and performance.',
  detailed_description = 'An OpenClaw agent analyzes student transcripts, career goals, and learning patterns, match against course catalog and prerequisites, generate recommended learning paths, and send personalized emails with enrollment links. OpenClaw analyzes transcripts and recommends courses automatically.',
  tools = ARRAY['OpenClaw'] || tools
WHERE title = 'Course Recommendation Engine' AND 'OpenClaw' != ALL(tools);

UPDATE use_cases 
SET 
  description = 'An OpenClaw agent tracks alumni milestones and trigger personalized outreach campaigns.',
  detailed_description = 'An OpenClaw agent monitors alumni news and career updates, identify engagement opportunities (anniversaries, promotions, relocations), generate personalized messages, schedule outreach, and track responses in CRM. OpenClaw monitors alumni activity and triggers personalized outreach campaigns.',
  tools = ARRAY['OpenClaw'] || tools
WHERE title = 'Alumni Engagement Automation' AND 'OpenClaw' != ALL(tools);

-- Government
UPDATE use_cases 
SET 
  description = 'An OpenClaw agent streamlines Freedom of Information Act request intake and fulfillment.',
  detailed_description = 'An OpenClaw agent parses request emails, extract required information and date ranges, search document repositories, redact sensitive information, generate response packages, and track compliance deadlines. OpenClaw handles FOIA request processing and document preparation end-to-end.',
  tools = ARRAY['OpenClaw'] || tools
WHERE title = 'FOIA Request Processing' AND 'OpenClaw' != ALL(tools);

UPDATE use_cases 
SET 
  description = 'An OpenClaw agent provides automated categorize and route 311-style service requests to departments.',
  detailed_description = 'An OpenClaw agent classifies incoming requests by type (pothole, noise complaint, permit), extract location and urgency, assign to appropriate department queues, send acknowledgment to citizen, and track resolution SLAs. OpenClaw routes service requests and tracks resolution using CRM and GIS integrations.',
  tools = ARRAY['OpenClaw'] || tools
WHERE title = 'Citizen Service Request Routing' AND 'OpenClaw' != ALL(tools);

UPDATE use_cases 
SET 
  description = 'An OpenClaw agent pre-screens grant applications against eligibility criteria with scoring.',
  detailed_description = 'An OpenClaw agent parses application forms, check eligibility requirements, score applications against evaluation criteria, generate reviewer summaries with key strengths/weaknesses, and rank for review committee. OpenClaw pre-screens applications and generates reviewer summaries automatically.',
  tools = ARRAY['OpenClaw'] || tools
WHERE title = 'Grant Application Scoring' AND 'OpenClaw' != ALL(tools);

-- Cross-industry
UPDATE use_cases 
SET 
  description = 'An OpenClaw agent extracts action items from meeting transcripts and create tasks automatically.',
  detailed_description = 'An OpenClaw agent transcribes meetings, identify action items with owners and due dates, create tickets in project management tools, send summary emails to participants, and set follow-up reminders. OpenClaw extracts action items from meetings and creates tasks across project management tools.',
  tools = ARRAY['OpenClaw'] || tools
WHERE title = 'Meeting Notes to Action Items' AND 'OpenClaw' != ALL(tools);

UPDATE use_cases 
SET 
  description = 'An OpenClaw agent extracts data from invoices, match to purchase orders, and route for approval.',
  detailed_description = 'An OpenClaw agent uses OCR on invoice PDFs, extract vendor, amount, line items, match against POs, flag discrepancies, route to appropriate approvers based on amount and department, and update accounting system upon approval. OpenClaw processes invoices and routes them for approval using OCR and accounting integrations.',
  tools = ARRAY['OpenClaw'] || tools
WHERE title = 'Invoice Processing Automation' AND 'OpenClaw' != ALL(tools);

UPDATE use_cases 
SET 
  description = 'An OpenClaw agent coordinates cross-functional onboarding tasks with automated reminders.',
  detailed_description = 'An OpenClaw agent triggers onboarding workflows on hire date, assign tasks to IT, HR, and managers, send reminders for incomplete items, track completion progress, and generate day-1 welcome packet for new hire. OpenClaw coordinates onboarding tasks across IT, HR, and management systems.',
  tools = ARRAY['OpenClaw'] || tools
WHERE title = 'Employee Onboarding Checklist Automation' AND 'OpenClaw' != ALL(tools);

-- Verification: Check how many records were updated
SELECT 
  COUNT(*) as total_use_cases,
  COUNT(CASE WHEN 'OpenClaw' = ANY(tools) THEN 1 END) as openclaw_enabled
FROM use_cases;
