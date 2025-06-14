import { useState, useEffect } from 'react';
import { fetchStockData } from '../services/financeService';

const useFinance = (symbol: string) => {
  const [stockData, setStockData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getStockData = async () => {
      try {
        setLoading(true);
        const data = await fetchStockData(symbol);
        setStockData(data);
      } catch (error) {
        console.error('Error fetching stock data:', error);
      } finally {
        setLoading(false);
      }
    };

    getStockData();
  }, [symbol]);

  return { stockData, loading };
};

export default useFinance;
