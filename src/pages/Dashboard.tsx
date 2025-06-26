
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Users, Box, Zap, TrendingUp, Activity, Clock, 
  CheckCircle, AlertCircle, Rocket, Bot 
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    { title: "Usuários Ativos", value: "1,247", icon: Users, change: "+12%", color: "text-blue-600" },
    { title: "Componentes", value: "856", icon: Box, change: "+8.2%", color: "text-green-600" },
    { title: "Builds Hoje", value: "342", icon: Zap, change: "+15%", color: "text-purple-600" },
    { title: "Performance", value: "98.5%", icon: TrendingUp, change: "+2.1%", color: "text-orange-600" },
  ];

  const recentActivities = [
    { user: "João Silva", action: "criou átomo", item: "Button Pro", time: "2 min", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150" },
    { user: "Maria Santos", action: "deployou sistema", item: "ERP Clínica", time: "5 min", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150" },
    { user: "AI Curator", action: "encontrou", item: "12 novos templates", time: "8 min", avatar: null },
    { user: "Pedro Costa", action: "atualizou", item: "Design Tokens", time: "12 min", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
          <p className="text-slate-600 mt-1">Visão geral do sistema CoreCraft</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Activity className="w-4 h-4" />
            Relatório
          </Button>
          <Button className="gap-2 bg-gradient-to-r from-blue-500 to-indigo-500">
            <Rocket className="w-4 h-4" />
            Novo Deploy
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="relative overflow-hidden bg-white/70 backdrop-blur-sm border-slate-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">
                {stat.title}
              </CardTitle>
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
              <div className="flex items-center mt-1">
                <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
                  {stat.change}
                </Badge>
                <span className="text-xs text-slate-500 ml-2">vs mês anterior</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* AI Status */}
        <Card className="lg:col-span-1 bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-purple-900">
              <Bot className="w-5 h-5" />
              AI Curator Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-purple-700">Escaneando mercado...</span>
              <Badge className="bg-purple-100 text-purple-700">Ativo</Badge>
            </div>
            <Progress value={85} className="h-2" />
            <div className="text-sm text-purple-600">
              15 componentes na fila de aprovação
            </div>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-slate-600">95% taxa de aprovação</span>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card className="lg:col-span-2 bg-white/70 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Atividades Recentes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center">
                    {activity.avatar ? (
                      <img src={activity.avatar} alt={activity.user} className="w-8 h-8 rounded-full object-cover" />
                    ) : (
                      <Bot className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm">
                      <span className="font-medium text-slate-900">{activity.user}</span>
                      <span className="text-slate-600"> {activity.action} </span>
                      <span className="font-medium text-blue-600">{activity.item}</span>
                    </div>
                  </div>
                  <div className="text-xs text-slate-500">{activity.time}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="bg-gradient-to-r from-slate-50 to-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-slate-900">Ações Rápidas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-auto p-4 flex flex-col gap-2 hover:bg-white">
              <Box className="w-6 h-6 text-blue-600" />
              <span className="text-sm">Novo Componente</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col gap-2 hover:bg-white">
              <Zap className="w-6 h-6 text-purple-600" />
              <span className="text-sm">Smart Builder</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col gap-2 hover:bg-white">
              <Users className="w-6 h-6 text-green-600" />
              <span className="text-sm">Gerenciar Usuários</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col gap-2 hover:bg-white">
              <Rocket className="w-6 h-6 text-orange-600" />
              <span className="text-sm">Deploy Center</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
