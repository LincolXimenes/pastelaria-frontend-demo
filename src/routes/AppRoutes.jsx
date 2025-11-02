import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Produtos from '../pages/Produtos';
import Dashboard from '../pages/Dashboard';
import Pedidos from '../pages/Pedidos';
import Relatorios from '../pages/Relatorios';
import Login from '../pages/Login';
import About from '../pages/About';
import Layout from '../components/Layout';

export default function AppRoutes() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/relatorios" element={<Relatorios />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}
