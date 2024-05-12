import { useState } from "react";
import css from "./App.module.css";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";

export default function App() {
  return (
    <>
      <h1 className={css.title}>Sip Happens Café</h1>
      <p className={css.text}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>

      <Feedback />
      <Options />
    </>
  );
}
