import React, { forwardRef } from "react";

type ProjectProps = {
  text: string;
};

export const Project = forwardRef<HTMLDivElement, ProjectProps>(
  ({ text }, ref) => (
    <div className="h-screen   bg-zinc-300 text-white py-20" ref={ref}>
      <h2>{text}</h2>
      <p>This is the Project component.</p>
    </div>
  )
);
