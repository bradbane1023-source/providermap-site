"use client";

import React from "react";

const painPoints = [
  "Payer-specific roster templates create repetitive spreadsheet work.",
  "Small formatting issues turn into rejections, delays, and rework.",
  "Specialty, taxonomy, and location mappings are handled inconsistently.",
  "Teams lose confidence because the logic lives in tribal knowledge."
];

const outcomes = [
  { label: "Less rework", detail: "Catch missing fields, format problems, and mapping gaps before submission." },
  { label: "Cleaner submissions", detail: "Turn one standardized roster into payer-ready outputs." },
  { label: "Transparent logic", detail: "Rules are visible, explainable, and easy to improve over time." },
  { label: "Faster operations", detail: "Help enrollment, credentialing, and operations teams move work forward." }
];

const steps = [
  { step: "01", title: "Upload the roster", copy: "Start with the spreadsheet your team already uses. ProviderMap normalizes structure, headers, formats, and common data issues." },
  { step: "02", title: "Review what matters", copy: "The system flags missing fields, questionable mappings, payer-specific gaps, and records that need human judgment." },
  { step: "03", title: "Export payer-ready files", copy: "Generate cleaner, more consistent roster outputs without rebuilding the same data over and over." }
];

export default function ProviderMapLandingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(20,184,166,0.28),_transparent_36%),radial-gradient(circle_at_80%_20%,_rgba(59,130,246,0.22),_transparent_32%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-teal-300/30 bg-teal-300/10 px-4 py-2 text-sm font-medium text-teal-100">
              Provider roster cleanup and payer-ready formatting
            </div>
            <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Stop rebuilding provider rosters for every payer.
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-300">
              ProviderMap helps provider organizations clean, standardize, validate, and transform roster data into payer-ready formats using transparent rules your team can trust.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="mailto:hello@providermap.tech?subject=ProviderMap Demo Request" className="rounded-2xl bg-teal-400 px-6 py-4 text-center text-base font-semibold text-slate-950 shadow-lg shadow-teal-500/20 transition hover:bg-teal-300">
                Request a demo
              </a>
              <a href="#how-it-works" className="rounded-2xl border border-white/15 px-6 py-4 text-center text-base font-semibold text-white transition hover:bg-white/10">
                See how it works
              </a>
            </div>
            <p className="mt-5 text-sm text-slate-400">
              Built for mid-sized provider groups, imaging centers, specialty practices, and teams managing multiple payer submissions.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur">
            <div className="rounded-2xl bg-slate-900 p-5">
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-sm text-slate-400">Roster readiness</p>
                  <p className="text-2xl font-bold">Submission check</p>
                </div>
                <span className="rounded-full bg-amber-300/15 px-3 py-1 text-sm font-medium text-amber-200">12 flags</span>
              </div>
              <div className="space-y-3">
                {[
                  ["Missing NPI", "3 records"],
                  ["Specialty mapping mismatch", "4 records"],
                  ["Invalid effective date format", "2 records"],
                  ["Payer-required location field blank", "3 records"]
                ].map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between rounded-xl bg-white/[0.06] px-4 py-3">
                    <span className="text-sm text-slate-200">{label}</span>
                    <span className="text-sm font-semibold text-teal-200">{value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-xl border border-teal-300/20 bg-teal-300/10 p-4">
                <p className="text-sm font-semibold text-teal-100">Transparent rule</p>
                <p className="mt-1 text-sm text-slate-300">If payer = Commercial Plan A, location address line 1, tax ID, specialty, taxonomy, and effective date are required before export.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-300">The real problem</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Provider data work is not just spreadsheet cleanup.</h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              It is operational drag. Every manual correction adds delay, risk, and dependency on the few people who know each payer’s quirks.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {painPoints.map((point) => (
              <div key={point} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <div className="mb-4 h-2 w-12 rounded-full bg-teal-300" />
                <p className="text-base leading-7 text-slate-200">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white text-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-700">What ProviderMap does</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight">One clean source. Many payer-ready outputs.</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              ProviderMap gives operations teams a controlled way to standardize roster data, validate it against submission rules, and export cleaner files for each payer.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((item) => (
              <div key={item.label} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <h3 className="text-xl font-bold">{item.label}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-300">How it works</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight">Simple enough for the first pilot. Structured enough to scale.</h2>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {steps.map((item) => (
            <div key={item.step} className="rounded-3xl border border-white/10 bg-white/[0.05] p-7">
              <p className="text-sm font-bold text-teal-300">{item.step}</p>
              <h3 className="mt-4 text-2xl font-bold">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{item.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-300">Designed for trust</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight">Not black-box AI. Practical workflow automation.</h2>
          </div>
          <p className="text-lg leading-8 text-slate-300">
            Provider organizations do not need another mysterious system. They need a clear, auditable way to see what changed, why it changed, what still needs attention, and which payer rule triggered the flag.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-3xl bg-teal-400 p-8 text-slate-950 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-4xl font-bold tracking-tight">Want to test ProviderMap against a real roster?</h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-800">
                Start with one payer format, one roster file, and one clear goal: prove whether cleaner roster prep can reduce avoidable rework.
              </p>
            </div>
            <a href="mailto:hello@providermap.tech?subject=ProviderMap Pilot Request" className="rounded-2xl bg-slate-950 px-7 py-4 text-center text-base font-semibold text-white shadow-lg transition hover:bg-slate-800">
              Start a pilot conversation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
