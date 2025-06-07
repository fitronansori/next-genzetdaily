"use client";

import {
  LayoutDashboard,
  FileText,
  MessageSquare,
  PlusCircle,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Logo from "@/components/layouts/dashboard/Sidebar/DashboardLogo";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Essential menu items only
const dashboard_menu = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Artikel",
    url: "/dashboard/articles",
    icon: FileText,
  },
  {
    title: "Buat Artikel",
    url: "/dashboard/articles/create",
    icon: PlusCircle,
  },
  {
    title: "Komentar",
    url: "/dashboard/comments",
    icon: MessageSquare,
  },
];

const DashboardSidebar = () => {
  const pathname = usePathname();

  const isActiveRoute = (url: string) => {
    // Exact match for all routes to avoid conflicts
    if (pathname === url) {
      return true;
    }

    if (url !== "/dashboard" && pathname.startsWith(url + "/")) {
      const exactMatch = dashboard_menu.find((item) => item.url === pathname);

      if (!exactMatch) {
        console.log(`Parent route activated (no exact child): true`);
        return true;
      }
    }

    return false;
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="py-0">
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        {/* Dashboard Menu */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {dashboard_menu.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isActiveRoute(item.url)}>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
export default DashboardSidebar;
