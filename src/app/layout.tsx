import type { Metadata, Viewport } from "next";
import { Fraunces, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/portfolio";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://srinivasm.vercel.app"),
  title: `${profile.name} | ${profile.roles[0]}`,
  description: profile.headline,
  keywords: [
    "Srinivas M",
    "BCA Student",
    "Full Stack Developer",
    "AI",
    "Machine Learning",
    "Portfolio",
    "Bangalore",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} | ${profile.roles[0]}`,
    description: profile.headline,
    type: "website",
    url: "https://srinivasm.vercel.app",
    images: [
      {
        url: "/og-image.png",
        alt: `${profile.name} portfolio preview`,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | ${profile.roles[0]}`,
    description: profile.headline,
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  initialScale: 1,
  viewportFit: "cover",
  width: "device-width",
  themeColor: "#0d1415",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${hankenGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
