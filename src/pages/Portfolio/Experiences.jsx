import { FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";

const experienceData = [
  {
    url_image: "src/assets/experience-images/binus.webp",
    company_name: "Bina Nusantara University",
    job_detail: [
      {
        position: "Graduation Committee",
        date: "Jul 2024 - Nov 2024",
        description:
          "Contributed to the execution of the 69th and 70th graduation ceremony for 4000+ graduates.",
      },
    ],
  },
  {
    url_image: "src/assets/experience-images/GDSC.webp",
    company_name: "Google Developer Student Club",
    job_detail: [
      {
        position: "Web Development Course Member",
        date: "Oct 2023 - now",
        description:
          "Completed a full web development roadmap across four key areas, accomplishing 15+ tasks.",
      },
    ],
  },
  {
    url_image: "src/assets/experience-images/exalter.webp",
    company_name: "Exalter Students",
    job_detail: [
      {
        position: "Web Developer Intern",
        date: "Mar 2024 - Jun 2024",
        description: (
          <ul className="list-disc pl-4">
            <li>
              Collaborated within a team of 3 using GitHub, achieving a 30%
              reduction in development time by streamlining workflow processes
              with Git.
            </li>
            <li>
              Led the design of the Exalter Students company profile website,
              contributing to 75% of the overall visual and functional layout.
            </li>
            <li>
              Developed and implemented 4 key pages for the Inventify Center
              event website utilizing TypeScript, Next.js, and Tailwind CSS.
            </li>
          </ul>
        ),
      },
    ],
  },
  {
    url_image: "src/assets/experience-images/bncc.webp",
    company_name: "Bina Nusantara Computer Club",
    job_detail: [
      {
        position: "Bootcamp Back-End Member",
        date: "Aug 2023 - Sep 2023",
        description:
          "BNCC Bootcamp is an event that focuses on developing digital skills in the IT field with a total of 8 meeting sessions and 1 final project.",
      },
      {
        position: "LnT Front-End Member",
        date: "Sep 2022 - May 2023",
        description:
          "Becoming an activist gave me another opportunity to enroll in a Front-end Development LnT course with a total of 13 meeting sessions, 1 mid project, and 1 final project.",
      },
    ],
  },
];

const Experiences = () => (
  <div className="mx-auto flex max-w-[1000px] flex-col gap-10 px-8 xs:gap-12 ss:px-20">
    {experienceData.map((data, index) => (
      <motion.div
        className="sm:gap-86 relative flex flex-col gap-6"
        initial={{ opacity: 0, transform: "translateY(-28px)" }}
        whileInView={{ opacity: 1, transform: "translateY(0)" }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        key={index}
      >
        {index == experienceData.length - 1 ? (
          <div className="absolute top-0 z-10 h-full w-full bg-experience-fade" />
        ) : null}

        <div className="flex items-center gap-4">
          <img
            src={data.url_image}
            alt="..."
            className="w-16 rounded-sm"
            loading="lazy"
          />
          <p className="text-sm font-medium tracking-wider text-text/75 xs:text-base">
            {data.company_name}
          </p>
        </div>

        <div className="flex flex-col pl-5">
          {data.job_detail.map((detail, index2) => (
            <div className="flex gap-4 xs:gap-6" key={index2}>
              <div className="flex flex-col items-center">
                <div className="size-5 rounded-full bg-accent shadow-experience-circle-glow sm:h-7 sm:w-6" />
                <div className="h-full border border-text/35" />
              </div>
              <div className="flex -translate-y-1 flex-col">
                <h1 className="text-lg font-semibold xs:text-xl sm:text-2xl">
                  {detail.position}
                </h1>
                <p className="text-sm font-medium italic text-text/35 sm:text-base">
                  {detail.date}
                </p>
                <div className="mt-4 pb-8 text-sm font-light leading-normal text-text/75 sm:text-base">
                  {detail.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    ))}

    <a
      href="https://www.linkedin.com/in/jovan-hermawan"
      target="_blank"
      className="flex items-center justify-center rounded-md bg-linkedin px-6  py-3 text-sm font-medium text-white xs:text-base sm:text-lg"
    >
      <FaLinkedin className="mr-2" /> View More on Linkedin
    </a>
  </div>
);

export default Experiences;
