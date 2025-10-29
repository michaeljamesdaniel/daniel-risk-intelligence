'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0B1F3A] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:flex lg:items-center lg:gap-12 lg:py-28">
          <div className="max-w-2xl">
            <div className="mb-8 flex items-center gap-4">
              <Image
                src="/DRI-Logo.jpg"
                alt="Daniel Risk Intelligence"
                width={64}
                height={64}
                className="h-12 w-12 rounded-sm ring-1 ring-white/20"
                priority
              />
              <p className="text-blue-200/80 text-sm tracking-wide">Daniel Risk Intelligence</p>
            </div>
            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Clarity on risk. Confidence in decisions.
            </h1>
            <p className="mt-4 max-w-xl text-blue-100/90 text-base lg:text-lg">
              We help executives and boards make high‑stakes decisions with structured risk
              intelligence, scenario analysis, and actionable reporting.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
                <Link href="#contact">Request a consultation</Link>
              </Button>
              <Button asChild variant="secondary" className="bg-white/10 text-white hover:bg-white/20">
                <Link href="#services">Explore services</Link>
              </Button>
            </div>
          </div>
          <div className="mt-14 lg:mt-0 lg:flex-1">
            <div className="relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <Image
                src="/DRI-Logo.jpg"
                alt="DRI mark"
                width={560}
                height={320}
                className="mx-auto h-40 w-auto opacity-90"
              />
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-blue-100/90">
                <div className="rounded-md border border-white/10 bg-white/5 p-4">
                  Independent perspective
                </div>
                <div className="rounded-md border border-white/10 bg-white/5 p-4">
                  Decision‑grade analysis
                </div>
                <div className="rounded-md border border-white/10 bg-white/5 p-4">
                  Executive‑ready reporting
                </div>
                <div className="rounded-md border border-white/10 bg-white/5 p-4">
                  Fast, discreet delivery
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg aria-hidden className="pointer-events-none absolute -bottom-40 left-1/2 h-[480px] -translate-x-1/2 opacity-25" viewBox="0 0 1108 632" fill="none">
          <ellipse cx="554" cy="316" rx="554" ry="316" fill="url(#g)" />
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#1E3A8A" />
              <stop offset="1" stopColor="#60A5FA" />
            </linearGradient>
          </defs>
        </svg>
      </section>

      {/* Client credibility */}
      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <p className="text-xs uppercase tracking-wider text-slate-500">Trusted by leaders at</p>
          <div className="mt-4 grid grid-cols-2 items-center gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {['Fortune 500', 'PE/VC', 'Financial Services', 'Energy', 'Healthcare', 'Public Sector'].map((c) => (
              <div key={c} className="text-slate-500/80 text-sm border border-slate-100 rounded-md py-3 text-center">
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Advisory and analysis services</h2>
            <p className="mt-2 text-slate-600">Focused, senior‑led work with measurable outcomes.</p>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Risk landscape review', desc: 'Concise assessment of enterprise, market, and geopolitical exposures.' },
              { title: 'Scenario planning', desc: 'Structured scenarios with triggers, indicators, and decision points.' },
              { title: 'Due diligence', desc: 'Target, counterparty, and market diligence for transactions.' },
              { title: 'Crisis readiness', desc: 'Playbooks, comms, and decision frameworks for critical events.' },
              { title: 'Board reporting', desc: 'Executive‑ready briefs tailored for directors and investors.' },
              { title: 'Custom research', desc: 'Deep‑dive analysis with clear recommendations and next steps.' },
            ].map((s) => (
              <Card key={s.title} className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-slate-900">{s.title}</CardTitle>
                  <CardDescription className="text-slate-600">{s.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-slate-500">Deliverables: brief, deck, indicators, and executive session.</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Report samples */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Sample outputs</h2>
            <p className="mt-2 text-slate-600">Redacted examples of recent deliverables.</p>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-slate-900">Executive brief #{i}</CardTitle>
                  <CardDescription className="text-slate-600">2–3 page decision memo</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-[4/3] w-full rounded-md bg-slate-50 ring-1 ring-slate-200" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="bg-[#0B1F3A] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:flex lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold sm:text-3xl">Ready to talk?</h2>
            <p className="mt-2 text-blue-100/90">We respond within one business day.</p>
          </div>
          <div className="mt-6 lg:mt-0">
            <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
              <Link href="mailto:info@danielrisk.com">Email us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src="/DRI-Logo.jpg" alt="DRI" width={28} height={28} className="h-7 w-7" />
            <span className="text-sm text-slate-600">© {new Date().getFullYear()} Daniel Risk Intelligence</span>
          </div>
          <nav className="flex items-center gap-6 text-sm text-slate-600">
            <Link href="#services" className="hover:text-slate-900">Services</Link>
            <Link href="#contact" className="hover:text-slate-900">Contact</Link>
            <Link href="#" className="hover:text-slate-900">Privacy</Link>
          </nav>
        </div>
      </footer>
    </main>
  )
}
