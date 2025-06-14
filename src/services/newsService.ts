import axios from 'axios';
const newsApi = axios.create({
  baseURL: 'https://newsapi.org/v2/',
});

interface NewsApiResponse {
  status: string;
  totalResults: number;
  articles: any[];
}

export const fetchNews = async () => {
  const response = await newsApi.get<NewsApiResponse>('top-headlines', {
    params: {
      country: 'us',
      apiKey: 'b907f2873c224a04b6ec5cd999ec6c0d',
    },
  });
  return response.data.articles;
};
