import React from "react";
interface props {
  visible: boolean;
}

const NavBar: React.FC<props> = ({ visible }) => {
  return (
    <nav
      className={`${
        visible
          ? "translate-y-0 opacity-100 fixed"
          : "-translate-y-0 opacity-100 static"
      } flex z-10 w-screen p-4 bg-gradient-to-b from-slate-100 to-transparent items-center justify-between transition-transform duration-300 ease-in-out md:p-3 sm:p-3`}>
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
    </nav>
  );
};

export default NavBar;
