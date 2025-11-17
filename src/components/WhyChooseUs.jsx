import React from 'react'
import { Sparkles, Bot, RefreshCw, Globe2, Gauge, UserCheck } from 'lucide-react'

const points = [
  { icon: Sparkles, title: 'AI-first SEO', desc: 'Built for assistants, not just search engines.' },
  { icon: RefreshCw, title: 'Daily automation', desc: 'Continuous optimization without human effort.' },
  { icon: Bot, title: 'Multi-AI compatibility', desc: 'ChatGPT, Gemini, Grok, Perplexity — covered.' },
  { icon: UserCheck, title: 'No technical knowledge', desc: 'Paste a snippet. We handle the rest.' },
  { icon: Globe2, title: 'Discoverability score', desc: 'The world’s first AI discoverability metric.' },
  { icon: Gauge, title: 'Performance built-in', desc: 'Fast, pre-rendered, crawl-friendly pages.' },
]

const WhyChooseUs = () => (
  <section className="relative py-20">
    <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-white" />
    <div className="relative max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Why Choose Us</h2>
        <p className="mt-4 text-slate-700">The only platform focused on AI-first SEO with fully automated workflows.</p>
      </div>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {points.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
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

export default WhyChooseUs
