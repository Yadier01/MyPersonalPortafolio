import React from "react";
import { forwardRef } from "react";

export const About = React.forwardRef<HTMLDivElement, { text: string }>(
  ({ text }, ref) => (
    <div className="h-screen  bg-zinc-500 text-white py-20" ref={ref}>
      <h2>{text}</h2>
      <p>This is the About component.</p>
    </div>
  )
);
