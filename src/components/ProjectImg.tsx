import { useState } from "react";
import { HoverImg } from "./HoverImg";

export const ProjectImg = ({
  src,
  href,
  codeHref,
  name,
  description,
  icons,
}: any) => {
  const [hover, setHover] = useState(false);

  return (
    <span className="h-full flex flex-col   justify-between">
      <div
        className="relative w-full h-full"
        onMouseEnter={() => setHover((prev) => !prev)}
        onMouseLeave={() => setHover((prev) => !prev)}
      >
        <div className="relative rounded-lg overflow-hidden">
          <img
            src={src}
            alt=""
            onMouseEnter={(e) => console.log("enter")}
            className="w-full h-full object-cover transition-all"
          />

          {hover && (
            <HoverImg
              href={href}
              name={name}
              description={description}
              icons={icons}
            />
          )}
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <a
          href={codeHref}
          className="bg-indigo-600 text-white hover:opacity-80 active:translate-y-1  transition-all  py-2 px-8 rounded-lg"
          target="_blank"
        >
          Code
        </a>
        <a
          href={href}
          className="bg-yellow-400 hover:opacity-80 transition-all
           active:translate-y-1 text-[#0f172a]  py-2 px-4 rounded-lg"
          target="_blank"
        >
          Live site
        </a>
      </div>
    </span>
  );
};
