import mechanics from '../assets/mechanics.jpg';
import ai from '../assets/ai.jpg';

export const COURSES = [
  {
    id: 1,
    title: "Основы квантовой механики",
    description: "Погрузитесь в удивительный мир квантовой физики с интерактивными симуляциями",
    image: mechanics,
    progress: 35,
    students: 1240,
    duration: "8 недель",
    instructor: "Др. Александр Петров",
    rating: 4.8,
    level: "Средний",
    topics: [
      "Волновая функция",
      "Уравнение Шрёдингера",
      "Квантовые состояния",
      "Принцип неопределенности"
    ]
  },
  {
    id: 2,
    title: "Искусственный интеллект",
    description: "Изучите основы машинного обучения и нейронных сетей с практическими проектами",
    image: ai,
    progress: 72,
    students: 2100,
    duration: "12 недель",
    instructor: "Проф. Мария Иванова",
    rating: 4.9,
    level: "Продвинутый",
    topics: [
      "Машинное обучение",
      "Нейронные сети",
      "Deep Learning",
      "Computer Vision"
    ]
  }
];

export const COURSE_CATEGORIES = [
  {
    id: 'physics',
    name: 'Физика',
    count: 24
  },
  {
    id: 'math',
    name: 'Математика',
    count: 18
  },
  {
    id: 'cs',
    name: 'Информатика',
    count: 32
  },
  {
    id: 'chemistry',
    name: 'Химия',
    count: 15
  }
]; 