
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const BuilderPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Granular Builder</h1>
        <p className="text-muted-foreground">
          Sistema de criação hierárquica de componentes
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Builder Granular</CardTitle>
          <CardDescription>
            Esta funcionalidade será implementada nas Fases 3-4
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              O Builder Granular permitirá criar e gerenciar:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-4">
              <li>🔬 Design Tokens (Prótons, Elétrons, Nêutrons)</li>
              <li>⚛️ UI Elements (Átomos)</li>
              <li>🧪 Component Groups (Moléculas)</li>
              <li>🦠 Feature Blocks (Organelas)</li>
              <li>🏗️ Complex Components (Células)</li>
              <li>🧬 Page Sections (Tecidos)</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
