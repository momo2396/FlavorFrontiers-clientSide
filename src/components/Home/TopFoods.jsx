import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import FoodCard from "./FoodCard";
import { Link } from "react-router-dom";

const TopFoods = () => {
  const [foods, setFoods] = useState();
  useEffect(() => {
    axios
      .get(`https://assignment11-server-side-hazel.vercel.app/top-foods`)
      .then((result) => {
        setFoods(result?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [foods]);
  return (
    <div className="font-serif max-w-[1440px] mx-auto px-5 py-20">
      <h3 className="pb-10 font-bold text-center text-3xl lg:text-5xl text-red-800 font-serif">
        Our Popular Foods
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {foods?.map((food) => (
          <div className="relative" key={food?._id}>
            <span className="absolute -bottom-2 -left-2 indicator-item badge badge-secondary text-lg py-4 font-bold font-serif">
              Ordered: {food?.count}
            </span>
            <div className="">
              <FoodCard food={food}></FoodCard>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end items-center my-10">
        <Link to="/allFoods">
          <button className="btn bg-red-800 text-white">See More</button>
        </Link>
      </div>
    </div>
  );
};

export default TopFoods;
