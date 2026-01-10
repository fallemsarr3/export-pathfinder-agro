import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface FormSubmissionPayload {
  type: "INSERT";
  table: string;
  record: {
    id: string;
    form_type: string;
    company_name: string;
    contact_name: string;
    email: string;
    phone?: string;
    country?: string;
    products: string;
    volume?: string;
    message?: string;
    created_at: string;
  };
}

const formTypeLabels: Record<string, string> = {
  afrique: "🌍 Afrique",
  europe: "🇪🇺 Europe",
  premium: "⭐ Premium",
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured");
      throw new Error("RESEND_API_KEY not configured");
    }

    const payload: FormSubmissionPayload = await req.json();
    console.log("Received payload:", JSON.stringify(payload, null, 2));

    const record = payload.record;
    const formTypeLabel = formTypeLabels[record.form_type] || record.form_type;

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #333; border-bottom: 2px solid #ddd; padding-bottom: 10px;">
          ${formTypeLabel} - Nouvelle demande de sourcing
        </h1>
        
        <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #555; margin-top: 0;">Informations de contact</h2>
          <p><strong>Entreprise :</strong> ${record.company_name}</p>
          <p><strong>Contact :</strong> ${record.contact_name}</p>
          <p><strong>Email :</strong> <a href="mailto:${record.email}">${record.email}</a></p>
          ${record.phone ? `<p><strong>Téléphone :</strong> ${record.phone}</p>` : ""}
          ${record.country ? `<p><strong>Pays :</strong> ${record.country}</p>` : ""}
        </div>
        
        <div style="background: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #555; margin-top: 0;">Détails de la demande</h2>
          <p><strong>Produits recherchés :</strong></p>
          <p style="background: #f0f0f0; padding: 10px; border-radius: 4px;">${record.products}</p>
          ${record.volume ? `<p><strong>Volumes estimés :</strong> ${record.volume}</p>` : ""}
          ${record.message ? `
            <p><strong>Message :</strong></p>
            <p style="background: #f0f0f0; padding: 10px; border-radius: 4px; white-space: pre-wrap;">${record.message}</p>
          ` : ""}
        </div>
        
        <div style="color: #888; font-size: 12px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
          <p>Date de soumission : ${new Date(record.created_at).toLocaleString("fr-FR", { timeZone: "Europe/Paris" })}</p>
          <p>ID de la demande : ${record.id}</p>
        </div>
      </div>
    `;

    // Send email via Resend
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Epices du Terroir <notifications@resend.dev>",
        to: ["epices.du.terroir@gmail.com"],
        subject: `${formTypeLabel} - Nouvelle demande de ${record.company_name}`,
        html: emailHtml,
        reply_to: record.email,
      }),
    });

    const resData = await res.json();
    console.log("Resend response:", JSON.stringify(resData, null, 2));

    if (!res.ok) {
      throw new Error(`Resend API error: ${JSON.stringify(resData)}`);
    }

    return new Response(JSON.stringify({ success: true, data: resData }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("Error sending notification email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
};

serve(handler);
