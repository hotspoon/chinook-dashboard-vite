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

interface NavItem {
  title: string;
  url: string;
  isActive?: boolean; // optional
}

interface NavSection {
  title: string;
  url: string;
  items: NavItem[];
}

interface AppData {
  versions: string[];
  navMain: NavSection[];
}

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
          url: "/media-types",
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
                    {item.items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild isActive={item.isActive}>
                          <a href={item.url}>{item.title}</a>
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
