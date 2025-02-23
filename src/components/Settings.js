import React from 'react';
import { useLearning } from '../contexts/LearningContext';
import { Link } from 'react-router-dom';
import {
  Cog6ToothIcon,
  UserIcon,
  BellIcon,
  ShieldCheckIcon,
  LanguageIcon,
  SwatchIcon
} from '@heroicons/react/24/outline';

const Settings = () => {
  const { 
    aiPersonality, 
    changeAiPersonality, 
    userPreferences, 
    updatePreferences,
    personalities 
  } = useLearning();

  const settingsSections = [
    {
      title: 'Персонализация AI',
      icon: UserIcon,
      options: Object.values(personalities).map(p => ({
        label: p.name,
        value: p.id,
        description: p.description
      }))
    },
    {
      title: 'Уведомления',
      icon: BellIcon,
      options: [
        { label: 'Push-уведомления', type: 'toggle' },
        { label: 'Email-рассылка', type: 'toggle' },
        { label: 'Напоминания', type: 'toggle' }
      ]
    },
    {
      title: 'Конфиденциальность',
      icon: ShieldCheckIcon,
      options: [
        { label: 'Публичный профиль', type: 'toggle' },
        { label: 'Показывать прогресс', type: 'toggle' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1a] to-[#1a1a2e] p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
          <Cog6ToothIcon className="h-8 w-8" />
          Настройки
        </h1>

        {settingsSections.map((section, index) => (
          <div key={index} className="bg-[#1a1a2e] rounded-xl p-6 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <section.icon className="h-6 w-6 text-[#4d7eff]" />
              <h2 className="text-xl font-semibold text-white">{section.title}</h2>
            </div>

            <div className="space-y-4">
              {section.options.map((option, optIndex) => (
                <div key={optIndex} className="flex items-center justify-between p-4 bg-[#2a2a4a] rounded-lg">
                  <div>
                    <h3 className="text-white font-medium">{option.label}</h3>
                    {option.description && (
                      <p className="text-gray-400 text-sm mt-1">{option.description}</p>
                    )}
                  </div>
                  {option.type === 'toggle' ? (
                    <button className="w-12 h-6 bg-gray-600 rounded-full relative">
                      <div className="w-4 h-4 bg-white rounded-full absolute left-1 top-1" />
                    </button>
                  ) : (
                    <button className="text-[#4d7eff] hover:text-white transition-colors">
                      Изменить
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Settings; 