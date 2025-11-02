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
    descricao: 'Tentação irresistível com chocolate cremoso derretido',
    imagem: 'https://via.placeholder.com/300x200/92400E/FFFFFF?text=Pastel+Chocolate',
    categoria: 'doces',
    popular: false
  }
];

export default function Produtos() {
  const [filtroCategoria, setFiltroCategoria] = useState('todos');
  const [filtroPopular, setFiltroPopular] = useState(false);
  const [carrinho, setCarrinho] = useState([]);
  const [mostrarCarrinho, setMostrarCarrinho] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

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
    
    // Mostrar feedback visual
    setMostrarCarrinho(true);
    setTimeout(() => setMostrarCarrinho(false), 3000);

    // Mostrar toast de confirmação
    setToastMessage(
      itemExistente 
        ? `${produto.nome} adicionado novamente! (${itemExistente.quantidade + 1}x)`
        : `${produto.nome} adicionado ao carrinho! 🎉`
    );
    setShowToast(true);

    // Scroll suave para o carrinho em mobile
    if (window.innerWidth < 1024) {
      setTimeout(() => {
        const carrinhoElement = document.getElementById('carrinho-lateral');
        carrinhoElement?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 300);
    }
  };

  const removerDoCarrinho = (produtoId) => {
    setCarrinho(prevCarrinho => 
      prevCarrinho.filter(item => item.id !== produtoId)
    );
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

  const totalCarrinho = carrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);
  const quantidadeTotal = carrinho.reduce((total, item) => total + item.quantidade, 0);

  const categorias = [
    { value: 'todos', label: 'Todos os Produtos', icon: '🍽️' },
    { value: 'salgados', label: 'Pastéis Salgados', icon: '🧁' },
    { value: 'doces', label: 'Pastéis Doces', icon: '🍰' }
  ];

  return (
    <div className="page-container">
      {/* Header da Página */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Nosso Cardápio</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Descubra nossos deliciosos pastéis artesanais, feitos com ingredientes frescos e receitas tradicionais
        </p>
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
          <span className="font-semibold text-gray-800">{produtosFiltrados.length}</span> produto{produtosFiltrados.length !== 1 ? 's' : ''} encontrado{produtosFiltrados.length !== 1 ? 's' : ''}
        </p>
        <div className="text-sm text-gray-500">
          💡 Clique em "Adicionar" para incluir no seu pedido
        </div>
      </div>

      {/* Layout Principal com Grid e Carrinho */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-12">
        {/* Grid de Produtos */}
        <div className="xl:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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

        {/* Carrinho Lateral */}
        <div className="xl:col-span-1">
          <div className="sticky top-8" id="carrinho-lateral">
            <div className={`card-base transition-all duration-300 ${mostrarCarrinho ? 'ring-2 ring-yellow-400 shadow-lg' : ''}`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  🛒 Seu Pedido
                </h3>
                {quantidadeTotal > 0 && (
                  <span className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {quantidadeTotal}
                  </span>
                )}
              </div>

              {carrinho.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <div className="text-4xl mb-2">🛒</div>
                  <p className="text-sm">Nenhum item adicionado</p>
                  <p className="text-xs mt-1">Clique em "Adicionar" nos produtos</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Lista de Itens */}
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

                  {/* Total e Ações */}
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-semibold text-gray-800">Total:</span>
                      <span className="text-2xl font-bold text-green-600">
                        R$ {totalCarrinho.toFixed(2)}
                      </span>
                    </div>
                    
                    <div className="space-y-2">
                      <button className="w-full btn-primary">
                        🚀 Finalizar Pedido
                      </button>
                      <button 
                        onClick={() => setCarrinho([])}
                        className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 px-4 rounded-lg transition-colors duration-200"
                      >
                        🗑️ Limpar Carrinho
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Informações Adicionais */}
            <div className="mt-4 card-base bg-blue-50 border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">ℹ️ Informações</h4>
              <div className="text-sm text-blue-700 space-y-1">
                <p>• Tempo de preparo: 10-15 min</p>
                <p>• Delivery grátis acima de R$ 30</p>
                <p>• Aceitamos PIX, cartão e dinheiro</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mensagem quando não há produtos */}
      {produtosFiltrados.length === 0 && (
        <div className="col-span-full text-center py-16">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Nenhum produto encontrado</h3>
          <p className="text-gray-500 mb-6">Tente ajustar os filtros para ver mais opções</p>
          <button
            onClick={() => {
              setFiltroCategoria('todos');
              setFiltroPopular(false);
            }}
            className="btn-primary"
          >
            Limpar Filtros
          </button>
        </div>
      )}

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <div className="card-base bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">Gostou do que viu? 😋</h3>
          <p className="text-gray-600 mb-6">
            Nossos pastéis são feitos na hora! Visite nossa loja ou entre em contato para fazer seu pedido.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              📞 Fazer Pedido por Telefone
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2.5 px-5 rounded-lg transition-colors duration-200">
              📍 Como Chegar na Loja
            </button>
          </div>
        </div>
      </div>

      {/* Botão Carrinho Flutuante para Mobile */}
      {quantidadeTotal > 0 && (
        <div className="fixed bottom-6 right-6 lg:hidden z-50">
          <button 
            onClick={() => {
              const carrinhoElement = document.getElementById('carrinho-lateral');
              carrinhoElement?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-yellow-500 hover:bg-yellow-600 text-white p-4 rounded-full shadow-lg transition-all duration-200 hover:scale-110 bounce-in"
          >
            <div className="flex items-center gap-2">
              <span>🛒</span>
              <span className="bg-white text-yellow-500 text-xs font-bold px-2 py-1 rounded-full">
                {quantidadeTotal}
              </span>
            </div>
          </button>
        </div>
      )}

      {/* Toast de Notificação */}
      <Toast 
        message={toastMessage}
        show={showToast}
        type="success"
        onClose={() => setShowToast(false)}
      />
    </div>
  );
}
