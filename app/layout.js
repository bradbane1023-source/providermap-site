import "./globals.css";

export const metadata = {
  title: "ProviderMap",
  description: "Provider roster validation for healthcare operations teams.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
