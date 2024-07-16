/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPgae = () => {
    return (
        <div>

            <div className="bg-[url('/assets/404.jpg')] bg-cover mb-[20px]">

                <div className='text-center pt-10 h-[100vh]'>
                    <h1 className='font-bold text-8xl text-gray-800 pb-[20px]'>Whoops!</h1>
                    <p className='font-normal text-md  text-gray-700 pb-[30px]'>We Couldn't Find That Page</p>
                    <button className='w-[130px] h-[40px]  bg-sky-600 rounded text-white' href="#">Go Back</button>
                </div>

            </div>


        </div >
    );
};

export default ErrorPgae;