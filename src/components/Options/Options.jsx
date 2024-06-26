import css from "./Options.module.css";

export default function Options({
  updateFeedback,
  totalFeedback,
  resetFeedback,
}) {
  return (
    <ul className={css.list}>
      <li>
        <button onClick={() => updateFeedback("good")} className={css.btn}>
          Good
        </button>
      </li>
      <li>
        <button onClick={() => updateFeedback("neutral")} className={css.btn}>
          Neutral
        </button>
      </li>
      <li>
        <button onClick={() => updateFeedback("bad")} className={css.btn}>
          Bad
        </button>
      </li>
      {totalFeedback > 0 && (
        <li>
          <button onClick={resetFeedback} className={css.btn}>
            Reset
          </button>
        </li>
      )}
    </ul>
  );
}
