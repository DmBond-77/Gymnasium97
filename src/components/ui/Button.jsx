// Button.jsx
import PropTypes from "prop-types";
const Button = ({ children, onClick, className, variant = "default" }) => {
  const baseStyles =
    "px-2 py-1 font-semibold rounded-md focus:outline-none cursor-pointer transition-all duration-300 ease-in-out md:px-4 md:py-2";
  const variantStyles = {
    default:
      "bg-black text-white hover:bg-amber-800/50 border-2 border-amber-600 shadow-lg shadow-amber-600/50 hover:border-black hover:text-black",
    // default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-100",
    ghost: "text-blue-600 hover:bg-blue-50",
    quiz: " bg-blue-200 border-blue-600 border-2 hover:bg-blue-400",
    // Добавьте другие стили по необходимости
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["default", "outline", "ghost", "quiz"]),
};
