import css from "./Feedback.module.css";

export default function Feedback({ good, neutral, bad, totalFeedback }) {
  return (
    <ul className={css.list}>
      <li className={css.item}>Good: {good}</li>
      <li className={css.item}>Neutral: {neutral}</li>
      <li className={css.item}>Bad: {bad}</li>
      <li className={css.item}>Total: {totalFeedback}</li>
      <li className={css.item}>
        Positive: {Math.round((good / totalFeedback) * 100)}%
      </li>
    </ul>
  );
}
