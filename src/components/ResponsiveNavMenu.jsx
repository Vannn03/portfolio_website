import { LiaTimesSolid } from "react-icons/lia";
import { TbMenuDeep } from "react-icons/tb";
import PropTypes from "prop-types";

const ResponsiveNavMenu = ({ toggleNav, setToggleNav }) => {
  return (
    <>
      <TbMenuDeep
        className={`absolute right-8 flex size-8 cursor-pointer transition-all duration-200 xs:size-9 ss:hidden ${
          toggleNav ? "-rotate-90 opacity-0" : "rotate-0 opacity-100"
        }`}
        onClick={() => {
          setToggleNav((prev) => !prev);
        }}
      />

      <LiaTimesSolid
        className={`absolute right-8 size-8 cursor-pointer transition-all duration-200 xs:size-9 ss:hidden ${
          toggleNav ? "-rotate-90 opacity-100" : "rotate-0 opacity-0"
        }`}
        onClick={() => {
          setToggleNav((prev) => !prev);
        }}
      />
    </>
  );
};

export default ResponsiveNavMenu;

ResponsiveNavMenu.propTypes = {
  toggleNav: PropTypes.bool.isRequired,
  setToggleNav: PropTypes.func.isRequired,
};
