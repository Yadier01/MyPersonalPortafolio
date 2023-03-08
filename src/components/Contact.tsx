import React from "react";

export const Contact = React.forwardRef<HTMLDivElement, { text: string }>(
  ({ text }, ref) => (
    <div className="h-screen  bg-zinc-900 text-white py-20" ref={ref}>
      <h2>{text}</h2>
      <p>This is the Contact component.</p>
    </div>
  )
);
