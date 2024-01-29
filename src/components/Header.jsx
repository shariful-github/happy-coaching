import React from 'react';
import icon from '../assets/icons/h_c_icon.png'
import { Link } from 'react-router-dom';
import Button from './Button';

const Header = () => {
    return (
        <header className='border px-20 flex justify-between items-center h-14'>
            <Link className='flex'>
                <img src={icon} alt="" />
                <span className='font-bold ml-2'>Happy Coaching</span>
            </Link>
            <div className='text-sm flex items-center'>
                <Link className='ml-6'>Home</Link>
                <Link className='ml-6'>Service</Link>
                <Link className='ml-6'>About us</Link>
                <Link className='ml-6'>Extra Salespage</Link>
                <Link className='ml-6'>
                    <Button title={'Get your free guide now'}></Button>
                </Link>
            </div>
        </header>
    );
};

export default Header;