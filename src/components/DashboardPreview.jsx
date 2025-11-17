import React from 'react'
import { BarChart3, Activity, FileJson, MapPin, Wrench, Sparkles } from 'lucide-react'

const Card = ({ title, children }) => (
  <div className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-5 shadow-sm">
    <h4 className="font-semibold text-slate-900 mb-3">{title}</h4>
    {children}
  </div>
)

const DashboardPreview = () => {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-indigo-50" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Dashboard Preview</h2>
          <p className="mt-4 text-slate-700">Track visibility across assistants, health, and listings — all in one place.</p>
        </div>
        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          <Card title="AI Visibility Score">
            <div className="flex items-end gap-2">
              <div className="h-28 w-28 rounded-full bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400 p-[6px]">
                <div className="h-full w-full rounded-full bg-white grid place-items-center text-3xl font-extrabold text-slate-900">92</div>
              </div>
              <div className="text-sm text-slate-600">Across ChatGPT, Gemini, Perplexity, Bing</div>
            </div>
          </Card>
          <Card title="Daily SEO Health">
            <div className="flex items-center gap-3 text-emerald-600">
              <Activity className="h-5 w-5" />
              <span>All systems optimal — schema valid, pages indexed</span>
            </div>
          </Card>
          <Card title="Structured Data Generation">
            <div className="text-xs font-mono bg-slate-900 text-emerald-300 rounded-lg p-3 overflow-auto">
              {`{"@context":"https://schema.org","@type":"LocalBusiness","name":"Acme Studio","address":{"@type":"PostalAddress","addressLocality":"NYC"}}`}
            </div>
          </Card>
          <Card title="Listing Progress">
            <div className="flex flex-wrap gap-2 text-sm">
              {['Google Maps','Bing Places','Apple Maps','Yelp','Wikipedia'].map(item => (
                <span key={item} className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">{item}</span>
              ))}
            </div>
          </Card>
          <Card title="Automatic Fixes">
            <div className="text-sm text-slate-700 space-y-2">
              <div className="flex items-center gap-2 text-emerald-600"><Wrench className="h-4 w-4" /> Duplicate address resolved</div>
              <div className="flex items-center gap-2 text-emerald-600"><Wrench className="h-4 w-4" /> Missing FAQ schema added</div>
            </div>
          </Card>
          <Card title="Assistant Coverage">
            <div className="grid grid-cols-2 gap-3 text-sm">
              {[
                { name: 'ChatGPT', color: 'bg-emerald-100 text-emerald-700' },
                { name: 'Gemini', color: 'bg-indigo-100 text-indigo-700' },
                { name: 'Perplexity', color: 'bg-fuchsia-100 text-fuchsia-700' },
                { name: 'Bing', color: 'bg-amber-100 text-amber-700' },
              ].map((a) => (
                <div key={a.name} className={`px-3 py-2 rounded-lg border ${a.color}`}>{a.name} — Ready</div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default DashboardPreview
