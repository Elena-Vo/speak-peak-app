import React from 'react';
import './topic-words.css';

function TopicWords({ words }) {
  return (
    <div className="topic-words">
      <h2>Тема 1</h2>
      <button className="add-word-button">Добавить слово</button> 
      <table>
        <thead>
          <tr>
            <th>Слово</th>
            <th>Транскрипция</th>
            <th>Перевод</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {words.map((word) => (
            <tr key={word.id}>
              <td>{word.word}</td>
              <td>{word.transcription}</td>
              <td>{word.translation}</td>
              <td>
                <button className="edit-button">Редактировать</button>
                <button className="delete-button">Удалить</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TopicWords;