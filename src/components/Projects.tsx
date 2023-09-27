import React, { forwardRef } from "react";

type ProjectProps = {
  text: string;
};

export const Project = forwardRef<HTMLDivElement, ProjectProps>(
  ({ text }, ref) => (
    <section className="h-screen   bg-zinc-300 text-black py-20" ref={ref}>
      <div className="grid place-content-center my-4">
        <h2>{text}</h2>
        <div>
          <p>VideoWithAllProjects.</p>
        </div>
      </div>
      <div className="grid place-items-center  grid-cols-2 ">
        <span>
          <img
            src="./interactiveTextss.png"
            alt=""
            className="w-96 rounded-lg"
          />
          <div className="flex justify-between mt-4">
            <a
              href="https://github.com/Yadier01/interactive-comments"
              className="bg-[#0f172a] text-white hover:opacity-80 active:translate-y-1  transition-all  py-2 px-8 rounded-lg"
              target="_blank"
            >
              Code
            </a>
            <a
              href="https://interactive-comments-murex.vercel.app/"
              className="bg-[#0f172a] hover:opacity-80 transition-all active:translate-y-1 text-white py-2 px-4 rounded-lg"
              target="_blank"
            >
              Live site
            </a>
          </div>
        </span>
        <p>img </p>
        <p>img </p>
        <p>img </p>
      </div>
    </section>
  )
);
