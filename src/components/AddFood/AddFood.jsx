import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet";
const AddFood = () => {
  const { user } = useContext(AuthContext);
  const handleAdd = (e) => {
    e.preventDefault();

    const form = e.target;

    const food_name = form.food_name.value;
    const food_origin = form.food_origin.value;
    const food_category = form.food_category.value;
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
    const count = 0;
    const newFood = {
      food_name,
      food_category,
      price_in_dollars,
      food_description,
      making_processes,
      ingredients,
      food_image,
      quantity,
      food_origin,
      food_maker,
      food_maker_email,
      count,
    };
    fetch("https://assignment11-server-side-hazel.vercel.app/all-foods", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newFood),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "You added the product!",
            icon: "success",
            confirmButtonText: "Cool",
          });
          e.target.reset();
          e.target.brand.value = null;
          e.target.type.value = null;
          e.target.rating.value = null;
        } else {
          Swal.fire({
            title: "Error!",
            text: "Product add failed!",
            icon: "error",
            confirmButtonText: "Close",
          });
        }
      });
  };
  const [food, setFood] = useState(null);
  return (
    <div className="px-5 py-10 flex flex-col gap-5 justify-center items-center">
      <Helmet>
        <title>Add a Food-FlavorFrontiers</title>
      </Helmet>
      <h3 className="text-4xl font-bold font-serif text-red-800">Add Food</h3>
      <p className="text-lg font-thin font-serif text-red-800">
        Please, maintain the food authenticity
      </p>
      <div className="w-full lg:w-1/2 bg-red-800 p-3 shadow-2xl hover:scale-90 duration-300 rounded-2xl">
        <div className="card w-full bg-base-100">
          <form onSubmit={handleAdd} className="card-body text-black">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Food Name</span>
              </label>
              <input
                type="text"
                placeholder="food_name"
                name="food_name"
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
                defaultValue={user?.displayName}
                className="input input-bordered"
                readOnly
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
                defaultValue={user?.email}
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
                placeholder="food origin"
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
                required
              />
            </div>
            <div className="flex sm:flex-row flex-col gap-5 form-control mt-6">
              <input
                type="submit"
                value="Add Now"
                className="bg-red-800 border-white hover:bg-white hover:border-red-800 btn flex-1 text-white hover:text-red-800"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddFood;
