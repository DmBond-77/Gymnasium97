import { Link } from "react-router-dom";

export default function QuizPage() {
  return (
    <section className=" my-10">
      {/* Заголовок с анимацией fade-in */}
      <h1 className="animate-fade-in text-center text-5xl font-bold text-kazDark">
        Начать исторический квиз
      </h1>{" "}
      <div className="circle-one absolute inset-0 -z-10 overflow-hidden blur-xl">
        <div className="absolute right-[5%] top-0 h-96 w-96 rounded-full bg-rose-400/60"></div>
      </div>
      <div className="mt-10 flex flex-col gap-4">
        {/* Подзаголовок с задержкой */}
        <h2 className="animate-fade-in text-center text-3xl font-bold text-kazDark [animation-delay:300ms]">
          Правила квиза
        </h2>

        {/* Правила с задержкой */}
        <div className="animate-fade-in mx-auto flex max-w-xl flex-col gap-2 text-xl [animation-delay:500ms]">
          <span>Выбирайте только один вариант ответа</span>
          {/* <span>У вас только 20 секунд</span> */}
          <span>Этот квиз посвящен исследованию вклада выдающихся ученых</span>
        </div>
      </div>
      <div className="circle-two absolute inset-0 -z-10 overflow-hidden blur-xl">
        <div className="absolute bottom-0 left-[5%] h-96 w-96 rounded-full bg-indigo-400/60"></div>
      </div>
      {/* Кнопка с пульсацией */}
      <div className="relative z-20 mt-12 flex cursor-pointer justify-center">
        <Link
          to="/question"
          className="animate-pulse rounded-xl bg-kazDark px-8 py-4 text-2xl font-bold text-white shadow-lg transition-all hover:scale-105 hover:animate-none hover:shadow-xl active:scale-95"
        >
          Начать тест
        </Link>
      </div>
    </section>
  );
}
