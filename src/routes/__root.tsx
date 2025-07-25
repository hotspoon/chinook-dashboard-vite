import { ErrorPage } from "@/components/common/error-page";
import { NotFoundPage } from "@/components/common/not-found-page";
import { Toaster } from "@/components/ui/sonner";
import type { AuthContext } from "@/context/AuthContext";
import {
  Outlet,
  HeadContent,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

interface MyRouterContext {
  auth: AuthContext;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
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
        title: "Chinook Dashboard",
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
  notFoundComponent: () => {
    return (
      <>
        <NotFoundPage />
      </>
    );
  },
  errorComponent: ({ error }) => {
    return <ErrorPage message={error.message} stack={error.stack} />;
  },
});
