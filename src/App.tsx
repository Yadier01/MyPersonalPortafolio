import { useRef } from "react";
import Header from "./components/Header";
import { Project } from "./components/Projects";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Main } from "./components/Main";

function App() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  return (
    <body className="h-screen">
      <Header></Header>
      <Main></Main>
      <Project></Project>
      <About></About>
      <Contact></Contact>
    </body>
  );
}

export default App;
