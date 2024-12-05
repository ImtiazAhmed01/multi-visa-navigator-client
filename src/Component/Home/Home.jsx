import React from 'react';
import slider1Image from "../../../src/assets/flat-travel-background-tourism-visa-260nw-279542630.jpg"
import slider2Image from "../../../src/assets/analysis-data-process-target-business-260nw-503682529.jpg"
import slider3Image from "../../../src/assets/man-using-virtual-touch-screen-260nw-2336775113.jpg"
import slider4Image from "../../../src/assets/visa-application-approved-stamp-passport-260nw-2214866597.jpg"
import WhyChooseUs from './WhyChooseUs';

const Home = () => {
    return (
        <div className='px-32'>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src={slider1Image}
                        className="w-full h-[500px] object-contain"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src={slider2Image}
                        className="w-full h-[500px] object-contain"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src={slider3Image}
                        className="w-full h-[500px] object-contain"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src={slider4Image}
                        className="w-full h-[500px] object-contain"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <WhyChooseUs></WhyChooseUs>
        </div>

    );
};

export default Home;