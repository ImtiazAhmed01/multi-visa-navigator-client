// import React from 'react';

// const VisaCard = ({ visa }) => {
//     const { countryImage, countryName, VisaType, processingTime } = visa
//     return (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             <div
//                 className="border p-4 rounded-lg shadow-md hover:shadow-xl transition duration-200 ease-in-out"
//             >
//                 <div className="card bg-base-100 w-96 shadow-xl">
//                     <figure>
//                         <img
//                             src={countryImage}
//                             alt="Shoes" />
//                     </figure>
//                     <div className="card-body">
//                         <h2 className="card-title">Country Name: {countryName}</h2>
//                         <p>Visa Type: {VisaType}</p>
//                         <p>Visa Processing Time: {processingTime}</p>
//                         <div className="card-actions justify-end">
//                             <button className="btn btn-primary">Buy Now</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default VisaCard;



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
