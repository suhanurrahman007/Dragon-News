import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../ContextProvider/AuthProvider";

const Login = () => {
  const { loginUsers } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password")
        loginUsers(email, password)
          .then((result) => {
            console.log(result.user);
          })
          .catch((error) => {
            console.log(error);
          });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="card mx-auto mt-12 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <h2 className="text-center text-gray-700 text-3xl pt-5 font-extrabold ">
          Login Please
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
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
              name="password"
              placeholder="Password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
        <p className="text-center text-sm mb-7">
          Do not have an Account. Please{" "}
          <Link to={"/registration"} className="text-blue-700 font-bold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
