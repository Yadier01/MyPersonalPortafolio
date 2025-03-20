import React from "react";
import { TbBrandNextjs } from "react-icons/tb";
import { ProjectImg } from "./ProjectImg";
import { FaCss3 } from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
export const About = React.forwardRef<HTMLDivElement, { text: string }>(
  ({ text }, ref) => (
    <div
      className="h-screen flex flex-col items-center justify-center  bg-slate-900  text-white py-20"
      ref={ref}
    >
      <span className="flex    flex-col md:flex-row justify-around w-full ">
        <span className="">
          <p className="max-w-3xl text-xl text-gray-300  leading-relaxed hyphens-auto break-words ">
            Hey there! I'm a
            <span className="text-white pl-2">Puerto Rico-based </span>🇵🇷
            individual with a genuine love for coding 👨‍💻 and a soft spot for our
            furry friends – both dogs and cats. Beyond the screen, you'll catch
            me hitting the
            <span className="text-red-300 pl-2">gym</span>, staying active and
            embracing a healthy lifestyle.
          </p>
          <p className="max-w-3xl text-xl my-4 text-gray-300 leading-relaxed hyphens-auto break-words ">
            With over
            <span className="text-yellow-300 px-2">
              2 year of hands-on experience
            </span>
            in coding projects, I'm now on the lookout for a job to further
            enrich my skills. Let's chat and explore how my passion and
            experience can
            <span className="text-white pl-2 ">contribute to your team!</span>
          </p>
        </span>
        <div className="grid grid-cols-3  gap-6 ">
          <FaHtml5 size={60} />
          <FaCss3 size={60} />
          <SiTailwindcss size={60} />
          <IoLogoJavascript size={60} />
          <SiTypescript size={60} />
          <FaReact size={60} />
          <TbBrandNextjs size={60} />
        </div>
      </span>
    </div>
  )
);
