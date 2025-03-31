
import React from 'react';
import './sidebar.css';



function Sidebar({ onSelectTopic, onStartTraining  }) {
  const topics = [
    { id: 1, name: 'Тема 1', status: 'Учить' },
    { id: 2, name: 'Тема 2', status: 'В прогрессе' },
    { id: 3, name: 'Тема 3', status: 'Готово' },
  ];

  // темы по статусам
  /* const topicsByStatus = {
    'Учить': topics.filter((topic) => topic.status === 'Учить'),
    'В прогрессе': topics.filter((topic) => topic.status === 'В прогрессе'),
    'Готово': topics.filter((topic) => topic.status === 'Готово'),
  }; */

  const handleTopicClick = (topicName) => {
    onSelectTopic(topicName);  // Передача в Main-Page
  };


  return (
    <div className="sidebar">
      <div className="logo">Speak-Peak</div>
      <div className="sidebar-content">
        <h3 className="sidebar-title">Темы</h3>
        <ul className="topics-list">
          {topics.map((topic) => (
            <li key={topic.id} className="topic-item">
              <span onClick={() => onSelectTopic(topic.name)}>{topic.name}</span>
              <button 
                className="train-button" 
                onClick={() => onStartTraining(topic.name)}
              >
                Тренировать
              </button>
            </li>
          ))}
        </ul>
      </div>
      <button className="add-topic-btn">+ Добавить тему</button>
    </div>
  );
}

export default Sidebar;

