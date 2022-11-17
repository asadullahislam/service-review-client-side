import React from 'react';
import { Link } from 'react-router-dom';
import tourmeet from '../../assets/tourmeet/tourmeet.jpg'
import './ServiceBody.css'

const ServiceBody = () => {
    return (
        <div className='my-12'>

            <div>

                <h1 className='text-center text-5xl font-bold  text-orange-400 mb-5'>Who We Are ?</h1>

                <div >

                    <div className="hero-content flex-col lg:flex-row">

                        <img className='img-tourmeet' src={tourmeet} alt='' />
                        <div>
                            <h1 className="text-5xl font-bold text-yellow-400">
                                We Are Travel Experts</h1>
                            <p className="py-10">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.</p>
                            <button className="btn btn-primary"><Link to='/home'>Learn More</Link></button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServiceBody;