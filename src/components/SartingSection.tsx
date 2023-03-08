import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";
import { SiIndeed } from "react-icons/si";
const Main = () => {
  return (
    <section className="h-screen  bg-slate-900 text-white  ;">
      <div className="flex justify-center  flex-col items-start mx-auto max-w-7xl h-4/5">
        <div className=" m-6 sm:m-12 md:m-20">
          <h4 className="text-sm">Hey! my name is</h4>
          <h1 className=" text-7xl sm:text-8xl md:text-9xl">Yadier </h1>
          <h2 className="py-3"> Front-end Developer.</h2>
          <div className="flex gap-8 flex-row items-center">
            <a href=" ">
              <AiOutlineLinkedin className="text-3xl" />
            </a>

            <a href="">
              <SiIndeed className="text-3xl"></SiIndeed>
            </a>
          </div>
          <div className="text-lg py-2 ">
            <a href=" ">Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
