import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Chart from 'react-apexcharts';
import { COURSES } from '../constants/courses';
import { 
  BellIcon, 
  ChevronLeftIcon, 
  ChevronRightIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline';

const Dashboard = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [currentCourseIndex, setCurrentCourseIndex] = useState(0);

  // Данные для графика
  const chartOptions = {
    chart: {
      type: 'area',
      background: '#1a1a2e',
      toolbar: {
        show: false
      },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
      }
    },
    stroke: {
      curve: 'smooth',
      width: 3
    },
    colors: ['#4d7eff'],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.2,
        stops: [0, 90, 100]
      }
    },
    dataLabels: {
      enabled: false
    },
    grid: {
      borderColor: '#2a2a4a',
      strokeDashArray: 5,
    },
    xaxis: {
      categories: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
      labels: {
        style: {
          colors: '#8e8eb2'
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: '#8e8eb2'
        }
      }
    },
    theme: {
      mode: 'dark'
    },
    tooltip: {
      theme: 'dark',
      style: {
        fontSize: '14px',
        fontFamily: 'monospace'
      }
    }
  };

  const series = [{
    name: 'Активность',
    data: [30, 40, 35, 50, 49, 60, 70]
  }];

  const nextCourse = () => {
    setCurrentCourseIndex((prevIndex) => 
      prevIndex === COURSES.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevCourse = () => {
    setCurrentCourseIndex((prevIndex) => 
      prevIndex === 0 ? COURSES.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    setNotifications([
      { id: 1, text: "Новый курс по Data Science доступен!", time: "2 часа назад" },
      { id: 2, text: "Вы достигли недельной цели!", time: "5 часов назад" }
    ]);
  }, []);

  return (
    <div className="flex-1">
      {/* Header */}
      <header className="bg-[#1a1a2e] p-4 flex justify-end items-center">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <BellIcon 
              className="h-6 w-6 text-white cursor-pointer hover:text-[#4d7eff] transition-colors"
              onClick={() => setShowNotifications(!showNotifications)}
            />
            {notifications.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-4 h-4 flex items-center justify-center text-xs text-white">
                {notifications.length}
              </span>
            )}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-72 bg-[#1a1a2e] rounded-lg shadow-lg border border-[#2a2a4a] z-50">
                {notifications.map(notification => (
                  <div key={notification.id} className="p-3 border-b border-[#2a2a4a] hover:bg-[#2a2a4a] cursor-pointer">
                    <p className="text-white text-sm">{notification.text}</p>
                    <p className="text-gray-400 text-xs mt-1">{notification.time}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <span className="text-white font-mono">A. Artyqbay</span>
          <div className="h-10 w-10 rounded-full bg-[#4d7eff] flex items-center justify-center text-white cursor-pointer hover:scale-105 transition-transform">
            AA
          </div>
        </div>
      </header>

      {/* Main Dashboard */}
      <main className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Activity Chart */}
          <div className="lg:col-span-2 bg-[#1a1a2e] p-6 rounded-xl hover:shadow-lg transition-shadow">
            <h3 className="text-white text-xl mb-4 font-mono">Активность за неделю</h3>
            <Chart 
              options={chartOptions}
              series={series}
              type="area"
              height={350}
            />
            <div className="mt-4 text-green-400 flex items-center">
              <span className="text-lg font-mono subpixel-antialiased">🔥Так держать! 5 дней подряд</span>
            </div>
          </div>

          {/* Learning Technique */}
          <div className="bg-[#1a1a2e] p-6 rounded-xl hover:shadow-lg transition-shadow">
            <h3 className="text-white text-lg mb-4">Ваша любимая техника</h3>
            <div className="bg-gradient-to-r from-[#2a2a4a] to-[#3a3a5a] p-4 rounded-lg flex items-center space-x-3 hover:scale-105 transition-transform cursor-pointer shadow-md">
              <div className="bg-yellow-400/10 p-3 rounded-full">
                <span className="text-yellow-400 text-2xl">⭐</span>
              </div>
              <div>
                <span className="text-white block">Техника Р. Фейнмана</span>
                <span className="text-gray-400 text-sm">5 часов обучения</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trending Courses Carousel */}
        <div className="mt-6">
          <h3 className="text-white text-xl mb-4">Трендовые курсы</h3>
          <div className="relative">
            <div className="bg-[#1a1a2e] rounded-xl p-6">
              <div className="flex items-center">
                <button 
                  onClick={prevCourse}
                  className="absolute left-2 bg-[#2a2a4a]/50 hover:bg-[#2a2a4a] p-2 rounded-full text-white transition-all"
                >
                  <ChevronLeftIcon className="h-6 w-6" />
                </button>
                
                <div className="flex-1 px-12">
                  <div className="flex items-start space-x-6">
                    <img 
                      src={COURSES[currentCourseIndex].image} 
                      alt={COURSES[currentCourseIndex].title} 
                      className="w-72 h-48 object-cover rounded-lg shadow-lg"
                    />
                    <div className="flex-1">
                      <h4 className="text-white text-xl font-semibold mb-2">
                        {COURSES[currentCourseIndex].title}
                      </h4>
                      <p className="text-gray-400 mb-4">
                        {COURSES[currentCourseIndex].description}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                        <span>👥 {COURSES[currentCourseIndex].students} студентов</span>
                        <span>⏱ {COURSES[currentCourseIndex].duration}</span>
                      </div>
                      <div className="mb-4">
                        <div className="bg-[#2a2a4a] rounded-full h-2">
                          <div 
                            className="bg-[#4d7eff] h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${COURSES[currentCourseIndex].progress}%` }}
                          />
                        </div>
                        <div className="text-right text-sm text-gray-400 mt-1">
                          {COURSES[currentCourseIndex].progress}% завершено
                        </div>
                      </div>
                      <button 
                        onClick={() => navigate(`/course/${COURSES[currentCourseIndex].id}`)}
                        className="bg-[#4d7eff] text-white px-6 py-2 rounded-lg hover:bg-[#3d6ae6] transition-all hover:shadow-lg"
                      >
                        Продолжить обучение
                      </button>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={nextCourse}
                  className="absolute right-2 bg-[#2a2a4a]/50 hover:bg-[#2a2a4a] p-2 rounded-full text-white transition-all"
                >
                  <ChevronRightIcon className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
