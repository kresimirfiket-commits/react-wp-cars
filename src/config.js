// Settings read from react-wp-cars/.env
// After changing .env, restart `npm start` — values are read only when it starts.

const FALLBACK_WP_API = "https://kmf-plavi.hr/backend/wp-json";

const envWpApi = process.env.REACT_APP_WP_API;

if (!envWpApi) {
  console.warn(`REACT_APP_WP_API is not set — using fallback ${FALLBACK_WP_API}. Check react-wp-cars/.env and restart npm start.`);
}

// Base URL of the WordPress REST API, without a trailing slash,
// so `${WP_API}/wp/v2/posts` never becomes ".../wp-json//wp/v2/posts"
export const WP_API = (envWpApi || FALLBACK_WP_API).replace(/\/+$/, "");


// true only when react-wp-cars/.env.development.local contains REACT_APP_FAKE_API=true.
// That file is used by `npm start` only, never by `npm run build`,
// so the production site always talks to the real WordPress API.
export const USE_FAKE_API = process.env.REACT_APP_FAKE_API === "true";