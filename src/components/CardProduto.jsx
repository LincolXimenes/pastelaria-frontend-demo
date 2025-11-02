export default function CardProduto({ id, nome, preco, descricao, imagem, onAdicionar }) {
  const handleAdicionar = () => {
    if (onAdicionar) {
      onAdicionar({ id, nome, preco, descricao, imagem });
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
      <div className="relative">
        <img 
          src={imagem} 
          alt={nome}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
          <span className="text-sm font-bold text-yellow-600">
            R$ {typeof preco === 'number' ? preco.toFixed(2) : '0.00'}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{nome}</h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{descricao}</p>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="text-right">
              <p className="text-2xl font-bold text-yellow-600">
                R$ {typeof preco === 'number' ? preco.toFixed(2) : '0.00'}
              </p>
              <p className="text-xs text-gray-500">Preço unitário</p>
            </div>
          </div>
          
          <div className="flex gap-3">
            <button 
              onClick={handleAdicionar}
              className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200 hover:shadow-md flex items-center justify-center gap-2"
            >
              🛒 Adicionar
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-600 px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200">
              ❤️
            </button>
          </div>
        </div>
      </div>
      
      {/* Linha separadora na parte inferior */}
      <div className="h-1 bg-gradient-to-r from-yellow-400 to-orange-400"></div>
    </div>
  );
}