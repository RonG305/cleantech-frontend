
import Navbar from "@/components/common/Navbar";
import { ThemeProvider } from "@/components/common/Theme/ThemeProvider";
import { ProviderSidebar } from "@/components/ProviderDashboard/Common/Sidebar/Sidebar";
import { Card } from "@/components/ui/card";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SidebarProvider>
        <ProviderSidebar />
        <main className="w-full flex flex-col">
          <Navbar />
          <Card className="p-4 flex-1 overflow-y-auto ">
            {children}
          </Card>
        </main>
      </SidebarProvider>
    </ThemeProvider>
  );
}