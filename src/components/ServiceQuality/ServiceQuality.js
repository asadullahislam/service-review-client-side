import React from 'react';
import './ServiceQuality.css'
import { FaDollarSign, FaCar, FaPaperPlane } from "react-icons/fa";

const ServiceQuality = () => {
    return (

        <div>

            <div>
                <h1 className='text-5xl text-center font-bold'>Why Chose Us?</h1>
            </div>

            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className='px-10'>
                    <div className=' flex justify-center'>
                        <FaDollarSign className='react-icon-div text-green-600'></FaDollarSign>
                    </div>
                    <div className='mt-3 text-center'>
                        <h1 className='text-2xl   font-semibold '>Value For Money</h1>
                        <p>Get inspired by our selection of the <br /> best budget tours and cheap trips that <br /> will take you  to exciting destinations around the world.</p>
                    </div>
                </div>
                <div className='px-10'>
                    <div className=' flex justify-center'>
                        <FaPaperPlane className='react-icon-div text-green-600'></FaPaperPlane>
                    </div>
                    <div className='mt-3 text-center'>
                        <h1 className='text-2xl   font-semibold '>Beautiful Places</h1>
                        <p>All over you can find various types of  <br /> view in a small place together. <br /> It's a fantastic place to tour.</p>
                    </div>
                </div>
                <div className='px-10'>
                    <div className=' flex justify-center'>
                        <FaCar className='react-icon-div text-green-600'></FaCar>
                    </div>
                    <div className='mt-3 text-center'>
                        <h1 className='text-2xl   font-semibold '>Passionate Travel</h1>
                        <p>We offer a wide array of services under one <br /> roof  from safaris, travel excursions, company <br /> retreats,  to air ticketing and airport transfers. Nairobi Itinerary.</p>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default ServiceQuality;