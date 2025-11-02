import { Link } from 'react-router-dom';
import DashboardCard from '../components/DashboardCard';

export default function Dashboard() {
  const stats = [
    {
      title: 'Vendas Hoje',
      value: 'R$ 1.250,00',
      description: '+12% em relação a ontem',
      icon: '💰',
      color: 'green'
    },
    {
      title: 'Pedidos Hoje',
      value: '47',
      description: '8 pendentes',
      icon: '📋',
      color: 'blue'
    },
    {
      title: 'Produtos Ativos',
      value: '23',
      description: '3 em baixo estoque',
      icon: '🧁',
      color: 'yellow'
    },
    {
      title: 'Clientes',
      value: '156',
      description: '12 novos esta semana',
      icon: '👥',
      color: 'purple'
    }
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'pedido',
      icon: '🛍️',
      title: 'Novo pedido #1234',
      description: 'Cliente: João Silva - 2x Pastel de Carne',
      time: '2 min atrás',
      status: 'success'
    },
    {
      id: 2,
      type: 'produto',
      icon: '➕',
      title: 'Produto adicionado',
      description: 'Pastel de Palmito - R$ 8,00',
      time: '15 min atrás',
      status: 'info'
    },
    {
      id: 3,
      type: 'estoque',
      icon: '⚠️',
      title: 'Alerta de estoque',
      description: 'Catupiry está acabando (5 unidades)',
      time: '30 min atrás',
      status: 'warning'
    },
    {
      id: 4,
      type: 'relatorio',
      icon: '📊',
      title: 'Relatório gerado',
      description: 'Vendas do mês - Outubro 2025',
      time: '1 hora atrás',
      status: 'info'
    }
  ];

  const quickActions = [
    { title: 'Novo Pedido', icon: '➕', color: 'bg-green-500', link: '/pedidos' },
    { title: 'Ver Produtos', icon: '🧁', color: 'bg-yellow-500', link: '/produtos' },
    { title: 'Relatórios', icon: '📈', color: 'bg-blue-500', link: '/relatorios' },
    { title: 'Configurações', icon: '⚙️', color: 'bg-gray-500', link: '/about' }
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case 'success': return 'border-l-green-500 bg-green-50';
      case 'warning': return 'border-l-yellow-500 bg-yellow-50';
      case 'info': return 'border-l-blue-500 bg-blue-50';
      default: return 'border-l-gray-500 bg-gray-50';
    }
  };

  return (
    <div className="page-container">
      {/* Header da Página */}
      <div className="page-header">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="page-title">Dashboard</h1>
            <p className="page-subtitle mb-0">
              Bem-vindo de volta! Aqui está um resumo das suas operações hoje.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="text-sm text-gray-500">
              📅 {new Date().toLocaleDateString('pt-BR', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Cards de Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <DashboardCard key={index} {...stat} />
        ))}
      </div>

      {/* Ações Rápidas */}
      <div className="mb-8">
        <h2 className="section-title">Ações Rápidas</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <Link
              key={index}
              to={action.link}
              className={`${action.color} hover:opacity-90 text-white p-6 rounded-xl text-center transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg`}
            >
              <div className="text-3xl mb-2">{action.icon}</div>
              <div className="font-semibold">{action.title}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* Layout em Grid para as próximas seções */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Atividade Recente */}
        <div className="lg:col-span-2">
          <div className="card-base">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Atividade Recente</h2>
              <Link to="/relatorios" className="text-yellow-600 hover:text-yellow-700 text-sm font-medium">
                Ver todos →
              </Link>
            </div>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className={`p-4 rounded-lg border-l-4 ${getStatusStyle(activity.status)} transition-all duration-200 hover:shadow-sm`}
                >
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">{activity.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-gray-800">{activity.title}</p>
                        <span className="text-xs text-gray-500">{activity.time}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Resumo Rápido */}
        <div className="space-y-6">
          {/* Status da Loja */}
          <div className="card-base">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Status da Loja</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Status</span>
                <span className="flex items-center gap-2 text-green-600 font-medium">
                  🟢 Aberta
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Pedidos na fila</span>
                <span className="font-semibold text-gray-800">8</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Tempo médio preparo</span>
                <span className="font-semibold text-gray-800">12 min</span>
              </div>
            </div>
          </div>

          {/* Meta do Dia */}
          <div className="card-base bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Meta do Dia 🎯</h3>
            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600">Vendas</span>
                  <span className="font-semibold">R$ 1.250 / R$ 2.000</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '62.5%' }}></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">62% da meta diária</p>
              </div>
              <div className="pt-3 border-t border-yellow-200">
                <p className="text-sm text-gray-600 mb-2">💪 Você está indo bem!</p>
                <p className="text-xs text-gray-500">Faltam R$ 750 para bater a meta</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}