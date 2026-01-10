import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

export type FormType = "afrique" | "europe" | "premium";

// Validation schemas
const baseSchema = z.object({
  company_name: z.string().min(1, "Nom d'entreprise requis").max(200),
  contact_name: z.string().min(1, "Nom du contact requis").max(200),
  email: z.string().email("Email invalide").max(255),
  products: z.string().min(1, "Produit requis").max(500),
  phone: z.string().max(50).nullable().optional(),
  country: z.string().max(100).nullable().optional(),
  volume: z.string().max(100).nullable().optional(),
  message: z.string().max(2000).nullable().optional(),
});

const confirmationMessages: Record<FormType, string> = {
  afrique: "Votre demande a bien été reçue. Seuls les projets compatibles seront contactés.",
  europe: "Les demandes compatibles sont traitées sous 48 à 72 heures.",
  premium: "Les demandes stratégiques sont étudiées individuellement."
};

export interface FormData {
  company_name: string;
  contact_name: string;
  email: string;
  products: string;
  phone?: string | null;
  country?: string | null;
  volume?: string | null;
  message?: string | null;
}

export const useFormSubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const submitForm = async (formType: FormType, data: FormData): Promise<boolean> => {
    setIsSubmitting(true);

    try {
      // Validate data
      const validatedData = baseSchema.parse({
        ...data,
        phone: data.phone || null,
        country: data.country || null,
        volume: data.volume || null,
        message: data.message || null,
      });

      // Insert into database
      const { error } = await supabase.from("form_submissions").insert({
        form_type: formType,
        company_name: validatedData.company_name,
        contact_name: validatedData.contact_name,
        email: validatedData.email,
        products: validatedData.products,
        phone: validatedData.phone,
        country: validatedData.country,
        volume: validatedData.volume,
        message: validatedData.message,
      });

      if (error) {
        console.error("Form submission error:", error);
        toast({
          title: "Erreur",
          description: "Une erreur est survenue. Veuillez réessayer.",
          variant: "destructive",
        });
        return false;
      }

      toast({
        title: "Demande envoyée",
        description: confirmationMessages[formType],
      });

      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const firstError = error.errors[0];
        toast({
          title: "Erreur de validation",
          description: firstError.message,
          variant: "destructive",
        });
      } else {
        console.error("Unexpected error:", error);
        toast({
          title: "Erreur",
          description: "Une erreur inattendue est survenue.",
          variant: "destructive",
        });
      }
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return { submitForm, isSubmitting };
};
