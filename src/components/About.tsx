import MyImage from "../../src/assets/me.jpg";
import { ProgressBar } from "../util/Progressbar";
interface props {
  aboutRef: React.MutableRefObject<any>;
}
const About: React.FC<props> = ({ aboutRef }) => {
  return (
    <div
      id="about"
      ref={aboutRef}
      className="h-auto sm:h-screen sm:mt-12 flex flex-col-reverse sm:flex-row items-center justify-between p-6">
      <div className="h-96 w-96 shadow-md bg-slate-50 rounded-full overflow-hidden">
        <img
          className="object-contain h-full w-full"
          src={MyImage}
          alt="My Profile"
        />
      </div>
      <div className="w-full sm:w-2/3 bg-gradient-radial from-blue-50 rounded-lg px-5 py-5 sm:px-40 sm:py-32 mb-5 sm:mb-0">
        <h3 className="text-green-600 font-bold text-3xl mb-1">About Me</h3>
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
    </div>
  );
};

export default About;
