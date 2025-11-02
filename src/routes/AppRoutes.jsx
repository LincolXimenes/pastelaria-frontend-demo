import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Produtos from '../pages/Produtos';
import Dashboard from '../pages/Dashboard';
import Pedidos from '../pages/Pedidos';
import Relatorios from '../pages/Relatorios';
import Login from '../pages/Login';
import About from '../pages/About';
import Layout from '../components/Layout';
import LayoutAtendente from '../components/LayoutAtendente';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Páginas com footer completo */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/login" element={<Layout><Login /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        
        {/* Páginas de atendente sem footer */}
        <Route path="/produtos" element={<LayoutAtendente><Produtos /></LayoutAtendente>} />
        <Route path="/pedidos" element={<LayoutAtendente><Pedidos /></LayoutAtendente>} />
        <Route path="/dashboard" element={<LayoutAtendente><Dashboard /></LayoutAtendente>} />
        <Route path="/relatorios" element={<LayoutAtendente><Relatorios /></LayoutAtendente>} />
      </Routes>
    </Router>
  );
}
