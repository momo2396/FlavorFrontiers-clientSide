import { Link } from "react-router-dom";
import b1 from "../../assets/banner.jpeg";
import b2 from "../../assets/banner1.jpeg";
import b3 from "../../assets/banner2.jpg";
const Banner = () => {
  return (
    <div className=" px-5 py-10 bg-slate-200 relative ">
      <div className="flex flex-col  justify-center items-center absolute top-0 left-0 w-full h-full z-10 bg-black bg-opacity-40">
        <h2 className="text-white text-center font-bold text-5xl lg:text-9xl font-serif">
          Welcome To The Flavor Frontiers..
        </h2>
        <p className="text-white font-bold text-xl pt-5 font-serif ">
          We assure the authenticity of foods
        </p>
        <Link to="/allFoods">
          <div className="pt-10">
            <button className="font-serif text-white font-bold text-lg btn bg-red-800  border-2 border-red-800 hover:bg-red-800 hover:border-red-800">
              {" "}
              Know More
            </button>
          </div>
        </Link>
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
