import React from 'react';
import CardProduto from '../components/CardProduto';

const produtos = [
  {
    id: 1,
    nome: "Pastel de Carne",
    preco: 8.5,
    descricao: "Com bastante recheio",
    imagem: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    nome: "Pastel de Queijo",
    preco: 8.0,
    descricao: "Derretido e crocante",
    imagem: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    nome: "Pastel de Frango",
    preco: 8.5,
    descricao: "Com catupiry",
    imagem: "https://via.placeholder.com/150"
  }
];


export default function Produtos() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Nosso Cardápio</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {produtos.map((produto) => (
          <CardProduto key={produto.id} {...produto} />
        ))}
      </div>
    </div>
  );
}