import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import { Head } from "next/document";
import profilePic from "../../public/images/profile/developer-pic-1.jpg";
import AnimatedText from "@/components/AnimatedText";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from "@/components/TransitionEffect";
export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio Of Bakshish Singh</title>
        <meta
          name="description"
          content="Portfolio of an aspiring web developer"
        />
      </Head>
      <TransitionEffect />
      <main
        className="flex items-center
        text-dark w-full min-h-screen
        dark:text-light
        "
      >
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="bakshish"
                className="w-[75%] rounded-full h-auto lg:hidden md:inline-block md:w-full"
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw,33vw"
              />
            </div>
            <div
              className="w-1/2 flex flex-col items-center self-center
              lg:w-full lg:text-center
            "
            >
              <AnimatedText
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
                text="Turning Vision Into Reality With Code And Design."
              />

              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
               As a backend developer, I am passionate about building robust and scalable server-side solutions. Explore my latest projects to see my expertise in Spring Boot, Node.js, and modern backend development in action.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/BakshishResume.pdf"
                  target={"_blank"}
                  className="bg-dark flex items-center text-light p-2.5 px-6
                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border-2 border-solid border-transparent transition duration-300 ease-in-out
                hover:border-dark hover:shadow-lg md:p-2 md:px-4 md:text-base
                dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light
                hover:dark:border-light dark:hover:border-dark
                "
                  download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  className="ml-4 text-lg font-medium capitalize text-dark transition duration-300 ease-in-out
                  underline dark:text-light hover:text-dark hover:underline md:text-base
                  "
                  href="https://www.linkedin.com/in/bakshish-singh-99586b253/"
                  target={"_blank"}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image src={lightBulb} alt={"Bakshish"} className="w-full h-auto" />
        </div>
      </main>
    </>
  );
}
