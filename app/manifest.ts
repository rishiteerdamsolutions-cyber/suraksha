import type { MetadataRoute } from "next";
import logoPng from "@/logo.png";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Suraksha Hospital Karimnagar",
    short_name: "Suraksha",
    description: "Advanced orthopedic care in Karimnagar.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0B3C5D",
    icons: [
      {
        src: logoPng.src,
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: logoPng.src,
        sizes: "512x512",
        type: "image/png"
      }
    ]
  };
}
