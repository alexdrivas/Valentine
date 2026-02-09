/**
 * Env validation is not run from here so that `npm run dev` works without
 * .env (Next loads next.config before .env). For Valentine-only use you
 * don't need any env vars. If you add API/auth later, set them in .env.
 */
// Env validation skipped at config load; optional in src/env.js for this app.

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "placehold.co", pathname: "/**" },
    ],
  },
};

export default config;
