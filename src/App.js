
import React, { useState } from 'react'; 
import Header from './components/header/header'; 
import Sidebar from './components/sidebar/sidebar'; 
import MainPage from './components/main-page/main-page'; 
import Footer from './components/footer/footer';
import AddTopicPage from "./components/add-topic-page/add-topic-page";



import './index.css';
import "./App.css"

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [isTraining, setIsTraining] = useState(false);
  const [isAddingTopic, setIsAddingTopic] = useState(false);
  
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

  // добавление темы
  const handleAddTopicClick = () => {
    setSelectedTopic(null);
    setIsTraining(false);
    setIsAddingTopic(true);
};

  return (
    <div className="app">
      <Sidebar 
      onSelectTopic={handleSelectTopic} onStartTraining={handleStartTraining} 
      onAddTopic={handleAddTopicClick}/>
      <div className="main-content">
                <Header />
                {isAddingTopic ? (
                    <AddTopicPage onCancel={() => setIsAddingTopic(false)} />
                ) : (
                    <MainPage
                        selectedTopic={selectedTopic}
                        isTraining={isTraining}
                    />
                )}
                <Footer />
            </div>
    </div>
  );
}

export default App;
