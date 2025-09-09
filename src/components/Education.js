import React from "react";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  const Details = ({ type, time, place, info }) => {
    const ref = useRef(null);
    return (
      <li
        ref={ref}
        className="my-8 first:mt-0 last:mb-0 w-[60%] md:w-[80%] mx-auto flex flex-col items-center justify-between"
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
          <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}</h3>
          <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
            {time} | {place}
          </span>
          <p className="font-medium w-full md:text-sm">{info}</p>
        </motion.div>
      </li>
    );
  };
  return (
    <div className="my-64 ">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16  ">
        Education
      </h2>
      <div
        className="w-[75%] mx-auto  relative lg:w-[90%] md:w-full  "
        ref={ref}
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2 ">
          <Details
            type={"B.Tech In Information Technology"}
            time={"2021-Present"}
            place={"Noida, UP"}
            info={
              "Pursuing B.Tech in Information Technology from JSS, Noida. Learning and exploring new technologies."
            }
          />

          <Details
            type={"Graduate School"}
            time={"2025-2027"}
            place={"Florida, Gainesville"}
            info={
              "Currently pursuing a Master’s in Computer Science at the University of Florida, with a strong interest in learning and applying new technologies."
            }
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
