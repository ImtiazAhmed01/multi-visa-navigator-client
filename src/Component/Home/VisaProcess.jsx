import React from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";

const VisaProcess = () => {
    return (
        <div className="my-10 px-5">
            <h2 className="text-3xl font-bold text-center mb-6">Visa Application Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="flex flex-col items-center">
                    <div
                        id="step1"
                        className="w-16 h-16 flex items-center justify-center bg-purple-200 rounded-full"
                    >
                        <span className="text-2xl font-bold">1</span>
                    </div>
                    <h3 className="text-xl font-semibold mt-3">Check Requirements</h3>
                    <p className="text-center text-gray-600">
                        Find out the required documents and eligibility criteria for your visa.
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <div
                        id="step2"
                        className="w-16 h-16 flex items-center justify-center bg-purple-200 rounded-full"
                    >
                        <span className="text-2xl font-bold">2</span>
                    </div>
                    <h3 className="text-xl font-semibold mt-3">Submit Documents</h3>
                    <p className="text-center text-gray-600">
                        Upload your documents securely on our platform.
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <div
                        id="step3"
                        className="w-16 h-16 flex items-center justify-center bg-purple-200 rounded-full"
                    >
                        <span className="text-2xl font-bold">3</span>
                    </div>
                    <h3 className="text-xl font-semibold mt-3">Pay Fees</h3>
                    <p className="text-center text-gray-600">
                        Pay the applicable visa processing fees online.
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <div
                        id="step4"
                        className="w-16 h-16 flex items-center justify-center bg-purple-200 rounded-full"
                    >
                        <span className="text-2xl font-bold">4</span>
                    </div>
                    <h3 className="text-xl font-semibold mt-3">Track Application</h3>
                    <p className="text-center text-gray-600">
                        Monitor the progress of your visa application in real-time.
                    </p>
                </div>
            </div>
            <ReactTooltip anchorId="step1" content="Learn about required documents and specific eligibility criteria for your visa." />
            <ReactTooltip anchorId="step2" content="Upload all necessary documents securely to avoid delays." />
            <ReactTooltip anchorId="step3" content="Pay the processing fees through multiple secure payment options." />
            <ReactTooltip anchorId="step4" content="Keep an eye on your application's progress in real-time." />
        </div>
    );
};

export default VisaProcess;
