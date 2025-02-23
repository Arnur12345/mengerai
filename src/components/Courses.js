import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { COURSES, COURSE_CATEGORIES } from '../constants/courses';
import {
  BeakerIcon,
  AcademicCapIcon,
  ArrowTrendingUpIcon,
  SparklesIcon,
  BookOpenIcon,
  StarIcon,
  FireIcon,
  TrophyIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon
} from '@heroicons/react/24/outline';

const Courses = () => {
  const navigate = useNavigate();
  const [streakCount, setStreakCount] = useState(0);
  const [showAchievement, setShowAchievement] = useState(false);

  useEffect(() => {
    setStreakCount(7);
  }, []);

  const handleCourseClick = (courseId) => {
    navigate(`/course/${courseId}`);
  };

  return (
    <div className="flex-1">
      {showAchievement && (
        <div className="fixed top-4 right-4 bg-gradient-to-r from-[#2a2a4a] to-[#3d3d5c] p-4 rounded-2xl shadow-2xl animate-bounce backdrop-blur-lg">
          <div className="flex items-center gap-3">
            <TrophyIcon className="h-7 w-7 text-yellow-400 animate-pulse" />
            <span className="text-white font-semibold">Достижение разблокировано!</span>
          </div>
        </div>
      )}
      
      {/* Search Bar */}
      <div className="bg-[#1a1a2e]/50 backdrop-blur-lg p-6 shadow-lg">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-3 bg-gradient-to-r from-[#2a2a4a] to-[#3d3d5c] text-white px-5 py-3 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
            <AdjustmentsHorizontalIcon className="h-5 w-5" />
            <span className="font-medium">Filters</span>
          </button>
          <div className="flex-1 flex items-center gap-3 bg-[#2a2a4a]/50 rounded-xl px-5 py-3 backdrop-blur-lg">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search courses..."
              className="bg-transparent text-white w-full outline-none placeholder-gray-400 font-medium"
            />
          </div>
        </div>
      </div>
  
      {/* Main Dashboard */}
      <main className="p-8">
        <div className="flex gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Trending Courses */}
            <section className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white text-2xl font-bold">Trending Courses</h3>
                <button className="text-[#4d7eff] hover:text-[#3d6ae6] transition-colors font-medium">View all</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {COURSES.map((course) => (
                  <div 
                    key={course.id} 
                    className="bg-gradient-to-br from-[#1a1a2e] to-[#2a2a4a] rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group"
                    onClick={() => handleCourseClick(course.id)}
                  >
                    <div className="relative">
                      <img src={course.image} alt={course.title} className="w-full h-52 object-cover group-hover:brightness-90 transition-all duration-300" />
                      <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-lg px-4 py-2 rounded-full flex items-center gap-2">
                        <StarIcon className="h-5 w-5 text-yellow-400" />
                        <span className="text-white font-semibold">{course.rating}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="text-white text-xl font-bold">{course.title}</h4>
                      <p className="text-gray-400 mt-3 leading-relaxed">{course.description}</p>
                      <div className="flex items-center gap-3 mt-4 text-gray-400">
                        <AcademicCapIcon className="h-5 w-5" />
                        <span className="font-medium">{course.students} студентов</span>
                      </div>
                      <div className="mt-4 bg-[#2a2a4a] rounded-full h-3">
                        <div 
                          className="bg-gradient-to-r from-[#4d7eff] to-[#6d9eff] h-3 rounded-full transition-all duration-1000"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                      <div className="text-right text-sm text-gray-400 mt-2 font-medium">
                        {course.progress}% завершено
                      </div>
                      <button className="mt-5 bg-gradient-to-r from-[#4d7eff] to-[#3d6ae6] text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 w-full flex items-center justify-center gap-3 font-semibold">
                        <span>Continue Learning</span>
                        <ArrowTrendingUpIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
  
          {/* Categories Sidebar */}
          <div className="w-80 bg-gradient-to-br from-[#1a1a2e] to-[#2a2a4a] p-6 rounded-2xl h-fit shadow-xl">
            <h3 className="text-white text-2xl font-bold mb-6">Categories</h3>
            <div className="space-y-3">
              {COURSE_CATEGORIES.map((category, index) => (
                <button
                  key={index}
                  className="flex items-center justify-between w-full text-gray-300 hover:bg-gradient-to-r from-[#2a2a4a] to-[#3d3d5c] p-4 rounded-xl hover:scale-105 transition-all duration-300 group"
                >
                  <div className="flex items-center">
                    <BeakerIcon className="h-6 w-6 mr-4 group-hover:text-[#4d7eff]" />
                    <span className="font-medium">{category.name}</span>
                  </div>
                  <span className="text-sm text-gray-500 group-hover:text-white transition-colors font-medium">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Courses;