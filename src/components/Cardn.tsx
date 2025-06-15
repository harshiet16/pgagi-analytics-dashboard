// src/components/Card.tsx

import React from 'react';

export interface Article {
  title: string;
  description?: string;
  content?: string;
  url: string;
  urlToImage?: string;
  source: { name: string };
  publishedAt?: string;
}

interface CardProps {
  article: Article;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ article, onClick }) => (
  <div
    onClick={onClick}
    className="bg-white shadow-lg rounded-lg p-4 mb-4 cursor-pointer hover:shadow-xl transition"
  >
    {article.urlToImage && (
      <img
        src={article.urlToImage}
        alt={article.title}
        className="w-full h-48 object-cover rounded-md mb-3"
      />
    )}
    <h2 className="text-lg font-semibold mb-1">{article.title}</h2>
    <p className="text-sm text-gray-700 line-clamp-2 mb-2">
      {article.description}
    </p>
    <div className="text-xs text-gray-500 flex justify-between">
      <span>{article.source.name}</span>
      {article.publishedAt && (
        <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
      )}
    </div>
  </div>
);

export default Card;
