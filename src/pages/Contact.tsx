import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { MapPin, Building2, Crown } from "lucide-react";
import { useFormSubmission, FormType } from "@/hooks/useFormSubmission";

const Contact = () => {
  const [searchParams] = useSearchParams();
  const [activeForm, setActiveForm] = useState<FormType>("afrique");
  const { submitForm, isSubmitting } = useFormSubmission();

  useEffect(() => {
    const type = searchParams.get("type") as FormType;
    if (type && ["afrique", "europe", "premium"].includes(type)) {
      setActiveForm(type);
    }
  }, [searchParams]);

  const handleAfriqueSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const success = await submitForm("afrique", {
      company_name: formData.get("af-entreprise") as string,
      contact_name: formData.get("af-nom") as string,
      email: formData.get("af-email") as string,
      products: formData.get("af-produit") as string,
      phone: formData.get("af-telephone") as string,
      country: formData.get("af-pays") as string,
      volume: formData.get("af-volume") as string,
      message: formData.get("af-message") as string,
    });

    if (success) form.reset();
  };

  const handleEuropeSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const success = await submitForm("europe", {
      company_name: formData.get("eu-entreprise") as string,
      contact_name: formData.get("eu-nom") as string,
      email: formData.get("eu-email") as string,
      products: formData.get("eu-produit") as string,
      country: formData.get("eu-pays") as string,
      volume: formData.get("eu-volume") as string,
      message: formData.get("eu-message") as string,
    });

    if (success) form.reset();
  };

  const handlePremiumSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const success = await submitForm("premium", {
      company_name: formData.get("pr-entreprise") as string,
      contact_name: formData.get("pr-fonction") as string,
      email: formData.get("pr-email") as string,
      products: formData.get("pr-objectif") as string,
      country: formData.get("pr-pays") as string,
      volume: formData.get("pr-volume") as string,
      message: formData.get("pr-message") as string,
    });

    if (success) form.reset();
  };

  const formTabs = [
    { id: "afrique" as FormType, label: "Afrique de l'Ouest", icon: MapPin },
    { id: "europe" as FormType, label: "Europe", icon: Building2 },
    { id: "premium" as FormType, label: "Premium", icon: Crown },
  ];

  return (
    <Layout>
      <Helmet>
        <title>Contact sourcing export Maroc – Demande de sourcing</title>
        <meta name="description" content="Contactez votre agent de sourcing export au Maroc. Formulaires adaptés par zone : Afrique de l'Ouest, Europe, missions Premium." />
        <link rel="canonical" href="https://www.sarrtradelink.com/contact" />
        <meta property="og:title" content="Contact sourcing export Maroc – Demande de sourcing | Sarr Trade Link" />
        <meta property="og:description" content="Contactez votre agent de sourcing export au Maroc. Formulaires adaptés par zone." />
        <meta property="og:url" content="https://www.sarrtradelink.com/contact" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact sourcing export Maroc – Demande de sourcing | Sarr Trade Link" />
        <meta name="twitter:description" content="Contactez votre agent de sourcing export au Maroc. Formulaires adaptés par zone." />
      </Helmet>
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-primary-foreground/10 text-primary-foreground rounded-full text-sm font-medium mb-6">
              Demande de sourcing
            </span>
            <h1 className="text-primary-foreground mb-6">
              Contact sourcing export Maroc
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Sélectionnez le formulaire correspondant à votre zone d'importation. Chaque formulaire est adapté aux exigences spécifiques de votre marché.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-background">
        <div className="container-page">
          <div className="max-w-4xl mx-auto">
            {/* Form Tabs */}
            <div className="flex flex-wrap gap-2 mb-8 p-2 bg-sage/30 rounded-lg">
              {formTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveForm(tab.id)}
                  className={`flex-1 min-w-[200px] flex items-center justify-center gap-2 px-4 py-3 rounded-md font-medium text-sm transition-all ${
                    activeForm === tab.id
                      ? "bg-card text-foreground shadow-soft"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Afrique Form */}
            {activeForm === "afrique" && (
              <div className="bg-card border border-border rounded-lg overflow-hidden">
                <div className="h-2 bg-paprika" />
                <div className="p-8">
                  <div className="mb-8">
                    <h2 className="text-2xl font-heading font-semibold text-foreground mb-2">
                      Demande de sourcing – Afrique de l'Ouest
                    </h2>
                    <p className="text-muted-foreground">
                      Formulaire pour importateurs basés au Sénégal, Côte d'Ivoire et Afrique de l'Ouest. En savoir plus sur <Link to="/services#afrique" className="text-paprika hover:underline">notre service Afrique</Link> et les <Link to="/zones-export#afrique" className="text-paprika hover:underline">spécificités de ce marché</Link>.
                    </p>
                  </div>

                  <form onSubmit={handleAfriqueSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="af-entreprise">Nom de l'entreprise *</Label>
                        <Input name="af-entreprise" id="af-entreprise" required placeholder="Votre entreprise" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="af-pays">Pays *</Label>
                        <Input name="af-pays" id="af-pays" required placeholder="Ex: Sénégal" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="af-nom">Nom et fonction *</Label>
                        <Input name="af-nom" id="af-nom" required placeholder="Votre nom et fonction" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="af-email">Email professionnel *</Label>
                        <Input name="af-email" id="af-email" type="email" required placeholder="email@entreprise.com" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="af-telephone">Téléphone / WhatsApp *</Label>
                      <Input name="af-telephone" id="af-telephone" required placeholder="+221..." />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="af-produit">Produit recherché *</Label>
                        <Input name="af-produit" id="af-produit" required placeholder="Ex: Paprika, Huile d'olive" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="af-volume">Volume estimé *</Label>
                        <Input name="af-volume" id="af-volume" required placeholder="Ex: 5 tonnes/mois" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="af-conditionnement">Conditionnement souhaité *</Label>
                        <Input name="af-conditionnement" id="af-conditionnement" required placeholder="Ex: Sacs 25kg" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="af-frequence">Fréquence d'achat *</Label>
                        <Input name="af-frequence" id="af-frequence" required placeholder="Ex: Mensuel" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="af-delai">Délai souhaité *</Label>
                      <Input name="af-delai" id="af-delai" required placeholder="Ex: Sous 30 jours" />
                    </div>

                    <div className="flex items-start space-x-3 p-4 bg-sage/30 rounded-lg">
                      <Checkbox id="af-forfait" required />
                      <div className="space-y-1">
                        <Label htmlFor="af-forfait" className="font-medium cursor-pointer">
                          J'accepte le principe du forfait de sourcing *
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Un forfait de sourcing est requis avant le démarrage de toute mission.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="af-message">Message complémentaire</Label>
                      <Textarea
                        name="af-message"
                        id="af-message"
                        rows={4}
                        placeholder="Informations supplémentaires sur votre projet..."
                      />
                    </div>

                    <Button type="submit" variant="afrique" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Envoi en cours..." : "Envoyer la demande Afrique"}
                    </Button>
                  </form>
                </div>
              </div>
            )}

            {/* Europe Form */}
            {activeForm === "europe" && (
              <div className="bg-card border border-border rounded-lg overflow-hidden">
                <div className="h-2 bg-primary" />
                <div className="p-8">
                  <div className="mb-8">
                    <h2 className="text-2xl font-heading font-semibold text-foreground mb-2">
                      Demande de sourcing conforme – Europe
                    </h2>
                    <p className="text-muted-foreground">
                      Formulaire pour importateurs européens avec exigences de conformité UE. Consultez <Link to="/services#europe" className="text-primary hover:underline">notre service Europe</Link> et les <Link to="/zones-export#europe" className="text-primary hover:underline">exigences réglementaires</Link>.
                    </p>
                  </div>

                  <form onSubmit={handleEuropeSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="eu-entreprise">Nom de l'entreprise *</Label>
                        <Input name="eu-entreprise" id="eu-entreprise" required placeholder="Votre entreprise" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="eu-pays">Pays *</Label>
                        <Input name="eu-pays" id="eu-pays" required placeholder="Ex: France" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="eu-site">Site web de l'entreprise *</Label>
                      <Input name="eu-site" id="eu-site" type="url" required placeholder="https://www.votreentreprise.com" />
                      <p className="text-xs text-muted-foreground">
                        Un site web professionnel est requis pour les demandes Europe.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="eu-nom">Nom et fonction *</Label>
                        <Input name="eu-nom" id="eu-nom" required placeholder="Votre nom et fonction" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="eu-email">Email professionnel *</Label>
                        <Input name="eu-email" id="eu-email" type="email" required placeholder="email@entreprise.com" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="eu-produit">Produit recherché *</Label>
                        <Input name="eu-produit" id="eu-produit" required placeholder="Ex: Huile d'olive vrac" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="eu-volume">Volume annuel estimé *</Label>
                        <Input name="eu-volume" id="eu-volume" required placeholder="Ex: 50 tonnes/an" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label>Documents requis *</Label>
                      <div className="grid md:grid-cols-2 gap-3">
                        {[
                          "Fiches techniques produit",
                          "Certificats d'analyse",
                          "Certificats d'origine",
                          "Attestations sanitaires",
                          "Certifications bio",
                          "Autres certifications"
                        ].map((doc) => (
                          <div key={doc} className="flex items-center space-x-2">
                            <Checkbox id={`eu-doc-${doc}`} />
                            <Label htmlFor={`eu-doc-${doc}`} className="text-sm font-normal cursor-pointer">
                              {doc}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-4 bg-sage/30 rounded-lg">
                      <Checkbox id="eu-forfait" required />
                      <div className="space-y-1">
                        <Label htmlFor="eu-forfait" className="font-medium cursor-pointer">
                          J'accepte le forfait de sourcing UE *
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Le forfait de sourcing Europe couvre l'analyse de conformité et la documentation technique.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="eu-message">Message complémentaire</Label>
                      <Textarea
                        name="eu-message"
                        id="eu-message"
                        rows={4}
                        placeholder="Précisions sur vos exigences de conformité..."
                      />
                    </div>

                    <Button type="submit" variant="europe" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Envoi en cours..." : "Envoyer la demande Europe"}
                    </Button>
                  </form>
                </div>
              </div>
            )}

            {/* Premium Form */}
            {activeForm === "premium" && (
              <div className="bg-card border border-border rounded-lg overflow-hidden">
                <div className="h-2 bg-spice" />
                <div className="p-8">
                  <div className="mb-8">
                    <h2 className="text-2xl font-heading font-semibold text-foreground mb-2">
                      Mission de sourcing stratégique – Premium
                    </h2>
                    <p className="text-muted-foreground">
                      Formulaire pour gros importateurs, industriels et distributeurs structurés. Découvrez notre <Link to="/services#premium" className="text-spice hover:underline">service Premium</Link> et <Link to="/methode" className="text-spice hover:underline">notre méthodologie</Link>.
                    </p>
                  </div>

                  <form onSubmit={handlePremiumSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="pr-entreprise">Nom de l'entreprise *</Label>
                        <Input name="pr-entreprise" id="pr-entreprise" required placeholder="Votre entreprise" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="pr-pays">Pays *</Label>
                        <Input name="pr-pays" id="pr-pays" required placeholder="Pays du siège" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="pr-site">Site web *</Label>
                        <Input name="pr-site" id="pr-site" type="url" required placeholder="https://www.votreentreprise.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="pr-taille">Taille de l'entreprise *</Label>
                        <Input name="pr-taille" id="pr-taille" required placeholder="Ex: 50-200 employés" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="pr-fonction">Fonction du contact *</Label>
                        <Input name="pr-fonction" id="pr-fonction" required placeholder="Ex: Directeur des achats" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="pr-email">Email professionnel *</Label>
                        <Input name="pr-email" id="pr-email" type="email" required placeholder="email@entreprise.com" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="pr-objectif">Objectif stratégique *</Label>
                      <Textarea
                        name="pr-objectif"
                        id="pr-objectif"
                        rows={3}
                        required
                        placeholder="Décrivez l'objectif de cette mission de sourcing..."
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="pr-volume">Volume annuel *</Label>
                        <Input name="pr-volume" id="pr-volume" required placeholder="Ex: 200+ tonnes/an" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="pr-mode">Mode de collaboration souhaité *</Label>
                        <Input name="pr-mode" id="pr-mode" required placeholder="Ex: Mission ponctuelle, Partenariat" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="pr-budget">Budget estimé pour la mission *</Label>
                      <Input name="pr-budget" id="pr-budget" required placeholder="Ex: 5 000 - 10 000 EUR" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="pr-message">Message stratégique *</Label>
                      <Textarea
                        name="pr-message"
                        id="pr-message"
                        rows={5}
                        required
                        placeholder="Contexte détaillé, enjeux, contraintes, attentes spécifiques..."
                      />
                    </div>

                    <div className="p-4 bg-spice/10 rounded-lg border border-spice/20">
                      <p className="text-sm text-foreground">
                        <strong>Note :</strong> Les missions Premium sont étudiées individuellement. Un premier échange téléphonique ou visio sera proposé pour qualifier précisément votre besoin.
                      </p>
                    </div>

                    <Button type="submit" variant="premium" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Envoi en cours..." : "Envoyer la demande Premium"}
                    </Button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="section-padding bg-muted">
        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-foreground mb-6">
              Pourquoi des formulaires différents ?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Chaque marché a ses propres exigences. Les informations demandées sont adaptées pour qualifier précisément votre besoin et vous proposer un accompagnement sur mesure.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-2 h-2 rounded-full bg-paprika mb-3" />
                <h3 className="font-heading font-semibold text-foreground mb-2">Afrique de l'Ouest</h3>
                <p className="text-muted-foreground text-sm">
                  Focus sur les volumes, la fréquence et les délais de livraison adaptés au marché africain.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-2 h-2 rounded-full bg-primary mb-3" />
                <h3 className="font-heading font-semibold text-foreground mb-2">Europe</h3>
                <p className="text-muted-foreground text-sm">
                  Accent sur la conformité UE, la documentation technique et les certifications requises.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-2 h-2 rounded-full bg-spice mb-3" />
                <h3 className="font-heading font-semibold text-foreground mb-2">Premium</h3>
                <p className="text-muted-foreground text-sm">
                  Approche stratégique pour les gros volumes et les partenariats structurés.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
