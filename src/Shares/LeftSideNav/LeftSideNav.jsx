import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// import "./LeftSideNav.css"

const LeftSideNav = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <div className="space-y-4">
      <h2 className="font-bold text-lg">All Category</h2>
      {category.map((item) => (
        <NavLink
          className="block ml-5"
          key={item.id}
          to="/category"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "black",
            };
          }}
        >
          {item.name}
        </NavLink>
      ))}
    </div>
  );
};

export default LeftSideNav;
