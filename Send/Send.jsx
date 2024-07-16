/* eslint-disable no-unused-vars */
import React from 'react';

const Send = () => {
    return (
        <div className='py-11'>
            <div className="container px-5 mx-auto">
                <div className=" flex justify-center items-center  shadow-xl hover:shadow-indigo-500/40">
                    <div className=''>
                        <div className='flex justify-between px-10'>
                            <h1 className='font-normal text-2xl text-gray-900'>Send Us A Message</h1>
                            <img className='w-[45px] h-[25px]' src="/public/icons/clientenvelop.png" alt="envelop" />
                        </div>
                        <div className=''>
                            <form className='px-10'>
                                <div className="flex justify-center items-center gap-5">
                                    <div className='pt-5'>
                                        <input type="text" name='name' id='name' placeholder='First & Last Name' className='w-[300px] h-[40px] border-b-2' required />
                                    </div>
                                    <div className='pt-5'>
                                        <input type="email" name='email' id='email' placeholder='Email@' className='w-[300px] h-[40px] border-b-2 ' required />
                                    </div>
                                </div>
                                <div className="flex justify-center items-center gap-5">
                                    <div className='pt-5'>
                                        <input type="text" name='phone' id='name' placeholder='phone N0.' className='w-[300px] h-[40px] border-b-2' required />
                                    </div>
                                    <div className='pt-5'>
                                        <input type="text" name='info' id='info' placeholder='Company' className='w-[300px] h-[40px] border-b-2 ' required />
                                    </div>
                                </div>
                                <div className='pt-5'>
                                    <textarea name="sms" id="sms" placeholder='Message' rows="4" cols="80" className=' border-b-2 input placeholder-cyan-600' required></textarea>
                                </div>
                                <button className='w-[80px] h-[45px] bg-sky-600 rounded relative mt-4 font-semibold text-white text-center text-md ps-5 flex ml-auto shadow-md hover:shadow-gray-500/80 transition-all duration-200'>
                                    <div className=' w-5 h-5 flex justify-center items-center absolute top-3 left-5 translate-x-50 translate-y-50 ms-2'><svg xmlns="http://www.w3.org/2000/svg" fill='white' viewBox="0 0 512 512"><path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z" /></svg>
                                    </div>
                                </button>

                            </form>
                        </div>

                    </div>
                    <div className=' bg-sky-900 py-10 '>
                        <h2 className='text-2xl font-semibold text-white ps-8'>Contact Info</h2>

                        <div className='px-10'>
                            <div className='flex items-center gap-5 pt-1'>

                                <svg className='w-5 h-5  fill-white opacity-[0.7]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M172.3 501.7C27 291 0 269.4 0 192 0 86 86 0 192 0s192 86 192 192c0 77.4-27 99-172.3 309.7-9.5 13.8-29.9 13.8-39.5 0zM192 272c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80z" /></svg>
                                <p className='text-white font-normal text-lg pt-5'>360 king street feasterville trevose, PA <br /> 19054</p>

                            </div>
                            <div className='flex items-center gap-5 py-5'>

                                <svg className='w-5 h-5  fill-white opacity-[0.7] ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z" /></svg>
                                <p className='text-white font-normal text-lg'>(800) 900-200-300</p>

                            </div>
                            <div className='flex items-center gap-5 pt-5 py-5'>
                                <svg className='w-5 h-5 opacity-[0.7] fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm0 48v40.8c-22.4 18.3-58.2 46.7-134.6 106.5-16.8 13.2-50.2 45.1-73.4 44.7-23.2 .4-56.6-31.5-73.4-44.7C106.2 199.5 70.4 171.1 48 152.8V112h416zM48 400V214.4c22.9 18.3 55.4 43.9 104.9 82.6 21.9 17.2 60.1 55.2 103.1 55 42.7 .2 80.5-37.2 103.1-54.9 49.5-38.8 82-64.4 104.9-82.7V400H48z" /></svg>

                                <p className='text-white font-normal text-lg'>info@yourmail.com</p>

                            </div>
                        </div>

                        <div className='flex gap-5 ps-10 pt-10 pb-10'>
                            <svg className='w-4 h-4 bg-white opacity-[0.7] rounded fill-sky-900' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.1 288l14.2-92.7h-88.9v-60.1c0-25.4 12.4-50.1 52.2-50.1h40.4V6.3S260.4 0 225.4 0c-73.2 0-121.1 44.4-121.1 124.7v70.6H22.9V288h81.4v224h100.2V288z" /></svg>

                            <svg className='w-4 h-4 bg-white opacity-[0.7] rounded fill-sky-900' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M386.1 228.5c1.8 9.7 3.1 19.4 3.1 32C389.2 370.2 315.6 448 204.8 448c-106.1 0-192-85.9-192-192s85.9-192 192-192c51.9 0 95.1 18.9 128.6 50.3l-52.1 50c-14.1-13.6-39-29.6-76.5-29.6-65.5 0-118.9 54.2-118.9 121.3 0 67.1 53.4 121.3 118.9 121.3 76 0 104.5-54.7 109-82.8H204.8v-66h181.3zm185.4 6.4V179.2h-56v55.7h-55.7v56h55.7v55.7h56v-55.7H627.2v-56h-55.7z" /></svg>

                            <svg className='w-4 h-4 bg-white opacity-[0.7] rounded fill-sky-900' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z" /></svg>

                            <svg className='w-4 h-4 bg-white opacity-[0.7] rounded fill-sky-900' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" /></svg>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Send;