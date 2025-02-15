// import React, { useState } from 'react';
// import { useLoaderData } from 'react-router-dom';

// const VisaDetails = () => {
//     const visa = useLoaderData();
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const handleApply = () => {
//         setIsModalOpen(true);
//     };

//     const handleModalClose = () => {
//         setIsModalOpen(false);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const formData = new FormData(e.target);
//         const data = Object.fromEntries(formData.entries());
//         console.log(data); // Send this data to the backend
//         setIsModalOpen(false); // Close the modal after submission
//     };

//     if (!visa) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div className="p-6">
//             <div className="bg-white p-6 rounded-lg shadow-md">
//                 <img
//                     src={visa.countryImage}
//                     alt={`Visa for ${visa.countryName}`}
//                     className="w-full h-64 object-cover rounded-lg mb-4"
//                 />
//                 <h1 className="text-3xl font-bold mb-2">{visa.countryName}</h1>
//                 <p><strong>Visa Type:</strong> {visa.visaType}</p>
//                 <p>Processing Time: {visa.processingTime} days</p>
//                 <p>Fee: ${visa.fee}</p>
//                 <p>Validity: {visa.validity}</p>
//                 <p>Application Method: {visa.applicationMethod}</p>
//                 <p className="mt-4">{visa.description}</p>

//                 <button className="btn btn-success mt-6" onClick={handleApply}>
//                     Apply for the Visa
//                 </button>
//             </div>

//             {isModalOpen && (
//                 <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//                     <div className="bg-white p-6 rounded-lg shadow-md">
//                         <h2 className="text-xl font-bold mb-4">Apply for the Visa</h2>
//                         <form onSubmit={handleSubmit}>
//                             <input
//                                 type="email"
//                                 name="email"
//                                 placeholder="Email"
//                                 className="input input-bordered w-full mb-4"
//                                 required
//                             />
//                             <input
//                                 type="text"
//                                 name="firstName"
//                                 placeholder="First Name"
//                                 className="input input-bordered w-full mb-4"
//                                 required
//                             />
//                             <input
//                                 type="text"
//                                 name="lastName"
//                                 placeholder="Last Name"
//                                 className="input input-bordered w-full mb-4"
//                                 required
//                             />
//                             <input
//                                 type="date"
//                                 name="appliedDate"
//                                 defaultValue={new Date().toISOString().split('T')[0]}
//                                 className="input input-bordered w-full mb-4"
//                                 required
//                                 readOnly
//                             />
//                             <input
//                                 type="text"
//                                 name="fee"
//                                 defaultValue={visa.fee}
//                                 className="input input-bordered w-full mb-4"
//                                 required
//                                 readOnly
//                             />
//                             <div className="flex justify-end">
//                                 <button
//                                     type="button"
//                                     className="btn btn-secondary mr-4"
//                                     onClick={handleModalClose}
//                                 >
//                                     Cancel
//                                 </button>
//                                 <button type="submit" className="btn btn-primary">
//                                     Apply
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default VisaDetails;

import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const VisaDetails = () => {
    const visa = useLoaderData();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleApply = () => {
        setIsModalOpen(true);
        setErrorMessage('');
        setSuccessMessage('');
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setErrorMessage('');
        setSuccessMessage('');
    };

    const handleSubmit = async () => {
        const form = document.getElementById('visaApplicationForm');
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        const applicationData = {
            ...data,
            visaId: visa._id,
            countryName: visa.countryName,
            countryImage: visa.countryImage,
            visaType: visa.visaType,
            processingTime: visa.processingTime,
            fee: visa.fee,
            validity: visa.validity,
            applicationMethod: visa.applicationMethod,
            appliedDate: new Date().toISOString().split('T')[0],
        };

        try {
            console.log('Submitting application:', applicationData);
            const response = await fetch('https://multi-visa-navigator-server.vercel.app/addapplication', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(applicationData),
            });

            if (!response.ok) {
                const errorResponse = await response.json();
                console.error('Error response:', errorResponse);
                throw new Error('Failed to submit visa application');
            }

            const result = await response.json();
            console.log('Application submitted successfully:', result);
            setSuccessMessage('Application submitted successfully!');
            setIsModalOpen(false);
        } catch (error) {
            setErrorMessage('Error submitting application. Please try again.');
            console.error('Error submitting application:', error);
        }
    };


    if (!visa) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <img
                    src={visa.countryImage}
                    alt={`Visa for ${visa.countryName}`}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h1 className="text-3xl font-bold mb-2">{visa.countryName}</h1>
                <p><strong>Visa Type:</strong> {visa.visaType}</p>
                <p>Processing Time: {visa.processingTime} days</p>
                <p>Fee: ${visa.fee}</p>
                <p>Validity: {visa.validity}</p>
                <p>Application Method: {visa.applicationMethod}</p>
                <p className="mt-4">{visa.description}</p>

                <button className="btn btn-success mt-6" onClick={handleApply}>
                    Apply for the Visa
                </button>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold mb-4">Apply for the Visa</h2>
                        <form id="visaApplicationForm">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="input input-bordered w-full mb-4"
                                required
                            />
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                className="input input-bordered w-full mb-4"
                                required
                            />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                className="input input-bordered w-full mb-4"
                                required
                            />
                            <input
                                type="date"
                                name="appliedDate"
                                defaultValue={new Date().toISOString().split('T')[0]}
                                className="input input-bordered w-full mb-4"
                                required
                                readOnly
                            />
                            <input
                                type="text"
                                name="fee"
                                defaultValue={visa.fee}
                                className="input input-bordered w-full mb-4"
                                required
                                readOnly
                            />
                            {errorMessage && (
                                <p className="text-red-500 mb-4">{errorMessage}</p>
                            )}
                            {successMessage && (
                                <p className="text-green-500 mb-4">{successMessage}</p>
                            )}
                        </form>
                        <div className="flex justify-end">
                            <button
                                type="button"
                                className="btn btn-secondary mr-4"
                                onClick={handleModalClose}
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={handleSubmit} // Call handleSubmit on click
                            >
                                Apply
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VisaDetails;
