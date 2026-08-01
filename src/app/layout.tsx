import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ParallaxField from "@/components/layout/ParallaxField";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Andre Haas — Portfólio",
  description:
    "[Meta descrição aqui — resumo curto para SEO sobre Andre Haas, iOS Engineer]",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ParallaxField />
        {children}
      </body>
    </html>
  );
}
