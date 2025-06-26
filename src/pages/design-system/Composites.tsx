
import { Plus, Search, Grid3X3, List, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Composites = () => {
  const composites = [
    {
      id: 1,
      name: "Search Bar",
      description: "Input com botão de busca e filtros",
      category: "Navigation",
      uses: 247,
      rating: 4.8,
      preview: "🔍"
    },
    {
      id: 2,
      name: "User Card",
      description: "Card de perfil com avatar e informações",
      category: "Display",
      uses: 189,
      rating: 4.9,
      preview: "👤"
    },
    {
      id: 3,
      name: "Product Card",
      description: "Card de produto com imagem e preço",
      category: "E-commerce",
      uses: 156,
      rating: 4.7,
      preview: "🛍️"
    },
    {
      id: 4,
      name: "Form Group",
      description: "Conjunto de campos com validação",
      category: "Forms",
      uses: 203,
      rating: 4.6,
      preview: "📝"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Composites</h1>
          <p className="text-slate-600">Combinações inteligentes de componentes</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-500 to-indigo-500">
          <Plus className="w-4 h-4 mr-2" />
          Novo Composite
        </Button>
      </div>

      {/* Filtros */}
      <div className="flex gap-4 items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Buscar composites..."
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

      {/* Grid de Composites */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {composites.map((composite) => (
          <div key={composite.id} className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-shadow">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">{composite.preview}</div>
              <h3 className="font-semibold text-slate-900">{composite.name}</h3>
              <p className="text-sm text-slate-600 mt-1">{composite.description}</p>
            </div>
            
            <div className="space-y-3">
              <Badge variant="secondary" className="text-xs">
                {composite.category}
              </Badge>
              
              <div className="flex justify-between text-sm text-slate-600">
                <span>{composite.uses} usos</span>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span>{composite.rating}</span>
                </div>
              </div>
              
              <Button variant="outline" size="sm" className="w-full">
                Ver Detalhes
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Composites;
