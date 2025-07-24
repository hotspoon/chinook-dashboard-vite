import { AppSidebar } from "@/components/app-sidebar";
import { Footer } from "@/components/ui/layout/footer";
import { Header } from "@/components/ui/layout/header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { authCheck } from "@/lib/auth/auth";

import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_appLayout")({
  component: AppLayoutComponent,
  beforeLoad: async ({ location }) => {
    const isAuthenticated = await authCheck();

    if (!isAuthenticated) {
      throw redirect({
        to: "/login",
        search: {
          redirect: location.href,
        },
      });
    }
  },
});

function AppLayoutComponent() {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <Header />

          <div className="flex flex-1 flex-col gap-4 p-4">
            <Outlet />
          </div>
          <Footer />
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
