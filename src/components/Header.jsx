import React from 'react';
import icon from '../assets/icons/h_c_icon.png'
import { Link } from 'react-router-dom';
import Button from './Button';

const Header = () => {
    return (
        <header className='sm:px-20 px-2 flex justify-between items-center h-14'>
            <Link className='flex items-center'>
                <img src={icon} alt="" />
                <span className='font-bold text-xs sm:text-sm ml-2'>Happy Coaching</span>
            </Link>
            <div className='text-xs sm:text-sm flex items-center'>
                <Link className='sm:ml-6 ml-2'>Home</Link>
                <Link className='sm:ml-6 ml-2'>Service</Link>
                <Link className='sm:ml-6 ml-2'>About us</Link>
                <Link className='sm:ml-6 ml-2'>Extra Salespage</Link>
                <Link className='sm:ml-6 ml-2 hidden sm:block'>
                    <Button title={'Get your free guide now'}></Button>
                </Link>
            </div>
        </header>
    );
};

export default Header;