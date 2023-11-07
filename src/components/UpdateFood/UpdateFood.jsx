import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateFood = () => {
  const [food, setFood] = useState(null);
  const location = useLocation();
  const { pathname } = location;
  const id = pathname.split("/").pop();

  useEffect(() => {
    axios
      .get(
        `https://assignment11-server-side-hazel.vercel.app/single-food?id=${id}`
      )
      .then((result) => {
        setFood(result?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;

    const food_name = form.food_name.value;
    const food_maker = form.food_maker.value;
    const food_maker_email = form.food_maker_email.value;
    const food_image = form.food_image.value;
    const price_in_dollars = form.price_in_dollars.value;
    const food_description = form.food_description.value;
    const making_processes = form.making_processes.value;
    const val = form.ingredients.value;
    const ingredients = val.split(",");
    console.log(ingredients);
    const quantity = parseInt(form.quantity.value);
    const food_category = form.food_category.value;
    const food_origin = form.food_origin.value;
    const updateFood = {
      food_name,
      food_maker,
      food_maker_email,
      food_image,
      price_in_dollars,
      food_description,
      making_processes,
      ingredients,
      quantity,
      food_category,
      food_origin,
    };
    fetch(
      `https://assignment11-server-side-hazel.vercel.app/update-food?id=${id}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updateFood),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "You updated the food!",
            icon: "success",
            confirmButtonText: "Close",
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: "You didn't updated the food!",
            icon: "error",
            confirmButtonText: "Close",
          });
        }
      });
  };
  return (
    <div className="px-5 py-10 bg-[#fef9f8] flex flex-col gap-5 justify-center items-center">
      <Helmet>
        <title>Update {food?.food_name}-FlavorFrontiers</title>
      </Helmet>
      <h3 className="text-4xl font-bold font-serif text-red-800">
        Update Food: {food?.food_name}
      </h3>
      <p className="text-lg font-thin font-serif text-red-800">
        Please, maintain the food authenticity
      </p>
      <div className="w-full lg:w-1/2 bg-red-800 p-3 shadow-2xl rounded-2xl">
        <div className="card w-full bg-base-100">
          <form onSubmit={handleUpdate} className="card-body text-black">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Food Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="food_name"
                defaultValue={food?.food_name}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Food Maker</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="food_maker"
                defaultValue={food?.food_maker}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Food Maker Email</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="food_maker_email"
                defaultValue={food?.food_maker_email}
                className="input input-bordered"
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Food Category</span>
              </label>
              <select
                type="text"
                name="food_category"
                className="select input input-bordered"
                defaultValue={food?.food_category}
              >
                <option value="Japanese">Japanese</option>
                <option value="Thai">Thai</option>
                <option value="Indian">Indian</option>
                <option value="Chinese">Chinese</option>
                <option value="Pasta">Pasta</option>
                <option value="Salad">Salad</option>
                <option value="Mexican">Mexican</option>
                <option value="Dessert">Dessert</option>
                <option value="Burger">Burger</option>
                <option value="Vietnamese">Vietnamese</option>
                <option value="BBQ">BBQ</option>
                <option value="Seafood">Seafood</option>
                <option value="USA">USA</option>
                <option value="Pizza">Pizza</option>
                <option value="Sushi">Sushi</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Food Origin</span>
              </label>
              <select
                type="text"
                name="food_origin"
                className="select input input-bordered"
                defaultValue={food?.food_origin}
                required
              >
                <option value="Japan">Japan</option>
                <option value="China">China</option>
                <option value="Mexico">Mexico</option>
                <option value="Thailand">Thailand</option>
                <option value="India">India</option>
                <option value="Italy">Italy</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Nepal">Nepal</option>
                <option value="USA">USA</option>
                <option value="France">France</option>
                <option value="Vietnam">Vietnam</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Image</span>
              </label>
              <input
                type="text"
                placeholder="image link"
                className="input input-bordered"
                name="food_image"
                defaultValue={food?.food_image}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price (in dollars)</span>
              </label>
              <input
                type="text"
                placeholder="product price (in dollar)"
                className="input input-bordered"
                name="price_in_dollars"
                defaultValue={food?.price_in_dollars}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <div className="flex flex-row gap-4">
                <input
                  type="number"
                  placeholder="quantity"
                  className="input input-bordered"
                  name="quantity"
                  defaultValue={food?.quantity}
                  required
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Food Description</span>
              </label>
              <textarea
                placeholder="short description"
                name="food_description"
                className="textarea textarea-bordered"
                defaultValue={food?.food_description}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Making Process</span>
              </label>
              <textarea
                placeholder="making process"
                name="making_processes"
                className="textarea textarea-bordered"
                defaultValue={food?.making_processes}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  Ingredients(comma separated with space; i.e.; Tomato, Chilli)
                </span>
              </label>
              <textarea
                placeholder="ingredients"
                name="ingredients"
                className="textarea textarea-bordered"
                defaultValue={food?.ingredients}
                required
              />
            </div>
            <div className="flex sm:flex-row flex-col gap-5 form-control mt-6">
              <input
                type="submit"
                value="Update Now"
                className="bg-[#a294cd] border-[#a294cd] hover:bg-[#a294cd] hover:border-[#a294cd] btn flex-1 text-[#ffe5de]"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateFood;
