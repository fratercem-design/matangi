import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Temple of Ma Matangi",
    short_name: "Matangi",
    description:
      "A digital temple dedicated to Ma Matangi — Mahavidya of speech, wisdom, music, creativity, and transformative knowledge.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0f",
    theme_color: "#0a0a0f",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
