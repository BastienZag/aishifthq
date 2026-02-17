import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50" style={{ background: "rgba(10, 15, 28, 0.8)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="AI Shift HQ" width={40} height={40} className="rounded-lg" />
            <span className="text-xl font-bold text-white">AI Shift HQ</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm text-gray-300 hover:text-white transition-colors">Services</a>
            <a href="#how-it-works" className="text-sm text-gray-300 hover:text-white transition-colors">How It Works</a>
            <a href="#contact" className="text-sm font-semibold text-white px-5 py-2.5 rounded-full transition-all hover:scale-105" style={{ background: "linear-gradient(135deg, #0066FF, #00D4FF)" }}>
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background gradient */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(0,102,255,0.15) 0%, transparent 60%)" }} />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ background: "radial-gradient(circle, #0066FF, transparent)" }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: "radial-gradient(circle, #00D4FF, transparent)" }} />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-sm" style={{ background: "rgba(0,102,255,0.1)", border: "1px solid rgba(0,102,255,0.3)" }}>
            <span style={{ color: "#00D4FF" }}>⚡</span>
            <span className="text-gray-300">Now offering hands-on AI training for teams</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Your team&apos;s AI
            <br />
            <span style={{ background: "linear-gradient(135deg, #0066FF, #00D4FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              transformation starts here
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            We help developers and teams adopt AI tools through hands-on training
            and workflow automation. From Cursor &amp; Claude Code to enterprise AI agents.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="px-8 py-4 rounded-full text-white font-semibold text-lg transition-all hover:scale-105 hover:shadow-lg" style={{ background: "linear-gradient(135deg, #0066FF, #00D4FF)", boxShadow: "0 0 30px rgba(0,102,255,0.3)" }}>
              Book a Free Consultation
            </a>
            <a href="#services" className="px-8 py-4 rounded-full text-white font-semibold text-lg transition-all hover:scale-105" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What We Do</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Two core services designed to accelerate your team&apos;s AI adoption
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div className="p-8 rounded-2xl transition-all hover:scale-[1.02]" style={{ background: "linear-gradient(135deg, rgba(0,102,255,0.1), rgba(0,212,255,0.05))", border: "1px solid rgba(0,102,255,0.2)" }}>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-2xl" style={{ background: "rgba(0,102,255,0.15)" }}>
                🧑‍💻
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">AI Developer Training</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Hands-on workshops teaching your dev team to 10x their productivity with
                AI-powered coding tools.
              </p>
              <ul className="space-y-3">
                {["Cursor IDE mastery", "Claude Code & AI pair programming", "AI-assisted code review & debugging", "Custom workflow integration"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300">
                    <span style={{ color: "#00D4FF" }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Service 2 */}
            <div className="p-8 rounded-2xl transition-all hover:scale-[1.02]" style={{ background: "linear-gradient(135deg, rgba(0,212,255,0.1), rgba(0,102,255,0.05))", border: "1px solid rgba(0,212,255,0.2)" }}>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-2xl" style={{ background: "rgba(0,212,255,0.15)" }}>
                🤖
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">AI Workflow Automation</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Deploy AI agents that automate repetitive tasks across your organisation using OpenClaw and custom integrations.
              </p>
              <ul className="space-y-3">
                {["AI agent setup & configuration", "Task automation across tools", "Custom integrations (Slack, email, CRM)", "Ongoing optimisation & support"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300">
                    <span style={{ color: "#00D4FF" }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-24" style={{ background: "rgba(0,0,0,0.3)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Simple, structured, and tailored to your team
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Discovery Call", desc: "We assess your team's current workflow, tools, and AI readiness to create a custom plan." },
              { step: "02", title: "Hands-On Training", desc: "Interactive workshops with your real codebase and workflows. No generic slides — real practice." },
              { step: "03", title: "Ongoing Support", desc: "Post-training support, agent deployment, and continuous optimisation as AI tools evolve." },
            ].map((item) => (
              <div key={item.step} className="text-center p-8">
                <div className="text-6xl font-extrabold mb-4" style={{ background: "linear-gradient(135deg, #0066FF, #00D4FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", opacity: 0.5 }}>
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10x", label: "Developer productivity boost" },
              { number: "50%", label: "Less time on repetitive tasks" },
              { number: "1hr", label: "To get your team started" },
              { number: "24/7", label: "AI agents working for you" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-extrabold mb-2" style={{ background: "linear-gradient(135deg, #0066FF, #00D4FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  {stat.number}
                </div>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="py-24 relative">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(0,102,255,0.15) 0%, transparent 60%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to shift?
          </h2>
          <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
            Book a free 30-minute discovery call. We&apos;ll assess your team&apos;s AI readiness
            and recommend the best path forward.
          </p>
          <a
            href="mailto:hello@aishifthq.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-lg transition-all hover:scale-105"
            style={{ background: "linear-gradient(135deg, #0066FF, #00D4FF)", boxShadow: "0 0 40px rgba(0,102,255,0.4)" }}
          >
            hello@aishifthq.com
          </a>
          <p className="text-sm text-gray-500 mt-4">
            Based in Sydney, Australia — working with teams globally
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="AI Shift HQ" width={28} height={28} className="rounded-md" />
            <span className="text-sm text-gray-400">© 2026 AI Shift HQ. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="mailto:hello@aishifthq.com" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
