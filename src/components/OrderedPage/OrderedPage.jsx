import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import FoodCard from "./FoodCard";
import { useQuery } from "@tanstack/react-query";

const OrderedPage = () => {
  const { user } = useContext(AuthContext);
  const orderedFoodQuery = useQuery({
    queryKey: [
      `https://assignment11-server-side-hazel.vercel.app/my-cart?email=${user?.email}`,
    ],
    queryFn: async () => {
      const res = await fetch(
        `https://assignment11-server-side-hazel.vercel.app/my-cart?email=${user?.email}`
      );
      const data = await res?.json();
      return data;
    },
  });

  if (orderedFoodQuery?.isLoading) return <p>Loading...</p>;
  return (
    <div className="max-w-[1440px] mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {orderedFoodQuery?.data?.map((food) => (
        <FoodCard
          key={food._id}
          food={food}
          refetch={orderedFoodQuery?.refetch}
        ></FoodCard>
      ))}
    </div>
  );
};

export default OrderedPage;
