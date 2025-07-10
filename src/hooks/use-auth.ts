import { useState, useEffect } from "react";
import { getCurrentUser } from "@/lib/auth/auth";
import type { User } from "@/schema/user";

export function useAuth() {
  const [user, setUser] = useState<User | any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCurrentUser().then((user) => {
      setUser(user);
      setLoading(false);
    });
  }, []);

  return { user, loading, setUser };
}
