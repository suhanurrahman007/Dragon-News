import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import profile from "../../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../../ContextProvider/AuthProvider";

const Navbar = () => {
  const { user, logoutUsers } = useContext(AuthContext);
  const links = (
    <>
      <li id="navLink">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Home
        </NavLink>
      </li>

      <li id="navLink">
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          About
        </NavLink>
      </li>

      <li id="navLink">
        <NavLink
          to="/career"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Career
        </NavLink>
      </li>
    </>
  );
  const handleLogout = () => {
    logoutUsers()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="navbar">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow- rounded-box w-52"
          >
            {links}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end space-x-2">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src={profile} />
          </div>
        </label>
        {user ? (
          <button
            onClick={handleLogout}
            className=" btn-neutral rounded-lg text-xs px-7 py-3"
          >
            LogOut
          </button>
        ) : (
          <Link
            to={"/login"}
            className=" btn-neutral rounded-lg text-xs px-7 py-3"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
