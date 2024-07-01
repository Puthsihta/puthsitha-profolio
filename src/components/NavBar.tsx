import React from "react";
// import { NavLink } from "react-router-dom";

interface props {
  visible: boolean;
  homeRef: React.MutableRefObject<any>;
  aboutRef: React.MutableRefObject<any>;
  experentRef: React.MutableRefObject<any>;
  contactRef: React.MutableRefObject<any>;
}

const NavBar: React.FC<props> = ({
  visible,
  homeRef,
  aboutRef,
  experentRef,
  contactRef,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    let home: any = document.querySelector("#home");
    let contact: any = document.querySelector("#contact");
    let home_style: any = document.querySelector('a[href="#home"]');
    console.log("home ref: ", home.getBoundingClientRect().top);
    console.log("contact ref: ", contact.getBoundingClientRect().top);
    window.addEventListener("scroll", () => {
      if (
        home.getBoundingClientRect().top < 0 &&
        contact.getBoundingClientRect().top > 0
      ) {
        home_style.classList.add("bg-indigo-400");
        // document.querySelector('a[href="#contact"]');
        // .classList.remove("bg-indigo-400");
      } else if (contact.getBoundingClientRect().top < 0) {
        //   document
        //     .querySelector('a[href="#home"]')
        //     .classList.remove("bg-indigo-400");
        //   document
        //     .querySelector('a[href="#contact"]')
        //     .classList.add("bg-indigo-400");
        // } else {
        //   document
        //     .querySelector('a[href="#home"]')
        //     .classList.remove("bg-indigo-400");
        //   document
        //     .querySelector('a[href="#contact"]')
        //     .classList.remove("bg-indigo-400");
      }
    });
  });

  const scrollToSection = (ref: React.MutableRefObject<any>) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`${
        visible
          ? "translate-y-0 opacity-100 fixed"
          : "-translate-y-0 opacity-100 static"
      } flex z-10 w-screen p-4 bg-gradient-to-b from-slate-100 to-transparent items-center justify-between transition-transform duration-300 ease-in-out`}>
      <h3
        style={{ fontFamily: "AnotherFontFamily" }}
        className="text-green-600 font-bold uppercase ml-12 text-lg sm:text-3xl">
        Puthsitha Moeurn
      </h3>
      <div className="items-center hidden md:flex">
        <button
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(homeRef);
          }}
          className={`${"mr-6 py-1 px-5 rounded-md hover:bg-green-600 hover:text-white "}`}>
          <a href="#home">Home</a>
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(aboutRef);
          }}
          className={`${"mr-6 py-1 px-5 rounded-md hover:bg-green-600 hover:text-white "}`}>
          <a href="#about">About Me</a>
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(experentRef);
          }}
          className="mr-6 py-1 px-5 rounded-md hover:bg-green-600 hover:text-white">
          <a href="#experience">Experience</a>
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(contactRef);
          }}
          className="mr-6 py-1 px-5 rounded-md hover:bg-green-600 hover:text-white">
          <a href="#contact">Contact</a>
        </button>
      </div>
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-300 focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <button
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(homeRef);
          }}
          className="mr-6 py-1 px-5 rounded-md hover:bg-green-600 hover:text-white">
          <a href="#home">Home</a>
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(aboutRef);
          }}
          className="mr-6 py-1 px-5 rounded-md hover:bg-green-600 hover:text-white">
          <a href="#about">About Me</a>
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(experentRef);
          }}
          className="mr-6 py-1 px-5 rounded-md hover:bg-green-600 hover:text-white">
          <a href="#experience">Experience</a>
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(contactRef);
          }}
          className="mr-6 py-1 px-5 rounded-md hover:bg-green-600 hover:text-white">
          <a href="#contact">Contact</a>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
