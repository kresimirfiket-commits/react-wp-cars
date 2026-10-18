import { WP_API, USE_FAKE_API } from "../config";

// Endpoints of the custom WordPress plugin (built in point 2 of the plan)
const BASE = `${WP_API}/fastcars/v1`;

// Error thrown by every function in this file.
// `code` is a short machine-readable reason the page can react to, e.g.:
//   network_error, server_error, rate_limited,
//   invalid_username, invalid_email, consent_required, invalid_token
export class ApiError extends Error {
  constructor(code, message, status) {
    super(message);
    this.name = "ApiError";
    this.code = code;
    this.status = status;
  }
}

// ---- Real requests to WordPress ----

async function post(path, data) {
  let response;

  try {
    response = await fetch(`${BASE}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  } catch {
    // fetch only fails like this when the server can't be reached at all
    // (offline, DNS problem, CORS blocked)
    throw new ApiError("network error", "Could not reach the server.", 0);
  }

  let body = null;
  try {
    body = await response.json();
  } catch {
    // Response wasn't JSON (e.g. an HTML error page from the host) — handled below
  }

  if (!response.ok) {
    throw new ApiError(body?.code || "server error", body?.message || `Request failed with status ${response.status}`, response.status);
  }

  return body;
}

// ---- Fake requests, for building the UI before the plugin exists ----
// Use special words in the email or token to trigger each error case.

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fakePost(path, data) {
  await wait(800); // pretend the network takes a moment
  console.info(" [fake API] ", path, data);

  if (path === "/subscribe") {
    if (data.email.includes("offline")) throw new ApiError("network_error", "Could not reach the server.", 0);
    if (data.email.includes("ratelimit")) throw new ApiError("rate_limited", "Too many attempts.", 429);
    if (data.email.includes("invalid")) throw new ApiError("invalid_email", "This email address is not valid.", 400);
    if (data.email.includes("crash")) throw new ApiError("server_error", "Something went wrong.", 500);
    return { status: "pending" };
  }

  if (data.token === "bad") throw new ApiError("invalid_token", "This link is invalid or has expired.", 400);
  return { status: path === "/confirm" ? "confirmed" : "unsuscribed" };
}

const send = USE_FAKE_API ? fakePost : post;

// ---- Public functions used by the pages ----

export function subscribe({ username, email, consent, website }) {
  return send("/subscribe", { username, email, consent, website });
}

export function confirmSubscription(token) {
    return send("/confirm", {token});
}

export function unsubscribe(token) {
    return send("/unsubscribe", {token});
}