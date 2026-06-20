// Centralized analytics helper.
// Fires the same event to BOTH PostHog and Google Analytics 4 (GA4),
// so important conversions show up cleanly in both dashboards.
//
// PostHog autocapture already records every click/pageview automatically;
// use trackEvent() for the key conversions you want named & easy to find
// (WhatsApp, Call, Email, Map directions, form submits, etc.).

import posthog from "posthog-js";

type EventProps = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    // gtag is injected by @next/third-parties GoogleAnalytics
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Track a named conversion/interaction event.
 * @param event  short snake_case name, e.g. "click_whatsapp"
 * @param props  optional extra data, e.g. { location: "hero" }
 */
export function trackEvent(event: string, props: EventProps = {}) {
  if (typeof window === "undefined") return;

  // PostHog
  try {
    posthog.capture(event, props);
  } catch {
    // PostHog not initialized (e.g. key missing) — ignore silently
  }

  // Google Analytics 4
  try {
    window.gtag?.("event", event, props);
  } catch {
    // gtag not loaded — ignore silently
  }
}
