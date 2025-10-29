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
              We deliver intelligence that is rigorously researched, transparently sourced, and independently validated—giving you clarity on what we know, how confident you should be, and what to watch for next.
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
                    <li className="text-slate-800"><span className="text-emerald-600 mr-2">→</span> DRI: Every source is graded for reliability and cross-verified against multiple references before inclusion in critical assessments.</li>
                    <li className="text-slate-500"><span className="mr-2">—</span> Top Firms: Hypothesis-driven research; source quality is often implied rather than explicitly documented.</li>
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
                    <li className="text-slate-800"><span className="text-emerald-600 mr-2">→</span> DRI: We test multiple competing explanations and actively seek evidence that challenges our initial conclusions.</li>
                    <li className="text-slate-500"><span className="mr-2">—</span> Top Firms: Framework-based analysis that may reinforce the lead hypothesis without systematic alternative testing.</li>
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
                    <li className="text-slate-800"><span className="text-emerald-600 mr-2">→</span> DRI: Clear probability ranges tied to evidence strength—so you know exactly how much confidence to place in each finding.</li>
                    <li className="text-slate-500"><span className="mr-2">—</span> Top Firms: Directional recommendations with limited quantification of confidence levels.</li>
                  </ul>
                </CardContent>
              </Card>
              {/* Validation & QA */}
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-slate-900 flex items-center gap-2">
                    <span className="text-emerald-600">✓</span> Validation & Quality Assurance
                  </CardTitle>
                  <CardDescription className="text-slate-600">How quality is enforced before delivery</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li className="text-slate-800"><span className="text-emerald-600 mr-2">→</span> DRI: Every deliverable passes 16 mandatory quality gates covering analytical integrity, risk quantification, and communication clarity.</li>
                    <li className="text-slate-500"><span className="mr-2">—</span> Top Firms: Peer reviews that vary in depth depending on timeline pressures and team availability.</li>
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
                    <li className="text-slate-800"><span className="text-emerald-600 mr-2">→</span> DRI: Every citation includes a clear reliability rating, cross-verification status, and documentation of any information gaps.</li>
                    <li className="text-slate-500"><span className="mr-2">—</span> Top Firms: Standard footnotes without explicit reliability classifications or triangulation indicators.</li>
                  </ul>
                </CardContent>
              </Card>
              {/* Red Team Self‑Challenge */}
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-slate-900 flex items-center gap-2">
                    <span className="text-emerald-600">✓</span> Independent Review
                  </CardTitle>
                  <CardDescription className="text-slate-600">How assumptions are stress-tested</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li className="text-slate-800"><span className="text-emerald-600 mr-2">→</span> DRI: Dedicated adversarial review designed to challenge and potentially disprove our conclusions; key assumptions are identified and rated for vulnerability.</li>
                    <li className="text-slate-500"><span className="mr-2">—</span> Top Firms: Internal challenge sessions within established team hierarchies, with assumptions listed but not systematically stress-tested.</li>
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
                    <li className="text-slate-800"><span className="text-emerald-600 mr-2">→</span> DRI: Explicit documentation of what we don't know, its potential impact, and the specific conditions that would change our assessment.</li>
                    <li className="text-slate-500"><span className="mr-2">—</span> Top Firms: Brief limitations sections with scope exclusions and standard disclaimers.</li>
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
                    <li className="text-slate-800"><span className="text-emerald-600 mr-2">→</span> DRI: Specific leading indicators for each key finding, with clear triggers and recommended review frequencies.</li>
                    <li className="text-slate-500"><span className="mr-2">—</span> Top Firms: General guidance to monitor market conditions and standard KPI tracking.</li>
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
                    <li className="text-slate-800"><span className="text-emerald-600 mr-2">→</span> DRI: Structured executive summaries with clear bottom-line conclusions, quantified confidence levels, and inline evidence quality markers.</li>
                    <li className="text-slate-500"><span className="mr-2">—</span> Top Firms: Pyramid-structured recommendations with confidence implied rather than explicitly calibrated.</li>
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
