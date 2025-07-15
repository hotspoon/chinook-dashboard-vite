import { AuthApi } from "@/api/authApi";
import type { AuthUser } from "@/schema/auth";
import { useQuery, type UseQueryResult } from "@tanstack/react-query";

export function useCurrentUser(): UseQueryResult<AuthUser | null, unknown> {
  return useQuery({
    queryKey: ["currentUser"],
    queryFn: AuthApi.getCurrentUser,
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
}
