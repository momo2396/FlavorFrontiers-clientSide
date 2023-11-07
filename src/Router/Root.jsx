import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Root = () => {
  return (
    <div className="">
      <div className=" w-full flex flex-col justify-between">
        <Navbar></Navbar>
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
