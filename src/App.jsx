import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import BuketovPage from "./pages/BuketovPage";
import SatpaevPage from "./pages/SatpaevPage";
import QuizPage from "./pages/QuizPage";
import QuestionPage from "./pages/QuestionPage";

export default function App() {
  return (
    <div className="container flex min-h-screen  flex-col">
      <Navbar />
      <main className=" flex-1">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/buketov" element={<BuketovPage />} />
          <Route path="/satpaev" element={<SatpaevPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/question" element={<QuestionPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
