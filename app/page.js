const validationRows = [
  ["NPI format", "Passed", "emerald"],
  ["TIN / NPI relationship", "Review", "amber"],
  ["Primary specialty", "Passed", "emerald"],
  ["Effective date", "Failed", "rose"],
  ["Payer template mapping", "Ready", "emerald"],
];

const payerRules = [
  ["PM-NPI-001", "NPI must be 10 digits and numeric", "Critical"],
  ["PM-TIN-004", "TIN must match organization billing relationship", "Critical"],
  ["PM-SPEC-007", "Specialty must map to payer-approved value", "Warning"],
  ["PM-DATE-004", "Effective date must use MM/DD/YYYY", "Critical"],
  ["PM-LOC-011", "Practice location must include full address", "Warning"],
  ["PM-TAX-003", "Taxonomy must be present when required", "Critical"],
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

function StatusPill({ color, children }) {
  const styles = {
    emerald: "bg-emerald-400/10 text-emerald-300 border-emerald-300/20",
    amber: "bg-amber-400/10 text-amber-300 border-amber-300/20",
    rose: "bg-rose-400/10 text-rose-300 border-rose-300/20",
    cyan: "bg-cyan-300/10 text-cyan-200 border-cyan-300/20",
  };

  return (
    <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${styles[color]}`}>
      {children}
    </span>
  );
}

function MiniTable({ title, rows, tone = "slate" }) {
  return (
    <div className={`overflow-hidden rounded-2xl border ${tone === "rose" ? "border-rose-300/20" : "border-emerald-300/20"} bg-slate-950/70`}>
      <div className={`border-b px-4 py-3 ${tone === "rose" ? "border-rose-300/20 bg-rose-300/10" : "border-emerald-300/20 bg-emerald-300/10"}`}>
        <h3 className={`text-sm font-semibold ${tone === "rose" ? "text-rose-200" : "text-emerald-200"}`}>{title}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <tbody>
            {rows.map((row, index) => (
              <tr key={`${title}-${index}`} className="border-b border-white/5 last:border-0">
                {row.map((cell) => (
                  <td key={cell} className={`whitespace-nowrap px-4 py-3 ${index === 0 ? "font-semibold text-slate-200" : "text-slate-400"}`}>
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

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.20),transparent_35%),radial-gradient(circle_at_top_right,rgba(34,197,94,0.14),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-200">
              Provider roster standardization for healthcare operations
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Stop rebuilding provider rosters for every payer.
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-300">
              ProviderMap helps you:

- Clean provider data
- Standardize structure
- Validate before submission
- Transform into payer-ready formats

So errors don’t turn into rejection loops downstream.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="mailto:hello@providermap.tech?subject=ProviderMap sample roster review" className="rounded-xl bg-cyan-300 px-6 py-4 text-center text-base font-semibold text-slate-950 shadow-lg shadow-cyan-300/20 transition hover:bg-cyan-200">
                Test a sample roster
              </a>
              <a href="#sample" className="rounded-xl border border-white/15 bg-white/5 px-6 py-4 text-center text-base font-semibold text-white transition hover:bg-white/10">
                View sample workflow
              </a>
            </div>
            <div className="mt-8 grid max-w-2xl grid-cols-3 gap-3 text-center text-sm text-slate-300">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-2xl font-bold text-white">12</p>
                <p className="mt-1">sample flags</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-2xl font-bold text-white">3</p>
                <p className="mt-1">workflow steps</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-2xl font-bold text-white">0</p>
                <p className="mt-1">black boxes</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl shadow-cyan-950/40 backdrop-blur">
            <div className="rounded-2xl bg-slate-900 p-5">
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-sm text-slate-400">Roster readiness</p>
                  <h2 className="text-xl font-semibold">Submission Check</h2>
                </div>
                <StatusPill color="cyan">Rules visible</StatusPill>
              </div>

              <div className="space-y-3">
                {validationRows.map(([label, status, color]) => (
                  <div key={label} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                    <span className="text-sm text-slate-200">{label}</span>
                    <StatusPill color={color}>{status}</StatusPill>
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
            Every payer expects a different structure—and none of it matches how your data actually lives.

What that creates:
- Rejected submissions
- Manual spreadsheet cleanup
- Delayed onboarding
- Directory and claims issues
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {["Rejected submissions", "Spreadsheet cleanup", "Delayed onboarding", "Directory and claims issues"].map((item) => (
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
              ["01", "Normalize", "Standardize inconsistent provider data across column names, date formats, NPIs, TINs, specialties, taxonomy, locations, and required fields."],
              ["02", "Validate", "Apply clear rules to catch missing NPIs, invalid formats, TIN/NPI relationship issues, specialty mismatches, invalid dates, and payer-specific gaps."],
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

      <section id="sample" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">Sample transformation</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white">From messy spreadsheet to payer-ready output.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            ProviderMap surfaces issues before a payer does.

Not just a cleaner file—a repeatable workflow your team can trust.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <MiniTable title="Input roster: inconsistent source data" rows={messyRows} tone="rose" />
          <MiniTable title="ProviderMap output: normalized and flagged" rows={cleanRows} tone="emerald" />
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">Transparent validation</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white">Rules your operators can understand.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              ProviderMap uses clear validation logic—not opaque AI.

Every rule is:
- Visible
- Explainable
- Repeatable
- Easy to test
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">Example rule library</h3>
              <StatusPill color="cyan">Audit-friendly</StatusPill>
            </div>
            <div className="space-y-3">
              {payerRules.map(([id, rule, severity]) => (
                <div key={id} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-xs font-semibold tracking-wide text-cyan-200">{id}</p>
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
          <div className="lg:col-span-1">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">Built from operator experience</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white">Not theory. Field scars.</h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-slate-300 lg:col-span-2">
            <p>
              ProviderMap is built by people who have dealt with:
- Payer submission rejections
- Spreadsheet cleanup cycles
- Directory quality pressure
- Manual workarounds that never scale
            </p>
            <p>
              The product is intentionally practical: make the data cleaner, make the rules visible, reduce repeat rework, and help teams submit with more confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">Designed for responsible healthcare operations</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white">Built with privacy, control, and traceability in mind.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Designed for operational trust:
- Limited data handling
- Transparent rules
- Human review
- Clear correction guidance

No black box required.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {["Human review", "Traceable flags", "Limited data handling", "Explainable output"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-slate-900 p-6">
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
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">Who it helps</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white">Designed for teams in the middle of provider data pain.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Provider operations", "Credentialing", "Enrollment", "Payer relations", "Implementation", "Data quality"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cyan-300 text-slate-950">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <h2 className="text-4xl font-bold tracking-tight">Send us a sample roster.</h2>
            <p className="mt-4 text-lg leading-8 text-slate-800">
              Send a sample structure, walk through your current payer submission process, and see where a controlled validation workflow could reduce rework.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
            <a href="mailto:hello@providermap.tech?subject=ProviderMap sample roster review" className="rounded-xl bg-slate-950 px-7 py-4 text-center text-base font-semibold text-white shadow-lg transition hover:bg-slate-800">
              Test a sample roster
            </a>
            <a href="mailto:hello@providermap.tech?subject=ProviderMap payer workflow discussion" className="rounded-xl border border-slate-950/20 bg-white/40 px-7 py-4 text-center text-base font-semibold text-slate-950 transition hover:bg-white/60">
              Talk through workflow
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
