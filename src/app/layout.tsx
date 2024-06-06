import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "POC Tailwind Elements",
  description: "🧪 POC to test Tailwind Elements library in a Next.js project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
