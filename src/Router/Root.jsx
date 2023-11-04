import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Root = () => {
  return (
    <div>
      <div className="w-full overflow-x-hidden flex flex-col justify-between min-h-screen">
        <Navbar></Navbar>
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
