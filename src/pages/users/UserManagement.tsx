
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, Plus, Search, Filter, Shield, Activity } from "lucide-react";

const UserManagement = () => {
  const users = [
    {
      name: "João Silva",
      email: "joao@company.com",
      role: "Admin",
      status: "active",
      lastActive: "2 min",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      projects: 12
    },
    {
      name: "Maria Santos",
      email: "maria@company.com",
      role: "Designer",
      status: "active",
      lastActive: "5 min",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150",
      projects: 8
    },
    {
      name: "Pedro Costa",
      email: "pedro@company.com",
      role: "Developer",
      status: "offline",
      lastActive: "2h",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      projects: 15
    },
    {
      name: "Ana Oliveira",
      email: "ana@company.com",
      role: "Manager",
      status: "active",
      lastActive: "1 min",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
      projects: 6
    },
  ];

  const getRoleColor = (role: string) => {
    switch (role.toLowerCase()) {
      case 'admin': return 'bg-red-100 text-red-700';
      case 'manager': return 'bg-purple-100 text-purple-700';
      case 'designer': return 'bg-blue-100 text-blue-700';
      case 'developer': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusColor = (status: string) => {
    return status === 'active' 
      ? 'bg-green-100 text-green-700' 
      : 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">User Management</h1>
          <p className="text-slate-600 mt-1">Gerenciar usuários e permissões</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Shield className="w-4 h-4" />
            Permissões
          </Button>
          <Button className="gap-2 bg-gradient-to-r from-blue-500 to-indigo-500">
            <Plus className="w-4 h-4" />
            Novo Usuário
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-white/70 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Usuários</CardTitle>
            <Users className="w-4 h-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">247</div>
            <Badge className="mt-1 bg-blue-100 text-blue-700">+12 este mês</Badge>
          </CardContent>
        </Card>

        <Card className="bg-white/70 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ativos Agora</CardTitle>
            <Activity className="w-4 h-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89</div>
            <Badge className="mt-1 bg-green-100 text-green-700">Online</Badge>
          </CardContent>
        </Card>

        <Card className="bg-white/70 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Novos Hoje</CardTitle>
            <Plus className="w-4 h-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <Badge className="mt-1 bg-purple-100 text-purple-700">+8 ontem</Badge>
          </CardContent>
        </Card>

        <Card className="bg-white/70 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Admins</CardTitle>
            <Shield className="w-4 h-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <Badge className="mt-1 bg-red-100 text-red-700">Sistema</Badge>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card className="bg-white/70 backdrop-blur-sm">
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input 
                placeholder="Buscar usuários..." 
                className="pl-10"
              />
            </div>
            <Button variant="outline">Role</Button>
            <Button variant="outline">Status</Button>
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              Filtros
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Users List */}
      <Card className="bg-white/70 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Usuários do Sistema</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {users.map((user, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-slate-200 hover:bg-slate-50">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback className="bg-gradient-to-r from-blue-400 to-purple-400 text-white">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <div className="font-medium text-slate-900">{user.name}</div>
                    <div className="text-sm text-slate-500">{user.email}</div>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="text-sm font-medium text-slate-900">{user.projects}</div>
                    <div className="text-xs text-slate-500">Projetos</div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <Badge className={`text-xs ${getRoleColor(user.role)}`}>
                      {user.role}
                    </Badge>
                    <Badge className={`text-xs ${getStatusColor(user.status)}`}>
                      {user.status}
                    </Badge>
                  </div>

                  <div className="text-right">
                    <div className="text-xs text-slate-500">Último acesso</div>
                    <div className="text-sm font-medium text-slate-700">{user.lastActive}</div>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      Editar
                    </Button>
                    <Button size="sm" variant="outline">
                      Detalhes
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserManagement;
