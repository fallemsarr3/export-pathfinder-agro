import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Loader2, LogOut, RefreshCw, MapPin, Building2, Crown } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

interface FormSubmission {
  id: string;
  form_type: "afrique" | "europe" | "premium";
  company_name: string;
  contact_name: string;
  email: string;
  phone: string | null;
  country: string | null;
  products: string;
  volume: string | null;
  message: string | null;
  created_at: string;
}

const formTypeConfig = {
  afrique: { label: "Afrique", icon: MapPin, color: "bg-paprika text-white" },
  europe: { label: "Europe", icon: Building2, color: "bg-primary text-primary-foreground" },
  premium: { label: "Premium", icon: Crown, color: "bg-spice text-white" },
};

const Admin = () => {
  const { user, isAdmin, isLoading: authLoading, signOut } = useAuth();
  const navigate = useNavigate();
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "afrique" | "europe" | "premium">("all");

  useEffect(() => {
    if (!authLoading && (!user || !isAdmin)) {
      navigate("/admin/login");
    }
  }, [user, isAdmin, authLoading, navigate]);

  const fetchSubmissions = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from("form_submissions")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setSubmissions(data as FormSubmission[]);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (user && isAdmin) {
      fetchSubmissions();
    }
  }, [user, isAdmin]);

  const handleSignOut = async () => {
    await signOut();
    navigate("/admin/login");
  };

  const filteredSubmissions = filter === "all" 
    ? submissions 
    : submissions.filter(s => s.form_type === filter);

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user || !isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-sage/20">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-heading font-semibold text-foreground">
            Tableau de bord Admin
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden sm:block">
              {user.email}
            </span>
            <Button variant="outline" size="sm" onClick={handleSignOut}>
              <LogOut className="w-4 h-4 mr-2" />
              Déconnexion
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-card border border-border rounded-lg p-4">
            <p className="text-sm text-muted-foreground">Total</p>
            <p className="text-2xl font-semibold">{submissions.length}</p>
          </div>
          {(["afrique", "europe", "premium"] as const).map(type => (
            <div key={type} className="bg-card border border-border rounded-lg p-4">
              <p className="text-sm text-muted-foreground capitalize">{formTypeConfig[type].label}</p>
              <p className="text-2xl font-semibold">
                {submissions.filter(s => s.form_type === type).length}
              </p>
            </div>
          ))}
        </div>

        {/* Filters and Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex gap-2">
            {(["all", "afrique", "europe", "premium"] as const).map(f => (
              <Button
                key={f}
                variant={filter === f ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(f)}
              >
                {f === "all" ? "Tous" : formTypeConfig[f].label}
              </Button>
            ))}
          </div>
          <Button variant="outline" size="sm" onClick={fetchSubmissions}>
            <RefreshCw className="w-4 h-4 mr-2" />
            Actualiser
          </Button>
        </div>

        {/* Table */}
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : filteredSubmissions.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              Aucune soumission trouvée
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Entreprise</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Pays</TableHead>
                    <TableHead>Produits</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredSubmissions.map((submission) => {
                    const config = formTypeConfig[submission.form_type];
                    return (
                      <TableRow key={submission.id}>
                        <TableCell className="whitespace-nowrap">
                          {format(new Date(submission.created_at), "dd MMM yyyy HH:mm", { locale: fr })}
                        </TableCell>
                        <TableCell>
                          <Badge className={config.color}>
                            {config.label}
                          </Badge>
                        </TableCell>
                        <TableCell className="font-medium">{submission.company_name}</TableCell>
                        <TableCell>{submission.contact_name}</TableCell>
                        <TableCell>
                          <a href={`mailto:${submission.email}`} className="text-primary hover:underline">
                            {submission.email}
                          </a>
                        </TableCell>
                        <TableCell>{submission.country || "-"}</TableCell>
                        <TableCell className="max-w-[200px] truncate">
                          {submission.products}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Admin;
