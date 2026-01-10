import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { Lock, Mail, ArrowLeft } from "lucide-react";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { signIn, signUp, checkAdminRole } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (isSignUp) {
        await signUp(email, password);
        toast({
          title: "Compte créé",
          description: "Votre compte a été créé. Connectez-vous maintenant.",
        });
        setIsSignUp(false);
      } else {
        const data = await signIn(email, password);
        
        if (data.user) {
          const hasAdminRole = await checkAdminRole(data.user.id);
          
          if (hasAdminRole) {
            toast({
              title: "Connexion réussie",
              description: "Bienvenue dans l'espace administration.",
            });
            navigate("/admin/dashboard");
          } else {
            toast({
              title: "Accès refusé",
              description: "Vous n'avez pas les droits d'administration.",
              variant: "destructive",
            });
          }
        }
      }
    } catch (error: any) {
      toast({
        title: "Erreur",
        description: error.message || "Une erreur est survenue.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container-page py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Retour au site
          </Link>
        </div>
      </header>

      {/* Login Form */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-card border border-border rounded-lg p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-lg bg-primary flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-heading font-semibold text-foreground">
                Espace Administration
              </h1>
              <p className="text-muted-foreground mt-2">
                {isSignUp ? "Créez votre compte administrateur" : "Connectez-vous pour accéder au tableau de bord"}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@example.com"
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Mot de passe</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="pl-10"
                    required
                    minLength={6}
                  />
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Chargement..." : isSignUp ? "Créer le compte" : "Se connecter"}
              </Button>
            </form>

            <div className="mt-6 text-center space-y-2">
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-sm text-primary hover:underline"
              >
                {isSignUp ? "Déjà un compte ? Se connecter" : "Créer un compte"}
              </button>
              {!isSignUp && (
                <div>
                  <Link to="/reset-password" className="text-sm text-muted-foreground hover:text-foreground">
                    Mot de passe oublié ?
                  </Link>
                </div>
              )}
            </div>
          </div>

          <p className="text-center text-xs text-muted-foreground mt-4">
            Accès réservé aux administrateurs autorisés
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
