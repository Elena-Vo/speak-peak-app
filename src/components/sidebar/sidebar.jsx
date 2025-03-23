
import React from 'react';
import './sidebar.css';



function Sidebar({ onSelectTopic }) {
  const topics = [
    { id: 1, name: 'Тема 1', status: 'Учить' },
    { id: 2, name: 'Тема 2', status: 'В прогрессе' },
    { id: 3, name: 'Тема 3', status: 'Готово' },
  ];

  // темы по статусам
  const topicsByStatus = {
    'Учить': topics.filter((topic) => topic.status === 'Учить'),
    'В прогрессе': topics.filter((topic) => topic.status === 'В прогрессе'),
    'Готово': topics.filter((topic) => topic.status === 'Готово'),
  };

  return (
    <div className="sidebar">
      <div className="logo">Speak-Peak</div>
      <div className="sidebar-content">
        <h3 className="sidebar-title">Темы</h3>

        {/* Раздел "Учить" */}
        <div className="topic-category">
          <h4>Учить</h4>
          <ul>
            <li>
              Тема 1
              <button className="train-button">Тренировать</button>
            </li>
            <li>
              Тема 2
              <button className="train-button">Тренировать</button>
            </li>
          </ul>
        </div>

        {/* Раздел "В прогрессе" */}
        <div className="topic-category">
          <h4>В прогрессе</h4>
          <ul>
            <li>
              Тема 3
              <button className="train-button">Тренировать</button>
            </li>
          </ul>
        </div>

        {/* Раздел "Готово" */}
        <div className="topic-category">
          <h4>Готово</h4>
          <ul>
            <li>
              Тема 4
              <button className="train-button">Тренировать</button>
            </li>
          </ul>
        </div>
      </div>

      {/* Кнопка "Добавить тему" */}
      <button className="add-topic-btn">+ Добавить тему</button>
    </div>
  );
}

export default Sidebar;

