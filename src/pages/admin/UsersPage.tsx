
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const UsersPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Usuários</h1>
        <p className="text-muted-foreground">
          Gerencie usuários e equipes do sistema
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Gerenciamento de Usuários</CardTitle>
          <CardDescription>
            Esta funcionalidade será implementada na Fase 2
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Em breve você poderá gerenciar usuários, criar equipes e definir permissões.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
