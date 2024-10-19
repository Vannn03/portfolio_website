import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import "./App.css";
import Hero from "./pages/About/Hero/Hero";
import Navbar from "./utils/Navbar";
import ThemeToggler from "./components/ThemeToggler";

const Skills = React.lazy(() => import("./pages/About/Skills/Skills"));
const Contact = React.lazy(() => import("./pages/Contact/Contact"));
const Experiences = React.lazy(
  () => import("./pages/Portfolio/Experiences/Experiences"),
);
const SelectedWorks = React.lazy(
  () => import("./pages/Portfolio/SelectedWorks/SelectedWorks"),
);
const Footer = React.lazy(() => import("./utils/Footer"));

const subTitle = (title) => (
  <motion.div
    className="px-8 pb-10 ss:px-20"
    initial={{ opacity: 0, transform: "translateX(-40px)" }}
    whileInView={{ opacity: 1, transform: "translateX(0)" }}
    transition={{ delay: 0.2 }}
    viewport={{ once: true }}
  >
    <p className="text-xl font-semibold xs:text-2xl ss:text-3xl">My</p>
    <h1 className="mt-0 text-3xl font-bold text-accent xs:mt-1 xs:text-4xl ss:text-5xl">
      {title}
    </h1>
    <div className="w mt-4 w-24 border-4 border-accent xs:mt-5 xs:w-28 ss:w-36" />
  </motion.div>
);

function App() {
  const [theme, setTheme] = useState(false); // false = dark
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const selectedWorkRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div
      className={`bg-primary text-text ${theme ? "light" : "dark"} transition-color font-bvp duration-200 `}
    >
      <header className="fixed top-0 z-50">
        <Navbar
          aboutRef={aboutRef}
          portfolioRef={portfolioRef}
          contactRef={contactRef}
        />
      </header>

      <div ref={aboutRef}>
        <Hero selectedWorkRef={selectedWorkRef} />
      </div>

      <div className="pt-20" ref={portfolioRef}>
        {subTitle("Best Skills")}
        <Skills />
      </div>

      <div className="mt-20 bg-secondary py-20" ref={selectedWorkRef}>
        {subTitle("Selected Works")}
        <SelectedWorks />
      </div>

      <div className="pt-20">
        {subTitle("Experiences")}
        <Experiences />
      </div>

      <div className="mt-20 bg-secondary py-20" ref={contactRef}>
        <div className="flex flex-col items-center px-8 pb-10 ss:px-20">
          <motion.div
            initial={{ opacity: 0, transform: "translateX(-40px)" }}
            whileInView={{ opacity: 1, transform: "translateX(0)" }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl font-bold xs:text-4xl ss:text-5xl">
              Contact Me
            </h1>
          </motion.div>
          <motion.div
            className="w mt-4 w-24 border-4 border-accent xs:mt-5 xs:w-28 ss:w-36"
            initial={{ opacity: 0, transform: "translateX(40px)" }}
            whileInView={{ opacity: 1, transform: "translateX(0)" }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          />
        </div>
        <Contact />
      </div>

      {/* theme toggler */}
      <ThemeToggler setTheme={setTheme} theme={theme} />

      <footer className="bg-footer text-center">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
