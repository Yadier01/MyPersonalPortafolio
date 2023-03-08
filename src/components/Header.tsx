import { Project } from "./Projects";

const Header = () => {
  return (
    <header className="h-20 bg-slate-900 text-white">
      <nav className="h-full  ">
        <div className="flex h-full justify-evenly items-center">
          <span>YG</span>
          <div className="flex">
            <ul className="flex gap-10">
              <li>
                <button>Project</button>
              </li>
              <li>
                <button>About</button>
              </li>
              <li>
                <button>Contact</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
