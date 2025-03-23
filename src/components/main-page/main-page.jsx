
import React from 'react';
import WordCard from '../word-card/word-card';
import './main-page.css';
import wordsData from '../../data/words';
import TopicWords from "../topic-words/topic-words"

function MainPage({ isTraining, trainingTopic }) {
  const words = isTraining
    ? wordsData.filter((word) => word.theme === trainingTopic) // Фильтруем слова по теме
    : wordsData.filter((word) => word.theme === 'Тема 1'); // По умолчанию показываем пока"Тему 1"

  return (
    <div className="main-page">
      {isTraining ? (
        <div className="training-mode">
          <h2>Режим тренировки: {trainingTopic}</h2>
          <WordCard words={words} />
        </div>
      ) : (
        <TopicWords words={words} />
      )}
    </div>
  );
}

export default MainPage;