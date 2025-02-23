import React from 'react';
import { Link } from 'react-router-dom';
import { useLearning } from '../contexts/LearningContext';
import {
  UserCircleIcon,
  AcademicCapIcon,
  ClockIcon,
  ChartBarIcon,
  TrophyIcon,
  BookmarkIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline';

const Profile = () => {
  const { learningHistory, userPreferences } = useLearning();

  const achievements = [
    {
      id: 1,
      title: "Первые шаги",
      description: "Завершите свой первый курс",
      progress: 100,
      completed: true,
      icon: TrophyIcon
    },
    {
      id: 2,
      title: "Постоянное обучение",
      description: "Учитесь 7 дней подряд",
      progress: 70,
      completed: false,
      icon: ClockIcon
    },
    {
      id: 3,
      title: "Мастер знаний",
      description: "Завершите 5 курсов",
      progress: 40,
      completed: false,
      icon: AcademicCapIcon
    }
  ];

  const stats = [
    {
      label: "Изучено курсов",
      value: "3",
      icon: BookmarkIcon
    },
    {
      label: "Часов обучения",
      value: "24",
      icon: ClockIcon
    },
    {
      label: "Достижений",
      value: "5",
      icon: TrophyIcon
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1a] to-[#1a1a2e] p-8">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="bg-[#1a1a2e] rounded-2xl p-8 mb-8">
          <div className="flex items-center gap-6">
            <div className="h-24 w-24 bg-gradient-to-r from-[#4d7eff] to-[#3d6ae6] rounded-full flex items-center justify-center">
              <UserCircleIcon className="h-16 w-16 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">А. Артыкбай</h1>
              <p className="text-gray-400">Начинающий исследователь</p>
            </div>
            <Link 
              to="/settings" 
              className="ml-auto bg-[#2a2a4a] p-3 rounded-xl hover:bg-[#3d3d5c] transition-colors"
            >
              <Cog6ToothIcon className="h-6 w-6 text-white" />
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-[#1a1a2e] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <stat.icon className="h-6 w-6 text-[#4d7eff]" />
                <span className="text-gray-400">{stat.label}</span>
              </div>
              <span className="text-3xl font-bold text-white">{stat.value}</span>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="bg-[#1a1a2e] rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <TrophyIcon className="h-7 w-7 text-[#4d7eff]" />
            Достижения
          </h2>
          <div className="space-y-6">
            {achievements.map(achievement => (
              <div key={achievement.id} className="bg-[#2a2a4a] rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <achievement.icon className={`h-8 w-8 ${achievement.completed ? 'text-yellow-400' : 'text-gray-400'}`} />
                  <div>
                    <h3 className="text-white font-semibold">{achievement.title}</h3>
                    <p className="text-gray-400 text-sm">{achievement.description}</p>
                  </div>
                </div>
                <div className="h-2 bg-[#1a1a2e] rounded-full">
                  <div 
                    className="h-2 bg-gradient-to-r from-[#4d7eff] to-[#3d6ae6] rounded-full transition-all duration-1000"
                    style={{ width: `${achievement.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-[#1a1a2e] rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <ChartBarIcon className="h-7 w-7 text-[#4d7eff]" />
            Недавняя активность
          </h2>
          <div className="space-y-4">
            {learningHistory.slice(0, 5).map((session, index) => (
              <div key={index} className="bg-[#2a2a4a] rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <AcademicCapIcon className="h-6 w-6 text-[#4d7eff]" />
                  <div>
                    <h3 className="text-white font-medium">{session.title}</h3>
                    <p className="text-gray-400 text-sm">{new Date(session.timestamp).toLocaleDateString()}</p>
                  </div>
                </div>
                <span className="text-gray-400">{session.duration} мин</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 