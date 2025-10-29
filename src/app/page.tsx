"use client"
import Image from "next/image"
import Link from "next/link"
// UI
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Sticky, accessible navbar */}
      {/* ... existing header/nav/hero/credibility/about/services/methodology sections ... */}

      {/* Methodology */}
      {/* ... existing Methodology section code remains unchanged ... */}

      {/* Why Our Quality Exceeds Top Firms */}
      <section id="quality" className="bg-white border-t border-slate-100 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 py-16">
          {/* Intro + BLUF */}
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
              Why Our Quality Exceeds Top Firms
            </h2>
            <p className="mt-3 text-slate-700">
              Bottom line up front: DRI delivers evidence-rated, probability-calibrated, adversarially-tested intelligence—so you can see the strength of the evidence, how confident to be, and what to monitor next.
            </p>
          </div>

          {/* Comparison grid */}
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {/* Left: Category cards with DRI vs Others bullets */}
            <div className="grid gap-4">
              {/* Research Methodology */}
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-slate-900 flex items-center gap-2">
                    <span className="text-emerald-600">✓</span> Research Methodology
                  </CardTitle>
                  <CardDescription className="text-slate-600">How we collect and qualify information</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li className="text-slate-800"><span className="text-emerald-600 mr-2">→</span> DRI: Diagnostics-driven OSINT with GOLD/SILVER/BRONZE source ratings and mandatory triangulation for critical judgments.</li>
                    <li className="text-slate-500"><span className="mr-2">—</span> MBB: Hypothesis-led research; findings typically lack explicit source reliability.</li>
                    <li className="text-slate-500"><span className="mr-2">—</span> Big 4: Checklist-oriented diligence; quality signaled, not transparently rated.</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Analytic Framework */}
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-slate-900 flex items-center gap-2">
                    <span className="text-emerald-600">✓</span> Analytic Framework
                  </CardTitle>
                  <CardDescription className="text-slate-600">How conclusions are tested</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li className="text-slate-800"><span className="text-emerald-600 mr-2">→</span> DRI: Analysis of Competing Hypotheses (ACH) tests 3–5 alternatives; explicitly weighs disconfirming evidence.</li>
                    <li className="text-slate-500"><span className="mr-2">—</span> MBB: Framework-driven case building risks confirmation bias.</li>
                    <li className="text-slate-500"><span className="mr-2">—</span> Big 4: Standard models/benchmarks with limited alternative testing.</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Confidence Calibration */}
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-slate-900 flex items-center gap-2">
                    <span className="text-emerald-600">✓</span> Confidence Calibration
                  </CardTitle>
                  <CardDescription className="text-slate-600">How confidence is communicated</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li className="text-slate-800"><span className="text-emerald-600 mr-2">→</span> DRI: IC probability ranges (e.g., Likely 65–75%) mapped to evidence quality and completeness.</li>
                    <li className="text-slate-500"><span className="mr-2">—</span> MBB: Directional guidance, rarely quantified.</li>
                    <li className="text-slate-500"><span className="mr-2">—</span> Big 4: Binary recommendations with risk caveats.</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Validation & QA */}
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-slate-900 flex items-center gap-2">
                    <span className="text-emerald-600">✓</span> Validation & QA
                  </CardTitle>
                  <CardDescription className="text-slate-600">How quality is enforced before delivery</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li className="text-slate-800"><span className="text-emerald-600 mr-2">→</span> DRI: 16 Blocking Gates covering analysis integrity, PRCC risk quantification, and communication quality.</li>
                    <li className="text-slate-500"><span className="mr-2">—</span> MBB: Partner/peer reviews vary by availability and timeline pressure.</li>
                    <li className="text-slate-500"><span className="mr-2">—</span> Big 4: QA checklists with flexible enforcement.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Right: Category cards continued */}
            <div className="grid gap-4">
              {/* Source Transparency */}
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-slate-900 flex items-center gap-2">
                    <span className="text-emerald-600">✓</span> Source Transparency
                  </CardTitle>
                  <CardDescription className="text-slate-600">How citations signal reliability</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li className="text-slate-800"><span className="text-emerald-600 mr-2">→</span> DRI: Every citation rated GOLD/SILVER/BRONZE with triangulation status and documented gaps.</li>
                    <li className="text-slate-500"><span className="mr-2">—</span> MBB: Footnotes without quality classification.</li>
                    <li className="text-slate-500"><span className="mr-2">—</span> Big 4: References listed; reliability implied rather than explicit.</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Red Team Self‑Challenge */}
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-slate-900 flex items-center gap-2">
                    <span className="text-emerald-600">✓</span> Red Team Self‑Challenge
                  </CardTitle>
                  <CardDescription className="text-slate-600">How assumptions are stress-tested</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li className="text-slate-800"><span className="text-emerald-600 mr-2">→</span> DRI: Adversarial review to falsify conclusions; linchpin assumptions identified and rated.</li>
                    <li className="text-slate-500"><span className="mr-2">—</span> MBB: Partner challenge sessions within hierarchical teams.</li>
                    <li className="text-slate-500"><span className="mr-2">—</span> Big 4: Assumptions listed without explicit vulnerability ratings.</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Information Gaps */}
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-slate-900 flex items-center gap-2">
                    <span className="text-emerald-600">✓</span> Information Gaps
                  </CardTitle>
                  <CardDescription className="text-slate-600">How unknowns are handled</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li className="text-slate-800"><span className="text-emerald-600 mr-2">→</span> DRI: Explicit gap logs with impact statements and conditions that would change the conclusion.</li>
                    <li className="text-slate-500"><span className="mr-2">—</span> MBB: Brief limitations sections.</li>
                    <li className="text-slate-500"><span className="mr-2">—</span> Big 4: Scope exclusions and disclaimers.</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Monitoring Frameworks */}
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-slate-900 flex items-center gap-2">
                    <span className="text-emerald-600">✓</span> Monitoring Frameworks
                  </CardTitle>
                  <CardDescription className="text-slate-600">How to detect when to reassess</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li className="text-slate-800"><span className="text-emerald-600 mr-2">→</span> DRI: 3–7 leading indicators per answer; frequencies and triggers to revisit conclusions.</li>
                    <li className="text-slate-500"><span className="mr-2">—</span> MBB: Generic "monitor market conditions" guidance.</li>
                    <li className="text-slate-500"><span className="mr-2">—</span> Big 4: Standard KPI tracking.</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Reporting Standards */}
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-slate-900 flex items-center gap-2">
                    <span className="text-emerald-600">✓</span> Reporting Standards
                  </CardTitle>
                  <CardDescription className="text-slate-600">How insights are communicated</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li className="text-slate-800"><span className="text-emerald-600 mr-2">→</span> DRI: SCQA + MECE with 50‑word BLUF, IC probability language, and evidence ratings in-line.</li>
                    <li className="text-slate-500"><span className="mr-2">—</span> MBB: Pyramid Principle with recommendations; confidence implied, not calibrated.</li>
                    <li className="text-slate-500"><span className="mr-2">—</span> Big 4: Standard executive summaries and appendices.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA row */}
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="#contact">Discuss your mandate</Link>
            </Button>
            <Button asChild variant="secondary" className="border-slate-300 text-slate-700 hover:bg-slate-50">
              <Link href="#services">Explore services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      {/* ... existing Differentiators section continues below ... */}
    </main>
  )
}
