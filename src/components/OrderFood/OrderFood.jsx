import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";

const OrderFood = () => {
  const location = useLocation();
  const { pathname } = location;
  const id = pathname.split("/").pop();
  const [food, setFood] = useState(null);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [plus, setPlus] = useState(1);
  useEffect(() => {
    axios
      .get(
        `https://assignment11-server-side-hazel.vercel.app/single-food?id=${id}`
      )
      .then((result) => {
        console.log(result.data);
        // const match = result?.data?.find((f) => f?._id === id);
        // if (match) {
        setFood(result?.data);
        // } else navigate("/allFoods");
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handlePurchasedFood = async (e) => {
    e.preventDefault();
    const email = user?.email;
    const buyerName = user?.displayName;
    const foodName = food?.food_name;
    const food_id = food?._id;
    const foodPrice = food?.price_in_dollars;
    const quantity = plus;
    const date = new Date().toLocaleDateString();
    const res = await fetch(
      "https://assignment11-server-side-hazel.vercel.app/add-to-cart",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email,
          buyerName,
          foodName,
          food_id,
          foodPrice,
          quantity,
          date,
        }),
      }
    );
    const data = await res.json();
    toast.success(data?.message);
    navigate("/orderedPage");
  };
  return (
    <div className="lg:bg-red-900 lg:px-5 py-10 flex flex-col lg:flex-row gap-5 max-w-[1440px] mx-auto font-serif shadow-2xl">
      <div className="flex justify-center text-white font-bold text-xl">
        <div className="bg-red-700 p-5 rounded-lg flex flex-col gap-3">
          <p>{food?.food_name}</p>
          <p>Price: ${food?.price_in_dollars}</p>
          <img className="max-w-[800px]" src={food?.food_image} alt="" />
        </div>
      </div>
      <section className="p-6 bg-red-700 text-white font-semibold text-lg">
        <form
          onSubmit={handlePurchasedFood}
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm ">
            <div className="space-y-2 col-span-full">
              <p className=" text-center">Food Info (Purchase Info.)</p>
              <p className="text-sm text-center">Place Your Order!</p>
            </div>
            <div className="grid gap-4 col-span-full">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  First name
                </label>
                <input
                  id="firstname"
                  type="text"
                  value={user?.displayName}
                  className="px-2 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                  readOnly
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
                <input
                  id="lastname"
                  type="text"
                  value={user?.email}
                  className="px-2 w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
                  readOnly
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  Date
                </label>
                <input
                  id="date"
                  type="text"
                  value={new Date().toLocaleDateString()}
                  className="px-2 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 text-black"
                  readOnly
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="foodName" className="text-sm">
                  Food Name
                </label>
                <input
                  name="foodName"
                  type="text"
                  value={food?.food_name}
                  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 text-black px-2"
                  readOnly
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="foodPrice" className="text-sm">
                  Price($)
                </label>
                <input
                  name="price"
                  type="text"
                  value={food?.price_in_dollars}
                  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900 px-2"
                  readOnly
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="state" className="text-sm">
                  Quantity
                </label>
                <div className="flex flex-row gap-4">
                  <div
                    onClick={() => {
                      setPlus((prev) => (plus === 1 ? prev : prev - 1));
                    }}
                    className="bg-red-500 px-5 rounded-full"
                  >
                    -
                  </div>
                  <input
                    name="quantity"
                    type="number"
                    value={plus}
                    className="w-fit rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 text-black px-2"
                    readOnly
                  />
                  <div
                    onClick={() => {
                      setPlus((prev) =>
                        plus === food?.quantity ? prev : prev + 1
                      );
                    }}
                    className="bg-red-500 px-5 rounded-full "
                  >
                    +
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <input className="btn w-full" type="submit" value="Purchase" />
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default OrderFood;
