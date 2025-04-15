import PropTypes from "prop-types";

import { Link } from "react-router-dom";
export default function Result({ questions, correctAnswer }) {
  return (
    <div className="my-10 flex flex-col items-center gap-4">
      <div className="circle-one absolute inset-0 z-30 overflow-hidden blur-xl">
        <div className="absolute right-[5%] top-0 h-96 w-96 rounded-full bg-rose-400/60"></div>
      </div>
      <div className="circle-two absolute inset-0 -z-30 overflow-hidden blur-xl">
        <div className="absolute bottom-0 left-[5%] h-96 w-96 rounded-full bg-indigo-400/60"></div>
      </div>
      <img src="/images/final.png" className="md:1/2 mb-20 w-1/3" />
      <h2 className="mb-20 text-center text-2xl font-bold xl:text-3xl ">
        Вы отгадали {correctAnswer} ответа из {questions.length}
      </h2>

      <div className=" z-40 cursor-pointer">
        <Link
          to="/quiz"
          className="animate-pulse  rounded-xl bg-kazDark px-8 py-4 text-2xl font-bold text-white shadow-lg transition-all hover:scale-105 hover:animate-none hover:shadow-xl active:scale-95"
        >
          Начать тест заново
        </Link>
      </div>
    </div>
  );
}

Result.propTypes = {
  questions: PropTypes.array,
  correctAnswer: PropTypes.number,
};
