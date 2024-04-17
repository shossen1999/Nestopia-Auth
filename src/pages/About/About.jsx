import  { useState } from 'react';
import img4 from '../../assets/img4.jpg';

const About = () => {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    return (
        <div>
            <div className='flex flex-col md:flex-row lg:flex-row gap-10'>
                <div className='w-[40%]'>
                   <img className='p-2' src={img4} alt="" />
                </div>
                <div className='w-[60%] p-14 text-[18px] '>
                    <p>
                        {expanded
                            ? "Nestopia Real Estate Company is your trusted partner in finding the perfect home. Our diverse portfolio includes single-family homes, townhouses, apartments, student housing, senior living communities, and vacation rentals. With a commitment to excellence, we provide personalized service and expert guidance to ensure a seamless experience. Whether you're seeking comfort, convenience, or luxury, Nestopia offers tailored solutions to meet your needs. Let us help you turn your dream of home ownership into reality."
                            : 
                            "Nestopia Real Estate Company is your trusted partner in finding the perfect home. Our diverse portfolio includes single-family homes, townhouses, apartments, student housing, senior living communities, and vacation rentals. With a commitment to excellence"
                        }
                    </p>
                    {!expanded && (
                        <button
                            onClick={handleToggle}
                            className="text-blue-500 hover:text-blue-700"
                        >
                            Read More
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default About;
