import { useEffect, useState } from 'react';
import img4 from '../../assets/img4.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        Aos.init({ duration: 2000, disable: 'mobile' });
    }, []);

    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    return (
        <div>
            <div className='flex flex-col md:flex-row lg:flex-row gap-5'>
                <div className='md:w-[40%] lg:w-[40%]' data-aos='fade-left'>
                    <img className='p-2' src={img4} alt='About' />
                </div>
                <div className='md:w-[60%] lg:w-[60%] p-14 text-lg md:text-xl lg:text-xl' data-aos='fade-right'>
                    <p>
                        {expanded
                            ? "Nestopia Real Estate Company is your trusted partner in finding the perfect home. Our diverse portfolio includes single-family homes, townhouses, apartments, student housing, senior living communities, and vacation rentals. With a commitment to excellence, we provide personalized service and expert guidance to ensure a seamless experience. Whether you're seeking comfort, convenience, or luxury, Nestopia offers tailored solutions to meet your needs. Let us help you turn your dream of home ownership into reality.Nestopia Real Estate Company is more than just a brokerage – it's a trusted partner in your journey to find the perfect home. Our team is dedicated to understanding your unique preferences and needs, ensuring that we match you with a property that truly feels like home. With a focus on integrity and transparency, we strive to exceed client expectations by providing unparalleled service and support throughout the home buying process. "
                            : "Nestopia Real Estate Company is your trusted partner in finding the perfect home. Our diverse portfolio includes single-family homes, townhouses, apartments, student housing, senior living communities, and vacation rentals. With a commitment to excellence"
                        }
                    </p>
                    {!expanded && (
                        <button
                            onClick={handleToggle}
                            className='text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out transform hover:scale-105'
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
