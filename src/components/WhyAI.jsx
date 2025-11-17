import React from 'react'
import { Brain, Sparkles, LineChart, Shield } from 'lucide-react'

const stats = [
  { icon: Brain, title: 'AI-first answers', desc: 'People ask ChatGPT, Gemini, Grok, Perplexity for direct answers — not just links.' },
  { icon: Shield, title: 'Trust & freshness', desc: 'Assistants prioritize structured, verified, and up-to-date sources.' },
  { icon: LineChart, title: 'Visibility at stake', desc: 'Businesses unprepared for AI discovery lose recommendations and traffic.' },
  { icon: Sparkles, title: 'Multi-AI readiness', desc: 'Optimize once for cross-assistant compatibility and citations.' },
]

const WhyAI = () => {
  return (
    <section id="why" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-indigo-50" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">AI Search Revolution</h2>
          <p className="mt-4 text-slate-700">People increasingly rely on AI assistants for decisions. To be recommended, your business needs structured, trustworthy, current data.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400 grid place-items-center text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyAI
