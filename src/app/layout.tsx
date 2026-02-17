import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Shift HQ — Make AI adoption real",
  description:
    "Hands-on AI training + workflow automation for teams. Cursor & Claude Code workshops, and OpenClaw agents that remove repetitive work.",
  keywords: [
    "AI training",
    "Cursor training",
    "Claude Code",
    "OpenClaw",
    "AI adoption",
    "AI workflow automation",
    "developer enablement",
    "AI change management",
  ],
  openGraph: {
    title: "AI Shift HQ — Make AI adoption real",
    description:
      "Hands-on AI training + workflow automation for teams. Practical workshops, real outcomes.",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
