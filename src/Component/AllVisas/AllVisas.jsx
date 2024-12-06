import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import VisaCard from './VisaCard';

const AllVisas = () => {
    const visas = useLoaderData();
    const [selectedVisaType, setSelectedVisaType] = useState(''); // state to hold selected visa type

    // Handle filtering of visas based on the selected visa type
    const handleVisaTypeChange = (event) => {
        setSelectedVisaType(event.target.value);
    };

    // Filter visas based on selected visa type
    const filteredVisas = selectedVisaType
        ? visas.filter(visa => visa.visaType === selectedVisaType)
        : visas;

    // Get unique visa types for the dropdown
    const visaTypes = [...new Set(visas.map(visa => visa.visaType))];

    return (
        <div>
            <h1 className='text-5xl font-bold py-4 px-8'>
                Total Visas: <span className='text-green-600'>{filteredVisas.length}</span>
            </h1>

            {/* Dropdown for filtering visa types */}
            <div className="px-8 py-4">
                <label htmlFor="visaTypeFilter" className="text-lg font-semibold">Filter by Visa Type</label>
                <select
                    id="visaTypeFilter"
                    value={selectedVisaType}
                    onChange={handleVisaTypeChange}
                    className="ml-4 p-2 border rounded-md"
                >
                    <option value="">All Visa Types</option>
                    {visaTypes.map((visaType) => (
                        <option key={visaType} value={visaType}>
                            {visaType}
                        </option>
                    ))}
                </select>
            </div>

            {/* Container for Visa cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-16 py-6">
                {filteredVisas.map((visa) => (
                    <VisaCard key={visa._id} visa={visa} />
                ))}
            </div>
        </div>
    );
};

export default AllVisas;




// import React from 'react';
// import { useLoaderData, Link } from 'react-router-dom';

// const AllVisas = () => {
//     const visas = useLoaderData();

//     return (
//         <div>
//             <h1 className='text-5xl text-green-600 mb-4'>
//                 Total Visas: {visas.length}
//             </h1>

//             {/* Grid Layout */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                 {visas.map((visa) => (
//                     <div
//                         key={visa._id}
//                         className="border p-4 rounded-lg shadow-md hover:shadow-xl transition duration-200 ease-in-out"
//                     >
//                         <h2 className="text-xl font-semibold text-gray-800">{visa.name}</h2>
//                         <p className="text-gray-600">Country: {visa.country}</p>
//                         <p className="text-gray-600">Visa Type: {visa.type}</p>
//                         <p className="text-gray-600">Duration: {visa.duration}</p>

//                         {/* See Details Button */}
//                         <Link
//                             to={`/visas/${visa._id}`}
//                             className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
//                         >
//                             See Details
//                         </Link>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default AllVisas;
