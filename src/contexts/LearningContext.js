import React, { createContext, useContext, useState, useEffect } from 'react';
import { LEARNING_TECHNIQUES, AI_PERSONALITIES } from '../constants/learningTechniques';

const LearningContext = createContext();

export const useLearning = () => {
  const context = useContext(LearningContext);
  if (!context) {
    throw new Error('useLearning must be used within a LearningProvider');
  }
  return context;
};

export const LearningProvider = ({ children }) => {
  const [selectedTechnique, setSelectedTechnique] = useState(null);
  const [aiPersonality, setAiPersonality] = useState(AI_PERSONALITIES.MENTOR);
  const [learningHistory, setLearningHistory] = useState([]);
  const [userPreferences, setUserPreferences] = useState({
    studyTime: '3-5 часов',
    learningStyle: 'visual',
    difficulty: 'intermediate'
  });

  const selectTechnique = (techniqueId) => {
    const technique = LEARNING_TECHNIQUES[techniqueId];
    setSelectedTechnique(technique);
    // Сохраняем выбор в localStorage
    localStorage.setItem('selectedTechnique', techniqueId);
  };

  const changeAiPersonality = (personalityId) => {
    setAiPersonality(AI_PERSONALITIES[personalityId]);
    localStorage.setItem('aiPersonality', personalityId);
  };

  const addLearningSession = (session) => {
    setLearningHistory(prev => [...prev, { ...session, timestamp: new Date() }]);
  };

  const updatePreferences = (newPreferences) => {
    setUserPreferences(prev => ({ ...prev, ...newPreferences }));
    localStorage.setItem('userPreferences', JSON.stringify(newPreferences));
  };

  // Загружаем сохраненные настройки при инициализации
  useEffect(() => {
    const savedTechnique = localStorage.getItem('selectedTechnique');
    const savedPersonality = localStorage.getItem('aiPersonality');
    const savedPreferences = localStorage.getItem('userPreferences');

    if (savedTechnique) {
      setSelectedTechnique(LEARNING_TECHNIQUES[savedTechnique]);
    }
    if (savedPersonality) {
      setAiPersonality(AI_PERSONALITIES[savedPersonality]);
    }
    if (savedPreferences) {
      setUserPreferences(JSON.parse(savedPreferences));
    }
  }, []);

  const value = {
    selectedTechnique,
    selectTechnique,
    aiPersonality,
    changeAiPersonality,
    learningHistory,
    addLearningSession,
    userPreferences,
    updatePreferences,
    techniques: LEARNING_TECHNIQUES,
    personalities: AI_PERSONALITIES
  };

  return (
    <LearningContext.Provider value={value}>
      {children}
    </LearningContext.Provider>
  );
}; 