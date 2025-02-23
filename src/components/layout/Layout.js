import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#0f0f1a] to-[#1a1a2e]">
      {/* Mobile Sidebar Toggle */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 bg-[#2a2a4a] p-2 rounded-lg text-white"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <Bars3Icon className="h-6 w-6" />
        )}
      </button>

      {/* Sidebar */}
      <div className={`
        fixed lg:static lg:translate-x-0 z-40
        transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <Sidebar onClose={() => setIsSidebarOpen(false)} />
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 lg:ml-72">
        {children}
      </div>
    </div>
  );
};

export default Layout; 