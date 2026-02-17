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
('Automated Compliance Report Generation', 'AI agent compiles regulatory reports from transaction data, risk assessments, and audit logs.', 'Automatically gather data from multiple systems, apply compliance frameworks, generate formatted reports, and route for approval. Reduces manual data gathering and formatting time by 80%.', 'Financial Services', 'Operations', ARRAY['Slack', 'Database', 'Compliance Tools'], '8-12 hrs/week', 'Moderate', 'clipboard', 'a'),

('Fraud Detection Alert Routing', 'Real-time analysis of transaction patterns with automated escalation to risk teams.', 'Monitor transaction streams, apply ML models for anomaly detection, create structured alerts with context, and route to appropriate team members based on severity and type.', 'Financial Services', 'Operations', ARRAY['Database', 'Slack', 'Risk System'], '5-8 hrs/week', 'Advanced', 'shield', 'c'),

('Client Onboarding Automation', 'Streamline KYC document collection, verification, and account setup workflows.', 'Automated document request emails, OCR extraction of ID documents, verification checks, CRM updates, and account provisioning triggers. Reduces onboarding time from days to hours.', 'Financial Services', 'Sales', ARRAY['Email', 'DocuSign', 'CRM', 'Database'], '10-15 hrs/week', 'Moderate', 'rocket', 'b'),

-- Healthcare
('Patient Intake Form Processing', 'Extract structured data from intake forms and route to appropriate care teams.', 'OCR and NLP extraction of patient information, medical history, insurance details. Auto-populate EHR systems, flag urgent cases, and assign to care coordinators based on condition and specialty.', 'Healthcare', 'Operations', ARRAY['Email', 'EHR', 'Slack'], '12-18 hrs/week', 'Moderate', 'clipboard', 'a'),

('Appointment Reminder Automation', 'Send personalized appointment reminders via SMS/email with rescheduling links.', 'Pull upcoming appointments from scheduling system, generate personalized messages with location, preparation instructions, and one-click reschedule links. Track confirmations and send to no-show risk list.', 'Healthcare', 'Operations', ARRAY['Scheduling System', 'Twilio', 'Email'], '6-10 hrs/week', 'Simple', 'calendar', 'c'),

('Clinical Trial Eligibility Screening', 'Match patient profiles against trial criteria and generate referral recommendations.', 'Analyze patient records against inclusion/exclusion criteria for active trials, calculate eligibility scores, generate referral packets with supporting evidence, and notify research coordinators.', 'Healthcare', 'Operations', ARRAY['EHR', 'Database', 'Email'], '8-12 hrs/week', 'Advanced', 'chart', 'b'),

-- Legal
('Contract Review and Clause Extraction', 'AI analyzes contracts to extract key terms, obligations, and flag non-standard clauses.', 'Upload contracts, apply NLP to identify key sections (payment terms, liabilities, IP rights), extract into structured data, highlight deviations from standard templates, and generate review summaries.', 'Legal', 'Legal', ARRAY['Document Management', 'Database', 'Slack'], '15-20 hrs/week', 'Advanced', 'document', 'a'),

('Legal Research Summarization', 'Automated case law research with summarized findings and citation extraction.', 'Query legal databases, retrieve relevant cases and statutes, generate summaries with key holdings and citations, organize by relevance and jurisdiction, and export to case management system.', 'Legal', 'Legal', ARRAY['LexisNexis', 'Notion', 'Email'], '10-15 hrs/week', 'Advanced', 'search', 'c'),

('Matter Intake and Conflict Checking', 'Streamline new matter intake with automated conflict checks and case setup.', 'Collect client information via form, run conflict checks against existing matters and relationships, create case folders, assign case numbers, and notify assigned attorneys with intake summary.', 'Legal', 'Operations', ARRAY['CRM', 'Database', 'Slack'], '5-8 hrs/week', 'Moderate', 'shield', 'b'),

-- Retail
('Customer Review Sentiment Analysis', 'Analyze product reviews, categorize sentiment, and generate response drafts.', 'Monitor reviews across platforms, apply sentiment analysis, categorize by product/issue type, flag urgent negative reviews, generate personalized response drafts, and route to customer service for approval.', 'Retail', 'Marketing', ARRAY['Review Platforms', 'Slack', 'CRM'], '8-12 hrs/week', 'Moderate', 'star', 'a'),

('Inventory Restock Forecasting', 'Predict inventory needs based on sales trends, seasonality, and promotions.', 'Analyze historical sales data, factor in upcoming promotions and seasonal trends, calculate reorder points, generate purchase orders, and alert procurement team when stock levels trigger reorder thresholds.', 'Retail', 'Operations', ARRAY['Inventory System', 'Database', 'Email'], '6-10 hrs/week', 'Advanced', 'chart', 'c'),

('Personalized Marketing Campaign Generation', 'Create segmented email campaigns based on customer behavior and preferences.', 'Segment customers by purchase history and browsing behavior, generate personalized product recommendations, create email copy variations, schedule sends at optimal times, and track engagement metrics.', 'Retail', 'Marketing', ARRAY['Email Platform', 'CRM', 'Analytics'], '10-15 hrs/week', 'Moderate', 'target', 'b'),

-- Manufacturing
('Quality Assurance Report Automation', 'Aggregate QA data, identify trends, and generate compliance reports.', 'Collect inspection data from production lines, calculate defect rates and trends, identify problematic batches or machines, generate formatted reports, and alert quality managers to threshold breaches.', 'Manufacturing', 'Operations', ARRAY['Database', 'Slack', 'Reporting Tools'], '8-12 hrs/week', 'Moderate', 'clipboard', 'a'),

('Predictive Maintenance Scheduling', 'Analyze equipment sensor data to predict failures and schedule maintenance.', 'Monitor equipment telemetry, apply predictive models to identify failure risk, generate maintenance work orders, schedule downtime to minimize production impact, and notify maintenance teams with parts lists.', 'Manufacturing', 'Operations', ARRAY['IoT Platform', 'CMMS', 'Slack'], '12-18 hrs/week', 'Advanced', 'wrench', 'c'),

('Supply Chain Exception Management', 'Monitor supplier delays and automatically trigger contingency workflows.', 'Track shipments and supplier performance, detect delays or quality issues, calculate production impact, trigger backup supplier orders or production schedule adjustments, and notify planning team.', 'Manufacturing', 'Operations', ARRAY['ERP', 'Email', 'Slack'], '10-15 hrs/week', 'Advanced', 'link', 'b'),

-- Technology
('Automated Code Review Summaries', 'AI reviews pull requests, identifies patterns, and generates review comments.', 'Scan PR diffs, check for style violations, security issues, and test coverage, suggest improvements, generate summary for human reviewers, and post to GitHub/GitLab with inline comments.', 'Technology', 'Engineering', ARRAY['GitHub', 'Slack', 'CI/CD'], '10-15 hrs/week', 'Advanced', 'code', 'a'),

('Incident Response Triage', 'Automatically categorize, prioritize, and route production incidents.', 'Monitor alerting systems, extract incident details, classify by severity and affected systems, assign to on-call engineers, create incident channels, and post runbooks and recent changes for context.', 'Technology', 'Engineering', ARRAY['PagerDuty', 'Slack', 'Jira'], '8-12 hrs/week', 'Moderate', 'alert', 'c'),

('Product Analytics Digest', 'Weekly summary of key product metrics with insights and anomaly alerts.', 'Query analytics platform for core KPIs, identify significant changes or trends, generate visualizations, summarize in plain language, and distribute to product team via Slack and email.', 'Technology', 'Executive', ARRAY['Analytics', 'Slack', 'Email'], '5-8 hrs/week', 'Moderate', 'chart', 'b'),

('Customer Support Ticket Classification', 'Auto-tag and route support tickets based on issue type and urgency.', 'Parse incoming tickets, extract issue type and sentiment, assign priority score, route to specialized queues, suggest knowledge base articles, and generate draft responses for common issues.', 'Technology', 'Customer Support', ARRAY['Zendesk', 'Slack', 'Knowledge Base'], '12-18 hrs/week', 'Moderate', 'ticket', 'a'),

-- Education
('Student Assignment Grading Assistant', 'Automated grading of short-answer questions with feedback generation.', 'Analyze student submissions against rubrics, assign preliminary scores, generate personalized feedback highlighting strengths and areas for improvement, flag edge cases for instructor review.', 'Education', 'Operations', ARRAY['LMS', 'Email', 'Database'], '15-25 hrs/week', 'Advanced', 'clipboard', 'c'),

('Course Recommendation Engine', 'Suggest personalized course paths based on student goals and performance.', 'Analyze student transcripts, career goals, and learning patterns, match against course catalog and prerequisites, generate recommended learning paths, and send personalized emails with enrollment links.', 'Education', 'Operations', ARRAY['LMS', 'Email', 'CRM'], '6-10 hrs/week', 'Moderate', 'target', 'b'),

('Alumni Engagement Automation', 'Track alumni milestones and trigger personalized outreach campaigns.', 'Monitor alumni news and career updates, identify engagement opportunities (anniversaries, promotions, relocations), generate personalized messages, schedule outreach, and track responses in CRM.', 'Education', 'Marketing', ARRAY['CRM', 'Email', 'LinkedIn'], '8-12 hrs/week', 'Simple', 'users', 'a'),

-- Government
('FOIA Request Processing', 'Streamline Freedom of Information Act request intake and fulfillment.', 'Parse request emails, extract required information and date ranges, search document repositories, redact sensitive information, generate response packages, and track compliance deadlines.', 'Government', 'Operations', ARRAY['Email', 'Document Management', 'Database'], '10-15 hrs/week', 'Advanced', 'document', 'c'),

('Citizen Service Request Routing', 'Automatically categorize and route 311-style service requests to departments.', 'Classify incoming requests by type (pothole, noise complaint, permit), extract location and urgency, assign to appropriate department queues, send acknowledgment to citizen, and track resolution SLAs.', 'Government', 'Operations', ARRAY['CRM', 'Email', 'GIS System'], '12-18 hrs/week', 'Moderate', 'ticket', 'b'),

('Grant Application Scoring', 'Pre-screen grant applications against eligibility criteria with scoring.', 'Parse application forms, check eligibility requirements, score applications against evaluation criteria, generate reviewer summaries with key strengths/weaknesses, and rank for review committee.', 'Government', 'Finance', ARRAY['Forms Platform', 'Database', 'Email'], '8-12 hrs/week', 'Advanced', 'star', 'a'),

-- Cross-industry / General
('Meeting Notes to Action Items', 'Extract action items from meeting transcripts and create tasks automatically.', 'Transcribe meetings, identify action items with owners and due dates, create tickets in project management tools, send summary emails to participants, and set follow-up reminders.', 'Technology', 'Operations', ARRAY['Zoom', 'Slack', 'Jira', 'Email'], '6-10 hrs/week', 'Moderate', 'clipboard', 'a'),

('Invoice Processing Automation', 'Extract data from invoices, match to purchase orders, and route for approval.', 'OCR invoice PDFs, extract vendor, amount, line items, match against POs, flag discrepancies, route to appropriate approvers based on amount and department, and update accounting system upon approval.', 'Financial Services', 'Finance', ARRAY['Email', 'Accounting Software', 'Slack'], '10-15 hrs/week', 'Moderate', 'document', 'c'),

('Employee Onboarding Checklist Automation', 'Coordinate cross-functional onboarding tasks with automated reminders.', 'Trigger onboarding workflows on hire date, assign tasks to IT, HR, and managers, send reminders for incomplete items, track completion progress, and generate day-1 welcome packet for new hire.', 'Technology', 'HR', ARRAY['HRIS', 'Slack', 'Email', 'Jira'], '5-8 hrs/week', 'Simple', 'users', 'b');
