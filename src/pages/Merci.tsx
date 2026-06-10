import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CheckCircle2, ClipboardCheck, Users, Mail } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";

type FormType = "afrique" | "europe" | "canada" | "premium";

const confirmationMessages: Record<FormType, string> = {
  afrique:
    "Votre demande a bien été reçue. Seuls les projets compatibles avec nos critères de qualification seront contactés.",
  europe:
    "Votre demande a bien été reçue. Les dossiers conformes sont traités sous 48 à 72 heures ouvrées.",
  canada:
    "Votre demande Canada a été reçue. Les dossiers conformes sont traités sous 48 à 72 heures ouvrées.",
  premium:
    "Votre demande stratégique a été reçue. Chaque dossier premium est étudié individuellement.",
};

const Merci = () => {
  const [searchParams] = useSearchParams();
  const rawType = searchParams.get("type");
  const formType: FormType | null =
    rawType && ["afrique", "europe", "canada", "premium"].includes(rawType)
      ? (rawType as FormType)
      : null;

  const message = formType
    ? confirmationMessages[formType]
    : "Votre demande a bien été reçue. Notre équipe revient vers vous rapidement si votre projet correspond à nos critères de sourcing.";

  useEffect(() => {
    trackEvent("generate_lead", {
      form_type: formType ?? "unknown",
      currency: "EUR",
      value: 0,
    });
  }, [formType]);

  return (
    <Layout>
      <Helmet>
        <title>Merci — Demande reçue | Sarr Trade Link</title>
        <meta
          name="description"
          content="Votre demande de sourcing a bien été reçue. Sarr Trade Link, agent de sourcing export Maroc, revient vers vous sous 48 à 72 heures."
        />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://www.sarrtradelink.com/merci" />
      </Helmet>

      <section className="bg-[#F4EFEA] py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-2xl shadow-elegant p-8 md:p-14 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-[#2F5D50]/10 flex items-center justify-center">
                <CheckCircle2 className="w-12 h-12 text-[#2F5D50]" strokeWidth={2} />
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-[#2F5D50] mb-4">
              Merci, votre demande a bien été reçue
            </h1>

            <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              {message}
            </p>

            <div className="bg-[#F4EFEA] rounded-xl p-6 md:p-8 text-left mb-10">
              <h2 className="text-lg font-semibold text-[#2F5D50] mb-5 text-center">
                Les prochaines étapes
              </h2>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <ClipboardCheck className="w-6 h-6 text-[#2F5D50] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">1. Étude de qualification</p>
                    <p className="text-sm text-muted-foreground">
                      Nous analysons votre projet (volumes, destinations, conformité).
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Users className="w-6 h-6 text-[#2F5D50] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">2. Pré-sélection des fournisseurs</p>
                    <p className="text-sm text-muted-foreground">
                      Identification des producteurs marocains certifiés HACCP / ISO correspondant à votre cahier des charges.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Mail className="w-6 h-6 text-[#2F5D50] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">3. Retour par email</p>
                    <p className="text-sm text-muted-foreground">
                      Si votre dossier est compatible, vous recevez une première réponse sous 48 à 72 heures ouvrées.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild variant="default">
                <Link to="/">Retour à l'accueil</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/services">Voir nos services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Merci;
