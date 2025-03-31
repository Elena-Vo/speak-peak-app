
import React, { useState } from 'react';
import './word-card.css';

function WordCard({ words }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  //текущее слово
  const currentWord = words[currentIndex];
  //перевод
  const [showTranslation, setShowTranslation] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : words.length - 1));
    setShowTranslation(false); 
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < words.length - 1 ? prevIndex + 1 : 0));
    setShowTranslation(false); // скрыть перевод при смене карточки
  };

  const toggleTranslation = () => {
    setShowTranslation(!showTranslation);
  };

  return (
    <div className="word-card">
      <div className="word-card-left">
        <h2>{currentWord.word}</h2>
        <p>{currentWord.transcription}</p>
      </div>
      <div className="word-card-right">
      {showTranslation && (
          <div className="translation-content">
            <p>{currentWord.translation}</p>
          </div>
        )}
        
          <button className="show-button" onClick={toggleTranslation}>{showTranslation ? 'Скрыть' : 'Показать'}</button>
      </div>
      <div className="prev-button-container">
        <button className="prev-word-btn"onClick={handlePrev}>Предыдущее</button>
      </div>
      <div className="next-button-container">
        <button className="next-word-btn" onClick={handleNext}>Следующее</button>
      </div>
    </div>
  );
}

export default WordCard;