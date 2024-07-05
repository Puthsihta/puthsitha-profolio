import circleBg1 from "../../src/assets/circle1.png";
import circleBg2 from "../../src/assets/circle2.png";
import MyImage from "../../src/assets/avatar.png";
import { Element, Link } from "react-scroll";
interface props {
  homeRef?: React.MutableRefObject<any>;
}
const Home: React.FC<props> = ({ homeRef }) => {
  return (
    <Element
      name="home"
      id="home"
      ref={homeRef}
      className="h-full sm:h-auto bg-cover bg-center bg-slate-50">
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between p-10 pt-24 sm:px-52 sm:pt-40">
        <div data-aos="flip-right">
          <h1 className="text-2xl uppercase">Mobile Developer</h1>
          <h1 className="text-2xl uppercase">React</h1>
          <h1 className="text-2xl uppercase">Native</h1>
          <p className="font-thin mt-7 sm:mt-2 w-80 text-xl mb-3">
            I have been designing beautiful and user friendly interfaces for
            mobile and web. Designing is my passion and I love it the most.
          </p>
          <Link
            className={`text-white py-2 px-5 rounded-md bg-green-600 cursor-pointer`}
            to={`about`}
            spy={true}
            smooth={true}
            duration={500}>
            Read More
          </Link>
        </div>
        <div data-aos="flip-left" className="mt-7 sm:mt-0">
          <div
            className="w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center bg-cover"
            style={{ backgroundImage: `url(${circleBg2})` }}>
            <div
              className="w-60 h-60 sm:w-80 sm:h-80 bg-cover"
              style={{ backgroundImage: `url(${circleBg1})` }}>
              <img
                className="h-full w-full object-contain"
                src={MyImage}
                alt="bg"
              />
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Home;
