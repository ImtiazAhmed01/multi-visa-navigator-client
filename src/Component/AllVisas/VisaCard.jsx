import React from 'react';
import { Link } from 'react-router';

const VisaCard = ({ visa }) => {
    const { countryImage, countryName, visaType, processingTime } = visa;

    return (

        <div className="card bg-base-100 w-full border p-4 rounded-lg shadow-md hover:shadow-xl transition duration-200 ease-in-out">
            <figure>
                <img
                    src={countryImage}
                    alt={`Visa image for ${countryName}`}
                    className="w-full h-64 object-cover rounded-lg"
                />
            </figure>
            <div className="card-body ">
                <h2 className="card-title text-xl font-bold">{countryName}</h2>
                <p>Visa Type: {visaType}</p>
                <p>Processing Time: {processingTime} day</p>
                <Link to={`/visa/${visa._id}`} className="btn btn-success">
                    See Details
                </Link>

            </div>
        </div>

    );
};

export default VisaCard;