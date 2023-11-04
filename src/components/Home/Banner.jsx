import b1 from "../../assets/banner.jpeg";
import b2 from "../../assets/banner1.jpeg";
import b3 from "../../assets/banner2.jpg";
const Banner = () => {
  return (
    <div className=" px-5 py-10 bg-slate-200 relative ">
      <div className="flex flex-col  justify-center items-center absolute top-0 left-0 w-full h-full z-10 bg-black bg-opacity-40">
        <h2 className="text-white text-center font-bold text-7xl lg:text-9xl font-serif">
          Welcome To Our Restaurant
        </h2>
        <button className="absolute bottom-20 text-white font-bold text-lg btn btn-outline bg-red-800">
          {" "}
          Know More
        </button>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-5 items-center">
        <img className="rounded-full flex-1" src={b1} alt="banner" />
        <div className="hidden lg:block flex-col gap-5 flex-1">
          <img className="rounded-full" src={b2} alt="banner1" />
          <img className="rounded-full" src={b3} alt="banner2" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
