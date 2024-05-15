import css from "./Feedback.module.css";

export default function Feedback({
  good,
  neutral,
  bad,
  totalFeedback,
  positive,
}) {
  return (
    <ul className={css.list}>
      <li className={css.item}>Good: {good}</li>
      <li className={css.item}>Neutral: {neutral}</li>
      <li className={css.item}>Bad: {bad}</li>
      <li className={css.item}>Total: {totalFeedback}</li>
      <li className={css.item}>Positive: {positive}%</li>
    </ul>
  );
}
