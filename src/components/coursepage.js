import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/mengerlogo.png';
import courseVideo from '../assets/course.mp4';
import mechanics from '../assets/mechanics.jpg';
import {
  HomeIcon,
  BookOpenIcon,
  SparklesIcon,
  QuestionMarkCircleIcon,
  ChatBubbleLeftIcon,
  UserCircleIcon,
  StarIcon,
  AcademicCapIcon,
  CheckCircleIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

const CoursePage = () => {
  const navigate = useNavigate();
  const [comment, setComment] = useState('');
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  
  const course = {
    title: "Основы квантовой механики",
    description: "Погрузитесь в удивительный мир квантовой физики. В этом курсе вы изучите фундаментальные принципы квантовой механики, волновую функцию, уравнение Шрёдингера и многое другое. Курс включает практические задания и интерактивные демонстрации.",
    image: mechanics,
    progress: 35,
    studentsCount: 1234,
    rating: 4.8,
    instructor: "Др. Александр Петров",
    duration: "12 недель",
    level: "Средний"
  };

  const comments = [
    {
      id: 1,
      author: "Мария С.",
      text: "Отличный курс! Очень доступно объясняются сложные концепции.",
      date: "2 дня назад"
    },
    {
      id: 2, 
      author: "Павел К.",
      text: "Практические задания действительно помогают закрепить материал.",
      date: "неделю назад"
    }
  ];

  const handleComplete = () => {
    setShowCompletionModal(true);
  };

  const handleStartLearning = () => {
    navigate('/aiassistant');
  };

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
          <Link to="/aiassistant" className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gradient-to-r from-[#2a2a4a] to-[#3d3d5c] hover:scale-105 transition-all duration-300 group">
            <SparklesIcon className="h-6 w-6 group-hover:text-[#4d7eff]" />
            <span className="font-medium">AI Assistant</span>
          </Link>
          <a href="#" className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gradient-to-r from-[#2a2a4a] to-[#3d3d5c] hover:scale-105 transition-all duration-300 group">
            <QuestionMarkCircleIcon className="h-6 w-6 group-hover:text-[#4d7eff]" />
            <span className="font-medium">Help</span>
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-5xl mx-auto">
          {/* Course Header */}
          <div className="bg-gradient-to-br from-[#1a1a2e] to-[#2a2a4a] rounded-2xl overflow-hidden mb-8">
            <img src={course.image} alt={course.title} className="w-full h-64 object-cover" />
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-3xl font-bold text-white">{course.title}</h1>
                <div className="flex items-center gap-2 bg-black/50 backdrop-blur-lg px-4 py-2 rounded-full">
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                  <span className="text-white font-semibold">{course.rating}</span>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-6 mb-6">
                <div className="flex items-center gap-3 text-gray-400">
                  <UserCircleIcon className="h-6 w-6" />
                  <span>{course.instructor}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <AcademicCapIcon className="h-6 w-6" />
                  <span>{course.studentsCount} студентов</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <BookOpenIcon className="h-6 w-6" />
                  <span>{course.duration}</span>
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed mb-6">{course.description}</p>

              <div className="flex gap-4">
                <button 
                  onClick={handleStartLearning}
                  className="flex items-center gap-2 bg-gradient-to-r from-[#4d7eff] to-[#3d6ae6] text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 font-semibold"
                >
                  <RocketLaunchIcon className="h-5 w-5" />
                  Приступить
                </button>
                <button 
                  onClick={handleComplete}
                  className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 font-semibold"
                >
                  <CheckCircleIcon className="h-5 w-5" />
                  Завершить
                </button>
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="bg-gradient-to-br from-[#1a1a2e] to-[#2a2a4a] rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Видео урок</h2>
            <video 
              className="w-full rounded-xl"
              controls
              poster={course.image}
            >
              <source src={courseVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Comments Section */}
          <div className="bg-gradient-to-br from-[#1a1a2e] to-[#2a2a4a] rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Комментарии</h2>
            
            {/* Comment Form */}
            <div className="mb-8">
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Оставьте свой комментарий..."
                className="w-full bg-[#2a2a4a] text-white rounded-xl p-4 min-h-[100px] outline-none focus:ring-2 focus:ring-[#4d7eff]"
              />
              <button className="mt-4 bg-gradient-to-r from-[#4d7eff] to-[#3d6ae6] text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 font-semibold">
                Отправить комментарий
              </button>
            </div>

            {/* Comments List */}
            <div className="space-y-6">
              {comments.map(comment => (
                <div key={comment.id} className="bg-[#2a2a4a] rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <ChatBubbleLeftIcon className="h-5 w-5 text-[#4d7eff]" />
                    <span className="font-semibold text-white">{comment.author}</span>
                    <span className="text-sm text-gray-400">{comment.date}</span>
                  </div>
                  <p className="text-gray-300">{comment.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Completion Modal */}
      {showCompletionModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-gradient-to-br from-[#1a1a2e] to-[#2a2a4a] rounded-2xl p-8 max-w-lg w-full mx-4 animate-fade-in">
            <div className="flex items-center gap-4 mb-6">
              <SparklesIcon className="h-12 w-12 text-[#4d7eff]" />
              <div>
                <h3 className="text-2xl font-bold text-white">Так держать!</h3>
                <p className="text-gray-400">Давай закрепим тему</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Отличная работа! Я вижу, что ты успешно освоил основные концепции. Давай проверим твои знания с помощью небольшого теста или практического задания.
            </p>
            <div className="flex justify-end gap-4">
              <button 
                onClick={() => setShowCompletionModal(false)}
                className="px-6 py-3 rounded-xl text-gray-400 hover:text-white transition-colors"
              >
                Позже
              </button>
              <button className="bg-gradient-to-r from-[#4d7eff] to-[#3d6ae6] text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 font-semibold">
                Начать тест
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoursePage;
