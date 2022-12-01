import userEvent from '@testing-library/user-event';
import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';
import './CheckOut.css'

const CheckOut = () => {

    const { title, _id, price, img, description } = useLoaderData();

    const { user } = useContext(AuthContext);

    const handleServiceReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const messege = form.messege.value;
        const email = user?.email || 'not registered'

        const review = {
            service: _id,
            serviceName: title,
            price,
            messege,
            email,


        }
        // post 
        fetch('https://service-review-server-side-kappa.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('review send Successfully');
                    form.reset();
                }
            })
            .catch(err => console.error(err));

    }
    return (
        <div className="py-10">
            <div className='text-center'>
                <h1 className='text-5xl mb-10'>My Services</h1>
            </div>

            <div>
                <div className='img-container'>
                    <img className=' mb-5 tour-img' src={img} alt="" />
                </div>
                <h1 className='text-2xl font-bold pl-20'>{title}</h1>
                <div>
                    <p className='pl-20 pr-20'>
                        {description}
                    </p>
                    <p className='text-3xl pl-20 text-yellow-600'>  Price:${price}</p>
                </div>
            </div>

            <div className='pl-20 mt-10'>
                <form onSubmit={handleServiceReview}>
                    <div className="form-control">
                        <label className="label">
                            <h1 className='font-bold '> Email:  {user?.email}</h1>
                        </label>
                        <label className="label">
                            <h1 className='font-bold text-xl'>Name:    {user?.displayName
                            }</h1>
                        </label>
                        <label className="label">
                            <img className='email-image' src={user?.photoURL} alt="" />
                        </label>

                        <label className="input-group">


                            <input type="text" placeholder="Please Write Your Review" name='messege' className="input input-bordered text-review" required />
                            <label>
                                <button className='btn btn-primary btn-review'>
                                    <input type="submit" value="Submit" />
                                </button>
                            </label>
                        </label>
                    </div>
                </form>
            </div>

        </div >
    );
};

export default CheckOut;