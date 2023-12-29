import React from "react";

interface propsType {
  refs: {
    project: React.RefObject<HTMLDivElement>;
    about: React.RefObject<HTMLDivElement>;
    contact: React.RefObject<HTMLDivElement>;
  };
  scrollToRef: (ref: React.RefObject<HTMLDivElement>) => void;
}

const Header = ({ refs, scrollToRef }: propsType) => {
  return (
    <header
      className="h-20 shadow-xl bg-slate-900 text-white 
    fixed top-0 left-0 right-0 "
    >
      <nav className="h-full ">
        <div
          className="flex h-full justify-around  md:justify-between
          items-center md:mx-24 lg:mx-64"
        >
          <span>YG</span>
          <div className="flex">
            <ul className="flex gap-10">
              <li>
                <button onClick={() => scrollToRef(refs.project)}>
                  Project
                </button>
              </li>
              <li>
                <button onClick={() => scrollToRef(refs.about)}>About</button>
              </li>
              <li>
                <button onClick={() => scrollToRef(refs.contact)}>
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
