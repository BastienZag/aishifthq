import type { Metadata } from 'next';
import UseCasesRouter from './UseCasesRouter';

export const metadata: Metadata = {
  title: 'AI Automation Use Cases — Real-World OpenClaw Examples | OpenClaw Labs',
  description: 'Explore 100+ real-world AI automation use cases powered by OpenClaw. Discover how teams across 20+ industries use AI agents to automate workflows.',
  keywords: 'AI automation use cases, OpenClaw automation examples, workflow automation, AI agents',
  openGraph: {
    title: 'AI Automation Use Cases — OpenClaw Examples',
    description: '100+ real-world AI automation use cases across industries.',
    type: 'website',
    url: 'https://openclawlabs.ai/use-cases',
    siteName: 'OpenClaw Labs',
  },
};

export default function UseCasesPage() {
  return <UseCasesRouter />;
}
