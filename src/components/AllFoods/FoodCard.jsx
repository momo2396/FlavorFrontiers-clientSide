import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
const FoodCard = ({ food }) => {
  const {
    _id,
    food_name,
    food_category,
    price_in_dollars,
    food_image,
    quantity,
    food_origin,
    food_description,
  } = food;
  return (
    <div className="hover:scale-110 duration-200 max-w-lg p-4 bg-gradient-to-t from-[#ba0001] to-white shadow-md font-serif flex flex-col justify-between">
      <div>
        <div className="flex justify-between pb-4 border-bottom">
          <div className="flex items-center">
            <h2 className="text-base font-bold">
              Food Category:{" "}
              <span className=" text-red-900">{food_category}</span>
            </h2>
          </div>
          <h2 className="text-base font-bold">
            Quantity: <span className=" text-red-900">{quantity}</span>
          </h2>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src={food_image}
              alt=""
              className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <div className="text-white flex items-center text-2xl font-bold ">
              <span>{food_name}</span>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-xl font-semibold text-white">
              Origin: <span>{food_origin}</span>
            </p>
            <p className="text-xl font-semibold text-white">
              Price: $<span>{price_in_dollars}</span>
            </p>
            <p className="leadi text-white pt-3 text-lg">{food_description}</p>
          </div>
        </div>
      </div>
      <div className="  flex justify-end items-center gap-4 ">
        <h2 className="text-white">Wanna Know More?</h2>
        <Link to={`/singleFood/${_id}`}>
          <button className="bg-gray-300 p-2 rounded-full">
            <BsArrowRightShort />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FoodCard;
