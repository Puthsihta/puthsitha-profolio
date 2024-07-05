import { Element } from "react-scroll";
interface props {
  contactRef?: React.MutableRefObject<any>;
}
const Contact: React.FC<props> = ({ contactRef }) => {
  return (
    <Element
      data-aos="fade-up"
      data-aos-duration="1000"
      name="contact"
      id="contact"
      ref={contactRef}
      className="mt-6 p-6 flex flex-col items-center justify-center space-y-3 relative bg-slate-50">
      <h3 className="text-green-600 font-bold text-xl sm:text-2xl">
        Puthsitha Moeurn
      </h3>
      <h3 className="font-semibold text-base sm:text-lg text-center">
        Sangkat Ou Ruessei Ti Pir, Phnom Penh, Cambodia
      </h3>
      <div className="space-x-3 text-base sm:text-lg flex">
        <b className="font-semibold">+855 92389497</b>
        <p className="font-normal">|</p>
        <b className="font-semibold">puthsithamouern@gmail.com</b>
      </div>
      <div className="border-t-2 w-6/12 border-green-600 opacity-30" />
      <div className="space-x-3 flex">
        <b className="font-normal">© puthsithamoeurn.com</b>{" "}
        <b className="font-normal">|</b>
        <p className="font-normal">All Right Reserved | 2024</p>
      </div>
    </Element>
  );
};

export default Contact;
