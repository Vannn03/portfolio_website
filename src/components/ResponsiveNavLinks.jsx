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
          ? "bg-accent text-text font-medium"
          : "hover:bg-secondary"
      }`}
      onClick={() => handleActiveLinkChange(route, ref)}
    >
      {linkName}
    </p>
  );
  return (
    <nav
      className={`${toggleNav ? "pointer-events-auto opacity-100 " : "pointer-events-none opacity-0"} text-text/75 fixed top-[92px] w-full flex-col bg-navbar transition-all xs:top-24 ss:hidden`}
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
