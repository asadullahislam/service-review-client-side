import React from 'react';
import './AddService.css';

const AddService = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const description = form.description.value;
        const price = form.price.value;
        console.log(name, description, price);
        alert("Service Added Succesfully");
    }

    return (
        <div >
            <div className='text-center'>
                <h1 className='text-3xl'>Add a new service</h1>
            </div>
            <div>
                <form onSubmit={handleSubmit}>


                    <div className='mt-4'>
                        <label><p className='text-xl service-text '>Service Name</p></label>
                        <input type="text" name="name" id="" required className='name text-zinc-700 ' placeholder='name' />
                    </div>
                    {/* <div className='mt-4'>
                        <label><p className='text-xl service-text'>Service Name</p></label>
                        <input type="text" name="name" id="" required className='name ' placeholder='name' />
                    </div> */}
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