import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggler = ({ setTheme, theme }) => {
  return (
    <div
      className={`text-accent shadow-theme-toggler-glow fixed bottom-10 right-8 flex cursor-pointer flex-col gap-1 rounded-full bg-navbar p-1 text-3xl ss:right-16 ss:flex-row ss:gap-2 ss:p-2 ss:text-4xl md:right-1/2 md:translate-x-1/2`}
      onClick={() => setTheme((prev) => !prev)}
    >
      <FaMoon
        className={`rounded-full p-2 transition-all duration-200 ${theme ? "translate-y-6 rotate-180 opacity-0 ss:translate-x-6 ss:translate-y-0" : "bg-primary rotate-0 opacity-100"}`}
      />
      <FaSun
        className={`rounded-full p-2 transition-all duration-200 ${theme ? "bg-primary rotate-0 opacity-100" : "-translate-y-6 -rotate-180 opacity-0 ss:-translate-x-6 ss:-translate-y-0"}`}
      />
    </div>
  );
};

export default ThemeToggler;
