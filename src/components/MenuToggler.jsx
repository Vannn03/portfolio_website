import PropTypes from "prop-types";
import { useState } from "react";
import CodingWorks from "../pages/Portfolio/SelectedWorks/CodingWorks";
import DesignWorks from "../pages/Portfolio/SelectedWorks/DesignWorks";

const MenuToggler = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="flex justify-center px-8 pb-8 ss:px-20">
        <div className="relative flex w-64 items-center rounded-full border border-text/5 bg-text/10 p-1 xs:text-lg ss:text-xl">
          {/* SLIDING PILL */}
          <div
            className={`absolute h-[calc(100%-8px)] w-[calc(50%-4px)] rounded-full bg-accent shadow-sm transition-transform duration-300 ease-in-out ${
              toggle ? "translate-x-full" : "translate-x-0"
            }`}
          ></div>

          {/* CODING BUTTON */}
          <button
            className={`z-10 w-1/2 rounded-full py-2 text-center text-sm font-semibold transition-colors duration-300 focus:outline-none ${
              !toggle
                ? "text-primary"
                : "text-text opacity-60 hover:opacity-100"
            }`}
            onClick={() => setToggle(false)}
          >
            Coding
          </button>

          {/* UI/UX BUTTON */}
          <button
            className={`z-10 w-1/2 rounded-full py-2 text-center text-sm font-semibold transition-colors duration-300 focus:outline-none ${
              toggle ? "text-primary" : "text-text opacity-60 hover:opacity-100"
            }`}
            onClick={() => setToggle(true)}
          >
            UI/UX
          </button>
        </div>
      </div>

      <div className="transition-opacity duration-300">
        {!toggle ? <CodingWorks /> : <DesignWorks />}
      </div>
    </>
  );
};

export default MenuToggler;

MenuToggler.propTypes = {
  setToggle: PropTypes.func.isRequired,
  toggle: PropTypes.bool.isRequired,
};
