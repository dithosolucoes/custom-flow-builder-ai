
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Settings, Shield, Zap, Globe, Database, 
  Key, Bell, Mail, Palette, Save 
} from "lucide-react";

const SystemSettings = () => {
  const settingSections = [
    {
      title: "Segurança",
      icon: Shield,
      color: "text-red-600",
      items: [
        { name: "Autenticação 2FA", status: "enabled", description: "Autenticação de dois fatores" },
        { name: "Políticas de Senha", status: "configured", description: "Requisitos de segurança" },
        { name: "Logs de Auditoria", status: "active", description: "Monitoramento de ações" },
      ]
    },
    {
      title: "Performance",
      icon: Zap,
      color: "text-yellow-600",
      items: [
        { name: "Cache Redis", status: "active", description: "Cache em memória" },
        { name: "CDN Global", status: "enabled", description: "Distribuição de conteúdo" },
        { name: "Compressão", status: "enabled", description: "Otimização de assets" },
      ]
    },
    {
      title: "Integrações",
      icon: Globe,
      color: "text-blue-600",
      items: [
        { name: "GitHub", status: "connected", description: "Repositórios de código" },
        { name: "Figma", status: "connected", description: "Design colaborativo" },
        { name: "Slack", status: "pending", description: "Notificações em equipe" },
      ]
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'enabled': 
      case 'active': 
      case 'connected': 
      case 'configured': 
        return 'bg-green-100 text-green-700';
      case 'pending': 
        return 'bg-yellow-100 text-yellow-700';
      case 'disabled': 
      case 'error':
        return 'bg-red-100 text-red-700';
      default: 
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">System Settings</h1>
          <p className="text-slate-600 mt-1">Configurações gerais do sistema</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Database className="w-4 h-4" />
            Backup
          </Button>
          <Button className="gap-2 bg-gradient-to-r from-blue-500 to-indigo-500">
            <Save className="w-4 h-4" />
            Salvar Todas
          </Button>
        </div>
      </div>

      {/* System Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Versão do Sistema</CardTitle>
            <Settings className="w-4 h-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-900">v2.4.1</div>
            <Badge className="mt-1 bg-blue-100 text-blue-700">Stable</Badge>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Status de Saúde</CardTitle>
            <Shield className="w-4 h-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-900">100%</div>
            <Badge className="mt-1 bg-green-100 text-green-700">Healthy</Badge>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Uso de Recursos</CardTitle>
            <Zap className="w-4 h-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-900">34%</div>
            <Badge className="mt-1 bg-purple-100 text-purple-700">Optimal</Badge>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Uptime</CardTitle>
            <Database className="w-4 h-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-900">99.9%</div>
            <Badge className="mt-1 bg-orange-100 text-orange-700">30 dias</Badge>
          </CardContent>
        </Card>
      </div>

      {/* Settings Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {settingSections.map((section, index) => (
          <Card key={index} className="bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <section.icon className={`w-5 h-5 ${section.color}`} />
                {section.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50">
                  <div>
                    <div className="font-medium text-slate-900 text-sm">{item.name}</div>
                    <div className="text-xs text-slate-500">{item.description}</div>
                  </div>
                  <Badge className={`text-xs ${getStatusColor(item.status)}`}>
                    {item.status}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Configuration Forms */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* General Settings */}
        <Card className="bg-white/70 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5 text-slate-600" />
              Configurações Gerais
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="system-name">Nome do Sistema</Label>
              <Input id="system-name" value="CoreCraft Admin" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="admin-email">Email do Admin</Label>
              <Input id="admin-email" type="email" value="admin@corecraft.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="max-users">Máximo de Usuários</Label>
              <Input id="max-users" type="number" value="1000" />
            </div>
          </CardContent>
        </Card>

        {/* API Settings */}
        <Card className="bg-white/70 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Key className="w-5 h-5 text-amber-600" />
              Configurações de API
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="api-key">Chave da API</Label>
              <Input id="api-key" type="password" value="••••••••••••••••" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="rate-limit">Rate Limit (req/min)</Label>
              <Input id="rate-limit" type="number" value="1000" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="webhook-url">Webhook URL</Label>
              <Input id="webhook-url" value="https://api.corecraft.com/webhook" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Notification Settings */}
      <Card className="bg-gradient-to-r from-slate-50 to-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="w-5 h-5 text-blue-600" />
            Notificações
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h3 className="font-medium text-slate-900">Email</h3>
              <div className="space-y-2 text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  Deploy notifications
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  System alerts
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  Weekly reports
                </label>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="font-medium text-slate-900">In-App</h3>
              <div className="space-y-2 text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  User activities
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  Performance alerts
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  Feature updates
                </label>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="font-medium text-slate-900">Slack</h3>
              <div className="space-y-2 text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  Critical errors
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  Deploy status
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  Daily summaries
                </label>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SystemSettings;
