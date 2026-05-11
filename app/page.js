export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_35%),radial-gradient(circle_at_top_right,rgba(34,197,94,0.12),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-200">
              Provider roster standardization for healthcare operations
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Fix provider rosters before they break everything downstream.
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-300">
              ProviderMap standardizes, validates, and transforms provider data into payer-ready formats without guesswork, rework, or black-box AI.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="mailto:hello@providermap.tech" className="rounded-xl bg-cyan-300 px-6 py-4 text-center text-base font-semibold text-slate-950 shadow-lg shadow-cyan-300/20 transition hover:bg-cyan-200">
                See a sample transformation
              </a>
              <a href="#workflow" className="rounded-xl border border-white/15 bg-white/5 px-6 py-4 text-center text-base font-semibold text-white transition hover:bg-white/10">
                Review the workflow
              </a>
            </div>
            <p className="mt-6 text-sm text-slate-400">
              Built for teams tired of rejected files, payer-specific formatting changes, and endless spreadsheet cleanup.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl shadow-cyan-950/40 backdrop-blur">
            <div className="rounded-2xl bg-slate-900 p-5">
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-sm text-slate-400">Roster Validation</p>
                  <h2 className="text-xl font-semibold">Payer Readiness Check</h2>
                </div>
                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-sm font-medium text-emerald-300">Rules visible</span>
              </div>

              <div className="space-y-3">
                {[
                  ["NPI format", "Passed", "emerald"],
                  ["TIN/NPI relationship", "Review", "amber"],
                  ["Primary specialty", "Passed", "emerald"],
                  ["Effective date", "Failed", "rose"],
                  ["Payer template mapping", "Ready", "emerald"],
                ].map(([label, status, color]) => (
                  <div key={label} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                    <span className="text-sm text-slate-200">{label}</span>
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      color === "emerald" ? "bg-emerald-400/10 text-emerald-300" :
                      color === "amber" ? "bg-amber-400/10 text-amber-300" :
                      "bg-rose-400/10 text-rose-300"
                    }`}>
                      {status}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4">
                <p className="text-sm font-semibold text-cyan-200">Correction guidance</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Effective date must use MM/DD/YYYY and cannot precede credentialing approval date. Rule PM-DATE-004.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">The real problem</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white">Provider data should not be this hard.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Every payer wants provider rosters in a different format. Different tabs. Different column names. Different rules. Different expectations. The result is rejected submissions, manual rework, onboarding delays, and downstream issues in directories and claims.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            "Rejected submissions",
            "Spreadsheet cleanup",
            "Delayed onboarding",
            "Directory and claims issues",
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <div className="mb-4 h-2 w-12 rounded-full bg-cyan-300" />
              <h3 className="text-lg font-semibold text-white">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="workflow" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">How ProviderMap works</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white">One clean roster. Any payer format.</h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              ["01", "Normalize", "Standardize inconsistent provider data, column names, date formats, specialties, and required fields."],
              ["02", "Validate", "Apply clear rules to identify missing values, malformed fields, TIN/NPI issues, and payer-specific gaps."],
              ["03", "Transform", "Generate clean, payer-ready files aligned to the expected roster template and submission rules."],
            ].map(([num, title, text]) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-slate-900 p-8 shadow-xl">
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300 text-lg font-bold text-slate-950">{num}</div>
                <h3 className="text-2xl font-bold text-white">{title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">Before and after</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white">From messy spreadsheet to payer-ready output.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              ProviderMap catches the things that usually get discovered too late: merged cells, inconsistent specialties, missing required fields, invalid dates, and payer-specific formatting gaps.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="rounded-2xl border border-rose-300/20 bg-rose-300/10 p-5">
              <h3 className="font-semibold text-rose-200">Before</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">Mixed headers, stale values, manual fixes, hidden formatting, and unclear rejection risk.</p>
            </div>
            <div className="rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-5">
              <h3 className="font-semibold text-emerald-200">After</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">Standardized structure, validated data, payer-specific mappings, and submission-ready output.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">Why we are different</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white">No black box. No guesswork.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              ProviderMap is built on transparent validation logic. Every rule is visible, explainable, and repeatable, so teams understand what failed, why it failed, and how to correct it.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Visible rules",
              "Explainable failures",
              "Repeatable workflows",
              "Audit-friendly logic",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-300/15 text-cyan-200">✓</div>
                <h3 className="font-semibold text-white">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">Built for the chaos</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white">Designed for teams in the middle of provider data pain.</h2>
          </div>
          <div className="space-y-4 text-lg leading-8 text-slate-300">
            <p>Provider operations. Credentialing. Enrollment. Payer relations. Implementation and onboarding.</p>
            <p>If your team touches provider data before it reaches a payer, ProviderMap helps move the work from reactive cleanup to controlled, repeatable workflows.</p>
          </div>
        </div>
      </section>

      <section className="bg-cyan-300 text-slate-950">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:items-center">
          <div>
            <h2 className="text-4xl font-bold tracking-tight">Let’s look at your roster together.</h2>
            <p className="mt-4 text-lg leading-8 text-slate-800">
              Walk through your current process, identify where errors happen, and see what a standardized workflow could look like.
            </p>
          </div>
          <div className="flex lg:justify-end">
            <a href="mailto:hello@providermap.tech" className="rounded-xl bg-slate-950 px-7 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-slate-800">
              Start the conversation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
