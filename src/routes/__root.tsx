import { Toaster } from "@/components/ui/sonner";
import { createRootRoute, Outlet, HeadContent } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "TanStack Start Starter",
      },
    ],
  }),
  component: () => (
    <>
      <HeadContent />
      <Outlet />
      <Toaster position="top-center" />
      <TanStackRouterDevtools />
    </>
  ),
});
