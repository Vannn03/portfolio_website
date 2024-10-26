import { FaGithub, FaLaptopCode } from "react-icons/fa6";
import { motion } from "framer-motion";

const worksData = [
  {
    url_image: "work-images/task.webp",
    url_icons: [
      "/skill-images/typescript.svg",
      "/skill-images/next-js.svg",
      "/skill-images/tailwind.svg",
      "/skill-images/prisma.svg",
      "/skill-images/daisy-ui.svg",
      "/skill-images/material-ui.svg",
      "/skill-images/sqlite.svg",
      "/skill-images/turso.svg",
      "/skill-images/nextauth.svg",
    ],
    title: "TaskEase",
    description:
      "A todo-list website designed to enhance productivity through intuitive task management features.",
    url_repository: "https://github.com/Vannn03/task-ease",
    url_demo: "https://taskease-todo.vercel.app",
  },
  {
    url_image: "work-images/movie.webp",
    url_icons: [
      "/skill-images/javascript.svg",
      "/skill-images/next-js.svg",
      "/skill-images/tailwind.svg",
      "/skill-images/prisma.svg",
      "/skill-images/mysql.svg",
      "/skill-images/cloudinary.svg",
      "/skill-images/aiven.svg",
      "/skill-images/nextauth.svg",
    ],
    title: "Movie Peek",
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
    title: "Goods Data Collection",
    description:
      "Built a goods data collection website for selling goods that require CRUD & validation, authentication for both user & admin roles, and relationships between certain models.",
    url_repository: "https://github.com/Vannn03/Goods-Data-Collection-Website",
  },
  {
    url_image: "work-images/event.webp",
    url_icons: [
      "/skill-images/html.svg",
      "/skill-images/bootstrap.svg",
      "/skill-images/javascript.svg",
    ],
    title: "PuddingFest Event",
    description:
      "Built a responsive online event website called 'PuddingFest' for event participants who wish to register and see various event series.",
    url_repository: "https://github.com/Vannn03/PuddingFest-Event-Website",
    url_demo: "https://vannn03.github.io/PuddingFest-Event-Website",
  },
];

const CodingWorks = () => (
  <div className="flex flex-col gap-6 px-8 ss:px-20 sm:gap-12">
    {worksData.map((data, index) => (
      <motion.div
        key={index}
        className={`flex flex-col border-2 border-text/50 md:items-center ${index % 2 != 0 ? "md:flex-row-reverse" : "md:flex-row"} transition-shadow hover:shadow-work-box-glow`}
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
          <div className="flex flex-wrap items-center gap-3 xs:flex-nowrap xs:gap-4">
            {data.url_icons.map((icon, iconIndex) => (
              <img
                key={iconIndex}
                src={icon}
                alt="..."
                loading="lazy"
                className="aspect-square w-6 md:w-8"
                title={icon.replace("/skill-images/", "").replace(".svg", "")}
              />
            ))}
          </div>
          <h1 className="text-xl font-semibold xs:text-2xl md:text-3xl">
            {data.title}
          </h1>
          <p className="text-sm font-light text-text/75 xs:text-base md:text-lg ">
            {data.description}
          </p>
          <div className="mt-2 flex flex-col gap-3 xs:flex-row xs:gap-4">
            <a
              href={data.url_repository}
              target="_blank"
              className="flex items-center justify-center rounded-md bg-github px-6 py-3 text-sm font-medium text-white ss:text-base md:text-lg"
            >
              <FaGithub className="mr-2" /> View Repository
            </a>
            <a
              href={data.url_demo}
              target="_blank"
              className={`flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-medium text-white ss:text-base md:text-lg ${index == 2 && "cursor-not-allowed opacity-50"}`}
            >
              <FaLaptopCode className="mr-2" /> View Demo
            </a>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
);

export default CodingWorks;
