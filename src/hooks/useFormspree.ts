import { useState } from "react";

// Configuration Formspree - Remplacez ces IDs par vos propres IDs de formulaires
// Créez vos formulaires sur https://formspree.io/
export const FORMSPREE_ENDPOINTS = {
  afrique: "https://formspree.io/f/YOUR_AFRIQUE_FORM_ID", // Remplacer YOUR_AFRIQUE_FORM_ID
  europe: "https://formspree.io/f/YOUR_EUROPE_FORM_ID",   // Remplacer YOUR_EUROPE_FORM_ID
  premium: "https://formspree.io/f/YOUR_PREMIUM_FORM_ID", // Remplacer YOUR_PREMIUM_FORM_ID
} as const;

type FormType = keyof typeof FORMSPREE_ENDPOINTS;

interface UseFormspreeReturn {
  submit: (formType: FormType, data: Record<string, unknown>) => Promise<boolean>;
  isSubmitting: boolean;
  error: string | null;
}

export function useFormspree(): UseFormspreeReturn {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (formType: FormType, data: Record<string, unknown>): Promise<boolean> => {
    setIsSubmitting(true);
    setError(null);

    try {
      const endpoint = FORMSPREE_ENDPOINTS[formType];
      
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          ...data,
          _formType: formType,
          _submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Erreur lors de l'envoi du formulaire");
      }

      return true;
    } catch (err) {
      const message = err instanceof Error ? err.message : "Une erreur est survenue";
      setError(message);
      console.error("Formspree submission error:", err);
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return { submit, isSubmitting, error };
}
