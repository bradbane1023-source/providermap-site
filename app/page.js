const validationRows = [
  { label: "NPI format", status: "Passed", color: "emerald" },
  { label: "TIN / NPI relationship", status: "Review", color: "amber" },
  { label: "Primary specialty", status: "Passed", color: "emerald" },
  { label: "Effective date", status: "Failed", color: "rose" },
  { label: "Payer template mapping", status: "Ready", color: "emerald" },
];

const scenarioFlags = [
  "14 NPIs missing digits",
  "6 specialties did not match payer values",
  "3 locations missing required fields",
  "Dates formatted incorrectly for submission",
];

const workflowCards = [
  {
    step: "01",
    title: "Normalize",
    text: "Standardize names, NPIs, TINs, specialties, taxonomy, locations, dates, and payer-required fields.",
  },
  {
    step: "02",
    title: "Validate",
    text: "Catch missing values, invalid formats, TIN/NPI relationship issues, and payer-specific rule failures.",
  },
  {
    step: "03",
    title: "Transform",
    text: "Generate clean, payer-ready roster outputs aligned to the required submission structure.",
  },
];

const messyRows = [
  ["Prov Name", "NPI #", "Spec", "Eff Date", "Tax ID"],
  ["Jones, Amy", "1827364510", "Cardio", "1-2-26", "Missing"],
  ["Lee Robert", "492817365", "Fam Med", "2026/02/01", "35-1234567"],
  ["Patel, Nina", "1938475612", "Radiology", "02/15/2026", "35-1234567"],
];

const cleanRows = [
  ["Provider Name", "NPI", "Primary Specialty", "Effective Date", "TIN"],
  ["Amy Jones", "1827364510", "Cardiology", "01/02/2026", "Needs Review"],
  ["Robert Lee", "Invalid NPI", "Family Medicine", "02/01/2026", "35-1234567"],
  ["Nina Patel", "1938475612", "Radiology", "02/15/2026", "35-1234567"],
];

const ruleRows = [
  ["PM-NPI-001", "NPI must be 10 digits and numeric", "Critical"],
  ["PM-TIN-004", "TIN must match organization billing relationship", "Critical"],
  ["PM-SPEC-007", "Specialty must map to payer-approved value", "Warning"],
  ["PM-DATE-004", "Effective date must use MM/DD/YYYY", "Critical"],
];

function StatusPill({ color = "cyan", children }) {
  const styles = {
    emerald: "border-emerald-300/20 bg-emerald-400/10 text-emerald-300",
    amber: "border-amber-300/20 bg-amber-400/10 text-amber-300",
    rose: "border-rose-300/20 bg-rose-400/10 text-rose-300",
    cyan: "border-cyan-300/20 bg-cyan-300/10 text-cyan-200",
  };

  return (
    <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${styles[color]}`}>
      {children}
    </span>
  );
}

function MiniTable({ title, rows, tone = "cyan" }) {
  const toneStyles = {
    rose: "border-rose-300/20 bg-rose-300/10 text-rose-200",
    emerald: "border-emerald-300/20 bg-emerald-300/10 text-emerald-200",
    cyan: "border-cyan-300/20 bg-cyan-300/10 text-cyan-200",
  };

  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 shadow-2xl shadow-black/20">
      <div className={`border-b px-5 py-4 ${toneStyles[tone]}`}>
        <h3 className="text-sm font-semibold">{title}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={`${title}-${rowIndex}`} className="border-b border-white/5 last:border-0">
                {row.map((cell, cellIndex) => (
                  <td
                    key={`${title}-${rowIndex}-${cellIndex}`}
                    className={`whitespace-nowrap px-4 py-3 ${rowIndex === 0 ? "font-semibold text-slate-200" : "text-slate-400"}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ProductPanel() {
  return (
    <div className="relative mx-auto max-w-xl lg:mx-0">
      <div className="absolute -left-8 top-12 hidden h-64 w-72 rotate-[-8deg] rounded-3xl border border-white/10 bg-slate-900/80 shadow-2xl shadow-black/40 lg:block" />
      <div className="absolute -right-8 bottom-10 hidden h-56 w-72 rotate-[7deg] rounded-3xl border border-cyan-300/20 bg-cyan-300/10 shadow-2xl shadow-cyan-950/40 lg:block" />

      <div className="relative rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl">
        <div className="rounded-[1.5rem] bg-slate-950 p-5">
          <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <p className="text-sm text-slate-400">Roster mission control</p>
              <h2 className="text-2xl font-bold">Submission Readiness</h2>
            </div>
            <StatusPill color="cyan">Rules visible</StatusPill>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-3xl font-bold text-white">84%</p>
              <p className="mt-1 text-xs text-slate-400">ready</p>
            </div>
            <div className="rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4">
              <p className="text-3xl font-bold text-amber-200">12</p>
              <p className="mt-1 text-xs text-amber-100/70">flags</p>
            </div>
            <div className="rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-4">
              <p className="text-3xl font-bold text-emerald-200">3</p>
              <p className="mt-1 text-xs text-emerald-100/70">outputs</p>
            </div>
          </div>

          <div className="mt-5 space-y-3">
            {validationRows.map((row) => (
              <div key={row.label} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition hover:border-cyan-300/30 hover:bg-white/[0.06]">
                <span className="text-sm text-slate-200">{row.label}</span>
                <StatusPill color={row.color}>{row.status}</StatusPill>
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
  );
}

function PipelineCard({ tone, eyebrow, title, children }) {
  const styles = {
    rose: "border-rose-300/20 bg-rose-300/10 text-rose-200",
    cyan: "border-cyan-300/20 bg-cyan-300/10 text-cyan-200",
    emerald: "border-emerald-300/20 bg-emerald-300/10 text-emerald-200",
  };

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/90 p-5 shadow-2xl shadow-black/30">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <div className={`mb-5 inline-flex rounded-full border px-3 py-1 text-xs font-bold ${styles[tone]}`}>
        {eyebrow}
      </div>
      <h3 className="mb-5 text-xl font-black text-white">{title}</h3>
      {children}
    </div>
  );
}

function SignaturePipeline() {
  return (
    <div className="relative mt-14">
      <div className="absolute inset-0 rounded-[3rem] bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.20),transparent_45%)] blur-2xl" />
      <div className="relative rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl lg:p-6">
        <div className="grid gap-5 lg:grid-cols-[1fr_96px_1fr_96px_1fr] lg:items-stretch">
          <PipelineCard tone="rose" eyebrow="Messy input" title="Unstructured roster">
            <div className="space-y-3">
              {[
                ["Prov Name", "Spec", "Eff Date"],
                ["Jones, Amy", "Cardio", "1-2-26"],
                ["Lee Robert", "Fam Med", "2026/02/01"],
                ["Patel, Nina", "Radiology", "02/15/2026"],
              ].map((row, index) => (
                <div key={index} className="grid grid-cols-3 gap-2 text-xs">
                  {row.map((cell, cellIndex) => (
                    <div key={`${index}-${cellIndex}`} className={`rounded-lg border px-2 py-2 ${index === 0 ? "border-white/10 bg-white/[0.05] font-bold text-slate-300" : cell.includes("1-2") || cell.includes("2026/") || cell === "Fam Med" || cell === "Cardio" ? "border-rose-300/20 bg-rose-300/10 text-rose-200" : "border-white/10 bg-white/[0.03] text-slate-400"}`}>
                      {cell}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </PipelineCard>

          <div className="flex items-center justify-center py-2">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-3xl font-black text-cyan-200 shadow-xl shadow-cyan-950/40 lg:h-20 lg:w-20">
              →
            </div>
          </div>

          <PipelineCard tone="cyan" eyebrow="ProviderMap" title="Validation engine">
            <div className="space-y-4">
              {["Normalize fields", "Apply payer rules", "Flag issues", "Guide corrections"].map((step, index) => (
                <div key={step} className="flex items-center gap-3 rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.06] p-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-300 text-sm font-black text-slate-950">{index + 1}</div>
                  <span className="text-sm font-semibold text-slate-200">{step}</span>
                </div>
              ))}
              <div className="rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold text-amber-200">Issues detected</p>
                  <StatusPill color="amber">12 flags</StatusPill>
                </div>
              </div>
            </div>
          </PipelineCard>

          <div className="flex items-center justify-center py-2">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-3xl font-black text-cyan-200 shadow-xl shadow-cyan-950/40 lg:h-20 lg:w-20">
              →
            </div>
          </div>

          <PipelineCard tone="emerald" eyebrow="Clean output" title="Payer-ready roster">
            <div className="space-y-3">
              {[
                ["Provider Name", "Specialty", "Effective Date"],
                ["Amy Jones", "Cardiology", "01/02/2026"],
                ["Robert Lee", "Family Medicine", "02/01/2026"],
                ["Nina Patel", "Radiology", "02/15/2026"],
              ].map((row, index) => (
                <div key={index} className="grid grid-cols-3 gap-2 text-xs">
                  {row.map((cell, cellIndex) => (
                    <div key={`${index}-${cellIndex}`} className={`rounded-lg border px-2 py-2 ${index === 0 ? "border-white/10 bg-white/[0.05] font-bold text-slate-300" : "border-emerald-300/20 bg-emerald-300/10 text-emerald-200"}`}>
                      {cell}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </PipelineCard>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <section className="relative border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.24),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(34,197,94,0.16),transparent_28%),linear-gradient(180deg,rgba(15,23,42,0),rgba(15,23,42,1))]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-200 shadow-lg shadow-cyan-950/30">
              Provider roster standardization for healthcare operations
            </div>
            <h1 className="text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              Stop rebuilding provider rosters for every payer.
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-slate-300">
              ProviderMap turns messy roster files into validated, payer-ready outputs before formatting errors create rejection loops downstream.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="mailto:hello@providermap.tech?subject=ProviderMap sample roster review" className="rounded-xl bg-cyan-300 px-6 py-4 text-center text-base font-bold text-slate-950 shadow-xl shadow-cyan-300/20 transition hover:-translate-y-1 hover:bg-cyan-200">
                Send us a sample roster
              </a>
              <a href="#pipeline" className="rounded-xl border border-white/15 bg-white/5 px-6 py-4 text-center text-base font-bold text-white transition hover:-translate-y-1 hover:bg-white/10">
                See the pipeline
              </a>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3 text-center text-sm text-slate-300">
              {[
                ["12", "sample flags"],
                ["3", "workflow steps"],
                ["0", "black boxes"],
              ].map(([num, label]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-lg shadow-black/10 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/30">
                  <p className="text-3xl font-black text-white">{num}</p>
                  <p className="mt-1 text-slate-400">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <ProductPanel />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">The real problem</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">Provider data should not be this hard.</h2>
          </div>
          <p className="text-lg leading-8 text-slate-300">
            Every payer expects a different structure—and none of it matches how provider data actually lives. The result is rejected submissions, manual cleanup, onboarding delays, and downstream directory or claims issues.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {["Rejected submissions", "Spreadsheet cleanup", "Delayed onboarding", "Directory and claims issues"].map((item) => (
            <div key={item} className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/10 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.07]">
              <div className="mb-5 h-2 w-14 rounded-full bg-cyan-300 transition group-hover:w-20" />
              <h3 className="text-lg font-bold text-white">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="pipeline" className="relative border-y border-white/10 bg-white/[0.03]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.10),transparent_42%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">The signature workflow</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">Messy roster in. Payer-ready output out.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              ProviderMap shows what would fail before submission, explains why, and helps turn inconsistent data into a cleaner payer-ready file.
            </p>
          </div>

          <SignaturePipeline />
        </div>
      </section>

      <section className="bg-cyan-300 text-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-8">
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">This is not just formatting. It is operational risk.</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-800">
            Bad roster data can delay onboarding, create directory quality issues, trigger manual rework, and slow down payer relationships. The earlier you catch it, the cheaper it is to fix.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">How ProviderMap works</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">One clean roster. Any payer format.</h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {workflowCards.map((card) => (
            <div key={card.title} className="rounded-3xl border border-white/10 bg-slate-900 p-8 shadow-2xl shadow-black/20 transition hover:-translate-y-2 hover:border-cyan-300/30 hover:bg-slate-900/80">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300 text-xl font-black text-slate-950 shadow-lg shadow-cyan-300/20">{card.step}</div>
              <h3 className="text-2xl font-black text-white">{card.title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-300">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">Transparent validation</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">Rules your operators can understand.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              ProviderMap uses clear validation logic, not opaque AI. Every rule is visible, explainable, repeatable, and easy to test.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5 shadow-2xl shadow-black/30">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-bold text-white">Example rule library</h3>
              <StatusPill color="cyan">Audit-friendly</StatusPill>
            </div>
            <div className="space-y-3">
              {ruleRows.map(([id, rule, severity]) => (
                <div key={id} className="rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-cyan-300/30 hover:bg-white/[0.06]">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-xs font-bold tracking-wide text-cyan-200">{id}</p>
                      <p className="mt-1 text-sm text-slate-300">{rule}</p>
                    </div>
                    <StatusPill color={severity === "Critical" ? "rose" : "amber"}>{severity}</StatusPill>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">Built from operator experience</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-white">Not theory. Field scars.</h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-slate-300 lg:col-span-2">
            <p>
              ProviderMap is built by people who understand payer submission rejections, spreadsheet cleanup cycles, directory quality pressure, and manual workarounds that never scale.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {["Human review", "Traceable flags", "Limited data handling", "Explainable output"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 font-semibold text-slate-100 transition hover:-translate-y-1 hover:border-cyan-300/30">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(56,189,248,0.18),transparent_34%)]" />
        <div className="relative mx-auto max-w-5xl px-6 py-24 text-center lg:px-8">
          <div className="rounded-[2rem] border border-cyan-300/20 bg-white/[0.06] p-8 shadow-2xl shadow-cyan-950/40 backdrop-blur lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">Ready to test it?</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">Send us your worst roster. We will show you what breaks.</h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Walk through your current payer submission process and see where controlled validation could reduce rework before the next submission.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a href="mailto:hello@providermap.tech?subject=ProviderMap sample roster review" className="rounded-xl bg-cyan-300 px-7 py-4 text-center text-base font-bold text-slate-950 shadow-xl shadow-cyan-300/20 transition hover:-translate-y-1 hover:bg-cyan-200">
                Send a sample roster
              </a>
              <a href="mailto:hello@providermap.tech?subject=ProviderMap payer workflow discussion" className="rounded-xl border border-white/15 bg-white/5 px-7 py-4 text-center text-base font-bold text-white transition hover:-translate-y-1 hover:bg-white/10">
                Talk through workflow
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
