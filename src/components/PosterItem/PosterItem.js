import React from 'react';
import './PosterItem.css'
const PosterItem = ({ slide }) => {
    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carosel-image'>
                <img src={image} alt="" className="w-full rounded-xl" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2  left-24 top-1/4">
                <h1 className='text-6xl font-bold text-white' >Life is an Adventure  <br />
                    not a Pakage Tour <br />
                </h1>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2  left-24 top-1/2 w-1/2">
                <p className=' text-xl text-white'>Before I started my own travel blog I was inspired by cool photos <br /> and motivating stories written by some of the best adventurous travelers.</p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2  right-24 top-2/5 top-3/4">
                <button className="btn btn-warning mr-10">Visit Now</button>

            </div>
            <div className="absolute flex justify-end transform -translate-x-1/2 left-5 right-5 bottom-12 ">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default PosterItem;