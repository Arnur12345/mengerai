import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/mengerlogo.png';
import {
  HomeIcon,
  BookOpenIcon,
  SparklesIcon,
  QuestionMarkCircleIcon,
  RocketLaunchIcon,
  LightBulbIcon,
  ClockIcon,
  ChartBarIcon,
  ArrowPathIcon,
  BeakerIcon
} from '@heroicons/react/24/outline';

const Plan = () => {
  const [selectedTechnique, setSelectedTechnique] = useState(null);

  const techniques = [
    {
      id: 1,
      name: "Техника Фейнмана",
      percentage: 73,
      description: "Объясняйте концепции простыми словами, как будто вы обучаете кого-то другого",
      icon: LightBulbIcon,
      color: "from-yellow-400 to-orange-500"
    },
    {
      id: 2,
      name: "Метод Помодоро",
      percentage: 27,
      description: "25 минут концентрированной работы, затем 5 минут отдыха",
      icon: ClockIcon,
      color: "from-red-400 to-pink-500"
    }
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#0f0f1a] to-[#1a1a2e]">
      {/* Sidebar */}
      <div className="w-72 bg-gradient-to-b from-[#1a1a2e] to-[#2a2a4a] text-gray-300 p-6 shadow-xl">
        <div className="mb-8">
          <img src={logo} alt="Menger Logo" className="h-16 hover:scale-110 transition-transform duration-300" />
        </div>

        <nav className="space-y-3">
          <Link to="/" className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gradient-to-r from-[#2a2a4a] to-[#3d3d5c] hover:scale-105 transition-all duration-300 group">
            <HomeIcon className="h-6 w-6 group-hover:text-[#4d7eff]" />
            <span className="font-medium">Dashboard</span>
          </Link>
          <Link to="/courses" className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gradient-to-r from-[#2a2a4a] to-[#3d3d5c] hover:scale-105 transition-all duration-300 group">
            <BookOpenIcon className="h-6 w-6 group-hover:text-[#4d7eff]" />
            <span className="font-medium">Courses</span>
          </Link>
          <a href="#" className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gradient-to-r from-[#2a2a4a] to-[#3d3d5c] hover:scale-105 transition-all duration-300 group">
            <SparklesIcon className="h-6 w-6 group-hover:text-[#4d7eff]" />
            <span className="font-medium">AI Assistant</span>
          </a>
          <a href="#" className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gradient-to-r from-[#2a2a4a] to-[#3d3d5c] hover:scale-105 transition-all duration-300 group">
            <QuestionMarkCircleIcon className="h-6 w-6 group-hover:text-[#4d7eff]" />
            <span className="font-medium">Help</span>
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">
              Ваш персонализированный план обучения
            </h1>
            <p className="text-gray-400 text-lg">
              На основе ваших ответов мы подобрали оптимальные техники обучения
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#1a1a2e] to-[#2a2a4a] rounded-2xl p-8 shadow-2xl mb-8">
            <div className="flex items-center gap-4 mb-8">
              <ChartBarIcon className="h-8 w-8 text-[#4d7eff]" />
              <h2 className="text-2xl text-white font-semibold">
                Рекомендуемое распределение техник
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {techniques.map((technique) => (
                <div
                  key={technique.id}
                  onClick={() => setSelectedTechnique(technique.id)}
                  className={`bg-[#2a2a4a] rounded-xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 ${
                    selectedTechnique === technique.id ? 'ring-2 ring-[#4d7eff]' : ''
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {React.createElement(technique.icon, {
                        className: `h-8 w-8 bg-gradient-to-r ${technique.color} p-1.5 rounded-lg text-white`
                      })}
                      <h3 className="text-xl text-white font-semibold">{technique.name}</h3>
                    </div>
                    <span className="text-2xl font-bold text-[#4d7eff]">{technique.percentage}%</span>
                  </div>
                  
                  <p className="text-gray-400 mb-4">{technique.description}</p>
                  
                  <div className="h-2 bg-[#1a1a2e] rounded-full">
                    <div
                      className={`h-2 bg-gradient-to-r ${technique.color} rounded-full transition-all duration-1000`}
                      style={{ width: `${technique.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <button
              disabled={!selectedTechnique}
              className={`flex items-center gap-3 px-8 py-4 rounded-xl text-white font-semibold text-lg transition-all duration-300 ${
                selectedTechnique
                  ? 'bg-gradient-to-r from-[#4d7eff] to-[#3d6ae6] hover:scale-105 hover:shadow-lg'
                  : 'bg-[#2a2a4a] cursor-not-allowed'
              }`}
            >
              <span>Начать обучение</span>
              <RocketLaunchIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
