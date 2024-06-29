import backgroundImage from "../../src/assets/homebg.png";
import circleBg1 from "../../src/assets/circle1.png";
import circleBg2 from "../../src/assets/circle2.png";
import MyImage from "../../src/assets/avatar.png";

const Home = () => {
  return (
    <div
      id="home"
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="flex justify-between p-52">
        <div className="transition-opacity duration-1000 delay-500 transform">
          <h1 className="text-4xl uppercase">Mobile Developer</h1>
          <h1 className="text-4xl uppercase">React</h1>
          <h1 className="text-4xl uppercase">Native</h1>
          <p className="font-thin mt-2 w-80 text-xl">
            I have been designing beautiful and user friendly interfaces for
            mobile and web. Designing is my passion and I love it the most.
          </p>
          <button className="text-white py-1 px-5 rounded-md bg-green-400 my-6">
            Read More
          </button>
        </div>
        <div className="transition-opacity duration-1000 delay-500 transform">
          <div
            className="w-96 h-96 flex items-center justify-center bg-cover"
            style={{ backgroundImage: `url(${circleBg2})` }}>
            <div
              className="w-80 h-80 bg-cover"
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
