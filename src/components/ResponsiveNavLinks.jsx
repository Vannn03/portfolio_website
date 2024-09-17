import PropTypes from "prop-types";

const ResponsiveNavLinks = ({
  toggleNav,
  activeLink,
  handleActiveLinkChange,
  aboutRef,
  portfolioRef,
  contactRef,
}) => {
  const navLink = (route, ref, linkName) => (
    <p
      className={`w-full cursor-pointer px-8 ${toggleNav ? "py-5" : "py-0"} text-sm font-light transition-all xs:text-base ${
        activeLink === route
          ? "bg-accent font-medium text-text"
          : "hover:bg-secondary"
      }`}
      onClick={() => handleActiveLinkChange(route, ref)}
    >
      {linkName}
    </p>
  );
  return (
    <nav
      className={`${toggleNav ? "pointer-events-auto opacity-100 " : "pointer-events-none opacity-0"} fixed top-[92px] w-full flex-col bg-navbar text-text/75 transition-all xs:top-24 ss:hidden`}
    >
      {navLink("about", aboutRef, "About")}

      <hr className="border-white/25" />

      {navLink("portfolio", portfolioRef, "Portfolio")}

      <hr className="border-white/25" />

      {navLink("contact", contactRef, "Contact")}

      <hr className="border-2 border-white/25" />
    </nav>
  );
};

export default ResponsiveNavLinks;

ResponsiveNavLinks.propTypes = {
  toggleNav: PropTypes.bool.isRequired,
  activeLink: PropTypes.string.isRequired,
  handleActiveLinkChange: PropTypes.func.isRequired,
  aboutRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  portfolioRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  contactRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};
