import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";
import { SiIndeed } from "react-icons/si";
const Main = () => {
  return (
    <section className="h-screen  bg-slate-900 text-white  ;">
      <div className="flex justify-center  flex-col items-start mx-auto max-w-7xl h-4/5">
        <h4>Hey! my name is</h4>
        <h1 className="text-8xl">Yadier </h1>
        <h2>A Front-end Developer.</h2>
        <a href=" ">
          <AiOutlineLinkedin className="text-3xl" />
        </a>
        <a href=" ">
          <AiFillGithub className="text-3xl" />
        </a>
        <a href=" "></a>
        <a href="">
          <SiIndeed></SiIndeed>
        </a>
        <a href=" ">Resume</a>
      </div>
    </section>
  );
};

export default Main;
