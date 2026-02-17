import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Shift HQ — Accelerate Your AI Transformation",
  description:
    "We help teams adopt AI through hands-on training and workflow automation. From developer tools like Cursor & Claude Code to enterprise AI agents with OpenClaw.",
  keywords: [
    "AI training",
    "Cursor training",
    "Claude Code",
    "OpenClaw",
    "AI adoption",
    "AI change management",
    "developer AI tools",
    "enterprise AI",
  ],
  openGraph: {
    title: "AI Shift HQ — Accelerate Your AI Transformation",
    description:
      "Hands-on AI training and automation for teams ready to level up.",
    url: "https://aishifthq.com",
    siteName: "AI Shift HQ",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
