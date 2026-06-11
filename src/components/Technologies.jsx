import React from "react";
import { SiPython } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { SiLinux } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiDocker } from "react-icons/si";
import { SiRedis } from "react-icons/si";
import { SiOpenai } from "react-icons/si";
import { SiAmazon } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";
import { SKILLS } from "../constants";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <>
      <div className="border-b border-e-neutral-800 pb-24">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 1, y: -100 }}
          transition={{ duration: 1.5 }}
          className="my-20 text-4xl text-center"
        >
          Technologies
        </motion.h1>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.div
            variants={iconVariants(2.5)}
            initial="intial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiPython className="text-7xl text-blue-700" />
          </motion.div>
          <motion.div
            variants={iconVariants(2.5)}
            initial="intial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiDjango className="text-7xl text-emerald-800" />
          </motion.div>
          <motion.div
            variants={iconVariants(2.8)}
            initial="intial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiOpenai className="text-7xl text-neutral-100" />
          </motion.div>
          <motion.div
            variants={iconVariants(3.1)}
            initial="intial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiDocker className="text-7xl text-blue-500" />
          </motion.div>
          <motion.div
            variants={iconVariants(3)}
            initial="intial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiRedis className="text-7xl text-red-600" />
          </motion.div>
          <motion.div
            variants={iconVariants(4)}
            initial="intial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <BiLogoPostgresql className="text-7xl text-sky-700" />
          </motion.div>
          <motion.div
            variants={iconVariants(4)}
            initial="intial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiMysql className="text-7xl text-sky-700" />
          </motion.div>
          <motion.div
            variants={iconVariants(3.1)}
            initial="intial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiAmazon className="text-7xl text-orange-400" />
          </motion.div>
          <motion.div
            variants={iconVariants(3.1)}
            initial="intial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiLinux className="text-7xl " />
          </motion.div>
          <motion.div
            variants={iconVariants(3.8)}
            initial="intial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiJavascript className="text-7xl text-yellow-400" />
          </motion.div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 1 }}
          className="mt-16 flex flex-wrap justify-center gap-3 px-4"
        >
          {SKILLS.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-neutral-800 bg-neutral-900 px-4 py-2 text-sm text-neutral-300"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Technologies;
