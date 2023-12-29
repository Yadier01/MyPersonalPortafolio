import { useRef } from "react";
import Header from "./components/Header";
import { Project } from "./components/Projects";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import Main from "./components/SartingSection";

const App = () => {
  const refs = {
    project: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] py-20 ">
      <div className="md:mx-24 mx-4  bg-[#0f172a] 2xl:mx-64">
        <Header refs={refs} scrollToRef={scrollToRef} />
        <Main />
        <Project ref={refs.project} text={"Personal Projects"} />
        <About ref={refs.about} text={"About me :)"} />
        <Contact ref={refs.contact} text={"Contact"} />
      </div>
    </div>
  );
};

export default App;
