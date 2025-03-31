
import React, { useState } from 'react';
import WordCard from '../word-card/word-card';
import './main-page.css';
import wordsData from '../../data/words';
import TopicWords from "../topic-words/topic-words"

function MainPage({ selectedTopic, isTraining}) {
  
  const words = selectedTopic
    ? wordsData.filter((word) => word.theme === selectedTopic)
    : [];

    

    return (
      <div className="main-page">
        {isTraining ? (
          <div className="training-mode">
            <h2>Режим тренировки: {selectedTopic}</h2>
            <WordCard words={words} />
          </div>
        ) : (
          selectedTopic && <TopicWords words={words} topicName={selectedTopic}/>
        )}
      </div>
    );
}


export default MainPage;