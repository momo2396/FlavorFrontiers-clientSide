import { Helmet } from "react-helmet";
import Banner from "./Banner";
import TopFoods from "./TopFoods";
import Stat from "./Stat";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home-FlavorFrontiers</title>
      </Helmet>
      <Banner></Banner>
      <TopFoods></TopFoods>
      <Stat></Stat>
    </div>
  );
};

export default Home;
