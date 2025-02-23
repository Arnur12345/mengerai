import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1a] to-[#1a1a2e] flex items-center justify-center p-4">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <ExclamationTriangleIcon className="h-24 w-24 text-[#4d7eff]" />
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">404</h1>
        <p className="text-xl text-gray-400 mb-8">Страница не найдена</p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4d7eff] to-[#3d6ae6] text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
        >
          <HomeIcon className="h-5 w-5" />
          <span>Вернуться на главную</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound; 