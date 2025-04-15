import { useState } from "react";
import { questions } from "../constants";
import Game from "../components/Game";
import Result from "../components/Result";

export default function QuestionPage() {
  const [step, setStep] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);

  const onClickVariant = (index, isPrev = false) => {
    if (isPrev) {
      setStep(step - 1); // Назад
    } else {
      setStep(step + 1); // Вперёд
      if (index === questions[step].correctAnswer) {
        setCorrectAnswer(correctAnswer + 1);
      }
    }
  };

  return (
    <section>
      {step < questions.length ? (
        <Game
          question={questions[step]}
          onClickVariant={onClickVariant}
          step={step}
          questions={questions}
        />
      ) : (
        <Result questions={questions} correctAnswer={correctAnswer} />
      )}
    </section>
  );
}
