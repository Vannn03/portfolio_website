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
      <p className="font-semibold tracking-wider text-white/75 ss:hidden">
        {name}
      </p>
    </div>
  );

  const jobDetail = (position, date, description) => (
    <div>
      <h1 className="pr-3 text-lg font-semibold xs:text-xl sm:text-2xl">
        {position}
      </h1>
      <p className="text-sm font-medium italic text-white/35 sm:text-base">
        {date}
      </p>
      <p className="mt-4 pb-8 pr-3 text-sm font-light leading-normal text-white/75 sm:text-base">
        {description}
      </p>
    </div>
  );
  /* Rectangle 6 */

  return (
    <div className="mx-auto flex max-w-[1000px] flex-col gap-12 px-8 ss:px-20">
      {/* GDSC ITB */}
      <motion.div
        className="flex flex-col gap-6 ss:flex-row ss:pt-6 sm:gap-8"
        initial={{ opacity: 0, transform: "translateY(-28px)" }}
        whileInView={{ opacity: 1, transform: "translateY(0)" }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        {image("experience-images/GDSC.webp", "Google Developer Student Club")}

        <div className="flex translate-x-[14px] gap-6 ss:translate-x-0 sm:gap-8">
          <div className="flex flex-col items-center">
            <div className="size-6 rounded-full bg-softPurple shadow-experience-circle-glow sm:size-7" />
            <div className="h-full border-2" />
          </div>
          {jobDetail(
            "Web Development Course Member",
            "Oct 2023 - Now",
            "Received a web development roadmap with four main areas: introduction (covering HTML, CSS, and JavaScript), front-end (React.js), database (PostgreSQL), and back-end (Express.js), each with specific tasks.",
          )}
        </div>
      </motion.div>

      {/* Exalter */}
      <motion.div
        className="flex flex-col gap-6 ss:flex-row ss:pt-6 sm:gap-8"
        initial={{ opacity: 0, transform: "translateY(-28px)" }}
        whileInView={{ opacity: 1, transform: "translateY(0)" }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        {image("experience-images/exalter.webp", "Exalter Students")}

        <div className="flex translate-x-[14px] gap-6 ss:translate-x-0 sm:gap-8">
          <div className="flex flex-col items-center">
            <div className="size-6 rounded-full bg-softPurple shadow-experience-circle-glow sm:size-7" />
            <div className="h-full border-2" />
          </div>
          {jobDetail(
            "Web Developer Intern",
            "Mar - Jun 2024",
            <ul className="list-disc pl-4">
              <li>
                Collaborated within a dynamic team of three using GitHub and Git
                to manage version control and streamline development processes.
              </li>
              <li>
                Played a key role in designing and developing two projects: the
                Exalter Students company profile website and the Inventify
                Center event website, utilizing TypeScript, Next.js, and Prisma.
              </li>
              <li>
                Recognized with the 'Best Intern' award in the Website
                Development Division for outstanding contributions and
                dedication to delivering high-quality web solutions.
              </li>
            </ul>,
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
        <div className="flex translate-x-[14px] flex-col ss:translate-x-0">
          <div className="flex gap-8">
            <div className="flex flex-col items-center">
              <div className="size-6 rounded-full bg-softPurple shadow-experience-circle-glow sm:size-7" />
              <div className="h-full border-2" />
            </div>
            {jobDetail(
              "Bootcamp Back-End Member",
              "Aug - Sept 2023",
              "BNCC Bootcamp is an event that focuses on developing digital skills in the IT field with a total of 8 meeting sessions and 1 final project.",
            )}
          </div>

          <div className="flex gap-8">
            <div className="flex flex-col items-center">
              <div className="size-6 rounded-full bg-softPurple shadow-experience-circle-glow sm:size-7" />
              <div className="h-full border-2" />
            </div>
            {jobDetail(
              "LnT Front-End Member",
              "Sept 2022 - May 2023",
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
