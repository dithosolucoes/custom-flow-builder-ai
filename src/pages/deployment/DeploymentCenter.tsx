
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Rocket, GitBranch, Globe, Server, CheckCircle, 
  Clock, AlertCircle, Plus, Activity 
} from "lucide-react";

const DeploymentCenter = () => {
  const deployments = [
    {
      project: "E-commerce Dashboard",
      environment: "Production",
      status: "success",
      version: "v2.3.1",
      time: "2 min ago",
      duration: "1m 23s"
    },
    {
      project: "Admin Panel",
      environment: "Staging",
      status: "deploying",
      version: "v1.8.0",
      time: "deploying...",
      duration: "45s",
      progress: 75
    },
    {
      project: "Component Library",
      environment: "Development",
      status: "failed",
      version: "v3.1.0",
      time: "5 min ago",
      duration: "failed at 2m"
    },
  ];

  const environments = [
    { name: "Production", url: "app.corecraft.com", status: "healthy", uptime: "99.9%" },
    { name: "Staging", url: "staging.corecraft.com", status: "healthy", uptime: "99.7%" },
    { name: "Development", url: "dev.corecraft.com", status: "warning", uptime: "98.1%" },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'deploying': return <Clock className="w-4 h-4 text-blue-600" />;
      case 'failed': return <AlertCircle className="w-4 h-4 text-red-600" />;
      default: return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success': return 'bg-green-100 text-green-700';
      case 'deploying': return 'bg-blue-100 text-blue-700';
      case 'failed': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getEnvStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'bg-green-100 text-green-700';
      case 'warning': return 'bg-yellow-100 text-yellow-700';
      case 'error': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Deployment Center</h1>
          <p className="text-slate-600 mt-1">Gerenciar deploys e ambientes</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <GitBranch className="w-4 h-4" />
            Branches
          </Button>
          <Button className="gap-2 bg-gradient-to-r from-green-500 to-blue-500">
            <Rocket className="w-4 h-4" />
            Novo Deploy
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-white/70 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Deploys Hoje</CardTitle>
            <Rocket className="w-4 h-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <Badge className="mt-1 bg-blue-100 text-blue-700">+8 ontem</Badge>
          </CardContent>
        </Card>

        <Card className="bg-white/70 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taxa de Sucesso</CardTitle>
            <CheckCircle className="w-4 h-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">96.8%</div>
            <Badge className="mt-1 bg-green-100 text-green-700">+2.1%</Badge>
          </CardContent>
        </Card>

        <Card className="bg-white/70 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tempo Médio</CardTitle>
            <Clock className="w-4 h-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2m 15s</div>
            <Badge className="mt-1 bg-purple-100 text-purple-700">-30s</Badge>
          </CardContent>
        </Card>

        <Card className="bg-white/70 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Uptime Geral</CardTitle>
            <Activity className="w-4 h-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">99.9%</div>
            <Badge className="mt-1 bg-orange-100 text-orange-700">30 dias</Badge>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Deployments */}
        <Card className="bg-white/70 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Rocket className="w-5 h-5 text-blue-600" />
              Deploys Recentes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {deployments.map((deploy, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-slate-200">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(deploy.status)}
                    <div>
                      <div className="font-medium text-slate-900">{deploy.project}</div>
                      <div className="text-sm text-slate-500">
                        {deploy.environment} • {deploy.version}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <Badge className={`text-xs mb-1 ${getStatusColor(deploy.status)}`}>
                      {deploy.status}
                    </Badge>
                    <div className="text-xs text-slate-500">{deploy.time}</div>
                    <div className="text-xs text-slate-400">{deploy.duration}</div>
                    {deploy.progress && (
                      <Progress value={deploy.progress} className="w-16 h-1 mt-1" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Environment Status */}
        <Card className="bg-white/70 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Server className="w-5 h-5 text-green-600" />
              Status dos Ambientes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {environments.map((env, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-slate-200">
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-slate-400" />
                    <div>
                      <div className="font-medium text-slate-900">{env.name}</div>
                      <div className="text-sm text-slate-500">{env.url}</div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <Badge className={`text-xs mb-1 ${getEnvStatusColor(env.status)}`}>
                      {env.status}
                    </Badge>
                    <div className="text-xs text-slate-500">Uptime: {env.uptime}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Deploy */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Rocket className="w-5 h-5 text-green-600" />
            Deploy Rápido
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 mb-4">
            Faça deploy de suas últimas alterações com um clique
          </p>
          <div className="flex gap-4">
            <Button className="gap-2 bg-gradient-to-r from-green-500 to-blue-500">
              <Rocket className="w-4 h-4" />
              Deploy para Production
            </Button>
            <Button variant="outline" className="gap-2">
              <Plus className="w-4 h-4" />
              Deploy para Staging
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DeploymentCenter;
