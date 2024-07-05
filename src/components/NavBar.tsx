import React from "react";
import { Link } from "react-scroll";
interface props {
  visible: boolean;
}

const NavBar: React.FC<props> = ({ visible }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const menu = [
    {
      id: 1,
      title: "Home",
      name: "home",
    },
    {
      id: 2,
      title: "About Me",
      name: "about",
    },
    {
      id: 3,
      title: "Experience",
      name: "experience",
    },
    {
      id: 4,
      title: "Contact",
      name: "contact",
    },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      data-aos="fade-down"
      className={`fixed flex z-10 w-screen p-3 sm:p-4 bg-white sm:bg-transparent sm:bg-gradient-to-b from-slate-100 to-transparent items-center justify-between`}>
      <div className={`items-center sm:hidden ${isOpen ? "flex" : "hidden"}`}>
        {menu.map((item) => {
          return (
            <Link
              activeClass={`bg-green-600 text-white`}
              className={`mr-3 py-1 px-3 rounded-md hover:border border-green-600 cursor-pointer`}
              to={`${item.name}`}
              spy={true}
              smooth={true}
              duration={500}>
              {item.title}
            </Link>
          );
        })}
      </div>
      <h1
        className={`text-green-600 font-bold uppercase ml-0 sm:ml-12 text-2xl sm:text-3xl ${
          isOpen ? "hidden" : "block"
        } sm:block`}>
        Puthsitha Moeurn
      </h1>
      <div className="items-center hidden md:flex">
        {menu.map((item) => {
          return (
            <Link
              activeClass={`bg-green-600 text-white`}
              className={`mr-6 py-1 px-5 rounded-md hover:border border-green-600 cursor-pointer`}
              to={`${item.name}`}
              spy={true}
              smooth={true}
              duration={500}>
              {item.title}
            </Link>
          );
        })}
      </div>
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-300 focus:outline-none">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              className="w-6 h-6"
              viewBox="0 0 50 50">
              <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
            </svg>
          ) : (
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
          )}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
