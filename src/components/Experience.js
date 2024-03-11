import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Software Developer"
            company="Bencko"
            companyLink="https://benkco.com/"
            time="2023, Oct - Feb, 2024"
            address="Remote"
            work="As a software developer at Benkco, I worked in a collaborative team environment, working closely with a Senior Team Lead and following agile methodologies. Together, we primarily focused on developing SaaS applications. My responsibilities spanned both front-end and back-end development, involving the design of user interfaces and implementation of features. I applied clean code principles, practiced testing methodologies, and worked extensively with the MERN stack, Next.js, and various tools and technologies for comprehensive full-stack development. This hands-on experience allowed me to contribute effectively across different stages of the software development process, showcasing adaptability and proficiency in addressing diverse challenges."
          />
          <Details
            position="Web Developer Intern"
            company="StarLabs"
            companyLink="https://starlabs.dev"
            time="2023, June - August"
            address="Prishtina, Kosovo"
            work="I completed a 3-month internship with a fantastic team and a dedicated Senior Team lead, collaborating to develop a project for StarLabs. This project, known as Project Management System for StarLabs, focused on internal company project management. Through this experience, I not only gained hands-on knowledge of full-stack technologies but also honed my skills in maintaining clean code practices and applying Agile methodologies. I became adept at using tools like Jira for effective project management."
          />
          <Details
            position="Web Developer"
            company="Freelance"
            companyLink=""
            time="2022 - Present"
            address="Kosovo / Remote"
            work="Since 2022, I've been immersed in web development, initially specializing in WordPress and later expanding my expertise to encompass frontend and full-stack development. Primarily operating as a remote freelancer, I've honed my skills and navigated diverse projects, gaining valuable experience in crafting dynamic and responsive web solutions."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
