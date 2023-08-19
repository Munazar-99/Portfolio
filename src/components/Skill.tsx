import { motion } from 'framer-motion';
import React from 'react'

const Skill = ({ name, x, y }: { name: string; x: string; y: string }) => {
    return (
      <motion.article
        className="flex  
      items-center jutify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute  lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark  xs:dark:text-light xs:font-bold  dark:text-dark dark:bg-light"
        whileHover={{ scale: 1.05 }}
        initial={{ x: 0, y: 0 }}
        whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
        viewport={{ once: true }}
      >
        {name}
      </motion.article>
    );
  };

export default Skill