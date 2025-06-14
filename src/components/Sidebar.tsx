import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar: React.FC = () => {
  const router = useRouter();
  return (
    <div className="bg-gray-800 text-white w-64 p-6 h-screen">
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      <ul className="space-y-4">
        <li>
          <Link
            href="/"
            className={`${
              router.pathname === '/' ? 'text-blue-400' : 'text-white'
            } hover:text-blue-400 transition duration-300 ease-in-out`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/weather"
            className={`${
              router.pathname === '/weather' ? 'text-blue-400' : 'text-white'
            } hover:text-blue-400 transition duration-300 ease-in-out`}
          >
            Weather
          </Link>
        </li>
        <li>
          <Link
            href="/finance"
            className={`${
              router.pathname === '/finance' ? 'text-blue-400' : 'text-white'
            } hover:text-blue-400 transition duration-300 ease-in-out`}
          >
            Finance
          </Link>
        </li>
        <li>
          <Link
            href="/news"
            className={`${
              router.pathname === '/news' ? 'text-blue-400' : 'text-white'
            } hover:text-blue-400 transition duration-300 ease-in-out`}
          >
            News
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
