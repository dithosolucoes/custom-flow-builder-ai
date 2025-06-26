
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const AnalyticsPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
        <p className="text-muted-foreground">
          Análise detalhada de performance e uso
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Analytics Avançado</CardTitle>
          <CardDescription>
            Esta funcionalidade será implementada na Fase 2
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Em breve você terá acesso a métricas detalhadas, relatórios e insights avançados.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
