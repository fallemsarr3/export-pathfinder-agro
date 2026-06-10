// Lightweight GTM dataLayer helpers.
// GTM container (GTM-KCC7DM6M) is loaded in index.html.
// These helpers are no-op when window/dataLayer is unavailable
// (SSR, adblockers, GTM not yet initialized).

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export const trackEvent = (
  event: string,
  params: Record<string, unknown> = {}
): void => {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
};

export const trackPageView = (path: string): void => {
  trackEvent("page_view", { page_path: path });
};
