import moment from "moment/moment";
import logo from "../../assets/logo.png"
import Slider from "./Slider";
const Header = () => {
    return (
      <div className="flex flex-col justify-center items-center space-y-3 py-5">
        <img className="w-72 " src={logo} alt="" />
        <p className="text-xs text-gray-500">
          Journalism Without Fear or Favour
        </p>
        <p className="font-medium text-gray-600">
          {moment().format("dddd, MMMM D, YYYY")}
        </p>
        <Slider></Slider>
      </div>
    );
};

export default Header;