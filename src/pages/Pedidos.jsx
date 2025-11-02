import { useState } from 'react';

export default function Pedidos() {
  const [filtroStatus, setFiltroStatus] = useState('todos');
  
  const pedidos = [
    {
      id: '#001',
      cliente: 'João Silva',
      telefone: '(11) 99999-9999',
      itens: [
        { nome: 'Pastel de Carne', quantidade: 2, preco: 8.50 },
        { nome: 'Pastel de Queijo', quantidade: 1, preco: 7.50 }
      ],
      total: 24.50,
      status: 'Preparando',
      hora: '14:30',
      tempoEstimado: '15 min',
      observacoes: 'Sem cebola no pastel de carne'
    },
    {
      id: '#002',
      cliente: 'Maria Santos',
      telefone: '(11) 88888-8888',
      itens: [
        { nome: 'Pastel de Frango', quantidade: 1, preco: 9.00 },
        { nome: 'Refrigerante', quantidade: 1, preco: 3.00 }
      ],
      total: 12.00,
      status: 'Pronto',
      hora: '14:45',
      tempoEstimado: 'Pronto',
      observacoes: ''
    },
    {
      id: '#003',
      cliente: 'Pedro Costa',
      telefone: '(11) 77777-7777',
      itens: [
        { nome: 'Pastel de Queijo', quantidade: 3, preco: 7.50 }
      ],
      total: 22.50,
      status: 'Pendente',
      hora: '15:00',
      tempoEstimado: 'Aguardando',
      observacoes: 'Cliente vai retirar'
    },
    {
      id: '#004',
      cliente: 'Ana Oliveira',
      telefone: '(11) 66666-6666',
      itens: [
        { nome: 'Pastel de Palmito', quantidade: 2, preco: 8.00 },
        { nome: 'Pastel de Chocolate', quantidade: 1, preco: 7.00 }
      ],
      total: 23.00,
      status: 'Entregue',
      hora: '14:15',
      tempoEstimado: 'Concluído',
      observacoes: ''
    }
  ];

  const pedidosFiltrados = pedidos.filter(pedido => 
    filtroStatus === 'todos' || pedido.status.toLowerCase() === filtroStatus.toLowerCase()
  );

  const statusOptions = [
    { value: 'todos', label: 'Todos', count: pedidos.length, color: 'gray' },
    { value: 'pendente', label: 'Pendentes', count: pedidos.filter(p => p.status === 'Pendente').length, color: 'red' },
    { value: 'preparando', label: 'Preparando', count: pedidos.filter(p => p.status === 'Preparando').length, color: 'yellow' },
    { value: 'pronto', label: 'Prontos', count: pedidos.filter(p => p.status === 'Pronto').length, color: 'green' },
    { value: 'entregue', label: 'Entregues', count: pedidos.filter(p => p.status === 'Entregue').length, color: 'blue' }
  ];

  const getStatusConfig = (status) => {
    switch (status) {
      case 'Preparando':
        return { 
          color: 'status-preparing', 
          icon: '👨‍🍳', 
          bgColor: 'bg-yellow-50 border-yellow-200',
          action: { label: 'Marcar como Pronto', color: 'btn-success' }
        };
      case 'Pronto':
        return { 
          color: 'status-ready', 
          icon: '✅', 
          bgColor: 'bg-green-50 border-green-200',
          action: { label: 'Entregar', color: 'btn-secondary' }
        };
      case 'Pendente':
        return { 
          color: 'status-pending', 
          icon: '⏳', 
          bgColor: 'bg-red-50 border-red-200',
          action: { label: 'Aceitar Pedido', color: 'btn-primary' }
        };
      case 'Entregue':
        return { 
          color: 'bg-blue-100 text-blue-800', 
          icon: '🏁', 
          bgColor: 'bg-blue-50 border-blue-200',
          action: null
        };
      default:
        return { 
          color: 'bg-gray-100 text-gray-800', 
          icon: '❓', 
          bgColor: 'bg-gray-50 border-gray-200',
          action: null
        };
    }
  };

  return (
    <div className="page-container">
      {/* Header da Página */}
      <div className="page-header">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="page-title">Gerenciamento de Pedidos</h1>
            <p className="page-subtitle mb-0">
              Acompanhe e gerencie todos os pedidos da sua pastelaria em tempo real
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <button className="btn-primary">
              ➕ Novo Pedido
            </button>
          </div>
        </div>
      </div>

      {/* Filtros por Status */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-3">
          {statusOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setFiltroStatus(option.value)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                filtroStatus === option.value
                  ? 'bg-yellow-500 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {option.label}
              <span className={`px-2 py-1 rounded-full text-xs ${
                filtroStatus === option.value 
                  ? 'bg-white text-yellow-500' 
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {option.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Estatísticas Rápidas */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="card-base text-center">
          <div className="text-2xl font-bold text-gray-800">{pedidos.length}</div>
          <div className="text-sm text-gray-600">Total de Pedidos</div>
        </div>
        <div className="card-base text-center">
          <div className="text-2xl font-bold text-yellow-600">{pedidos.filter(p => p.status === 'Preparando').length}</div>
          <div className="text-sm text-gray-600">Em Preparo</div>
        </div>
        <div className="card-base text-center">
          <div className="text-2xl font-bold text-green-600">
            R$ {pedidos.reduce((acc, p) => acc + p.total, 0).toFixed(2)}
          </div>
          <div className="text-sm text-gray-600">Valor Total</div>
        </div>
        <div className="card-base text-center">
          <div className="text-2xl font-bold text-blue-600">12 min</div>
          <div className="text-sm text-gray-600">Tempo Médio</div>
        </div>
      </div>

      {/* Lista de Pedidos */}
      <div className="space-y-4">
        {pedidosFiltrados.map((pedido) => {
          const statusConfig = getStatusConfig(pedido.status);
          return (
            <div
              key={pedido.id}
              className={`card-base ${statusConfig.bgColor} border-l-4 hover:shadow-lg transition-all duration-200`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Informações Principais */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <h3 className="text-xl font-bold text-gray-800">Pedido {pedido.id}</h3>
                    <span className={`status-badge ${statusConfig.color} flex items-center gap-1`}>
                      <span>{statusConfig.icon}</span>
                      {pedido.status}
                    </span>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {pedido.tempoEstimado}
                    </span>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-gray-600 mb-1">
                        <span className="font-medium">Cliente:</span> {pedido.cliente}
                      </p>
                      <p className="text-gray-600 mb-1">
                        <span className="font-medium">Telefone:</span> {pedido.telefone}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medium">Horário:</span> {pedido.hora}
                      </p>
                    </div>
                    
                    <div>
                      <p className="font-medium text-gray-700 mb-2">Itens do Pedido:</p>
                      <div className="space-y-1">
                        {pedido.itens.map((item, index) => (
                          <div key={index} className="flex justify-between text-sm">
                            <span>{item.quantidade}x {item.nome}</span>
                            <span className="font-medium">R$ {(item.quantidade * item.preco).toFixed(2)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {pedido.observacoes && (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                      <p className="text-sm">
                        <span className="font-medium text-yellow-800">Observações:</span>
                        <span className="text-yellow-700 ml-2">{pedido.observacoes}</span>
                      </p>
                    </div>
                  )}
                </div>

                {/* Ações e Total */}
                <div className="flex lg:flex-col items-center lg:items-end gap-4">
                  <div className="text-center lg:text-right">
                    <p className="text-sm text-gray-600 mb-1">Total do Pedido</p>
                    <p className="text-3xl font-bold text-green-600">
                      R$ {pedido.total.toFixed(2)}
                    </p>
                  </div>
                  
                  <div className="flex gap-2">
                    {statusConfig.action && (
                      <button className={statusConfig.action.color}>
                        {statusConfig.action.label}
                      </button>
                    )}
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 px-4 rounded-lg transition-colors duration-200">
                      📱 Ligar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mensagem quando não há pedidos */}
      {pedidosFiltrados.length === 0 && (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">📋</div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Nenhum pedido encontrado
          </h3>
          <p className="text-gray-500 mb-6">
            {filtroStatus === 'todos' 
              ? 'Ainda não há pedidos cadastrados' 
              : `Não há pedidos com status "${filtroStatus}"`
            }
          </p>
          <button
            onClick={() => setFiltroStatus('todos')}
            className="btn-primary"
          >
            Ver Todos os Pedidos
          </button>
        </div>
      )}
    </div>
  );
}