import { useEffect, useCallback } from "react";

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

export function useRecaptcha() {
  useEffect(() => {
    // Load reCAPTCHA script if not already loaded
    if (!document.getElementById("recaptcha-script") && RECAPTCHA_SITE_KEY) {
      const script = document.createElement("script");
      script.id = "recaptcha-script";
      script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  const executeRecaptcha = useCallback(async (action: string): Promise<string | null> => {
    if (!RECAPTCHA_SITE_KEY) {
      console.warn("reCAPTCHA site key not configured");
      return null;
    }

    return new Promise((resolve) => {
      if (window.grecaptcha) {
        window.grecaptcha.ready(async () => {
          try {
            const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action });
            resolve(token);
          } catch (error) {
            console.error("reCAPTCHA execution error:", error);
            resolve(null);
          }
        });
      } else {
        // If grecaptcha not loaded yet, wait a bit and retry
        setTimeout(() => {
          if (window.grecaptcha) {
            window.grecaptcha.ready(async () => {
              try {
                const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action });
                resolve(token);
              } catch (error) {
                console.error("reCAPTCHA execution error:", error);
                resolve(null);
              }
            });
          } else {
            console.error("reCAPTCHA not loaded");
            resolve(null);
          }
        }, 1000);
      }
    });
  }, []);

  const verifyToken = useCallback(async (token: string): Promise<boolean> => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/verify-recaptcha`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({ token }),
        }
      );

      const data = await response.json();
      return data.success === true;
    } catch (error) {
      console.error("reCAPTCHA verification error:", error);
      return false;
    }
  }, []);

  return { executeRecaptcha, verifyToken };
}
