import React from "react";
import Layout from "./Layout";
import Link from "next/link";
const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark
    font-medium text-lg sm:text-base
    dark:border-light dark:text-light
    "
    >
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center lg:py-2">
          Build with <span className="text-primary text-2xl px-1 dark:text-primaryDark ">&#9825;</span>
          <Link
            href="https://www.linkedin.com/in/bakshish-singh-99586b253/"
            className="underline
          underline-offset-2
          "
            target={"_blank"}
          >
            Bakshish
          </Link>
        </div>
        <Link
          href="https://www.linkedin.com/in/bakshish-singh-99586b253/"
          className="underline
          underline-offset-2
          "
          target={"_blank"}
        >
          Contact Me
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
