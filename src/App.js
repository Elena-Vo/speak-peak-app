
import React, { useState, useMemo } from 'react'; 
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Header from './components/header/header'; 
import Sidebar from './components/sidebar/sidebar'; 
import MainPage from './components/main-page/main-page'; 
import AddTopicPage from './components/add-topic-page/add-topic-page';
import DictionaryPage from './components/dictionary-page/dictionary-page';
import StatsPage from './components/stats-page/stats-page';
import AboutPage from './components/about-page/about-page';
/* import WordCard from './components/word-card/word-card'; */
import Footer from './components/footer/footer';
import wordsData from './data/words';



import './index.css';
import './App.css'

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedTopic, setSelectedTopic] = useState(null);
  const [isTraining, setIsTraining] = useState(false);
  const [isAddingTopic, setIsAddingTopic] = useState(false);
  
  //слова по теме
  const words = useMemo(() => {
    return selectedTopic
      ? wordsData.filter((word) => word.theme === selectedTopic)
      : [];
  }, [selectedTopic]);
  
  const selectTopic = (topicName, training = false) => {
    setSelectedTopic(topicName);
    setIsTraining(training);
    setIsAddingTopic(false);
    if (location.pathname !== '/') navigate('/');
  };


  
  // выбор темы- отображение слов
  const handleSelectTopic = (topicName) => {
    selectTopic(topicName, false);
  };

  // переключение на карточки)
  const handleStartTraining = (topicName) => {
    selectTopic(topicName, true);
  };

  

  // добавление темы
  const handleAddTopicClick = () => {
    setSelectedTopic(null);
    setIsTraining(false);
    setIsAddingTopic(true);
    setTimeout(() => {
      navigate("/");
    }, 0);
};

const handleLogoClick = () => {
  setSelectedTopic(null);
  setIsTraining(false);
  setIsAddingTopic(false);
  navigate('/');
};

return (
  <div className="app">
    <Sidebar
      onSelectTopic={handleSelectTopic}
      onStartTraining={handleStartTraining}
      onAddTopic={handleAddTopicClick}
    />
    <div className="main-content">
      <Header onLogoClick={handleLogoClick} />
      <div className="page-content">
        <Routes>
          <Route
            path="/"
            element={
              isAddingTopic ? (
                <AddTopicPage onCancel={() => setIsAddingTopic(false)} />
              ) : (
                <MainPage 
                  selectedTopic={selectedTopic} 
                  isTraining={isTraining} 
                  words={words} 
                />
              )
            }
          />
          <Route path="/dictionary" element={<DictionaryPage />} />
          <Route path="/stats" element={<StatsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </div>
);
}


export default App;
