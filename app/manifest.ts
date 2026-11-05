import type { MetadataRoute } from "next";
import { person, site } from "@/lib/content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${person.name} — Software Engineer & Python Developer`,
    short_name: person.name,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#050506",
    theme_color: "#050506",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
