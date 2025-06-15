// components/ArticleModal.tsx

import React from 'react';

export interface ArticleDetail {
  title: string;
  description?: string;
  content?: string;
  url?: string;
  urlToImage?: string;
  source: { name: string };
  publishedAt?: string;
}

interface ArticleModalProps {
  isOpen: boolean;
  article: ArticleDetail | null;
  closeModal: () => void;
}

const ArticleModal: React.FC<ArticleModalProps> = ({
  isOpen,
  article,
  closeModal,
}) => {
  if (!isOpen || !article) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg overflow-auto max-w-2xl w-full p-6 relative">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
        >
          ×
        </button>
        {article.urlToImage && (
          <img
            src={article.urlToImage}
            alt={article.title}
            className="w-full h-64 object-cover rounded-md mb-4"
          />
        )}
        <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
        <div className="text-gray-500 text-sm mb-4">
          {article.source.name} &middot;{' '}
          {article.publishedAt &&
            new Date(article.publishedAt).toLocaleString()}
        </div>
        <p className="mb-4">{article.content || article.description}</p>
        {article.url && (
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Read full article
          </a>
        )}
      </div>
    </div>
  );
};

export default ArticleModal;
