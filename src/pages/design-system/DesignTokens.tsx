
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Palette, Type, Ruler, Layers, Plus, Save } from "lucide-react";

const DesignTokens = () => {
  const colorTokens = [
    { name: "Primary", value: "#3B82F6", usage: "Buttons, links" },
    { name: "Secondary", value: "#64748B", usage: "Text, borders" },
    { name: "Success", value: "#10B981", usage: "Success states" },
    { name: "Warning", value: "#F59E0B", usage: "Warning states" },
    { name: "Error", value: "#EF4444", usage: "Error states" },
  ];

  const spacingTokens = [
    { name: "xs", value: "4px", usage: "Small gaps" },
    { name: "sm", value: "8px", usage: "Component padding" },
    { name: "md", value: "16px", usage: "Standard spacing" },
    { name: "lg", value: "24px", usage: "Section spacing" },
    { name: "xl", value: "32px", usage: "Large spacing" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Design Tokens</h1>
          <p className="text-slate-600 mt-1">Átomos fundamentais do design system</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Save className="w-4 h-4" />
            Salvar Mudanças
          </Button>
          <Button className="gap-2 bg-gradient-to-r from-blue-500 to-indigo-500">
            <Plus className="w-4 h-4" />
            Novo Token
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Colors */}
        <Card className="bg-white/70 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="w-5 h-5 text-blue-600" />
              Paleta de Cores
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {colorTokens.map((color, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:bg-slate-50">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-8 h-8 rounded-lg border-2 border-white shadow-sm"
                    style={{ backgroundColor: color.value }}
                  />
                  <div>
                    <div className="font-medium text-slate-900">{color.name}</div>
                    <div className="text-sm text-slate-500">{color.usage}</div>
                  </div>
                </div>
                <Badge variant="secondary" className="font-mono text-xs">
                  {color.value}
                </Badge>
              </div>
            ))}
            <Button variant="outline" className="w-full gap-2">
              <Plus className="w-4 h-4" />
              Adicionar Cor
            </Button>
          </CardContent>
        </Card>

        {/* Spacing */}
        <Card className="bg-white/70 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Ruler className="w-5 h-5 text-green-600" />
              Espaçamentos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {spacingTokens.map((spacing, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:bg-slate-50">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded border flex items-center justify-center">
                    <div 
                      className="bg-blue-500 rounded"
                      style={{ 
                        width: Math.max(2, parseInt(spacing.value) / 2), 
                        height: Math.max(2, parseInt(spacing.value) / 2) 
                      }}
                    />
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">{spacing.name}</div>
                    <div className="text-sm text-slate-500">{spacing.usage}</div>
                  </div>
                </div>
                <Badge variant="secondary" className="font-mono text-xs">
                  {spacing.value}
                </Badge>
              </div>
            ))}
            <Button variant="outline" className="w-full gap-2">
              <Plus className="w-4 h-4" />
              Adicionar Espaçamento
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Typography */}
      <Card className="bg-white/70 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Type className="w-5 h-5 text-purple-600" />
            Tipografia
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h3 className="font-medium text-slate-900">Headings</h3>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-slate-900">Heading 1</div>
                <div className="text-3xl font-bold text-slate-900">Heading 2</div>
                <div className="text-2xl font-bold text-slate-900">Heading 3</div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium text-slate-900">Body</h3>
              <div className="space-y-2">
                <div className="text-base text-slate-900">Body Large</div>
                <div className="text-sm text-slate-900">Body Medium</div>
                <div className="text-xs text-slate-900">Body Small</div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium text-slate-900">Special</h3>
              <div className="space-y-2">
                <div className="font-mono text-sm bg-slate-100 p-2 rounded">Code</div>
                <div className="font-medium text-sm text-slate-600">Caption</div>
                <div className="text-xs uppercase tracking-wider text-slate-500">Label</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DesignTokens;
