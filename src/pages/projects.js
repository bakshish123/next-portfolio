import AnimatedText from "@/components/AnimatedText";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import project1 from "../../public/images/projects/image1.png";
import project2 from "../../public/images/projects/image2.jpg";
import project3 from "../../public/images/projects/image3.png";
import project4 from "../../public/images/projects/image4.png";
import Layout from "@/components/Layout";
import { GithubIcon } from "@/components/Icons";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
const projects = () => {
  const FramerImage = motion(Image);
  const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
      <article
        className="relative p-12 w-full flex items-center justify-between 
      rounded-3xl border border-solid border-dark bg-light shadow-2xl
      rounded-br-2xl dark:bg-dark dark:border-light dark:shadow-light
      lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
      "
      >
        <div
          className="absolute top-0 -right-3 -z-10
          w-[98%] h-[104%] rounded-[2.5rem] bg-dark
          rounded-br-3xl dark:bg-light dark:border-dark dark:shadow-dark
          "
        />
        <Link
          href={link}
          target={"_blank"}
          className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full "
        >
          <FramerImage
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw,33vw"
            src={img}
            alt={title}
            className="w-full h-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
        </Link>
        <div className="w-1/2 flex items-start flex-col pl-6 justify-between lg:w-full lg:pl-0 lg:pt-6">
          <span className="text-primary font-medium text-xl dark:-primaryDark xs:text-base">
            {type}
          </span>
          <Link
            href={link}
            target={"_blank"}
            className="hover:underline underline-offset-2"
          >
            <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
              {title}
            </h2>
          </Link>
          <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
            {summary}
          </p>
          <div className="mt-2 flex items-center">
            <Link href={github} target={"_blank"} className="w-10">
              <GithubIcon />
            </Link>
            <Link
              href={link}
              target={"_blank"}
              className="ml-4 rounded-lg
              bg-dark text-light p-2 px-6 text-lg font-semibold 
              dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light
              sm:px-4 sm:text-base 
            "
            >
              Visit The Project!
            </Link>
          </div>
        </div>
      </article>
    );
  };
  const Project = ({ title, type, img, link, github }) => {
    return (
      <article
        className="w-full flex-col flex items-center justify-center rounded-2xl border border-solid border-dark
      bg-light shadow-2xl p-6 relative dark:bg-dark rounded-br-2xl
      dark:border-light dark:shadow-light xs:p-4
      "
      >
        <div
          className="absolute top-0 -right-3 -z-10
          w-[98%] h-[104%] rounded-[2rem] bg-dark
          rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]
          dark:bg-light dark:border-dark dark:shadow-dark md:-right-2 md:w-[101%] xs:h-[102%]
          "
        />
        <Link
          href={link}
          target={"_blank"}
          className="w-full cursor-pointer overflow-hidden rounded-lg"
        >
          <FramerImage
            src={img}
            alt={title}
            className="w-full h-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
        </Link>
        <div className="w-full flex items-start flex-col mt-4 justify-between">
          <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
            {type}
          </span>
          <Link
            href={link}
            target={"_blank"}
            className="hover:underline underline-offset-2"
          >
            <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
              {title}
            </h2>
          </Link>
          <div className="w-full mt-2 flex items-center justify-between">
            <Link
              href={link}
              target={"_blank"}
              className="text-lg font-semibold underline md:text-base
            "
            >
              Visit
            </Link>
            <Link href={github} target={"_blank"} className="w-8 md:w-6">
              <GithubIcon />
            </Link>
          </div>
        </div>
      </article>
    );
  };
  return (
    <>
      <Head>
        <title>
          Bakshish | Projects Page
          <meta name="description" content="Projects page of Dhanraj" />
        </title>
      </Head>
      <TransitionEffect />
      <main className="w-full flex items-center justify-center flex-col mb-16 dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
              title={"Alumni Portal"}
              summary={
                "A metaverse website that allows users to explore the metaverse. It uses a combination of React, Tailwind CSS, and Framer Motion to provide a seamless experience to the user."
              }
              img={project3}
              link={"https://alumni-portal-bakki-oxlevsq9b-bakshishs-projects.vercel.app/"}
              github={"https://github.com/bakshish123/alumni-portal.git"}
              type={"NextJs, Typescript, Next-Auth, Tailwind CSS,"}
                />
                </div>
                <div className="col-span-12 sm:col-span-12">
              
                <FeaturedProject
                title={"CaseCobra - A customized phone case e-commerce website"}
                summary={
                  "A customized phone case e-commerce website that allows users to customize their phone cases. It uses a combination of NextJS, Postgres, and NeonDB to provide a seamless experience to the user."
                }
                img={project2}
                link={"https://casecobra2-tau.vercel.app/"}
                github={"https://github.com/bakshish123/caseCobra.git"}
                type={"NextJS, Postgres, NeonDB, Tailwind CSS"}
              />
              </div>
            
            <div className="col-span-6 sm:col-span-12">
              <Project
                title={"MindfulAI - A Mental Health App"}
                summary={
                  "A mental health app that uses AI to provide personalized therapy sessions. It uses a combination of AI and ML to provide a personalized experience to the user."
                }
                img={project1}
                link={"https://github.com/bakshish123/gen-Ai.git"}
                github={"https://github.com/bakshish123/gen-Ai.git"}
                type={"React, MongoDB, GenAI, Tailwind CSS"}
              
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title={"A frontend for the shoe website"}
                summary={
                  "A frontend for the shoes e-commerce website that allows users to buy shoes. It uses a combination of NextJS, Tailwind CSS, and Framer Motion to provide a seamless experience to the user."
                }
                img={project4}
                link={"https://github.com/bakshish123/nike-redux.git"}
                github={"https://github.com/bakshish123/nike-redux.git"}
                type={"NextJs, Tailwind CSS, Framer Motion,Redux"}
              />
            </div>
            
            
            {/* <div className="col-span-6 sm:col-span-12">
              <Project
                title={"Crypto Screener Application"}
                summary={
                  "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                }
                img={project1}
                link={"https://crypto-screener.netlify.app/"}
                github={"/"}
                type={"React"}
              />
            </div> */}
            {/* <div className="col-span-6 sm:col-span-12">
              <Project
                title={"Crypto Screener Application"}
                summary={
                  "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                }
                img={project1}
                link={"https://crypto-screener.netlify.app/"}
                github={"/"}
                type={"React"}
              />
            </div> */}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
