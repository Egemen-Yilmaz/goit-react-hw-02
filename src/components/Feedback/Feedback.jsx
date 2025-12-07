import css from './Feedback.module.css';

export default function Feedback({ feedback, totalFeedback, positivePercentage }) {

    if (totalFeedback === 0) {
        return <p>No feedback yet!</p>;
    }

    return (
        <ul className={css.feedbackList}>
            <li className={css.feedbackItem}>Good: <span>{feedback.good}</span></li>
            <li className={css.feedbackItem}>Neutral: <span>{feedback.neutral}</span></li>
            <li className={css.feedbackItem}>Bad: <span>{feedback.bad}</span></li>
            <li className={css.feedbackItem}>Total: <span>{totalFeedback}</span></li>
            <li className={css.feedbackItem}>Positive feedback: <span>{positivePercentage}%</span></li>
        </ul>
    )
}