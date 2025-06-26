
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/admin/ProtectedRoute";
import { LoginForm } from "@/components/admin/LoginForm";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Dashboard } from "@/pages/admin/Dashboard";
import { UsersPage } from "@/pages/admin/UsersPage";
import { AnalyticsPage } from "@/pages/admin/AnalyticsPage";
import { BuilderPage } from "@/pages/admin/BuilderPage";
import { SettingsPage } from "@/pages/admin/SettingsPage";
import { DocsPage } from "@/pages/admin/DocsPage";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<LoginForm />} />
            
            {/* Protected admin routes */}
            <Route path="/admin" element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }>
              <Route index element={<Dashboard />} />
              <Route path="users" element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <UsersPage />
                </ProtectedRoute>
              } />
              <Route path="analytics" element={
                <ProtectedRoute allowedRoles={['admin', 'editor']}>
                  <AnalyticsPage />
                </ProtectedRoute>
              } />
              <Route path="builder" element={
                <ProtectedRoute allowedRoles={['admin', 'editor']}>
                  <BuilderPage />
                </ProtectedRoute>
              } />
              <Route path="settings" element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <SettingsPage />
                </ProtectedRoute>
              } />
              <Route path="docs" element={<DocsPage />} />
            </Route>

            {/* Catch all routes */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
