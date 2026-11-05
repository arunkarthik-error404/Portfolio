import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { site, person } from "@/lib/content";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { Preloader } from "@/components/ui/Preloader";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import "./globals.css";

// Runs before paint: gates the preloader behind JS availability and
// skips it on repeat visits within the session.
const bootScript = `document.documentElement.classList.add('js');try{if(sessionStorage.getItem('preloader-shown'))document.documentElement.classList.add('skip-preloader')}catch(e){}`;

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "x-default": "/",
    },
  },
  authors: [{ name: person.name, url: site.url }],
  creator: person.name,
  publisher: person.name,
  category: "technology",
  classification: "Portfolio",
  keywords: [
    "Arun Karthik BT",
    "Arun Karthik",
    "Arun Karthik AI Engineer",
    "AI Engineer",
    "AI Software Engineer",
    "LLM Engineer",
    "Agentic AI",
    "Multi-Agent Systems",
    "LangGraph",
    "MCP",
    "FastMCP",
    "RAG",
    "Hybrid RAG",
    "Gemini",
    "Vertex AI",
    "LiveKit",
    "Voice AI",
    "FastAPI",
    "PostgreSQL",
    "Qdrant",
    "pgvector",
    "Python",
    "TypeScript",
    "10xScale.ai",
    "AI Engineer Hyderabad",
    "BITS Pilani",
    "Hire AI Engineer",
  ],
  openGraph: {
    type: "profile",
    url: site.url,
    siteName: "Arun Karthik BT - AI Engineer",
    title: site.title,
    description: site.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
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
  other: {
    "geo.region": "IN-TG",
    "geo.placename": "Hyderabad, Telangana, India",
    "DC.title": site.title,
    "DC.creator": person.name,
    "DC.description": site.description,
    "DC.subject":
      "AI Engineering, LLM Agents, RAG, Voice AI, FastAPI",
    "DC.language": "en",
    "DC.coverage": "India, Worldwide",
    "rating": "General",
    "revisit-after": "7 days",
  },
};

export const viewport: Viewport = {
  themeColor: "#050506",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bricolage.variable} ${instrument.variable} ${jetbrains.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-5 focus:py-2.5 focus:font-mono focus:text-xs focus:text-accent-ink"
        >
          Skip to content
        </a>
        <Preloader />
        <SmoothScroll />
        {children}
        <CustomCursor />
        <GrainOverlay />
        <ScrollProgress />
        {site.gaId ? <GoogleAnalytics gaId={site.gaId} /> : null}
      </body>
    </html>
  );
}
