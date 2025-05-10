import { motion } from "framer-motion";
import figmaImg from "../../assets/skill-images/figma.svg";
import htmlImg from "../../assets/skill-images/html.svg";
import cssImg from "../../assets/skill-images/css.svg";
import javascriptImg from "../../assets/skill-images/javascript.svg";
import reactImg from "../../assets/skill-images/react.svg";
import tailwindImg from "../../assets/skill-images/tailwind.svg";
import typescriptImg from "../../assets/skill-images/typescript.svg";
import nextJsImg from "../../assets/skill-images/next-js.svg";
import nodeJsImg from "../../assets/skill-images/nodejs.svg";
import prismaImg from "../../assets/skill-images/prisma.svg";
import nextAuthImg from "../../assets/skill-images/nextauth.svg";
import angularImg from "../../assets/skill-images/angular.svg";
import jiraImg from "../../assets/skill-images/jira.svg";
import bitbucketImg from "../../assets/skill-images/bitbucket.svg";
import awsImg from "../../assets/skill-images/aws.svg";
import jenkinsImg from "../../assets/skill-images/jenkins.svg";
import cucumberImg from "../../assets/skill-images/cucumber.svg";
import playwrightImg from "../../assets/skill-images/playwright.svg";
import swaggerImg from "../../assets/skill-images/swagger.svg";
import postmanImg from "../../assets/skill-images/postman.svg";
import bootstrapImg from "../../assets/skill-images/bootstrap.svg";
import daisyUiImg from "../../assets/skill-images/daisy-ui.svg";
import materialUiImg from "../../assets/skill-images/material-ui.svg";
import phpImg from "../../assets/skill-images/php.svg";
import laravelImg from "../../assets/skill-images/laravel.svg";
import javaImg from "../../assets/skill-images/java.svg";
import mysqlImg from "../../assets/skill-images/mysql.svg";
import sqliteImg from "../../assets/skill-images/sqlite.svg";
import visualParadigmImg from "../../assets/skill-images/visual-paradigm.svg";
import tursoImg from "../../assets/skill-images/turso.svg";
import gitImg from "../../assets/skill-images/git.svg";
import vsCodeImg from "../../assets/skill-images/vs-code.svg";
import phpmyadminImg from "../../assets/skill-images/phpmyadmin.svg";
import cloudinaryImg from "../../assets/skill-images/cloudinary.svg";
import aivenImg from "../../assets/skill-images/aiven.svg";

const skillData = [
  { url_img: figmaImg, name: "Figma" },
  { url_img: htmlImg, name: "HTML" },
  { url_img: cssImg, name: "CSS" },
  { url_img: javascriptImg, name: "JavaScript" },
  { url_img: reactImg, name: "React" },
  { url_img: tailwindImg, name: "Tailwind CSS" },
  { url_img: typescriptImg, name: "TypeScript" },
];

const otherSkillData = [
  { url_img: nextJsImg, name: "Next.js" },
  { url_img: nodeJsImg, name: "Node.js" },
  { url_img: prismaImg, name: "Prisma" },
  { url_img: nextAuthImg, name: "NextAuth.js" },
  { url_img: angularImg, name: "Angular" },
  { url_img: jiraImg, name: "Jira" },
  { url_img: bitbucketImg, name: "Bitbucket" },
  { url_img: awsImg, name: "AWS" },
  { url_img: jenkinsImg, name: "Jenkins" },
  { url_img: cucumberImg, name: "Cucumber" },
  { url_img: playwrightImg, name: "Playwright" },
  { url_img: swaggerImg, name: "Swagger" },
  { url_img: postmanImg, name: "Postman" },
  { url_img: bootstrapImg, name: "Bootstrap" },
  { url_img: daisyUiImg, name: "Daisy UI" },
  { url_img: materialUiImg, name: "Material UI" },
  { url_img: phpImg, name: "PHP" },
  { url_img: laravelImg, name: "Laravel" },
  { url_img: javaImg, name: "Java" },
  { url_img: mysqlImg, name: "MySQL" },
  { url_img: sqliteImg, name: "SQLite" },
  { url_img: visualParadigmImg, name: "Visual Paradigm" },
  { url_img: tursoImg, name: "Turso" },
  { url_img: gitImg, name: "Git" },
  { url_img: vsCodeImg, name: "VS Code" },
  { url_img: phpmyadminImg, name: "PhpMyAdmin" },
  { url_img: cloudinaryImg, name: "Cloudinary" },
  { url_img: aivenImg, name: "Aiven" },
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
