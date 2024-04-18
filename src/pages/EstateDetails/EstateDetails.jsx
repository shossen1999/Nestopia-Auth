import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { ImHome } from "react-icons/im";
import { MdCarRental, MdSell } from "react-icons/md";
import { FaArtstation, FaChartArea, FaLocationDot } from "react-icons/fa6";
import { Helmet } from "react-helmet";
import Aos from 'aos'
import 'aos/dist/aos.css'
const EstateDetails = () => {
    useEffect(()=>{
        Aos.init({duration:2000,disable: 'mobile'})
      },[])
    const { id } = useParams();
    const [estate, setEstate] = useState(null);


    useEffect(() => {
        const fetchEstateData = async () => {
            try {
                const response = await fetch('/estates.json');
                const data = await response.json();
                const foundEstate = data.find(item => item.id === parseInt(id));
                setEstate(foundEstate);
            } catch (error) {
                console.error('Error fetching estate data:', error);
            }
        };

        fetchEstateData();
    }, [id]);
    

    return (
        <div>
            <Helmet>
                <title>Estate Details</title>
            </Helmet>

            {estate && (
                <div className="flex flex-col md:flex-row lg:flex-row gap-10">

                    <div className="md:w-[40%] lg:w-[40%]" >
                        <img className="p-5 rounded-[20px] h-full" data-aos="right"  src={estate.image} alt={estate.estate_title} />
                    </div>
                    <div className="p-10 md:p-5 lg:p-5  flex flex-col space-y-2 " data-aos="fade-left">
                        <h2 className="text-3xl font-bold">{estate.estate_title}</h2>
                        <div className="flex gap-2 items-center text-[20px] " >
                            <ImHome />
                            <p>{estate.segment_name}</p>
                        </div>
                        <p className="text-[18px] "><span className="font-bold text-[16px]">Description: </span>{estate.description}</p>
                        <p><span className="font-bold text-[16px]">Price: </span> {estate.price}</p>
                        <p>
                            <span className="font-bold">Status: </span>
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                                {estate.status === 'Rent' ? (
                                    <><MdCarRental /> Rent</>
                                ) : (
                                    <><MdSell /> Sale</>
                                )}
                            </span>
                        </p>

                        <div className="flex gap-2">
                            <div className="flex items-center gap-2">
                                <FaChartArea />
                                <p className="font-bold">Area: </p>
                            </div>
                            <p>{estate.area}</p>
                        </div>

                        <div className="flex gap-2 ">
                            <div className="flex items-center gap-2">
                                <FaLocationDot />
                                <p className="font-bold">Location: </p>
                            </div>
                            <p>{estate.location}</p>
                        </div>
                      
                        <div>
                            <div className="flex items-center gap-2">
                                <FaArtstation />
                                <h4>Facilities:</h4>
                            </div>
                            
                            <div className="flex flex-col space-y-2">
                                    {estate.facilities.map((facility, index) => (
                                        <li key={index}>{facility}</li>
                                    ))}
                               
                            </div>

                        </div>
                        <Link to="/"><button className="btn btn-primary">Go Back to Home</button></Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EstateDetails;
