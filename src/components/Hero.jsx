import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, PlayCircle } from 'lucide-react'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/20 via-fuchsia-500/10 to-transparent pointer-events-none" />
      <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-fuchsia-500/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-indigo-500/30 blur-3xl pointer-events-none" />

      <nav className="relative z-20 max-w-7xl mx-auto px-6 pt-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400 shadow-lg shadow-fuchsia-500/30 grid place-items-center">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-semibold tracking-tight text-slate-900">Automatic AI SEO</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-slate-700">
          <a href="#why" className="hover:text-slate-900 transition">Why AI</a>
          <a href="#how" className="hover:text-slate-900 transition">How it works</a>
          <a href="#benefits" className="hover:text-slate-900 transition">Benefits</a>
          <a href="#pricing" className="hover:text-slate-900 transition">Pricing</a>
          <a href="#contact" className="hover:text-slate-900 transition">Contact</a>
        </div>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-10 pb-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/70 backdrop-blur px-3 py-1 text-xs text-slate-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" /> Live AI-first SEO
            </div>
            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
              Be Discoverable, Trusted & Recommended by ChatGPT automatically
            </h1>
            <p className="mt-5 text-lg text-slate-700 max-w-xl">
              One platform that keeps your business optimized for AI search, recommendations, and citations across ChatGPT, Gemini, Perplexity, Bing, and more.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#pricing" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-amber-500 px-6 py-3 text-white font-semibold shadow-lg shadow-indigo-500/30 hover:opacity-95 transition">
                Start Free Scan
                <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#how" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/80 backdrop-blur px-6 py-3 text-slate-900 font-semibold border border-slate-200 hover:bg-white transition">
                <PlayCircle className="h-5 w-5" /> See How It Works
              </a>
            </div>
          </motion.div>

          {/* Simulated chat */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="mt-10 rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-4 shadow-xl">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400" />
                <div className="flex-1 rounded-xl bg-slate-50 p-3 text-slate-800 shadow-sm">
                  We’ve optimized your business for ChatGPT, Gemini & Google AI. You now rank higher in AI answers.
                </div>
              </div>
              <div className="flex items-start gap-3 justify-end">
                <div className="flex-1 max-w-[75%] rounded-xl bg-indigo-600 text-white p-3 shadow-sm">
                  Great! What changed?
                </div>
                <div className="h-9 w-9 rounded-full bg-slate-200" />
              </div>
              <div className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400" />
                <div className="flex-1 rounded-xl bg-slate-50 p-3 text-slate-800 shadow-sm">
                  Automatic JSON-LD, AI-friendly metadata, verified listings, and daily updates keep your content trustworthy and current.
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="relative h-[520px] md:h-[640px] rounded-3xl overflow-hidden border border-slate-200 bg-white/60 backdrop-blur shadow-2xl">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/40" />
        </div>
      </div>
    </section>
  )
}

export default Hero
