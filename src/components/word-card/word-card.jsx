
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './word-card.css';

function WordCard({ words, onViewed, onLearned, updateStatus }) {
  const [index, setIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);
  const [isLearned, setIsLearned] = useState(false);

  const currentWord = words[index];
  const showButtonRef = useRef(null);

  useEffect(() => {
    setShowTranslation(false);
    setIsLearned(currentWord?.status === 'Готово');
    showButtonRef.current?.focus();
  }, [index, currentWord]);

  if (!currentWord) return <p>Нет слов в теме</p>;

  const handleShowTranslation = () => {
    
    if (!showTranslation && currentWord.status !== 'Просмотрено' && currentWord.status !== 'Готово') {
      updateStatus(currentWord.id, 'Просмотрено');
      onViewed();
    }
    setShowTranslation(true); // Показать перевод
  };

  const handleHideTranslation = () => {
    setShowTranslation(false); // Скрыть перевод
  };

  const handleLearned = () => {
    if (currentWord.status !== 'Готово') {
      updateStatus(currentWord.id, 'Готово');
      onLearned();
      setIsLearned(true);
    }
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % words.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + words.length) % words.length);
  };

  return (
    <div className="word-card-wrapper">
      <div className="word-card">
        <div className="card-header">
          <div className="learned-tag">Слово {index + 1} из {words.length}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button className="learn-button" onClick={handleLearned}>
              Я знаю это слово
            </button>
            {isLearned && <span className="learned-tag">✅ Выучено!</span>}
          </div>
        </div>

        <div className="word-card-left">
          <h2>{currentWord.word}</h2>
          <p>{currentWord.transcription}</p>
        </div>

        <div className="word-card-right">
          {showTranslation ? (
            <div className="translation-content">
              <p>{currentWord.translation}</p>
              <button className="show-button" onClick={handleHideTranslation}>
                Скрыть перевод
              </button>
            </div>
          ) : (
            <button
              className="show-button"
              onClick={handleShowTranslation}
              ref={showButtonRef}
            >
              Показать перевод
            </button>
          )}
        </div>

        <div className="prev-button-container">
          <button className="prev-word-btn" onClick={handlePrev}>
            ⬅ Предыдущее
          </button>
        </div>
        <div className="next-button-container">
          <button className="next-word-btn" onClick={handleNext}>
            Следующее ➡
          </button>
        </div>
      </div>

      <div className="stats-link-container">
        <Link to="/stats" className="stats-link">
          📊 Перейти к статистике
        </Link>
      </div>
    </div>
  );
}

export default WordCard;