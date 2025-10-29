"use client";

import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">
            Daniel Risk Intelligence
          </h1>
          
          <div className="space-y-6">
            {/* Ongoing Partnership */}
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <div className="mb-4">
                <h2 className="text-2xl font-semibold text-slate-900 flex items-center gap-2">
                  <span className="text-emerald-600">✓</span> Ongoing Partnership
                </h2>
                <p className="text-slate-600 mt-2">Knowing when to revisit our work together</p>
              </div>
              <ul className="text-sm space-y-2">
                <li className="text-slate-800">
                  <span className="text-emerald-600 mr-2">→</span>
                  DRI: Early warning signs tailored to your specific situation, with clear guidance on when we should reconnect and how often we recommend checking in.
                </li>
                <li className="text-slate-500">
                  <span className="mr-2">—</span>
                  Top Firms: General advice to watch market conditions and track business performance.
                </li>
              </ul>
            </div>

            {/* Clear Communication */}
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <div className="mb-4">
                <h2 className="text-2xl font-semibold text-slate-900 flex items-center gap-2">
                  <span className="text-emerald-600">✓</span> Clear Communication
                </h2>
                <p className="text-slate-600 mt-2">How we share insights with you</p>
              </div>
              <ul className="text-sm space-y-2">
                <li className="text-slate-800">
                  <span className="text-emerald-600 mr-2">→</span>
                  DRI: Executive summaries that get straight to the point, with transparent confidence indicators and clear markers showing the strength of our supporting information.
                </li>
                <li className="text-slate-500">
                  <span className="mr-2">—</span>
                  Top Firms: Structured recommendations with implicit confidence assumptions rather than openly stated.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg">
              Discuss your mandate
            </a>
            <a href="#services" className="border border-slate-300 text-slate-700 hover:bg-slate-50 px-6 py-3 rounded-lg">
              Explore services
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
