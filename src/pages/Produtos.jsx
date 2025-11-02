import { useState } from 'react';
import CardProduto from '../components/CardProduto';
import Toast from '../components/Toast';

const produtos = [
  {
    id: 1,
    nome: 'Pastel de Carne',
    preco: 8.50,
    descricao: 'Delicioso pastel recheado com carne temperada e temperos especiais',
    imagem: 'https://via.placeholder.com/300x200/FDE047/000000?text=Pastel+de+Carne',
    categoria: 'salgados',
    popular: true
  },
  {
    id: 2,
    nome: 'Pastel de Queijo',
    preco: 7.50,
    descricao: 'Saboroso pastel com muito queijo derretido de primeira qualidade',
    imagem: 'https://via.placeholder.com/300x200/F59E0B/000000?text=Pastel+de+Queijo',
    categoria: 'salgados',
    popular: true
  },
  {
    id: 3,
    nome: 'Pastel de Frango',
    preco: 9.00,
    descricao: 'Irresistível pastel de frango desfiado com catupiry cremoso',
    imagem: 'https://via.placeholder.com/300x200/EAB308/000000?text=Pastel+de+Frango',
    categoria: 'salgados',
    popular: false
  },
  {
    id: 4,
    nome: 'Pastel de Palmito',
    preco: 8.00,
    descricao: 'Refrescante pastel de palmito com temperos selecionados',
    imagem: 'https://via.placeholder.com/300x200/84CC16/000000?text=Pastel+de+Palmito',
    categoria: 'salgados',
    popular: false
  },
  {
    id: 5,
    nome: 'Pastel de Banana com Canela',
    preco: 6.50,
    descricao: 'Doce e aromático pastel de banana com canela polvilhada',
    imagem: 'https://via.placeholder.com/300x200/F97316/000000?text=Pastel+Doce',
    categoria: 'doces',
    popular: true
  },
  {
    id: 6,
    nome: 'Pastel de Chocolate',
    preco: 7.00,
    descricao: 'Irresistível pastel doce com chocolate derretido cremoso',
    imagem: 'https://via.placeholder.com/300x200/DC2626/000000?text=Pastel+Chocolate',
    categoria: 'doces',
    popular: false
  }
];

export default function Produtos() {
  const [filtroCategoria, setFiltroCategoria] = useState('todos');
  const [filtroPopular, setFiltroPopular] = useState(false);
  const [carrinho, setCarrinho] = useState([]);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState('success');
  
  // Estados para PDV
  const [tipoPedido, setTipoPedido] = useState('retirada');
  const [dadosCliente, setDadosCliente] = useState({
    nome: '',
    telefone: '',
    endereco: '',
    formaPagamento: 'dinheiro'
  });

  const produtosFiltrados = produtos.filter(produto => {
    const passaCategoria = filtroCategoria === 'todos' || produto.categoria === filtroCategoria;
    const passaPopular = !filtroPopular || produto.popular;
    return passaCategoria && passaPopular;
  });

  const adicionarAoCarrinho = (produto) => {
    const itemExistente = carrinho.find(item => item.id === produto.id);
    
    setCarrinho(prevCarrinho => {
      if (itemExistente) {
        return prevCarrinho.map(item =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      } else {
        return [...prevCarrinho, { ...produto, quantidade: 1 }];
      }
    });

    showToastMessage(
      itemExistente 
        ? `${produto.nome} quantidade aumentada!`
        : `${produto.nome} adicionado ao pedido! 🎉`
    );
  };

  const removerDoCarrinho = (produtoId) => {
    setCarrinho(prevCarrinho => 
      prevCarrinho.filter(item => item.id !== produtoId)
    );
    showToastMessage('Item removido do pedido', 'warning');
  };

  const atualizarQuantidade = (produtoId, novaQuantidade) => {
    if (novaQuantidade <= 0) {
      removerDoCarrinho(produtoId);
      return;
    }
    
    setCarrinho(prevCarrinho =>
      prevCarrinho.map(item =>
        item.id === produtoId
          ? { ...item, quantidade: novaQuantidade }
          : item
      )
    );
  };

  const showToastMessage = (message, type = 'success') => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const limparPedido = () => {
    setCarrinho([]);
    setDadosCliente({
      nome: '',
      telefone: '',
      endereco: '',
      formaPagamento: 'dinheiro'
    });
    setTipoPedido('retirada');
    showToastMessage('Pedido limpo com sucesso!', 'info');
  };

  const finalizarPedido = () => {
    // Validações
    if (!dadosCliente.nome.trim()) {
      showToastMessage('Nome do cliente é obrigatório!', 'error');
      return;
    }
    
    if (!dadosCliente.telefone.trim()) {
      showToastMessage('Telefone do cliente é obrigatório!', 'error');
      return;
    }
    
    if (tipoPedido === 'entrega' && !dadosCliente.endereco.trim()) {
      showToastMessage('Endereço é obrigatório para entrega!', 'error');
      return;
    }

    if (carrinho.length === 0) {
      showToastMessage('Adicione itens ao pedido!', 'error');
      return;
    }

    // Criar pedido
    const pedido = {
      id: Date.now(),
      itens: carrinho,
      cliente: dadosCliente,
      tipo: tipoPedido,
      total: totalCarrinho,
      data: new Date().toISOString(),
      status: 'pendente'
    };

    // Salvar no localStorage
    const pedidosSalvos = JSON.parse(localStorage.getItem('pedidos') || '[]');
    pedidosSalvos.push(pedido);
    localStorage.setItem('pedidos', JSON.stringify(pedidosSalvos));
    
    showToastMessage(`Pedido #${pedido.id} finalizado! Total: R$ ${totalCarrinho.toFixed(2)}`, 'success');
    
    // Limpar formulário após finalizar
    setTimeout(() => {
      limparPedido();
    }, 2000);
  };

  const totalCarrinho = carrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);
  const quantidadeTotal = carrinho.reduce((total, item) => total + item.quantidade, 0);

  const categorias = [
    { value: 'todos', label: 'Todos os Produtos', icon: '🍽️' },
    { value: 'salgados', label: 'Pastéis Salgados', icon: '🧁' },
    { value: 'doces', label: 'Pastéis Doces', icon: '🍰' }
  ];

  return (
    <div className="page-container">
      {/* Header simplificado */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Novo Pedido</h1>
        <p className="text-gray-600">Selecione os produtos do cardápio</p>
      </div>

      {/* Filtros */}
      <div className="card-base mb-8">
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
          {/* Filtro por Categoria */}
          <div className="flex flex-wrap" style={{ display: 'flex', columnGap: '16px', rowGap: '16px' }}>
            {categorias.map((categoria) => (
              <button
                key={categoria.value}
                onClick={() => setFiltroCategoria(categoria.value)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  filtroCategoria === categoria.value
                    ? 'bg-yellow-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span>{categoria.icon}</span>
                {categoria.label}
              </button>
            ))}
          </div>

          {/* Filtro Popular */}
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filtroPopular}
                onChange={(e) => setFiltroPopular(e.target.checked)}
                className="w-4 h-4 text-yellow-500 bg-gray-100 border-gray-300 rounded focus:ring-yellow-500"
              />
              <span className="text-gray-700 font-medium">⭐ Apenas Populares</span>
            </label>
          </div>
        </div>
      </div>

      {/* Contador de Produtos */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600">
          <span className="font-semibold text-gray-800">{produtosFiltrados.length}</span> produto{produtosFiltrados.length !== 1 ? 's' : ''} disponível{produtosFiltrados.length !== 1 ? 'is' : ''}
        </p>
        {quantidadeTotal > 0 && (
          <div className="text-sm bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
            {quantidadeTotal} itens no pedido
          </div>
        )}
      </div>

      {/* Grid de Produtos */}
      <div className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {produtosFiltrados.map((produto) => (
            <div key={produto.id} className="relative">
              {produto.popular && (
                <div className="absolute -top-2 -right-2 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                  ⭐ Popular
                </div>
              )}
              <CardProduto {...produto} onAdicionar={adicionarAoCarrinho} />
            </div>
          ))}
        </div>
      </div>

      {/* Carrinho no Final da Página */}
      {carrinho.length > 0 && (
        <div className="mt-16 border-t pt-12" id="carrinho-pedido">
          <div className="card-base max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
              📋 Finalizar Pedido
            </h2>

            {/* Grid Layout para Desktop */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Coluna Esquerda - Itens do Pedido */}
              <div>
                <h3 className="font-medium text-gray-800 mb-4">Itens Selecionados ({quantidadeTotal})</h3>
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {carrinho.map((item) => (
                    <div key={item.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <img 
                        src={item.imagem} 
                        alt={item.nome}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm text-gray-800 truncate">{item.nome}</h4>
                        <p className="text-xs text-gray-600">R$ {item.preco.toFixed(2)} cada</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => atualizarQuantidade(item.id, item.quantidade - 1)}
                          className="w-6 h-6 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded text-sm"
                        >
                          -
                        </button>
                        <span className="w-8 text-center text-sm font-medium">{item.quantidade}</span>
                        <button
                          onClick={() => atualizarQuantidade(item.id, item.quantidade + 1)}
                          className="w-6 h-6 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded text-sm"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removerDoCarrinho(item.id)}
                        className="text-red-500 hover:text-red-700 text-sm"
                      >
                        🗑️
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coluna Direita - Dados do Cliente */}
              <div>
                <h3 className="font-medium text-gray-800 mb-4">Dados do Cliente</h3>
                
                {/* Tipo de Pedido */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Pedido</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setTipoPedido('retirada')}
                      className={`p-3 rounded-lg font-medium transition-all duration-200 ${
                        tipoPedido === 'retirada'
                          ? 'bg-yellow-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      🏪 Retirada
                    </button>
                    <button
                      onClick={() => setTipoPedido('entrega')}
                      className={`p-3 rounded-lg font-medium transition-all duration-200 ${
                        tipoPedido === 'entrega'
                          ? 'bg-yellow-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      🚚 Entrega
                    </button>
                  </div>
                </div>

                {/* Formulário do Cliente */}
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Nome do cliente *"
                    value={dadosCliente.nome}
                    onChange={(e) => setDadosCliente({...dadosCliente, nome: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                  
                  <input
                    type="tel"
                    placeholder="Telefone para contato *"
                    value={dadosCliente.telefone}
                    onChange={(e) => setDadosCliente({...dadosCliente, telefone: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                  
                  {tipoPedido === 'entrega' && (
                    <textarea
                      placeholder="Endereço completo para entrega *"
                      value={dadosCliente.endereco}
                      onChange={(e) => setDadosCliente({...dadosCliente, endereco: e.target.value})}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none"
                    />
                  )}
                  
                  <select
                    value={dadosCliente.formaPagamento}
                    onChange={(e) => setDadosCliente({...dadosCliente, formaPagamento: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  >
                    <option value="dinheiro">💵 Dinheiro</option>
                    <option value="pix">📱 PIX</option>
                    <option value="cartao_debito">💳 Cartão de Débito</option>
                    <option value="cartao_credito">💳 Cartão de Crédito</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Resumo e Botões */}
            <div className="mt-8 pt-6 border-t">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="text-center sm:text-left">
                  <p className="text-2xl font-bold text-green-600">
                    Total: R$ {totalCarrinho.toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-600">
                    {tipoPedido === 'entrega' ? '🚚 Entrega' : '🏪 Retirada'} • {dadosCliente.formaPagamento.replace('_', ' ')}
                  </p>
                </div>
                <div className="flex gap-3">
                  <button 
                    onClick={limparPedido}
                    className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors duration-200"
                  >
                    🗑️ Limpar
                  </button>
                  <button
                    onClick={finalizarPedido}
                    disabled={!dadosCliente.nome || !dadosCliente.telefone || (tipoPedido === 'entrega' && !dadosCliente.endereco)}
                    className="px-8 py-3 bg-green-500 hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors duration-200"
                  >
                    ✅ Finalizar Pedido
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toast de Notificação */}
      <Toast 
        message={toastMessage}
        show={showToast}
        type={toastType}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
}