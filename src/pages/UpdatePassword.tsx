import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, Lock, CheckCircle } from "lucide-react";

const UpdatePassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    // Handle the password recovery event from the URL
    const handleRecovery = async () => {
      // Listen for auth state change from recovery link
      const { data: { subscription } } = supabase.auth.onAuthStateChange(
        async (event, session) => {
          console.log("Auth event:", event, session);
          if (event === "PASSWORD_RECOVERY" || (event === "SIGNED_IN" && session)) {
            setIsReady(true);
          } else if (event === "SIGNED_OUT" || !session) {
            // Only redirect if we never got a valid session
            if (!isReady) {
              toast({
                title: "Lien invalide ou expiré",
                description: "Veuillez demander un nouveau lien de réinitialisation.",
                variant: "destructive",
              });
              navigate("/admin/reset-password");
            }
          }
        }
      );

      // Also check current session (user might have clicked link and session exists)
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        setIsReady(true);
      }

      return () => {
        subscription.unsubscribe();
      };
    };

    handleRecovery();
  }, [navigate, toast, isReady]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast({
        title: "Erreur",
        description: "Les mots de passe ne correspondent pas.",
        variant: "destructive",
      });
      return;
    }

    if (password.length < 6) {
      toast({
        title: "Erreur",
        description: "Le mot de passe doit contenir au moins 6 caractères.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const { error } = await supabase.auth.updateUser({
      password: password,
    });

    if (error) {
      console.error("Password update error:", error);
      let errorMessage = error.message;
      
      // Translate common error messages
      if (error.message.includes("should be different")) {
        errorMessage = "Le nouveau mot de passe doit être différent de l'ancien.";
      } else if (error.message.includes("weak")) {
        errorMessage = "Le mot de passe est trop faible. Utilisez au moins 6 caractères.";
      } else if (error.message.includes("session")) {
        errorMessage = "Session expirée. Veuillez demander un nouveau lien de réinitialisation.";
      }
      
      toast({
        title: "Erreur",
        description: errorMessage,
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }
    
    setIsSuccess(true);
    toast({
      title: "Mot de passe mis à jour",
      description: "Votre mot de passe a été modifié avec succès.",
    });
    setIsSubmitting(false);
    
    // Redirect to login after 3 seconds
    setTimeout(() => {
      navigate("/admin/login");
    }, 3000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-sage/20 px-4">
        <div className="w-full max-w-md">
          <div className="bg-card border border-border rounded-lg shadow-soft p-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h1 className="text-2xl font-heading font-semibold text-foreground mb-2">
                Mot de passe mis à jour !
              </h1>
              <p className="text-muted-foreground">
                Redirection vers la page de connexion...
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!isReady) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-sage/20 px-4">
        <div className="w-full max-w-md">
          <div className="bg-card border border-border rounded-lg shadow-soft p-8">
            <div className="text-center">
              <Loader2 className="w-8 h-8 animate-spin text-primary mx-auto mb-4" />
              <p className="text-muted-foreground">
                Vérification du lien...
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-sage/20 px-4">
      <div className="w-full max-w-md">
        <div className="bg-card border border-border rounded-lg shadow-soft p-8">
          <div className="text-center mb-8">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Lock className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-2xl font-heading font-semibold text-foreground">
              Nouveau mot de passe
            </h1>
            <p className="text-muted-foreground mt-2">
              Choisissez un nouveau mot de passe sécurisé
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="password">Nouveau mot de passe</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                minLength={6}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                required
                minLength={6}
              />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Mise à jour...
                </>
              ) : (
                <>
                  <Lock className="mr-2 h-4 w-4" />
                  Mettre à jour le mot de passe
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;
