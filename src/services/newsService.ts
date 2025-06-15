// src/services/newsService.ts

const API_KEY = 'b907f2873c224a04b6ec5cd999ec6c0d'; 
const BASE_URL = 'https://newsapi.org/v2/top-headlines';

export const getNewsByCategory = async (category: string, page: number) => {
  const url = `${BASE_URL}?category=${category}&page=${page}&apiKey=${API_KEY}`;
  
  const response = await fetch(url);
  const data = await response.json();

  // Ensure this structure: { articles: [...], totalResults: number }
  if (!data.articles || !Array.isArray(data.articles)) {
    throw new Error('Invalid data format');
  }

  return {
    articles: data.articles,
    totalResults: data.totalResults,
  };
};
