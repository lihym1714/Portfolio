import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Security Consulting Portfolio | Vulnerability Assessment & Penetration Testing",
  description: "Portfolio showcasing practical security consulting experience across financial web applications, Android applications, and penetration testing engagements.",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
