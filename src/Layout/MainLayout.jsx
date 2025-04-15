
import { Outlet } from "react-router";
import Navbar from "../Shared/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div className="font-roboto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;