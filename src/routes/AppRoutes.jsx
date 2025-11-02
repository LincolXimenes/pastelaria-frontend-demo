import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Produtos from '../pages/Produtos';
import Layout from '../components/Layout';

export default function AppRoutes() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
        </Routes>
      </Layout>
    </Router>
  );
}
