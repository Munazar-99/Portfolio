import React, { useState } from "react";
import { motion } from "framer-motion";
import { GithubIcon, LinkedInIcon } from "./Icons";
import Logo from "./Logo";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import CustomMobileLink from "./CustomMobileLink";
import CustomLink from "./CustomLink";

const Navbar = () => {
  const { isDark, setIsDark } = useThemeSwitcher();
  const [open, setOpen] = useState(false);
  const themeHandler = () => {
    setIsDark(!isDark);
  };

  const hamburgerClickHandler = () => {
    setOpen(!open);
  };
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8">
      <button
        onClick={hamburgerClickHandler}
        aria-label="Toggle Menu"
        className=" flex-col justify-center items-center hidden lg:flex "
      >
        <span
          className={`bg-dark transition-all duration-300 ease-out dark:bg-light block h-0.5 w-6 rounded-sm  ${
            open ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark transition-all duration-300 ease-out dark:bg-light block h-0.5 w-6 rounded-sm m-0.5 ${
            open ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark transition-all duration-300 ease-out dark:bg-light block h-0.5 w-6 rounded-sm  ${
            open ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      <section className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          <CustomLink href="/contact" title="Contact" className="ml-4" />
        </nav>
        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            whileTap={{ scale: 0.9 }}
            whileHover={{ y: -3 }}
            href="https://github.com/Munazar-99"
            target={"_blank"}
            className="w-[1.85rem] mx-4 h-[1.85rem]"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            whileTap={{ scale: 0.9 }}
            whileHover={{ y: -3 }}
            href="https://www.linkedin.com/in/munazar-abdulle-9140b9259/"
            target={"_blank"}
            className="w-[1.85rem] mx-4 h-[1.85rem]"
          >
            <LinkedInIcon />
          </motion.a>
          <button
            onClick={themeHandler}
            name="theme changer"
            className="ml-3 flex items-center justify-center rounded-full p-1 "
          >
            <DarkModeSwitch
              checked={isDark ? isDark : false}
              onChange={themeHandler}
            />
          </button>
        </nav>
      </section>
      {open && (
        <motion.section
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw]   flex flex-col justify-between items-center fixed  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-12"
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink href="/" title="Home" className="" setOpen={setOpen}/>
            <CustomMobileLink href="/about" title="About" className="" setOpen={setOpen}/>
            <CustomMobileLink href="/projects" title="Projects" className="" setOpen={setOpen}/>
            <CustomMobileLink
              href="/contact"
              title="Contact"
              className=""
              setOpen={setOpen}
            />
          </nav>
          <nav className="flex items-center justify-center flex-wrap my-2">
            <motion.a
              whileTap={{ scale: 0.9 }}
              whileHover={{ y: -3 }}
              href="https://github.com/Munazar-99"
              target={"_blank"}
              className="w-[1.85rem] mx-4 h-[1.85rem] bg-light rounded-full dark:bg-dark sm:mr-1"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              whileTap={{ scale: 0.9 }}
              whileHover={{ y: -3 }}
              href="https://www.linkedin.com/in/munazar-abdulle-9140b9259/"
              target={"_blank"}
              className="w-[1.85rem] mx-4 h-[1.85rem] sm:mr-1"
            >
              <LinkedInIcon />
            </motion.a>
            <button
              onClick={themeHandler}
              name="theme changer"
              className="ml-3 flex items-center justify-center rounded-full p-1"
            >
              <DarkModeSwitch checked={!isDark} onChange={themeHandler} />
            </button>
          </nav>
        </motion.section>
      )}

      <div className="absolute left-[50%] top-2 translate-x-[-50%] ">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
