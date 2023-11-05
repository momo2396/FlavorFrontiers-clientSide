import axios from "axios";
import { useEffect, useState } from "react";
import { LiaSearchSolid } from "react-icons/lia";

const Search = ({ setFilter, setSearchFood }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://assignment11-server-side-hazel.vercel.app/get-categories")
      .then((result) => {
        console.log(result.data);
        setCategories(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="bg-gradient-to-t  to-[#b40000] from-[#540000] py-5 rounded-lg lg:rounded-none px-5  mx-5 flex flex-col lg:flex-row gap-5 justify-between items-center   max-w-[1440px] lg:mx-auto">
      <div className="text-3xl font-bold font-serif text-white">
        Search Your Foods...
      </div>
      <div className="join ">
        <div>
          <div>
            <input
              onChange={(e) => setSearchFood(e.target.value)}
              className="w-[150px] md:w-[250px] input input-bordered join-item"
              placeholder="Search Food By Name"
            />
          </div>
        </div>
        <select
          onChange={(e) => setFilter(e.target.value)}
          className=" select select-bordered join-item"
        >
          <option value={""} selected>
            All
          </option>
          {/* <option>Sci-fi</option>
          <option>Drama</option>
          <option>Action</option> */}
          {/* {categories.map((c) => {
            <option>{c}</option>;
          })} */}
          {categories.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>
        {/* <div className="indicator">
          <button className="btn join-item text-xl">
            <LiaSearchSolid />
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Search;
