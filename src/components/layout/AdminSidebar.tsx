
import { NavLink } from "react-router-dom";
import {
  Home, BarChart3, Palette, Box, Bot, Users, Rocket, Settings,
  Zap, Grid2X2, Layers, LayoutDashboard, Monitor, Workflow
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";

const AdminSidebar = () => {
  const navigationItems = [
    {
      title: "Principal",
      items: [
        { title: "Dashboard", url: "/", icon: Home },
        { title: "Analytics", url: "/analytics", icon: BarChart3 },
      ]
    },
    {
      title: "Design System Studio",
      items: [
        { title: "Design Tokens", url: "/design-tokens", icon: Palette },
        { title: "Components", url: "/components", icon: Box },
        { title: "Composites", url: "/composites", icon: Layers },
        { title: "Layout Blocks", url: "/blocks", icon: Grid2X2 },
        { title: "Widgets", url: "/widgets", icon: LayoutDashboard },
        { title: "Pages", url: "/pages", icon: Monitor },
        { title: "Workflows", url: "/workflows", icon: Workflow },
      ]
    },
    {
      title: "AI & Automação",
      items: [
        { title: "AI Curator", url: "/ai-curator", icon: Bot, badge: "NEW" },
        { title: "Smart Builder", url: "/smart-builder", icon: Zap },
      ]
    },
    {
      title: "Gestão",
      items: [
        { title: "Usuários", url: "/users", icon: Users },
        { title: "Deploy Center", url: "/deployment", icon: Rocket },
        { title: "Configurações", url: "/settings", icon: Settings },
      ]
    }
  ];

  return (
    <Sidebar className="border-r bg-white/50 backdrop-blur-xl">
      <SidebarHeader className="border-b px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">🧬</span>
          </div>
          <div>
            <div className="font-semibold text-slate-900">CoreCraft</div>
            <div className="text-xs text-slate-500">Design System</div>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-3 py-4">
        {navigationItems.map((group, index) => (
          <SidebarGroup key={index}>
            <SidebarGroupLabel className="text-xs font-medium text-slate-500 uppercase tracking-wider px-3 py-2">
              {group.title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink 
                        to={item.url}
                        className={({ isActive }) => 
                          `flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                            isActive 
                              ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg' 
                              : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                          }`
                        }
                      >
                        <item.icon className="w-5 h-5 opacity-100" />
                        <span className="font-medium">{item.title}</span>
                        {item.badge && (
                          <Badge className="ml-auto text-xs bg-green-100 text-green-700 border-green-200">
                            {item.badge}
                          </Badge>
                        )}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
            {index < navigationItems.length - 1 && <SidebarSeparator className="my-4" />}
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter className="border-t p-4">
        <div className="text-xs text-slate-500 text-center">
          CoreCraft Admin v2.0
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AdminSidebar;
