import React from 'react';
import { Link } from 'react-router';

const VisaCard = ({ visa }) => {
    const {
        countryImage,
        countryName,
        visaType,
        processingTime,
        fee,
        validity,
        applicationMethod
    } = visa;

    return (
        <div className="card bg-base-100 w-full border p-4 rounded-lg shadow-md hover:shadow-xl transition duration-200 ease-in-out">
            <figure>
                <img
                    src={countryImage}
                    alt={`Visa image for ${countryName}`}
                    className="w-full h-64 object-cover rounded-lg"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-xl font-bold">{countryName}</h2>
                <p><strong>Visa Type:</strong> {visaType}</p>
                <p><strong>Processing Time:</strong> {processingTime} day</p>
                <p><strong>Fee:</strong> ${fee}</p>  {/* Displaying the fee */}
                <p><strong>Validity:</strong> {validity}</p>  {/* Displaying the validity */}
                <p><strong>Application Method:</strong> {applicationMethod}</p>  {/* Displaying the application method */}
                <Link to={`/visa/${visa._id}`} className="btn btn-success">
                    See Details
                </Link>
            </div>
        </div>
    );
};

export default VisaCard;
