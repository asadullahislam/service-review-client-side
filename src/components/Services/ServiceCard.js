import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {

    const { _id, img, price, title, description } = service;


    return (
        <div className="card w-96 bg-base-200 shadow-xl p-5 ">
            <figure><img alt='' src={img} /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{title}</h2>
                <p>{description}</p>
                <p className='text-2xl text-orange-600 font-semibold '>Price:${price}</p>


                <div className="card-actions justify-center">
                    <Link to={`/checkout/${_id}`} > <button className="btn btn-primary ">See Details</button></Link>
                </div>
            </div>

        </div >
    );
};

export default ServiceCard;