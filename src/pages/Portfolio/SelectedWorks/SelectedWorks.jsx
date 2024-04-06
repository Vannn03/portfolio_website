import { FaGithub } from "react-icons/fa6";
import { RxArrowTopRight } from "react-icons/rx";

const SelectedWorks = ({ motion }) => {
  const githubButton = (link) => (
    <a
      href={link}
      target="_blank"
      className="flex items-center justify-center rounded-md bg-github px-6 py-3 text-sm font-medium xs:justify-start ss:text-base sm:text-lg"
    >
      <FaGithub className="mr-2" /> View Repository
    </a>
  );

  const demoButton = (link, disable) => (
    <a
      href={link}
      target="_blank"
      className={`flex items-center justify-center rounded-md bg-softPurple px-6 py-3 text-sm font-medium xs:justify-start ss:text-base sm:text-lg ${disable}`}
    >
      View Demo <RxArrowTopRight className="ml-2" />
    </a>
  );

  const imageCard = (image) => (
    <img
      src={image}
      alt="movie"
      className="h-[300px] w-full object-cover xs:h-[450px] sm:h-[550px] md:h-[650px] lg:h-[750px] lg:w-7/12 xl:w-3/5"
      loading="lazy"
    />
  );

  const skills = (color, skillName) => (
    <p
      className={`rounded-full px-3 py-1 text-sm font-medium ss:text-base sm:px-4 sm:text-lg ${color}`}
    >
      {skillName}
    </p>
  );

  const workCard = (name, description) => (
    <>
      <h1 className="mt-3 text-2xl font-bold ss:text-3xl sm:text-4xl lg:mt-4">
        {name}
      </h1>
      <p className="mt-5 text-sm font-light text-white/50 ss:text-base sm:mt-6 sm:text-lg lg:mt-8">
        {description}
      </p>
    </>
  );

  return (
    <div className="flex flex-col gap-12 px-8 ss:px-20">
      <motion.div
        className="flex flex-col items-center gap-6 border-2 border-white/50 pb-6 pr-0 ss:gap-8 ss:pb-8 lg:flex-row lg:pb-0 lg:pr-8"
        initial={{ opacity: 0, transform: "translateY(-28px)" }}
        whileInView={{ opacity: 1, transform: "translateY(0)" }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        {imageCard("work-images/movie.webp")}
        <div className="w-full px-6 ss:px-8 lg:w-5/12 lg:px-0 xl:w-2/5">
          <div className="flex gap-3 sm:gap-4">
            {skills("bg-react", "ReactJs")}
            {skills("bg-tailwind", "Tailwind CSS")}
          </div>
          {workCard(
            "Movie Peek Website",
            "A personal movie database website for users to freely access trailers & details of various movies using API data from TMDB.",
          )}
          <div className="mt-5 flex flex-col gap-4 xs:flex-row xs:gap-5 sm:mt-6 lg:mt-8">
            {githubButton("https://github.com/Vannn03/movie_peek")}
            {demoButton("https://movie-peek.vercel.app")}
          </div>
        </div>
      </motion.div>

      <motion.div
        className="flex flex-col items-center gap-6 border-2 border-white/50 pb-6 pl-0 ss:gap-8 ss:pb-8 lg:flex-row-reverse lg:pb-0 lg:pl-8"
        initial={{ opacity: 0, transform: "translateY(-28px)" }}
        whileInView={{ opacity: 1, transform: "translateY(0)" }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        {imageCard("work-images/storage.webp")}
        <div className="w-full px-6 ss:px-8 lg:w-5/12 lg:px-0 xl:w-2/5">
          <div className="flex gap-3 sm:gap-4">
            {skills("bg-php", "PHP")}
            {skills("bg-laravel", "Laravel")}
          </div>
          {workCard(
            "Goods Data Collection Website",
            "Built a goods data collection website for selling goods that require CRUD & validation, authentication for both user & admin roles, and relationships between certain models.",
          )}
          <div className="mt-5 flex flex-col gap-4 xs:flex-row xs:gap-5 sm:mt-6 lg:mt-8">
            {githubButton(
              "https://github.com/Vannn03/Goods-Data-Collection-Website",
            )}
            {demoButton(null, "opacity-50 cursor-not-allowed")}
          </div>
        </div>
      </motion.div>

      <motion.div
        className="flex flex-col items-center gap-6 border-2 border-white/50 pb-6 pr-0 ss:gap-8 ss:pb-8 lg:flex-row lg:pb-0 lg:pr-8"
        initial={{ opacity: 0, transform: "translateY(-28px)" }}
        whileInView={{ opacity: 1, transform: "translateY(0)" }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        {imageCard("work-images/event.webp")}
        <div className="w-full px-6 ss:px-8 lg:w-5/12 lg:px-0 xl:w-2/5">
          <div className="flex gap-3 sm:gap-4">
            {skills("bg-javascript", "JavaScript")}
            {skills("bg-bootstrap", "Bootstrap")}
          </div>
          {workCard(
            "PuddingFest Event Website",
            "Built a responsive online event website called 'PuddingFest' for event participants who wish to register and see various event series.",
          )}
          <div className="mt-5 flex flex-col gap-4 xs:flex-row xs:gap-5 sm:mt-6 lg:mt-8">
            {githubButton(
              "https://github.com/Vannn03/PuddingFest-Event-Website",
            )}
            {demoButton("https://vannn03.github.io/PuddingFest-Event-Website/")}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SelectedWorks;
