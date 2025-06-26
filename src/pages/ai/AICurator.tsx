
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Bot, Search, Brain, BookOpen, MessageSquare, 
  CheckCircle, Clock, AlertCircle, Zap, Download 
} from "lucide-react";

const AICurator = () => {
  const scanSources = [
    { name: "GitHub", status: "active", found: 23, progress: 85 },
    { name: "Dribbble", status: "active", found: 12, progress: 65 },
    { name: "Component Libraries", status: "queued", found: 8, progress: 0 },
    { name: "Design Systems", status: "completed", found: 47, progress: 100 },
  ];

  const pendingApprovals = [
    { 
      name: "Advanced Data Table", 
      source: "GitHub", 
      quality: 95, 
      category: "Data Display",
      preview: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400"
    },
    { 
      name: "Animated Button Set", 
      source: "Dribbble", 
      quality: 88, 
      category: "Form Elements",
      preview: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400"
    },
    { 
      name: "Dashboard Cards", 
      source: "Component Library", 
      quality: 92, 
      category: "Layout",
      preview: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400"
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">AI Curator System</h1>
          <p className="text-slate-600 mt-1">Inteligência artificial para descoberta e curadoria</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Relatório
          </Button>
          <Button className="gap-2 bg-gradient-to-r from-purple-500 to-blue-500">
            <Zap className="w-4 h-4" />
            Iniciar Scan
          </Button>
        </div>
      </div>

      {/* AI Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Componentes Descobertos</CardTitle>
            <Search className="w-4 h-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-900">90</div>
            <Badge className="mt-1 bg-purple-100 text-purple-700">Hoje</Badge>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taxa de Aprovação</CardTitle>
            <CheckCircle className="w-4 h-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-900">94.5%</div>
            <Badge className="mt-1 bg-green-100 text-green-700">↑ 2.3%</Badge>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Na Fila</CardTitle>
            <Clock className="w-4 h-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-900">15</div>
            <Badge className="mt-1 bg-orange-100 text-orange-700">Aguardando</Badge>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">IA Ativa</CardTitle>
            <Bot className="w-4 h-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-900">3/3</div>
            <Badge className="mt-1 bg-blue-100 text-blue-700">Online</Badge>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Market Scanner */}
        <Card className="bg-white/70 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="w-5 h-5 text-blue-600" />
              Market Scanner
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {scanSources.map((source, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{source.name}</span>
                    <Badge 
                      className={`text-xs ${
                        source.status === 'active' ? 'bg-green-100 text-green-700' :
                        source.status === 'completed' ? 'bg-blue-100 text-blue-700' :
                        'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {source.status}
                    </Badge>
                  </div>
                  <span className="text-sm text-slate-600">{source.found} encontrados</span>
                </div>
                <Progress value={source.progress} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* AI Assistant */}
        <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-purple-600" />
              AI Assistant
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-white/50 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-slate-700">
                      Encontrei 12 novos componentes que podem ser interessantes. 
                      Gostaria que eu analise a qualidade deles?
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button size="sm" className="flex-1">Sim, analise</Button>
                <Button size="sm" variant="outline" className="flex-1">Mais tarde</Button>
              </div>
              
              <div className="text-center">
                <Button variant="ghost" className="gap-2 text-purple-600">
                  <MessageSquare className="w-4 h-4" />
                  Abrir Chat Completo
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pending Approvals */}
      <Card className="bg-white/70 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-green-600" />
            Aguardando Aprovação
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {pendingApprovals.map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-4 rounded-lg border border-slate-200 hover:bg-slate-50">
                <img 
                  src={item.preview} 
                  alt={item.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-medium text-slate-900">{item.name}</h3>
                    <Badge variant="secondary" className="text-xs">{item.category}</Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-slate-600">
                    <span>Fonte: {item.source}</span>
                    <span>Qualidade: {item.quality}%</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="gap-1">
                    <CheckCircle className="w-3 h-3" />
                    Aprovar
                  </Button>
                  <Button size="sm" variant="outline">
                    Revisar
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AICurator;
