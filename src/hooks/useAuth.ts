import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { User, Session } from "@supabase/supabase-js";

interface UseAuthReturn {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
  isAdmin: boolean;
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>;
  signUp: (email: string, password: string) => Promise<{ error: Error | null }>;
  signOut: () => Promise<void>;
}

export function useAuth(): UseAuthReturn {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    let mounted = true;
    let timeoutId: NodeJS.Timeout;

    const checkAdminRole = async (userId: string): Promise<boolean> => {
      try {
        console.log("Checking admin role for:", userId);
        
        // Use the has_role function instead of direct query to avoid RLS issues
        const { data, error } = await supabase.rpc('has_role', {
          _user_id: userId,
          _role: 'admin'
        });
        
        if (error) {
          console.error("Error checking admin role via RPC:", error);
          // Fallback to direct query
          const { data: roleData, error: roleError } = await supabase
            .from("user_roles")
            .select("role")
            .eq("user_id", userId)
            .eq("role", "admin")
            .maybeSingle();
          
          if (roleError) {
            console.error("Fallback query also failed:", roleError);
            return false;
          }
          console.log("Fallback admin role check result:", !!roleData);
          return !!roleData;
        }
        
        console.log("Admin role check via RPC result:", data);
        return data === true;
      } catch (error) {
        console.error("Exception checking admin role:", error);
        return false;
      }
    };

    const initialize = async () => {
      console.log("useAuth: initializing...");
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error("getSession error:", error);
        }
        
        if (!mounted) return;
        
        console.log("useAuth: session found:", session?.user?.email);
        
        setSession(session);
        setUser(session?.user ?? null);
        
        if (session?.user) {
          // Small delay to ensure auth is fully established
          await new Promise(resolve => setTimeout(resolve, 100));
          const admin = await checkAdminRole(session.user.id);
          console.log("useAuth: admin check complete:", admin);
          if (mounted) setIsAdmin(admin);
        }
      } catch (error) {
        console.error("useAuth init error:", error);
      } finally {
        if (mounted) {
          console.log("useAuth: setting isLoading to false");
          setIsLoading(false);
        }
      }
    };

    // Fallback timeout - force loading to false after 5 seconds
    timeoutId = setTimeout(() => {
      if (mounted && isLoading) {
        console.warn("useAuth: timeout reached, forcing isLoading to false");
        setIsLoading(false);
      }
    }, 5000);

    initialize();

    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (!mounted) return;
        
        console.log("Auth state changed:", event, session?.user?.email);
        
        setSession(session);
        setUser(session?.user ?? null);
        
        if (session?.user) {
          // Small delay to ensure auth is fully established
          await new Promise(resolve => setTimeout(resolve, 100));
          const admin = await checkAdminRole(session.user.id);
          console.log("Auth state admin check complete:", admin);
          if (mounted) setIsAdmin(admin);
        } else {
          setIsAdmin(false);
        }
      }
    );

    return () => {
      mounted = false;
      clearTimeout(timeoutId);
      subscription.unsubscribe();
    };
  }, []);

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { error: error ? new Error(error.message) : null };
  };

  const signUp = async (email: string, password: string) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: window.location.origin,
      },
    });
    return { error: error ? new Error(error.message) : null };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setIsAdmin(false);
  };

  return { user, session, isLoading, isAdmin, signIn, signUp, signOut };
}
