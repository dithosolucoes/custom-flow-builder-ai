
import { useState } from "react";
import { Zap, Upload, Wand2, Download, Eye, Sparkles, Code, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useDesignSystemStore } from "@/store/designSystemStore";
import { toast } from "sonner";

const SmartBuilder = () => {
  const [prompt, setPrompt] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [previewMode, setPreviewMode] = useState<'code' | 'preview'>('code');
  const { addComponent } = useDesignSystemStore();

  const templates = [
    {
      name: "Dashboard Analytics",
      description: "Dashboard com gráficos e métricas",
      prompt: "Crie um dashboard de analytics com cards de métricas, gráfico de linhas e tabela de dados recentes"
    },
    {
      name: "E-commerce Checkout",
      description: "Formulário de checkout completo",
      prompt: "Crie um formulário de checkout para e-commerce com dados pessoais, endereço, pagamento e resumo do pedido"
    },
    {
      name: "User Profile Page",
      description: "Página de perfil do usuário",
      prompt: "Crie uma página de perfil com foto, informações pessoais, configurações e histórico de atividades"
    },
    {
      name: "Admin Panel",
      description: "Painel administrativo",
      prompt: "Crie um painel admin com sidebar, tabela de usuários, gráficos de estatísticas e botões de ação"
    },
    {
      name: "Landing Page",
      description: "Página de destino moderna",
      prompt: "Crie uma landing page com hero section, features, testimonials e call-to-action"
    },
    {
      name: "Blog Layout",
      description: "Layout para blog",
      prompt: "Crie um layout de blog com lista de posts, sidebar com categorias e widget de posts populares"
    }
  ];

  const generateInterface = async () => {
    if (!prompt.trim()) {
      toast.error("Descreva sua interface primeiro!");
      return;
    }

    setIsGenerating(true);
    toast.info("Gerando interface...");

    // Simulação de geração de código com IA
    setTimeout(() => {
      const mockCode = generateMockCode(prompt);
      setGeneratedCode(mockCode);
      setIsGenerating(false);
      toast.success("Interface gerada com sucesso!");
    }, 2000);
  };

  const generateMockCode = (description: string) => {
    // Lógica simplificada para gerar código baseado na descrição
    const lowercaseDesc = description.toLowerCase();
    
    if (lowercaseDesc.includes('dashboard')) {
      return `<div className="p-6 space-y-6">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-2">Total Vendas</h3>
      <p className="text-3xl font-bold text-blue-600">R$ 45.230</p>
      <p className="text-sm text-gray-600">+12% este mês</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-2">Usuários Ativos</h3>
      <p className="text-3xl font-bold text-green-600">1.234</p>
      <p className="text-sm text-gray-600">+8% este mês</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-2">Conversão</h3>
      <p className="text-3xl font-bold text-purple-600">3.2%</p>
      <p className="text-sm text-gray-600">+0.5% este mês</p>
    </div>
  </div>
  
  <div className="bg-white p-6 rounded-lg shadow">
    <h3 className="text-lg font-semibold mb-4">Gráfico de Vendas</h3>
    <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
      <p className="text-gray-500">Gráfico de linhas aqui</p>
    </div>
  </div>
</div>`;
    }
    
    if (lowercaseDesc.includes('form') || lowercaseDesc.includes('checkout')) {
      return `<div className="max-w-2xl mx-auto p-6">
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-2xl font-bold mb-6">Checkout</h2>
    <form className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Nome</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Sobrenome</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input type="email" className="w-full p-2 border rounded" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Endereço</label>
        <input type="text" className="w-full p-2 border rounded" />
      </div>
      <button className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700">
        Finalizar Compra
      </button>
    </form>
  </div>
</div>`;
    }

    // Código genérico
    return `<div className="p-6">
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-2xl font-bold mb-4">Interface Gerada</h2>
    <p className="text-gray-600 mb-4">
      Baseada na descrição: "${description}"
    </p>
    <div className="space-y-4">
      <div className="bg-gray-100 p-4 rounded">
        <h3 className="font-semibold">Seção 1</h3>
        <p>Conteúdo da seção 1</p>
      </div>
      <div className="bg-gray-100 p-4 rounded">
        <h3 className="font-semibold">Seção 2</h3>
        <p>Conteúdo da seção 2</p>
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Botão de Ação
      </button>
    </div>
  </div>
</div>`;
  };

  const saveAsComponent = () => {
    if (!generatedCode) {
      toast.error("Gere uma interface primeiro!");
      return;
    }

    const name = prompt("Nome do componente:") || "Componente IA";
    addComponent({
      name,
      category: "AI Generated",
      code: generatedCode,
      preview: "🤖",
      status: "alpha"
    });
    
    toast.success(`Componente "${name}" salvo na biblioteca!`);
  };

  const exportCode = () => {
    if (!generatedCode) {
      toast.error("Gere uma interface primeiro!");
      return;
    }

    navigator.clipboard.writeText(generatedCode);
    toast.success("Código copiado para área de transferência!");
  };

  const useTemplate = (template: any) => {
    setPrompt(template.prompt);
    toast.success(`Template "${template.name}" carregado!`);
  };

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
            <Textarea
              placeholder="Ex: Crie um dashboard de vendas com gráficos, tabela de produtos e cards de métricas..."
              className="min-h-32 resize-none"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            
            <div className="flex gap-3">
              <Button variant="outline" className="flex-1">
                <Upload className="w-4 h-4 mr-2" />
                Upload de Referência
              </Button>
              <Button 
                className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-500"
                onClick={generateInterface}
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <>
                    <Sparkles className="w-4 h-4 mr-2 animate-spin" />
                    Gerando...
                  </>
                ) : (
                  <>
                    <Wand2 className="w-4 h-4 mr-2" />
                    Gerar Interface
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Preview/Code */}
        <div className="bg-white rounded-xl border border-slate-200">
          <div className="border-b p-4 flex justify-between items-center">
            <div className="flex gap-2">
              <Button
                variant={previewMode === 'code' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setPreviewMode('code')}
              >
                <Code className="w-4 h-4 mr-1" />
                Código
              </Button>
              <Button
                variant={previewMode === 'preview' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setPreviewMode('preview')}
              >
                <Eye className="w-4 h-4 mr-1" />
                Preview
              </Button>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={exportCode}>
                <Download className="w-4 h-4 mr-1" />
                Exportar
              </Button>
              <Button variant="outline" size="sm" onClick={saveAsComponent}>
                <Save className="w-4 h-4 mr-1" />
                Salvar
              </Button>
            </div>
          </div>
          
          <div className="p-6 min-h-[400px] bg-slate-50">
            {generatedCode ? (
              previewMode === 'code' ? (
                <pre className="text-sm bg-gray-900 text-green-400 p-4 rounded overflow-auto h-full">
                  <code>{generatedCode}</code>
                </pre>
              ) : (
                <div 
                  className="h-full bg-white rounded border"
                  dangerouslySetInnerHTML={{ __html: generatedCode }}
                />
              )
            ) : (
              <div className="flex items-center justify-center h-full text-slate-500">
                <div className="text-center">
                  <Wand2 className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p>Descreva sua interface para ver o resultado</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Templates Sugeridos */}
      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Templates Sugeridos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {templates.map((template) => (
              <Button 
                key={template.name} 
                variant="outline" 
                className="p-4 h-auto text-left flex-col items-start"
                onClick={() => useTemplate(template)}
              >
                <div className="text-2xl mb-2">🎨</div>
                <div className="font-medium text-sm">{template.name}</div>
                <div className="text-xs text-gray-500 mt-1">{template.description}</div>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SmartBuilder;
