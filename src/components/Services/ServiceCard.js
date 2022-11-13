import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {

    const { service_id, img, price, title } = service;

    return (
        <div className="card w-96 bg-base-200 shadow-xl p-5 ">
            <figure><img alt='' src={img} /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-2xl text-orange-600 font-semibold '>Price:${price}</p>
                <div className="card-actions justify-center">
                    <Link to={`/checkout/${service_id}`} > <button className="btn btn-primary ">See Details</button></Link>
                </div>
            </div>

        </div >
    );
};

export default ServiceCard;