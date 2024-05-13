import { useState } from "react";
import css from "./App.module.css";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Description from "../Description/Description";
import Notification from "../Notification/Notification";

export default function App() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    return setState({ ...state, [feedbackType]: state[feedbackType] + 1 });
  };

  const resetFeedback = () => {
    return setState({
      good: 0,
      neutral: 0,
      bad: 0,
    });
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
        <Feedback good={state.good} neutral={state.neutral} bad={state.bad} />
      ) : (
        <Notification />
      )}
    </div>
  );
}
