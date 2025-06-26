
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Box, Search, Filter, Code, Eye, Trash2, Edit } from "lucide-react";
import { useDesignSystemStore } from "@/store/designSystemStore";
import CreateComponentModal from "@/components/modals/CreateComponentModal";
import { useState } from "react";
import { toast } from "sonner";

const Components = () => {
  const { components, deleteComponent } = useDesignSystemStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredComponents = components.filter(component => {
    const matchesSearch = component.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         component.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || component.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ["all", ...Array.from(new Set(components.map(c => c.category)))];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'stable': return 'bg-green-100 text-green-700';
      case 'beta': return 'bg-yellow-100 text-yellow-700';
      case 'alpha': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const handleDelete = (id: string, name: string) => {
    if (confirm(`Tem certeza que deseja deletar o componente "${name}"?`)) {
      deleteComponent(id);
      toast.success(`Componente "${name}" removido!`);
    }
  };

  const handlePreview = (component: any) => {
    toast.info(`Preview do ${component.name} - Em desenvolvimento`);
  };

  const handleViewCode = (component: any) => {
    navigator.clipboard.writeText(component.code);
    toast.success("Código copiado para área de transferência!");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Components Library</h1>
          <p className="text-slate-600 mt-1">
            {components.length} componentes • {filteredComponents.length} exibidos
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Filter className="w-4 h-4" />
            Filtros
          </Button>
          <CreateComponentModal />
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
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select 
              className="px-3 py-2 border rounded-md"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat === 'all' ? 'Todas Categorias' : cat}
                </option>
              ))}
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Components Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredComponents.map((component) => (
          <Card key={component.id} className="bg-white/70 backdrop-blur-sm hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg flex items-center justify-center">
                    {component.preview ? (
                      <span className="text-sm">{component.preview}</span>
                    ) : (
                      <Box className="w-4 h-4 text-white" />
                    )}
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
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm">
                  <span className="text-slate-500">Usado </span>
                  <span className="font-medium text-slate-900">{component.usage}x</span>
                  <span className="text-slate-500"> este mês</span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="flex-1 gap-1"
                  onClick={() => handlePreview(component)}
                >
                  <Eye className="w-3 h-3" />
                  Preview
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="flex-1 gap-1"
                  onClick={() => handleViewCode(component)}
                >
                  <Code className="w-3 h-3" />
                  Código
                </Button>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => handleDelete(component.id, component.name)}
                >
                  <Trash2 className="w-3 h-3 text-red-500" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredComponents.length === 0 && (
        <Card className="bg-white/70 backdrop-blur-sm">
          <CardContent className="py-12 text-center">
            <Box className="w-12 h-12 mx-auto mb-4 text-slate-400" />
            <h3 className="font-semibold text-slate-900 mb-2">Nenhum componente encontrado</h3>
            <p className="text-slate-600 mb-4">
              {searchTerm || selectedCategory !== 'all'
                ? 'Tente ajustar os filtros de busca'
                : 'Crie seu primeiro componente para começar'
              }
            </p>
            {!searchTerm && selectedCategory === 'all' && <CreateComponentModal />}
          </CardContent>
        </Card>
      )}

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
          <Button 
            className="gap-2 bg-gradient-to-r from-blue-500 to-purple-500"
            onClick={() => window.open('/builder', '_blank')}
          >
            <Box className="w-4 h-4" />
            Abrir Builder
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Components;
