import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#0f0f1a] to-[#1a1a2e]">
      <Sidebar />
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
};

export default Layout; 