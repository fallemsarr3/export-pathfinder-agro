import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

export type FormType = "afrique" | "europe" | "premium";

// Validation schema for form submissions
const formSubmissionSchema = z.object({
  company_name: z.string().trim().min(1, "Nom d'entreprise requis").max(200),
  contact_name: z.string().trim().min(1, "Nom du contact requis").max(200),
  email: z.string().trim().email("Email invalide").max(255),
  phone: z.string().trim().max(50).optional(),
  country: z.string().trim().max(100).optional(),
  products: z.string().trim().min(1, "Produit requis").max(500),
  volume: z.string().trim().max(200).optional(),
  message: z.string().trim().max(2000).optional(),
});

interface UseFormSubmissionReturn {
  submit: (formType: FormType, data: Record<string, unknown>) => Promise<boolean>;
  isSubmitting: boolean;
  error: string | null;
}

export function useFormSubmission(): UseFormSubmissionReturn {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (formType: FormType, data: Record<string, unknown>): Promise<boolean> => {
    setIsSubmitting(true);
    setError(null);

    try {
      console.log("Form submission started:", { formType, data });

      // Map form fields to database columns
      const mappedData = {
        company_name: String(data.entreprise || "").trim(),
        contact_name: String(data.nom_fonction || data.fonction || "").trim(),
        email: String(data.email || "").trim(),
        phone: data.telephone ? String(data.telephone).trim() : null,
        country: data.pays ? String(data.pays).trim() : null,
        products: String(data.produit || data.objectif || "").trim(),
        volume: data.volume || data.volume_annuel ? String(data.volume || data.volume_annuel).trim() : null,
        message: buildMessage(formType, data),
      };

      // Validate data
      const validatedData = formSubmissionSchema.parse(mappedData);

      const { error: insertError } = await supabase
        .from("form_submissions")
        .insert({
          form_type: formType,
          company_name: validatedData.company_name,
          contact_name: validatedData.contact_name,
          email: validatedData.email,
          phone: validatedData.phone || null,
          country: validatedData.country || null,
          products: validatedData.products,
          volume: validatedData.volume || null,
          message: validatedData.message || null,
        });

      if (insertError) {
        throw new Error(insertError.message);
      }

      return true;
    } catch (err) {
      let message = "Une erreur est survenue";
      if (err instanceof z.ZodError) {
        message = err.errors[0]?.message || message;
      } else if (err instanceof Error) {
        message = err.message;
      }
      setError(message);
      console.error("Form submission error:", err);
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return { submit, isSubmitting, error };
}

// Build a comprehensive message from all form-specific fields
function buildMessage(formType: FormType, data: Record<string, unknown>): string {
  const parts: string[] = [];

  if (data.message) {
    parts.push(`Message: ${String(data.message).trim()}`);
  }

  if (formType === "afrique") {
    if (data.conditionnement) parts.push(`Conditionnement: ${data.conditionnement}`);
    if (data.frequence) parts.push(`Fréquence: ${data.frequence}`);
    if (data.delai) parts.push(`Délai: ${data.delai}`);
  }

  if (formType === "europe") {
    if (data.site_web) parts.push(`Site web: ${data.site_web}`);
    // Collect selected documents
    const docs: string[] = [];
    for (let i = 0; i < 6; i++) {
      if (data[`document_${i}`]) {
        docs.push(String(data[`document_${i}`]));
      }
    }
    if (docs.length > 0) {
      parts.push(`Documents requis: ${docs.join(", ")}`);
    }
  }

  if (formType === "premium") {
    if (data.site_web) parts.push(`Site web: ${data.site_web}`);
    if (data.taille_entreprise) parts.push(`Taille entreprise: ${data.taille_entreprise}`);
    if (data.mode_collaboration) parts.push(`Mode collaboration: ${data.mode_collaboration}`);
    if (data.budget) parts.push(`Budget: ${data.budget}`);
    if (data.objectif) parts.push(`Objectif: ${data.objectif}`);
  }

  return parts.join("\n").substring(0, 2000);
}
