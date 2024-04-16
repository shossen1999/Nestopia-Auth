import { Helmet } from "react-helmet";
import Navbar from "../shared/Navbar/Navbar";
import EstatesCard from "./EstatesCard";
import Slider from "./Slider";
import {useLoaderData } from "react-router-dom";

const Home = () => {
    const estates=  useLoaderData();
    return (
        <div>
            <Helmet>
                <title> Home Page</title>
            </Helmet>
            <Navbar></Navbar>
            <Slider></Slider>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    estates.map(estate =><EstatesCard key={estate.id} estate={estate}></EstatesCard>)
                }
            </div>
        </div>
    );
};

export default Home;