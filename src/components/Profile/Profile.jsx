import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Helmet>
        <title>{user?.displayName?.split(" ")[0]}-FlavorFrontiers</title>
      </Helmet>
      <div className="flex flex-col justify-center items-center  pt-20 pb-40 gap-10">
        <p className="text-2xl lg:text-5xl font-bold">
          Hello,
          <br /> <span className="text-[#540000]">{user?.email}</span>
        </p>
        <p className="text-2xl lg:text-5xl font-bold">
          Welcome to your profile page..
        </p>
        <img src={user?.photoURL} alt="" />
      </div>
    </div>
  );
};

export default Profile;
