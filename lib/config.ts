// Everything on the page that depends on a real asset or destination lives
// here, so going live is one edit.

export const SITE_URL = "https://repchek.fit";

// The repchek app (separate deployment, see ../repchek).
export const APP_URL = "https://app.repchek.fit";

// Leave empty until a premium checkout exists. The page shows "Coming soon"
// instead of a purchase button while this is empty.
export const PREMIUM_URL = "";

// Real demo footage. Files go in /public (e.g. "/demo.mp4"). Captions: .vtt
export const DEMO = { video: "", poster: "", captions: "" };

export const INSTAGRAM_URL = "https://www.instagram.com/repchek.fit/";
export const TIKTOK_URL = "https://www.tiktok.com/@repchek.fit";
export const CONTACT_EMAIL = "hello@repchek.fit";

// Optional real footage for the "Your workout. Your space." tiles, in tile
// order. Leave a src empty to hide that slot. Files go in /public.
export const USE_MEDIA: { src: string; alt: string }[] = [
  { src: "", alt: "" },
  { src: "", alt: "" },
  { src: "", alt: "" },
];

// Optional "See repchek in action" section. Hidden while video is empty.
export const LIFTER = { video: "", poster: "", captions: "", name: "", quote: "" };
