import { FaSchoolCircleCheck } from "react-icons/fa6";
import { IoIosSchool } from "react-icons/io";
import { IoMdCodeWorking } from "react-icons/io";
import { RiComputerFill } from "react-icons/ri";
import { Element } from "react-scroll";
interface props {
  experentRef?: React.MutableRefObject<any>;
}
const Experience: React.FC<props> = ({ experentRef }) => {
  return (
    <Element
      name="experience"
      id="experience"
      ref={experentRef}
      className="h-aut sm:h-auto flex flex-col items-center justify-center m-6 sm:m-0 rounded-lg p-6 sm:pt-32 sm:px-32 bg-slate-50">
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
        <div
          data-aos="fade-left"
          className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          {/* <!-- Icon --> */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <IoMdCodeWorking className="h-5 w-5" />
          </div>
          {/* <!-- Card --> */}
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">Mobile Developer</div>
              <time className="font-caveat font-medium text-indigo-500 text-right">
                March 20 2024 – Present
              </time>
            </div>
            <div className="text-slate-500">
              I'm a mobile developer at <b>Digital One</b> I have develop
              several apps with <i>React Native</i> and <i>Flutter</i>{" "}
              technology (Android & IOS) and integrated with API. I able to use
              typscript, Zustand (useQuery). I'm also do flutter projects and
              buidl self api with express js typscript prisma ORM (ecommerce).
            </div>
          </div>
        </div>
        <div
          data-aos="fade-right"
          className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          {/* <!-- Icon --> */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <IoMdCodeWorking className="h-5 w-5" />
          </div>
          {/* <!-- Card --> */}
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">Mobile Developer</div>
              <time className="font-caveat font-medium text-indigo-500 text-right">
                December 12 2021 – March 14 2024
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
        <div
          data-aos="fade-left"
          className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          {/* <!-- Icon --> */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <RiComputerFill className="h-5 w-5" />
          </div>
          {/* <!-- Card --> */}
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">IT Supporter</div>
              <time className="font-caveat font-medium text-indigo-500 text-right">
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
        <div
          data-aos="fade-right"
          className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
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
              <time className="font-caveat font-medium text-indigo-500 text-right">
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
        <div
          data-aos="fade-left"
          className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          {/* <!-- Icon --> */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <FaSchoolCircleCheck className="h-5 w-5" />
          </div>
          {/* <!-- Card --> */}
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">Pass BaccII</div>
              <time className="font-caveat font-medium text-indigo-500 text-right">
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
    </Element>
  );
};

export default Experience;
