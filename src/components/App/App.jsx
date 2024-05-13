import { useState } from "react";
import css from "./App.module.css";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Description from "../Description/Description";

export default function App() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    return setState({ ...state, [feedbackType]: state[feedbackType] + 1 });
  };

  return (
    <div className={css.container}>
      <Description />
      <Options updateFeedback={updateFeedback} />
      <Feedback good={state.good} neutral={state.neutral} bad={state.bad} />
    </div>
  );
}
