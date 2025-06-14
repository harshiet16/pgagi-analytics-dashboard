import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';

const Home: React.FC = () => (
  <div className="flex bg-gray-900 text-white min-h-screen">
    <Sidebar />
    <div className="flex-1 p-8">
      <Navbar />

      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-12 rounded-lg shadow-lg mb-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Analytics Dashboard</h1>
        <p className="text-xl mb-4">Get real-time insights and analytics to stay on top of the latest trends in weather, stock, news, and more!</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full transition duration-300">Get Started</button>
      </section>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <Card title="Weather" value="28°C" />
        <Card title="Stock" value="$45.50" />
        <Card title="News" value="10 Articles" />
        <Card title="Traffic" value="15K Visitors" />
        <Card title="Sales" value="$10,000" />
        <Card title="Users" value="1,200 Active" />
      </div>

      <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Real-Time Analytics</h2>
      
        <div className="bg-gray-700 p-4 rounded-lg text-center text-white">
          <p className="text-xl">This section will contain a dynamic graph (e.g., sales, users, etc.)</p>
        </div>
      </section>

      <footer className="bg-gray-800 p-6 mt-12 rounded-lg">
        <p className="text-center text-sm text-gray-400">© 2025 Analytics Dashboard. All rights reserved.</p>
      </footer>
    </div>
  </div>
);

export default Home;
