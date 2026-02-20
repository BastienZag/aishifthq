import { onRequest } from "firebase-functions/v2/https";
import { defineString } from "firebase-functions/params";

const slackBotToken = defineString("SLACK_BOT_TOKEN");
const slackChannelId = defineString("SLACK_CHANNEL_ID");
const notionApiKey = defineString("NOTION_API_KEY");
const notionDatabaseId = defineString("NOTION_DATABASE_ID");

const ALLOWED_ORIGINS = [
  "https://aishifthq.web.app",
  "https://aishifthq.com",
  "https://www.aishifthq.com",
  "https://openclawlabs.ai",
  "https://www.openclawlabs.ai",
  "http://localhost:3000",
];

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message?: string;
  useCaseTitle?: string;
}

function setCors(req: any, res: any): boolean {
  const origin = req.headers.origin || "";
  if (ALLOWED_ORIGINS.includes(origin)) {
    res.set("Access-Control-Allow-Origin", origin);
  }
  res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(204).send("");
    return true;
  }
  return false;
}

function validate(body: any): { valid: boolean; error?: string; data?: ContactFormData } {
  if (!body.name?.trim()) return { valid: false, error: "Name is required" };
  if (!body.email?.trim()) return { valid: false, error: "Email is required" };
  return { valid: true, data: body as ContactFormData };
}

async function postToSlack(data: ContactFormData): Promise<void> {
  const token = slackBotToken.value();
  const channel = slackChannelId.value();
  if (!token || !channel) return;

  const blocks = [
    {
      type: "header",
      text: { type: "plain_text", text: "🔔 New Contact Form Submission", emoji: true },
    },
    {
      type: "section",
      fields: [
        { type: "mrkdwn", text: `*Name:*\n${data.name}` },
        { type: "mrkdwn", text: `*Email:*\n${data.email}` },
        ...(data.company ? [{ type: "mrkdwn", text: `*Company:*\n${data.company}` }] : []),
        ...(data.useCaseTitle ? [{ type: "mrkdwn", text: `*Use Case:*\n${data.useCaseTitle}` }] : []),
      ],
    },
    ...(data.message
      ? [
          {
            type: "section",
            text: { type: "mrkdwn", text: `*Message:*\n${data.message}` },
          },
        ]
      : []),
    {
      type: "context",
      elements: [{ type: "mrkdwn", text: `Submitted from OpenClaw Labs website` }],
    },
  ];

  const fallbackText = `New contact: ${data.name} (${data.email})${data.company ? ` from ${data.company}` : ""}`;

  await fetch("https://slack.com/api/chat.postMessage", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ channel, text: fallbackText, blocks }),
  });
}

async function addToNotion(data: ContactFormData): Promise<void> {
  const apiKey = notionApiKey.value();
  const dbId = notionDatabaseId.value();
  if (!apiKey || !dbId) return;

  const properties: any = {
    "Name": { title: [{ text: { content: data.name } }] },
    "Email": { email: data.email },
    "Status": { select: { name: "New" } },
    "Submitted At": { date: { start: new Date().toISOString() } },
  };
  if (data.company) {
    properties["Company"] = { rich_text: [{ text: { content: data.company } }] };
  }
  if (data.message) {
    properties["Message"] = { rich_text: [{ text: { content: data.message.slice(0, 2000) } }] };
  }
  if (data.useCaseTitle) {
    properties["Use Case"] = { rich_text: [{ text: { content: data.useCaseTitle } }] };
  }

  await fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "Notion-Version": "2022-06-28",
    },
    body: JSON.stringify({ parent: { database_id: dbId }, properties }),
  });
}

export const contactSubmit = onRequest({ region: "australia-southeast1" }, async (req, res) => {
  if (setCors(req, res)) return;

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { valid, error, data } = validate(req.body);
  if (!valid || !data) {
    res.status(400).json({ error });
    return;
  }

  try {
    await Promise.all([postToSlack(data), addToNotion(data)]);
    res.status(200).json({ success: true });
  } catch (err: any) {
    console.error("Error processing contact submission:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});
