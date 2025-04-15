import { links } from "../constants";
import Button from "./ui/Button";
import { Link } from "react-router-dom";

export default function MobileMenu(onClose) {
  return (
    <div className="h-[calc(100vh-5rem)] w-full overflow-y-auto">
      <ul className="flex flex-col gap-4 border-t-2 border-amber-600 bg-white p-4 shadow-lg shadow-amber-600/50">
        <div className="ml-6">
          <Link to="/" className="textGradient">
            <img src="./images/logo.jpg" alt=" Logo " className="h-16 w-16" />
          </Link>
        </div>
        {links.map((link) => (
          <li key={link.name} className="pl-5">
            <Link className="navLinkUnderline" to={link.link} onClick={onClose}>
              {link.name}
            </Link>
          </li>
        ))}

        <Link to="/quiz" onClick={onClose}>
          <Button variant="quiz" className=" mt-10 w-full">
            Пройти Квиз
          </Button>
        </Link>
      </ul>
    </div>
  );
}
