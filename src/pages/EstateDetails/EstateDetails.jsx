import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";

const EstateDetails = () => {
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
            <Navbar />
            {estate && ( 
                <div>
                    <h2 className="text-3xl">{estate.estate_title}</h2>
                    <img src={estate.image} alt={estate.estate_title} />
                    <p>{estate.description}</p>
                    <p>Price: {estate.price}</p>
                    <p>Status: {estate.status}</p>
                    <p>Area: {estate.area}</p>
                    <p>Location: {estate.location}</p>
                    <h4>Facilities:</h4>
                    <ul>
                        {estate.facilities.map((facility, index) => (
                            <li key={index}>{facility}</li>
                        ))}
                    </ul>
                   <Link to="/"><button className="btn btn-secondary">Go Back to Home</button></Link>
                </div>
            )}
        </div>
    );
};

export default EstateDetails;
