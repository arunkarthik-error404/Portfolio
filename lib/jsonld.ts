import { faqs, person, projects, site } from "./content";

/**
 * Structured-data builders recreating and expanding the JSON-LD graph
 * (Person, WebSite, ProfilePage, BreadcrumbList, Organization,
 * ProfessionalService, FAQPage, ItemList / SoftwareApplication) fed from lib/content.ts.
 */

const PERSON_ID = `${site.url}/#person`;
const WEBSITE_ID = `${site.url}/#website`;
const WEBPAGE_ID = `${site.url}/#webpage`;
const IMAGE_URL = `${site.url}${person.portrait}`;

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: person.name,
    givenName: "Arun Karthik",
    familyName: "BT",
    alternateName: ["Arun Karthik", "Arun Karthik BT", "Arun Karthik AI Engineer"],
    jobTitle: person.role,
    description:
      "Arun Karthik BT is an AI Engineer building production LLM systems: multi-agent orchestration, RAG, and real-time voice agents. Currently at 10xScale.ai.",
    url: `${site.url}/`,
    image: { "@type": "ImageObject", url: IMAGE_URL, width: 1254, height: 1254 },
    email: `mailto:${person.email}`,
    telephone: person.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "India",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Birla Institute of Technology and Science, Pilani - Hyderabad Campus",
      sameAs: "https://www.bits-pilani.ac.in/hyderabad/",
    },
    worksFor: {
      "@type": "Organization",
      name: person.company,
      url: person.companyUrl,
    },
    knowsAbout: [
      "Large Language Models",
      "Multi-Agent Systems",
      "Retrieval-Augmented Generation",
      "LangGraph",
      "Model Context Protocol",
      "Gemini / Vertex AI",
      "Voice AI",
      "Python (Programming Language)",
      "FastAPI",
      "PostgreSQL",
      "Vector Databases",
      "Entity Resolution",
      "TypeScript",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: person.role,
      occupationalCategory: "15-1252.00 - Software Developers",
      occupationLocation: [{ "@type": "City", name: person.companyLocation }],
      skills:
        "LangGraph, MCP, RAG, Gemini, Vertex AI, FastAPI, PostgreSQL, Python",
      description:
        "Designs, builds, and deploys LLM agents, retrieval pipelines, and the backends that serve them.",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "professional inquiries",
      email: person.email,
      telephone: person.phone,
      availableLanguage: ["English"],
    },
    sameAs: [person.links.linkedin, `${site.url}/`, person.links.github],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: `${site.url}/`,
    name: "Arun Karthik BT - AI Engineer Portfolio",
    description: "Official portfolio website of Arun Karthik BT, AI Engineer",
    publisher: { "@id": PERSON_ID },
    inLanguage: "en-US",
  };
}

export function profilePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": WEBPAGE_ID,
    url: `${site.url}/`,
    name: site.title,
    description:
      "Portfolio of Arun Karthik BT - AI Engineer specializing in LLM agents, RAG, and voice AI",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": PERSON_ID },
    mainEntity: { "@id": PERSON_ID },
    inLanguage: "en-US",
    dateCreated: "2026-11-01T00:00:00Z",
    datePublished: "2026-11-01T00:00:00Z",
    dateModified: new Date().toISOString(),
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Arun Karthik BT",
    url: `${site.url}/`,
    logo: IMAGE_URL,
  };
}

export function breadcrumbSchema() {
  const crumbs = [
    ["Home", `${site.url}/`],
    ["About Arun", `${site.url}/#about`],
    ["Skills", `${site.url}/#skills`],
    ["Projects", `${site.url}/#work`],
    ["FAQ", `${site.url}/#faq`],
    ["Contact", `${site.url}/#contact`],
  ];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map(([name, item], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item,
    })),
  };
}

export function professionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Arun Karthik BT - AI Engineering Services",
    description:
      "AI engineering services including LLM agents, RAG pipelines, voice AI, and FastAPI backends",
    url: `${site.url}/`,
    telephone: person.phone,
    email: person.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    priceRange: "$$",
    areaServed: "Worldwide",
    serviceType: [
      "LLM Agent Development",
      "RAG Systems",
      "Voice AI",
      "Structured Extraction",
      "FastAPI Backends",
    ],
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function projectsSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Featured Projects by Arun Karthik BT",
    description: "Software engineering projects and applications built by Arun Karthik BT",
    itemListElement: projects.map((p, i) => {
      const item: Record<string, unknown> = {
        "@type": "SoftwareApplication",
        name: p.title,
        description: `${p.problem} ${p.outcome}`,
        applicationCategory: "WebApplication",
        operatingSystem: "All",
        author: { "@id": PERSON_ID },
        url: p.links.live || p.links.repo || site.url,
        keywords: p.tags.join(", "),
      };

      if (p.links.video) {
        item.video = {
          "@type": "VideoObject",
          name: `${p.title} Demonstration`,
          description: `Interactive product and engineering demo of ${p.title} by Arun Karthik BT`,
          thumbnailUrl: `${IMAGE_URL}`,
          contentUrl: p.links.video,
          uploadDate: "2026-03-25T08:00:00+05:30",
        };
      }

      return {
        "@type": "ListItem",
        position: i + 1,
        item,
      };
    }),
  };
}

export function allSchemas() {
  return [
    personSchema(),
    websiteSchema(),
    profilePageSchema(),
    organizationSchema(),
    breadcrumbSchema(),
    professionalServiceSchema(),
    faqSchema(),
    projectsSchema(),
  ];
}
