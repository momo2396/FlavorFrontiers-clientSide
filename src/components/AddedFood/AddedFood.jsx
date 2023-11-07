import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import FoodCard from "./FoodCard";
import { Helmet } from "react-helmet";

const AddedFood = () => {
  const [food, setFood] = useState(null);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    axios
      .get(
        `https://assignment11-server-side-hazel.vercel.app/all-foods-no-condition`
      )
      .then((result) => {
        console.log(result.data);
        const match = result?.data?.filter(
          (f) => f?.food_maker_email === user?.email
        );
        if (match) {
          setFood(match);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="max-w-[1440px] lg:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 py-20">
      <Helmet>
        <title>Your Added Foods-FlavorFrontiers</title>
      </Helmet>
      {food?.length > 0 ? (
        food?.map((f) => <FoodCard key={f?._id} f={f}></FoodCard>)
      ) : (
        <p className="flex justify-center items-center py-20 text-center text-5xl text-red-800 font-bold font-serif">
          No Food Added...
        </p>
      )}
    </div>
  );
};

export default AddedFood;
