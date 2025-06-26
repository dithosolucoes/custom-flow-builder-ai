
import { Plus, Search, Grid3X3, List, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Blocks = () => {
  const blocks = [
    {
      id: 1,
      name: "Header Navigation",
      description: "Cabeçalho completo com menu e logo",
      category: "Navigation",
      uses: 334,
      rating: 4.9,
      preview: "🏠"
    },
    {
      id: 2,
      name: "Sidebar Menu",
      description: "Menu lateral responsivo",
      category: "Navigation",
      uses: 287,
      rating: 4.8,
      preview: "📋"
    },
    {
      id: 3,
      name: "Hero Section",
      description: "Seção principal da landing page",
      category: "Marketing",
      uses: 198,
      rating: 4.7,
      preview: "🚀"
    },
    {
      id: 4,
      name: "Footer Links",
      description: "Rodapé com links e informações",
      category: "Navigation",
      uses: 156,
      rating: 4.6,
      preview: "🔗"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Layout Blocks</h1>
          <p className="text-slate-600">Blocos de layout prontos para usar</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-500 to-indigo-500">
          <Plus className="w-4 h-4 mr-2" />
          Novo Block
        </Button>
      </div>

      {/* Filtros */}
      <div className="flex gap-4 items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Buscar blocks..."
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

      {/* Grid de Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blocks.map((block) => (
          <div key={block.id} className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-shadow">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">{block.preview}</div>
              <h3 className="font-semibold text-slate-900">{block.name}</h3>
              <p className="text-sm text-slate-600 mt-1">{block.description}</p>
            </div>
            
            <div className="space-y-3">
              <Badge variant="secondary" className="text-xs">
                {block.category}
              </Badge>
              
              <div className="flex justify-between text-sm text-slate-600">
                <span>{block.uses} usos</span>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span>{block.rating}</span>
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

export default Blocks;
