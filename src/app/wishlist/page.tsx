"use client"

import React from 'react'
import Aos from "aos";
import aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";
import Image from 'next/image'
const Wishlist = () => {
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
            <div className='w-full flex flex-col gap-8'>
                <h1 className='text-[60px] font-serif font-medium inline-block m-auto pt-8 underline text-black cursor-pointer hover:text-gray-900'   data-aos="zoom-in">WishList</h1>
                <div className='flex sm:flex-row flex-col items-center justify-evenly w-[265px] sm:w-[620px] lg:w-[800px] m-auto bg-[#FBEBB5] py-4 sm:px-8 lg:gap-0 gap-4 lg:p-4 rounded-md'  data-aos="fade-up-right">
                    <Image src={"/m3.png"} height={200} width={200} alt='' className="hover:cursor-pointer" ></Image>
                    <div>
                        <h1 className='text-xl'>Outdoor bar table and stool</h1>
                        <p className='text-xl font-bold'>Color <span className='font-normal'>Wooden Brown</span></p>
                        <p className='text-xl font-bold'>Quatity: <span className='font-normal'>01</span></p>
                    </div>
                    <button className='font-semibold bg-black text-white h-[40px] w-[130px] rounded-md hover:border-2 hover:border-black hover:bg-white hover:text-black'>Add to Cart</button>
                </div>
                <div className='flex sm:flex-row flex-col items-center justify-evenly md:w-[620px] lg:w-[800px] m-auto bg-[#FBEBB5] w-[270px] py-4 sm:px-8 lg:gap-0 gap-4 lg:p-4 rounded-md' data-aos="fade-left">
                    <Image src={"/m4.png"} height={200} width={200} alt='' className="hover:cursor-pointer" ></Image>
                    <div>
                        <h1 className='text-xl'>Outdoor bar table</h1>
                        <p className='text-xl font-bold'>Color <span className='font-normal'>Wooden Brown</span></p>
                        <p className='text-xl font-bold'>Quatity: <span className='font-normal'>02</span></p>
                    </div>
                    <button className='font-semibold bg-black text-white h-[40px] w-[130px] rounded-md hover:border-2 hover:border-black hover:bg-white hover:text-black'>Add to Cart</button>
                </div>
                <div className='flex sm:flex-row flex-col items-center justify-evenly md:w-[620px] lg:w-[800px] m-auto bg-[#FBEBB5] w-[270px] py-4 sm:px-8 lg:gap-0 gap-4 lg:p-4 rounded-md' data-aos="fade-right">
                    <Image src={"/m2.png"} height={200} width={200} alt='' className="hover:cursor-pointer" ></Image>
                    <div>
                        <h1 className='text-xl'>Chair or stool</h1>
                        <p className='text-xl font-bold'>Color <span className='font-normal'>Wooden Brown</span></p>
                        <p className='text-xl font-bold'>Quatity: <span className='font-normal'>01</span></p>
                    </div>
                    <button className='font-semibold bg-black text-white h-[40px] w-[130px] rounded-md hover:border-2 hover:border-black hover:bg-white hover:text-black'>Add to Cart</button>
                </div>
                <div className='flex sm:flex-row flex-col items-center justify-evenly w-[265px]  sm:w-[620px] lg:w-[800px] m-auto bg-[#FBEBB5] py-4 sm:px-8 lg:gap-0 gap-4 lg:p-4 rounded-md' data-aos="fade-left">
                    <Image src={"/m5.png"} height={200} width={200} alt='' className="hover:cursor-pointer" ></Image>
                    <div>
                        <h1 className='text-xl'>Outdoor bar table and chair</h1>
                        <p className='text-xl font-bold'>Color <span className='font-normal'>Wooden Brown</span></p>
                        <p className='text-xl font-bold'>Quatity: <span className='font-normal'>03</span></p>
                    </div>
                    <button className='font-semibold bg-black text-white h-[40px] w-[130px] rounded-md hover:border-2 hover:border-black hover:bg-white hover:text-black'>Add to Cart</button>
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

export default Wishlist
