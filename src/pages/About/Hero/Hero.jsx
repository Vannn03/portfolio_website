import { FaLongArrowAltRight } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { TypeAnimation } from "react-type-animation";

const Hero = ({ selectedWorkRef, motion }) => {
  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative flex h-dvh items-center px-8 ss:px-20">
      {/* Description */}
      <div className="w-full md:w-1/2">
        <motion.div
          initial={{ opacity: 0, transform: "translateX(-40px)" }}
          whileInView={{ opacity: 1, transform: "translateX(0)" }}
          viewport={{ once: true }}
          className={
            "text-text/75 flex gap-1 text-lg font-semibold xs:text-xl sm:text-2xl  md:text-xl lg:text-2xl"
          }
        >
          <p>Hi, I'm</p>
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
          <h1 className="text-accent text-4xl font-bold xs:text-5xl sm:text-7xl md:text-5xl lg:text-7xl">
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
          <p className="text-text/75 mt-6 font-light xs:mt-8 xs:text-lg sm:mt-10 sm:text-xl md:text-lg lg:text-xl">
            I’m burning with passion for crafting immersive online experiences
            and bringing creative ideas to life through code.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, transform: "translateX(-40px)" }}
          whileInView={{ opacity: 1, transform: "translateX(0)" }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <button
            className="bg-accent mt-8 flex items-center rounded-md px-6 py-3 text-base font-medium  text-white transition-transform hover:translate-x-4 xs:mt-10 xs:text-lg sm:mt-12 sm:text-xl md:text-lg lg:text-xl"
            onClick={() => handleScroll(selectedWorkRef)}
          >
            My Projects <FaLongArrowAltRight className="ml-2" />
          </button>
        </motion.div>
      </div>

      {/* Image */}
      <div className="bg-hero-radial absolute bottom-0 right-0 hidden rounded-full md:flex md:size-[620px] lg:size-[720px] xl:size-[870px]" />
      <img
        src="/hero-img.webp"
        alt="photo"
        className="absolute bottom-0 right-0 hidden md:flex md:size-[600px] lg:size-[700px] xl:size-[850px]"
      />

      {/* Social Medias */}
      <div className="absolute bottom-12 flex items-center gap-6 lg:gap-8">
        <hr className="border-text/50 w-16 xs:w-24 ss:w-40 lg:w-52" />
        <a
          href="https://www.linkedin.com/in/jovan-hermawan"
          target="_blank"
          title="linkedin"
        >
          <FaLinkedin className="size-6 transition-colors hover:text-linkedin hover:drop-shadow-linkedin ss:size-7" />
        </a>
        <a href="https://github.com/Vannn03" target="_blank" title="github">
          <FaGithub className="size-6 transition-colors hover:text-github hover:drop-shadow-github ss:size-7" />
        </a>
        <a
          href="https://instagram.com/jovanhermawan"
          target="_blank"
          title="instagram"
        >
          <RiInstagramFill className="size-6 transition-colors hover:text-instagram hover:drop-shadow-instagram ss:size-7" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
