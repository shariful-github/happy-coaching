import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../assets/icons/h_c_icon.png'

const Footer = () => {
    return (
        <footer className='grid grid-cols-3 mx-24 pb-32'>
            <div>
                <Link className='flex items-center'>
                    <img className='w-5' src={icon} alt="" />
                    <span className='font-bold text-sm ml-1'>Happy Coaching</span>
                </Link>
                <p className='text-gray-300 mt-7'>Design amazing digital experiences that create more happy in the world.</p>
            </div>
            <div className="flex flex-col gap-2">
                <h5 className='font-bold text-sm'>Pages</h5>
                <Link className='text-gray-400'>Home</Link>
                <Link className='text-gray-400'>Services</Link>
                <Link className='text-gray-400'>About up</Link>
                <Link className='text-gray-400'>Extra Sales/Landingpage</Link>
                <Link className='text-gray-400'>Free guide</Link>
            </div>
            <div className="flex flex-col gap-2">
                <h5 className='font-bold text-sm'>Contact</h5>
                <Link className='text-gray-400'>+123 456 789</Link>
                <Link className='text-gray-400'>hello@happydigital.nl</Link>
                <Link className='text-gray-400'>Instagram</Link>
                <Link className='text-gray-400'>LinkedIn</Link>
            </div>
        </footer>
    );
};

export default Footer;