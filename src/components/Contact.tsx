interface props {
  contactRef: React.MutableRefObject<any>;
}
const Contact: React.FC<props> = ({ contactRef }) => {
  return (
    <div
      id="contact"
      ref={contactRef}
      className="h-auto mt-6 p-6 bg-white flex flex-col items-center justify-center space-y-3 relative">
      <h2 className="text-green-600 font-semibold text-3xl sm:text-5xl">
        Puthsitha Moeurn
      </h2>
      <h3 className="font-bold text-lg sm:text-2xl text-center">
        Sangkat Ou Ruessei Ti Pir, Phnom Penh, Cambodia
      </h3>
      <div className="space-x-3 flex">
        <b className="text-lg sm:text-2xl font-semibold">+855 92389497</b>
        <p className="text-lg sm:text-2xl font-normal">|</p>
        <b className="text-lg sm:text-2xl font-semibold">
          puthsithamouern@gmail.com
        </b>
      </div>
      <div className="border-t-2 w-6/12 border-green-600 opacity-30" />
      <div className="space-x-3 flex">
        <b className="font-normal">© puthsithamoeurn.com</b>{" "}
        <b className="font-normal">|</b>
        <p className="font-normal">All Right Reserved | 2024</p>
      </div>
    </div>
  );
};

export default Contact;
