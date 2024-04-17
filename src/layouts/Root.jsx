
import {Outlet} from "react-router-dom"
import Navbar from "../pages/shared/Navbar/Navbar";
import Footer from "../pages/Footer/Footer";

const Root = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto font-poppins">
            <Navbar></Navbar>
             <Outlet></Outlet>
        </div>
        <Footer></Footer>
        </div>
       
    );
};

export default Root;