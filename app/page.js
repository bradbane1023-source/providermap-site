export default function ProviderMapLandingPage() {
  const painPoints = [
    "Every payer wants provider rosters in a different format.",
    "Small data issues turn into rejections, rework, and delays.",
    "Specialty mapping and taxonomy mismatches create avoidable confusion.",
    "Teams waste time cleaning spreadsheets instead of moving submissions forward.",
  ];

  const features = [
    {
      title: "Standardize incoming roster data",
      text: "Import provider roster files and normalize structure, fields, and formatting before submission work begins.",
    },
    {
      title: "Map to payer-specific formats",
      text: "Transform one source roster into multiple payer-ready outputs without rebuilding data.",
    },
    {
      title: "Flag incomplete records",
      text: "Surface missing fields and questionable mappings before they become downstream problems.",
    },
    {
      title: "Transparent validation logic",
      text: "Built on clear rules—not black-box AI—so teams can trust and understand the output.",
    },
  ];

  const steps = [
    { title: "Upload", text: "Import your current roster file." },
    { title: "Review", text: "Resolve flagged issues and mapping gaps." },
    { title: "Export", text: "Generate payer-ready files." },
  ];

  const audiences = [
    "Mid-sized provider groups",
    "Imaging and specialty practices",
    "Multi-site provider organizations",
    "Operations teams managing multiple payers",
  ];

  const outcomes = [
    "Reduce manual roster prep time",
    "Fewer submission errors",
    "Consistent payer submissions",
    "Cleaner internal workflows",
  ];

  return (
    <main style={{ fontFamily: "Arial, sans-serif", padding: "40px", maxWidth: "900px", margin: "auto" }}>
      
      <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>
        Fix provider data once. Use it everywhere.
      </h1>

      <p style={{ fontSize: "18px", marginBottom: "30px" }}>
        ProviderMap helps provider organizations clean, standardize, and transform roster data into payer-ready formats.
      </p>

      <h2>The Problem</h2>
      <ul>
        {painPoints.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>

      <h2>The Solution</h2>
      <ul>
        {features.map((f) => (
          <li key={f.title}>
            <strong>{f.title}:</strong> {f.text}
          </li>
        ))}
      </ul>

      <h2>How It Works</h2>
      <ol>
        {steps.map((s) => (
          <li key={s.title}>
            <strong>{s.title}:</strong> {s.text}
          </li>
        ))}
      </ol>

      <h2>Who It’s For</h2>
      <ul>
        {audiences.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>

      <h2>Expected Outcomes</h2>
      <ul>
        {outcomes.map((o) => (
          <li key={o}>{o}</li>
        ))}
      </ul>

      <hr style={{ margin: "40px 0" }} />

      <h2>Get Started</h2>
      <p>Want to see if this works for your team?</p>

      <a
        href="mailto:hello@providermap.tech"
        style={{
          display: "inline-block",
          marginTop: "10px",
          padding: "12px 20px",
          backgroundColor: "#000",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "6px",
        }}
      >
        Request a Demo
      </a>

    </main>
  );
}
