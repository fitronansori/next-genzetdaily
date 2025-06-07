import { cookies } from "next/headers";

import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "@/components/layouts/dashboard/Sidebar/DashboardSidebar";
import DashboardHeader from "@/components/layouts/dashboard/Sidebar/DashboardHeader";

type DashboradLayoutProps = {
  children: React.ReactNode;
};

const DashboradLayout = async ({ children }: DashboradLayoutProps) => {
  const cookieStore = await cookies();

  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <DashboardSidebar />
      <main className="w-full">
        <DashboardHeader />
        <div className="p-4">{children}</div>
      </main>
    </SidebarProvider>
  );
};
export default DashboradLayout;
