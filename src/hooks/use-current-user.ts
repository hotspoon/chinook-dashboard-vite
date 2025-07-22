import { AuthApi } from "@/api/authApi";
import type { MeResponse } from "@/schema/auth.schema";
import { useQuery, type UseQueryResult } from "@tanstack/react-query";

export function useCurrentUser(): UseQueryResult<MeResponse | null, unknown> {
  return useQuery({
    queryKey: ["currentUser"],
    queryFn: AuthApi.getCurrentUser,
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
}
