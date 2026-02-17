import type { UseCase } from './supabase';

/**
 * Generate use-case-specific rich content when database fields are empty.
 * These are NOT generic templates - they adapt based on industry, department, and title.
 */

export function generateWorkflowSteps(useCase: UseCase) {
  const { title, tools, industry, department, complexity } = useCase;
  
  // Extract key action from title (e.g., "Automated X" -> "X", "Y Processing" -> "Y")
  const action = title.toLowerCase().includes('automat') 
    ? title.replace(/automat(ed|ion|e)/gi, '').trim()
    : title;
  
  const mainTool = tools[0] || 'OpenClaw';
  const systemTools = tools.filter(t => t !== 'OpenClaw' && t !== 'Slack' && t !== 'Email').join(', ') || 'your systems';
  
  const steps = [
    {
      step: 1,
      title: 'Trigger Detection',
      description: `${mainTool} monitors for new ${department.toLowerCase()} events (form submissions, emails, system webhooks, or scheduled triggers) and captures the raw data automatically.`
    },
    {
      step: 2,
      title: 'Data Extraction & Context',
      description: `OpenClaw's AI extracts structured information, validates against business rules, and enriches with context from ${systemTools} to ensure accuracy and completeness.`
    },
    {
      step: 3,
      title: 'Processing & Routing',
      description: complexity === 'Advanced'
        ? `Multi-step workflow processes the data, applies ${industry} compliance rules, routes to appropriate ${department.toLowerCase()} team members, and generates draft outputs or recommendations.`
        : `OpenClaw applies ${industry}-specific logic, routes to the right ${department.toLowerCase()} queue, and prepares outputs for review or auto-execution.`
    },
    {
      step: 4,
      title: 'Execution & Updates',
      description: `Updates ${systemTools}, sends notifications via Slack/email, logs all actions for audit trails, and triggers any follow-up workflows or reminders.`
    }
  ];
  
  if (complexity === 'Simple') {
    return steps.slice(0, 3); // Simpler workflows = fewer steps
  }
  
  return steps;
}

export function generateBenefits(useCase: UseCase) {
  const { time_saved, complexity, industry, department, title } = useCase;
  
  const base = [
    `Reclaim ${time_saved} per week that ${department.toLowerCase()} teams currently spend on manual ${title.toLowerCase().replace(/automat(ed|ion)/gi, '')} tasks`,
    `${complexity === 'Simple' ? '90%' : complexity === 'Moderate' ? '80%' : '70%'} reduction in human error compared to manual ${department.toLowerCase()} processes`,
    `${complexity === 'Simple' ? '3-5x' : complexity === 'Moderate' ? '2-3x' : '1.5-2x'} faster turnaround time from request to completion`,
  ];
  
  // Industry-specific benefits
  const industryBenefits: { [key: string]: string } = {
    'Financial Services': 'Full audit trail for compliance with financial regulations and SOX requirements',
    'Healthcare': 'HIPAA-compliant data handling with encrypted storage and access controls',
    'Legal': 'Defensible documentation trail for malpractice insurance and bar requirements',
    'Insurance': 'Faster claims resolution improves customer satisfaction and NPS scores',
    'Real Estate': 'Improved tenant/buyer experience with faster response times',
    'Retail': 'Better inventory turnover and reduced stockout costs',
    'Manufacturing': 'Reduced downtime and improved equipment OEE (Overall Equipment Effectiveness)',
    'Technology': 'Faster incident resolution reduces MTTR and improves SLA compliance',
    'Education': 'More time for educators to focus on teaching vs administrative tasks',
    'Government': 'Improved citizen satisfaction and reduced response times',
    'Consulting': 'Higher billable utilization and improved project margins',
    'Media': 'Increased content output without additional headcount',
    'Logistics': 'Reduced fuel costs and improved on-time delivery rates',
    'Hospitality': 'Higher guest satisfaction scores and positive review rates',
    'Agriculture': 'Reduced crop loss and improved yield per acre',
    'Energy': 'Reduced outage duration and improved grid reliability',
    'Telecom': 'Lower customer churn and improved first-call resolution',
    'Nonprofit': 'More time for mission work vs administrative overhead'
  };
  
  if (industryBenefits[industry]) {
    base.push(industryBenefits[industry]);
  }
  
  base.push('Scalable solution that handles volume spikes without adding headcount');
  
  return base.slice(0, 5);
}

export function generateBeforeAfter(useCase: UseCase) {
  const { title, department, industry, complexity, tools } = useCase;
  const action = title.toLowerCase();
  
  const before = [
    `${department} team receives requests via scattered channels (email, Slack, meetings, spreadsheets)`,
    `Manual data entry and copy-paste between ${tools.filter(t => t !== 'OpenClaw').slice(0, 2).join(' and ')}`,
    `Inconsistent process execution — depends on who's available and their interpretation`,
    complexity === 'Advanced' ? `Multi-hour turnaround due to handoffs and context-switching` : `Delays waiting for approvals or missing information`,
    `No centralized tracking — requests fall through cracks and get lost`
  ];
  
  const after = [
    `Single automated intake via OpenClaw — all requests captured and structured`,
    `Zero manual data entry — OpenClaw syncs information across systems automatically`,
    `Consistent execution every time using ${industry} best practices and compliance rules`,
    `${complexity === 'Simple' ? 'Minutes' : complexity === 'Moderate' ? '< 1 hour' : 'Same-day'} turnaround with clear status updates`,
    `Full visibility: dashboards, Slack updates, and audit logs for every request`
  ];
  
  return { before: before.slice(0, 4), after: after.slice(0, 4) };
}

export function generateWhoItsFor(useCase: UseCase) {
  const { department, industry, complexity, title } = useCase;
  
  const rolesByDepartment: { [key: string]: string[] } = {
    'Operations': ['operations managers', 'process owners', 'COOs'],
    'Finance': ['finance directors', 'controllers', 'CFOs'],
    'Sales': ['sales operations', 'revenue operations', 'sales leaders'],
    'Marketing': ['marketing operations', 'growth teams', 'CMOs'],
    'Engineering': ['engineering managers', 'platform teams', 'DevOps leads'],
    'Customer Support': ['support managers', 'CX leads', 'service delivery teams'],
    'Legal': ['general counsel', 'legal operations', 'compliance officers'],
    'HR': ['HR operations', 'people ops', 'talent teams'],
    'Executive': ['C-suite executives', 'operations leaders', 'transformation teams']
  };
  
  const roles = rolesByDepartment[department] || ['team leads', 'managers', 'directors'];
  
  const sizeByComplexity = {
    'Simple': '10-50 person teams',
    'Moderate': '50-200 person teams', 
    'Advanced': '200+ person organizations or regulated industries'
  };
  
  return `Ideal for ${roles.join(', ')} at ${industry.toLowerCase()} companies. Best suited for ${sizeByComplexity[complexity]} where ${title.toLowerCase()} is a recurring, high-volume workflow with clear business rules.`;
}

export function generatePrerequisites(useCase: UseCase) {
  const { tools, complexity, industry, department } = useCase;
  
  const base = [
    `Access to ${tools.filter(t => t !== 'OpenClaw').slice(0, 3).join(', ')} with API keys or integration credentials`,
    `Clear documentation of your current ${department.toLowerCase()} workflow and approval chains`,
  ];
  
  if (complexity === 'Advanced') {
    base.push(`IT/security approval for OpenClaw to access ${industry} systems (usually 1-2 week process)`);
    base.push(`Dedicated pilot group willing to provide feedback during 2-4 week rollout`);
  } else if (complexity === 'Moderate') {
    base.push(`1-2 stakeholders available for workflow walkthrough and testing`);
  } else {
    base.push(`30-min kickoff call to map the happy path`);
  }
  
  base.push(`Slack workspace or email for notifications (OpenClaw supports both)`);
  
  return base;
}

export function generateFAQ(useCase: UseCase) {
  const { complexity, time_saved, title, department, industry } = useCase;
  
  const implementationTime = {
    'Simple': '1-2 weeks',
    'Moderate': '2-4 weeks',
    'Advanced': '4-6 weeks'
  };
  
  return [
    {
      question: 'How long does implementation take?',
      answer: `Typically ${implementationTime[complexity]} from kickoff to production. This includes workflow mapping, OpenClaw configuration, testing with your team, and gradual rollout. We start with a pilot group before scaling to the full ${department} team.`
    },
    {
      question: 'Does this replace our team?',
      answer: `No. OpenClaw removes repetitive ${title.toLowerCase()} tasks so your ${department.toLowerCase()} team can focus on judgment calls, exceptions, and strategic work. Humans stay in the loop for approvals, escalations, and edge cases.`
    },
    {
      question: `Can it handle our specific ${industry.toLowerCase()} requirements?`,
      answer: `Yes. OpenClaw is highly customizable and supports ${industry}-specific compliance rules, approval workflows, and integrations. We configure it to match your existing processes rather than forcing you to change how you work.`
    },
    {
      question: 'What if something goes wrong?',
      answer: `OpenClaw logs every action for full auditability. If an automation fails, it sends an alert to your team and falls back to manual processing. You maintain full control and can pause any workflow at any time.`
    }
  ].slice(0, 3);
}

export function generateExampleOutput(useCase: UseCase) {
  const { title, tools, department, complexity } = useCase;
  
  // Generate a styled HTML mock based on the use case type
  const isReport = title.toLowerCase().includes('report');
  const isTicket = title.toLowerCase().includes('ticket') || title.toLowerCase().includes('routing');
  const isNotification = title.toLowerCase().includes('notification') || title.toLowerCase().includes('alert');
  
  if (isReport) {
    return `
      <div class="mock-output report">
        <div class="header">
          <h4>${title}</h4>
          <div class="meta">Generated by OpenClaw • ${new Date().toLocaleDateString()}</div>
        </div>
        <div class="content">
          <div class="section">
            <h5>Executive Summary</h5>
            <p>Automated analysis of ${department.toLowerCase()} data from ${tools.filter(t => t !== 'OpenClaw').slice(0, 2).join(' and ')}...</p>
          </div>
          <div class="section">
            <h5>Key Findings</h5>
            <ul>
              <li><strong>Volume:</strong> 247 items processed this period</li>
              <li><strong>Status:</strong> 89% completed, 8% pending review, 3% exceptions</li>
              <li><strong>Efficiency:</strong> ${complexity === 'Simple' ? '92%' : complexity === 'Moderate' ? '87%' : '82%'} within SLA targets</li>
            </ul>
          </div>
        </div>
      </div>
    `;
  }
  
  if (isTicket) {
    return `
      <div class="mock-output ticket">
        <div class="ticket-header">
          <div class="ticket-id">#${Math.floor(Math.random() * 10000)}</div>
          <div class="ticket-status">Routed to ${department}</div>
        </div>
        <div class="ticket-body">
          <h5>Auto-classified by OpenClaw</h5>
          <div class="field"><strong>Category:</strong> ${title.replace('Automation', '').trim()}</div>
          <div class="field"><strong>Priority:</strong> ${complexity === 'Advanced' ? 'High' : 'Medium'}</div>
          <div class="field"><strong>Assigned to:</strong> ${department} - Team Alpha</div>
          <div class="field"><strong>Context:</strong> Extracted from ${tools.filter(t => t !== 'OpenClaw')[0]} and enriched with historical data</div>
        </div>
      </div>
    `;
  }
  
  if (isNotification) {
    return `
      <div class="mock-output notification">
        <div class="notif-icon">🔔</div>
        <div class="notif-content">
          <h5>${title}</h5>
          <p><strong>OpenClaw detected:</strong> ${title.toLowerCase()} triggered for ${department} review</p>
          <div class="notif-actions">
            <button class="btn-primary">Review Now</button>
            <button class="btn-secondary">Snooze 1hr</button>
          </div>
        </div>
      </div>
    `;
  }
  
  // Generic structured output
  return `
    <div class="mock-output generic">
      <div class="output-header">
        <h5>OpenClaw Output</h5>
        <div class="timestamp">${new Date().toLocaleString()}</div>
      </div>
      <div class="output-body">
        <div class="field-group">
          <label>Processed Data</label>
          <div class="value">Structured output from ${title.toLowerCase()}</div>
        </div>
        <div class="field-group">
          <label>Source</label>
          <div class="value">${tools.filter(t => t !== 'OpenClaw').slice(0, 2).join(', ')}</div>
        </div>
        <div class="field-group">
          <label>Status</label>
          <div class="value">✓ Completed successfully</div>
        </div>
      </div>
    </div>
  `;
}

export function generateKeyMetrics(useCase: UseCase) {
  const { complexity, time_saved } = useCase;
  
  const metrics: { [key: string]: string } = {
    'Time Savings': time_saved,
    'Error Reduction': complexity === 'Simple' ? '90%' : complexity === 'Moderate' ? '85%' : '75%',
    'Processing Speed': complexity === 'Simple' ? '5x faster' : complexity === 'Moderate' ? '3x faster' : '2x faster',
  };
  
  if (complexity === 'Advanced') {
    metrics['Compliance Coverage'] = '100% audit trail';
  } else {
    metrics['Team Satisfaction'] = '+40% (less busywork)';
  }
  
  return metrics;
}
