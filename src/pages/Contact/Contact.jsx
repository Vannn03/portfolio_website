import { IoChatboxEllipses } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion";

const contactData = [
  {
    icon_element: (
      <IoChatboxEllipses className="size-12 text-text/75 md:size-16" />
    ),
    type: "CHAT",
    detail1: "Typical reply time: within minutes",
    detail2: "Monday - Friday | 9am-5pm WIB",
    buttonHref: "https://wa.me/6281282266788",
    buttonName: "Chat Me",
  },
  {
    icon_element: <MdEmail className="size-12 text-text/75 md:size-16" />,
    type: "EMAIL",
    detail1: "Typical reply time: within 1-3 days",
    detail2: "Everyday | 9am-5pm WIB",
    buttonHref: "mailto:myjovan16@gmail.com",
    buttonName: "Email Me",
  },
  {
    icon_element: (
      <FaMapLocationDot className="size-12 text-text/75 md:size-16" />
    ),
    type: "LOCATION",
    detail1: "Jakarta, Indonesia",
    detail2: "WIB time zone",
    buttonHref: "http://maps.google.com/?q=1200 Jakarta, Indonesia",
    buttonName: "Find Me",
  },
];

const Contact = () => (
  <div className="mx-auto flex max-w-[1000px] flex-col gap-6 px-8 ss:px-20">
    {contactData.map((data, index) => (
      <motion.div
        className="flex flex-col items-center gap-6 rounded-lg bg-primary p-6 xs:p-10 sm:flex-row sm:justify-between sm:gap-8"
        initial={{ opacity: 0, transform: "translateY(-28px)" }}
        whileInView={{ opacity: 1, transform: "translateY(0)" }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        key={index}
      >
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-12 md:gap-16">
          {data.icon_element}
          <div className="text-center sm:text-start">
            <h1 className="text-lg font-semibold xs:text-xl">{data.type}</h1>
            <p className="mt-4 text-sm font-light text-text/50 xs:text-base sm:mt-1">
              {data.detail1} <br /> {data.detail2}
            </p>
          </div>
        </div>
        <a
          href={data.buttonHref}
          target="_blank"
          className="rounded-md bg-accent px-6 py-3 text-sm font-medium text-white xs:text-base md:text-lg"
        >
          {data.buttonName}
        </a>
      </motion.div>
    ))}
  </div>
);

export default Contact;
