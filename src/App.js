
import React, { useState } from 'react'; 
import Header from './components/header/header'; 
import Sidebar from './components/sidebar/sidebar'; 
import MainPage from './components/main-page/main-page'; 
import Footer from './components/footer/footer';
/* import wordsData from './data/words'; */

import './index.css';
import "./App.css"

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [isTraining, setIsTraining] = useState(false);
  
  // выбор темы- отображение слов
  const handleSelectTopic = (topicName) => {
    setSelectedTopic(topicName);
    setIsTraining(false);  
  };

  // переключение на карточки)
  const handleStartTraining = (topicName) => {
    setSelectedTopic(topicName);
    setIsTraining(true); 
  };

  return (
    <div className="app">
      <Sidebar onSelectTopic={handleSelectTopic} onStartTraining={handleStartTraining} />
      <div className="main-content">
        <Header />
        <MainPage selectedTopic={selectedTopic} isTraining={isTraining}/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
