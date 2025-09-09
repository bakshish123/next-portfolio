import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  PinterestIcon,
  SunIcon,
  TwitterIcon,
} from "./Icons";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const [mode, setMode] = useThemeSwitcher();
  const router = useRouter();
  const CustomLink = ({ href, title, className = "" }) => {
    return (
      <Link className={`${className} relative group`} href={href}>
        {title}

        <span
          className={`h-[1px] inline-block bg-dark 
          absolute left-0 -bottom-0.5 
          group-hover:w-full 
          transition-[width] ease duration-300 
          dark:bg-light
          ${router.asPath === href ? "w-full" : "w-0"}`}
        >
          &nbsp;
        </span>
      </Link>
    );
  };
  const CustomMobileLink = ({ href, title, className = "", toggle }) => {
    const handleClick = () => {
      toggle();
      router.push(href);
    };
    return (
      <button
        className={`${className} my-2 relative group text-light dark:text-dark `}
        onClick={handleClick}
      >
        {title}

        <span
          className={`h-[1px] inline-block light:bg-light 
          absolute left-0 -bottom-0.5 

          group-hover:w-full 
          transition-[width] ease duration-300 
          dark:bg-dark
          ${router.asPath === href ? "w-full" : "w-0"}`}
        >
          &nbsp;
        </span>
      </button>
    );
  };

  return (
    <header className="relative z-10 lg:px-16 md:px-12 sm:px-8 dark:text-light w-full px-32 py-8 font-medium flex items-center justify-between">
      <button
        onClick={handleClick}
        className="lg:flex hidden flex-col items-center justify-center"
      >
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full  flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          <CustomLink href="/articles" title="Articles" className="ml-4" />
        </nav>
        <nav className="flex items-center justify-center flex-wrap">
          {/* <motion.a
            href="https://twitter.com/"
            target="_blank"
            className="w-6 mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <TwitterIcon />
          </motion.a> */}
          <motion.a
            href="https://github.com/bakshish123"
            target="_blank"
            className="w-6 mx-3 "
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/bakshish-singh-99586b253/"
            target="_blank"
            className="w-6 mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <LinkedInIcon />
          </motion.a>
          {/* <motion.a
            href="https://www.pinterest.com/"
            target="_blank"
            className="w-6 mx-3 bg-light rounded-full "
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <PinterestIcon />
          </motion.a>
          <motion.a
            href="https://dribbble.com/"
            target="_blank"
            className="w-6 ml-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <DribbbleIcon />
          </motion.a> */}
          <button
            onClick={() => setMode(mode === "dark" ? "light" : "dark")}
            className={`dark: w-8 h-8 flex items-center justify-center rounded-full bg-dark text-white ml-3 p-1
          ${mode === "light" ? "bg-dark text-dark" : "bg-dark text-light"}
          `}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <nav className="mt-2 flex flex-col items-center justify-center">
            <CustomMobileLink
              toggle={handleClick}
              href="/"
              title="Home"
              className=""
            />
            <CustomMobileLink
              toggle={handleClick}
              href="/about"
              title="About"
              className=""
            />
            <CustomMobileLink
              toggle={handleClick}
              href="/projects"
              title="Projects"
              className=""
            />
            <CustomMobileLink
              toggle={handleClick}
              href="/articles"
              title="Articles"
              className=""
            />
          </nav>
          <nav className="flex items-center justify-center flex-wrap">
            <motion.a
              href="https://twitter.com/"
              target="_blank"
              className="w-6 mx-3 sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              href="https://github.com"
              target="_blank"
              className="w-6 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/"
              target="_blank"
              className="w-6 mx-3 sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://www.pinterest.com/"
              target="_blank"
              className="w-6 mx-3 bg-light rounded-full "
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <PinterestIcon />
            </motion.a>
            <motion.a
              href="https://dribbble.com/"
              target="_blank"
              className="w-6 ml-3 sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <DribbbleIcon />
            </motion.a>
            <button
              onClick={() => setMode(mode === "dark" ? "light" : "dark")}
              className={`dark: w-8 h-8 flex items-center justify-center rounded-full bg-dark text-white ml-3 p-1
          ${mode === "light" ? "bg-dark text-dark" : "bg-dark text-light"}
          `}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
