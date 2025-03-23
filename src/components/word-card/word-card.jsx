
import React from 'react';
import './word-card.css';

function WordCard() {


  return (
    <div className="word-card">
      <div className="word-card-left">
        <h2>Hello</h2>
      </div>
      <div className="word-card-right">
          <div className="translation-content">
            <p>Привет</p>
          </div>
        
          <button className="show-button">Показать</button>
      </div>
      <div className="prev-button-container">
        <button className="prev-word-btn">Предыдущее</button>
      </div>
      <div className="next-button-container">
        <button className="next-word-btn">Следующее</button>
      </div>
    </div>
  );
}

export default WordCard;