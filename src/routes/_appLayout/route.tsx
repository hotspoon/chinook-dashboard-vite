import { AuthApi } from "@/api/authApi";
import { AppSidebar } from "@/components/app-sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { isAuthenticated } from "@/lib/auth/auth";
import { cn } from "@/lib/utils";

import {
  Outlet,
  createFileRoute,
  redirect,
  useNavigate,
} from "@tanstack/react-router";
import Cookies from "js-cookie";
import { ChevronDown, LogOut } from "lucide-react";

export const Route = createFileRoute("/_appLayout")({
  component: AppLayoutComponent,
  beforeLoad: async ({ context, location }) => {
    // const user = await AuthApi.getCurrentUser();

    if (!context.auth.user.authenticated) {
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
  // const { username } = useLoaderData({ from: "/_appLayout" });
  const username = "John Doe";
  const navigate = useNavigate();

  function handleLogout() {
    Cookies.remove("token");
    navigate({ to: "/login" });
  }
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="bg-background sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="flex items-center ml-auto">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <div className="flex items-center gap-2 bg-white px-4 py-1 border-2 rounded-xl border-[#E4E4E7] hover:cursor-pointer">
                    <Avatar className="w-6 h-6">
                      <AvatarImage src="/assets/images/avatar_pg_internal.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p className="text-sm">{}</p>
                    <ChevronDown />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full z-[999]">
                  <DropdownMenuItem className="gap-2 ">
                    <p className="text-gray-500">{username}</p>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="gap-2 hover:cursor-pointer"
                    onClick={handleLogout}
                  >
                    <Button variant="outline">
                      <LogOut />
                      Keluar
                    </Button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            {/* <Button
              className="ml-auto"
              variant="destructive"
              onClick={handleLogout}
            >
              Logout
            </Button> */}
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4">
            <Outlet />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
