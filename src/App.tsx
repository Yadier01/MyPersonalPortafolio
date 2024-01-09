import { useRef, useState } from "react";
import Header from "./components/Header";
import { Project } from "./components/Projects";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import Main from "./components/SartingSection";

interface MousePosition {
  x: number;
  y: number;
}

const App = () => {
  const refs = {
    project: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setMousePosition({ x: e.pageX, y: e.pageY });
  };

  return (
    <div className="min-h-screen bg-[#0f172a] py-20 " onMouseMove={handleMouseMove}>
      <div className="md:mx-24 mx-4  bg-[#0f172a] 2xl:mx-64">
        <Header refs={refs} scrollToRef={scrollToRef} />
        <Main />
        <Project ref={refs.project} text={"Personal Projects"} />
        <About ref={refs.about} text={"About me :)"} />
        <Contact ref={refs.contact} text={"Contact"} />
      </div>
      <div
        className="absolute w-5 h-5 rounded-full  bg-purple-900 bg-opacity-30 pointer-events-none"
        style={{
          top: mousePosition.y,
          left: mousePosition.x,
          boxShadow: "0 0 20px 20px rgba(88, 28, 135, 0.3)",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
};

export default App;