import React from 'react';
import { FaFacebook, FaGoogle, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content my-14">
                <div>
                    <span className="footer-title">Services</span>
                    <a href='/' className="link link-hover">Travel</a>
                    <a href='/' className="link link-hover">Tour</a>
                    <a href='/' className="link link-hover">Adventure</a>
                    <a href='/' className="link link-hover">Refreshment</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a href='/' className="link link-hover">About us</a>
                    <a href='/' className="link link-hover">Contact</a>
                    <a href='/' className="link link-hover">Jobs</a>
                    <a href='/' className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a href='/' className="link link-hover">Terms of use</a>
                    <a href='/' className="link link-hover">Privacy policy</a>
                    <a href='/' className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
                <div className="items-center grid-flow-col">
                    <img src="" alt="" />
                    <p>Copyright © 2022 - All right reserved by Travel Tours</p>
                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <FaGoogle className='text-3xl'></FaGoogle>
                        <FaYoutube className='text-3xl'></FaYoutube>
                        <FaFacebook className='text-3xl'></FaFacebook>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;