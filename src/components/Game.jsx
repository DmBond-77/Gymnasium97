import PropTypes from "prop-types";
import { useState } from "react";

export default function Game({ question, onClickVariant, step, questions }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const percent = Math.round((step / questions.length) * 100);

  const handleAnswerClick = (index) => {
    if (isAnswered) return; // Блокируем повторные клики
    setSelectedAnswer(index);
    setIsAnswered(true);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return; // Нельзя перейти без выбора
    onClickVariant(selectedAnswer); // Передаём выбранный ответ
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  const handlePrevQuestion = () => {
    onClickVariant(null, true); // Переход назад
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  const getAnswerClass = (index) => {
    if (!isAnswered) return "";
    if (index === question.correctAnswer) return "bg-green-400";
    if (index === selectedAnswer && index !== question.correctAnswer)
      return "bg-red-400";
    return "";
  };

  return (
    <div className="mx-auto my-20 max-w-6xl rounded-2xl bg-white p-10 shadow-2xl">
      {/* Progress bar */}
      <div className="mb-6 h-2.5 rounded-full bg-gray-200">
        <div
          className="h-full rounded-full bg-gradient-to-r from-green-500 to-cyan-500"
          style={{ width: `${percent}%` }}
        ></div>
      </div>

      {/* Question */}
      <h2 className="mb-6 text-2xl font-medium">{question.question}</h2>

      {/* Answers list */}
      <ul className="mb-10 space-y-6">
        {question.answers.map((text, index) => (
          <li
            key={text}
            onClick={() => handleAnswerClick(index)}
            className={`cursor-pointer rounded-lg p-4 shadow-md transition-all hover:bg-cyan-200 hover:shadow-lg ${getAnswerClass(
              index,
            )} ${isAnswered ? "pointer-events-none" : ""}`}
          >
            {text}
          </li>
        ))}
      </ul>

      {/* Navigation buttons */}
      <div className="flex justify-between">
        <button
          onClick={handlePrevQuestion}
          disabled={step === 0}
          className="rounded-lg bg-gray-300 px-6 py-2 font-medium disabled:opacity-50"
        >
          Назад
        </button>
        <button
          onClick={handleNextQuestion}
          disabled={!isAnswered}
          className="rounded-lg bg-cyan-500 px-6 py-2 font-medium text-white disabled:opacity-50"
        >
          {step === questions.length - 1 ? "Завершить" : "Далее"}
        </button>
      </div>
    </div>
  );
}

Game.propTypes = {
  question: PropTypes.object,
  onClickVariant: PropTypes.func,
  step: PropTypes.number,
  questions: PropTypes.array,
};
