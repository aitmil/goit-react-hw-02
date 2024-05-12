import { useState } from "react";
import css from "./App.module.css";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Description from "../Description/Description";

export default function App() {
  const initialState = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const [clicks, setClicks] = useState();

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className={css.container}>
      <Description />
      <Options onClick={handleClick} click={clicks} />
      <Feedback />
    </div>
  );
}
