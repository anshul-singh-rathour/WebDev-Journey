import { useState, useCallback } from "react";
import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsOver = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevState) => {
      return [...prevState, selectedAnswer];
    });
  }, []);

  const skipAnswers = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

  if (quizIsOver) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      {" "}
      <Question index={activeQuestionIndex} key={activeQuestionIndex} onSelectAnswer={handleSelectAnswer} onSkipAnswers={skipAnswers} />
    </div>
  );
}