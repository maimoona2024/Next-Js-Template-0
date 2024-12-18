"use client"
import React from 'react'
import Image from 'next/image'
import { FaLocationDot } from "react-icons/fa6";
import { IoMdArrowDropright } from "react-icons/io";
import aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";
const contact = () => {
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
            {/* First banner section */}
            <div className="bg-[url('/r1.png')] bg-cover bg-center h-[316px] flex flex-col items-center justify-center">
                <Image src={"/icons.png"} width={77} height={77} alt="" data-aos="zoom-in"></Image>
                <h1 className="text-[42px] font-medium
                         " data-aos="zoom-in">Contact</h1>
                <div className="flex items-center justify-center cursor-pointer" data-aos="flip-left">
                    <p className="font-semibold">Home</p>
                    <IoMdArrowDropright className="text-xl" />
                    <p>Contact</p>
                </div>
            </div>
            <div className='flex flex-col items-center py-16 px-8' data-aos="flip-left">
                <h1 className='sm:text-[36px] sm:font-bold'>Get In Touch With Us</h1>
                <p className='text-[#9F9F9F] w-auto sm:w-[600px]'>For More Information About Our Product & Services. Please Feel Free To Drop Us
                    An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
                </p>
            </div>

            {/* Contact Us Section */}
            <div className="grid sm:grid-cols-2 items-start gap-16 p-4 mx-auto max-w-4xl bg-white font-[sans-serif] py-16">
                <div className='flex flex-col px-4 py-4 gap-8' data-aos="flip-left">
                    <div className='flex gap-4'>
                        <div className='pt-1'>
                            <FaLocationDot />
                        </div>
                        <div>
                            <p className='text-xl text-bold'>Address</p>
                            <p>236 5th SE Avenue, New York NY10000, United States</p>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <div className='pt-1'>
                            <FaLocationDot />
                        </div>
                        <div>
                            <p className='text-xl text-bold'>Phone</p>
                            <p>Mobile: +(84) 546-6789</p>
                            <p>Hotline: +(84) 456-6789</p>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <div className='pt-1'>
                            <FaLocationDot />
                        </div>
                        <div>
                            <p className='text-xl text-bold'>Working Time</p>
                            <p>Monday-Friday: 9:00 - 22:00</p>
                            <p>Saturday-Sunday: 9:00 - 21:00</p>
                        </div>
                    </div>

                </div>

                <form className="ml-auto space-y-4" data-aos="flip-right">
                    <label className='font-bold'>Your Name</label>
                    <input type='text' placeholder='Name'
                        className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-black focus:bg-transparent border border-black border-dashed border-3" />
                    <label className='font-bold'>E-mail Address</label>
                    <input type='email' placeholder='Email'
                        className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-black focus:bg-transparent border border-black border-dashed border-3" />
                    <label className='font-bold'>Subject</label>
                    <input type='text' placeholder='Subject'
                        className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-black focus:bg-transparent border border-black border-dashed border-3" />
                    <label className='font-bold'>Message</label>
                    <textarea placeholder='Message' rows={6}
                        className="w-full rounded-md px-4 bg-gray-100 text-gray-800 text-sm pt-3 outline-black focus:bg-transparent border border-black border-dashed border-3"></textarea>
                    <button type='button'
                        className="text-black border border-black hover:bg-black hover:text-white tracking-wide rounded-md text-sm px-4 py-3 w-full mt-6 font-bold border-dashed border-3">Send</button>
                </form>
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

export default contact
