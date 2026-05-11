"use client";

import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070A12] text-white overflow-hidden">
      <section className="relative px-6 py-8 lg:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(52,211,153,0.18),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.14),transparent_30%),linear-gradient(180deg,#070A12_0%,#0B1020_55%,#070A12_100%)]" />

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-400/15 ring-1 ring-emerald-300/30">
              <span className="text-lg font-black text-emerald-300">PM</span>
            </div>
            <div>
              <div className="text-lg font-semibold tracking-tight">ProviderMap</div>
              <div className="text-xs text-slate-400">Healthcare roster operations</div>
            </div>
          </div>

          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#platform" className="hover:text-white">Platform</a>
            <a href="#workflow" className="hover:text-white">Workflow</a>
            <a href="#outcomes" className="hover:text-white">Outcomes</a>
          </div>

          <a
            href="mailto:hello@providermap.tech"
            className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/10 hover:bg-emerald-100"
          >
            Request demo
          </a>
        </nav>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:py-28">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm font-medium text-emerald-200">
              Built for provider data teams, not generic file cleanup
            </div>

            <h1 className="max-w-4xl text-5xl font-black tracking-[-0.04em] text-white md:text-7xl">
              Turn messy provider rosters into payer-ready submissions.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              ProviderMap standardizes roster intake, validates payer-specific rules,
              flags operational risk, and produces clean outputs your payer partners
              can actually process.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:hello@providermap.tech"
                className="rounded-2xl bg-emerald-300 px-6 py-4 text-center text-sm font-bold text-slate-950 shadow-xl shadow-emerald-500/20 hover:bg-emerald-200"
              >
                Start a roster review
              </a>
              <a
                href="#workflow"
                className="rounded-2xl border border-white/12 bg-white/[0.04] px-6 py-4 text-center text-sm font-bold text-white hover:bg-white/[0.08]"
              >
                See the workflow
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
              {[
                ["Less rework", "Cleaner first-pass files"],
                ["Fewer delays", "Validation before submission"],
                ["More leverage", "Consistent payer evidence"],
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="font-bold text-white">{title}</div>
                  <div className="mt-1 text-xs leading-5 text-slate-400">{text}</div>
                </div>
              ))}
            </div>
          </div>

          <TransformationVisual />
        </div>
      </section>

      <section id="platform" className="relative border-y border-white/10 bg-[#090E1A] px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-300">Operational control layer</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Purpose-built for the ugly middle of provider operations.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              ProviderMap does not pretend provider data is clean. It expects merged cells,
              missing fields, stale products, inconsistent headers, and payer-specific friction.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <FeatureCard
              eyebrow="01"
              title="Roster intake normalization"
              text="Converts inconsistent provider spreadsheets into a structured operational model."
            />
            <FeatureCard
              eyebrow="02"
              title="Validation rules engine"
              text="Applies format, completeness, product, specialty, and payer-specific checks before submission."
            />
            <FeatureCard
              eyebrow="03"
              title="Exception-ready evidence"
              text="Creates a clear issue trail so teams can resolve defects instead of hunting through files."
            />
          </div>
        </div>
      </section>

      <section id="workflow" className="px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-300">Signature workflow</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                From chaos to submission confidence.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                The value is not just a cleaner file. It is a repeatable operating system
                for getting provider data through payer intake with fewer surprises.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
              <div className="grid gap-4 md:grid-cols-3">
                <MiniPanel
                  title="Messy roster"
                  items={["Merged cells", "Unknown headers", "Missing NPI", "Stale products"]}
                  tone="red"
                />
                <MiniPanel
                  title="Validation engine"
                  items={["Map fields", "Apply rules", "Score risk", "Create issues"]}
                  tone="emerald"
                />
                <MiniPanel
                  title="Payer-ready output"
                  items={["Clean template", "Issue report", "Audit trail", "Submission package"]}
                  tone="blue"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="outcomes" className="px-6 pb-24 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-emerald-300/20 bg-emerald-300/[0.06] p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <h2 className="text-4xl font-black tracking-tight md:text-5xl">
                Better data. Better payer conversations.
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                When provider groups submit consistent, validated, traceable data, they reduce
                avoidable rework and show payers they are serious operational partners.
              </p>
            </div>
            <div className="grid gap-4">
              {["Reduce manual cleanup", "Catch defects before payer intake", "Standardize repeat submissions", "Improve operational credibility"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-black/20 p-4 font-semibold text-white">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-sm text-slate-500 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row">
          <div>© {new Date().getFullYear()} ProviderMap. All rights reserved.</div>
          <div>Provider roster validation for healthcare operations teams.</div>
        </div>
      </footer>
    </main>
  );
}

function TransformationVisual() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-[2rem] bg-emerald-400/10 blur-3xl" />

      <div className="relative rounded-[2rem] border border-white/10 bg-slate-950/70 p-5 shadow-2xl shadow-black/40 backdrop-blur">
        <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <div className="text-sm font-bold text-white">Roster Transformation Console</div>
            <div className="text-xs text-slate-400">Messy intake → governed validation → payer output</div>
          </div>
          <div className="rounded-full bg-emerald-300/10 px-3 py-1 text-xs font-bold text-emerald-300">
            Live validation
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1fr_0.7fr_1fr]">
          <DataStack />
          <EngineCore />
          <OutputStack />
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-4">
          {[
            ["84", "records scanned"],
            ["17", "issues found"],
            ["11", "auto-mapped"],
            ["92%", "readiness score"],
          ].map(([num, label]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <div className="text-2xl font-black text-white">{num}</div>
              <div className="mt-1 text-xs text-slate-400">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DataStack() {
  const rows = [
    ["Provider Name", "Spec", "NPI", "Product"],
    ["J. Smith MD", "Cardio", "1487...", "MCR"],
    ["Anne Lee", "Rad", "", "Comm"],
    ["Bright Clinic", "PCP", "1192...", "?"],
    ["Carlos M.", "Ortho", "7730...", "MCD"],
  ];

  return (
    <div className="rounded-3xl border border-red-300/20 bg-red-950/20 p-4">
      <div className="mb-3 flex items-center justify-between">
        <div className="font-bold text-red-100">Messy roster</div>
        <div className="text-xs text-red-200/70">xlsx intake</div>
      </div>

      <div className="space-y-2">
        {rows.map((row, index) => (
          <div
            key={index}
            className={`grid grid-cols-4 gap-2 rounded-xl border p-2 text-[10px] ${
              index === 0
                ? "border-white/10 bg-white/10 text-slate-300"
                : "border-red-300/10 bg-black/20 text-slate-400"
            }`}
          >
            {row.map((cell, i) => (
              <div key={i} className={cell === "" || cell === "?" ? "text-red-300" : ""}>
                {cell || "missing"}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function EngineCore() {
  return (
    <div className="relative flex items-center justify-center rounded-3xl border border-emerald-300/25 bg-emerald-300/[0.07] p-5">
      <div className="absolute left-[-18px] top-1/2 hidden h-px w-9 bg-emerald-300/50 lg:block" />
      <div className="absolute right-[-18px] top-1/2 hidden h-px w-9 bg-emerald-300/50 lg:block" />

      <div className="text-center">
        <div className="mx-auto grid h-24 w-24 place-items-center rounded-full border border-emerald-300/30 bg-emerald-300/10 shadow-lg shadow-emerald-500/20">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-emerald-300 text-2xl font-black text-slate-950">
            ✓
          </div>
        </div>

        <div className="mt-5 font-black text-white">Validation Engine</div>
        <div className="mt-2 text-xs leading-5 text-slate-400">
          field mapping<br />
          payer rules<br />
          defect scoring<br />
          audit trail
        </div>
      </div>
    </div>
  );
}

function OutputStack() {
  return (
    <div className="rounded-3xl border border-blue-300/20 bg-blue-950/20 p-4">
      <div className="mb-3 flex items-center justify-between">
        <div className="font-bold text-blue-100">Payer-ready output</div>
        <div className="text-xs text-blue-200/70">submission package</div>
      </div>

      <div className="space-y-3">
        {[
          ["Clean roster template", "Ready"],
          ["Exception report", "17 items"],
          ["Payer field mapping", "Validated"],
          ["Submission evidence", "Generated"],
        ].map(([title, status]) => (
          <div key={title} className="rounded-2xl border border-blue-300/10 bg-black/20 p-3">
            <div className="flex items-center justify-between gap-3">
              <div className="text-sm font-semibold text-white">{title}</div>
              <div className="rounded-full bg-blue-300/10 px-2 py-1 text-[10px] font-bold text-blue-200">
                {status}
              </div>
            </div>
            <div className="mt-2 h-2 rounded-full bg-white/10">
              <div className="h-2 rounded-full bg-blue-300" style={{ width: title === "Exception report" ? "65%" : "92%" }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FeatureCard({ eyebrow, title, text }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-xl shadow-black/10">
      <div className="text-sm font-black text-emerald-300">{eyebrow}</div>
      <h3 className="mt-4 text-2xl font-black tracking-tight text-white">{title}</h3>
      <p className="mt-4 leading-7 text-slate-400">{text}</p>
    </div>
  );
}

function MiniPanel({ title, items, tone }) {
  const toneClasses = {
    red: "border-red-300/20 bg-red-950/20 text-red-200",
    emerald: "border-emerald-300/20 bg-emerald-950/20 text-emerald-200",
    blue: "border-blue-300/20 bg-blue-950/20 text-blue-200",
  };

  return (
    <div className={`rounded-3xl border p-5 ${toneClasses[tone]}`}>
      <h3 className="text-lg font-black text-white">{title}</h3>
      <div className="mt-5 space-y-3">
        {items.map((item) => (
          <div key={item} className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
