
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import AdminLayout from "./components/layout/AdminLayout";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import DesignTokens from "./pages/design-system/DesignTokens";
import Components from "./pages/design-system/Components";
import AICurator from "./pages/ai/AICurator";
import UserManagement from "./pages/users/UserManagement";
import DeploymentCenter from "./pages/deployment/DeploymentCenter";
import SystemSettings from "./pages/settings/SystemSettings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <Routes>
            <Route path="/" element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="analytics" element={<Analytics />} />
              <Route path="design-tokens" element={<DesignTokens />} />
              <Route path="components" element={<Components />} />
              <Route path="ai-curator" element={<AICurator />} />
              <Route path="users" element={<UserManagement />} />
              <Route path="deployment" element={<DeploymentCenter />} />
              <Route path="settings" element={<SystemSettings />} />
            </Route>
          </Routes>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
