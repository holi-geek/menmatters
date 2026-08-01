import { useEffect, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";

export function useAdminAuth() {
  const [session, setSession] = useState<Session | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_event, s) => {
      setSession(s);
      if (!s) {
        setIsAdmin(false);
        setLoading(false);
        return;
      }
      // Defer the role lookup out of the auth callback.
      setTimeout(async () => {
        const { data } = await supabase
          .from("user_roles")
          .select("role")
          .eq("user_id", s.user.id)
          .eq("role", "admin")
          .maybeSingle();
        setIsAdmin(!!data);
        setLoading(false);
      }, 0);
    });

    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) {
        setSession(null);
        setLoading(false);
      }
    });

    return () => sub.subscription.unsubscribe();
  }, []);

  return { session, isAdmin, loading };
}
