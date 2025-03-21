import React, { forwardRef } from "react";
import { ProjectImg } from "./ProjectImg";
import { TbBrandNextjs, TbBrandReact } from "react-icons/tb";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoVue } from "react-icons/io5";
type ProjectProps = {
  text: string;
};
const img = [
  {
    src: "./productFeedback.png",
    href: "https://product-feedback-lovat.vercel.app/",
    codeHref: "https://github.com/Yadier01/product-feedback",
    name: "Product Feedback",
    description: "A feedback app for product",
    icons: [
      <TbBrandNextjs size={25} />,
      <SiTailwindcss size={25} />,
      <FaReact size={25} />,
      <SiTypescript size={25} />,
    ],
  },

  {
    src: "./trello.png",
    href: "https://trello-rsbuild-tanstack.netlify.app/",
    codeHref: "https://github.com/Yadier01/trello",
    name: "Trello Clone",
    description: "Trello clone created with tanstack and rsbuild",
    icons: [
      <SiTailwindcss size={25} />,
      <FaReact size={25} />,
      <SiTypescript size={25} />,
    ],
  },
  {
    src: "./github.png",
    codeHref: "https://github.com/Yadier01/github-devChallenges",
    href: "https://github-dev-challenges.vercel.app/",
    name: "Github Profile Search",
    description: "Search for github profiles",
    icons: [
      <TbBrandNextjs size={25} />,
      <SiTailwindcss size={25} />,
      <FaReact size={25} />,
      <SiTypescript size={25} />,
    ],
  },
  {
    src: "./countryQuiz.png",
    href: "https://friendly-douhua-b2f490.netlify.app/",
    codeHref: "https://github.com/Yadier01/countryQuiz",
    name: "Country Quizes",
    description: "Solve quizes about countries",
    icons: [
      <IoLogoVue size={25} />,
      <SiTailwindcss size={25} />,
      <SiTypescript size={25} />,
    ],
  },
  {
    src: "./InteractiveText.png",
    href: "https://interactive-comments-murex.vercel.app/",
    codeHref: "https://github.com/Yadier01/interactive-comments",
    name: "Interactive Texts",
    description: "Interactive texts CRUD",
    icons: [
      <SiTailwindcss size={25} />,
      <FaReact size={25} />,
      <SiTypescript size={25} />,
    ],
  },
];
// eslint-disable-next-line react/display-name
export const Project = forwardRef<HTMLDivElement, ProjectProps>(
  ({ text }, ref) => (
    <section className="h-full  bg-slate-900 text-white py-20" ref={ref}>
      <div className="grid place-content-center my-4">
        <h2 className="text-3xl">{text}</h2>
      </div>
      <div
        className="grid  w-full place-items-center
        gap-14 grid-cols-1 md:grid-cols-2 "
      >
        {img.map((item) => (
          <ProjectImg
            key={item.name}
            src={item.src}
            codeHref={item.codeHref}
            href={item.href}
            name={item.name}
            description={item.description}
            icons={item.icons}
          />
        ))}
      </div>
    </section>
  ),
);
