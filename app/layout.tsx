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
  title: "Shivprasad Bele - Full-Stack Developer",
  description:
    "Welcome to my portfolio! Full Stack Software Engineer with 3 years of experience in scalable web app development. Proficient in React.js, Next.js (frontend), and Node.js, Express (backend). Experienced in API design, UI/UX, clean coding practices, and team collaboration.",
  keywords: [
    "Full-Stack Developer",
    "Software Engineer",
    "Frontend Development",
    "Backend Development",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Database Design",
    "API Development",
    "Cloud Solutions",
    "DevOps",
    "System Architecture",
    "Web Development",
    "Shivprasad Bele",
  ],
  authors: [{ name: "Shivprasad Bele" }],
  creator: "Shivprasad Bele",
  openGraph: {
    title: "Shivprasad Bele - Full-Stack Developer Portfolio",
    description:
      "Passionate full-stack developer creating complete web solutions. Explore my projects and technical expertise across the entire development stack.",
    url: "https://your-domain.com",
    siteName: "Shivprasad Bele - Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shivprasad Bele - Full-Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivprasad Bele - Full-Stack Developer",
    description:
      "Passionate full-stack developer creating complete web solutions. Explore my projects and technical expertise across the entire development stack.",
    creator: "@yourusername",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
