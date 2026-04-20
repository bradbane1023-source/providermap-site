import "./globals.css";

export const metadata = {
  title: "ProviderMap.tech",
  description: "Provider roster standardization for provider-side operations teams",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
