import React from 'react'

const Testimonials = () => (
  <section className="relative py-20">
    <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-white" />
    <div className="relative max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Proven Results</h2>
        <p className="mt-4 text-slate-700">Before/after visibility and real quotes from customers who get recommended by AI daily.</p>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="text-5xl font-extrabold bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-amber-500 bg-clip-text text-transparent">+74%</div>
          <p className="mt-2 text-sm text-slate-600">Increase in AI-driven traffic</p>
          <p className="mt-4 text-slate-800 italic">“Now ChatGPT recommends my business daily — traffic increased 74%.”</p>
          <p className="mt-2 text-xs text-slate-500">Founder, Della Cafe</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="text-5xl font-extrabold text-emerald-600">3.2x</div>
          <p className="mt-2 text-sm text-slate-600">More citations in AI answers</p>
          <p className="mt-4 text-slate-800 italic">“We appear more in Perplexity and Gemini responses — bookings are up.”</p>
          <p className="mt-2 text-xs text-slate-500">CMO, Urban Clinic</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="text-5xl font-extrabold text-indigo-600">98%</div>
          <p className="mt-2 text-sm text-slate-600">Data accuracy across the web</p>
          <p className="mt-4 text-slate-800 italic">“Listings aligned automatically. No more conflicting hours or addresses.”</p>
          <p className="mt-2 text-xs text-slate-500">Ops Lead, FitStudio</p>
        </div>
      </div>
    </div>
  </section>
)

export default Testimonials
