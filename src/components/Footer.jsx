import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="max-w-screen-2xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🧁</span>
              <h3 className="text-xl font-bold">Pastelaria do Sinval</h3>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Tradição em pastéis artesanais desde 2005. Sabores únicos feitos com amor e ingredientes selecionados.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                📱 WhatsApp
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                📧 Email
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                📍 Localização
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/produtos" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Cardápio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center gap-2">
                <span>📞</span>
                (85) 992261020
              </p>
              <p className="flex items-center gap-2">
                <span>📧</span>
                contato@pastelaria.com
              </p>
              <p className="flex items-center gap-2">
                <span>📍</span>
                Rua Melo de Oliveira, 779
              </p>
              <p className="flex items-center gap-2">
                <span>🕒</span>
                Seg-Sáb: 18h às 23h
              </p>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-white-700 my-6"></div>

        {/* Copyright e Links */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Pastelaria do Sinval. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
              Política de Privacidade
            </a>
            <a href="https://github.com/LincolXimenes" className="text-gray-400 hover:text-yellow-400 transition-colors" target="_blank" rel="noopener noreferrer">
              Desenvolvido por @LincolXimenes
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
