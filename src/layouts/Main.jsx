import React from 'react';
import Header from '../components/Header';
import zickzack from '../assets/icons/zickzack.png';
import zickzackDarkBlue from '../assets/icons/zickzackDarkBlue.png';
import Button from '../components/Button';
import livegirl from '../assets/images/live_girl.png';
import coaching_icon from '../assets/icons/coaching_icon.png';
import consultation_icon from '../assets/icons/consultation_icon.png';
import group_coaching_icon from '../assets/icons/group_coaching_icon.png';
import client1 from '../assets/images/client1.png';
import client2 from '../assets/images/client2.png';
import client3 from '../assets/images/client3.png';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import stay1 from '../assets/images/stay1.png';
import stay2 from '../assets/images/stay2.png';
import stay3 from '../assets/images/stay3.png';
import ruReady from '../assets/images/ruReady.png';
import get15 from '../assets/images/get15.png';
import Footer from '../components/Footer';


const Main = () => {
    const handleOnSubmit = (event) =>{
        event.preventDefault();
    }
    return (
        <div className='text-gray-600'>
            <Header></Header>

            {/* Live Life section */}
            <section className='bg-[#FAF8F6]'>
                <div className='py-10 ml-9'>
                    <img src={zickzack} alt="" />
                </div>
                <div className='flex sm:flex-row flex-col'>
                    <div className='sm:w-1/2 px-5 pb-5 sm:p-20'>
                        <span className='text-gray-400'>Proven strategies backed by science for success.</span>
                        <h1 className='mt-5 mb-6 text-3xl sm:text-[68px] font-bold text-[#333461] leading-none'>Live life at the full potential</h1>
                        <p className='mb-4'>I help people to discover their true potential and live a fulfilling life... Discover the simple 3 steps that I discovered to hack productivity. It just works and it is begin using backed by science. Wanna transform your life?</p>
                        <Button title={'Get your free guide now'}></Button>
                    </div>
                    <div className='sm:w-1/2 flex justify-center'>
                        <img className='sm:w-[450px] p-12 sm:p-0 h-[600px]' src={livegirl} alt="" />
                    </div>
                </div>
            </section>

            {/* I can help section */}
            <section>
                <div className='flex sm:flex-row flex-col'>
                    <div className='sm:w-1/2 sm:py-24 pt-24 sm:px-28 px-5'>
                        <img src={zickzackDarkBlue} alt="" />
                        <h1 className='leading-tight font-bold sm:text-[40px] text-3xl text-[#333461] mt-5'>I can help you in these particular areas.</h1>
                    </div>
                    <div className='sm:w-1/2 mt-8 flex flex-col justify-center'>
                        <p className='max-w-md mx-auto sm:ml-0 px-5 sm:px-0'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
                        </p>
                        <p className='max-w-md mt-4 mx-auto sm:ml-0 px-5 sm:px-0'>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                    </div>
                </div>
                <div className='sm:px-36 px-12 grid grid-cols-1 gap-10 sm:grid-cols-3 mb-20 sm:gap-x-16 mt-12 sm:mt-0'>
                    <div className='border sm:border-0 p-2 sm:p-0 rounded sm:rounded-none'>
                        <img src={coaching_icon} alt="" />
                        <h5 className='mt-3 font-bold text-gray-800 text-[22px]'>1:1 Coaching</h5>
                        <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
                        </p>
                    </div>
                    <div className='border sm:border-0 p-2 sm:p-0 rounded sm:rounded-none'>
                        <img src={consultation_icon} alt="" />
                        <h5 className='mt-3 font-bold text-gray-800 text-[22px]'>Consultation</h5>
                        <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
                        </p>
                    </div>
                    <div className='border sm:border-0 p-2 sm:p-0 rounded sm:rounded-none'>
                        <img src={group_coaching_icon} alt="" />
                        <h5 className='mt-3 font-bold text-gray-800 text-[22px]'>Group Coaching Sessions</h5>
                        <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
                        </p>
                    </div>
                </div>
            </section>

            {/* Clients Review Section */}
            <section className='bg-[#FAF8F6] sm:px-20 px-7 sm:pl-32 mb-20 sm:pt-20 sm:pb-32 pt-5 pb-10'>
                <h1 className='sm:w-[500px] leading-tight font-bold sm:text-[48px] text-3xl text-[#333461] mt-5'>Hear out what my clients say about me.</h1>
                <div className='mt-8 grid sm:grid-cols-3 grid-cols-1 gap-8 sm:pr-7'>
                    <div className="sm:w-full mx-auto bg-white p-10 border rounded-md">
                        <p className='text-[22px]'>"I gained so much <span className='font-bold'>confidence</span> in my ability to connect and deepen my relationships with people. "</p>
                        <h5 className='font-bold text-2xl'>Jane</h5>
                        <img className='w-16 mt-3 mb-3' src={client1} alt="" />
                        <Rating
                            style={{ maxWidth: 90 }}
                            value={5}
                            readOnly
                        />
                    </div>
                    <div className="sm:w-full mx-auto bg-white p-10 border rounded-md">
                        <p className='text-[22px]'>"I gained so much confidence in my ability to connect and deepen my relationships with people. "</p>
                        <h5 className='font-bold text-2xl'>Catherine</h5>
                        <img className='w-16 mt-3 mb-3' src={client2} alt="" />
                        <Rating
                            style={{ maxWidth: 90 }}
                            value={0}
                            readOnly
                        />
                    </div>
                    <div className="sm:w-full mx-auto bg-white p-10 border rounded-md">
                        <p className='text-[22px]'>"I gained so much <span className='font-bold'>confidence</span> in my ability to connect and deepen my relationships with people. "</p>
                        <h5 className='font-bold text-2xl'>Jane</h5>
                        <img className='w-16 mt-3 mb-3' src={client3} alt="" />
                        <Rating
                            style={{ maxWidth: 90 }}
                            value={3}
                            readOnly
                        />
                    </div>
                </div>
            </section>

            {/* Stay Motivated section */}
            <section className='sm:mb-40 mb-16 sm:px-32 sm:p-16 px-6'>
                <h1 className='text-center sm:text-left sm:w-[650px] leading-tight font-bold text-3xl sm:text-[44px] text-[#333461] mt-5'>Stay Motivated, read the weekly blog articles.</h1>
                <div className='mt-14 grid grid-cols-1 sm:grid-cols-3 gap-9 mb-10'>
                    <div className="sm:w-full mx-auto bg-white border rounded-sm">
                        <img className='w-full' src={stay1} alt="" />
                        <div className='px-7 py-4'>
                            <h3 className='mb-3 text-[#333461] font-bold text-xl'>Balancing your love and work life.</h3>
                            <p className='leading-tight'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
                            </p>
                        </div>
                    </div>
                    <div className="sm:w-full mx-auto bg-white border rounded-sm">
                        <img className='w-full' src={stay2} alt="" />
                        <div className='px-7 py-4'>
                            <h3 className='mb-3 text-[#333461] font-bold text-xl'>A short break from Social Media is important.</h3>
                            <p className='leading-tight'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
                            </p>
                        </div>
                    </div>
                    <div className="sm:w-full mx-auto bg-white border rounded-sm">
                        <img className='w-full' src={stay3} alt="" />
                        <div className='px-7 py-4'>
                            <h3 className='mb-3 text-[#333461] font-bold text-xl'>How to be 1% Better Every Day</h3>
                            <p className='leading-tight'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='text-center'>
                    <button className='bg-[#20AD96] text-[14px] text-white px-16 py-2 rounded-md'>Read more blogs</button>
                </div>
            </section>

            {/* Dont miss section */}
            <section className='grid sm:grid-cols-2 grid-cols-1 mb-40'>
                <div className="sm:pl-32 sm:px-20 px-5 flex flex-col items-center justify-center">
                    <h1 className='mx-auto leading-tight font-bold sm:text-[44px] text-3xl text-[#333461] mt-5'>Don’t miss out on my ‘Live life at the full potential’ free guide</h1>
                    <p className='text-lg mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
                    </p>
                    <p className='mt-4 leading-tight'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    <button className='mt-5 bg-[#20AD96] text-[14px] text-white px-16 py-2 rounded-md'>Get your free guide now</button>
                </div>
                <div className='mt-14 sm:mt-0 sm:px-0 px-10'>
                    <img className='mx-auto sm:w-[400px]' src={ruReady} alt="" />
                </div>
            </section>

            {/* Get 15min section */}
            <section className='bg-[#FAF8F6] grid sm:grid-cols-2 grid-cols-1 sm:mx-24 mb-40 rounded-3xl'>
                <div className="px-12 sm:py-24 py-9 flex flex-col items-start justify-center">
                    <h2 className='text-3xl text-[#333461] font-bold'>Get 15-Minutes Complimentary online session.</h2>
                    <span className='mt-6 text-lg text-gray-400'>Limited Period Offer. Claim Now.</span>
                    <button className='mt-5 bg-[#20AD96] text-[14px] text-white px-20 py-2 rounded-md'>Book now</button>
                </div>
                <div className='px-10 sm:px-0 pb-8 sm:pb-0'>
                    <img className="rounded-3xl" src={get15} alt="" />
                </div>
            </section>

            {/* Get Notified Section */}
            <section className='bg-[#FAF8F6] sm:px-24 px-5 py-14 grid sm:grid-cols-2 grid-cols-1 mb-10'>
                <div>
                    <h3 className='text-2xl text-[#333461] font-bold'>Get notified when I publish new articles</h3>
                    <p className='text-md font-medium'>Stay up to date with the latest news, announcements, and articles.</p>
                </div>
                <form onSubmit={handleOnSubmit} className='flex sm:items-center sm:justify-end justify-center items-center sm:flex-row flex-col sm:mt-0 mt-5'>
                    <input className='border px-6 py-2 h-10 sm:w-72 rounded-md' type="email" placeholder='Enter your email' />
                    <button className='bg-[#20AD96] h-10 ml-3 sm:mt-0 mt-4 text-[14px] text-white sm:px-12 px-8 rounded-md'>Subscribe</button>
                </form>
            </section>

            <Footer></Footer>
        </div>
    );
};

export default Main;