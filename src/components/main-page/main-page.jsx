
import React, { useState } from 'react';
import WordCard from '../word-card/word-card';
import './main-page.css';
/* import wordsData from '../../data/words'; */
import TopicWords from '../topic-words/topic-words'

function MainPage({ selectedTopic, isTraining, words, onViewed, onLearned }) {
  const updateStatus = (wordId, status) => {
    const index = words.findIndex(word => word.id === wordId);
    if (index !== -1) {
      words[index].status = status;
    }
  };

  return (
    <div className="main-page">
      {selectedTopic ? (
        isTraining ? (
          <WordCard
            words={words}
            onViewed={onViewed}
            onLearned={onLearned}
            updateStatus={updateStatus} 
          />
          
        ) : (
          <TopicWords words={words} />
        )
      ) : (
        <p>Выберите тему для изучения</p>
      )}
    </div>
  );
}




export default MainPage;