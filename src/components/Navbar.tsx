import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar: React.FC = () => {
  const router = useRouter(); 

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Dashboard</div>
        <ul className="flex space-x-8">
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
    </nav>
  );
};

export default Navbar;
