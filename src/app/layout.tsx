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

export const metadata: Metadata = {
  title: "Shailesh Stack — Build • Launch • Scale",
  description:
    "Personal technology platform of Shailesh Suthar — AI Full Stack Developer. Showcasing AI products, web applications, and software engineering journey.",
  keywords: [
    "Shailesh Suthar",
    "AI Developer",
    "Full Stack Developer",
    "Portfolio",
    "Web Development",
    "PHP",
    "MySQL",
    "Python",
    "Next.js",
  ],
  authors: [{ name: "Shailesh Suthar" }],
  creator: "Shailesh Suthar",
  metadataBase: new URL("https://shaileshstack.dev"),
  openGraph: {
    title: "Shailesh Stack — Build • Launch • Scale",
    description:
      "AI Full Stack Developer building innovative software products, SaaS platforms, and digital experiences.",
    type: "website",
    locale: "en_IN",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-on-background">
        {children}
      </body>
    </html>
  );
}
