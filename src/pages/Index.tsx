
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Sparkles, Layers, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Layers className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              CraftSuite
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link to="/login">Entrar</Link>
            </Button>
            <Button asChild>
              <Link to="/admin">
                Admin <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Construa Interfaces
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent block">
                Granulares
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Sistema hierárquico de componentes que vai desde átomos até organismos completos, 
              com IA integrada para descoberta e curadoria automática.
            </p>
          </div>

          <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center">
            <Button size="lg" className="gap-2" asChild>
              <Link to="/admin">
                <Sparkles className="h-4 w-4" />
                Começar Agora
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/login">
                Fazer Login
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-24 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Funcionalidades Principais
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-lg dark:text-gray-400">
            Tudo que você precisa para criar e gerenciar sistemas de design complexos
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="transition-all duration-200 hover:shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="rounded-lg bg-primary/10 p-2">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Sistema Granular</CardTitle>
              </div>
              <CardDescription>
                Construa desde design tokens até aplicações completas usando nossa hierarquia estruturada
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>🔬 Design Tokens (Prótons, Elétrons, Nêutrons)</li>
                <li>⚛️ UI Elements (Átomos)</li>
                <li>🧪 Component Groups (Moléculas)</li>
                <li>🦠 Feature Blocks (Organelas)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="transition-all duration-200 hover:shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="rounded-lg bg-primary/10 p-2">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>IA Curator</CardTitle>
              </div>
              <CardDescription>
                Descoberta automática de padrões e componentes em fontes externas com aprovação inteligente
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>🔍 Scanning automático de mercado</li>
                <li>🧠 Análise e classificação com IA</li>
                <li>📚 Biblioteca curada automaticamente</li>
                <li>✅ Sistema de aprovação inteligente</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="transition-all duration-200 hover:shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="rounded-lg bg-primary/10 p-2">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Gestão Completa</CardTitle>
              </div>
              <CardDescription>
                Painel administrativo completo com analytics, usuários e configurações avançadas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>👥 Gestão de usuários e equipes</li>
                <li>📊 Analytics detalhado</li>
                <li>⚙️ Configurações do sistema</li>
                <li>🔒 Controle de permissões</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-24">
        <Card className="mx-auto max-w-2xl text-center">
          <CardHeader className="space-y-4">
            <CardTitle className="text-2xl">
              Pronto para revolucionar seu workflow?
            </CardTitle>
            <CardDescription>
              Comece a usar o CraftSuite hoje e experimente o futuro do design system
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button size="lg" className="gap-2" asChild>
              <Link to="/admin">
                <Sparkles className="h-4 w-4" />
                Entrar no Admin
              </Link>
            </Button>
            <p className="text-xs text-muted-foreground">
              Use as credenciais de teste disponíveis na tela de login
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8">
        <div className="container text-center text-sm text-muted-foreground">
          <p>&copy; 2024 CraftSuite. Construído com ❤️ para designers e desenvolvedores.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
