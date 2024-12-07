import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LatestVisaSection = ({ darkMode }) => {
    const [visas, setVisas] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:5000/getlatestvisas")
            .then((res) => res.json())
            .then((data) => setVisas(data))
            .catch((error) => console.error("Error fetching visas:", error));
    }, []);

    return (
        <div className="mt-8">
            <h1 className="text-2xl font-bold mb-4 text-center">Latest Visa Updates</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {visas.map((visa) => (
                    <div
                        key={visa._id}
                        className={`p-4 rounded-lg ${darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
                            }`}
                    >
                        {/* Ensure the country_image is a valid URL */}
                        <img
                            src={visa.countryImage}
                            alt=''
                            className="w-full h-48 object-cover mb-4"
                        />
                        <h2 className="text-xl font-bold">{visa.countryName}</h2>
                        <p>
                            <strong>Visa Type:</strong> {visa.visaType}
                        </p>
                        <p>
                            <strong>Processing Time:</strong> {visa.processingTime}
                        </p>
                        <p>
                            <strong>Fee:</strong> {visa.fee}
                        </p>
                        <p>
                            <strong>Validity:</strong> {visa.validity}
                        </p>
                        <p>
                            <strong>Application Method:</strong> {visa.applicationMethod}
                        </p>
                        <button
                            onClick={() => navigate(`/visa/${visa._id}`)}
                            className="mt-4 px-4 py-2 btn btn-success rounded"
                        >
                            See Details
                        </button>
                    </div>
                ))}
            </div>
            <div className="text-center mt-4">
                <button className="px-6 py-2 bg-green-500 text-white rounded">
                    See All Visas
                </button>
            </div>
        </div>
    );
};

export default LatestVisaSection;
