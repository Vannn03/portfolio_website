import { useState, useEffect, useCallback } from "react";
import ResponsiveNavMenu from "../components/ResponsiveNavMenu";
import ResponsiveNavLinks from "../components/ResponsiveNavLinks";
import PropTypes from "prop-types";

const Navbar = ({ aboutRef, portfolioRef, contactRef }) => {
  const [activeLink, setActiveLink] = useState("about");
  const [toggleNav, setToggleNav] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = aboutRef.current.offsetTop;
      const portfolioSection = portfolioRef.current.offsetTop;
      const contactSection = contactRef.current.offsetTop;
      const scrollPosition = window.scrollY + 100; // considering a buffer of 100px

      // Change display for active link based on scroll position
      if (scrollPosition >= aboutSection && scrollPosition < portfolioSection) {
        setActiveLink("about");
      } else if (
        scrollPosition >= portfolioSection &&
        scrollPosition < contactSection
      ) {
        setActiveLink("portfolio");
      } else if (scrollPosition >= contactSection) {
        setActiveLink("contact");
      }
      // Add a background color for navbar when scrolled down
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [aboutRef, portfolioRef, contactRef]);

  // Detect scroll position and scroll accordingly
  // Memoize the function to prevent re-renders in child components
  const handleActiveLinkChange = useCallback((route, ref) => {
    setActiveLink(route);
    ref.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <div
        className={`z-50 flex flex-col transition-colors ${
          toggleNav ? "bg-navbar" : scrolling ? "bg-navbar" : "bg-transparent"
        }`}
      >
        <div className="relative flex w-dvw items-center justify-between px-8 py-8 ss:px-20">
          {/* Logo */}
          <h1 className="text-xl font-extrabold xs:text-2xl">Jovan.</h1>

          {/* Default: Navbar */}
          <nav className="relative hidden gap-14 border-b border-text/35 text-text/75 ss:flex">
            <p
              className={`cursor-pointer pb-4 text-lg ${
                activeLink === "about" && "text-text"
              }`}
              onClick={() => handleActiveLinkChange("about", aboutRef)}
            >
              About
            </p>
            <p
              className={`cursor-pointer pb-4 text-lg ${
                activeLink === "portfolio" && "text-text"
              }`}
              onClick={() => handleActiveLinkChange("portfolio", portfolioRef)}
            >
              Portfolio
            </p>
            <p
              className={`cursor-pointer pb-4 text-lg ${
                activeLink === "contact" && "text-text"
              }`}
              onClick={() => handleActiveLinkChange("contact", contactRef)}
            >
              Contact
            </p>

            <hr
              className={`absolute top-10 z-50 hidden border-2 border-accent shadow-nav-line-glow transition-all ss:flex ${activeLink === "about" ? "left-0 w-14" : activeLink === "portfolio" ? "left-[110px] w-[76px]" : activeLink === "contact" && "left-[243px] w-[72px]"}`}
            />
          </nav>

          <ResponsiveNavMenu
            toggleNav={toggleNav}
            setToggleNav={setToggleNav}
          />
        </div>

        <ResponsiveNavLinks
          toggleNav={toggleNav}
          activeLink={activeLink}
          handleActiveLinkChange={handleActiveLinkChange}
          aboutRef={aboutRef}
          portfolioRef={portfolioRef}
          contactRef={contactRef}
        />
      </div>

      <div
        className={`z-40 h-dvh w-dvw bg-black/75 transition-colors ss:bg-transparent ${
          toggleNav ? "flex" : "hidden"
        }`}
      />
    </>
  );
};

export default Navbar;

Navbar.propTypes = {
  aboutRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }).isRequired,
  portfolioRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }).isRequired,
  contactRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }).isRequired,
};
