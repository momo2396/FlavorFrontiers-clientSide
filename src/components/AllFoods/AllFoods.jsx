import Search from "./Search";
import FoodCard from "./FoodCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";

const AllFoods = () => {
  const [foods, setFoods] = useState([]);
  const [filter, setFilter] = useState("");
  const [searchFood, setSearchFood] = useState("");
  const [curPage, setCurPage] = useState(0);
  const [pages, setPages] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://assignment11-server-side-hazel.vercel.app/all-foods-no-condition`
      )
      .then((result) => {
        const len = result?.data?.length;
        const size = 9;
        const num = Math.ceil(len / size);
        const page = [...Array(num).keys()];
        setPages(page);
      });
  });
  useEffect(() => {
    axios
      .get(
        `https://assignment11-server-side-hazel.vercel.app/all-foods?category=${filter}&page=${curPage}`
      )
      .then((result) => {
        console.log(result.data);

        if (searchFood) {
          const match = result?.data?.filter((f) =>
            f?.food_name?.toLowerCase().includes(searchFood?.toLowerCase())
          );
          setFoods(match);
        } else setFoods(result?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [filter, searchFood, curPage]);
  return (
    <div>
      <Helmet>
        <title>Our Foods-FlavorFrontiers</title>
      </Helmet>
      <Search setFilter={setFilter} setSearchFood={setSearchFood}></Search>
      {foods?.length > 0 && (
        <h3 className="max-w-[1440px] lg:mx-auto px-5 text-center pt-10 text-red-900 font-bold font-serif text-5xl">
          Our Foods
        </h3>
      )}
      {foods?.length > 0 ? (
        <div className="max-w-[1440px] lg:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 py-20">
          {foods?.map((food) => (
            <FoodCard key={food?._id} food={food}></FoodCard>
          ))}
        </div>
      ) : (
        <div className="pb-56  pt-32 max-w-[1440px] lg:mx-auto px-5 text-center  text-red-900 font-bold font-serif text-5xl">
          <p>No food found.........</p>
        </div>
      )}
      <div className="flex flex-row justify-center items-center gap-5  px-5 max-w-[1440px] lg:mx-auto">
        <button
          className="btn"
          onClick={() => setCurPage((prev) => (prev !== 0 ? prev - 1 : prev))}
        >
          prev
        </button>
        {pages?.map((p) => (
          <button
            onClick={() => setCurPage(p)}
            className={curPage === p ? "bg-red-800 text-white btn" : "btn"}
            key={p}
          >
            {p}
          </button>
        ))}
        <button
          className="btn"
          onClick={() =>
            setCurPage((prev) => (prev < pages?.length - 1 ? prev + 1 : prev))
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default AllFoods;
