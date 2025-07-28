import { authCheck } from "@/lib/auth/auth";
import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_authLayout")({
  component: AuthLayoutComponent,
  beforeLoad: async () => {
    const isAuthenticated = await authCheck();
    console.log(isAuthenticated);

    if (isAuthenticated) {
      throw redirect({
        to: "/dashboard",
      });
    }
  },
});

function AuthLayoutComponent() {
  return (
    <>
      <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <Outlet />
        </div>
      </div>
    </>
  );
}
