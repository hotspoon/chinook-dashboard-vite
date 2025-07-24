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
import { SidebarTrigger } from "@/components/ui/sidebar";

import { useNavigate } from "@tanstack/react-router";
import Cookies from "js-cookie";
import { ChevronDown, LogOut } from "lucide-react";
export function Header() {
  const user = {
    username: "John Doe",
  };
  const navigate = useNavigate();

  function handleLogout() {
    Cookies.remove("token");
    navigate({ to: "/login" });
  }

  return (
    <header className="bg-background sticky top-0 flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="#">Menu</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>Dashboard</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex items-center">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="flex items-center gap-2 bg-white px-4 py-1 border-2 rounded-xl border-[#E4E4E7] hover:cursor-pointer">
              <Avatar className="w-6 h-6">
                <AvatarImage src="/assets/images/avatar_pg_internal.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className="text-sm">{user.username}</p>
              <ChevronDown />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40">
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
    </header>
  );
}
