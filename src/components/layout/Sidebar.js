import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/mengerlogo.png';
import {
  HomeIcon,
  BookOpenIcon,
  SparklesIcon,
  QuestionMarkCircleIcon,
  UserCircleIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline';

const Sidebar = ({ onClose }) => {
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', path: '/', icon: HomeIcon },
    { name: 'Courses', path: '/courses', icon: BookOpenIcon },
    { name: 'AI Assistant', path: '/aiassistant', icon: SparklesIcon },
    { name: 'Questions', path: '/questions', icon: QuestionMarkCircleIcon },
    { name: 'Profile', path: '/profile', icon: UserCircleIcon },
    { name: 'Settings', path: '/settings', icon: Cog6ToothIcon }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-72 h-screen bg-gradient-to-b from-[#1a1a2e] to-[#2a2a4a] text-gray-300 p-6 shadow-xl overflow-y-auto">
      <div className="mb-8">
        <Link to="/" onClick={onClose}>
          <img src={logo} alt="Menger Logo" className="h-16 hover:scale-110 transition-transform duration-300" />
        </Link>
      </div>

      <nav className="space-y-3">
        {navigation.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={onClose}
            className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 group
              ${isActive(item.path) 
                ? 'bg-gradient-to-r from-[#4d7eff] to-[#3d6ae6] text-white' 
                : 'hover:bg-gradient-to-r from-[#2a2a4a] to-[#3d3d5c] hover:scale-105'
              }`}
          >
            <item.icon className={`h-6 w-6 ${!isActive(item.path) && 'group-hover:text-[#4d7eff]'}`} />
            <span className="font-medium">{item.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar; 