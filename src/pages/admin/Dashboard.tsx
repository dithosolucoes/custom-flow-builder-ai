
import React from 'react';
import { StatCard } from '@/components/admin/StatCard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Activity, TrendingUp, Layers, Clock, CheckCircle } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Mock data for the chart
const chartData = [
  { name: 'Jan', value: 400 },
  { name: 'Fev', value: 600 },
  { name: 'Mar', value: 800 },
  { name: 'Abr', value: 700 },
  { name: 'Mai', value: 900 },
  { name: 'Jun', value: 1100 },
];

// Mock recent activities
const recentActivities = [
  {
    id: 1,
    user: 'João Silva',
    action: 'criou novo componente',
    target: 'Button Primary',
    time: '2 min atrás',
    type: 'create'
  },
  {
    id: 2,
    user: 'Maria Rosa',
    action: 'aprovou',
    target: '3 componentes da IA',
    time: '5 min atrás',
    type: 'approve'
  },
  {
    id: 3,
    user: 'Sistema IA',
    action: 'descobriu padrão no',
    target: 'Dribbble',
    time: '12 min atrás',
    type: 'discover'
  },
  {
    id: 4,
    user: 'Pedro Santos',
    action: 'editou template',
    target: 'Dashboard Layout',
    time: '1 hora atrás',
    type: 'edit'
  },
];

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Visão geral do seu CraftSuite
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Usuários Ativos"
          value="1,247"
          icon={Users}
          trend={{ value: 15, label: 'vs mês passado', positive: true }}
        />
        <StatCard
          title="Componentes"
          value="3,891"
          icon={Layers}
          trend={{ value: 234, label: 'novos este mês', positive: true }}
        />
        <StatCard
          title="Templates"
          value="156"
          icon={Activity}
          trend={{ value: 12, label: 'vs mês passado', positive: true }}
        />
        <StatCard
          title="Taxa de Sucesso IA"
          value="94.2%"
          icon={TrendingUp}
          description="Auto-aprovação"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Atividade Mensal</CardTitle>
            <CardDescription>
              Componentes criados nos últimos 6 meses
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle>Atividades Recentes</CardTitle>
            <CardDescription>
              Últimas ações no sistema
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex-shrink-0 mt-1">
                    {activity.type === 'create' && <CheckCircle className="h-4 w-4 text-green-500" />}
                    {activity.type === 'approve' && <CheckCircle className="h-4 w-4 text-blue-500" />}
                    {activity.type === 'discover' && <TrendingUp className="h-4 w-4 text-purple-500" />}
                    {activity.type === 'edit' && <Activity className="h-4 w-4 text-orange-500" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm">
                      <span className="font-medium">{activity.user}</span>
                      {' '}{activity.action}{' '}
                      <span className="font-medium">{activity.target}</span>
                    </p>
                    <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {activity.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Curator Status */}
      <Card>
        <CardHeader>
          <CardTitle>Status do Curador IA</CardTitle>
          <CardDescription>
            Monitoramento em tempo real do sistema de descoberta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="text-center p-4 rounded-lg bg-green-50 dark:bg-green-900/20">
              <div className="text-2xl font-bold text-green-700 dark:text-green-400">15</div>
              <div className="text-sm text-green-600 dark:text-green-300">Fontes Ativas</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20">
              <div className="text-2xl font-bold text-blue-700 dark:text-blue-400">47</div>
              <div className="text-sm text-blue-600 dark:text-blue-300">Na Fila</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20">
              <div className="text-2xl font-bold text-purple-700 dark:text-purple-400">12</div>
              <div className="text-sm text-purple-600 dark:text-purple-300">Auto-aprovados Hoje</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-orange-50 dark:bg-orange-900/20">
              <div className="text-2xl font-bold text-orange-700 dark:text-orange-400">8</div>
              <div className="text-sm text-orange-600 dark:text-orange-300">Aguardando Revisão</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
