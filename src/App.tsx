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
    <div className="h-screen py-20 ">
      <Header refs={refs} scrollToRef={scrollToRef}></Header>
      <Main></Main>
      <Project ref={refs.project} text={"a"}></Project>
      <About ref={refs.about} text={"a"}></About>
      <Contact ref={refs.contact} text={"a"}></Contact>
    </div>
  );
};

export default App;
