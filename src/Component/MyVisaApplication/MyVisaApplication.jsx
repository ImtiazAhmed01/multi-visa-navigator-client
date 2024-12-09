import React, { useEffect, useState } from 'react';

const MyVisaApplications = ({ userEmail }) => {
    const [applications, setApplications] = useState([]);
    const [filteredApplications, setFilteredApplications] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                const response = await fetch(`https://multi-visa-navigator-server.vercel.app/myapplications/${userEmail}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch applications');
                }
                const result = await response.json();
                setApplications(result);
                setFilteredApplications(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchApplications();
    }, [userEmail]);

    const handleSearch = () => {
        if (searchTerm.trim() === '') {
            setFilteredApplications(applications); // Reset if search is empty
        } else {
            const filtered = applications.filter((app) =>
                app.countryName?.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredApplications(filtered);
        }
    };

    const handleCancel = async (applicationId) => {
        try {
            const response = await fetch(`https://multi-visa-navigator-server.vercel.app/deleteapplication/${applicationId}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to cancel application');
            }

            setApplications((prev) =>
                prev.filter((app) => app._id !== applicationId)
            );
            setFilteredApplications((prev) =>
                prev.filter((app) => app._id !== applicationId)
            );
        } catch (error) {
            console.error('Error canceling application:', error);
        }
    };

    if (loading) {
        return <div className="text-center text-xl text-red-600">Loading...</div>;
    }

    if (error) {
        return <div className="text-center text-xl text-red-600">Error: {error}</div>;
    }

    return (
        <div className="p-6 bg-green-50 rounded-lg shadow-lg">
            <h2 className="text-3xl text-green-600 text-center font-bold mb-6">My Visa Applications</h2>
            <div className="flex justify-center mb-6">
                <input
                    type="text"
                    placeholder="Search by country name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="input input-bordered w-64 mr-4"
                />
                <button
                    onClick={handleSearch}
                    className="btn btn-primary"
                >
                    Search
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredApplications.length === 0 ? (
                    <p className="text-center text-lg text-gray-500">No applications found.</p>
                ) : (
                    filteredApplications.map((application) => (
                        <div
                            key={application._id}
                            className="card w-full bg-white shadow-md border border-gray-200 rounded-lg hover:scale-105 transition-transform"
                        >
                            <figure>
                                <img
                                    src={application.countryImage}
                                    alt={application.countryName}
                                    className="w-full h-48 object-cover rounded-t-lg"
                                />
                            </figure>
                            <div className="card-body p-4">
                                <h3 className="card-title text-2xl text-green-600">{application.countryName}</h3>
                                <p className="text-sm text-gray-600">Visa Type: {application.visaType}</p>
                                <p className="text-sm text-gray-600">Processing Time: {application.processingTime} days</p>
                                <p className="text-sm text-gray-600">Fee: ${application.fee}</p>
                                <p className="text-sm text-gray-600">Validity: {application.validity}</p>
                                <p className="text-sm text-gray-600">Application Method: {application.applicationMethod}</p>
                                <p className="text-sm text-gray-600">Applied Date: {application.appliedDate}</p>
                                <p className="text-sm text-gray-600">Applicant: {application.firstName} {application.lastName}</p>

                                <p className="text-sm text-gray-600">Email: {application.userEmail}</p>
                                <div className="card-actions justify-end">
                                    <button
                                        onClick={() => handleCancel(application._id)}
                                        className="btn btn-error"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default MyVisaApplications;
