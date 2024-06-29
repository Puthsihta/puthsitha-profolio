import { FaSchoolCircleCheck } from "react-icons/fa6";
import { IoIosSchool } from "react-icons/io";
import { IoMdCodeWorking } from "react-icons/io";
import { RiComputerFill } from "react-icons/ri";

const Experience = () => {
  return (
    <div
      id="experience"
      className="h-screen m-6 bg-cover bg-center rounded-lg p-6 pt-20">
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          {/* <!-- Icon --> */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <IoMdCodeWorking className="h-5 w-5" />
          </div>
          {/* <!-- Card --> */}
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">Mobile Developer</div>
              <time className="font-caveat font-medium text-indigo-500">
                December 12 2021 – Present
              </time>
            </div>
            <div className="text-slate-500">
              I'm a mobile developer at <b>PhsarTech</b> I have develop several
              apps with react native technology (Android & IOS) and integrated
              with API, and bank service (ABA payment method). I able to use
              javascript, ES6, JSX, TSX, Lifecycle with Hooks, Redux (saga,
              toolkit), encrypt and decrypt data with API. I'm also lead
              e-commerce project with teamwork (manage task, meeting,
              responsible)
            </div>
          </div>
        </div>

        {/* <!-- Item #2 --> */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          {/* <!-- Icon --> */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <RiComputerFill className="h-5 w-5" />
          </div>
          {/* <!-- Card --> */}
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">IT Supporter</div>
              <time className="font-caveat font-medium text-indigo-500">
                March 01 2020 – December 24 2020
              </time>
            </div>
            <div className="text-slate-500">
              I had volunnter as IT support at <b>YRDP (NGO)</b>. At there I had
              learn about Media such as Take Photos, Set up Camera, Take Video,
              Edit Photos, Edit Video. I had also learning : Self-Development &
              Management Course. I had outdoor experiment with teamwork &
              communication, Join workshop,
            </div>
          </div>
        </div>

        {/* <!-- Item #3 --> */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          {/* <!-- Icon --> */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <IoIosSchool className="h-5 w-5" />
          </div>
          {/* <!-- Card --> */}
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">
                Bachelor Degree of Computer Science
              </div>
              <time className="font-caveat font-medium text-indigo-500">
                2019 - 2023
              </time>
            </div>
            <div className="text-slate-500">
              I'm a graduated student at{" "}
              <b>RUPP (Royal University of Phnom Penh)</b>, departerment{" "}
              <b>Computer Science and Engineering</b>. I had done assignments,
              homeword and project with classmates. In there I's interesting in{" "}
              <b>Software Engineering</b> Subject.
            </div>
          </div>
        </div>

        {/* <!-- Item #4 --> */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          {/* <!-- Icon --> */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <FaSchoolCircleCheck className="h-5 w-5" />
          </div>
          {/* <!-- Card --> */}
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">Pass BaccII</div>
              <time className="font-caveat font-medium text-indigo-500">
                2016-2019
              </time>
            </div>
            <div className="text-slate-500">
              I's a student in <b>Thmourkoul High School</b>. You know what, I
              had passed BaccII in grade <b>C</b>. In that age I have dream to
              become a top student in the class.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
