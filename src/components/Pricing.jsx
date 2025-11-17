import React from 'react'
import { Check } from 'lucide-react'

const plans = [
  { name: 'Free Scan', price: '$0', desc: 'Instant audit & AI visibility snapshot', features: ['AI discoverability score','Top issues report','Basic schema check'], cta: 'Run Free Scan' },
  { name: 'Basic', price: '$49/mo', desc: 'Automatic SEO + daily updates', features: ['JSON-LD & meta automation','Daily AI compliance','Core directory sync'], cta: 'Start Basic' },
  { name: 'Pro', price: '$149/mo', desc: 'AI prerendering + listings + analytics', features: ['AI-optimized prerender','Enhanced listings (Maps, Wiki)','AI visibility analytics'], cta: 'Upgrade to Pro', popular: true },
  { name: 'Enterprise', price: 'Custom', desc: 'Pipelines & API access', features: ['Custom schemas','Bulk listing ops','SLA & dedicated support'], cta: 'Talk to Sales' },
]

const Pricing = () => (
  <section id="pricing" className="relative py-20">
    <div className="absolute inset-0 bg-gradient-to-b from-white to-fuchsia-50" />
    <div className="relative max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Simple, transparent pricing</h2>
        <p className="mt-4 text-slate-700">Start free, upgrade when you’re ready to automate everything.</p>
      </div>
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan) => (
          <div key={plan.name} className={`rounded-2xl border ${plan.popular ? 'border-indigo-400 shadow-indigo-200' : 'border-slate-200'} bg-white p-6 shadow-sm hover:shadow-md transition relative`}>
            {plan.popular && (
              <div className="absolute -top-3 right-4 rounded-full bg-indigo-600 text-white text-xs px-3 py-1 shadow">Popular</div>
            )}
            <h3 className="font-semibold text-slate-900">{plan.name}</h3>
            <div className="mt-2 text-3xl font-extrabold text-slate-900">{plan.price}</div>
            <p className="mt-1 text-sm text-slate-600">{plan.desc}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" /> {f}</li>
              ))}
            </ul>
            <a href="#cta" className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-amber-500 px-4 py-2 text-white font-semibold shadow hover:opacity-95 transition">{plan.cta}</a>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Pricing
