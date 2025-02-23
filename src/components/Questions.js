import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BoltIcon,
  LightBulbIcon,
  ClockIcon,
  AcademicCapIcon,
  BeakerIcon,
  StarIcon,
  BookmarkIcon,
  SparklesIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const Questions = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      id: 1,
      question: "Сколько часов в неделю вы готовы уделять обучению?",
      options: [
        "1-2 часа",
        "3-5 часов", 
        "6-10 часов",
        "Более 10 часов"
      ],
      icon: ClockIcon
    },
    {
      id: 2, 
      question: "Какие техники обучения вы использовали ранее?",
      options: [
        "Техника Фейнмана",
        "Интервальное повторение",
        "Метод Помодоро",
        "Не использовал(а) специальные техники"
      ],
      icon: LightBulbIcon
    },
    {
      id: 3,
      question: "Какой стиль обучения вам ближе?",
      options: [
        "Визуальный (видео, графики)",
        "Аудиальный (лекции, подкасты)",
        "Практический (задачи, проекты)",
        "Смешанный"
      ],
      icon: AcademicCapIcon
    },
    {
      id: 4,
      question: "Какая область науки вас больше всего интересует?",
      options: [
        "Точные науки (математика, физика)",
        "Естественные науки (биология, химия)",
        "Компьютерные науки",
        "Инженерные науки"
      ],
      icon: BeakerIcon
    },
    {
      id: 5,
      question: "Какой уровень сложности материала вы предпочитаете?",
      options: [
        "Начальный",
        "Средний",
        "Продвинутый",
        "Экспертный"
      ],
      icon: StarIcon
    },
    {
      id: 6,
      question: "Какая цель обучения для вас главная?",
      options: [
        "Профессиональное развитие",
        "Личный интерес",
        "Подготовка к экзаменам",
        "Смена карьеры"
      ],
      icon: BookmarkIcon
    },
    {
      id: 7,
      question: "Как вы предпочитаете отслеживать свой прогресс?",
      options: [
        "Через тесты и квизы",
        "Через практические задания",
        "Через проекты",
        "Через систему достижений"
      ],
      icon: SparklesIcon
    }
  ];

  const handleAnswer = (answer) => {
    setAnswers({...answers, [currentQuestion]: answer});
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate('/plan');
    }
  };

  return (
    <div className="flex-1 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-[#4d7eff] to-[#3d6ae6] inline-block text-transparent bg-clip-text">
            Сгенерируйте план обучения за 30 секунд
          </h1>
          <p className="text-gray-400 text-lg">
            Ответьте на несколько вопросов и получите персонализированный план обучения
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#1a1a2e] to-[#2a2a4a] rounded-2xl p-8 shadow-2xl">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <BoltIcon className="h-8 w-8 text-[#4d7eff]" />
              <span className="text-white text-xl font-semibold">
                Вопрос {currentQuestion + 1} из {questions.length}
              </span>
            </div>
            <div className="w-32 h-2 bg-[#2a2a4a] rounded-full">
              <div 
                className="h-2 bg-gradient-to-r from-[#4d7eff] to-[#3d6ae6] rounded-full transition-all duration-500"
                style={{width: `${((currentQuestion + 1) / questions.length) * 100}%`}}
              />
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-4 mb-6">
              {React.createElement(questions[currentQuestion].icon, { className: "h-8 w-8 text-[#4d7eff]" })}
              <h2 className="text-2xl text-white font-semibold">
                {questions[currentQuestion].question}
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="bg-[#2a2a4a] hover:bg-[#3d3d5c] p-6 rounded-xl text-left text-white font-medium transition-all duration-300 hover:scale-105 flex items-center justify-between group"
                >
                  <span>{option}</span>
                  <ArrowRightIcon className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity text-[#4d7eff]" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
