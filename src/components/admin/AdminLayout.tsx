
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { Breadcrumbs } from './Breadcrumbs';
import { cn } from '@/lib/utils';

export const AdminLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-background">
      <Sidebar isOpen={sidebarOpen} />
      
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className={cn(
        "flex flex-col transition-all duration-300 ease-in-out",
        "lg:ml-64"
      )}>
        <Header onMenuClick={toggleSidebar} />
        
        <main className="flex-1 p-4 lg:p-6">
          <Breadcrumbs />
          <Outlet />
        </main>
      </div>
    </div>
  );
};
