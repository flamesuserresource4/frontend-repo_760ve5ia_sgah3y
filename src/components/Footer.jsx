import React from 'react'

const Footer = () => (
  <footer id="contact" className="relative py-12">
    <div className="absolute inset-0 bg-gradient-to-b from-white to-white" />
    <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-sm">
      <div>
        <div className="text-lg font-bold text-slate-900">Automatic AI SEO</div>
        <p className="mt-2 text-slate-600">Be discoverable, trusted & recommended by AI.</p>
        <p className="mt-4 text-slate-500">© {new Date().getFullYear()} Automatic AI SEO. All rights reserved.</p>
      </div>
      <div>
        <div className="font-semibold text-slate-900">Navigation</div>
        <ul className="mt-2 space-y-1 text-slate-600">
          <li><a href="#why">Why AI</a></li>
          <li><a href="#how">How it works</a></li>
          <li><a href="#benefits">Benefits</a></li>
          <li><a href="#pricing">Pricing</a></li>
        </ul>
      </div>
      <div>
        <div className="font-semibold text-slate-900">Legal</div>
        <ul className="mt-2 space-y-1 text-slate-600">
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Security</a></li>
        </ul>
      </div>
      <div>
        <div className="font-semibold text-slate-900">Contact</div>
        <ul className="mt-2 space-y-1 text-slate-600">
          <li>hello@automaticaiseo.com</li>
          <li>@AutomaticAISEO</li>
          <li>+1 (555) 123-4567</li>
        </ul>
      </div>
    </div>
  </footer>
)

export default Footer
