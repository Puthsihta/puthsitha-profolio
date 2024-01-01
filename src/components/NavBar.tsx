import React from "react";
import { useReadingProgress } from "../util/UseReadingProgress";
interface props {
  visible: boolean;
}

const NavBar: React.FC<props> = ({ visible }) => {
  const completion = useReadingProgress();
  return (
    <nav
      className={`${
        visible
          ? "translate-y-0 opacity-100 fixed"
          : "-translate-y-0 opacity-100 static"
      } flex z-10 w-screen p-4 mb-9 bg-slate-50 items-center justify-between transition-transform duration-300 ease-in-out md:p-3 sm:p-3`}>
      <h3
        style={{ fontFamily: "AnotherFontFamily" }}
        className="text-green-600 font-bold uppercase md:text-3xl ml-12">
        Puthsitha Moeurn
      </h3>
      <div className="flex items-center">
        <button
          onClick={() => {}}
          className="mr-6 py-1 px-5 rounded-md hover:bg-green-600 hover:text-white">
          <a href="#home">Home</a>
        </button>
        <button className="mr-6 py-1 px-5 rounded-md hover:bg-green-600 hover:text-white">
          <a href="#about">About Me</a>
        </button>
        <button className="mr-6 py-1 px-5 rounded-md hover:bg-green-600 hover:text-white">
          <a href="#experience">Experience</a>
        </button>
        <button className="mr-6 py-1 px-5 rounded-md hover:bg-green-600 hover:text-white">
          <a href="#contact">Contact</a>
        </button>
      </div>
      {/* <span
        id="progress-bar"
        style={{
          transform: `translateX(${completion - 100}%)`,
        }}
        className={`absolute bottom-0 left-0 w-full transition-transform duration-150 h-1 bg-green-500`}
      /> */}
    </nav>
  );
};

export default NavBar;
