import React from "react";
import wordsData from "../../data/words";
import "./stats-page.css";

function StatsPage({ words = [], viewedCount, learnedCount }) {
    const topics = [...new Set(words.map((w) => w.theme))];

    const getProgress = (wordsForTopic) => {
        const total = wordsForTopic.length;
        const viewed = wordsForTopic.filter(
            (w) => w.status === "Просмотрено"
        ).length;
        const learned = wordsForTopic.filter(
            (w) => w.status === "Готово"
        ).length;

        return { total, viewed, learned };
    };

    return (
        <div className="stats-page">
            <h2>📈 Статистика по темам</h2>
            <table className="stats-table">
                <thead>
                    <tr>
                        <th>Тема</th>
                        <th>Всего слов</th>
                        <th>Просмотрено</th>
                        <th>Выучено</th>
                    </tr>
                </thead>
                <tbody>
                    {topics.map((topic) => {
                        const wordsForTopic = words.filter(
                            (w) => w.theme === topic
                        );
                        const stats = getProgress(wordsForTopic);
                        return (
                            <tr key={topic}>
                                <td>{topic}</td>
                                <td>{stats.total}</td>
                                <td>{stats.viewed}</td>
                                <td>{stats.learned}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="progress-info">
                <h2>Общая статистика:</h2>
                <p>Просмотрено всего: {viewedCount}</p>
                <p>Выучено всего: {learnedCount}</p>
            </div>
        </div>
    );
}

export default StatsPage;
