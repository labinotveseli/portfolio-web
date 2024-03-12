import { useState, useEffect } from "react";
import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import proj1 from "../../public/images/projects/garage.png";
import proj2 from "../../public/images/projects/starlabs.jpg";
import proj3 from "../../public/images/projects/multipurpose.png";
import proj4 from "../../public/images/projects/portfolio.png";
import proj5 from "../../public/images/projects/coming-soon.jpg";
import TransitionEffect from "@/components/TransitionEffect";
import SkeletonProjects from "../components/Skeletons/skeletonProjects";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {

  const [imageLoaded, setImageLoaded] = useState(false);
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);


  return (
    <article
      className="relative flex w-full items-center  justify-between rounded-3xl rounded-br-2xl border
border-solid border-dark bg-light p-12 shadow-2xl  dark:border-light dark:bg-dark  lg:flex-col 
lg:p-8 xs:rounded-2xl  xs:rounded-br-3xl xs:p-4 
    "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark
         dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%]
        xs:rounded-[1.5rem] "
      />

      <Link
        href={link}
        target={"_blank"}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
         {loading ? <SkeletonProjects /> :
          <FramerImage
            src={img}
            className="h-auto w-full"
            alt={title}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            priority
            />
          }
      </Link>
      <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target={"_blank"}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">
            {title}
          </h2>
        </Link>
        <p className=" my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link
            href={github}
            target={"_blank"}
            className="w-10"
            aria-label="garage github link"
          >
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target={"_blank"}
            className="ml-4 rounded-lg
             bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark 
             sm:px-4 sm:text-base hover:bg-opacity-70 hover:shadow-md hover:transition-all hover:duration-300
            "
            aria-label="garage"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github, summary }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <article
      className="relative flex w-full h-full flex-col items-center justify-center rounded-2xl  rounded-br-2xl 
      border  border-solid  border-dark bg-light p-6  shadow-2xl dark:border-light dark:bg-dark 
      xs:p-4
      "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark
         dark:bg-light  md:-right-2 md:w-[101%] xs:h-[102%]
        xs:rounded-[1.5rem]  "
      />

      <Link
        href={link}
        target={"_blank"}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        {loading ? <SkeletonProjects /> :
          <FramerImage
            src={img}
            alt={title}
            className="h-auto w-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            }
      </Link>
      <div className="mt-4 flex w-full flex-col items-start justify-between">
        <span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>

        <Link
          href={link}
          target={"_blank"}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
            {title}
          </h2>
        </Link>
        <p className=" my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="flex w-full items-center justify-between mt-auto">
          <Link
            href={link}
            target="_blank"
            className="rounded-lg bg-dark p-1 px-2 text-lg font-semibold text-light dark:bg-light dark:text-dark sm:px-4 sm:text-base hover:bg-opacity-70 hover:shadow-md hover:transition-all hover:duration-300"
            aria-label={title}
          >
            Visit Project
          </Link>

          <Link
            href={github}
            target="_blank"
            className="w-8 md:w-6"
            aria-label={title}
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects Page | Labinot Veseli Portfolio | </title>
        <meta name="description" content="" />
      </Head>

      <TransitionEffect />
      <main
        className={`mb-16  flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Surpasses Knowledge"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project"
                title="Portfolio Website"
                summary="My Next.js portfolio web app is a dynamic showcase of my professional journey, skillset, and projects. Built primarily with Next.js, it incorporates engaging elements such as react-fast-marquee, animations, and responsive design practices. This mobile-friendly platform offers a glimpse into my bio, work experience, various projects, and a convenient contact section. It serves as a comprehensive and visually appealing representation of my skills and accomplishments."
                img={proj4}
                link="https://www.labinotveseli.com"
                github="https://github.com/labinotveseli/portfolio-web"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Project Management System"
                title="StarLabs PMS"
                summary="Developed within the collaborative environment of StarLabs, this Project Management System is a dynamic tool crafted under the guidance of a Senior Team Lead. Utilizing the MERN Stack, the app incorporates additional technologies such as Redux, Firebase, Socket.io, and more. Tailored for effective project planning and execution, it offers an intuitive interface to streamline workflows, ensuring seamless project monitoring across all scales."
                img={proj2}
                link="https://github.com/labinotveseli/starlabs-pms"
                github="https://github.com/labinotveseli/starlabs-pms"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Multipurpose Website"
                title="Multipurpose Landing site"
                summary="This versatile multipurpose website app is meticulously crafted using HTML, CSS, JavaScript, and Bootstrap, creating an engaging landing page. Designed with flexibility in mind, it serves a multitude of purposes, providing a user-friendly interface for diverse applications. The utilization of essential web technologies ensures a seamless and visually appealing experience for visitors. Whether showcasing a product, service, or personal portfolio, this website app offers a dynamic and responsive platform for effective communication and engagement."
                img={proj3}
                link="https://multipurpose-site.netlify.app/"
                github="https://github.com/labinotveseli/multipurposepage"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="SaaS App"
                title="Garage Management System"
                summary="The Garage Management System, developed collaboratively with a team at Benkco under the guidance of a Senior Team Leader, is a comprehensive application designed for efficient garage management. This NextJS-based app encompasses features for handling customers, vehicles, payments, users, and more. The technology stack includes MongoDB, Firebase, Zustand, and other cutting-edge tools. Although the app is currently not connected to a specific database, it serves as a robust foundation for streamlined garage operations."
                img={proj1}
                link="https://garage-management-system.netlify.com"
                github="https://github.com/labinotveseli"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Web App"
                img={proj5}
                title="E-Commerce NextJS App"
                link="https://www.labinotveseli.com"
                github="https://github.com/labinotveseli"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="SaaS App"
                img={proj5}
                title="Form Builder Full-Stack"
                link="https://www.labinotveseli.com"
                github="https://github.com/labinotveseli"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
