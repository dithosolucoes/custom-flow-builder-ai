
import { Search, Bell, MessageSquare, User, Sun, Moon, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { SidebarTrigger } from "@/components/ui/sidebar";

const AdminHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-lg shadow-sm">
      <div className="flex h-16 items-center gap-4 px-6">
        <SidebarTrigger className="text-slate-600 hover:text-slate-900" />
        
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            🧬 CoreCraft
          </div>
          <Badge variant="secondary" className="text-xs">Admin</Badge>
        </div>

        <div className="flex-1 mx-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
            <Input 
              placeholder="Buscar componentes, usuários, projetos..." 
              className="pl-10 bg-slate-50 border-slate-200 focus:bg-white"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative hover:bg-slate-100">
            <Bell className="w-5 h-5 text-slate-600" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs bg-red-500">3</Badge>
          </Button>

          <Button variant="ghost" size="icon" className="relative hover:bg-slate-100">
            <MessageSquare className="w-5 h-5 text-slate-600" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs bg-blue-500">5</Badge>
          </Button>

          <Button variant="ghost" size="icon" className="hover:bg-slate-100">
            <Sun className="w-5 h-5 text-slate-600" />
          </Button>

          <Button variant="ghost" size="icon" className="hover:bg-slate-100">
            <Globe className="w-5 h-5 text-slate-600" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150" />
                  <AvatarFallback className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white">JS</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                Meu Perfil
              </DropdownMenuItem>
              <DropdownMenuItem>Configurações</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600">
                Sair
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
