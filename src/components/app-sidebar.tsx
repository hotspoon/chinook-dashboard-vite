import * as React from "react";
import { ChevronRight } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import type { AppData } from "@/schema/navigation.schema";
import { Link, useLocation } from "@tanstack/react-router";

// This is sample data.
const data: AppData = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "Menu",
      url: "#",
      items: [
        {
          title: "Dashboard",
          url: "/dashboard",
          isActive: true,
        },
      ],
    },

    {
      title: "Music Library",
      url: "#",
      items: [
        {
          title: "Artists",
          url: "/artists",
        },
        {
          title: "Albums",
          url: "/albums",
        },
        {
          title: "Tracks",
          url: "/tracks",
        },
        {
          title: "Genres",
          url: "/genres",
        },
        {
          title: "Playlists",
          url: "/playlists",
        },
        {
          title: "Media Types",
          url: "/media_types",
        },
      ],
    },
    {
      title: "Business",
      url: "#",
      items: [
        {
          title: "Customers",
          url: "/customers",
        },
        {
          title: "Invoices",
          url: "/invoices",
        },
        {
          title: "Employees",
          url: "/employees",
        },
        {
          title: "Reports",
          url: "/reports",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const location = useLocation();
  return (
    <Sidebar {...props}>
      <SidebarContent className="gap-0">
        {/* We create a collapsible SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <Collapsible
            key={item.title}
            title={item.title}
            defaultOpen
            className="group/collapsible"
          >
            <SidebarGroup>
              <SidebarGroupLabel
                asChild
                className="group/label text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sm"
              >
                <CollapsibleTrigger>
                  {item.title}{" "}
                  <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {item.items.map((child) => (
                      <SidebarMenuItem key={child.title}>
                        <SidebarMenuButton
                          asChild
                          isActive={location.pathname === child.url} // ✅ Match current path
                        >
                          <Link to={child.url}>{child.title}</Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
