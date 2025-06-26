
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  Users, 
  BarChart3, 
  Settings, 
  Book,
  Atom,
  Layers,
  Blocks
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

interface SidebarItem {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  roles: ('admin' | 'editor' | 'viewer')[];
}

const sidebarItems: SidebarItem[] = [
  {
    title: 'Dashboard',
    href: '/admin',
    icon: LayoutDashboard,
    roles: ['admin', 'editor', 'viewer']
  },
  {
    title: 'Usuários',
    href: '/admin/users',
    icon: Users,
    roles: ['admin']
  },
  {
    title: 'Analytics',
    href: '/admin/analytics',
    icon: BarChart3,
    roles: ['admin', 'editor']
  },
  {
    title: 'Builder',
    href: '/admin/builder',
    icon: Blocks,
    roles: ['admin', 'editor']
  },
  {
    title: 'Configurações',
    href: '/admin/settings',
    icon: Settings,
    roles: ['admin']
  },
  {
    title: 'Documentação',
    href: '/admin/docs',
    icon: Book,
    roles: ['admin', 'editor', 'viewer']
  }
];

interface SidebarProps {
  isOpen: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const location = useLocation();
  const { user } = useAuth();

  const filteredItems = sidebarItems.filter(item => 
    user && item.roles.includes(user.role)
  );

  return (
    <aside className={cn(
      "fixed left-0 top-0 z-40 h-screen transition-transform duration-300 ease-in-out bg-card border-r border-border",
      isOpen ? "translate-x-0" : "-translate-x-full",
      "w-64"
    )}>
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex h-16 items-center justify-center border-b border-border px-6">
          <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            CraftSuite
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 p-4">
          {filteredItems.map((item) => {
            const isActive = location.pathname === item.href || 
              (item.href !== '/admin' && location.pathname.startsWith(item.href));
            
            return (
              <NavLink
                key={item.href}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200",
                  "hover:bg-accent hover:text-accent-foreground",
                  isActive 
                    ? "bg-primary text-primary-foreground shadow-sm" 
                    : "text-muted-foreground"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.title}
              </NavLink>
            );
          })}
        </nav>

        {/* User Info */}
        {user && (
          <div className="border-t border-border p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="text-sm font-medium truncate">{user.name}</p>
                <p className="text-xs text-muted-foreground capitalize">{user.role}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};
