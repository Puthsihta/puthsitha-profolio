import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";
import { HiChevronUp } from "react-icons/hi";
import NavBar from "./components/NavBar";
import React from "react";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const homeRef = React.useRef(null);
  const aboutRef = React.useRef(null);
  const experentRef = React.useRef(null);
  const contactRef = React.useRef(null);

  useEffect(() => {
    function updateScrollCompletion() {
      // see how much we have scrolled
      // const currentProgress = window.scrollY;
      // see how much total scroll is available
      let scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        // setCompletion(
        //   Number((currentProgress / scrollHeight).toFixed(2)) * 100
        // );
      }
    }
    // add scroll event listener
    window.addEventListener("scroll", updateScrollCompletion);

    // remove scroll event listener on umount
    return () => {
      window.removeEventListener("scroll", updateScrollCompletion);
    };
  }, []);

  useEffect(() => {
    // Function to check if the user has scrolled down a certain amount
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add event listener when the component mounts
    window.addEventListener("scroll", toggleVisibility);

    // Clean up by removing the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="h-auto bg-cover"
      // style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <NavBar
        visible={isVisible}
        homeRef={homeRef}
        aboutRef={aboutRef}
        experentRef={experentRef}
        contactRef={contactRef}
      />
      <Home homeRef={homeRef} />
      <About aboutRef={aboutRef} />
      <Experience experentRef={experentRef} />
      <Contact contactRef={contactRef} />
      <button
        onClick={scrollToTop}
        className={`${
          isVisible ? "block" : "hidden"
        } fixed bottom-6 right-6 bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition duration-300 ease-in-out`}>
        <HiChevronUp className="h-5 w-5" />
      </button>
    </div>
  );
};

export default App;
