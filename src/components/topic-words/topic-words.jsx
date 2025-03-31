import React, { useState, useEffect } from 'react';
import './topic-words.css';

function TopicWords({ words, topicName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedWords, setEditedWords] = useState(words);

  useEffect(() => {
    setEditedWords(words);
  }, [words]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setEditedWords(words);
    setIsEditing(false);
  };

  const handleChange = (wordId, field, value) => {
    setEditedWords((prevWords) =>
      prevWords.map((word) =>
        word.id === wordId ? { ...word, [field]: value } : word
      )
    );
  };

  const handleSaveEdit = () => {
    setIsEditing(false);
    // Здесь можно добавить логику сохранения в базу данных
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
          {editedWords.map((word) => (
            <tr key={word.id}>
              <td>
                {isEditing ? (
                  <input
                    type="text"
                    value={word.word}
                    onChange={(e) => handleChange(word.id, 'word', e.target.value)}
                  />
                ) : (
                  word.word
                )}
              </td>
              <td>
                {isEditing ? (
                  <input
                    type="text"
                    value={word.transcription}
                    onChange={(e) => handleChange(word.id, 'transcription', e.target.value)}
                  />
                ) : (
                  word.transcription
                )}
              </td>
              <td>
                {isEditing ? (
                  <input
                    type="text"
                    value={word.translation}
                    onChange={(e) => handleChange(word.id, 'translation', e.target.value)}
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
          <button className="add-word-button">Добавить слово</button>
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