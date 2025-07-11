// import { useQuery } from "@tanstack/react-query";
// import { getCurrentUser } from "@/lib/auth/auth";

// export function useAuth() {
//   return useQuery({
//     queryKey: ["currentUser"],
//     queryFn: getCurrentUser,
//     staleTime: 5 * 60 * 1000, // Cache for 5 minutes
//     refetchOnWindowFocus: false,
//   });
// }

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
