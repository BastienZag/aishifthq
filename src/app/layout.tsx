import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aishifthq.com"),
  title: "AI Shift HQ — Deploy AI Agents That Actually Do the Work",
  description:
    "We deploy open-source AI agents on your infrastructure. Reporting, triage, ops, and follow-ups — automated with approvals and audit trails. No vendor lock-in.",
  keywords: [
    "AI training",
    "Cursor training",
    "Claude Code",
    "OpenClaw",
    "AI adoption",
    "AI workflow automation",
    "developer enablement",
    "AI change management",
    "AI automation use cases",
    "OpenClaw automation examples",
  ],
  authors: [{ name: "AI Shift HQ" }],
  creator: "AI Shift HQ",
  publisher: "AI Shift HQ",
  alternates: {
    canonical: "https://aishifthq.com",
  },
  openGraph: {
    title: "AI Shift HQ — Deploy AI Agents That Actually Do the Work",
    description:
      "Open-source AI agents on your infrastructure. Automated workflows with approvals and audit trails.",
    url: "https://aishifthq.com",
    siteName: "AI Shift HQ",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Shift HQ — Deploy AI Agents That Actually Do the Work",
    description: "Open-source AI agents on your infrastructure. No vendor lock-in.",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
