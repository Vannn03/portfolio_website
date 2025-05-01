import { FaFigma } from "react-icons/fa6";
import { motion } from "framer-motion";

const worksData = [
  {
    url_image: "src/assets/work-images/gms.webp",
    url_icons: ["src/assets/skill-images/figma.svg", "src/assets/skill-images/visual-paradigm.svg"],
    title: "Body Ken Gym Management System",
    description:
      "An integrated application designed to help gym managers automate various daily administrative and operational functions.",
    url_design:
      "https://www.figma.com/proto/Q9sojAekG34IHc3fO3AiK6/ABAD_Body-Ken-Gym?node-id=0-1&t=feiD1hpwKXx9lH0h-1",
  },
  {
    url_image: "src/assets/work-images/petcare.webp",
    url_icons: ["src/assets/skill-images/figma.svg"],
    title: "PetCare",
    description:
      "A mobile-based application that provides comprehensive health and care services for pets, including veterinary consultations, pet product sales, grooming services, and pet boarding.",
    url_design:
      "https://www.figma.com/proto/sugUuwjD8kKqSoDyksR2Ki/PetCare?node-id=0-1&node-type=canvas&viewport=634%2C-43%2C0.23&t=ZmqNRX0VphRhE4NW-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=26%3A2",
  },
  {
    url_image: "src/assets/work-images/skintastic.webp",
    url_icons: ["src/assets/skill-images/figma.svg"],
    title: "Skintastic",
    description:
      "A mobile application that sells various skincare products with eco-friendly packaging.",
    url_design:
      "https://www.figma.com/proto/jT2qxvVeDXxkI4uwNgPNQZ/Final-Project?node-id=183-860&node-type=canvas&viewport=625%2C431%2C0.1&t=a5UAU3gqCs1XLOMJ-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=220%3A17225",
  },
];

const DesignWorks = () => (
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
                title={icon.replace("src/assets/skill-images/", "").replace(".svg", "")}
              />
            ))}
          </div>
          <h1 className="text-xl font-semibold xs:text-2xl md:text-3xl">
            {data.title}
          </h1>
          <p className="text-sm font-light text-text/75 xs:text-base md:text-lg ">
            {data.description}
          </p>
          <a
            href={data.url_design}
            target="_blank"
            className="from mt-2 flex w-fit items-center rounded-md bg-accent px-6 py-3 text-sm font-medium text-white ss:text-base md:text-lg"
          >
            <FaFigma className="mr-2" /> View Prototype
          </a>
        </div>
      </motion.div>
    ))}
  </div>
);

export default DesignWorks;
