-- Create use_cases table
CREATE TABLE IF NOT EXISTS use_cases (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  detailed_description TEXT,
  industry TEXT NOT NULL,
  department TEXT NOT NULL,
  tools TEXT[],
  time_saved TEXT,
  complexity TEXT,
  icon TEXT,
  accent_color TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  published BOOLEAN DEFAULT TRUE
);

-- Enable Row Level Security
ALTER TABLE use_cases ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Public read access" ON use_cases
  FOR SELECT USING (published = true);

-- Seed data with 25+ realistic use cases
INSERT INTO use_cases (title, description, detailed_description, industry, department, tools, time_saved, complexity, icon, accent_color) VALUES

-- Financial Services
('Automated Compliance Report Generation', 'An OpenClaw agent compiles regulatory reports from transaction data, risk assessments, and audit logs.', 'An OpenClaw agent gathers data from multiple systems, apply compliance frameworks, generate formatted reports, and route for approval. Reduces manual data gathering and formatting time by 80%. The agent uses OpenClaw's built-in integrations (Slack, email, browser, database access) to monitor triggers, process data, and execute workflows end-to-end.', 'Financial Services', 'Operations', ARRAY['OpenClaw', 'Slack', 'Database', 'Compliance Tools'], '8-12 hrs/week', 'Moderate', 'clipboard', 'a'),

('Fraud Detection Alert Routing', 'An OpenClaw agent provides real-time analysis of transaction patterns with automated escalation to risk teams.', 'An OpenClaw agent monitors transaction streams, apply ML models for anomaly detection, create structured alerts with context, and route to appropriate team members based on severity and type.', 'Financial Services', 'Operations', ARRAY['OpenClaw', 'Database', 'Slack', 'Risk System'], '5-8 hrs/week', 'Advanced', 'shield', 'c'),

('Client Onboarding Automation', 'An OpenClaw agent streamlines KYC document collection, verification, and account setup workflows.', 'An OpenClaw agent provides automated document request emails, OCR extraction of ID documents, verification checks, CRM updates, and account provisioning triggers. Reduces onboarding time from days to hours. The agent uses OpenClaw's built-in integrations to orchestrate the full workflow across systems.', 'Financial Services', 'Sales', ARRAY['OpenClaw', 'Email', 'DocuSign', 'CRM', 'Database'], '10-15 hrs/week', 'Moderate', 'rocket', 'b'),

-- Healthcare
('Patient Intake Form Processing', 'An OpenClaw agent extracts structured data from intake forms and route to appropriate care teams.', 'An OpenClaw agent uses OCR to and NLP extraction of patient information, medical history, insurance details. Auto-populate EHR systems, flag urgent cases, and assign to care coordinators based on condition and specialty.', 'Healthcare', 'Operations', ARRAY['OpenClaw', 'Email', 'EHR', 'Slack'], '12-18 hrs/week', 'Moderate', 'clipboard', 'a'),

('Appointment Reminder Automation', 'An OpenClaw agent sends personalized appointment reminders via SMS/email with rescheduling links.', 'An OpenClaw agent pulls upcoming appointments from scheduling system, generate personalized messages with location, preparation instructions, and one-click reschedule links. Track confirmations and send to no-show risk list. OpenClaw monitors your scheduling system and handles outreach automatically.', 'Healthcare', 'Operations', ARRAY['OpenClaw', 'Scheduling System', 'Twilio', 'Email'], '6-10 hrs/week', 'Simple', 'calendar', 'c'),

('Clinical Trial Eligibility Screening', 'An OpenClaw agent matches patient profiles against trial criteria and generate referral recommendations.', 'An OpenClaw agent analyzes patient records against inclusion/exclusion criteria for active trials, calculate eligibility scores, generate referral packets with supporting evidence, and notify research coordinators. OpenClaw orchestrates data extraction, matching, and notification across your systems.', 'Healthcare', 'Operations', ARRAY['OpenClaw', 'EHR', 'Database', 'Email'], '8-12 hrs/week', 'Advanced', 'chart', 'b'),

-- Legal
('Contract Review and Clause Extraction', 'An OpenClaw agent analyzes contracts to extract key terms, obligations, and flag non-standard clauses.', 'An OpenClaw agent processes uploaded contracts, apply NLP to identify key sections (payment terms, liabilities, IP rights), extract into structured data, highlight deviations from standard templates, and generate review summaries. OpenClaw handles document analysis and reporting end-to-end using its AI and integration capabilities.', 'Legal', 'Legal', ARRAY['OpenClaw', 'Document Management', 'Database', 'Slack'], '15-20 hrs/week', 'Advanced', 'document', 'a'),

('Legal Research Summarization', 'An OpenClaw agent provides automated case law research with summarized findings and citation extraction.', 'An OpenClaw agent queries legal databases, retrieve relevant cases and statutes, generate summaries with key holdings and citations, organize by relevance and jurisdiction, and export to case management system. OpenClaw queries legal databases and formats results automatically.', 'Legal', 'Legal', ARRAY['OpenClaw', 'LexisNexis', 'Notion', 'Email'], '10-15 hrs/week', 'Advanced', 'search', 'c'),

('Matter Intake and Conflict Checking', 'An OpenClaw agent streamlines new matter intake with automated conflict checks and case setup.', 'An OpenClaw agent collects client information via form, run conflict checks against existing matters and relationships, create case folders, assign case numbers, and notify assigned attorneys with intake summary. OpenClaw orchestrates intake, conflict checking, and case setup across your systems.', 'Legal', 'Operations', ARRAY['OpenClaw', 'CRM', 'Database', 'Slack'], '5-8 hrs/week', 'Moderate', 'shield', 'b'),

-- Retail
('Customer Review Sentiment Analysis', 'An OpenClaw agent analyzes product reviews, categorize sentiment, and generate response drafts.', 'An OpenClaw agent monitors reviews across platforms, apply sentiment analysis, categorize by product/issue type, flag urgent negative reviews, generate personalized response drafts, and route to customer service for approval.', 'Retail', 'Marketing', ARRAY['OpenClaw', 'Review Platforms', 'Slack', 'CRM'], '8-12 hrs/week', 'Moderate', 'star', 'a'),

('Inventory Restock Forecasting', 'An OpenClaw agent predicts inventory needs based on sales trends, seasonality, and promotions.', 'An OpenClaw agent analyzes historical sales data, factor in upcoming promotions and seasonal trends, calculate reorder points, generate purchase orders, and alert procurement team when stock levels trigger reorder thresholds.', 'Retail', 'Operations', ARRAY['OpenClaw', 'Inventory System', 'Database', 'Email'], '6-10 hrs/week', 'Advanced', 'chart', 'c'),

('Personalized Marketing Campaign Generation', 'An OpenClaw agent creates segmented email campaigns based on customer behavior and preferences.', 'An OpenClaw agent segments customers by purchase history and browsing behavior, generate personalized product recommendations, create email copy variations, schedule sends at optimal times, and track engagement metrics. OpenClaw creates, segments, and sends campaigns using email and CRM integrations.', 'Retail', 'Marketing', ARRAY['Email Platform', 'CRM', 'Analytics'], '10-15 hrs/week', 'Moderate', 'target', 'b'),

-- Manufacturing
('Quality Assurance Report Automation', 'Aggregate QA data, identify trends, and generate compliance reports.', 'An OpenClaw agent collects inspection data from production lines, calculate defect rates and trends, identify problematic batches or machines, generate formatted reports, and alert quality managers to threshold breaches. OpenClaw monitors production data and generates compliance reports automatically.', 'Manufacturing', 'Operations', ARRAY['OpenClaw', 'Database', 'Slack', 'Reporting Tools'], '8-12 hrs/week', 'Moderate', 'clipboard', 'a'),

('Predictive Maintenance Scheduling', 'An OpenClaw agent analyzes equipment sensor data to predict failures and schedule maintenance.', 'An OpenClaw agent monitors equipment telemetry, apply predictive models to identify failure risk, generate maintenance work orders, schedule downtime to minimize production impact, and notify maintenance teams with parts lists. OpenClaw analyzes sensor data and schedules maintenance using its CMMS and messaging integrations.', 'Manufacturing', 'Operations', ARRAY['OpenClaw', 'IoT Platform', 'CMMS', 'Slack'], '12-18 hrs/week', 'Advanced', 'wrench', 'c'),

('Supply Chain Exception Management', 'An OpenClaw agent monitors supplier delays and automatically trigger contingency workflows.', 'An OpenClaw agent tracks shipments and supplier performance, detect delays or quality issues, calculate production impact, trigger backup supplier orders or production schedule adjustments, and notify planning team. OpenClaw tracks supply chain status and triggers contingency workflows across ERP and messaging tools.', 'Manufacturing', 'Operations', ARRAY['OpenClaw', 'ERP', 'Email', 'Slack'], '10-15 hrs/week', 'Advanced', 'link', 'b'),

-- Technology
('Automated Code Review Summaries', 'An OpenClaw agent reviews pull requests, identifies patterns, and generates review comments.', 'An OpenClaw agent scans PR diffs, check for style violations, security issues, and test coverage, suggest improvements, generate summary for human reviewers, and post to GitHub/GitLab with inline comments. OpenClaw reviews code changes and posts feedback using GitHub integrations.', 'Technology', 'Engineering', ARRAY['OpenClaw', 'GitHub', 'Slack', 'CI/CD'], '10-15 hrs/week', 'Advanced', 'code', 'a'),

('Incident Response Triage', 'Automatically categorize, prioritize, and route production incidents.', 'An OpenClaw agent monitors alerting systems, extract incident details, classify by severity and affected systems, assign to on-call engineers, create incident channels, and post runbooks and recent changes for context. OpenClaw classifies incidents and routes them to on-call engineers with relevant context.', 'Technology', 'Engineering', ARRAY['OpenClaw', 'PagerDuty', 'Slack', 'Jira'], '8-12 hrs/week', 'Moderate', 'alert', 'c'),

('Product Analytics Digest', 'Weekly summary of key product metrics with insights and anomaly alerts.', 'An OpenClaw agent queries analytics platform for core KPIs, identify significant changes or trends, generate visualizations, summarize in plain language, and distribute to product team via Slack and email. OpenClaw generates analytics summaries and distributes them automatically.', 'Technology', 'Executive', ARRAY['OpenClaw', 'Analytics', 'Slack', 'Email'], '5-8 hrs/week', 'Moderate', 'chart', 'b'),

('Customer Support Ticket Classification', 'Auto-tag and route support tickets based on issue type and urgency.', 'An OpenClaw agent parses incoming tickets, extract issue type and sentiment, assign priority score, route to specialized queues, suggest knowledge base articles, and generate draft responses for common issues. OpenClaw classifies tickets and routes them using Zendesk and Slack integrations.', 'Technology', 'Customer Support', ARRAY['OpenClaw', 'Zendesk', 'Slack', 'Knowledge Base'], '12-18 hrs/week', 'Moderate', 'ticket', 'a'),

-- Education
('Student Assignment Grading Assistant', 'An OpenClaw agent provides automated grading of short-answer questions with feedback generation.', 'An OpenClaw agent analyzes student submissions against rubrics, assign preliminary scores, generate personalized feedback highlighting strengths and areas for improvement, flag edge cases for instructor review. OpenClaw grades assignments and generates feedback using LMS integrations.', 'Education', 'Operations', ARRAY['OpenClaw', 'LMS', 'Email', 'Database'], '15-25 hrs/week', 'Advanced', 'clipboard', 'c'),

('Course Recommendation Engine', 'An OpenClaw agent suggests personalized course paths based on student goals and performance.', 'An OpenClaw agent analyzes student transcripts, career goals, and learning patterns, match against course catalog and prerequisites, generate recommended learning paths, and send personalized emails with enrollment links. OpenClaw analyzes transcripts and recommends courses automatically.', 'Education', 'Operations', ARRAY['OpenClaw', 'LMS', 'Email', 'CRM'], '6-10 hrs/week', 'Moderate', 'target', 'b'),

('Alumni Engagement Automation', 'An OpenClaw agent tracks alumni milestones and trigger personalized outreach campaigns.', 'An OpenClaw agent monitors alumni news and career updates, identify engagement opportunities (anniversaries, promotions, relocations), generate personalized messages, schedule outreach, and track responses in CRM. OpenClaw monitors alumni activity and triggers personalized outreach campaigns.', 'Education', 'Marketing', ARRAY['OpenClaw', 'CRM', 'Email', 'LinkedIn'], '8-12 hrs/week', 'Simple', 'users', 'a'),

-- Government
('FOIA Request Processing', 'An OpenClaw agent streamlines Freedom of Information Act request intake and fulfillment.', 'An OpenClaw agent parses request emails, extract required information and date ranges, search document repositories, redact sensitive information, generate response packages, and track compliance deadlines. OpenClaw handles FOIA request processing and document preparation end-to-end.', 'Government', 'Operations', ARRAY['OpenClaw', 'Email', 'Document Management', 'Database'], '10-15 hrs/week', 'Advanced', 'document', 'c'),

('Citizen Service Request Routing', 'Automatically categorize and route 311-style service requests to departments.', 'An OpenClaw agent classifies incoming requests by type (pothole, noise complaint, permit), extract location and urgency, assign to appropriate department queues, send acknowledgment to citizen, and track resolution SLAs. OpenClaw routes service requests and tracks resolution using CRM and GIS integrations.', 'Government', 'Operations', ARRAY['OpenClaw', 'CRM', 'Email', 'GIS System'], '12-18 hrs/week', 'Moderate', 'ticket', 'b'),

('Grant Application Scoring', 'An OpenClaw agent pre-screens grant applications against eligibility criteria with scoring.', 'An OpenClaw agent parses application forms, check eligibility requirements, score applications against evaluation criteria, generate reviewer summaries with key strengths/weaknesses, and rank for review committee. OpenClaw pre-screens applications and generates reviewer summaries automatically.', 'Government', 'Finance', ARRAY['OpenClaw', 'Forms Platform', 'Database', 'Email'], '8-12 hrs/week', 'Advanced', 'star', 'a'),

-- Cross-industry / General
('Meeting Notes to Action Items', 'An OpenClaw agent extracts action items from meeting transcripts and create tasks automatically.', 'An OpenClaw agent transcribes meetings, identify action items with owners and due dates, create tickets in project management tools, send summary emails to participants, and set follow-up reminders. OpenClaw extracts action items from meetings and creates tasks across project management tools.', 'Technology', 'Operations', ARRAY['OpenClaw', 'Zoom', 'Slack', 'Jira', 'Email'], '6-10 hrs/week', 'Moderate', 'clipboard', 'a'),

('Invoice Processing Automation', 'An OpenClaw agent extracts data from invoices, match to purchase orders, and route for approval.', 'An OpenClaw agent uses OCR to invoice PDFs, extract vendor, amount, line items, match against POs, flag discrepancies, route to appropriate approvers based on amount and department, and update accounting system upon approval. OpenClaw processes invoices and routes them for approval using OCR and accounting integrations.', 'Financial Services', 'Finance', ARRAY['OpenClaw', 'Email', 'Accounting Software', 'Slack'], '10-15 hrs/week', 'Moderate', 'document', 'c'),

('Employee Onboarding Checklist Automation', 'An OpenClaw agent coordinates cross-functional onboarding tasks with automated reminders.', 'An OpenClaw agent triggers onboarding workflows on hire date, assign tasks to IT, HR, and managers, send reminders for incomplete items, track completion progress, and generate day-1 welcome packet for new hire. OpenClaw coordinates onboarding tasks across IT, HR, and management systems.', 'Technology', 'HR', ARRAY['OpenClaw', 'HRIS', 'Slack', 'Email', 'Jira'], '5-8 hrs/week', 'Simple', 'users', 'b');
