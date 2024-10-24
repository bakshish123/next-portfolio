import React from "react";
import { motion } from "framer-motion";
const Skills = () => {
  const Skill = ({ name, x, y }) => {
    return (
      <motion.div
        initial={{ x: 0, y: 0 }}
        whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
        whileHover={{ scale: 1.1 }}
        viewport={{ once: true }}
        className="absolute cursor-pointer
        py-3 px-6 shadow-dark flex items-center justify-center rounded-full font-semibold bg-light text-dark
        dark:bg-light dark:text-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
        xs:text-dark xs:dark:text-light xs:font-bold

        "
      >
        {name}
      </motion.div>
    );
  };
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <div
        className="w-full h-screen relative flex items-center lg:h-[80vh] sm:h-[70vh] xs:h-[50vh]
      justify-center rounded-full bg-circularLight dark:bg-circularDark 
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkMd
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm
      "
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="cursor-pointer
          dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:text-xs xs:p-2
          p-8 shadow-dark flex items-center justify-center rounded-full font-semibold bg-light  text-dark"
        >
          Web
        </motion.div>
        <Skill name={"HTML"} x={"-20vw"} y={"2vw"}></Skill>
        <Skill name={"CSS"} x={"-5vw"} y={"-10vw"}></Skill>
        <Skill name={"JavaScript"} x={"20vw"} y={"6vw"}></Skill>
        <Skill name={"ReactJS"} x={"0vw"} y={"10vw"}></Skill>
        <Skill name={"NextJS"} x={"-20vw"} y={"-15vw"}></Skill>
        <Skill name={"NodeJS"} x={"15vw"} y={"-12vw"}></Skill>
        <Skill name={"ExpressJS"} x={"32vw"} y={"-5vw"}></Skill>
        <Skill name={"MongoDB"} x={"0vw"} y={"-20vw"}></Skill>
        <Skill name={"Firebase"} x={"-25vw"} y={"18vw"}></Skill>
        <Skill name={"Java"} x={"18vw"} y={"16vw"}></Skill>
      </div>
    </>
  );
};

export default Skills;
