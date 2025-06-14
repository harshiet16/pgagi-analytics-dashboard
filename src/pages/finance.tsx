import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Chart from '../components/Chart';
import { fetchStockData } from '../services/financeService';

const FinancePage: React.FC = () => {
  const [stockData, setStockData] = useState<any[]>([]);

  useEffect(() => {
    const getStockData = async () => {
      try {
        const data = await fetchStockData('AAPL');
        setStockData(data);  
        console.log('Fetched stock data:', data);  
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    };
    getStockData();
  }, []);

  return (
    <div className="flex bg-gray-900 text-white min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8">
        <Navbar />
        <h1 className="text-4xl font-bold mb-6">Finance Dashboard</h1>

        <div className="grid grid-cols-3 gap-6 mb-6">
          <Card title="Stock" value="$150.00" />
          <Card title="Change" value="2.5%" />
          <Card title="Market Cap" value="$2.5 Trillion" />
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          {stockData.length > 0 ? (
            <Chart data={stockData} dataKey="price" xKey="date" />
          ) : (
            <p>Loading stock data...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FinancePage;
