// app/layout.tsx or app/layout.js

import "./globals.css";
import { Inter } from "next/font/google";
import Navigation from "../components/Navbar";
import CookieConsentWrapper from "@/components/CookieConsentWrapper";

const inter = Inter({ subsets: ["latin"] });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://intelliumtech.ai";
const siteName = "Intellium";
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/about_us_logo.png`,
  description:
    "Intellium is an enterprise LLM consulting and engineering firm helping organisations operationalise generative AI with strategy, build, and integration services.",
  sameAs: [
    "https://www.linkedin.com/company/intelliumtech",
    "https://x.com/intelliumtech",
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "LLM Consulting & Engineering by Intellium",
  url: siteUrl,
  description:
    "End-to-end large language model strategy, engineering, integration, and optimisation services for enterprises adopting generative AI.",
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Global",
  },
  serviceType: ["LLM consulting", "LLM engineering", "LLM integration", "generative AI strategy"],
  provider: {
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do you identify the right LLM use cases for my organisation?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "We begin with a discovery sprint that maps business goals, data readiness, compliance requirements, and existing workflows to prioritise high-impact, low-risk opportunities for LLM adoption.",
      },
    },
    {
      "@type": "Question",
      name: "Which LLM platforms and architectures does Intellium support?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Our engineers design and operate solutions across OpenAI, Anthropic, Google Gemini, open-source models, and custom fine-tunes—deploying the optimal stack for your security, latency, and cost objectives.",
      },
    },
    {
      "@type": "Question",
      name: "How do you ensure LLM solutions stay compliant and secure?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "We implement privacy-aware data pipelines, red-teaming, human-in-the-loop reviews, and quantitative safety evaluations to meet regulatory standards across finance, healthcare, and other sensitive domains.",
      },
    },
    {
      "@type": "Question",
      name: "Can you integrate LLM applications with my existing systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. Intellium builds connectors for CRMs, ERPs, data warehouses, and custom APIs so your LLM experiences work seamlessly within existing enterprise workflows.",
      },
    },
    {
      "@type": "Question",
      name: "What does ongoing optimisation look like after launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "We provide continuous monitoring, evaluation dashboards, and iterative fine-tuning to improve accuracy, reduce hallucinations, and manage infrastructure spend as adoption scales.",
      },
    },
  ],
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | LLM Consulting & Engineering Services`,
    template: `%s | ${siteName}`,
  },
  description:
    "Intellium helps leadership teams plan, build, and launch enterprise-grade LLM solutions with strategy, engineering, and integration services tailored to regulated industries.",
  keywords: [
    "LLM consulting",
    "LLM engineering services",
    "LLM integration partner",
    "enterprise AI consulting",
    "generative AI strategy",
    "Intellium",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName,
    url: siteUrl,
    title: `${siteName} | LLM Consulting & Engineering Services`,
    description:
      "Engage Intellium’s consultants to architect, build, and integrate production LLM systems, from discovery roadmaps to post-launch optimization.",
    images: [
      {
        url: "/about_us_logo.png",
        width: 1200,
        height: 630,
        alt: "Intellium LLM consulting and engineering services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | LLM Consulting & Engineering Services`,
    description:
      "LLM consultants and engineers delivering architecture, integration, and optimization for enterprises ready to scale generative AI.",
    images: ["/about_us_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.className} inter-var bg-default-900 from:left to-right `}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        {/* Gradients */}
        <div className="bg-gradient-overlay top-0">
          <div className="blur-circle" />
        </div>
        <div className="bg-gradient-overlay top-0 right-0">
          <div className="blur-circle" />
        </div>
        <div className="bg-gradient-overlay inset-0 flex items-center justify-center">
          <div className="blur-circle" />
        </div>
        <div className="bg-gradient-overlay bottom-0 left-0">
          <div className="blur-circle" />
        </div>
        <div className="bg-gradient-overlay bottom-0 right-0">
          <div className="blur-circle" />
        </div>
        <Navigation />


        {children}

        <footer className="bg-default-950/40 backdrop-blur-3xl ">
          <div className="border-t border-white/10 py-6">
            <div className="container lg:px-20 flex flex-wrap justify-center items-center gap-4 h-full md:justify-between text-center md:text-start">
              <p className="text-xs font-medium text-gray-400">
                {new Date().getFullYear()} © Intellium - <a href="#">All Rights Reserved</a>
              </p>
              <p className="text-xs font-medium text-gray-400">
                <a href="#">Terms Conditions & Policy</a>
              </p>
            </div>
          </div>

        </footer>
         <CookieConsentWrapper />
      </body>
    </html>
  );
}
