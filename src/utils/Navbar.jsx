import { useState, useEffect } from "react";
import { TbMenuDeep } from "react-icons/tb";
import { LiaTimesSolid } from "react-icons/lia";

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
          <h1 className="text-xl font-extrabold xs:text-2xl">Jovan.</h1>

          {/* Default: Navbar */}
          <nav className="hidden gap-14 text-white/50 ss:flex">
            <p
              className={`cursor-pointer pb-4 text-lg ${
                activeLink === "about" && "text-white"
              }`}
              onClick={() => handleActiveLinkChange("about", aboutRef)}
            >
              About
            </p>
            <p
              className={`cursor-pointer pb-4 text-lg ${
                activeLink === "portfolio" && "text-white"
              }`}
              onClick={() => handleActiveLinkChange("portfolio", portfolioRef)}
            >
              Portfolio
            </p>
            <p
              className={`cursor-pointer pb-4 text-lg ${
                activeLink === "contact" && "text-white"
              }`}
              onClick={() => handleActiveLinkChange("contact", contactRef)}
            >
              Contact
            </p>
          </nav>

          <hr className="fixed right-0 top-[77px] z-40 hidden w-[391px] border-white/50 ss:flex" />

          <hr
            className={`fixed top-[74px] z-50 hidden border-2 border-softPurple drop-shadow-glow transition-all ss:flex ${activeLink === "about" ? "right-[311px] w-20" : activeLink === "portfolio" ? "right-[175px] w-28" : activeLink === "contact" && "right-[52px] w-24"}`}
          />

          {/* Responsive: Navigation Menu */}
          <>
            <TbMenuDeep
              className={`flex size-8 cursor-pointer xs:size-9 ss:hidden ${
                toggleNav ? "hidden" : "flex"
              }`}
              onClick={() => {
                setToggleNav((prev) => !prev);
              }}
            />

            <LiaTimesSolid
              className={`size-8 cursor-pointer xs:size-9 ss:hidden ${
                toggleNav === true ? "flex" : "hidden"
              }`}
              onClick={() => {
                setToggleNav((prev) => !prev);
              }}
            />
          </>
        </div>

        {/* Responsive: Navbar */}
        <nav
          className={`${toggleNav ? "flex" : "hidden"} flex-col text-white/50 ss:hidden`}
        >
          <p
            className={`w-full cursor-pointer px-8 py-5 text-sm font-light transition-colors hover:bg-softPurple xs:text-base ${
              activeLink === "about" && "text-white"
            }`}
            onClick={() => handleActiveLinkChange("about", aboutRef)}
          >
            About
          </p>
          <hr className="border-white/25" />
          <p
            className={`w-full cursor-pointer px-8 py-5 text-sm font-light transition-colors hover:bg-softPurple xs:text-base ${
              activeLink === "portfolio" && "text-white"
            }`}
            onClick={() => handleActiveLinkChange("portfolio", portfolioRef)}
          >
            Portfolio
          </p>
          <hr className="border-white/25" />
          <p
            className={`w-full cursor-pointer px-8 py-5 text-sm font-light transition-colors hover:bg-softPurple xs:text-base ${
              activeLink === "contact" && "text-white"
            }`}
            onClick={() => handleActiveLinkChange("contact", contactRef)}
          >
            Contact
          </p>
          <hr className="border-2 border-white/25" />
        </nav>
      </div>

      <div
        className={`z-40 h-dvh w-dvw bg-black/50 transition-colors ss:bg-transparent ${
          toggleNav ? "flex" : "hidden"
        }`}
      />
    </>
  );
};

export default Navbar;
