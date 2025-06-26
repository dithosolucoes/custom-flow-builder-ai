
import { Plus, Search, Grid3X3, List, Star, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Workflows = () => {
  const workflows = [
    {
      id: 1,
      name: "Authentication Flow",
      description: "Login, register e recuperação de senha",
      category: "Authentication",
      steps: 5,
      rating: 4.9,
      status: "active",
      preview: "🔐"
    },
    {
      id: 2,
      name: "E-commerce Checkout",
      description: "Carrinho, pagamento e confirmação",
      category: "E-commerce",
      steps: 7,
      rating: 4.8,
      status: "active",
      preview: "🛒"
    },
    {
      id: 3,
      name: "User Onboarding",
      description: "Introdução e configuração inicial",
      category: "User Experience",
      steps: 4,
      rating: 4.7,
      status: "draft",
      preview: "👋"
    },
    {
      id: 4,
      name: "Content Management",
      description: "Criar, editar e publicar conteúdo",
      category: "CMS",
      steps: 6,
      rating: 4.6,
      status: "active",
      preview: "📝"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Workflows</h1>
          <p className="text-slate-600">Fluxos de trabalho automatizados</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-500 to-indigo-500">
          <Plus className="w-4 h-4 mr-2" />
          Novo Workflow
        </Button>
      </div>

      {/* Filtros */}
      <div className="flex gap-4 items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Buscar workflows..."
            className="pl-10 pr-4 py-2 w-full border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <Button variant="outline" size="sm">
          <Grid3X3 className="w-4 h-4 mr-2" />
          Grid
        </Button>
        <Button variant="outline" size="sm">
          <List className="w-4 h-4 mr-2" />
          Lista
        </Button>
      </div>

      {/* Grid de Workflows */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workflows.map((workflow) => (
          <div key={workflow.id} className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-shadow">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">{workflow.preview}</div>
              <h3 className="font-semibold text-slate-900">{workflow.name}</h3>
              <p className="text-sm text-slate-600 mt-1">{workflow.description}</p>
            </div>
            
            <div className="space-y-3">
              <div className="flex gap-2">
                <Badge variant="secondary" className="text-xs">
                  {workflow.category}
                </Badge>
                <Badge 
                  variant={workflow.status === 'active' ? 'default' : 'secondary'}
                  className="text-xs"
                >
                  {workflow.status === 'active' ? 'Ativo' : 'Rascunho'}
                </Badge>
              </div>
              
              <div className="flex justify-between text-sm text-slate-600">
                <span>{workflow.steps} etapas</span>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span>{workflow.rating}</span>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  Editar
                </Button>
                <Button size="sm" className="flex-1">
                  <Play className="w-3 h-3 mr-1" />
                  Executar
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workflows;
