// Single source of truth for the site's public origin.
//
// This drives the canonical URL, Open Graph tags, robots.txt and sitemap.xml.
// It previously lived as three separate copies of a Railway URL that stopped
// resolving after the move to Vercel, which pointed every canonical tag at a
// dead host. Keep it defined here only.
//
// Set NEXT_PUBLIC_SITE_URL to override when a custom domain is attached.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://matangi.vercel.app";
