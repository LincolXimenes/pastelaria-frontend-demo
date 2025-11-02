import Container from '../components/Container';
import Card from '../components/Card';

export default function About() {
  return (
    <Container>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Sobre o Sistema</h1>
        <p className="text-gray-600">Conheça mais sobre a Pastelaria PDV</p>
      </div>

      <div className="grid gap-6">
        <Card title="Nossa Missão">
          <p className="text-gray-700 leading-relaxed">
            Desenvolver soluções tecnológicas simples e eficientes para pequenos negócios
            do setor alimentício, especialmente pastelarias, oferecendo ferramentas que
            facilitam o gerenciamento de pedidos, estoque e vendas.
          </p>
        </Card>

        <Card title="Funcionalidades">
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              Gerenciamento de produtos e cardápio
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              Controle de pedidos em tempo real
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              Dashboard com métricas de vendas
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              Relatórios detalhados de performance
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow-500">⏳</span>
              Sistema de autenticação (em desenvolvimento)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow-500">⏳</span>
              Integração com API backend (em desenvolvimento)
            </li>
          </ul>
        </Card>

        <Card title="Tecnologias Utilizadas">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <p className="font-semibold text-blue-600">React</p>
              <p className="text-sm text-gray-500">Frontend Framework</p>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <p className="font-semibold text-green-600">Vite</p>
              <p className="text-sm text-gray-500">Build Tool</p>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <p className="font-semibold text-purple-600">TailwindCSS</p>
              <p className="text-sm text-gray-500">Styling</p>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <p className="font-semibold text-red-600">React Router</p>
              <p className="text-sm text-gray-500">Navigation</p>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <p className="font-semibold text-yellow-600">Axios</p>
              <p className="text-sm text-gray-500">HTTP Client</p>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <p className="font-semibold text-gray-600">ESLint</p>
              <p className="text-sm text-gray-500">Code Quality</p>
            </div>
          </div>
        </Card>

        <Card title="Desenvolvedor">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              L
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Lincoln de Mello Ximenes</h3>
              <p className="text-gray-600">Desenvolvedor Full Stack</p>
              <a 
                href="https://github.com/LincolXimenes" 
                className="text-blue-600 hover:text-blue-800 text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub: @LincolXimenes
              </a>
            </div>
          </div>
        </Card>
      </div>
    </Container>
  );
}