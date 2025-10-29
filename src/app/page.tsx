"use client";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero */}
      <section className="bg-white border-b border-slate-200">
        <div className="container mx-auto max-w-5xl px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold">Daniel Risk Intelligence</h1>
          <p className="mt-4 text-xl text-slate-700">Practical risk and strategy advice for Central & Eastern Europe</p>
          <p className="mt-2 text-slate-600">Clear answers, grounded in international standards and shaped by CEE realities.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">Discuss your mandate</a>
            <a href="#services" className="border border-slate-300 text-slate-700 hover:bg-slate-50 px-6 py-3 rounded-lg">Explore services</a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="container mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-2xl font-semibold">About DRI</h2>
        <p className="mt-4 text-slate-700">
          DRI blends international best practices with a sharp regional focus on Central & Eastern Europe.
          We translate global standards into workable steps for CEE executives navigating local regulations,
          ownership structures, and fast-changing market conditions.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="bg-white border-y border-slate-200">
        <div className="container mx-auto max-w-5xl px-4 py-12">
          <h2 className="text-2xl font-semibold">Services</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="rounded-lg border border-slate-200 p-6">
              <h3 className="font-semibold text-lg">Due Diligence</h3>
              <p className="mt-2 text-slate-700 text-sm">
                Clear view of counterparties, assets, and regulatory exposure across CEE. We surface what matters for price,
                approvals, and reputation—without slowing your deal.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 p-6">
              <h3 className="font-semibold text-lg">Strategic Advisory</h3>
              <p className="mt-2 text-slate-700 text-sm">
                Market entry, expansion, and restructuring guidance built on local signals—licensing, stakeholders, and
                policy direction—so decisions hold up in boardrooms and ministries alike.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 p-6">
              <h3 className="font-semibold text-lg">Post‑Merger Integration</h3>
              <p className="mt-2 text-slate-700 text-sm">
                Practical 100‑day plans for CEE integrations: governance, controls, talent, and suppliers. We prioritize
                quick wins while protecting compliance and culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section id="methodology" className="container mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-2xl font-semibold">Our Method</h2>
        <p className="mt-4 text-slate-700">
          We start with your business goal, not a template. We map the decision at hand, gather only the information that
          changes the outcome, and present options with plain trade‑offs. You get short memos, clear timelines, and direct
          access to the team doing the work.
        </p>
      </section>

      {/* Quality Comparison */}
      <section id="comparison" className="bg-white border-y border-slate-200">
        <div className="container mx-auto max-w-5xl px-4 py-12">
          <h2 className="text-2xl font-semibold">How DRI Compares in CEE</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6 text-sm">
            <div className="rounded-lg border border-slate-200 p-6">
              <h3 className="font-semibold">DRI</h3>
              <ul className="mt-3 list-disc pl-5 space-y-2 text-slate-700">
                <li>Advice tailored to CEE institutions, ownership, and policy cycles</li>
                <li>Clear confidence levels and direct next steps</li>
                <li>Senior team involvement from kickoff to handover</li>
                <li>Lean deliverables that support board decisions</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 p-6">
              <h3 className="font-semibold">Typical Top Firms</h3>
              <ul className="mt-3 list-disc pl-5 space-y-2 text-slate-700">
                <li>Global templates adapted late to local context</li>
                <li>Lengthy decks with implied, not stated, certainty</li>
                <li>Senior oversight at start and finish only</li>
                <li>Process-heavy outputs that slow decisions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section id="why-dri" className="container mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-2xl font-semibold">Why CEE Leaders Choose DRI</h2>
        <ul className="mt-4 grid md:grid-cols-2 gap-4 text-slate-700">
          <li className="bg-white border border-slate-200 rounded-lg p-4">Regional fluency: sector, regulators, and stakeholders across EU and neighborhood markets</li>
          <li className="bg-white border border-slate-200 rounded-lg p-4">Board-ready outputs: one page to decide, appendix if needed</li>
          <li className="bg-white border border-slate-200 rounded-lg p-4">Speed with control: fast work, documented assumptions, and clear owners</li>
          <li className="bg-white border border-slate-200 rounded-lg p-4">Discreet execution: sensitive mandates handled quietly and securely</li>
          <li className="bg-white border border-slate-200 rounded-lg p-4">Aligned incentives: small senior team focused on outcomes</li>
        </ul>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="bg-blue-50 border-t border-blue-100">
        <div className="container mx-auto max-w-5xl px-4 py-12">
          <h2 className="text-2xl font-semibold">Start the conversation</h2>
          <p className="mt-3 text-slate-700">Share your timeline and objective. We will respond within one business day.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="mailto:hello@danielri.com" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">Email DRI</a>
            <a href="#about" className="border border-slate-300 text-slate-700 hover:bg-slate-50 px-6 py-3 rounded-lg">Learn more</a>
          </div>
        </div>
      </section>
    </div>
  );
}
