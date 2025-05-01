import { motion } from "framer-motion";

const skillData = [
  {
    url_img: "src/assets/skill-images/figma.svg",
    name: "Figma",
  },
  {
    url_img: "src/assets/skill-images/html.svg",
    name: "HTML",
  },
  {
    url_img: "src/assets/skill-images/css.svg",
    name: "CSS",
  },
  {
    url_img: "src/assets/skill-images/javascript.svg",
    name: "JavaScript",
  },
  {
    url_img: "src/assets/skill-images/react.svg",
    name: "React",
  },
  {
    url_img: "src/assets/skill-images/tailwind.svg",
    name: "Tailwind CSS",
  },
  {
    url_img: "src/assets/skill-images/typescript.svg",
    name: "TypeScript",
  },
];

const otherSkillData = [
  {
    url_img: "src/assets/skill-images/next-js.svg",
    name: "Next.js",
  },
  {
    url_img: "src/assets/skill-images/nodejs.svg",
    name: "Node.js",
  },
  {
    url_img: "src/assets/skill-images/prisma.svg",
    name: "Prisma",
  },
  {
    url_img: "src/assets/skill-images/nextauth.svg",
    name: "NextAuth.js",
  },
  {
    url_img: "src/assets/skill-images/angular.svg",
    name: "Angular",
  },
  {
    url_img: "src/assets/skill-images/jira.svg",
    name: "Jira",
  },
  {
    url_img: "src/assets/skill-images/bitbucket.svg",
    name: "Bitbucket",
  },
  {
    url_img: "src/assets/skill-images/cucumber.svg",
    name: "Cucumber",
  },
  {
    url_img: "src/assets/skill-images/playwright.svg",
    name: "Playwright",
  },
  {
    url_img: "src/assets/skill-images/swagger.svg",
    name: "Swagger",
  },
  {
    url_img: "src/assets/skill-images/postman.svg",
    name: "Postman",
  },
  {
    url_img: "src/assets/skill-images/bootstrap.svg",
    name: "Bootstrap",
  },
  {
    url_img: "src/assets/skill-images/daisy-ui.svg",
    name: "Daisy UI",
  },
  {
    url_img: "src/assets/skill-images/material-ui.svg",
    name: "Material UI",
  },
  {
    url_img: "src/assets/skill-images/php.svg",
    name: "PHP",
  },
  {
    url_img: "src/assets/skill-images/laravel.svg",
    name: "Laravel",
  },
  {
    url_img: "src/assets/skill-images/java.svg",
    name: "Java",
  },
  {
    url_img: "src/assets/skill-images/mysql.svg",
    name: "MySQL",
  },
  {
    url_img: "src/assets/skill-images/sqlite.svg",
    name: "SQLite",
  },
  {
    url_img: "src/assets/skill-images/visual-paradigm.svg",
    name: "Visual Paradigm",
  },
  {
    url_img: "src/assets/skill-images/turso.svg",
    name: "Turso",
  },
  {
    url_img: "src/assets/skill-images/git.svg",
    name: "Git",
  },
  {
    url_img: "src/assets/skill-images/vs-code.svg",
    name: "VS Code",
  },
  {
    url_img: "src/assets/skill-images/phpmyadmin.svg",
    name: "PhpMyAdmin",
  },
  {
    url_img: "src/assets/skill-images/cloudinary.svg",
    name: "Cloudinary",
  },
  {
    url_img: "src/assets/skill-images/aiven.svg",
    name: "Aiven",
  },
];

const Skills = () => (
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

export default Skills;
