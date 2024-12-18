"use client"

import React from 'react'
import { IoSearch } from "react-icons/io5";
import Aos from "aos";
import aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";
const search = () => {
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
        <div>
            <div className='h-[100px] py-8 sm:py-6' data-aos="fade-right">
                <div className="flex rounded-md overflow-hidden max-w-md mx-auto font-[sans-serif] w-[250px] sm:w-full border-2 border-black">
                    <input type="email" placeholder="Search Something..."
                        className="w-[250px] sm:w-full outline-none bg-white text-gray-600 text-sm px-4 py-1 sm:py-3" />
                    <button type='button' className="flex items-center justify-center bg-black px-5">
                        <IoSearch className='text-[#FBEBB5]' />
                    </button>
                </div>
            </div>
            <div className="bg-[url('/woman.png')] bg-cover bg-center w-full h-screen cursor-pointer"  data-aos="zoom-in">

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

export default search
