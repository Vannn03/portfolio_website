import { FaLinkedin } from "react-icons/fa6";

const Experiences = ({ motion }) => {
  const image = (link, name, date) => (
    <div className="flex items-center gap-4 ss:block">
      <img
        src={link}
        alt="exalter"
        className="size-14 min-h-14 min-w-14 ss:-translate-y-4 sm:min-h-16 sm:min-w-16 sm:-translate-y-5 md:min-h-20 md:min-w-20 md:-translate-y-6"
        loading="lazy"
      />
      <div className="block ss:hidden">
        <p className="font-semibold tracking-wider text-white/75">{name}</p>
        <p className="mt-1 text-sm font-medium text-white/50">{date}</p>
      </div>
    </div>
  );

  const jobDetail = (position, date, description) => (
    <div>
      <h1 className="pr-3 text-lg font-bold xs:text-xl sm:text-2xl">
        {position}
      </h1>
      <p className="mt-2 text-sm font-semibold text-white/50 sm:text-base">
        {date}
      </p>
      <p className="mt-4 pb-8 pr-3 text-sm font-light text-white/75 sm:text-base">
        {description}
      </p>
    </div>
  );
  /* Rectangle 6 */

  return (
    <div className="mx-auto flex max-w-[1000px] flex-col gap-12 px-8 ss:px-20">
      {/* Exalter */}
      <motion.div
        className="flex flex-col gap-6 ss:flex-row ss:pt-6 sm:gap-8"
        initial={{ opacity: 0, transform: "translateY(-28px)" }}
        whileInView={{ opacity: 1, transform: "translateY(0)" }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        {image("experience-images/exalter.webp", "Exalter Students")}

        <div className="flex translate-x-3 gap-6 ss:translate-x-0 sm:gap-8">
          <div className="flex flex-col items-center">
            <div className="size-6 rounded-full bg-softPurple drop-shadow-glow sm:size-7" />
            <div className="h-full border-2" />
          </div>
          {jobDetail(
            "Web Developer Intern",
            "March 2024 - Now",
            "Currently developing a company profile website for Exalter Students & an event website for Inventify Center.",
          )}
        </div>
      </motion.div>

      {/* BNCC */}
      <motion.div
        className="relative flex flex-col gap-6 ss:flex-row ss:pt-6 sm:gap-8"
        initial={{ opacity: 0, transform: "translateY(-28px)" }}
        whileInView={{ opacity: 1, transform: "translateY(0)" }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="fade-bg absolute top-0 z-10 h-full w-full" />

        {image(
          "experience-images/bncc.webp",
          "Bina Nusantara Computer Club",
          "2 years 2 months",
        )}
        <div className="flex translate-x-3 flex-col ss:translate-x-0">
          <div className="flex gap-8">
            <div className="flex flex-col items-center">
              <div className="size-6 rounded-full bg-softPurple drop-shadow-glow sm:size-7" />
              <div className="h-full border-2" />
            </div>
            {jobDetail(
              "Bootcamp Back-End Member",
              "August - September 2023",
              "BNCC Bootcamp is an event that focuses on developing digital skills in the IT field with a total of 8 meeting sessions and 1 final project.",
            )}
          </div>

          <div className="flex gap-8">
            <div className="flex flex-col items-center">
              <div className="size-6 rounded-full bg-softPurple drop-shadow-glow sm:size-7" />
              <div className="h-full border-2" />
            </div>
            {jobDetail(
              "LnT Front-End Member",
              "September 2022 - May 2023",
              "Becoming an activist gave me another opportunity to enroll in a Front-end Development LnT course with a total of 13 meeting sessions, 1 mid project, and 1 final project.",
            )}
          </div>
        </div>
      </motion.div>

      <a
        href="https://www.linkedin.com/in/jovan-hermawan"
        target="_blank"
        className="flex items-center justify-center rounded-md bg-linkedin px-6 py-3  text-sm font-medium xs:text-base sm:text-lg"
      >
        <FaLinkedin className="mr-2" /> View More on Linkedin
      </a>
    </div>
  );
};

export default Experiences;
