import { StrictMode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "@tanstack/react-router";
import { queryClient } from "./lib/queryClients";
import { router } from "./main";
import { AuthProvider, useAuth } from "./context/AuthContext";

function InnerApp() {
  const auth = useAuth();
  return <RouterProvider router={router} context={{ auth }} />;
}

export function App() {
  return (
    <StrictMode>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <InnerApp />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </AuthProvider>
    </StrictMode>
  );
}
