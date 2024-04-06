import { useState, useEffect } from "react";
import { TbMenuDeep } from "react-icons/tb";
import { LiaTimesSolid } from "react-icons/lia";

const Navbar = (props) => {
  const [activeLink, setActiveLink] = useState("about");
  const [toggleNav, setToggleNav] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = props.aboutRef.current.offsetTop;
      const portfolioSection = props.portfolioRef.current.offsetTop;
      const contactSection = props.contactRef.current.offsetTop;
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
  }, [props.aboutRef, props.portfolioRef, props.contactRef]);

  // Detect scroll position and scroll accordingly
  const handleActiveLinkChange = (link, ref) => {
    setActiveLink(link);
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div
        className={`z-50 flex flex-col transition-colors ${
          toggleNav ? "bg-navbar" : scrolling ? "bg-navbar" : "bg-transparent"
        }`}
      >
        <div className="relative flex w-dvw items-center justify-between px-8 py-8 ss:px-20">
          {/* Logo */}
          <h1 className="text-2xl font-extrabold">Jovan.</h1>

          {/* Default: Navbar */}
          <nav className="hidden gap-14 ss:flex">
            <p
              className={`cursor-pointer pb-4 text-lg ${
                activeLink === "about"
                  ? "border-b-2 border-softPurple drop-shadow-glow"
                  : "text-white/50"
              }`}
              onClick={() => handleActiveLinkChange("about", props.aboutRef)}
            >
              About
            </p>
            <p
              className={`cursor-pointer pb-4 text-lg ${
                activeLink === "portfolio"
                  ? "border-b-2 border-softPurple drop-shadow-glow"
                  : "text-white/50"
              }`}
              onClick={() =>
                handleActiveLinkChange("portfolio", props.portfolioRef)
              }
            >
              Portfolio
            </p>
            <p
              className={`cursor-pointer pb-4 text-lg ${
                activeLink === "contact"
                  ? "border-b-2 border-softPurple drop-shadow-glow"
                  : "text-white/50"
              }`}
              onClick={() =>
                handleActiveLinkChange("contact", props.contactRef)
              }
            >
              Contact
            </p>
          </nav>

          <hr className="fixed right-0 top-[77px] z-40 hidden w-[378px] border-white/50 ss:flex" />

          {/* Responsive: Navigation Menu */}
          <>
            <TbMenuDeep
              className={`flex size-9 cursor-pointer ss:hidden ${
                toggleNav ? "hidden" : "flex"
              }`}
              onClick={() => {
                setToggleNav((prev) => !prev);
              }}
            />

            <LiaTimesSolid
              className={`size-9 cursor-pointer ss:hidden ${
                toggleNav === true ? "flex" : "hidden"
              }`}
              onClick={() => {
                setToggleNav((prev) => !prev);
              }}
            />
          </>
        </div>

        {/* Responsive: Navbar */}
        <nav className={`${toggleNav ? "flex" : "hidden"} flex-col ss:hidden`}>
          <p
            className={`w-full cursor-pointer px-8 py-5 font-light transition-colors hover:bg-softPurple ${
              activeLink === "about"
                ? "border-b-2 border-softPurple"
                : "text-white/50"
            }`}
            onClick={() => handleActiveLinkChange("about", props.aboutRef)}
          >
            About
          </p>
          <hr className="border-white/25" />
          <p
            className={`w-full cursor-pointer px-8 py-5 font-light transition-colors hover:bg-softPurple ${
              activeLink === "portfolio"
                ? "border-b-2 border-softPurple"
                : "text-white/50"
            }`}
            onClick={() =>
              handleActiveLinkChange("portfolio", props.portfolioRef)
            }
          >
            Portfolio
          </p>
          <hr className="border-white/25" />
          <p
            className={`w-full cursor-pointer px-8 py-5 font-light transition-colors hover:bg-softPurple ${
              activeLink === "contact"
                ? "border-b-2 border-softPurple"
                : "text-white/50"
            }`}
            onClick={() => handleActiveLinkChange("contact", props.contactRef)}
          >
            Contact
          </p>
          <hr className="border-2 border-zinc-900" />
        </nav>
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
