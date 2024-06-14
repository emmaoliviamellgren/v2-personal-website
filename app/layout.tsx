import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Emma Mellgren",
  description: "Emma Mellgren | Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}
