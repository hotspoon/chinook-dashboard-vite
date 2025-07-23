import { StrictMode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "@tanstack/react-router";
import { queryClient } from "./lib/queryClients";
import { router } from "./router";
// import { AuthProvider, useAuth } from "./context/AuthContext";

function InnerApp() {
  return <RouterProvider router={router} />;
}

export function App() {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <InnerApp />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </StrictMode>
  );
}
