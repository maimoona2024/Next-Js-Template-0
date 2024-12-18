"use client"
import { IoMdArrowDropright } from "react-icons/io";
import React from 'react'
import Image from 'next/image';
import aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";
const account = () => {
    useEffect(() => {
        aos.init({
            easing: "ease-out-back",
            duration: 1200,
            delay: 100,
            mirror: true,
            anchorPlacement: "bottom-bottom",
            offset: 160,
        });
        aos.refresh();
    }, []);
    return (
        <div className='w-full'>
            {/* First banner section */}
            <div className="bg-[url('/r1.png')] bg-cover bg-center h-[316px] flex flex-col items-center justify-center">
                <Image src={"/icons.png"} width={77} height={77} alt="" data-aos="zoom-in"></Image>
                <h1 className="text-[42px] font-medium
                         " data-aos="zoom-in">My Account</h1>
                <div className="flex items-center justify-center cursor-pointer" data-aos="flip-left">
                    <p className="font-semibold">Home</p>
                    <IoMdArrowDropright className="text-xl" />
                    <p>My Account</p>
                </div>
            </div>
            <div className='w-auto md:w-[900] grid grid-cols-1 md:grid-cols-2 mx-auto'>
                {/* Left Side */}
                <div className='h-[603px] w-auto sm:w-[400px] flex flex-col justify-center max-w-lg mx-auto px-4 space-y-6' data-aos="flip-left">
                    <h1 className=' text-[36px] font-semibold'>Log In</h1>
                    <div>
                        <label className="mb-2 block">Username or email address</label>
                        <input type='text'
                            className="px-4 py-2.5 text-lg rounded-md bg-white border border-gray-400 w-full outline-gray-500" />
                    </div>
                    <div>
                        <label className="mb-2 block">Password</label>
                        <input type='text'
                            className="px-4 py-2.5 text-lg rounded-md bg-white border border-gray-400 w-full outline-gray-500" />
                    </div>
                    {/* checkbox */}
                    <div className="flex">
                        <input type="checkbox" className="w-4" />
                        <label className="text-sm ml-4 ">Remember me</label>
                    </div>
                    {/* Login button */}
                    <div className='flex items-center justify-between'>
                        {/* Left button */}
                        <button className="px-4 py-1 sm:py-2.5  rounded-md bg-white border border-gray-400 w-[100px] sm:w-[215px] outline-gray-500 hover:bg-gray-100" >Log In</button>
                        {/* Right button */}
                        <p className='hover:text-gray-700 cursor-pointer sm:text-sm
                        text-xs '>Lost Your Password?</p>
                    </div>
                </div>

                {/* Right Side */}
                <div className='h-[640px] w-auto sm:w-[400px] flex flex-col justify-center max-w-lg mx-auto px-4 space-y-6 ' data-aos="flip-left">
                    <h1 className=' text-[36px] font-semibold'>Register</h1>
                    <div>
                        <label className="mb-2 block">Email address</label>
                        <input type='text'
                            className="px-4 py-2.5 text-lg rounded-md bg-white border border-gray-400 w-[234px] sm:w-full outline-gray-500" />
                    </div>
                    <p className='sm:w-auto w-[234px]'>
                        A link to set a new password will be sent to your email address.
                    </p>
                    <p className='sm:w-auto w-[234px]'>
                        Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='font-bold'>privacy policy</span>.
                    </p>
                    <button className="px-4 py-1 sm:py-2.5  rounded-md bg-white border border-gray-400 w-[100px] sm:w-[215px] outline-gray-500 hover:bg-gray-100" >Register</button>
                </div>
            </div>
            {/* last section of shop */}
            <section className='my-8 h-auto sm:h-[500px] md:h-[350px] lg:h-[300px] px-16 py-20 bg-[#FAF4F4]'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    <div className='w-auto sm:w-full md:w-[250px]  h-auto sm:h-[108px]'>
                        <p className='font-bold text-[22px] sm:text-[32px]'>Free Delivery</p>
                        <p>For all oders over $50, consectetur adipim scing elit.</p>
                    </div>
                    <div className='w-auto sm:w-full md:w-[250px]  h-auto sm:h-[108px]'>
                        <p className='font-bold text-[22px] sm:text-[32px]'>90 Days Return</p>
                        <p>If goods have problems, consectetur adipim scing elit.</p>
                    </div>
                    <div className='w-auto sm:w-full md:w-[250px] h-auto sm:h-[108px]'>
                        <p className='font-bold text-[22px] sm:text-[32px]'>Secure Payment</p>
                        <p>100% secure payment, consectetur adipim scing elit..</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default account
