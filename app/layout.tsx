import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ABDon = Geist({
  variable: "--font-AB-Don",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Procon2025参加フォーム",
  description: "Procon2025参加フォーム",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ABDon.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
