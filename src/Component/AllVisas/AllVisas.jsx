import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import VisaCard from './VisaCard';
import { ClipLoader } from 'react-spinners';

const AllVisas = () => {
    const visas = useLoaderData();
    const [selectedVisaType, setSelectedVisaType] = useState('');
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        if (visas) {
            setLoading(false);
        }
    }, [visas]);


    const handleVisaTypeChange = (event) => {
        setSelectedVisaType(event.target.value);
    };


    const filteredVisas = selectedVisaType
        ? visas.filter(visa => visa.visaType === selectedVisaType)
        : visas;


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

            {/* Loading Spinner */}
            {loading ? (
                <div className="flex justify-center items-center py-10">
                    <ClipLoader color="#36d7b7" loading={loading} size={50} />
                </div>
            ) : (
                // Container for Visa cards
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-16 py-6">
                    {filteredVisas.map((visa) => (
                        <VisaCard key={visa._id} visa={visa} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllVisas;
