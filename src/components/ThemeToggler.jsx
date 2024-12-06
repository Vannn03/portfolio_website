import { FaMoon, FaSun } from "react-icons/fa";
import PropTypes from "prop-types";

const ThemeToggler = ({ setTheme, theme }) => (
  <div
    className={`fixed bottom-10 right-8 z-50 cursor-pointer rounded-full bg-navbar text-3xl text-accent shadow-theme-toggler-glow ss:right-16 ss:gap-2 ss:text-4xl md:right-1/2 md:translate-x-1/2`}
    onClick={() => setTheme((prev) => !prev)}
  >
    <span className="flex flex-col gap-1 p-1 ss:flex-row ss:p-2">
      <FaMoon
        className={`rounded-full p-2 transition-all duration-200 ${theme ? "translate-y-6 rotate-180 opacity-0 ss:translate-x-6 ss:translate-y-0" : "rotate-0 bg-primary opacity-100"}`}
      />
      <FaSun
        className={`rounded-full p-2 transition-all duration-200 ${theme ? "rotate-0 bg-primary opacity-100" : "-translate-y-6 -rotate-180 opacity-0 ss:-translate-x-6 ss:-translate-y-0"}`}
      />
    </span>
  </div>
);

export default ThemeToggler;

ThemeToggler.propTypes = {
  setTheme: PropTypes.func.isRequired,
  theme: PropTypes.bool.isRequired,
};
