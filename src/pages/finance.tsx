import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Chart from '../components/Chart';
import { fetchStockData } from '../services/financeService';

const FinancePage: React.FC = () => {
  const [stockData, setStockData] = useState<any[]>([]);
  const [stockInfo, setStockInfo] = useState<any>(null);

  useEffect(() => {
    const getStockData = async () => {
      try {
        const data = await fetchStockData('AAPL'); // Fetch data for a sample stock (e.g., Apple)
        setStockData(data); // Data is an array of historical stock data
        const currentStockInfo = data[data.length - 1]; // Use the last item as current stock info
        const prevStockInfo = data.length > 1 ? data[data.length - 2] : null;

        // Calculate the price change percentage
        const priceChange =
          prevStockInfo && currentStockInfo
            ? (((currentStockInfo.price - prevStockInfo.price) / prevStockInfo.price) * 100).toFixed(2)
            : '0.00';

        setStockInfo({
          price: currentStockInfo?.price || 'N/A',
          change: priceChange,
          // marketCap: currentStockInfo?.marketCap || 'N/A', // You can add actual market cap if available
        });
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    };
    getStockData();
  }, []);

  return (
    <div className="flex bg-gray-900 text-white min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6">
        <Navbar />
        <h1 className="text-3xl font-bold mb-4">Finance Dashboard</h1>

        {/* Stock Info Cards */}
        <div className="grid grid-cols-3 gap-6">
          <Card title="Stock Price" value={`$${stockInfo?.price || 'Loading...'}`} />
          <Card title="Change" value={`${stockInfo?.change || '0.0'}%`} />
          {/* <Card title="Market Cap" value={`$${stockInfo?.marketCap || 'Loading...'}`} /> */}
        </div>

        {/* Stock Price History Chart */}
        {stockData.length > 0 ? (
          <Chart data={stockData} dataKey="price" xKey="date" />
        ) : (
          <p className="text-xl text-gray-400">Loading stock data...</p>
        )}
      </div>
    </div>
  );
};

export default FinancePage;
