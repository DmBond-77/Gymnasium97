import { links } from "../constants";
import Hamburger from "hamburger-react";
import { useState } from "react";
import Button from "./ui/Button";
import MobileMenu from "./MobileMenu";
import { Link } from "react-router-dom";
function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {/* Гамбургер ВНЕ nav */}
      <div className="fixed right-4 top-6 z-[100] md:hidden">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={25}
          color="#1E3A8A"
        />
      </div>

      <nav className="h-30 relative z-40 flex items-center justify-between border-b-2 border-b-kazDark bg-white px-4 py-10">
        <div>
          <Link to="/" className="textGradient">
            <img src="./images/logo.jpg" alt="Logo" className="h-16 w-16" />
          </Link>
        </div>

        <ul className="hidden gap-6 md:flex">
          {links.map((link) => (
            <li key={link.name}>
              <Link className="navLinkUnderline" to={link.link}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link to="/quiz" className="animLogo hidden md:block">
            <Button variant="quiz">Пройти Квиз</Button>
          </Link>
          {/* удаляем гамбургер отсюда */}
        </div>
      </nav>

      {/* Мобильное меню поверх всего */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm md:hidden"
            onClick={() => setOpen(false)}
          />
          <div className="fixed inset-0 z-[95] w-full md:hidden">
            <MobileMenu onClose={() => setOpen(false)} />
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;
