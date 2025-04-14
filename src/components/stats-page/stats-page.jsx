import React from 'react';
import wordsData from '../../data/words';
import './stats-page.css';

function StatsPage() {
    const topics = [...new Set(wordsData.map((word) => word.theme))];

    const getProgress = (words) => {
        const total = words.length;
        const toLearn = words.filter((w) => w.status === "Учить").length;
        const inProgress = words.filter(
            (w) => w.status === "В прогрессе"
        ).length;
        const learned = words.filter((w) => w.status === "Готово").length;

        return { total, toLearn, inProgress, learned };
    };

    return (
        <div className="stats-page">
            <h2>📈 Статистика по темам</h2>
            <table className="stats-table">
                <thead>
                    <tr>
                        <th>Тема</th>
                        <th>Всего слов</th>
                        <th>Учить</th>
                        <th>В прогрессе</th>
                        <th>Готово</th>
                    </tr>
                </thead>
                <tbody>
                    {topics.map((topic) => {
                        const words = wordsData.filter(
                            (w) => w.theme === topic
                        );
                        const stats = getProgress(words);
                        return (
                            <tr key={topic}>
                                <td>{topic}</td>
                                <td>{stats.total}</td>
                                <td>{stats.toLearn}</td>
                                <td>{stats.inProgress}</td>
                                <td>{stats.learned}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default StatsPage;
