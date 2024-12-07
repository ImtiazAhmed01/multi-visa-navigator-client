import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/authProvider';

const MyAddVisa = () => {
    const [visas, setVisas] = useState([]);
    const [selectedVisa, setSelectedVisa] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    const { user } = useContext(AuthContext); // Get the current authenticated user

    useEffect(() => {
        if (!user) {
            navigate('/login'); // Redirect to login if no user is authenticated
            return;
        }
        fetch(`http://localhost:5000/myvisas/${user.uid}`)
            .then(async (response) => {
                if (response.status === 401) {
                    navigate('/login'); // Redirect if unauthorized
                }
                if (!response.ok) {
                    const text = await response.text();
                    throw new Error(`Failed to fetch visas: ${text}`);
                }
                return response.json();
            })
            .then(data => setVisas(data))
            .catch(error => console.error('Error fetching visas:', error));
    }, [navigate, user]);

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/deletevisa/${id}`, { method: 'DELETE' })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to delete visa');
                }
                setVisas(visas.filter(visa => visa._id !== id));
                alert('Visa deleted successfully!');
            })
            .catch(error => console.error('Error deleting visa:', error));
    };

    const handleUpdate = (updatedVisa) => {
        fetch(`http://localhost:5000/updatevisa/${selectedVisa._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedVisa),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to update visa');
                }
                setVisas(visas.map(visa => visa._id === selectedVisa._id ? { ...visa, ...updatedVisa } : visa));
                setIsModalOpen(false);
                alert('Visa updated successfully!');
            })
            .catch(error => console.error('Error updating visa:', error));
    };

    return (
        <div className="my-add-visa-container">
            <h1 className="text-center text-2xl font-bold mb-4">My Added Visas</h1>
            <div className="visa-cards grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {visas.map(visa => (
                    <div key={visa._id} className="card shadow-lg p-4 bg-white rounded-lg">
                        <img className="w-full h-40 object-cover rounded-t-lg" src={visa.countryImage} alt={visa.country} />
                        <div className="card-body">
                            <h2 className="font-bold text-lg">{visa.country}</h2>
                            <p><strong>Visa Type:</strong> {visa.visa_type}</p>
                            <p><strong>Processing Time:</strong> {visa.processing_time}</p>
                            <p><strong>Fee:</strong> ${visa.fee}</p>
                            <p><strong>Validity:</strong> {visa.validity}</p>
                            <p><strong>Application Method:</strong> {visa.application_method}</p>
                            <div className="buttons mt-4 flex justify-between">
                                <button
                                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                    onClick={() => { setSelectedVisa(visa); setIsModalOpen(true); }}
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

            {isModalOpen && selectedVisa && (
                <div className="modal fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="modal-content bg-white p-6 rounded-lg w-96">
                        <h2 className="text-xl font-bold mb-4">Update Visa</h2>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const formData = new FormData(e.target);
                                const updatedVisa = Object.fromEntries(formData.entries());
                                handleUpdate(updatedVisa);
                            }}
                        >
                            <input className="input mb-2 w-full" name="country" defaultValue={selectedVisa.country} placeholder="Country" required />
                            <input className="input mb-2 w-full" name="visa_type" defaultValue={selectedVisa.visa_type} placeholder="Visa Type" required />
                            <input className="input mb-2 w-full" name="processing_time" defaultValue={selectedVisa.processing_time} placeholder="Processing Time" required />
                            <input className="input mb-2 w-full" name="fee" type="number" defaultValue={selectedVisa.fee} placeholder="Fee" required />
                            <input className="input mb-2 w-full" name="validity" defaultValue={selectedVisa.validity} placeholder="Validity" required />
                            <input className="input mb-2 w-full" name="application_method" defaultValue={selectedVisa.application_method} placeholder="Application Method" required />
                            <div className="flex justify-between mt-4">
                                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" type="submit">
                                    Submit
                                </button>
                                <button
                                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                >
                                    Cancel
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
