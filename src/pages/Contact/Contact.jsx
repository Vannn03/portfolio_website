import { BsChatText } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";

const Contact = ({ motion }) => {
  const contactType = (name, replyTime, dateTime) => (
    <>
      <div className="text-center sm:text-start">
        <h1 className="text-lg font-semibold xs:text-xl">{name}</h1>
        <p className="mt-1 text-sm font-light text-white/50 xs:text-base">
          {replyTime} <br /> {dateTime}
        </p>
      </div>
    </>
  );

  const buttonLink = (linkHref, linkText) => (
    <a
      href={linkHref}
      target="_blank"
      className="rounded-md bg-softPurple px-6 py-3 text-sm font-medium xs:text-base md:text-lg"
    >
      {linkText}
    </a>
  );

  return (
    <div className="mx-auto flex max-w-[1000px] flex-col gap-6 px-8 ss:px-20">
      <motion.div
        className="flex flex-col items-center gap-6 rounded-lg bg-softBlack p-6 xs:gap-8 xs:p-10 sm:flex-row sm:justify-between"
        initial={{ opacity: 0, transform: "translateY(-28px)" }}
        whileInView={{ opacity: 1, transform: "translateY(0)" }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-center gap-6 xs:gap-8 sm:flex-row sm:gap-12 md:gap-16">
          <BsChatText className="size-10 text-white/75 xs:size-12 md:size-16" />
          {contactType(
            "CHAT",
            "Typical reply time: within minutes",
            "Monday - Friday | 9am-5pm WIB",
          )}
        </div>
        {buttonLink("https://wa.me/6281282266788", "Chat Me")}
      </motion.div>

      <motion.div
        className="flex flex-col items-center gap-6 rounded-lg bg-softBlack p-6 xs:gap-8 xs:p-10 sm:flex-row sm:justify-between"
        initial={{ opacity: 0, transform: "translateY(-28px)" }}
        whileInView={{ opacity: 1, transform: "translateY(0)" }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-center gap-6 xs:gap-8 sm:flex-row sm:gap-12 md:gap-16">
          <AiOutlineMail className="size-12 text-white/75 md:size-16" />
          {contactType(
            "EMAIL",
            "Typical reply time: within 1-3 days",
            "Everyday | 9am-5pm WIB",
          )}
        </div>
        {buttonLink("mailto:myjovan16@gmail.com", "Email Me")}
      </motion.div>

      <motion.div
        className="flex flex-col items-center gap-6 rounded-lg bg-softBlack p-6 xs:gap-8 xs:p-10 sm:flex-row sm:justify-between"
        initial={{ opacity: 0, transform: "translateY(-28px)" }}
        whileInView={{ opacity: 1, transform: "translateY(0)" }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-center gap-6 xs:gap-8 sm:flex-row sm:gap-12 md:gap-16">
          <IoLocationOutline className="size-12 text-white/75 md:size-16" />
          {contactType("LOCATION", "Jakarta, Indonesia", "WIB time zone")}
        </div>
        {buttonLink(
          "http://maps.google.com/?q=1200 Jakarta, Indonesia",
          "Find Me",
        )}
      </motion.div>
    </div>
  );
};

export default Contact;
