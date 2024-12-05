import React from "react";

const WhyChooseUs = () => {
    return (
        <div className="my-10 px-5 bg-gray-100 py-10 rounded-md shadow-md">
            <h2 className="text-3xl font-extrabold text-center mb-6">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                    <h3 className="text-xl font-bold text-[#47663B]/80">Simplified Process</h3>
                    <p className="text-gray-600 mt-2">
                        Our platform streamlines every step of the visa application process.
                    </p>
                </div>
                <div className="text-center">
                    <h3 className="text-xl font-bold text-[#47663B]/80">Real-Time Tracking</h3>
                    <p className="text-gray-600 mt-2">
                        Stay updated on your application status with live progress tracking.
                    </p>
                </div>
                <div className="text-center">
                    <h3 className="text-xl font-bold text-[#47663B]/80">24/7 Support</h3>
                    <p className="text-gray-600 mt-2">
                        Our support team is always available to answer your queries.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
