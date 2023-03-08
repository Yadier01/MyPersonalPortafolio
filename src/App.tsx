import { useRef } from "react";
import Header from "./components/Header";
import { Project } from "./components/Projects";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Main } from "./components/Main";

function App() {
  const ref1 = useRef(null);

  return (
    <div>
      <Header></Header>
      <Main></Main>
      <Project></Project>
      <About></About>
      <Contact></Contact>
    </div>
  );
}

export default App;
