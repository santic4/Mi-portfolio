import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Santiago Cañu | Full Stack Developer",
  description:
    "Portfolio de Santiago Cañu, Full Stack Developer especializado en React, Node.js, automatizaciones e integraciones.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
