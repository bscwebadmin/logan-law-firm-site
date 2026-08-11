import "../styles/globals.css";
import company from "../data/company.json";

export const metadata = {
  title: company.name,
  description: company.tagline,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-slate-800">{children}</body>
    </html>
  );
}