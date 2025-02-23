import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LearningProvider } from './contexts/LearningContext';
import Layout from './components/layout/Layout';
import Dashboard from './components/Dashboard';
import Courses from './components/Courses';
import Questions from './components/Questions';
import Plan from './components/Plan';
import CoursePage from './components/coursepage';
import AIAssistant from './components/aiassistant';
import Settings from './components/Settings';
import Profile from './components/Profile';
import NotFound from './components/NotFound';
import './index.css';

function App() {
  return (
    <LearningProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout><Dashboard /></Layout>} />
          <Route path="/courses" element={<Layout><Courses /></Layout>} />
          <Route path="/questions" element={<Layout><Questions /></Layout>} />
          <Route path="/plan" element={<Layout><Plan /></Layout>} />
          <Route path="/course/:id" element={<Layout><CoursePage /></Layout>} />
          <Route path="/aiassistant" element={<Layout><AIAssistant /></Layout>} />
          <Route path="/settings" element={<Layout><Settings /></Layout>} />
          <Route path="/profile" element={<Layout><Profile /></Layout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </LearningProvider>
  );
}

export default App;