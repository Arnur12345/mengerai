import React, { useState } from 'react';
import { useLearning } from '../contexts/LearningContext';
import {
  LightBulbIcon,
  PaperAirplaneIcon
} from '@heroicons/react/24/outline';

const AIAssistant = () => {
  const { selectedTechnique, aiPersonality } = useLearning();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      type: 'ai',
      text: aiPersonality.greeting,
      time: new Date()
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Добавляем сообщение пользователя
    setMessages(prev => [...prev, {
      type: 'user',
      text: message,
      time: new Date()
    }]);

    // Имитируем ответ AI
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'ai',
        text: 'Отлично! Вы правильно понимаете концепцию. Особенно MengerAI поможет вам в изучении этой темы.',
        time: new Date()
      }]);
    }, 1000);

    setMessage('');
  };

  return (
    <div className="flex-1 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-[#1a1a2e] to-[#2a2a4a] rounded-2xl p-8 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <LightBulbIcon className="h-8 w-8 text-yellow-400" />
            <h2 className="text-2xl font-bold text-white">
              {selectedTechnique ? selectedTechnique.name : 'Техника Фейнмана'}
            </h2>
          </div>
          <p className="text-gray-400">
            {selectedTechnique 
              ? selectedTechnique.description 
              : 'Объясните концепцию простыми словами, как будто вы обучаете кого-то другого. Это поможет выявить пробелы в вашем понимании и улучшить усвоение материала.'}
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#1a1a2e] to-[#2a2a4a] rounded-2xl p-8 mb-8 h-[500px] flex flex-col">
          <div className="flex-1 overflow-y-auto space-y-6 mb-6">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[70%] rounded-2xl p-4 ${
                  msg.type === 'user' 
                    ? 'bg-gradient-to-r from-[#4d7eff] to-[#3d6ae6] text-white'
                    : 'bg-[#2a2a4a] text-gray-300'
                }`}>
                  <p>{msg.text}</p>
                  <p className="text-xs mt-2 opacity-70">
                    {msg.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="flex gap-4">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Напишите ваше сообщение..."
              className="flex-1 bg-[#2a2a4a] text-white rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#4d7eff]"
            />
            <button 
              type="submit"
              className="bg-gradient-to-r from-[#4d7eff] to-[#3d6ae6] text-white p-4 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <PaperAirplaneIcon className="h-6 w-6" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
