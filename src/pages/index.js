import { useState, useEffect } from "react";
import AnimatedText from "@/components/AnimatedText";
import { HireMe } from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import webIcon from "../../public/images/svgs/web-icon.png";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import TransitionEffect from "@/components/TransitionEffect";
import SkeletonHome from "../components/Skeletons/skeletonHome";

export default function Home() {
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
    <>
      <Head>
        <title>Portfolio | Labinot Veseli</title>
        <meta
          name="description"
          content="Explore Labinot's portfolio and 
        discover the latest web app projects and software engineering articles. 
        Showcase your skills as a full-stack developer and software engineer."
        />
      </Head>

      <TransitionEffect />
      <article
        className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}
      >
        <Layout className="!pt-0 md:!pt-16 sm:!pt-16">
          <div className="flex w-full items-start justify-between md:flex-col">
            <div className="w-1/2 lg:hidden md:inline-block md:w-full">
            {loading ? <SkeletonHome /> :
            <Image
                src={profilePic}
                alt="LabinotVeseli"
                className={`h-auto w-85 sm:w-full sm:pb-5 drop-shadow-[0_5px_5px_rgba(1,1,0.7,0.7)] ${imageLoaded ? "" : "hidden"}`}
                sizes="100vw"
                priority
                onLoad={handleImageLoad}
              />
            }
            </div>
            <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Merging creativity and code into digital artistry, line by line."
                className="!text-left !text-5xl xl:!text-4xl lg:!text-center lg:!text-5xl md:!text-4xl sm:!text-2xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:!text-xs">
                With an expertise in Software Development, I&apos;m dedicated to
                transforming ideas into cutting-edge applications. Discover my
                latest projects showcasing the art of full-stack development.
              </p>
              <div className="mt-2 flex items-center self-start lg:self-center">
                <Link
                  // whileHover={{
                  //   cursor: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='font-size:24px;'><text y='50%'>👆</text></svg>"), auto`,
                  // }}
                  href="/Labinot_Veseli_CV.pdf"
                  target={"_blank"}
                  className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base`}
                  download
                >
                  Resume <LinkArrow className="ml-1 !w-6 md:!w-4" />
                </Link>

                <Link
                  href="mailto:labinotveseli1@gmail.com"
                  className="ml-4 text-lg font-medium capitalize text-dark underline 
                  dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        {/* <HireMe /> */}
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image
            className="relative h-auto w-full"
            src={webIcon}
            alt="LabinotVeseli"
          />
        </div>
      </article>
    </>
  );
}
