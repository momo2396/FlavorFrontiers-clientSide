import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../providers/AuthProvider";
const defaultStyle = "text-xl text-center px-5 py-1";
const activeStyle =
  "bg-clip-text text-transparent bg-gradient-to-r  to-[#b40000] from-[#540000] font-bold underline";
const Navbar = () => {
  const { user, logoutUser, dark, setDark } = useContext(AuthContext);

  const handleLogOut = () => {
    logoutUser()
      .then(() => toast.success("LOGGED OUT SUCCESSFULLY"))
      .catch((error) => {
        console.log(error);
      });
  };
  const l1 = (
    <>
      <NavLink
        className={({ isActive }) =>
          `${defaultStyle} ${isActive && activeStyle}`
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `${defaultStyle} ${isActive && activeStyle}`
        }
        to="/profile"
      >
        Profile
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `${defaultStyle} ${isActive && activeStyle}`
        }
        to="/addProduct"
      >
        Add Product
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `${defaultStyle} ${isActive && activeStyle}`
        }
        to="/myCart"
      >
        My cart
      </NavLink>
    </>
  );

  const l2 = (
    <>
      {!user && (
        <>
          <NavLink
            className={({ isActive }) =>
              `${defaultStyle} btn ${isActive && activeStyle}`
            }
            to="/login"
          >
            Login
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${defaultStyle} btn ${isActive && activeStyle}`
            }
            to="/register"
          >
            Register
          </NavLink>
        </>
      )}
    </>
  );

  return (
    <div className={`py-10 px-5 navbar`}>
      <div>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow ${
                !dark
                  ? "bg-base-200 text-base-content"
                  : "bg-base-content text-base-200"
              } rounded-box w-52`}
            >
              {l1}
            </ul>
          </div>
          <div className="flex flex-row gap-3">
            <Link
              to="/"
              className="flex items-center gap-3 font-bold normal-case text-3xl"
            >
              <p className="p-2 pl-3 text-5xl  bg-gradient-to-r to-[#b40000] from-[#540000] font-bold text-white rounded-l-2xl">
                FF
              </p>
              <div className="bg-clip-text text-transparent bg-gradient-to-r to-[#540000] from-[#b40000]">
                <p>Flavor</p>
                <p>Frontiers</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{l1}</ul>
      </div>
      <div className="flex flex-col lg:flex-row navbar-end  py-5 lg:py-0 gap-3">
        {l2}
      </div>
      {user && (
        <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
          <div className="flex flex-row justify-center items-center gap-5 ">
            <img
              className="w-10 h-10 rounded-full border-2 border-blue-500 p-0.5"
              src={user?.photoURL}
            />
            <div>{user?.displayName}</div>
          </div>
          <div>
            <button
              className="btn bg-[#a294cd] border-[#a294cd]"
              onClick={handleLogOut}
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
