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

  const quickActions = [
    { title: 'Novo Pedido', icon: '➕', color: 'bg-green-500', link: '/produtos' },
    { title: 'Ver Pedidos', icon: '📋', color: 'bg-blue-500', link: '/pedidos' },
    { title: 'Relatórios', icon: '📈', color: 'bg-purple-500', link: '/relatorios' }
  ];

  return (
    <div className="page-container">
      {/* Header simplificado */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Resumo das atividades do dia</p>
      </div>

      {/* Cards de Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <DashboardCard key={index} {...stat} />
        ))}
      </div>

      {/* Ações Rápidas */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Ações Rápidas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {quickActions.map((action, index) => (
            <Link
              key={index}
              to={action.link}
              className={`${action.color} hover:opacity-90 text-white p-6 rounded-xl transition-all duration-200 hover:scale-105`}
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl">{action.icon}</span>
                <span className="text-lg font-semibold">{action.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Status Rápido */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card-base">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Status da Loja</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Status:</span>
              <span className="text-green-600 font-medium">🟢 Aberta</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Pedidos na Fila:</span>
              <span className="text-yellow-600 font-medium">8 pendentes</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Estoque Baixo:</span>
              <span className="text-red-600 font-medium">3 produtos</span>
            </div>
          </div>
        </div>

        <div className="card-base bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Meta do Dia 🎯</h3>
          <div className="space-y-3">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Vendas:</span>
                <span className="font-medium">R$ 1.250 / R$ 2.000</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '62.5%' }}></div>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Faltam R$ 750 para atingir a meta diária
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}