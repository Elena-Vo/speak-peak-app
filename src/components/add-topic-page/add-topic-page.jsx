import React, { useState } from 'react';
import './add-topic-page.css';

function AddTopicPage({ onCancel }) {
    const [topicName, setTopicName] = useState("");
    const [words, setWords] = useState([]);

    const handleAddWord = () => {
        setWords([...words, { word: "", transcription: "", translation: "" }]);
    };

    const handleWordChange = (index, field, value) => {
        const newWords = [...words];
        newWords[index][field] = value;
        setWords(newWords);
    };

    const handleSave = () => {
        alert('Сохранение пока не реализовано 🙈');
        onCancel();
    };

    return (
        <div className="add-topic-page">
            <h2>Добавить новую тему</h2>
            <input
                type="text"
                placeholder="Название темы"
                value={topicName}
                onChange={(e) => setTopicName(e.target.value)}
            />
            <button className="add-word-button" onClick={handleAddWord}>+ Добавить слово</button>
            {words.map((word, index) => (
                <div key={index} className="word-entry">
                    <input
                        type="text"
                        placeholder="Слово"
                        value={word.word}
                        onChange={(e) =>
                            handleWordChange(index, "word", e.target.value)
                        }
                    />
                    <input
                        type="text"
                        placeholder="Транскрипция"
                        value={word.transcription}
                        onChange={(e) =>
                            handleWordChange(
                                index,
                                "transcription",
                                e.target.value
                            )
                        }
                    />
                    <input
                        type="text"
                        placeholder="Перевод"
                        value={word.translation}
                        onChange={(e) =>
                            handleWordChange(
                                index,
                                "translation",
                                e.target.value
                            )
                        }
                    />
                </div>
            ))}
            <div className="action-buttons">
                <button className="save-button" onClick={handleSave}>
                    Сохранить тему
                </button>
                <button className="cancel-button" onClick={onCancel}>
                    Отмена
                </button>
            </div>
        </div>
    );
}

export default AddTopicPage;
