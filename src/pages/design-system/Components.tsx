
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Box, Plus, Search, Filter, Code, Eye } from "lucide-react";

const Components = () => {
  const components = [
    { 
      name: "Button", 
      category: "Form", 
      usage: 247, 
      status: "stable",
      description: "Componente básico de ação"
    },
    { 
      name: "Input", 
      category: "Form", 
      usage: 189, 
      status: "stable",
      description: "Campo de entrada de dados"
    },
    { 
      name: "Card", 
      category: "Layout", 
      usage: 156, 
      status: "stable",
      description: "Container de conteúdo"
    },
    { 
      name: "Modal", 
      category: "Overlay", 
      usage: 98, 
      status: "beta",
      description: "Janela modal sobreposta"
    },
    { 
      name: "DataTable", 
      category: "Data", 
      usage: 87, 
      status: "beta",
      description: "Tabela de dados avançada"
    },
    { 
      name: "Chart", 
      category: "Data", 
      usage: 45, 
      status: "alpha",
      description: "Gráficos interativos"
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'stable': return 'bg-green-100 text-green-700';
      case 'beta': return 'bg-yellow-100 text-yellow-700';
      case 'alpha': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Components Library</h1>
          <p className="text-slate-600 mt-1">Biblioteca de componentes reutilizáveis</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Filter className="w-4 h-4" />
            Filtros
          </Button>
          <Button className="gap-2 bg-gradient-to-r from-blue-500 to-indigo-500">
            <Plus className="w-4 h-4" />
            Novo Componente
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <Card className="bg-white/70 backdrop-blur-sm">
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input 
                placeholder="Buscar componentes..." 
                className="pl-10"
              />
            </div>
            <Button variant="outline">Categoria</Button>
            <Button variant="outline">Status</Button>
          </div>
        </CardContent>
      </Card>

      {/* Components Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {components.map((component, index) => (
          <Card key={index} className="bg-white/70 backdrop-blur-sm hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg flex items-center justify-center">
                    <Box className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{component.name}</CardTitle>
                    <Badge variant="secondary" className="text-xs mt-1">
                      {component.category}
                    </Badge>
                  </div>
                </div>
                <Badge className={`text-xs ${getStatusColor(component.status)}`}>
                  {component.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 mb-4">
                {component.description}
              </p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm">
                  <span className="text-slate-500">Usado </span>
                  <span className="font-medium text-slate-900">{component.usage}x</span>
                  <span className="text-slate-500"> este mês</span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1 gap-1">
                  <Eye className="w-3 h-3" />
                  Preview
                </Button>
                <Button size="sm" variant="outline" className="flex-1 gap-1">
                  <Code className="w-3 h-3" />
                  Código
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Component Builder Preview */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Box className="w-5 h-5 text-blue-600" />
            Component Builder
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 mb-4">
            Construa novos componentes visualmente com nosso editor drag-and-drop
          </p>
          <Button className="gap-2 bg-gradient-to-r from-blue-500 to-purple-500">
            <Plus className="w-4 h-4" />
            Abrir Builder
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Components;
