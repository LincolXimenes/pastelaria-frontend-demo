import { Link } from 'react-router-dom';
import produtosPastelaria from '../assets/produtos-pastelaria.jpg';

export default function Home() {
  const features = [
    {
      icon: '🧁',
      title: 'Pastéis Artesanais',
      description: 'Feitos na hora com ingredientes frescos e de qualidade'
    },
    {
      icon: '⚡',
      title: 'Entrega Rápida',
      description: 'Seus pedidos prontos em poucos minutos'
    },
    {
      icon: '💝',
      title: 'Receitas Tradicionais',
      description: 'Sabores únicos passados de geração em geração'
    }
  ];

  const stats = [
    { number: '500+', label: 'Pastéis Vendidos/Dia' },
    { number: '15+', label: 'Sabores Diferentes' },
    { number: '5★', label: 'Avaliação dos Clientes' },
    { number: '10+', label: 'Anos de Tradição' }
  ];

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="text-center py-20 px-8">
        <div className="w-full">
          <h1 className="text-7xl lg:text-9xl font-bold text-gray-900 mb-12 text-center">
            <span className="text-yellow-500">Pastelaria PDV</span>
          </h1>
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-700 mb-8 text-center">
            Bem-vindo à Pastelaria do Sinval
          </h2>
          <p className="text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Descubra os sabores únicos dos nossos pastéis artesanais, feitos com amor e ingredientes selecionados desde 2015.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/produtos" className="btn-primary text-lg px-8 py-4 rounded-xl">
              Ver Cardápio 🍽️
            </Link>
            <Link to="/dashboard" className="bg-white hover:bg-gray-50 text-gray-700 font-medium py-4 px-8 rounded-xl border-2 border-gray-200 hover:border-gray-300 transition-all duration-200">
              Área Administrativa
            </Link>
          </div>
        </div>
      </section>

      {/* Produtos em Destaque Section */}
      <section className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-gray-800 mb-8">Nossos Produtos Especiais</h2>
          <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
            Deliciosos pastéis, coxinhas, sanduíches e bebidas preparados com ingredientes frescos e muito carinho
          </p>
        </div>
        
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="p-12 lg:p-16">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Variedade que Conquista</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🥟</span>
                  <span className="text-lg text-gray-700">Pastéis artesanais de diversos sabores</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🍗</span>
                  <span className="text-lg text-gray-700">Coxinhas cremosas e saborosas</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🥪</span>
                  <span className="text-lg text-gray-700">Sanduíches especiais da casa</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🥤</span>
                  <span className="text-lg text-gray-700">Bebidas geladas e sucos naturais</span>
                </div>
              </div>
              <Link 
                to="/produtos" 
                className="inline-flex items-center gap-2 btn-primary text-lg px-8 py-4 rounded-xl"
              >
                Ver Todos os Produtos
                <span>→</span>
              </Link>
            </div>
            <div className="relative">
              <img 
                src={produtosPastelaria} 
                alt="Produtos da Pastelaria - Pastéis, Coxinhas, Sanduíches e Bebidas" 
                className="w-full h-96 lg:h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-gray-800 mb-8">Por que escolher nossa pastelaria?</h2>
          <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
            Combinamos tradição familiar com qualidade premium para oferecer a melhor experiência gastronômica
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="card-base text-center group hover:scale-105 transition-transform duration-200">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-gray-800 mb-8">Nossos Números</h2>
          <p className="text-xl text-gray-600">A confiança dos nossos clientes em números</p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <div className="text-3xl md:text-4xl font-bold text-yellow-600 mb-2 group-hover:scale-110 transition-transform duration-200">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-12 bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
          <h2 className="text-3xl font-bold mb-4">Experimente Hoje Mesmo!</h2>
          <p className="text-lg mb-6 opacity-90">
            Visite nossa loja ou faça seu pedido online. Garantimos pastéis fresquinhos e saborosos!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/produtos" className="bg-white text-yellow-600 hover:bg-gray-50 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
              Ver Cardápio Completo
            </Link>
            <Link to="/about" className="border-2 border-white hover:bg-white hover:text-yellow-600 font-semibold py-3 px-6 rounded-lg transition-all duration-200">
              Conheça Nossa História
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
