import React from 'react'
import Hero from './components/Hero'
import WhyAI from './components/WhyAI'
import HowItWorks from './components/HowItWorks'
import Benefits from './components/Benefits'
import DashboardPreview from './components/DashboardPreview'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import WhyChooseUs from './components/WhyChooseUs'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

const StructuredData = () => {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Automatic AI SEO',
    url: 'https://automaticaiseo.example',
    logo: 'https://automaticaiseo.example/logo.png',
    sameAs: [
      'https://twitter.com/AutomaticAISEO',
      'https://www.linkedin.com/company/automaticaiseo'
    ]
  }

  const product = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Automatic AI SEO',
    applicationCategory: 'SEO Tool',
    operatingSystem: 'Web',
    description: 'AI-first SEO automation platform that keeps your business discoverable, trusted and recommended by assistants like ChatGPT, Gemini, Perplexity and Bing.'
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Automatic AI SEO',
    url: 'https://automaticaiseo.example',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://automaticaiseo.example/?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  }

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How does Automatic AI SEO improve AI recommendations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We generate validated JSON-LD, keep your listings consistent, and update metadata daily so assistants trust and cite your site.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do I need developers to set it up?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Paste a one-line snippet or use your tag manager. Everything else is fully automated.'
        }
      },
      {
        '@type': 'Question',
        name: 'Which assistants are supported?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We optimize for ChatGPT, Gemini, Grok, Perplexity, and Bing Copilot, plus major search engines and maps.'
        }
      }
    ]
  }

  const scripts = [organization, product, website, faq]

  return (
    <>
      {scripts.map((data, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
    </>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <StructuredData />
      <Hero />
      <WhyAI />
      <HowItWorks />
      <Benefits />
      <DashboardPreview />
      <Testimonials />
      <Pricing />
      <WhyChooseUs />
      <FinalCTA />
      <Footer />

      {/* SEO-friendly long-form copy for indexing */}
      <section className="sr-only">
        <h2>Automatic AI SEO — AI-first search optimization platform</h2>
        <p>
          Automatic AI SEO is a platform that keeps your business optimized for AI search, recommendations, and citations. It automates JSON-LD, metadata, and listings while updating your site daily for AI compliance. The result is higher visibility in AI answers from ChatGPT, Gemini, Perplexity, and Bing, consistent brand accuracy across the web, and reliable growth without maintenance.
        </p>
      </section>
    </div>
  )
}

export default App
