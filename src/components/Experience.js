import React from "react";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
    return (
      <li
        ref={ref}
        className="my-8 md:w-[80%] first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
      >
        <LiIcon reference={ref} />
        <motion.div
          className=""
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
        >
          <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
            {position}&nbsp;{" "}
            <a
              href={companyLink}
              target={"_blank"}
              className="text-primary capitalize dark:text-primaryDark dark:hover:text-primary"
            >
              @{company}
            </a>
          </h3>
          <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
            {time} {address}
          </span>
          <p className="font-medium w-full md:text-sm">{work}</p>
        </motion.div>
      </li>
    );
  };
  return (
    <div className="my-64 ">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16 ">
        Experience
      </h2>
      <div className="w-[75%] mx-auto relative" ref={ref}>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top
          dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]
          "
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2 ">
          <Details
            position={"Frontend Developer Intern"}
            company={"Binmile Technologies"}
            time={" 2023"}
            address={"Noida, India"}
            work={
              "Built a fully responsive movie web app as a Frontend Developer intern at Binmile Technologies, using React, TypeScript, Redux Toolkit, Tailwind CSS, and React Router. Contributed to developing global state management, interactive carousels, and a user-friendly favorites system, achieving 100% cross-device responsiveness and reducing runtime errors through strong type safety."
            }
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
