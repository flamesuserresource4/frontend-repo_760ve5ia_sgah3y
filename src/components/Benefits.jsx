import React from 'react'
import { BadgeCheck, Sparkles, Globe2, Zap, ShieldCheck, ListChecks, Database, Wrench } from 'lucide-react'

const benefits = [
  { icon: BadgeCheck, title: 'Automatic metadata & schema', desc: 'JSON-LD, OpenGraph, and AI tags generated and validated.' },
  { icon: Zap, title: 'Daily SEO updates', desc: 'Stay compliant with evolving AI guidelines automatically.' },
  { icon: Globe2, title: 'AI-friendly pre-render', desc: 'Fast, indexable pages optimized for assistant crawlers.' },
  { icon: ShieldCheck, title: 'Verified listings', desc: 'Sync Google Maps, Wikipedia, and key directories.' },
  { icon: Sparkles, title: 'Higher AI recommendations', desc: 'Boost mentions in ChatGPT, Gemini, and Perplexity.' },
  { icon: ListChecks, title: 'Brand accuracy', desc: 'Resolve conflicting data across the web for trust.' },
  { icon: Database, title: 'Zero maintenance', desc: 'We manage data pipelines and updates end-to-end.' },
  { icon: Wrench, title: 'Automatic fixes', desc: 'We detect issues and repair them before they hurt rankings.' },
]

const Benefits = () => (
  <section id="benefits" className="relative py-20">
    <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-50 to-white" />
    <div className="relative max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Key Benefits</h2>
        <p className="mt-4 text-slate-700">Automation that keeps your presence accurate, visible, and recommendable — everywhere.</p>
      </div>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map(({ icon: Icon, title, desc }) => (
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

export default Benefits
