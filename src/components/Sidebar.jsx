import { Link, useLocation } from 'react-router-dom';

export default function Sidebar({ isOpen = true }) {
  const location = useLocation();

  const menuItems = [
    { path: '/', label: 'Início', icon: '🏠' },
    { path: '/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/produtos', label: 'Produtos', icon: '🧁' },
    { path: '/pedidos', label: 'Pedidos', icon: '📋' },
    { path: '/relatorios', label: 'Relatórios', icon: '📈' },
  ];

  const isActive = (path) => location.pathname === path;

  if (!isOpen) return null;

  return (
    <aside className="bg-white w-64 min-h-screen shadow-lg border-r border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-800">Pastelaria PDV</h2>
      </div>
      
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'bg-yellow-100 text-yellow-800 font-medium'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}