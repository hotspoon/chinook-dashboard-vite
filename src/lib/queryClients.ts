import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Don't refetch when window regains focus
      refetchOnReconnect: false, // Don't refetch when reconnecting to the network
      refetchOnMount: false, // Don't refetch when component mounts
      staleTime: Infinity, // Data is always considered fresh
    },
  },
});
