import { Link } from "react-router-dom";

import { ImHome } from "react-icons/im";
import { MdCarRental, MdSell } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const EstatesCard = ({ estate }) => {
    const { id, segment_name, image, description, status, facilities,location } = estate;


    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img  src={image} className="rounded-2xl w-full h-[180px]" />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-bold">
                    <ImHome />   {segment_name}</h2>
                <p className="text-[16px]">{description}</p>
                <p>
                    <span className="ont-bold">Status: </span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                        {status === 'Rent' ? (
                            <><MdCarRental /> Rent</>
                        ) : (
                            <><MdSell /> Sale</>
                        )}
                    </span>
                </p>


                <div className="flex items-center gap-2">
                        <FaLocationDot />
                        <p>{location}</p>
                    </div>
                <div className="card-actions justify-end">
                    <Link to={`/estate/${id}`} className="btn btn-primary">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default EstatesCard;