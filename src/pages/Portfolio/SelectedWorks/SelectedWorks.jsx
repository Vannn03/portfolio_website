import { FaGithub } from "react-icons/fa6";
import { RxArrowTopRight } from "react-icons/rx";

const SelectedWork2 = ({ motion }) => {
  const worksData = [
    {
      url_image: "work-images/movie.webp",
      url_icons: [
        "/skill-images/javascript.svg",
        "/skill-images/next-js.svg",
        "/skill-images/tailwind.svg",
        "/skill-images/prisma.svg",
      ],
      title: "Movie Peek Website",
      description:
        "A personal movie database website for users to freely access trailers & details of various movies using API data from TMDB.",
      url_repository: "https://github.com/Vannn03/movie_peek",
      url_demo: "https://movie-peek.vercel.app",
    },
    {
      url_image: "work-images/storage.webp",
      url_icons: [
        "/skill-images/bootstrap.svg",
        "/skill-images/javascript.svg",
        "/skill-images/php.svg",
        "/skill-images/laravel.svg",
      ],
      title: "Goods Data Collection Website",
      description:
        "Built a goods data collection website for selling goods that require CRUD & validation, authentication for both user & admin roles, and relationships between certain models.",
      url_repository:
        "https://github.com/Vannn03/Goods-Data-Collection-Website",
    },
    {
      url_image: "work-images/event.webp",
      url_icons: [
        "/skill-images/html.svg",
        "/skill-images/bootstrap.svg",
        "/skill-images/javascript.svg",
      ],
      title: "PuddingFest Event Website",
      description:
        "Built a responsive online event website called 'PuddingFest' for event participants who wish to register and see various event series.",
      url_repository: "https://github.com/Vannn03/PuddingFest-Event-Website",
      url_demo: "https://vannn03.github.io/PuddingFest-Event-Website",
    },
  ];

  return (
    <div className="flex flex-col gap-6 px-8 ss:px-20 sm:gap-12">
      {worksData.map((data, index) => (
        <motion.div
          key={index}
          className={`flex flex-col items-center border-2 border-white/50 ${index == 1 ? "md:flex-row-reverse" : "md:flex-row"} transition-shadow hover:shadow-work-box-glow`}
          initial={{ opacity: 0, transform: "translateY(-28px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0)" }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img
            src={data.url_image}
            alt="..."
            className="aspect-video w-full object-cover md:h-[580px] md:w-2/5 xl:w-3/5"
            loading="lazy"
          />
          <div className="flex flex-col gap-4 p-4 xs:p-6 sm:p-8 md:gap-6">
            <div className="flex items-center gap-4">
              {data.url_icons.map((icon, iconIndex) => (
                <img
                  key={iconIndex}
                  src={icon}
                  alt="..."
                  loading="lazy"
                  className="w-6 md:w-8"
                  title={icon.replace("/skill-images/", "").replace(".svg", "")}
                />
              ))}
            </div>
            <h1 className="text-xl font-semibold xs:text-2xl md:text-3xl">
              {data.title}
            </h1>
            <p className="text-sm font-light text-white/75 xs:text-base md:text-lg ">
              {data.description}
            </p>
            <div className="mt-2 flex flex-col gap-3 xs:flex-row xs:gap-4">
              <a
                href={data.url_repository}
                target="_blank"
                className="flex items-center justify-center rounded-md bg-github px-6 py-3 text-sm font-medium ss:text-base md:text-lg"
              >
                <FaGithub className="mr-2" /> View Repository
              </a>
              <a
                href={data.url_demo}
                target="_blank"
                className={`flex items-center justify-center rounded-md bg-softPurple px-6 py-3 text-sm font-medium ss:text-base md:text-lg ${index == 1 && "cursor-not-allowed opacity-50"}`}
              >
                View Demo <RxArrowTopRight className="ml-2" />
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SelectedWork2;
