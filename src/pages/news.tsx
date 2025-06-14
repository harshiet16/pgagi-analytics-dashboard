import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { fetchNews } from '../services/newsService';

const NewsPage: React.FC = () => {
  const [newsData, setNewsData] = useState<any[]>([]);

  useEffect(() => {
    const getNewsData = async () => {
      const data = await fetchNews();
      setNewsData(data);
    };
    getNewsData();
  }, []);

  return (
    <div className="flex bg-gray-900 text-white min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8">
        <Navbar />
        <h1 className="text-4xl font-bold mb-6">News Dashboard</h1>
        <div className="space-y-6">
          {newsData.map((article, index) => (
            <div key={index} className="bg-gray-800 p-6 shadow-lg rounded-lg hover:shadow-2xl transition-shadow">
              <h2 className="text-2xl font-bold text-black mb-2">{article.title}</h2>
              <p className="text-gray-300 mb-4">{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
