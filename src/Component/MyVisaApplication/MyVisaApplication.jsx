import React, { useEffect, useState } from 'react';

const MyVisaApplications = ({ userEmail }) => {
    const [applications, setApplications] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                const response = await fetch(`/applications/${userEmail}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch applications');
                }
                const result = await response.json();
                setApplications(result);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchApplications();
    }, [userEmail]);

    const handleCancel = async (applicationId) => {
        try {
            const response = await fetch(`/deleteapplication/${applicationId}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to cancel application');
            }

            setApplications((prevApplications) => prevApplications.filter((app) => app._id !== applicationId));
        } catch (error) {
            console.error('Error canceling application:', error);
        }
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>My Visa Applications</h2>
            <div>
                {applications.length === 0 ? (
                    <p>No applications found.</p>
                ) : (
                    applications.map((application) => (
                        <div key={application._id} className="visa-application-card">
                            <img src={application.countryImage} alt={application.countryName} className="visa-image" />
                            <div>
                                <h3>{application.countryName}</h3>
                                <p>Visa Type: {application.visaType}</p>
                                <p>Processing Time: {application.processingTime} days</p>
                                <p>Fee: ${application.fee}</p>
                                <p>Validity: {application.validity}</p>
                                <p>Application Method: {application.applicationMethod}</p>
                                <p>Applied Date: {application.appliedDate}</p>
                                <p>Applicant: {application.firstName} {application.lastName}</p>
                                <p>Email: {application.email}</p>
                                <button onClick={() => handleCancel(application._id)}>Cancel</button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default MyVisaApplications;
