import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/authProvider';

const MyAddVisa = () => {
    const [visas, setVisas] = useState([]);
    const [selectedVisa, setSelectedVisa] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [updatedVisa, setUpdatedVisa] = useState({
        countryName: '',
        visaType: '',
        processingTime: '',
        fee: '',
        validity: '',
        applicationMethod: '',
    });
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (!user) {
            navigate('/login');
            return;
        }
        setLoading(true);
        fetch(`http://localhost:5000/myvisas/${user.email}`)
            .then(response => {
                if (!response.ok) {
                    if (response.status === 401) {
                        navigate('/login');
                    }
                    throw new Error('Failed to fetch visas');
                }
                return response.json();
            })
            .then(data => setVisas(data))
            .catch(error => console.error('Error fetching visas:', error))
            .finally(() => setLoading(false));
    }, [navigate, user]);

    const handleDelete = (id) => {
        const updatedVisas = visas.filter(visa => visa._id !== id);
        setVisas(updatedVisas);
        fetch(`http://localhost:5000/deletevisa/${id}`, { method: 'DELETE' })
            .then(response => {
                if (!response.ok) {
                    setVisas(visas);
                    throw new Error('Failed to delete visa');
                }
                alert('Visa deleted successfully!');
            })
            .catch(error => {
                console.error('Error deleting visa:', error);
                alert('Failed to delete visa. Please try again.');
            });
    };

    const handleUpdateClick = (visa) => {
        setSelectedVisa(visa);
        setUpdatedVisa({ ...visa });
        setIsModalOpen(true);
    };

    const handleUpdate = (event) => {
        event.preventDefault();
        console.log('Updated Visa Data:', updatedVisa); // Debugging: Check the updated data

        // Check for empty fields
        const missingFields = Object.entries(updatedVisa).filter(([key, value]) => !value.trim());
        if (missingFields.length > 0) {
            alert(`Missing required fields: ${missingFields.map(([key]) => key).join(', ')}`);
            return;
        }

        fetch(`http://localhost:5000/updatevisa/${selectedVisa._id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedVisa),
        })
            .then(async response => {
                if (!response.ok) {
                    const err = await response.json();
                    throw new Error(err.message || 'Failed to update visa');
                }
                return response.json();
            })
            .then(updatedData => {
                console.log('Response from server:', updatedData); // Use for debugging
                setVisas(visas.map(visa => visa._id === selectedVisa._id ? { ...visa, ...updatedVisa } : visa));
                setIsModalOpen(false);
                alert('Visa updated successfully!');
            })
            .catch(error => {
                console.error('Error updating visa:', error);
                alert(`Failed to update visa. ${error.message}`);
            });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUpdatedVisa(prev => ({ ...prev, [name]: value.trimStart() })); // Prevent leading spaces
    };

    return (
        <div className="my-add-visa-container">
            <h1 className="text-center text-2xl font-bold mb-4">My Added Visas</h1>
            {loading ? (
                <div className="text-center">Loading visas...</div>
            ) : (
                <div className="visa-cards grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {visas.map(visa => (
                        <div key={visa._id} className="card shadow-lg p-4 bg-white rounded-lg">
                            <img className="w-full h-40 object-cover rounded-t-lg" src={visa.countryImage} alt={visa.countryName} />
                            <div className="card-body">
                                <h2 className="font-bold text-lg">{visa.countryName}</h2>
                                <p><strong>Visa Type:</strong> {visa.visaType}</p>
                                <p><strong>Processing Time:</strong> {visa.processingTime}</p>
                                <p><strong>Fee:</strong> ${visa.fee}</p>
                                <p><strong>Validity:</strong> {visa.validity}</p>
                                <p><strong>Application Method:</strong> {visa.applicationMethod}</p>
                                <div className="buttons mt-4 flex justify-between">
                                    <button
                                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                        onClick={() => handleUpdateClick(visa)}
                                    >
                                        Update
                                    </button>
                                    <button
                                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                        onClick={() => handleDelete(visa._id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center overflow-y-auto">
                    <div className="bg-white p-6 rounded-lg w-96 max-h-screen overflow-y-auto">
                        <h2 className="text-xl font-bold mb-4">Update Visa Information</h2>
                        <form onSubmit={handleUpdate}>
                            {Object.keys(updatedVisa).map(key => (
                                <div className="mb-4" key={key}>
                                    <label htmlFor={key} className="block capitalize">{key}</label>
                                    <input
                                        type="text"
                                        id={key}
                                        name={key}
                                        value={updatedVisa[key]}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 p-2 rounded"
                                    />
                                </div>
                            ))}
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    className="bg-gray-400 text-white px-4 py-2 rounded mr-2"
                                    onClick={() => setIsModalOpen(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-4 py-2 rounded"
                                >
                                    Update Visa
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyAddVisa;
