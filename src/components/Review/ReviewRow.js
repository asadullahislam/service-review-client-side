import React, { useEffect, useState } from 'react';

const ReviewRow = ({ review, handleDelete }) => {
    const { _id, serviceName, messege, service } = review;

    const [reviewService, setReviewService] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setReviewService(data));
    }, [service])




    return (


        <tr>
            <td>{serviceName}</td>
            <td>{messege}</td>
            <td>
                <div>
                    <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs mb-3" />
                </div>
                <div>
                    <button className='btn btn-secondary mr-5'>UPDATE</button>
                    <button onClick={() => handleDelete(_id)} className='btn btn-primary'>DELETE</button>

                </div>
            </td>

        </tr>
    );
};

export default ReviewRow;