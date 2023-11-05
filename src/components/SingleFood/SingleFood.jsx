import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SingleFood = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { pathname } = location;
  const id = pathname.split("/").pop();
  const [food, setFood] = useState(null);
  useEffect(() => {
    axios
      .get(`https://assignment11-server-side-hazel.vercel.app/all-foods`)
      .then((result) => {
        console.log(result.data);
        const match = result?.data?.find((f) => f._id === id);
        if (match) {
          setFood(match);
        } else navigate("/allFoods");
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  return (
    <div className="font-serif font-bold mx-auto px-5 py-20 flex flex-col gap-5">
      <div className="text-lg text-white relative flex flex-row gap-5 justify-center items-end">
        <div className="flex flex-col gap-3  bg-red-700 rounded-lg p-5">
          <p>Category: {food?.food_category}</p>
          <p> Quantity: {food?.quantity}</p>
          <p>Price: ${food?.price_in_dollars}</p>
          <img src={food?.food_image} alt="" />
        </div>
        <div className="absolute -bottom-3 -right-7 w-fit h-fit flex flex-col gap-2 bg-red-600  rounded-lg px-2 py-3 text-center">
          <p>Food: {food?.food_name}</p>
          <p>Origin: {food?.food_origin}</p>
        </div>
      </div>
      <div className="pt-10 text-xl flex flex-col gap-3">
        <p>About Food: {food?.food_description}</p>
        <p>Ingredients:</p>
        <ul className="list-disc list-inside">
          {food?.ingredients?.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
        <p>Making Process: {food?.making_processes}</p>
      </div>
    </div>
  );
};

export default SingleFood;