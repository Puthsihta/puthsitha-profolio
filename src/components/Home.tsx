import backgroundImage from "../../src/assets/homebg.png";
import circleBg1 from "../../src/assets/circle1.png";
import circleBg2 from "../../src/assets/circle2.png";
import MyImage from "../../src/assets/avatar.png";
interface props {
  homeRef: React.MutableRefObject<any>;
}
const Home: React.FC<props> = ({ homeRef }) => {
  return (
    <div
      id="home"
      ref={homeRef}
      className="h-full sm:h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between p-10 sm:p-52">
        <div className="transition-opacity duration-1000 delay-500 transform">
          <h1 className="text-4xl uppercase">Mobile Developer</h1>
          <h1 className="text-4xl uppercase">React</h1>
          <h1 className="text-4xl uppercase">Native</h1>
          <p className="font-thin mt-7 sm:mt-2 w-80 text-xl">
            I have been designing beautiful and user friendly interfaces for
            mobile and web. Designing is my passion and I love it the most.
          </p>
          <button className="text-white py-1 px-5 rounded-md bg-green-400 my-6">
            Read More
          </button>
        </div>
        <div className="transition-opacity duration-1000 delay-500 transform mt-7 sm:mt-0">
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
    </div>
  );
};

export default Home;
