import { Helmet } from "react-helmet";

import EstatesCard from "./EstatesCard";
// import Slider from "./Slider";
import { useLoaderData } from "react-router-dom";
import SwipperSlider from "./SwipperSlider";



const Home = () => {
    const estates = useLoaderData();
    return (
        <div>
            <Helmet>
                <title> Home Page</title>
            </Helmet>
            <div className="">
            <SwipperSlider></SwipperSlider>
            </div>
            {/* <Slider></Slider> */}
            <div className="text-center mt-10 mb-10">
                <h1 className="mb-5 text-[#030712] font-bold text-3xl">Our Categories</h1>
                <p className="md:w-[736px] lg:w-[736px] w-[500px] mx-auto">
                    Nestopia Real Estate Company, we specialize in turning houses into homes, and dreams into reality. Explore our listings and let us help you find your perfect nest
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    estates.map(estate => <EstatesCard key={estate.id} estate={estate}></EstatesCard>)
                }
            </div>

        </div>
    );
};

export default Home;