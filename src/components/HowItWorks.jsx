import React from 'react'
import { CheckCircle2, Code2, Cog, FileJson, RefreshCw, BarChart3, Rocket } from 'lucide-react'

const steps = [
  { icon: Code2, title: 'Install a one-line script', desc: 'Drop a tiny snippet on your site or tag manager.' },
  { icon: Cog, title: 'AI scans & analyzes', desc: 'We crawl, understand, and structure your content.' },
  { icon: FileJson, title: 'Automatic JSON-LD & meta', desc: 'We generate clean schema and AI-friendly tags.' },
  { icon: RefreshCw, title: 'Daily AI compliance', desc: 'We sync changes and keep data fresh.' },
  { icon: Rocket, title: 'Higher AI visibility', desc: 'Show up more often in AI answers and recommendations.' },
  { icon: BarChart3, title: 'Weekly reports', desc: 'Track your AI discoverability score.' },
]

const HowItWorks = () => {
  return (
    <section id="how" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-fuchsia-50" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">How It Works</h2>
          <p className="mt-4 text-slate-700">From installation to insights — automation does the heavy lifting while you grow.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {steps.map(({ icon: Icon, title, desc }, idx) => (
            <div key={title} className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400 grid place-items-center text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-sm font-medium text-slate-500">Step {idx + 1}</span>
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
              <div className="absolute -right-3 -top-3 h-8 w-8 rounded-full bg-emerald-500 text-white grid place-items-center text-xs">{idx + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
