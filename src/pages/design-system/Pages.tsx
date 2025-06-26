
import { Plus, Search, Grid3X3, List, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Pages = () => {
  const pages = [
    {
      id: 1,
      name: "Landing Page",
      description: "Página inicial completa com hero e seções",
      category: "Marketing",
      uses: 156,
      rating: 4.9,
      preview: "🏠"
    },
    {
      id: 2,
      name: "Dashboard Layout",
      description: "Layout de dashboard com sidebar e widgets",
      category: "Admin",
      uses: 134,
      rating: 4.8,
      preview: "📊"
    },
    {
      id: 3,
      name: "E-commerce Product",
      description: "Página de produto com galeria e compra",
      category: "E-commerce",
      uses: 98,
      rating: 4.7,
      preview: "🛍️"
    },
    {
      id: 4,
      name: "Profile Settings",
      description: "Página de configurações do usuário",
      category: "User",
      uses: 87,
      rating: 4.6,
      preview: "⚙️"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Complete Pages</h1>
          <p className="text-slate-600">Páginas completas prontas para usar</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-500 to-indigo-500">
          <Plus className="w-4 h-4 mr-2" />
          Nova Página
        </Button>
      </div>

      {/* Filtros */}
      <div className="flex gap-4 items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Buscar páginas..."
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

      {/* Grid de Pages */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pages.map((page) => (
          <div key={page.id} className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-shadow">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">{page.preview}</div>
              <h3 className="font-semibold text-slate-900">{page.name}</h3>
              <p className="text-sm text-slate-600 mt-1">{page.description}</p>
            </div>
            
            <div className="space-y-3">
              <Badge variant="secondary" className="text-xs">
                {page.category}
              </Badge>
              
              <div className="flex justify-between text-sm text-slate-600">
                <span>{page.uses} usos</span>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span>{page.rating}</span>
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

export default Pages;
