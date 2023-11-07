import { Helmet } from "react-helmet";
import Banner from "./Banner";
import TopFoods from "./TopFoods";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home-FlavorFrontiers</title>
      </Helmet>
      <Banner></Banner>
      <TopFoods></TopFoods>
    </div>
  );
};

export default Home;
