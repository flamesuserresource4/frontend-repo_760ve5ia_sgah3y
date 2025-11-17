import React from 'react'
import { ArrowRight } from 'lucide-react'

const FinalCTA = () => (
  <section id="cta" className="relative py-20">
    <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-50 to-indigo-50" />
    <div className="relative max-w-5xl mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Start ranking in AI answers today.</h2>
      <p className="mt-4 text-slate-700">Run a free AI visibility scan and see exactly how to get recommended by assistants.</p>
      <a href="#pricing" className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-amber-500 px-8 py-3 text-white font-semibold shadow-lg hover:opacity-95 transition">
        Run Free AI Visibility Scan
        <ArrowRight className="h-5 w-5" />
      </a>
    </div>
  </section>
)

export default FinalCTA
