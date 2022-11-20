import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';
import logo from '../../assets/login/login.jpg';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
// import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// import app from '../../firebase/firebase.config';

const Login = () => {

    const { login, googleProviderLogin, provider } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then(result => {
                const user = result.user;

                const currentUser = {
                    email: user.email
                }
                console.log(currentUser);
                navigate(from, { replace: true });

            })
            .catch(err => console.error(err));
    }

    // const auth = getAuth(app);
    // const googleProvider = new GoogleAuthProvider();

    // const handleGoogleSignIn = () => {
    //     signInWithPopup(auth, googleProvider)
    //         .then(result => {
    //             const user = result.user;
    //             console.log(user);
    //         })
    //         .catch(err => console.error(err))
    // }

    const handleGoogleSignIn = () => {
        googleProviderLogin(provider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(err => console.error(err))
    }


    return (
        <div className="hero w-full my-20 ">
            <div className="hero-content gap-20 grid md:grid-cols-2 lg:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">

                    <img className='w-3/4' src={logo} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-20">
                    <h1 className="text-5xl font-bold text-center">Login now!</h1>
                    <Form onSubmit={handleLogin} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered " required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <Link to='/' className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />

                        </div>
                    </Form>
                    <p className='text-center pb-20'>New to Travel Tour <Link className='text-orange-600 font-bold' to='/signup'> Sign Up</Link></p>
                    <div className='flex gap-8 justify-center  pb-7 '>
                        <button onClick={handleGoogleSignIn}>  <FaGoogle className='text-3xl' /></button>
                        <FaGithub className='text-3xl'></FaGithub>
                        <FaTwitter className='text-3xl'></FaTwitter>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Login;