import Search from "./Search";
import FoodCard from "./FoodCard";
import { useEffect, useState } from "react";
import axios from "axios";

const AllFoods = () => {
  const [foods, setFoods] = useState([]);
  const [filter, setFilter] = useState("");
  const [searchFood, setSearchFood] = useState("");
  useEffect(() => {
    axios
      .get(
        `https://assignment11-server-side-hazel.vercel.app/all-foods?category=${filter}`
      )
      .then((result) => {
        console.log(result.data);
        if (searchFood) {
          const match = result?.data?.filter((f) =>
            f?.food_name?.toLowerCase().includes(searchFood?.toLowerCase())
          );
          setFoods(match);
        } else setFoods(result?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [filter, searchFood]);
  return (
    <div>
      <Search setFilter={setFilter} setSearchFood={setSearchFood}></Search>
      <h3 className="max-w-[1440px] lg:mx-auto px-5 text-center pt-10 text-red-900 font-bold font-serif text-5xl">
        Our Foods
      </h3>
      {foods?.length > 0 ? (
        <div className="max-w-[1440px] lg:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 py-20">
          {foods?.map((food) => (
            <FoodCard key={food?._id} food={food}></FoodCard>
          ))}
        </div>
      ) : (
        <div>
          <p>No food</p>
        </div>
      )}
    </div>
  );
};
export default AllFoods;
