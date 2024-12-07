// import React, { useState } from 'react';
// import slider1Image from "../../../src/assets/flat-travel-background-tourism-visa-260nw-279542630.jpg";
// import slider2Image from "../../../src/assets/analysis-data-process-target-business-260nw-503682529.jpg";
// import slider3Image from "../../../src/assets/man-using-virtual-touch-screen-260nw-2336775113.jpg";
// import slider4Image from "../../../src/assets/visa-application-approved-stamp-passport-260nw-2214866597.jpg";
// import WhyChooseUs from './WhyChooseUs';
// import VisaProcess from './VisaProcess';
// import LatestVisaSection from './LatestVisaSection';

// const Home = () => {
//     const [darkMode, setDarkMode] = useState(false);

//     const toggleTheme = () => {
//         setDarkMode(!darkMode);
//     };

//     return (
//         <div className={darkMode ? "bg-black text-white" : "bg-white text-black"}>

//             <div className='md:px-14 lg:px-32 py-4'>
//                 <div>
//                     <button
//                         onClick={toggleTheme}
//                         className={`px-4 py-2 rounded-md ${darkMode ? "bg-gray-200 text-black" : "bg-gray-800 text-white"}`}
//                     >
//                         {darkMode ? "Light Mode" : "Dark Mode"}
//                     </button>
//                 </div>

//                 {/* Slider Section */}
//                 <div className="carousel w-full">
//                     <div id="slide1" className="carousel-item relative w-full">
//                         <img src={slider1Image}
//                             className="w-full h-[500px] object-contain" />
//                         <div className="absolute text-center inset-x-0 bottom-8 bg-opacity-70 bg-black text-white py-4 px-6">
//                             <h2 className="text-xl font-bold">Explore Seamless Visa Applications</h2>
//                             <p>Navigate through hassle-free visa solutions tailored to your needs.</p>
//                         </div>
//                         <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
//                             <a href="#slide4" className="btn btn-circle">❮</a>
//                             <a href="#slide2" className="btn btn-circle">❯</a>
//                         </div>
//                     </div>
//                     <div id="slide2" className="carousel-item relative w-full">
//                         <img src={slider2Image} className="w-full h-[500px] object-contain" />
//                         <div className="absolute text-center inset-x-0 bottom-8 bg-opacity-70 bg-black text-white py-4 px-6">
//                             <h2 className="text-xl font-bold">Comprehensive Data Analysis</h2>
//                             <p>Our tools ensure precise processing and insights for your applications.</p>
//                         </div>
//                         <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
//                             <a href="#slide1" className="btn btn-circle">❮</a>
//                             <a href="#slide3" className="btn btn-circle">❯</a>
//                         </div>
//                     </div>
//                     <div id="slide3" className="carousel-item relative w-full">
//                         <img src={slider3Image} className="w-full h-[500px] object-contain" />
//                         <div className="absolute text-center inset-x-0 bottom-8 bg-opacity-70 bg-black text-white py-4 px-6">
//                             <h2 className="text-xl font-bold">Advanced Virtual Assistance</h2>
//                             <p>Leverage AI-driven support for quick and accurate visa guidance.</p>
//                         </div>
//                         <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
//                             <a href="#slide2" className="btn btn-circle">❮</a>
//                             <a href="#slide4" className="btn btn-circle">❯</a>
//                         </div>
//                     </div>
//                     <div id="slide4" className="carousel-item relative w-full">
//                         <img src={slider4Image} className="w-full h-[500px] object-contain" />
//                         <div className="absolute text-center inset-x-0 bottom-8 bg-opacity-70 bg-black text-white py-4 px-6">
//                             <h2 className="text-xl font-bold">Simplify Approval Processes</h2>
//                             <p>Get your applications approved with minimal effort and time.</p>
//                         </div>
//                         <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
//                             <a href="#slide3" className="btn btn-circle">❮</a>
//                             <a href="#slide1" className="btn btn-circle">❯</a>
//                         </div>
//                     </div>
//                 </div>
//                 <LatestVisaSection darkMode={darkMode} />

//                 {/* Other Sections */}
//                 <VisaProcess darkMode={darkMode} />
//                 <WhyChooseUs darkMode={darkMode} />
//             </div>
//         </div>

//     );
// };

// export default Home;

import React, { useState } from 'react';
import slider1Image from "../../../src/assets/flat-travel-background-tourism-visa-260nw-279542630.jpg";
import slider2Image from "../../../src/assets/analysis-data-process-target-business-260nw-503682529.jpg";
import slider3Image from "../../../src/assets/man-using-virtual-touch-screen-260nw-2336775113.jpg";
import slider4Image from "../../../src/assets/visa-application-approved-stamp-passport-260nw-2214866597.jpg";
import WhyChooseUs from './WhyChooseUs';
import VisaProcess from './VisaProcess';
import LatestVisaSection from './LatestVisaSection';

const Home = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={darkMode ? "bg-black text-white" : "bg-white text-black"}>

            <div className='md:px-14 lg:px-32 py-4'>
                <div>
                    <button
                        onClick={toggleTheme}
                        className={`px-4 py-2 rounded-md ${darkMode ? "bg-gray-200 text-black" : "bg-gray-800 text-white"}`}
                    >
                        {darkMode ? "Light Mode" : "Dark Mode"}
                    </button>
                </div>

                {/* Slider Section */}
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={slider1Image}
                            className="w-full h-[500px] object-contain" />
                        <div className="absolute text-center inset-x-0 bottom-8 bg-opacity-70 bg-black text-white py-4 px-6">
                            <h2 className="text-xl font-bold">Explore Seamless Visa Applications</h2>
                            <p>Navigate through hassle-free visa solutions tailored to your needs.</p>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={slider2Image} className="w-full h-[500px] object-contain" />
                        <div className="absolute text-center inset-x-0 bottom-8 bg-opacity-70 bg-black text-white py-4 px-6">
                            <h2 className="text-xl font-bold">Comprehensive Data Analysis</h2>
                            <p>Our tools ensure precise processing and insights for your applications.</p>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={slider3Image} className="w-full h-[500px] object-contain" />
                        <div className="absolute text-center inset-x-0 bottom-8 bg-opacity-70 bg-black text-white py-4 px-6">
                            <h2 className="text-xl font-bold">Advanced Virtual Assistance</h2>
                            <p>Leverage AI-driven support for quick and accurate visa guidance.</p>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src={slider4Image} className="w-full h-[500px] object-contain" />
                        <div className="absolute text-center inset-x-0 bottom-8 bg-opacity-70 bg-black text-white py-4 px-6">
                            <h2 className="text-xl font-bold">Simplify Approval Processes</h2>
                            <p>Get your applications approved with minimal effort and time.</p>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
                <LatestVisaSection darkMode={darkMode} />


                {/* Other Sections */}
                <VisaProcess darkMode={darkMode} />
                <WhyChooseUs darkMode={darkMode} />
            </div>
        </div>

    );
};

export default Home;