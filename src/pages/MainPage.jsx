import { motion } from "framer-motion";
import { data } from "../constants/index.js";

// Анимации
const slideIn = {
  hidden: { x: -200, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1.0 } },
};

const slideInRight = {
  hidden: { x: 900, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1.0 } },
};

export default function MainPage() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className="relative overflow-hidden"
    >
      {/* Фоновые декоративные элементы (по бокам) */}
      <motion.div
        initial={{ x: -200, y: -100 }}
        animate={{ x: 0, y: 0 }}
        transition={{ duration: 1.2 }}
        className="absolute left-0 top-0 h-64 w-64 rounded-full bg-kazBlue opacity-10 blur-3xl"
      />
      <motion.div
        initial={{ x: 200, y: 100 }}
        animate={{ x: 0, y: 0 }}
        transition={{ duration: 1.2 }}
        className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-kazBlue opacity-10 blur-3xl"
      />

      <div className="">
        {/* Заголовки с анимацией - измененное расположение */}

        <motion.div variants={slideInRight} className=" my-10 lg:pl-10">
          <h1 className="m mb-4 text-center text-3xl font-bold xl:text-5xl">
            Добро пожаловать на сайт КГУ Гимназии №97
          </h1>
        </motion.div>
        {/* Блок слева (h2 + p) */}
        <motion.div variants={slideIn} className="my-10 text-center">
          <h2 className="mb-4  text-xl font-bold xl:text-3xl">
            Исследование вклада учёных Казахстана
          </h2>
          <p className="text-xl">
            Проект посвящён академикам Букетову и Сатпаеву — основоположникам+
            казахстанской науки о металлах и геологии.
          </p>
        </motion.div>

        {/* Блок справа (h1) */}

        {/* Остальной код остается без изменений */}
        <motion.div variants={slideInRight} className="my-20">
          <h3 className="mb-6 text-center text-2xl font-bold">
            КАРТА ИССЛЕДОВАНИЙ
          </h3>
          <div className="mx-">
            <img
              src="./images/map.jpg"
              alt="map"
              className="mx-auto  rounded-xl border-2 border-slate-400 shadow-2xl"
            />
          </div>
        </motion.div>

        <div className="space-y-16">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2 }}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-8`}
            >
              <div
                className={`lg:w-1/2 ${index % 2 === 0 ? "lg:pr-8" : "lg:pl-8"}`}
              >
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="h-auto max-h-96 w-full rounded-xl object-cover shadow-lg"
                  whileHover={{ scale: 1.03 }}
                />
              </div>
              <div className="lg:w-1/2">
                <h3 className="mb-4 text-2xl font-bold text-kazDark">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
