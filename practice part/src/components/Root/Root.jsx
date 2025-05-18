import { Outlet } from "react-router-dom";
import NavBar from "../Home/NavBar/NavBar";
import Footer from "../Home/Footer/Footer";

const Root = () => {
    return (
        <div className="max-w-[1440px] mx-auto">
            <NavBar/>
            <Outlet/>
            <Footer></Footer>
        </div>
    );
};

export default Root;