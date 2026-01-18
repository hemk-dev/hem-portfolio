import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Hem - Portfolio",
    template: "%s | Hem - Portfolio",
  },
  description:
    "Backend-focused software engineer with 2+ years of experience building production-grade systems. Specializing in APIs, payment processing, third-party integrations, databases, and scalable architectures.",
  keywords: [
    "Hem",
    "Backend Engineer",
    "Software Engineer",
    "API Development",
    "Node.js",
    "Express",
    "Fastify",
    "NestJS",
    "TypeScript",
    "PostgreSQL",
    "MongoDB",
    "Payment Integration",
    "Stripe",
    "REST APIs",
    "AWS",
    "Docker",
    "Full Stack Developer",
    "Backend Development",
    "Database Design",
    "Third-party Integrations",
    "Production Systems",
    "Scalable Architecture",
  ],
  authors: [{ name: "Hem" }],
  creator: "Hem",
  publisher: "Hem",
  metadataBase: new URL("https://hem-portfolio.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hem-portfolio.vercel.app",
    siteName: "Hem - Portfolio",
    title: "Hem - Portfolio | Backend Engineer",
    description:
      "Backend-focused software engineer with 2+ years of experience building production-grade systems. Specializing in APIs, payment processing, third-party integrations, and scalable architectures.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hem - Backend Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hem - Portfolio | Backend Engineer",
    description:
      "Backend-focused software engineer specializing in APIs, payment systems, and scalable architectures.",
    creator: "@hemk_dev",
    images: ["/og-image.png"],
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
  verification: {
    // Add your verification codes here if you have them
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
