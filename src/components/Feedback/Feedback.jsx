import css from "./Feedback.module.css";

export default function Feedback() {
  return (
    <ul className={css.box}>
      <li className={css.item}>Good:</li>
      <li className={css.item}>Neutral:</li>
      <li className={css.item}>Bad:</li>
    </ul>
  );
}
