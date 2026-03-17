import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  LogOut, 
  Search, 
  RefreshCw, 
  Download, 
  MapPin, 
  Building2, 
  Crown,
  ArrowLeft,
  Mail,
  Phone,
  Calendar
} from "lucide-react";
import type { Database } from "@/integrations/supabase/types";

type FormSubmission = Database["public"]["Tables"]["form_submissions"]["Row"];
type FormType = Database["public"]["Enums"]["form_type"];

const formTypeConfig: Record<FormType, { label: string; icon: typeof MapPin; color: string }> = {
  afrique: { label: "Afrique", icon: MapPin, color: "bg-paprika text-white" },
  europe: { label: "Europe", icon: Building2, color: "bg-primary text-primary-foreground" },
  canada: { label: "Canada", icon: Building2, color: "bg-secondary text-secondary-foreground" },
  premium: { label: "Premium", icon: Crown, color: "bg-spice text-white" },
};

const AdminDashboard = () => {
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
  const [filteredSubmissions, setFilteredSubmissions] = useState<FormSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<FormType | "all">("all");
  const { user, isAdmin, loading: authLoading, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Only redirect if we're sure the user is not an admin
    // Wait for auth to be fully loaded AND isAdmin check to complete
    if (!authLoading) {
      if (!user) {
        navigate("/admin/login");
      } else if (isAdmin) {
        fetchSubmissions();
      }
    }
  }, [user, isAdmin, authLoading, navigate]);

  useEffect(() => {
    let filtered = submissions;

    if (filterType !== "all") {
      filtered = filtered.filter((s) => s.form_type === filterType);
    }

    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (s) =>
          s.company_name.toLowerCase().includes(search) ||
          s.contact_name.toLowerCase().includes(search) ||
          s.email.toLowerCase().includes(search) ||
          s.products.toLowerCase().includes(search) ||
          (s.country?.toLowerCase().includes(search) ?? false)
      );
    }

    setFilteredSubmissions(filtered);
  }, [submissions, filterType, searchTerm]);

  const fetchSubmissions = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("form_submissions")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setSubmissions(data || []);
    } catch (error: any) {
      toast({
        title: "Erreur",
        description: "Impossible de charger les soumissions.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate("/admin/login");
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Erreur lors de la déconnexion.",
        variant: "destructive",
      });
    }
  };

  const exportToCSV = () => {
    const headers = [
      "Date",
      "Type",
      "Entreprise",
      "Contact",
      "Email",
      "Téléphone",
      "Pays",
      "Produits",
      "Volume",
      "Message",
    ];

    const csvData = filteredSubmissions.map((s) => [
      new Date(s.created_at).toLocaleDateString("fr-FR"),
      s.form_type,
      s.company_name,
      s.contact_name,
      s.email,
      s.phone || "",
      s.country || "",
      s.products,
      s.volume || "",
      (s.message || "").replace(/"/g, '""'),
    ]);

    const csv = [
      headers.join(","),
      ...csvData.map((row) => row.map((cell) => `"${cell}"`).join(",")),
    ].join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `leads_${new Date().toISOString().split("T")[0]}.csv`;
    link.click();
  };

  // Show loading while auth is loading or we have a user but haven't confirmed admin status yet
  if (authLoading || loading || (user && !isAdmin && !authLoading)) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="w-8 h-8 text-primary animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Chargement...</p>
        </div>
      </div>
    );
  }

  // Redirect non-admins to login
  if (!user || !isAdmin) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Accès non autorisé</p>
          <Button onClick={() => navigate("/admin/login")}>Retour à la connexion</Button>
        </div>
      </div>
    );
  }

  const stats = {
    total: submissions.length,
    afrique: submissions.filter((s) => s.form_type === "afrique").length,
    europe: submissions.filter((s) => s.form_type === "europe").length,
    premium: submissions.filter((s) => s.form_type === "premium").length,
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card border-b border-border">
        <div className="container-page py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Site
              </Link>
              <div className="h-6 w-px bg-border" />
              <h1 className="font-heading font-semibold text-lg">Tableau de bord</h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground hidden sm:block">
                {user?.email}
              </span>
              <Button variant="outline" size="sm" onClick={handleSignOut}>
                <LogOut className="w-4 h-4 mr-2" />
                Déconnexion
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container-page py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-card border border-border rounded-lg p-4">
            <p className="text-sm text-muted-foreground">Total leads</p>
            <p className="text-3xl font-heading font-bold text-foreground">{stats.total}</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-4">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-paprika" />
              <p className="text-sm text-muted-foreground">Afrique</p>
            </div>
            <p className="text-3xl font-heading font-bold text-foreground">{stats.afrique}</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-4">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <p className="text-sm text-muted-foreground">Europe</p>
            </div>
            <p className="text-3xl font-heading font-bold text-foreground">{stats.europe}</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-4">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-spice" />
              <p className="text-sm text-muted-foreground">Premium</p>
            </div>
            <p className="text-3xl font-heading font-bold text-foreground">{stats.premium}</p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-card border border-border rounded-lg p-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Rechercher par entreprise, contact, email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filterType} onValueChange={(v) => setFilterType(v as FormType | "all")}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Type de formulaire" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les types</SelectItem>
                <SelectItem value="afrique">Afrique</SelectItem>
                <SelectItem value="europe">Europe</SelectItem>
                <SelectItem value="premium">Premium</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" onClick={fetchSubmissions}>
              <RefreshCw className="w-4 h-4 mr-2" />
              Actualiser
            </Button>
            <Button onClick={exportToCSV} disabled={filteredSubmissions.length === 0}>
              <Download className="w-4 h-4 mr-2" />
              Exporter CSV
            </Button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Entreprise</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Email / Tél</TableHead>
                  <TableHead>Produits</TableHead>
                  <TableHead>Volume</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredSubmissions.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-12 text-muted-foreground">
                      {submissions.length === 0
                        ? "Aucune soumission pour le moment"
                        : "Aucun résultat pour cette recherche"}
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredSubmissions.map((submission) => {
                    const config = formTypeConfig[submission.form_type];
                    const Icon = config.icon;

                    return (
                      <TableRow key={submission.id}>
                        <TableCell className="whitespace-nowrap">
                          <div className="flex items-center gap-2 text-sm">
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                            {new Date(submission.created_at).toLocaleDateString("fr-FR")}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={`${config.color} gap-1`}>
                            <Icon className="w-3 h-3" />
                            {config.label}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">{submission.company_name}</p>
                            {submission.country && (
                              <p className="text-xs text-muted-foreground">{submission.country}</p>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>{submission.contact_name}</TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="flex items-center gap-1 text-sm">
                              <Mail className="w-3 h-3 text-muted-foreground" />
                              <a
                                href={`mailto:${submission.email}`}
                                className="text-primary hover:underline"
                              >
                                {submission.email}
                              </a>
                            </div>
                            {submission.phone && (
                              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Phone className="w-3 h-3" />
                                {submission.phone}
                              </div>
                            )}
                          </div>
                        </TableCell>
                        <TableCell className="max-w-[200px] truncate" title={submission.products}>
                          {submission.products}
                        </TableCell>
                        <TableCell className="whitespace-nowrap">
                          {submission.volume || "-"}
                        </TableCell>
                      </TableRow>
                    );
                  })
                )}
              </TableBody>
            </Table>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-4">
          {filteredSubmissions.length} résultat(s) sur {submissions.length}
        </p>
      </main>
    </div>
  );
};

export default AdminDashboard;
