// Everything on the page that depends on a real asset or destination lives
// here, so going live is one edit.

export const SITE_URL = "https://repchek.fit";

// The repchek app (separate deployment, see ../repchek).
export const APP_URL = "https://app.repchek.fit";

// Leave empty until a premium checkout exists. The page shows "Coming soon"
// instead of a purchase button while this is empty.
export const PREMIUM_URL = "";

// Real demo footage. Files go in /public (e.g. "/demo.mp4"). Captions: .vtt
export const DEMO = {
  video:
    "https://res.cloudinary.com/kwishi/video/upload/v1793171715/repchek-barbell-row-set1_vbf8sj.mp4",
  poster: "",
  captions: "",
};

export const INSTAGRAM_URL = "https://www.instagram.com/repchek.fit/";
export const TIKTOK_URL = "https://www.tiktok.com/@repchek.fit";
export const CONTACT_EMAIL = "hello@repchek.fit";

// Optional real footage for the "Your workout. Your space." tiles, in tile
// order. Leave a src empty to hide that slot. Files go in /public.
// whole: on mobile, show the full image instead of cropping it to fit.
export const USE_MEDIA: { src: string; alt: string; whole?: boolean }[] = [
  {
    src: "https://images.openai.com/static-rsc-4/NL-1T9yiEgF6U34xkMUxuymkBzOcFOqCDeZkZ3KGQKh_n6jzdQQQBCvsYiL3J5dgzQXLrYzprrpjSEm-oLCtQKdMrQ6FZtRRzNN-9PeCgrRtHfPNanQ-b1RM0h3KUnnLjsMVejUPKuvPzC7gVtZVvnHoLatrVtT2tiH2CNNIZo9vgSQuduvu9u-DZR9UvHnG?purpose=fullsize",
    alt: "home workout",
  },
  {
    src: "https://res.cloudinary.com/kwishi/image/upload/v1793174628/IMG_7634_kumdrr.jpg",
    alt: "repchek poster",
    whole: true,
  },
  {
    src: "https://res.cloudinary.com/kwishi/image/upload/v1793173965/IMG_7710_iminou.png",
    alt: "mountain climbers",
  },
];

// Optional "See repchek in action" section. Hidden while video is empty.
export const LIFTER = {
  video:
    "https://res.cloudinary.com/kwishi/video/upload/v1793172182/ssstwitter.com_1793172164749_o5rjqx.mp4",
  poster: "",
  captions: "",
  name: "",
  quote:
    "I usually swing a lot when working my back and have no idea with whether to look up or down but Repcheck helped me improve my form by counting the good reps and the voice narration",
};
