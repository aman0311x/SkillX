import React from 'react';
import { useNavigate } from 'react-router-dom';
import banner1 from '../../Assets/Photo/skill_share-04.jpg'
import banner2 from '../../Assets/Photo/skill_share-05.jpg'
import banner3 from '../../Assets/Photo/skill_share-06.jpg'

const Banner = () => {
    const navigate = useNavigate();

    const handleLearnClick = () => {
        navigate('/learn');
    };

    const bannerDesign = <>
        <div>
            {/* Extra design */}
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md text-black">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5 text-lg">
                        A platform where community members can share and discover skills, offering opportunities for learning and collaboration in a supportive environment.
                    </p>
                    <button className="btn btn-primary mx-5">I want to Teach</button>
                    <button className="btn btn-primary" onClick={handleLearnClick}>I want to Learn</button>
                </div>
            </div>
        </div>
    </>

    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={banner1} className="w-full opacity-80" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between hero min-h-screen">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    {bannerDesign}
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner2} className="w-full opacity-80" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between hero min-h-screen">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    {bannerDesign}
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={banner3} className="w-full opacity-80" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between hero min-h-screen">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    {bannerDesign}
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
