import React from "react";
import { motion } from "framer-motion";

import {
  ReactIcon,
  NextjsIcon,
  NodejsIcon,
  TailwindIcon,
  FigmaIcon,
  TypescriptIcon,
  JavascriptIcon,
  PythonIcon,
  FlaskIcon,
  ExpressJsIcon,
  MySqlIcon,
  MongoDbIcon,
} from "./techIcons";

const skills = [
  { name: "React", IconComponent: ReactIcon, color: "hover:text-cyan-400" },
  {
    name: "Next.js",
    IconComponent: NextjsIcon,
    color: "hover:text-black dark:hover:text-white",
  },
  { name: "Node.js", IconComponent: NodejsIcon, color: "hover:text-green-400" },
  {
    name: "Tailwind CSS",
    IconComponent: TailwindIcon,
    color: "hover:text-sky-400",
  },
  { name: "Figma", IconComponent: FigmaIcon, color: "hover:text-pink-400" },
  {
    name: "TypeScript",
    IconComponent: TypescriptIcon,
    color: "hover:text-blue-500",
  },
  {
    name: "JavaScript",
    IconComponent: JavascriptIcon,
    color: "hover:text-yellow-400",
  },
  { name: "Python", IconComponent: PythonIcon },
  {
    name: "Flask",
    IconComponent: FlaskIcon,
    color: "hover:text-black dark:hover:text-white",
  },
  {
    name: "Express.js",
    IconComponent: ExpressJsIcon,
    color: "hover:text-black dark:hover:text-white",
  },
  { name: "MySQL", IconComponent: MySqlIcon, color: "hover:text-blue-500" },
  {
    name: "MongoDB",
    IconComponent: MongoDbIcon,
    color: "hover:text-green-500",
  },
];
const SkillsSlide = () => (
  <div className="flex shrink-0 animate-slide items-center">
    {skills.map((skill, index) => {
      const Icon = skill.IconComponent;

      return (
        <div
          key={`${skill.name}-${index}`}
          className="group mx-12 flex flex-col items-center gap-2"
        >
          <div
            className={`text-gray-400 transition-colors duration-300 ${skill.color || ""}`}
          >
            <Icon size={80} />
          </div>
          <span className="text-sm dark:text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {skill.name}
          </span>
        </div>
      );
    })}
  </div>
);

export const TechCarousel = () => {
  return (
    <div
      className="w-full overflow-hidden py-12"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0, black 128px, black calc(100% - 128px), transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0, black 128px, black calc(100% - 128px), transparent 100%)",
      }}
    >
      <motion.div
        animate={{
          x: ["0%", "-200%"],
        }}
        className="flex"
        transition={{
          ease: "linear",
          duration: 35,
          repeat: Infinity,
        }}
      >
        <div className="flex shrink-0 items-center">
          <SkillsSlide />
        </div>
        <div className="flex shrink-0 items-center">
          <SkillsSlide />
        </div>
      </motion.div>
    </div>
  );
};
