import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";
import { SiGithub, SiIndeed } from "react-icons/si";
const Main = () => {
  return (
    <section
      className="h-screen w-full 
     text-white  "
    >
      <div
        className="flex justify-center 
       flex-col items-start mx-auto  h-4/5"
      >
        <div className="">
          <h4 className="text-sm">Hey! my name is</h4>
          <h1 className=" text-7xl sm:text-8xl md:text-9xl">Yadier </h1>
          <h2 className="py-3">
            Front-end <span className="text-yellow-400">Developer.</span>
          </h2>
          <div className="flex gap-8 flex-row items-center">
            <a href="https://www.linkedin.com/in/yadier-marcial/ ">
              <AiOutlineLinkedin className="text-3xl" />
            </a>

            <a href="https://github.com/Yadier01">
              <SiGithub className="text-3xl"></SiGithub>
            </a>
          </div>
          <div className="text-lg py-2 ">
            <a href="#" className="text-red-200">
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
