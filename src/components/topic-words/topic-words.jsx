import React, { useState, useEffect } from 'react';
import './topic-words.css';

function TopicWords({ words, topicName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedWords, setEditedWords] = useState(words);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setEditedWords(words);
  }, [words]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setEditedWords(words);
    setErrors({});
    setIsEditing(false);
  };

  const handleChange = (wordId, field, value) => {
    setEditedWords(prevWords =>
      prevWords.map(word =>
        word.id === wordId ? { ...word, [field]: value } : word
      )
    );

    // Удаляем ошибку при вводе
    setErrors(prev => ({
      ...prev,
      [wordId]: {
        ...prev[wordId],
        [field]: !value.trim()
      }
    }));
  };

  const validateWords = () => {
    const newErrors = {};
    editedWords.forEach(word => {
      const wordErrors = {};
      if (!word.word.trim()) wordErrors.word = true;
      if (!word.transcription.trim()) wordErrors.transcription = true;
      if (!word.translation.trim()) wordErrors.translation = true;

      if (Object.keys(wordErrors).length > 0) {
        newErrors[word.id] = wordErrors;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSaveEdit = () => {
    if (validateWords()) {
      console.log('Сохранены слова:', editedWords);
      setIsEditing(false);
    } else {
      alert('Пожалуйста, заполните все поля перед сохранением.');
    }
  };

  const handleAddWord = () => {
    const newWord = {
      id: Date.now(),
      word: '',
      transcription: '',
      translation: '',
      theme: topicName,
    };
    setEditedWords(prev => [...prev, newWord]);
  };

  return (
    <div className="topic-words">
      <h2>{topicName}</h2>

      <table>
        <thead>
          <tr>
            <th>Слово</th>
            <th>Транскрипция</th>
            <th>Перевод</th>
            {isEditing && <th>Действия</th>}
          </tr>
        </thead>
        <tbody>
          {editedWords.map(word => (
            <tr key={word.id}>
              <td>
                {isEditing ? (
                  <input
                    type="text"
                    placeholder="Слово"
                    value={word.word}
                    onChange={e =>
                      handleChange(word.id, 'word', e.target.value)
                    }
                    className={`word-input ${
                      errors[word.id]?.word ? 'input-error' : ''
                    }`}
                  />
                ) : (
                  word.word
                )}
              </td>
              <td>
                {isEditing ? (
                  <input
                    type="text"
                    placeholder="Транскрипция"
                    value={word.transcription}
                    onChange={e =>
                      handleChange(word.id, 'transcription', e.target.value)
                    }
                    className={`word-input ${
                      errors[word.id]?.transcription ? 'input-error' : ''
                    }`}
                  />
                ) : (
                  word.transcription
                )}
              </td>
              <td>
                {isEditing ? (
                  <input
                    type="text"
                    placeholder="Перевод"
                    value={word.translation}
                    onChange={e =>
                      handleChange(word.id, 'translation', e.target.value)
                    }
                    className={`word-input ${
                      errors[word.id]?.translation ? 'input-error' : ''
                    }`}
                  />
                ) : (
                  word.translation
                )}
              </td>
              {isEditing && (
                <td>
                  <button className="delete-button">Удалить</button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      {!isEditing ? (
        <button className="edit-button" onClick={handleEditClick}>
          Редактировать
        </button>
      ) : (
        <div className="button-group">
          <button className="add-word-button" onClick={handleAddWord}>
            Добавить слово
          </button>
          <button className="save-button" onClick={handleSaveEdit}>
            Сохранить
          </button>
          <button className="cancel-button" onClick={handleCancelEdit}>
            Отмена
          </button>
        </div>
      )}
    </div>
  );
}

export default TopicWords; 