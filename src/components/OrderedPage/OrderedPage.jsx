import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import FoodCard from "./FoodCard";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <title>Your Ordered Foods-FlavorFrontiers</title>
      </Helmet>
      {orderedFoodQuery?.length > 0 ? (
        orderedFoodQuery?.data?.map((food) => (
          <FoodCard
            key={food._id}
            food={food}
            refetch={orderedFoodQuery?.refetch}
          ></FoodCard>
        ))
      ) : (
        <p className="flex justify-center items-center py-20 text-center text-5xl text-red-800 font-bold font-serif">
          {" "}
          No Food Ordered.....
        </p>
      )}
    </div>
  );
};

export default OrderedPage;
