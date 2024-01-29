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

const Main = () => {
    return (
        <div className='text-gray-600'>
            <Header></Header>

            {/* Live Life section */}
            <section className='bg-[#FAF8F6]'>
                <div className='py-10 ml-9'>
                    <img src={zickzack} alt="" />
                </div>
                <div className='flex'>
                    <div className='w-1/2 p-20'>
                        <span className='text-gray-400'>Proven strategies backed by science for success.</span>
                        <h1 className='mt-5 mb-6 text-[68px] font-bold text-[#333461] leading-none'>Live life at the full potential</h1>
                        <p className='mb-4'>I help people to discover their true potential and live a fulfilling life... Discover the simple 3 steps that I discovered to hack productivity. It just works and it is begin using backed by science. Wanna transform your life?</p>
                        <Button title={'Get your free guide now'}></Button>
                    </div>
                    <div className='w-1/2 flex justify-center'>
                        <img className='w-[450px] h-[600px]' src={livegirl} alt="" />
                    </div>
                </div>
            </section>

            {/* I can help section */}
            <section>
                <div className='flex'>
                    <div className='w-1/2 py-24 px-28'>
                        <img src={zickzackDarkBlue} alt="" />
                        <h1 className='leading-tight font-bold text-[40px] text-[#333461] mt-5'>I can help you in these particular areas.</h1>
                    </div>
                    <div className='w-1/2 mt-8 flex flex-col justify-center'>
                        <p className='max-w-md'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
                        </p>
                        <p className='max-w-md mt-4'>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                    </div>
                </div>
                <div className='px-36 grid grid-cols-3 mb-20 gap-x-16'>
                    <div>
                        <img src={coaching_icon} alt="" />
                        <h5 className='mt-3 font-bold text-gray-800 text-[22px]'>1:1 Coaching</h5>
                        <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
                        </p>
                    </div>
                    <div>
                        <img src={consultation_icon} alt="" />
                        <h5 className='mt-3 font-bold text-gray-800 text-[22px]'>Consultation</h5>
                        <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
                        </p>
                    </div>
                    <div>
                        <img src={group_coaching_icon} alt="" />
                        <h5 className='mt-3 font-bold text-gray-800 text-[22px]'>Group Coaching Sessions</h5>
                        <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
                        </p>
                    </div>
                </div>
            </section>

            {/* Clients Review Section */}
            <section className='bg-[#FAF8F6] pl-32 mb-20 pt-20 pb-32'>
                <h1 className='w-[500px] leading-tight font-bold text-[48px] text-[#333461] mt-5'>Hear out what my clients say about me.</h1>
                <div className='mt-8 grid grid-cols-3 gap-8 pr-7'>
                    <div className="bg-white p-10 border rounded-md">
                        <p className='text-[22px]'>"I gained so much <span className='font-bold'>confidence</span> in my ability to connect and deepen my relationships with people. "</p>
                        <h5 className='font-bold text-2xl'>Jane</h5>
                        <img className='w-16 mt-3 mb-3' src={client1} alt="" />
                        <Rating
                            style={{ maxWidth: 90 }}
                            value={5}
                            readOnly
                        />
                    </div>
                    <div className="bg-white p-10 border rounded-md">
                        <p className='text-[22px]'>"I gained so much confidence in my ability to connect and deepen my relationships with people. "</p>
                        <h5 className='font-bold text-2xl'>Catherine</h5>
                        <img className='w-16 mt-3 mb-3' src={client2} alt="" />
                        <Rating
                            style={{ maxWidth: 90 }}
                            value={0}
                            readOnly
                        />
                    </div>
                    <div className="bg-white p-10 border rounded-md">
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
            <section className='mb-40 px-32'>
                <h1 className='mx-auto text-center w-[650px] leading-tight font-bold text-[44px] text-[#333461] mt-5'>Stay Motivated, read the weekly blog articles.</h1>
                <div className='mt-14 grid grid-cols-3 gap-9 mb-10'>
                    <div className="bg-white border rounded-sm">
                        <img src={stay1} alt="" />
                        <div className='px-7 py-4'>
                            <h3 className='mb-3 text-[#333461] font-bold text-xl'>Balancing your love and work life.</h3>
                            <p className='leading-tight'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white border rounded-sm">
                        <img src={stay2} alt="" />
                        <div className='px-7 py-4'>
                            <h3 className='mb-3 text-[#333461] font-bold text-xl'>A short break from Social Media is important.</h3>
                            <p className='leading-tight'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white border rounded-sm">
                        <img src={stay3} alt="" />
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
        </div>
    );
};

export default Main;