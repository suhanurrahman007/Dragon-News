import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import ZoneOne from "../../assets/qZone1.png"
import ZoneTwo from "../../assets/qZone2.png";
import ZoneThree from "../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div className="space-y-3">
      <div className="space-y-4">
        <h2 className="font-bold">Login With</h2>
        <button className="btn w-full text-xs btn-outline btn-info">
          <span>
            <FaGoogle></FaGoogle>
          </span>
          Login With Google
        </button>
        <button className="btn w-full text-xs btn-outline btn-info">
          <span>
            <FaGithub></FaGithub>
          </span>
          Login With GitHub
        </button>
      </div>

      <div className="">
        <h2 className="font-bold my-4">Find Us On</h2>
        <button className="btn border rounded-b-none w-full text-xs btn-outline">
          <span>
            <FaFacebook></FaFacebook>
          </span>
          Facebook
        </button>
        <button className="btn rounded-t-none rounded-b-none border-x w-full text-xs btn-outline">
          <span>
            <FaTwitter></FaTwitter>
          </span>
          Twitter
        </button>
        <button className="btn rounded-t-none border w-full text-xs btn-outline">
          <span>
            <FaInstagram></FaInstagram>
          </span>
          Instagram
        </button>
      </div>

      <div className="space-y-5">
        <h2 className="font-bold my-5 mb-4">Find Us On</h2>
        <img src={ZoneOne} alt="" />
        <img src={ZoneTwo} alt="" />
        <img src={ZoneThree} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
