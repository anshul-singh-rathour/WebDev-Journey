import Progress from "./Progress.jsx";
import Answers from "./Answers.jsx";
import { useState } from "react";
import QUESTIONS from "../questions.js";
export default function Question({ index, onSelectAnswer, onSkipAnswers }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });
  let timer = 10000;
  if (answer.selectedAnswer) {
    timer = 1000;
  }
  if (answer.isCorrect !== null) {
    timer = 2000;
  }
  function handleSelectAnswer(answer) {
    if (answer.selectedAnswer) return;
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });
    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[index].answers[0] === answer,
      });
      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }
  let answerState = "";

  if (answer.selectedAnswer && answer.isCorrect === null) {
    answerState = "answered";
  }

  if (answer.isCorrect === true) {
    answerState = "correct";
  }

  if (answer.isCorrect === false) {
    answerState = "wrong";
  }
  return (
    <div id="questions">
      <Progress key={timer} timeout={timer} ontimeout={answer.selectedAnswer === "" ? onSkipAnswers : null} mode={answerState} />
      <h2>{QUESTIONS[index].text}</h2>
      <Answers answers={QUESTIONS[index].answers} selectedAnswer={answer.selectedAnswer} answerState={answerState} onSelect={handleSelectAnswer} />
    </div>
  );
}