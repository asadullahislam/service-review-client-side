import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';


import './Review.css';
import ReviewRow from './ReviewRow';

const Review = () => {
    const storedMessege = useLoaderData();
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://service-review-server-side-kappa.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    // delete 
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to cancel this review');
        if (proceed) {
            fetch(`https://service-review-server-side-kappa.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = reviews.filter(revw => revw._id !== id);
                        setReviews(remaining);

                    }
                })
        }

    }

    //updated messege

    const [messege, setMessege] = useState({ storedMessege });


    const handleUpdate = (event, id) => {
        event.preventDefault();
        const reviews = {
            messege: document.getElementById('update' + id).value
        }
        fetch(`https://service-review-server-side-kappa.vercel.app/reviews/${id}?email=${user?.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    window.location.reload()
                    alert('review updated')
                }
            })


    }
    const handleInputChange = (event) => {
        const form = event.target;
        const messege = form.messege.value;
        const newMessege = { ...messege };
        setMessege(newMessege);

    }




    return (
        <div>
            <div className='text-center mb-10'>
                <h1 className='text-4xl font-bold text-yellow-500'>My Review{reviews.length}</h1>
            </div>

            <div className='table-container'>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">

                        <thead className='table-head'>
                            <tr >

                                <th className='text-xl font-semibold'>SERVICE NAME</th>
                                <th className='text-xl  font-semibold'>MY REVIEW</th>
                                <th className='text-xl font-semibold'>
                                    ACTION
                                </th>
                            </tr>
                        </thead>
                        <tbody>



                            {
                                reviews.map(review => <ReviewRow
                                    key={review._id}
                                    review={review}
                                    handleDelete={handleDelete}
                                    handleUpdate={handleUpdate}
                                    handleInputChange={handleInputChange}
                                ></ReviewRow>)
                            }




                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Review;