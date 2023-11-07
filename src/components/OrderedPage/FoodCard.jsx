import { toast } from "react-toastify";

const FoodCard = ({ food, refetch }) => {
  const handleDelete = async () => {
    const res = await fetch(
      `https://assignment11-server-side-hazel.vercel.app/delete-purchase?id=${food?._id}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const data = await res.json();
    toast.success("Order Deleted Successfully");
    refetch();
  };
  return (
    <div className=" text-white font-serif text-lg bg-red-800 p-5 rounded-lg shadow-lg flex flex-col gap-5">
      <div>
        <h2>Food Name: {food?.foodName}</h2>
        <h2>food Price: ${food?.foodPrice}</h2>
        <h2>Purchased Quantity: {food?.quantity}</h2>
        <h2>Date of Purchase: {food?.date}</h2>
      </div>
      <div className="flex justify-end">
        <button
          onClick={handleDelete}
          className="bg-white px-5 py-2 rounded-lg border-red-900 border-2 text-red-800"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
