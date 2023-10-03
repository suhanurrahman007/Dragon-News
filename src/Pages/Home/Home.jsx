import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import CenterSideNav from "../../Shares/CenterSideNav/CenterSideNav";
import LeftSideNav from "../../Shares/LeftSideNav/LeftSideNav";
import RightSideNav from "../../Shares/RightSideNav/RightSideNav";


const Home = () => {
  return (
    <div className="">
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 py-5">
        <div className="bg-slate-100 p-3">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="grid col-span-2 bg-slate-100 p-3">
          <CenterSideNav></CenterSideNav>
        </div>
        <div className="bg-slate-100 p-3">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
