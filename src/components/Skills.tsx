import React from "react";
import { motion } from "framer-motion";
import { Tskill } from "../../typings";
import Skill from "./Skill";

const Skills = ({ skills }: { skills: Tskill[] }) => {
  return (
    <>
      <h2 className="font-bold text-6xl mt-24 mb-24 w-full text-center md:text-6xl md:mt-12">
        {" "}
        Skills{" "}
      </h2>
      <section
        className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight lg:h-[80vh] sm:h-[50vh]  xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg
                md:bg-circularLightMd md:dark:bg-circularDarkMd
                sm:bg-circularLightSm sm:dark:bg-circularDarkSm dark:bg-circularDark "
      >
        <motion.article
          className="flex items-center jutify-center rounded-full font-semibold bg-dark text-light shadow-dark p-8 cursor-pointer dark:text-dark dark:bg-light  lg:p-6 md:p-4 xs:text-xs xs:p-2  "
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.article>
        {skills.map((skill) => (
          <Skill
            key={skill._id}
            name={skill.title}
            x={skill.xvalue}
            y={skill.yvalue}
          />
        ))}
      </section>
    </>
  );
};

export default Skills;
