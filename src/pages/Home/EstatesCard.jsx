import { Link } from "react-router-dom";


const EstatesCard = ({ estate }) => {
    const { id,segment_name, image, description, status, facilities } = estate;


    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{segment_name}</h2>
                <p>{description}</p>
                <p>{status}</p>
                <div className="flex gap-2" >
                    {facilities.map((facility, index) => (
                        <p key={index}>{facility}</p>
                    ))}
                </div >
                <div className="card-actions justify-end">
                    <Link to={`/estate/${id}`} className="btn btn-primary">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default EstatesCard;