import { useState } from 'react';

export default function Relatorios() {
  const [periodoSelecionado, setPeriodoSelecionado] = useState('hoje');

  const dadosVendas = {
    hoje: {
      vendas: 1250.00,
      pedidos: 47,
      ticketMedio: 26.60,
      crescimento: '+12%'
    },
    semana: {
      vendas: 8750.00,
      pedidos: 329,
      ticketMedio: 26.60,
      crescimento: '+8%'
    },
    mes: {
      vendas: 35200.00,
      pedidos: 1324,
      ticketMedio: 26.58,
      crescimento: '+15%'
    }
  };

  const produtosMaisVendidos = [
    { 
      nome: 'Pastel de Carne', 
      quantidade: 45, 
      receita: 382.50, 
      porcentagem: 38,
      tendencia: 'up'
    },
    { 
      nome: 'Pastel de Queijo', 
      quantidade: 38, 
      receita: 285.00, 
      porcentagem: 32,
      tendencia: 'up'
    },
    { 
      nome: 'Pastel de Frango', 
      quantidade: 32, 
      receita: 288.00, 
      porcentagem: 27,
      tendencia: 'down'
    },
    { 
      nome: 'Pastel de Palmito', 
      quantidade: 18, 
      receita: 144.00, 
      porcentagem: 15,
      tendencia: 'up'
    },
    { 
      nome: 'Pastel de Chocolate', 
      quantidade: 12, 
      receita: 84.00, 
      porcentagem: 10,
      tendencia: 'stable'
    }
  ];

  const vendasPorHorario = [
    { horario: '08:00-10:00', vendas: 85.50, pedidos: 3 },
    { horario: '10:00-12:00', vendas: 245.00, pedidos: 9 },
    { horario: '12:00-14:00', vendas: 425.00, pedidos: 16 },
    { horario: '14:00-16:00', vendas: 315.50, pedidos: 12 },
    { horario: '16:00-18:00', vendas: 179.00, pedidos: 7 }
  ];

  const periodos = [
    { value: 'hoje', label: 'Hoje', icon: '📅' },
    { value: 'semana', label: 'Esta Semana', icon: '📊' },
    { value: 'mes', label: 'Este Mês', icon: '📈' }
  ];

  const dadosAtual = dadosVendas[periodoSelecionado];

  const getTendenciaIcon = (tendencia) => {
    switch (tendencia) {
      case 'up': return '📈';
      case 'down': return '📉';
      case 'stable': return '➡️';
      default: return '➡️';
    }
  };

  const getTendenciaColor = (tendencia) => {
    switch (tendencia) {
      case 'up': return 'text-green-600';
      case 'down': return 'text-red-600';
      case 'stable': return 'text-gray-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="page-container">
      {/* Header da Página */}
      <div className="page-header">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="page-title">Relatórios & Analytics</h1>
            <p className="page-subtitle mb-0">
              Acompanhe o desempenho da sua pastelaria com dados detalhados
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2.5 px-5 rounded-lg transition-colors duration-200">
              📊 Exportar Relatório
            </button>
          </div>
        </div>
      </div>

      {/* Seletor de Período */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-3">
          {periodos.map((periodo) => (
            <button
              key={periodo.value}
              onClick={() => setPeriodoSelecionado(periodo.value)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                periodoSelecionado === periodo.value
                  ? 'bg-yellow-500 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              <span>{periodo.icon}</span>
              {periodo.label}
            </button>
          ))}
        </div>
      </div>

      {/* Cards de Métricas Principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="card-base bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-green-600 uppercase tracking-wide">Vendas</p>
              <p className="text-3xl font-bold text-green-700 mt-2">
                R$ {dadosAtual.vendas.toFixed(2)}
              </p>
              <p className="text-sm text-green-600 mt-1">
                {dadosAtual.crescimento} vs período anterior
              </p>
            </div>
            <div className="text-4xl">💰</div>
          </div>
        </div>

        <div className="card-base bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-blue-600 uppercase tracking-wide">Pedidos</p>
              <p className="text-3xl font-bold text-blue-700 mt-2">{dadosAtual.pedidos}</p>
              <p className="text-sm text-blue-600 mt-1">Pedidos processados</p>
            </div>
            <div className="text-4xl">📋</div>
          </div>
        </div>

        <div className="card-base bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-purple-600 uppercase tracking-wide">Ticket Médio</p>
              <p className="text-3xl font-bold text-purple-700 mt-2">
                R$ {dadosAtual.ticketMedio.toFixed(2)}
              </p>
              <p className="text-sm text-purple-600 mt-1">Por pedido</p>
            </div>
            <div className="text-4xl">🎯</div>
          </div>
        </div>

        <div className="card-base bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-orange-600 uppercase tracking-wide">Performance</p>
              <p className="text-3xl font-bold text-orange-700 mt-2">Excelente</p>
              <p className="text-sm text-orange-600 mt-1">Meta: 95% atingida</p>
            </div>
            <div className="text-4xl">⭐</div>
          </div>
        </div>
      </div>

      {/* Layout em Grid para os próximos gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Produtos Mais Vendidos */}
        <div className="lg:col-span-2">
          <div className="card-base">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              🏆 Top Produtos - {periodos.find(p => p.value === periodoSelecionado)?.label}
            </h2>
            <div className="space-y-4">
              {produtosMaisVendidos.map((produto, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-8 h-8 bg-yellow-500 text-white rounded-full font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{produto.nome}</h3>
                      <p className="text-sm text-gray-600">{produto.quantidade} unidades vendidas</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-green-600">R$ {produto.receita.toFixed(2)}</span>
                      <span className={getTendenciaColor(produto.tendencia)}>{getTendenciaIcon(produto.tendencia)}</span>
                    </div>
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-yellow-500 h-2 rounded-full" 
                        style={{ width: `${produto.porcentagem}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vendas por Horário */}
        <div>
          <div className="card-base">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">⏰ Vendas por Horário</h2>
            <div className="space-y-3">
              {vendasPorHorario.map((item, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                  <div>
                    <p className="font-medium text-gray-800">{item.horario}</p>
                    <p className="text-sm text-gray-600">{item.pedidos} pedidos</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-green-600">R$ {item.vendas.toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gráfico Principal */}
      <div className="card-base">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-800">📈 Evolução das Vendas</h2>
          <div className="flex gap-2">
            <button className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded">Dia</button>
            <button className="text-sm bg-yellow-500 text-white px-3 py-1 rounded">Semana</button>
            <button className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded">Mês</button>
          </div>
        </div>
        <div className="h-80 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg flex flex-col items-center justify-center border-2 border-dashed border-gray-300">
          <div className="text-6xl mb-4">📊</div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Gráfico Interativo</h3>
          <p className="text-gray-500 text-center max-w-md">
            Em breve: gráfico interativo com dados de vendas, comparações temporais e análises detalhadas
          </p>
          <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg font-medium">
            🔧 Em Desenvolvimento
          </button>
        </div>
      </div>

      {/* Insights e Recomendações */}
      <div className="mt-8">
        <div className="card-base bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">💡 Insights & Recomendações</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-blue-800 mb-2">🎯 Oportunidades</h3>
              <ul className="space-y-2 text-sm text-blue-700">
                <li>• Horário 16h-18h tem potencial para crescer 20%</li>
                <li>• Pastéis doces estão em alta - considere mais variedades</li>
                <li>• Terças-feiras têm movimento baixo - promoções?</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-green-800 mb-2">✅ Pontos Fortes</h3>
              <ul className="space-y-2 text-sm text-green-700">
                <li>• Ticket médio 15% acima da média do setor</li>
                <li>• Pastel de Carne é um best-seller consistente</li>
                <li>• Crescimento sustentável mês a mês</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}