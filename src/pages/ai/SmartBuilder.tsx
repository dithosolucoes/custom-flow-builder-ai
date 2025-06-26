
import { Zap, Upload, Wand2, Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const SmartBuilder = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Smart Builder</h1>
          <p className="text-slate-600">Construa interfaces inteligentemente com IA</p>
        </div>
        <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
          <Zap className="w-3 h-3 mr-1" />
          AI Powered
        </Badge>
      </div>

      {/* Interface Principal */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Painel de Input */}
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h2 className="text-lg font-semibold mb-4">Descreva sua Interface</h2>
          
          <div className="space-y-4">
            <textarea
              placeholder="Ex: Crie um dashboard de vendas com gráficos, tabela de produtos e cards de métricas..."
              className="w-full h-32 p-4 border rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            
            <div className="flex gap-3">
              <Button variant="outline" className="flex-1">
                <Upload className="w-4 h-4 mr-2" />
                Upload de Referência
              </Button>
              <Button className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-500">
                <Wand2 className="w-4 h-4 mr-2" />
                Gerar Interface
              </Button>
            </div>
          </div>
        </div>

        {/* Preview */}
        <div className="bg-white rounded-xl border border-slate-200">
          <div className="border-b p-4 flex justify-between items-center">
            <h3 className="font-semibold">Preview</h3>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Eye className="w-4 h-4 mr-1" />
                Ver
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-1" />
                Exportar
              </Button>
            </div>
          </div>
          
          <div className="p-6 min-h-[300px] bg-slate-50 flex items-center justify-center">
            <div className="text-center text-slate-500">
              <Wand2 className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>Descreva sua interface para ver o preview</p>
            </div>
          </div>
        </div>
      </div>

      {/* Templates Sugeridos */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h2 className="text-lg font-semibold mb-4">Templates Sugeridos</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            "Dashboard Analytics",
            "E-commerce Checkout",
            "User Profile Page",
            "Admin Panel",
            "Landing Page",
            "Blog Layout"
          ].map((template) => (
            <Button key={template} variant="outline" className="p-4 h-auto">
              <div className="text-center">
                <div className="text-2xl mb-2">🎨</div>
                <div className="font-medium">{template}</div>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmartBuilder;
