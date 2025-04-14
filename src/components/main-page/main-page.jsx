
import React, { useState } from 'react';
import WordCard from '../word-card/word-card';
import './main-page.css';
/* import wordsData from '../../data/words'; */
import TopicWords from '../topic-words/topic-words'

function MainPage({ selectedTopic, isTraining, words}) {
  
  

    

  return (
    <div className="main-page">
      {!selectedTopic && !isTraining && (
        <div className="main-page-placeholder">
          <h2>Добро пожаловать!</h2>
          <p>Выбери тему из списка слева, чтобы увидеть список слов</p>
          <p>или нажми кнопку "Тренировать", чтобы начать тренировку.</p>
        </div>
      )}

      {selectedTopic && isTraining && (
        <div className="training-mode">
          <h2>Режим тренировки: {selectedTopic}</h2>
          <WordCard words={words} />
        </div>
      )}

      {selectedTopic && !isTraining && (
        <TopicWords words={words} topicName={selectedTopic} />
      )}
    </div>
  );
}



export default MainPage;