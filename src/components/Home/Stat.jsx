const Stat = () => {
  return (
    <div className="font-serif text-red-800 max-w-[1440px] mx-auto w-full my-10 px-5">
      <h3 className="font-serif  text-center text-3xl lg:text-4xl font-bold pb-5">
        Statistics
      </h3>
      <div className="py-10 stats stats-vertical lg:stats-horizontal shadow w-full">
        <div className="stat mx-auto w-fit text-center">
          <div className="text-red-800 stat-title text-2xl">
            Total Regular Customers
          </div>
          <div className="stat-value text-red-800 font-serif">3K+</div>
          <div className="text-red-800 stat-desc text-2xl">2018-2023</div>
        </div>

        <div className="text-red-800 stat mx-auto w-fit text-center">
          <div className="stat-title text-2xl text-red-800 ">
            Total Collaborative Brands
          </div>
          <div className="text-red-800 stat-value font-serif ">45+</div>
          <div className="text-red-800 stat-desc text-2xl">2018-2023</div>
        </div>

        <div className="text-red-800 stat mx-auto w-fit text-center">
          <div className="text-red-800 stat-title text-2xl">
            Registered Clients
          </div>
          <div className="stat-value font-serif">22K+</div>
          <div className="stat-desc text-2xl text-red-800">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
