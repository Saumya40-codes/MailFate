import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MailFate",
  description: "Check your email's fate",
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
