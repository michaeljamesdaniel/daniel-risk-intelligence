"use client";
import React from "react";
import ContactForm from "@/components/ContactForm";

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
              <h3 className="font-semibold text-lg">Compliance & Integrity</h3>
              <p className="mt-2 text-slate-700 text-sm">
                Stay ahead of local laws, sanctions, and reporting requirements. Tailored programs that satisfy auditors,
                regulators, and stakeholders without adding bureaucracy for the sake of it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
        <p className="text-slate-700 mb-8">
          Whether you need due diligence, strategic advice, or a second opinion on CEE risk,
          reach out for a confidential conversation.
        </p>
        <ContactForm />
        <div className="mt-8 pt-8 border-t border-slate-200">
          <p className="text-sm text-slate-600">
            Prefer email? Reach us at{" "}
            <a href="mailto:inquiries@danielriskintelligence.com" className="text-blue-600 hover:underline">
              inquiries@danielriskintelligence.com
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200">
        <div className="container mx-auto max-w-5xl px-4 py-8">
          <p className="text-sm text-slate-600">
            &copy; {new Date().getFullYear()} Daniel Risk Intelligence. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
