// src/pages/news.tsx

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews, setCategory } from '../store/newsSlice';
import { RootState, AppDispatch } from '../store/newsSlice';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Card from '../components/Cardn';
import ArticleModal from '../components/ArticleModal';

const NewsPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { articles, status, error, currentCategory, totalResults } = useSelector(
    (state: RootState) => state.news
  );

  const [page, setPage] = useState(1);
  const [selectedArticle, setSelectedArticle] = useState<any>(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Pagination variables
  const articlesPerPage = 10;
  const totalPages = Math.ceil(totalResults / articlesPerPage);

  useEffect(() => {
    dispatch(fetchNews({ category: currentCategory, page }));
  }, [dispatch, currentCategory, page]);

  const handleCategoryChange = (category: string) => {
    dispatch(setCategory(category));
    setPage(1);  // Reset to the first page
  };

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;  // Prevent going beyond bounds
    setPage(newPage);
  };

  return (
    <div className="flex bg-gray-900 text-white min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8">
        <Navbar />
        <h1 className="text-4xl font-bold mb-6">Latest News</h1>

        {/* Category Filters */}
        <div className="mb-6">
          <div className="flex space-x-2 mb-4">
            {['technology', 'sports', 'business', 'health', 'entertainment'].map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-3 py-1 rounded ${
                  currentCategory === cat
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-white'
                } hover:bg-blue-500 transition duration-300 ease-in-out`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Articles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((article, i) => {
            const onClick = () => {
              setSelectedArticle(article);
              setModalOpen(true);
            };
            return <Card key={i} article={article} onClick={onClick} />;
          })}
        </div>

        {status === 'loading' && <p className="mt-4">Loading...</p>}
        {error && <p className="mt-4 text-red-500">{error}</p>}

        {/* Pagination Controls */}
        <div className="flex justify-between mt-6">
          <button
            onClick={() => handlePageChange(page - 1)}
            disabled={page <= 1}
            className="px-4 py-2 bg-blue-600 text-white rounded-md disabled:bg-gray-600"
          >
            Previous
          </button>
          <span className="text-lg text-white">
            Page {page} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(page + 1)}
            disabled={page >= totalPages}
            className="px-4 py-2 bg-blue-600 text-white rounded-md disabled:bg-gray-600"
          >
            Next
          </button>
        </div>

        <ArticleModal
          isOpen={modalOpen}
          article={selectedArticle}
          closeModal={() => setModalOpen(false)}
        />
      </div>
    </div>
  );
};

export default NewsPage;
