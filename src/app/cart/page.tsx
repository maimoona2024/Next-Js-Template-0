"use client"
import React from 'react'
import Image from 'next/image'
import { RiArrowDownSLine } from "react-icons/ri";
import { FaMinus } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";
const cart = () => {
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
                         " data-aos="zoom-in">Cart</h1>
                <div className="flex items-center justify-center cursor-pointer" data-aos="flip-left">
                    <p className="font-semibold">Home</p>
                    <IoMdArrowDropright className="text-xl" />
                    <p>Cart</p>
                </div>
            </div>




            {/* Cart Section */}
            <div className="font-sans md:max-w-4xl max-md:max-w-xl mx-auto bg-white py-4">
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="md:col-span-2 bg-gray-100 p-4 rounded-md" data-aos="flip-left">
                        <h2 className="text-2xl font-bold text-gray-800">Cart</h2>
                        <hr className="border-gray-300 mt-4 mb-8" />

                        <div className="space-y-4">
                            <div className="grid grid-cols-3 items-center gap-4">
                                <div className="col-span-2 flex items-center gap-4">
                                    <div className="w-24 h-24 shrink-0 bg-white p-2 rounded-md">
                                        <img src='/m16.png' className="w-full h-full object-contain" />
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-gray-800">Asgaard Sofa</h3>
                                        <h6 className="text-xs text-red-500 cursor-pointer mt-0.5">Remove</h6>

                                        <div className="flex gap-4 mt-4">
                                            <div className="relative group">
                                                <button type="button"
                                                    className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">
                                                    XL
                                                    <RiArrowDownSLine />
                                                </button>

                                                <ul className='group-hover:block hidden absolute rounded-md min-w-[80px] shadow-lg bg-white z-[1000]'>
                                                    <li className='py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer'>SM</li>
                                                    <li className='py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer'>MD</li>
                                                    <li className='py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer'>XL</li>
                                                    <li className='py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer'>XXL</li>
                                                </ul>
                                            </div>

                                            <div>
                                                <button type="button"
                                                    className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">
                                                    <FaMinus />
                                                    <span className="mx-2.5">1</span>
                                                    <FaPlus />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ml-auto">
                                    <h4 className="text-base font-bold text-gray-800">$20.00</h4>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 items-center gap-4">
                                <div className="col-span-2 flex items-center gap-4">
                                    <div className="w-24 h-24 shrink-0 bg-white p-2 rounded-md">
                                        <img src='/m5.png' className="w-full h-full object-contain" />
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-gray-800">Trenton modular Table_3</h3>
                                        <h6 className="text-xs text-red-500 cursor-pointer mt-0.5">Remove</h6>

                                        <div className="flex gap-4 mt-4">
                                            <div className="relative group">
                                                <button type="button"
                                                    className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">
                                                    XL
                                                    <RiArrowDownSLine />
                                                </button>

                                                <ul className='group-hover:block hidden absolute rounded-md min-w-[80px] shadow-lg bg-white z-[1000]'>
                                                    <li className='py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer'>SM</li>
                                                    <li className='py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer'>MD</li>
                                                    <li className='py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer'>XL</li>
                                                    <li className='py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer'>XXL</li>
                                                </ul>
                                            </div>

                                            <div>
                                                <button type="button"
                                                    className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">
                                                    <FaMinus />
                                                    <span className="mx-2.5">1</span>
                                                    <FaPlus />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ml-auto">
                                    <h4 className="text-base font-bold text-gray-800">$120.00</h4>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 items-center gap-4">
                                <div className="col-span-2 flex items-center gap-4">
                                    <div className="w-24 h-24 shrink-0 bg-white p-2 rounded-md">
                                        <img src='/m4.png' className="w-full h-full object-contain" />
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-gray-800">Trenton modular sofa_3</h3>
                                        <h6 className="text-xs text-red-500 cursor-pointer mt-0.5">Remove</h6>

                                        <div className="flex gap-4 mt-4">
                                            <div className="relative group">
                                                <button type="button"
                                                    className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">
                                                    XL
                                                    <RiArrowDownSLine />
                                                </button>

                                                <ul className='group-hover:block hidden absolute rounded-md min-w-[80px] shadow-lg bg-white z-[1000]'>
                                                    <li className='py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer'>SM</li>
                                                    <li className='py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer'>MD</li>
                                                    <li className='py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer'>XL</li>
                                                    <li className='py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer'>XXL</li>
                                                </ul>
                                            </div>

                                            <div>
                                                <button type="button"
                                                    className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">
                                                    <FaMinus />
                                                    <span className="mx-2.5">1</span>
                                                    <FaPlus />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ml-auto">
                                    <h4 className="text-base font-bold text-gray-800">$50.00</h4>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* Right section */}
                    <div className="bg-gray-100 rounded-md p-4 md:sticky top-0" data-aos="flip-right">
                        <div className="flex border border-[#FBEBB5] overflow-hidden rounded-md">
                            <input type="email" placeholder="Promo code"
                                className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-2.5" />
                            <button type='button' className="flex items-center justify-center font-semibold tracking-wide bg-[#FBEBB5] hover:bg-[#dfd09f] px-4 text-sm text-black">
                                Apply
                            </button>
                        </div>

                        <ul className="text-gray-800 mt-8 space-y-4">
                            <li className="flex flex-wrap gap-4 text-base">Discount <span className="ml-auto font-bold">$0.00</span></li>
                            <li className="flex flex-wrap gap-4 text-base">Shipping <span className="ml-auto font-bold">$2.00</span></li>
                            <li className="flex flex-wrap gap-4 text-base">Tax <span className="ml-auto font-bold">$4.00</span></li>
                            <li className="flex flex-wrap gap-4 text-base font-bold">Total <span className="ml-auto">$52.00</span></li>
                        </ul>

                        <div className="mt-8 space-y-2">
                            <button type="button" className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-[#FBEBB5] hover:bg-[] text-black rounded-md">Checkout</button>
                            <button type="button" className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent text-gray-800 border border-gray-300 rounded-md">Continue Shopping  </button>
                        </div>
                    </div>
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

export default cart
