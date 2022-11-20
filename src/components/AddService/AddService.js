import React, { useContext } from 'react';
import { Form, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';
import './AddService.css';

const AddService = () => {
    // const { title, _id, price, img, description } = useLoaderData();
    const { user } = useContext(AuthContext);


    const handleAddService = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const description = form.description.value;
        const price = form.price.value;
        const email = user?.email || 'not registered'
        console.log(name, description, price);


        const addservice = {
            serviceName: name,
            price,
            description,
            email,
        }


        fetch('http://localhost:5000/addservice', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addservice)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('review send Successfully');
                    Form.reset(addservice);
                }
            })
            .catch(err => console.error(err));

    }






    return (
        <div >
            <div className='text-center'>
                <h1 className='text-3xl'>Add a new service</h1>
            </div>
            <div>
                <form onSubmit={handleAddService}>

                    <div className='mt-4'>
                        <label><p className='text-xl service-text '>Service Image URL</p></label>
                        <input type="text" name="img" id="" required className='name text-zinc-700 ' placeholder='Srvice Image Url' />
                    </div>

                    <div className='mt-4'>
                        <label><p className='text-xl service-text '>Service Name</p></label>
                        <input type="text" name="name" id="" required className='name text-zinc-700 ' placeholder='name' />
                    </div>

                    <div className='mt-4'>
                        <label><p className='text-xl service-text'>Description</p></label>

                        <input type="text" name="description" id="" required className='name text-zinc-700' placeholder='Description' />
                    </div>
                    <div className='mt-4'>
                        <label><p className='text-xl service-text'>Price</p></label>

                        <input type="number" name="price" id="" required className='name text-zinc-600' placeholder='Description' />
                    </div>


                    <div className="form-control mt-6 service">
                        <input className="btn btn-primary button-service" type="submit" value="Add Service" />

                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddService;