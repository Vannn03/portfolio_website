import PropTypes from "prop-types";
import { useState } from "react";
import CodingWorks from "../pages/Portfolio/SelectedWorks/CodingWorks";
import DesignWorks from "../pages/Portfolio/SelectedWorks/DesignWorks";

const MenuToggler = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="flex justify-center px-8 pb-8 ss:px-20">
        <div className="relative flex w-fit items-center justify-center text-center font-medium xs:text-lg ss:text-xl">
          <span
            className={`absolute h-full w-1/2 rounded-full bg-accent ${!toggle ? "left-0" : "left-[143px]"} z-30 transition-all`}
          />
          <span
            className="z-40 w-36 cursor-pointer rounded-l-full border-2 border-r-0 border-accent py-3"
            onClick={() => setToggle(false)}
          >
            <p>Coding</p>
          </span>
          <span
            className="z-40 w-36  cursor-pointer rounded-r-full border-2 border-l-0 border-accent py-3"
            onClick={() => setToggle(true)}
          >
            <p>UI/UX</p>
          </span>
        </div>
      </div>
      {!toggle ? <CodingWorks /> : <DesignWorks />}
    </>
  );
};

export default MenuToggler;

MenuToggler.propTypes = {
  setToggle: PropTypes.func.isRequired,
  toggle: PropTypes.bool.isRequired,
};
