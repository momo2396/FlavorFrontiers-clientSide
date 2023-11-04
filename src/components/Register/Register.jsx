import { Link, useNavigate } from "react-router-dom";
import b1 from "../../assets/banner1.jpeg";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";
const Register = () => {
  const { createUser, setLoading, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const lengthRegex = /.{6,}/;
    const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;
    const uppercaseRegex = /[A-Z]/;
    const isLengthValid = lengthRegex.test(password);
    const hasSpecialChar = specialCharRegex.test(password);
    const hasUppercase = uppercaseRegex.test(password);
    if (!isLengthValid) {
      toast.error("Password must be of length >=6");
    }
    if (!hasSpecialChar) {
      toast.error("Password Must have one special character");
    }
    if (!hasUppercase) {
      toast.error("Password must have one capital letter");
    }
    if (!isLengthValid || !hasSpecialChar || !hasUppercase) return;
    createUser(email, password)
      .then(() => {
        updateUser({
          displayName: e.target.name.value,
          photoURL: e.target.image.value,
        })
          .then(() => {
            e.target.reset();
            toast.success("Successfully Registered");
            navigate("/profile");
          })
          .catch((error) => {
            e.target.reset();
            toast.error(
              error?.code?.split("/")[1]?.replaceAll("-", " ")?.toUpperCase()
            );
            navigate("/profile");
          });
      })
      .catch((error) => {
        toast.error(
          error?.code?.split("/")[1]?.replaceAll("-", " ")?.toUpperCase()
        );
      });
  };
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url("${b1}")` }}
    >
      <div className="hero min-h-screen bg-black text-white bg-opacity-80">
        <div className="gap-20 hero-content flex-col lg:flex-row w-full h-full">
          <div className="flex justify-center items-center w-full lg:w-1/2  text-center lg:text-left">
            <h1 className="text-5xl font-bold text-[#a294cd] font-serif">
              Register now!
            </h1>
          </div>
          <div className="card w-full lg:w-1/2 shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body text-black">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  type="text"
                  placeholder="image link"
                  name="image"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="flex sm:flex-row flex-col gap-5 form-control mt-6">
                <input
                  type="submit"
                  value="Register"
                  className="bg-gradient-to-t to-[#b40000] from-[#540000] border-[#540000] btn flex-1 text-white"
                />
                <Link
                  to="/login"
                  className="flex-1 text-[#540000] border-[#540000] border-2 btn bg-gradient-to-t hover:to-[#b40000] hover:from-[#540000] hover:text-white"
                >
                  {" "}
                  Already Have an Account?{" "}
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
