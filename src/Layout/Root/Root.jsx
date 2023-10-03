import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="mx-5 md:mx-20 font-poppins">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;