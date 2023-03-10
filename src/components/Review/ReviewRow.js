import React, { useEffect, useState } from 'react';

const ReviewRow = ({ review, handleDelete, handleUpdate, handleInputChange }) => {


    const { _id, serviceName, messege, service } = review;

    const [reviewService, setReviewService] = useState({});

    useEffect(() => {
        fetch(`https://service-review-server-side-kappa.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setReviewService(data));
    }, [service])





    return (


        <tr>
            <td>{serviceName}</td>
            <td>{messege}</td>
            <td>
                <div>
                    <input onChange={handleInputChange} type="text" placeholder="Type here" name="messege" className="input input-bordered input-primary w-full max-w-xs mb-3" id={'update' + _id} />
                </div>
                <div>
                    <button onClick={(event) => handleUpdate(event, _id)} className='btn btn-secondary mr-5'>UPDATE</button>
                    <button onClick={() => handleDelete(_id)} className='btn btn-primary'>DELETE</button>

                </div>
            </td>

        </tr>
    );
};

export default ReviewRow;