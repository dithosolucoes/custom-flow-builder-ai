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
import Composites from "./pages/design-system/Composites";
import Blocks from "./pages/design-system/Blocks";
import Widgets from "./pages/design-system/Widgets";
import Pages from "./pages/design-system/Pages";
import Workflows from "./pages/design-system/Workflows";
import AICurator from "./pages/ai/AICurator";
import SmartBuilder from "./pages/ai/SmartBuilder";
import UserManagement from "./pages/users/UserManagement";
import DeploymentCenter from "./pages/deployment/DeploymentCenter";
import SystemSettings from "./pages/settings/SystemSettings";
import Builder from "./pages/Builder";

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
              <Route path="composites" element={<Composites />} />
              <Route path="blocks" element={<Blocks />} />
              <Route path="widgets" element={<Widgets />} />
              <Route path="pages" element={<Pages />} />
              <Route path="workflows" element={<Workflows />} />
              <Route path="ai-curator" element={<AICurator />} />
              <Route path="smart-builder" element={<SmartBuilder />} />
              <Route path="users" element={<UserManagement />} />
              <Route path="deployment" element={<DeploymentCenter />} />
              <Route path="settings" element={<SystemSettings />} />
            </Route>
            <Route path="/builder" element={<Builder />} />
          </Routes>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
