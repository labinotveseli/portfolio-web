import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

let MotionLink = motion(Link);

const Logo = () => {
  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.9,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="flex items-center justify-center rounded-sm w-11 h-11  dark:border-2 dark:border-solid dark:border-light
    text-2xl font-bold"
      >
        <motion.div variants={imageVariants} whileHover="hover" whileTap="tap">
          <Image
            src="/images/svgs/logo.svg"
            alt="Logo"
            width={42}
            height={42}
            className="rounded-sm"
          />
        </motion.div>
      </MotionLink>
    </div>
  );
};

export default Logo;
