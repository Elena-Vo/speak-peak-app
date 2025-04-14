import React, { useState } from 'react';
import wordsData from '../../data/words';
import TopicWords from '../topic-words/topic-words';
import './dictionary-page.css';

function DictionaryPage() {
    const [selectedTheme, setSelectedTheme] = useState("Все темы");

    const themes = [
        "Все темы",
        ...new Set(wordsData.map((word) => word.theme)),
    ];

    const filteredWords =
        selectedTheme === "Все темы"
            ? wordsData
            : wordsData.filter((word) => word.theme === selectedTheme);

    return (
        <div className="dictionary-page">
            <h2>📖 Словарь</h2>

            <div className="filter-container">
                <label htmlFor="theme-select">Фильтр по теме:</label>
                <select
                    id="theme-select"
                    value={selectedTheme}
                    onChange={(e) => setSelectedTheme(e.target.value)}
                >
                    {themes.map((theme) => (
                        <option key={theme} value={theme}>
                            {theme}
                        </option>
                    ))}
                </select>
            </div>

            <TopicWords words={filteredWords} topicName={selectedTheme} />
        </div>
    );
}

export default DictionaryPage;
