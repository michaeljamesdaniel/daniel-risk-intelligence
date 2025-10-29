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
              Intelligence‑grade analysis for high‑stakes business decisions
            </h1>
            <p className="mt-4 max-w-xl text-blue-100/90 text-base lg:text-lg">
              We apply U.S. Intelligence Community methods to corporate decisions—structured analysis,
              calibrated probabilities, and McKinsey‑quality delivery.
            </p>
            <div className="mt-6 text-blue-200/80 text-sm">
              Confidence metric: Likely (65–75%) impact improvement vs. conventional consulting, based on prior engagements.
            </div>
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
                <div className="rounded-md border border-white/10 bg-white/5 p-4">Evidence‑rated sources (GOLD / SILVER / BRONZE)</div>
                <div className="rounded-md border border-white/10 bg-white/5 p-4">Analysis of Competing Hypotheses</div>
                <div className="rounded-md border border-white/10 bg-white/5 p-4">Probability calibration (IC ranges)</div>
                <div className="rounded-md border border-white/10 bg-white/5 p-4">Red Team self‑challenge</div>
              </div>
            </div>
          </div>
        </div>
        <svg aria-hidden className="pointer-events-none absolute -bottom-40 left-1/2 h-[480px] -translate-x-1/2 opacity-25" fill="none" viewBox="0 0 1108 632">
          <ellipse cx="554" cy="316" fill="url(#g)" rx="554" ry="316" />
          <defs>
            <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
              <stop stopColor="#1E3A8A" />
              <stop offset="1" stopColor="#60A5FA" />
            </linearGradient>
          </defs>
        </svg>
      </section>

      {/* About */}
      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-semibold text-slate-900">About</h2>
            <p className="mt-2 text-slate-600">
              Daniel Risk Intelligence applies intelligence tradecraft to business decisions in Central &amp; Eastern Europe.
              We combine evidence‑rated collection, hypothesis testing, and calibrated judgments, delivered with consulting‑grade clarity.
            </p>
            <p className="mt-3 text-sm text-slate-500">Region focus: CEE markets with opaque disclosure and cross‑border complexity.</p>
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            <div className="rounded-md border border-slate-100 p-4">
              <div className="text-xs uppercase tracking-wider text-slate-500">Evidence Quality</div>
              <div className="mt-1 text-slate-700">GOLD authoritative | SILVER credible | BRONZE triangulated</div>
            </div>
            <div className="rounded-md border border-slate-100 p-4">
              <div className="text-xs uppercase tracking-wider text-slate-500">Confidence Language</div>
              <div className="mt-1 text-slate-700">Highly Likely 80–95% | Likely 65–75% | Unlikely 20–35%</div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section id="services" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">What we do</h2>
            <p className="mt-2 text-slate-600">Three senior‑led divisions covering the transaction lifecycle.</p>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Transaction Intelligence',
                desc:
                  'Pre‑acquisition due diligence with GOLD/SILVER/BRONZE evidence ratings, ACH testing, and calibrated judgments; maps People‑Reputation‑Control‑Continuity risks and recommends deal terms.'
              },
              {
                title: 'Strategic Advisory',
                desc:
                  'Market entry and digital transformation strategies using hypothesis‑driven research, scenario design, and probability‑calibrated forecasts with indicator frameworks.'
              },
              {
                title: 'Integration Services',
                desc:
                  '100‑day integration plans with culture, systems, and synergy roadmaps; risk‑based triggers, calibrated projections, and owner‑assigned milestones.'
              }
            ].map((s) => (
              <Card className="border-slate-200" key={s.title}>
                <CardHeader>
                  <CardTitle className="text-slate-900">{s.title}</CardTitle>
                  <CardDescription className="text-slate-600">{s.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-slate-500">Output: decision memo, risk map, indicators, and executive session.</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Methodology</h2>
            <p className="mt-2 text-slate-600">Two‑phase intelligence production delivering decision‑grade analysis.</p>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-900">1) Evidence Collection</CardTitle>
                <CardDescription className="text-slate-600">Key Intelligence Questions, diagnostics‑driven OSINT, and source quality ratings.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-slate-500">Critical facts require triangulation (2+ independent sources).</div>
              </CardContent>
            </Card>
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-900">2) Structured Analysis</CardTitle>
                <CardDescription className="text-slate-600">ACH to test competing hypotheses; weigh disconfirming evidence.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-slate-500">Confidence expressed with IC ranges (e.g., Likely 65–75%).</div>
              </CardContent>
            </Card>
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-900">Red Team Review</CardTitle>
                <CardDescription className="text-slate-600">Adversarial self‑challenge to surface linchpin assumptions.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-slate-500">Monitoring triggers specify when to revisit conclusions.</div>
              </CardContent>
            </Card>
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-900">Presentation Quality</CardTitle>
                <CardDescription className="text-slate-600">Minto Pyramid, SCQA, MECE, and decision‑first summaries.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-slate-500">16 blocking gates ensure consistent, executive‑ready deliverables.</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Why clients choose us</h2>
            <p className="mt-2 text-slate-600">Transparent evidence, tested hypotheses, calibrated probability, and adversarial validation.</p>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[ 'Evidence transparency', 'Hypothesis testing', 'Calibrated probability', 'Adversarial review' ].map((t) => (
              <Card className="border-slate-200" key={t}>
                <CardHeader>
                  <CardTitle className="text-slate-900">{t}</CardTitle>
                  <CardDescription className="text-slate-600">
                    {t === 'Evidence transparency' && 'Every source rated GOLD/SILVER/BRONZE with gaps identified.'}
                    {t === 'Hypothesis testing' && 'ACH exposes contradictory facts traditional approaches miss.'}
                    {t === 'Calibrated probability' && 'Standard IC ranges prevent overconfidence or vague hedging.'}
                    {t === 'Adversarial review' && 'Red Team challenges conclusions before delivery.'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-slate-500">One‑line metric: Decision clarity up, rework down.</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B1F3A] text-white" id="contact">
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
            <Image alt="DRI" className="h-7 w-7" height={28} src="/DRI-Logo.jpg" width={28} />
            <span className="text-sm text-slate-600">© {new Date().getFullYear()} Daniel Risk Intelligence</span>
          </div>
          <nav className="flex items-center gap-6 text-sm text-slate-600">
            <Link className="hover:text-slate-900" href="#services">Services</Link>
            <Link className="hover:text-slate-900" href="#contact">Contact</Link>
            <Link className="hover:text-slate-900" href="#">Privacy</Link>
          </nav>
        </div>
      </footer>
    </main>
  )
}
