const Skills = ({ motion }) => {
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
      url_img: "skill-images/next-js.svg",
      name: "Next.js",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 px-8 xs:gap-6 ss:gap-8 ss:px-20 md:grid-cols-3 lg:grid-cols-4">
      {skillData.map((data, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center gap-8 rounded-3xl bg-skill py-8 transition-all hover:bg-softPurple"
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
            className="h-16 w-16 xs:h-24 xs:w-24 ss:h-36 ss:w-36"
          />
          <h1 className="text-base font-semibold xs:text-lg ss:text-xl">
            {data.name}
          </h1>
        </motion.div>
      ))}
    </div>
  );
};

export default Skills;
