import MyImage from "../../src/assets/me.jpg";
import { ProgressBar } from "../util/Progressbar";
import { Element } from "react-scroll";

interface props {
  aboutRef?: React.MutableRefObject<any>;
}
const About: React.FC<props> = ({ aboutRef }) => {
  return (
    <Element
      name="about"
      id="about"
      className="h-auto sm:h-full flex flex-col-reverse sm:flex-row items-center justify-between p-6 sm:p-0 sm:pt-32 bg-slate-50">
      <div
        // data-aos="zoom-out-right"
        className="w-72 h-72 sm:h-96 sm:w-96 shadow-md bg-slate-50 rounded-full overflow-hidden sm:ml-24 transition-opacity duration-1000 delay-500 transform">
        <img
          className="object-contain h-full w-full"
          src={MyImage}
          alt="My Profile"
        />
      </div>
      <div
        // data-aos="zoom-out-left"
        className="w-full sm:w-2/3 bg-gradient-radial from-blue-50 rounded-lg px-5 py-5 sm:px-40 sm:py-0 mb-5 sm:mb-0 transition-opacity duration-1000 delay-500 transform">
        <h3 className="text-green-600 font-bold text-2xl mb-1">About Me</h3>
        <p className="font-thin text-xl">
          I’m property Development with considerable experience in react native
          develop property such as many kind of app, e-commerce, education,
          hospital, garage, hotel, booking tour, and especially integrated with
          API and bank service, so on.
        </p>
        <div className="my-2 grid-flow-col space-y-6 mt-9">
          <ProgressBar
            progressPercentage={96}
            skill={"React(React Native & React JS)"}
          />
          <ProgressBar
            progressPercentage={75}
            skill={"Communication & Teamwork"}
          />
          <ProgressBar progressPercentage={50} skill={"Project Manage"} />
          <ProgressBar progressPercentage={42} skill={"Design"} />
        </div>
      </div>
    </Element>
  );
};

export default About;
