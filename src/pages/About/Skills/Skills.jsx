const Skills = ({ motion }) => {
  const skillCard = (img, name) => (
    <motion.div
      className="flex flex-col items-center gap-8 rounded-3xl bg-skill py-8 transition-all hover:bg-softPurple"
      initial={{ opacity: 0, transform: "translateY(-28px)" }}
      whileInView={{ opacity: 1, transform: "translateY(0)" }}
      transition={{ delay: 0.2 }}
      viewport={{ once: true }}
      onHoverStart={(event, info) => {
        event.target.style.transform = "scale(1.05)";
      }}
      onHoverEnd={(event, info) => {
        event.target.style.transform = "scale(1)";
      }}
    >
      <img
        src={img}
        alt="figma"
        loading="lazy"
        className="w-16 xs:w-24 ss:w-36"
      />
      <h1 className="text-base font-semibold xs:text-lg ss:text-xl">{name}</h1>
    </motion.div>
  );

  return (
    <div className="grid grid-cols-2 gap-4 px-8 xs:gap-6 ss:gap-8 ss:px-20 md:grid-cols-3 lg:grid-cols-4">
      {skillCard("skill-images/figma.svg", "Figma")}
      {skillCard("skill-images/html.svg", "HTML")}
      {skillCard("skill-images/css.svg", "CSS")}
      {skillCard("skill-images/bootstrap.svg", "Bootstrap")}
      {skillCard("skill-images/javascript.svg", "JavaScript")}
      {skillCard("skill-images/react.svg", "React")}
      {skillCard("skill-images/tailwind.svg", "Tailwind CSS")}
    </div>
  );
};

export default Skills;
