import { motion } from "framer-motion";

const Skills = () => {
  const skillData = [
    {
      url_img: "skill-images/figma.svg",
      name: "Figma",
    },
    {
      url_img: "skill-images/html.svg",
      name: "HTML",
    },
    {
      url_img: "skill-images/css.svg",
      name: "CSS",
    },
    {
      url_img: "skill-images/javascript.svg",
      name: "JavaScript",
    },
    {
      url_img: "skill-images/react.svg",
      name: "React",
    },
    {
      url_img: "skill-images/tailwind.svg",
      name: "Tailwind CSS",
    },
    {
      url_img: "skill-images/typescript.svg",
      name: "TypeScript",
    },
    {
      url_img: "skill-images/next-js.svg",
      name: "Next.js",
    },
    {
      url_img: "skill-images/nodejs.svg",
      name: "Node.js",
    },
    {
      url_img: "skill-images/prisma.svg",
      name: "Prisma",
    },
    {
      url_img: "skill-images/nextauth.svg",
      name: "NextAuth.js",
    },
  ];

  const otherSkillData = [
    {
      url_img: "skill-images/bootstrap.svg",
      name: "Bootstrap",
    },
    {
      url_img: "skill-images/daisy-ui.svg",
      name: "Daisy UI",
    },
    {
      url_img: "skill-images/material-ui.svg",
      name: "Material UI",
    },
    {
      url_img: "skill-images/php.svg",
      name: "PHP",
    },
    {
      url_img: "skill-images/laravel.svg",
      name: "Laravel",
    },
    {
      url_img: "skill-images/java.svg",
      name: "Java",
    },
    {
      url_img: "skill-images/mysql.svg",
      name: "MySQL",
    },
    {
      url_img: "skill-images/sqlite.svg",
      name: "SQLite",
    },
    {
      url_img: "skill-images/turso.svg",
      name: "Turso",
    },
    {
      url_img: "skill-images/git.svg",
      name: "Git",
    },
    {
      url_img: "skill-images/vs-code.svg",
      name: "VS Code",
    },
    {
      url_img: "skill-images/phpmyadmin.svg",
      name: "PhpMyAdmin",
    },
    {
      url_img: "skill-images/cloudinary.svg",
      name: "Cloudinary",
    },
    {
      url_img: "skill-images/aiven.svg",
      name: "Aiven",
    },
  ];

  return (
    <div className="px-8 ss:px-20">
      <div className="grid grid-cols-2 gap-4 xs:gap-6 ss:gap-8 md:grid-cols-3 lg:grid-cols-4">
        {skillData.map((data, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center gap-8 rounded-3xl bg-skill py-8 transition-all hover:bg-accent/75"
            initial={{ opacity: 0, transform: "translateY(-28px)" }}
            whileInView={{ opacity: 1, transform: "translateY(0)" }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            onHoverStart={(event) => {
              event.target.style.transform = "scale(1.05)";
            }}
            onHoverEnd={(event) => {
              event.target.style.transform = "scale(1)";
            }}
          >
            <img
              src={data.url_img}
              alt="..."
              loading="lazy"
              className="h-16 w-16 xs:h-24 xs:w-24 ss:h-32 ss:w-32"
            />
            <h1 className="text-center text-base font-semibold xs:text-lg ss:text-xl">
              {data.name}
            </h1>
          </motion.div>
        ))}
      </div>

      <div className="mt-10">
        <h1 className="mb-4 text-xl font-semibold text-text/75 xs:text-2xl">
          Others:
        </h1>
        <div className="grid grid-cols-2 gap-4 xs:grid-cols-3 xs:gap-6 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 ">
          {otherSkillData.map((data, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center gap-4 rounded-3xl bg-skill py-4 transition-all hover:bg-accent/75"
              initial={{ opacity: 0, transform: "translateY(-28px)" }}
              whileInView={{ opacity: 1, transform: "translateY(0)" }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              onHoverStart={(event) => {
                event.target.style.transform = "scale(1.05)";
              }}
              onHoverEnd={(event) => {
                event.target.style.transform = "scale(1)";
              }}
            >
              <img
                src={data.url_img}
                alt="..."
                loading="lazy"
                className="size-8 xs:size-10 ss:size-12"
              />
              <h1 className="text-center text-sm font-semibold ss:text-base">
                {data.name}
              </h1>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
