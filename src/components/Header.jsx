import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Início' },
    { path: '/produtos', label: 'Novo Pedido' },
    { path: '/pedidos', label: 'Pedidos' },
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/relatorios', label: 'Relatórios' },
    { path: '/about', label: 'Sobre' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-yellow-400 shadow-lg">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="flex justify-between items-end py-3">
          <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-gray-700">
            🧁 Pastelaria PDV
          </Link>
          
          <nav className="flex items-center h-12">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                style={{ marginRight: index < navItems.length - 1 ? '24px' : '0' }}
                className={`relative inline-flex items-center h-12 px-3 font-medium transition-all duration-200 whitespace-nowrap border-b-2 ${
                  isActive(item.path)
                    ? 'text-gray-900 border-yellow-500'
                    : 'text-gray-600 border-transparent hover:text-gray-900 hover:border-gray-300'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}