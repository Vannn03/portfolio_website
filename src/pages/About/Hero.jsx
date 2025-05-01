import { FaLongArrowAltRight } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { TypeAnimation } from "react-type-animation";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { MdDownload } from "react-icons/md";
import { useCallback } from "react";
import heroImg from "../../assets/hero-img.webp"

const Hero = ({ selectedWorkRef }) => {
  const handleScroll = useCallback((ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleDownload = useCallback(() => {
    const link = document.createElement("a");
    link.href = "/CV ATS - Jovan Hermawan.pdf";
    link.download = "CV ATS - Jovan Hermawan.pdf";
    link.click();
  }, []);
  return (
    <div className="relative flex h-dvh items-center px-8 ss:px-20">
      {/* Description */}
      <div className="w-full md:w-1/2">
        <motion.div
          initial={{ opacity: 0, transform: "translateX(-40px)" }}
          whileInView={{ opacity: 1, transform: "translateX(0)" }}
          viewport={{ once: true }}
          className={
            "flex gap-1 text-lg font-semibold text-text/75 xs:text-xl sm:text-2xl  md:text-xl lg:text-2xl"
          }
        >
          <p>Hi, I&apos;m</p>
          <TypeAnimation
            sequence={["Jovan Hermawan", 3000, "a Binusian 25", 3000]}
            wrapper="span"
            speed={60}
            repeat={Infinity}
          />
        </motion.div>

        <motion.div
          className="mt-4 xs:mt-6 sm:mt-8"
          initial={{ opacity: 0, transform: "translateX(-40px)" }}
          whileInView={{ opacity: 1, transform: "translateX(0)" }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl font-bold text-accent xs:text-5xl sm:text-7xl md:text-5xl lg:text-7xl">
            Enthusiastic
          </h1>
          <h1 className="mt-2 text-4xl font-bold xs:text-5xl sm:mt-3 sm:text-7xl md:text-5xl lg:text-7xl">
            Web Developer.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, transform: "translateX(-40px)" }}
          whileInView={{ opacity: 1, transform: "translateX(0)" }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="mt-6 font-light text-text/75 xs:mt-8 xs:text-lg sm:mt-10 sm:text-xl md:text-lg lg:text-xl">
            I’m burning with passion for crafting immersive online experiences
            and bringing creative ideas to life through code.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, transform: "translateX(-40px)" }}
          whileInView={{ opacity: 1, transform: "translateX(0)" }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className={
            "mt-8 flex items-center gap-4 text-sm xs:mt-10 xs:text-lg sm:mt-12 sm:text-xl md:text-lg"
          }
        >
          <button
            onClick={handleDownload}
            className="flex items-center rounded-md border-2 border-accent px-6 py-3 font-medium text-accent transition-colors hover:bg-accent hover:text-white"
          >
            Download CV <MdDownload className="ml-2" />
          </button>
          <button
            className="flex items-center rounded-md border-2 border-accent bg-accent px-6 py-3 font-medium  text-white transition-transform hover:translate-x-2"
            onClick={() => handleScroll(selectedWorkRef)}
          >
            My Projects <FaLongArrowAltRight className="ml-2" />
          </button>
        </motion.div>
      </div>

      {/* Image */}
      <img
        src={heroImg}
        alt="photo"
        className="absolute bottom-0 right-0 hidden w-[50%] md:flex"
      />

      {/* Social Medias */}
      <div className="absolute bottom-12 flex items-center gap-6 lg:gap-8">
        <hr className="w-16 border-text/50 xs:w-24 ss:w-40 lg:w-52" />
        <a
          href="https://www.linkedin.com/in/jovan-hermawan"
          target="_blank"
          rel="noopener noreferrer"
          title="linkedin"
        >
          <FaLinkedin className="size-6 transition-colors hover:text-linkedin hover:drop-shadow-linkedin ss:size-7" />
        </a>
        <a
          href="https://github.com/Vannn03"
          target="_blank"
          rel="noopener noreferrer"
          title="github"
        >
          <FaGithub className="size-6 transition-colors hover:text-github hover:drop-shadow-github ss:size-7" />
        </a>
        <a
          href="https://instagram.com/jovanhermawan"
          target="_blank"
          rel="noopener noreferrer"
          title="instagram"
        >
          <RiInstagramFill className="size-6 transition-colors hover:text-instagram hover:drop-shadow-instagram ss:size-7" />
        </a>
      </div>
    </div>
  );
};

export default Hero;

Hero.propTypes = {
  selectedWorkRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};
