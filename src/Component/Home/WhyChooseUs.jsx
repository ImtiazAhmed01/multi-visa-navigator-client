import React from "react";
import { useTypewriter } from "react-simple-typewriter";

const WhyChooseUs = ({ darkMode }) => {
    const { text } = useTypewriter({
        words: ["Simplified Process", "Real-Time Tracking", "24/7 Support"],
        loop: 0, // Typewriter effect will stop after completing all words
        typeSpeed: 100, // Adjust typing speed
        deleteSpeed: 50, // Adjust delete speed
        delaySpeed: 2000, // Delay between typing and deleting words
    });

    return (
        <div className={darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"}>
            <div className={`my-10 px-5 ${darkMode ? "bg-gray-900" : "bg-gray-100"} py-10 rounded-md shadow-md`}>
                <h2 className="text-3xl font-extrabold text-center mb-6">Why Choose Us?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                        <h3 className="text-xl font-bold" style={{ color: darkMode ? "#A3E635" : "#47663B" }}>
                            {text} {/* Use typewriter text */}
                        </h3>
                        <p className={darkMode ? "text-gray-300" : "text-gray-600"} mt-2>
                            Our platform streamlines every step of the visa application process.
                        </p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl font-bold" style={{ color: darkMode ? "#A3E635" : "#47663B" }}>
                            {text} {/* Use typewriter text */}
                        </h3>
                        <p className={darkMode ? "text-gray-300" : "text-gray-600"} mt-2>
                            Stay updated on your application status with live progress tracking.
                        </p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl font-bold" style={{ color: darkMode ? "#A3E635" : "#47663B" }}>
                            {text} {/* Use typewriter text */}
                        </h3>
                        <p className={darkMode ? "text-gray-300" : "text-gray-600"} mt-2>
                            Our support team is always available to answer your queries.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
