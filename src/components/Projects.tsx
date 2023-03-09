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
      <div className="grid place-content-center grid-cols-2">
        <p>img </p>
        <p>img </p>
        <p>img </p>
        <p>img </p>
      </div>
    </section>
  )
);
