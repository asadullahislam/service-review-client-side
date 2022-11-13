import React, { useContext } from 'react';
import { Form, Link } from 'react-router-dom';
import signup from '../../assets/signup/signup.jpg'
import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";


import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';

const SignUp = () => {

    const { createUser } = useContext(AuthContext);
    const handleSignUp = (event) => {

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.error(err))
    }
    return (
        <div className="hero w-full my-20 ">
            <div className="hero-content gap-20 grid md:grid-cols-2 lg:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">

                    <img className='w-3/4' src={signup} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-20">
                    <h1 className="text-5xl font-bold text-center">Sign Up</h1>
                    <Form onSubmit={handleSignUp} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered " required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered " required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />

                        </div>
                    </Form>
                    <p className='text-center pb-20'>Allrady have an account ?  <Link className='text-orange-600 font-bold' to='/login'>Login</Link></p>
                    <div className='flex gap-8 justify-center  pb-7 '>
                        <FaGoogle />
                        <FaGithub></FaGithub>
                        <FaTwitter></FaTwitter>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SignUp;