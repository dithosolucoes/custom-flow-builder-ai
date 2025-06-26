
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const DocsPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Documentação</h1>
        <p className="text-muted-foreground">
          Guias e referências do sistema
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Documentação do CraftSuite</CardTitle>
          <CardDescription>
            Guias completos para uso da plataforma
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            A documentação completa será disponibilizada em breve.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
