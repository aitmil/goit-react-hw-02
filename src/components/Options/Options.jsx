import css from "./Options.module.css";

export default function Options() {
  return (
    <ul className={css.list}>
      <li>
        <button className={css.btn}>Good</button>
      </li>
      <li>
        <button className={css.btn}>Neutral</button>
      </li>
      <li>
        <button className={css.btn}>Bad</button>
      </li>
    </ul>
  );
}
