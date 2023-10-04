import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

const Registration = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="card mx-auto mt-12 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <h2 className="text-center text-gray-700 text-3xl pt-5 font-extrabold ">
          Please Registration
        </h2>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="name"
              name="name"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="photo"
              name="photo"
              placeholder="Photo"
              className="input input-bordered"
              
            />
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
          Already have an Account. Please{" "}
          <Link to={"/login"} className="text-blue-700 font-bold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
