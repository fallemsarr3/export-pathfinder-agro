import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useFormspree } from "@/hooks/useFormspree";
import { MapPin, Building2, Crown, Loader2 } from "lucide-react";

type FormType = "afrique" | "europe" | "premium";

const Contact = () => {
  const [searchParams] = useSearchParams();
  const [activeForm, setActiveForm] = useState<FormType>("afrique");
  const { toast } = useToast();
  const { submit, isSubmitting, error } = useFormspree();

  useEffect(() => {
    const type = searchParams.get("type") as FormType;
    if (type && ["afrique", "europe", "premium"].includes(type)) {
      setActiveForm(type);
    }
  }, [searchParams]);

  const successMessages: Record<FormType, string> = {
    afrique: "Votre demande a bien été reçue. Seuls les projets compatibles seront contactés.",
    europe: "Les demandes compatibles sont traitées sous 48 à 72 heures.",
    premium: "Les demandes stratégiques sont étudiées individuellement."
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, formType: FormType) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: Record<string, unknown> = {};
    
    formData.forEach((value, key) => {
      data[key] = value;
    });

    const success = await submit(formType, data);
    
    if (success) {
      toast({
        title: "Demande envoyée",
        description: successMessages[formType],
      });
      e.currentTarget.reset();
    } else {
      toast({
        title: "Erreur",
        description: error || "Une erreur est survenue lors de l'envoi.",
        variant: "destructive",
      });
    }
  };

  const formTabs = [
    { id: "afrique" as FormType, label: "Afrique de l'Ouest", icon: MapPin },
    { id: "europe" as FormType, label: "Europe", icon: Building2 },
    { id: "premium" as FormType, label: "Premium", icon: Crown },
  ];

  return (
    <Layout>
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
                      Formulaire pour importateurs basés au Sénégal, Côte d'Ivoire et Afrique de l'Ouest.
                    </p>
                  </div>

                  <form onSubmit={(e) => handleSubmit(e, "afrique")} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="af-entreprise">Nom de l'entreprise *</Label>
                        <Input id="af-entreprise" name="entreprise" required placeholder="Votre entreprise" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="af-pays">Pays *</Label>
                        <Input id="af-pays" name="pays" required placeholder="Ex: Sénégal" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="af-nom">Nom et fonction *</Label>
                        <Input id="af-nom" name="nom_fonction" required placeholder="Votre nom et fonction" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="af-email">Email professionnel *</Label>
                        <Input id="af-email" name="email" type="email" required placeholder="email@entreprise.com" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="af-telephone">Téléphone / WhatsApp *</Label>
                      <Input id="af-telephone" name="telephone" required placeholder="+221..." />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="af-produit">Produit recherché *</Label>
                        <Input id="af-produit" name="produit" required placeholder="Ex: Paprika, Huile d'olive" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="af-volume">Volume estimé *</Label>
                        <Input id="af-volume" name="volume" required placeholder="Ex: 5 tonnes/mois" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="af-conditionnement">Conditionnement souhaité *</Label>
                        <Input id="af-conditionnement" name="conditionnement" required placeholder="Ex: Sacs 25kg" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="af-frequence">Fréquence d'achat *</Label>
                        <Input id="af-frequence" name="frequence" required placeholder="Ex: Mensuel" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="af-delai">Délai souhaité *</Label>
                      <Input id="af-delai" name="delai" required placeholder="Ex: Sous 30 jours" />
                    </div>

                    <div className="flex items-start space-x-3 p-4 bg-sage/30 rounded-lg">
                      <Checkbox id="af-forfait" name="accepte_forfait" required />
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
                        id="af-message"
                        name="message"
                        rows={4}
                        placeholder="Informations supplémentaires sur votre projet..."
                      />
                    </div>

                    <Button type="submit" variant="afrique" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Envoi en cours...
                        </>
                      ) : (
                        "Envoyer la demande Afrique"
                      )}
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
                      Formulaire pour importateurs européens avec exigences de conformité UE.
                    </p>
                  </div>

                  <form onSubmit={(e) => handleSubmit(e, "europe")} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="eu-entreprise">Nom de l'entreprise *</Label>
                        <Input id="eu-entreprise" name="entreprise" required placeholder="Votre entreprise" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="eu-pays">Pays *</Label>
                        <Input id="eu-pays" name="pays" required placeholder="Ex: France" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="eu-site">Site web de l'entreprise *</Label>
                      <Input id="eu-site" name="site_web" type="url" required placeholder="https://www.votreentreprise.com" />
                      <p className="text-xs text-muted-foreground">
                        Un site web professionnel est requis pour les demandes Europe.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="eu-nom">Nom et fonction *</Label>
                        <Input id="eu-nom" name="nom_fonction" required placeholder="Votre nom et fonction" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="eu-email">Email professionnel *</Label>
                        <Input id="eu-email" name="email" type="email" required placeholder="email@entreprise.com" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="eu-produit">Produit recherché *</Label>
                        <Input id="eu-produit" name="produit" required placeholder="Ex: Huile d'olive vrac" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="eu-volume">Volume annuel estimé *</Label>
                        <Input id="eu-volume" name="volume_annuel" required placeholder="Ex: 50 tonnes/an" />
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
                        ].map((doc, i) => (
                          <div key={doc} className="flex items-center space-x-2">
                            <Checkbox id={`eu-doc-${i}`} name={`document_${i}`} value={doc} />
                            <Label htmlFor={`eu-doc-${i}`} className="text-sm font-normal cursor-pointer">
                              {doc}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-4 bg-sage/30 rounded-lg">
                      <Checkbox id="eu-forfait" name="accepte_forfait" required />
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
                        id="eu-message"
                        name="message"
                        rows={4}
                        placeholder="Précisions sur vos exigences de conformité..."
                      />
                    </div>

                    <Button type="submit" variant="europe" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Envoi en cours...
                        </>
                      ) : (
                        "Envoyer la demande Europe"
                      )}
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
                      Formulaire pour gros importateurs, industriels et distributeurs structurés.
                    </p>
                  </div>

                  <form onSubmit={(e) => handleSubmit(e, "premium")} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="pr-entreprise">Nom de l'entreprise *</Label>
                        <Input id="pr-entreprise" name="entreprise" required placeholder="Votre entreprise" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="pr-pays">Pays *</Label>
                        <Input id="pr-pays" name="pays" required placeholder="Pays du siège" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="pr-site">Site web *</Label>
                        <Input id="pr-site" name="site_web" type="url" required placeholder="https://www.votreentreprise.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="pr-taille">Taille de l'entreprise *</Label>
                        <Input id="pr-taille" name="taille_entreprise" required placeholder="Ex: 50-200 employés" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="pr-fonction">Fonction du contact *</Label>
                        <Input id="pr-fonction" name="fonction" required placeholder="Ex: Directeur des achats" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="pr-email">Email professionnel *</Label>
                        <Input id="pr-email" name="email" type="email" required placeholder="email@entreprise.com" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="pr-objectif">Objectif stratégique *</Label>
                      <Textarea
                        id="pr-objectif"
                        name="objectif"
                        rows={3}
                        required
                        placeholder="Décrivez l'objectif de cette mission de sourcing..."
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="pr-volume">Volume annuel *</Label>
                        <Input id="pr-volume" name="volume_annuel" required placeholder="Ex: 200+ tonnes/an" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="pr-mode">Mode de collaboration souhaité *</Label>
                        <Input id="pr-mode" name="mode_collaboration" required placeholder="Ex: Mission ponctuelle, Partenariat" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="pr-budget">Budget estimé pour la mission *</Label>
                      <Input id="pr-budget" name="budget" required placeholder="Ex: 5 000 - 10 000 EUR" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="pr-message">Message stratégique *</Label>
                      <Textarea
                        id="pr-message"
                        name="message"
                        rows={5}
                        required
                        placeholder="Contexte détaillé, enjeux, contraintes, attentes spécifiques..."
                      />
                    </div>

                    <div className="p-4 bg-spice/10 rounded-lg border border-spice/20">
                      <p className="text-sm text-foreground">
                        <strong>Note :</strong> Les missions premium font l'objet d'un entretien préalable. Nous vous contacterons pour un échange avant toute proposition.
                      </p>
                    </div>

                    <Button type="submit" variant="premium" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Envoi en cours...
                        </>
                      ) : (
                        "Envoyer la demande Premium"
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="section-padding bg-sage/30">
        <div className="container-page">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-paprika/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-paprika" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  Afrique de l'Ouest
                </h3>
                <p className="text-muted-foreground text-sm">
                  Sénégal, Côte d'Ivoire et région ouest-africaine
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  Europe
                </h3>
                <p className="text-muted-foreground text-sm">
                  France, Belgique et importateurs européens structurés
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-spice/10 flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-6 h-6 text-spice" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  Premium
                </h3>
                <p className="text-muted-foreground text-sm">
                  Gros importateurs, industriels et distributeurs
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