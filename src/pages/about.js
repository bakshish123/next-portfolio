import AnimatedText from "@/components/AnimatedText";
import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import { useRef, useEffect } from "react";
import { useMotionValue, useInView, useSpring } from "framer-motion";
import profilePic from "../../public/images/profile/developer-pic-1.jpg";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";
const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: 3000,
  });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>
          Dhanraj | About Page
          <meta name="description" content="About page of Dhanraj" />
        </title>
      </Head>
      <TransitionEffect/>
      <main
        className="flex w-full flex-col items-center justify-center
      dark:bg-dark dark:text-light/50
      "
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 text-xl font-semibold gap-16 sm:gap-8">
            <div
              className="col-span-3 flex flex-col items-start
            justify-start xl:col-span-4 md:order-2 md:col-span-8
            "
            >
              <h2
                className="mb-4 text-3xl font-bold 
                text-dark/75 uppercase 
                
                dark:text-light/75"
              >
                Biography
              </h2>
              <p className="font-medium ">
                Hi, I&apos;m Bakshish, an aspiring web developer
                with a passion for creating beautiful, functional, and
                user-centered digital experiences. I am always looking for new
                and innovative ways to bring my visions to life.
              </p>
              <p className="my-4 font-medium ">
                I am a full-stack developer with NextJS as my preferred stack.
              </p>
            </div>
            <div
              className="col-span-3 relative h-max rounded-2xl
          border-2 border-solid border-dark
          bg-light p-8 md:order-1 md:col-span-8
          dark:bg-dark dark:border-light dark:text-light/75
          "
            >
              <div
                className="absolute top-0 -right-3 -z-10
                w-[102%] h-[103%] rounded-[2rem] bg-dark
                dark:bg-light 
                "
              />
              <Image
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw,33vw"
                src={profilePic}
                alt={"Dhanraj"}
                className="w-full
            h-auto rounded-2xl 
            "
              />
            </div>
            <div
              className="col-span-2  flex flex-col items-end justify-between
              xl:col-span-8 xl:flex-row xl:items-center md:order-3
            "
            >
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-6xl xs:text-4xl">
                  <AnimatedNumber value={20} /> +
                </span>
                <h2 className="text-xl xs:text-sm font-medium capitalize text-dark/75 dark:text-light/75">
                  Projects
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-6xl xs:text-4xl">
                  <AnimatedNumber value={15} /> +
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
                xs:text-sm 
                "
                >
                  Projects Completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-6xl xs:text-4xl">
                  <AnimatedNumber value={2} /> +
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75
                xl:text-center md:text-lg sm:text-base xs:text-sm
                "
                >
                  Years Experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          {/* <Experience /> */}
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
