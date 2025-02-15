// import React, { useState } from "react";
// import Swal from "sweetalert2";

// const AddVisa = () => {
//     const [visa, setVisa] = useState({
//         countryImage: "",
//         countryName: "",
//         visaType: "",
//         processingTime: "",
//         requiredDocuments: [],
//         description: "",
//         ageRestriction: "",
//         fee: "",
//         validity: "",
//         applicationMethod: "",
//     });

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;

//         if (type === "checkbox") {
//             if (checked) {
//                 setVisa({
//                     ...visa,
//                     requiredDocuments: [...visa.requiredDocuments, value],
//                 });
//             } else {
//                 setVisa({
//                     ...visa,
//                     requiredDocuments: visa.requiredDocuments.filter((doc) => doc !== value),
//                 });
//             }
//         } else {
//             setVisa({ ...visa, [name]: value });
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         fetch("https://multi-visa-navigator-server.vercel.app/addvisa", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(visa),
//         })
//             .then((res) => {
//                 if (!res.ok) {
//                     throw new Error("Failed to add visa");
//                 }
//                 return res.json();
//             })
//             .then((data) => {
//                 if (data.data && data.data.insertedId) { // Fix the property name to match MongoDB's response
//                     Swal.fire("Success!", "Visa has been added successfully!", "success");
//                     setVisa({
//                         countryImage: "",
//                         countryName: "",
//                         visaType: "",
//                         processingTime: "",
//                         requiredDocuments: [],
//                         description: "",
//                         ageRestriction: "",
//                         fee: "",
//                         validity: "",
//                         applicationMethod: "",
//                     });
//                 } else {
//                     throw new Error("Visa not added");
//                 }
//             })

//             .catch((error) => {
//                 console.error("Error:", error);
//                 Swal.fire("Error!", "Failed to add visa. Please try again.", "error");
//             });
//     };


//     return (
//         <div className="max-w-3xl mx-auto p-8 bg-green-50 rounded-lg shadow-lg my-4">
//             <h2 className="text-2xl font-bold text-green-700 text-center mb-6">
//                 Add Visa
//             </h2>
//             <form onSubmit={handleSubmit} className="space-y-4">
//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text text-green-800">Country Image (URL)</span>
//                     </label>
//                     <input
//                         type="url"
//                         name="countryImage"
//                         value={visa.countryImage}
//                         onChange={handleChange}
//                         placeholder="Enter image URL"
//                         className="input input-bordered w-full"
//                         required
//                     />
//                 </div>
//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text text-green-800">Country Name</span>
//                     </label>
//                     <input
//                         type="text"
//                         name="countryName"
//                         value={visa.countryName}
//                         onChange={handleChange}
//                         placeholder="Enter country name"
//                         className="input input-bordered w-full"
//                         required
//                     />
//                 </div>
//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text text-green-800">Visa Type</span>
//                     </label>
//                     <select
//                         name="visaType"
//                         value={visa.visaType}
//                         onChange={handleChange}
//                         className="select select-bordered w-full"
//                         required
//                     >
//                         <option value="">Select Type</option>
//                         <option value="Tourist Visa">Tourist Visa</option>
//                         <option value="Student Visa">Student Visa</option>
//                         <option value="Official Visa">Official Visa</option>
//                     </select>
//                 </div>
//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text text-green-800">Processing Time</span>
//                     </label>
//                     <input
//                         type="text"
//                         name="processingTime"
//                         value={visa.processingTime}
//                         onChange={handleChange}
//                         placeholder="e.g., 7-10 days"
//                         className="input input-bordered w-full"
//                         required
//                     />
//                 </div>
//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text text-green-800">Required Documents</span>
//                     </label>
//                     <div className="flex gap-4">
//                         <label className="flex items-center gap-2">
//                             <input
//                                 type="checkbox"
//                                 name="requiredDocuments"
//                                 value="Valid Passport"
//                                 onChange={handleChange}
//                                 className="checkbox checkbox-success"
//                             />
//                             <span>Valid Passport</span>
//                         </label>
//                         <label className="flex items-center gap-2">
//                             <input
//                                 type="checkbox"
//                                 name="requiredDocuments"
//                                 value="Visa Application Form"
//                                 onChange={handleChange}
//                                 className="checkbox checkbox-success"
//                             />
//                             <span>Visa Application Form</span>
//                         </label>
//                         <label className="flex items-center gap-2">
//                             <input
//                                 type="checkbox"
//                                 name="requiredDocuments"
//                                 value="Recent Passport-Sized Photograph"
//                                 onChange={handleChange}
//                                 className="checkbox checkbox-success"
//                             />
//                             <span>Recent Passport-Sized Photograph</span>
//                         </label>
//                     </div>
//                 </div>
//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text text-green-800">Description</span>
//                     </label>
//                     <textarea
//                         name="description"
//                         value={visa.description}
//                         onChange={handleChange}
//                         placeholder="Provide a description..."
//                         className="textarea textarea-bordered w-full"
//                         required
//                     />
//                 </div>
//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text text-green-800">Age Restriction</span>
//                     </label>
//                     <input
//                         type="number"
//                         name="ageRestriction"
//                         value={visa.ageRestriction}
//                         onChange={handleChange}
//                         placeholder="Enter minimum age"
//                         className="input input-bordered w-full"
//                         required
//                     />
//                 </div>
//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text text-green-800">Fee</span>
//                     </label>
//                     <input
//                         type="number"
//                         name="fee"
//                         value={visa.fee}
//                         onChange={handleChange}
//                         placeholder="Enter visa fee"
//                         className="input input-bordered w-full"
//                         required
//                     />
//                 </div>
//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text text-green-800">Validity</span>
//                     </label>
//                     <input
//                         type="text"
//                         name="validity"
//                         value={visa.validity}
//                         onChange={handleChange}
//                         placeholder="e.g., 6 months"
//                         className="input input-bordered w-full"
//                         required
//                     />
//                 </div>
//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text text-green-800">Application Method</span>
//                     </label>
//                     <input
//                         type="text"
//                         name="applicationMethod"
//                         value={visa.applicationMethod}
//                         onChange={handleChange}
//                         placeholder="e.g., Online, Embassy"
//                         className="input input-bordered w-full"
//                         required
//                     />
//                 </div>
//                 <button
//                     type="submit"
//                     className="btn btn-success w-full mt-4"
//                 >
//                     Add Visa
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default AddVisa;

import React, { useState, useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/authProvider";

const AddVisa = () => {
    const { user } = useContext(AuthContext); // Access the authenticated user
    const [visa, setVisa] = useState({
        countryImage: "",
        countryName: "",
        visaType: "",
        processingTime: "",
        requiredDocuments: [],
        description: "",
        ageRestriction: "",
        fee: "",
        validity: "",
        applicationMethod: "",
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            if (checked) {
                setVisa({
                    ...visa,
                    requiredDocuments: [...visa.requiredDocuments, value],
                });
            } else {
                setVisa({
                    ...visa,
                    requiredDocuments: visa.requiredDocuments.filter((doc) => doc !== value),
                });
            }
        } else {
            setVisa({ ...visa, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Include the user email in the visa data
        const visaWithUserEmail = { ...visa, userEmail: user?.email };

        fetch("https://multi-visa-navigator-server.vercel.app/addvisa", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(visaWithUserEmail),
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to add visa");
                }
                return res.json();
            })
            .then((data) => {
                if (data.data && data.data.insertedId) {
                    Swal.fire("Success!", "Visa has been added successfully!", "success");
                    setVisa({
                        countryImage: "",
                        countryName: "",
                        visaType: "",
                        processingTime: "",
                        requiredDocuments: [],
                        description: "",
                        ageRestriction: "",
                        fee: "",
                        validity: "",
                        applicationMethod: "",
                    });
                } else {
                    throw new Error("Visa not added");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                Swal.fire("Error!", "Failed to add visa. Please try again.", "error");
            });
    };

    return (
        <div className="max-w-3xl mx-auto p-8 bg-green-50 rounded-lg shadow-lg my-4">
            <h2 className="text-2xl font-bold text-green-700 text-center mb-6">Add Visa</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-green-800">Country Image (URL)</span>
                    </label>
                    <input
                        type="url"
                        name="countryImage"
                        value={visa.countryImage}
                        onChange={handleChange}
                        placeholder="Enter image URL"
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-green-800">Country Name</span>
                    </label>
                    <input
                        type="text"
                        name="countryName"
                        value={visa.countryName}
                        onChange={handleChange}
                        placeholder="Enter country name"
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-green-800">Visa Type</span>
                    </label>
                    <select
                        name="visaType"
                        value={visa.visaType}
                        onChange={handleChange}
                        className="select select-bordered w-full"
                        required
                    >
                        <option value="">Select Type</option>
                        <option value="Tourist Visa">Tourist Visa</option>
                        <option value="Student Visa">Student Visa</option>
                        <option value="Official Visa">Official Visa</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-green-800">Processing Time</span>
                    </label>
                    <input
                        type="text"
                        name="processingTime"
                        value={visa.processingTime}
                        onChange={handleChange}
                        placeholder="e.g., 7-10 days"
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-green-800">Required Documents</span>
                    </label>
                    <div className="flex gap-4">
                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                name="requiredDocuments"
                                value="Valid Passport"
                                onChange={handleChange}
                                className="checkbox checkbox-success"
                            />
                            <span>Valid Passport</span>
                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                name="requiredDocuments"
                                value="Visa Application Form"
                                onChange={handleChange}
                                className="checkbox checkbox-success"
                            />
                            <span>Visa Application Form</span>
                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                name="requiredDocuments"
                                value="Recent Passport-Sized Photograph"
                                onChange={handleChange}
                                className="checkbox checkbox-success"
                            />
                            <span>Recent Passport-Sized Photograph</span>
                        </label>
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-green-800">Description</span>
                    </label>
                    <textarea
                        name="description"
                        value={visa.description}
                        onChange={handleChange}
                        placeholder="Provide a description..."
                        className="textarea textarea-bordered w-full"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-green-800">Age Restriction</span>
                    </label>
                    <input
                        type="number"
                        name="ageRestriction"
                        value={visa.ageRestriction}
                        onChange={handleChange}
                        placeholder="Enter minimum age"
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-green-800">Fee</span>
                    </label>
                    <input
                        type="number"
                        name="fee"
                        value={visa.fee}
                        onChange={handleChange}
                        placeholder="Enter visa fee"
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-green-800">Validity</span>
                    </label>
                    <input
                        type="text"
                        name="validity"
                        value={visa.validity}
                        onChange={handleChange}
                        placeholder="e.g., 6 months"
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-green-800">Application Method</span>
                    </label>
                    <input
                        type="text"
                        name="applicationMethod"
                        value={visa.applicationMethod}
                        onChange={handleChange}
                        placeholder="e.g., Online, Embassy"
                        className="input input-bordered w-full"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-success w-full mt-4">
                    Add Visa
                </button>
            </form>
        </div>
    );
};

export default AddVisa;
