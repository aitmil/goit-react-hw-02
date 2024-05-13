import { useEffect, useState } from "react";
import css from "./App.module.css";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Description from "../Description/Description";
import Notification from "../Notification/Notification";

export default function App() {
  const initialState = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const storageState = localStorage.getItem("savedState");

  const [state, setState] = useState(
    storageState !== null ? JSON.parse(storageState) : initialState
  );

  const updateFeedback = (feedbackType) => {
    return setState({ ...state, [feedbackType]: state[feedbackType] + 1 });
  };

  useEffect(() => {
    localStorage.setItem("savedState", JSON.stringify(state));
  }, [state]);

  const resetFeedback = () => {
    return setState(initialState);
  };

  let totalFeedback = 0;
  Object.values(state).forEach((state) => (totalFeedback += state));

  return (
    <div className={css.container}>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          good={state.good}
          neutral={state.neutral}
          bad={state.bad}
          totalFeedback={totalFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
