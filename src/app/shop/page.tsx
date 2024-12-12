"use client";

import { useState } from "react";
import React from "react";
import Image from "next/image";
import { CiFilter } from "react-icons/ci";
import { MdGridView, MdOutlineCalendarViewDay } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

const Shop = () => {
    const [open, setOpen] = useState(false);
    const [seo, setSeo] = useState("Test");

    return (
        <div>
            <div>
                <Image src={"/shop.png"} width={1440} height={36} alt="Shop Banner" />
            </div>
            <header className="bg-[#FBEBB5] py-2 w-full flex itemsce">
                <div className="flex justify-between items-center xl:max-w-7xl xl:mx-auto max-w-full px-[8%] flex-wrap w-full">
                    <FiMenu
                        className="lg:hidden block h-6 w-6 cursor-pointer"
                        onClick={() => setOpen(!open)}
                    />
                    <nav
                        className={`${open ? "block" : "hidden"
                            } lg:flex lg:items-center lg:w-auto w-full flex flex-col lg:flex-row items-center`}
                    >
                        <ul className="text-base w-full text-black lg:flex lg:justify-between flex flex-col lg:flex-row gap-4">
                            <li className="px-4 flex justify-center md:items-center gap-2 lg:px-5 py-2 hover:text-gray-800 font-medium cursor-pointer">
                                <CiFilter />
                                <p>Filter</p>
                            </li>
                            <li className="px-4 flex justify-center md:items-center hover:text-gray-800 font-medium cursor-pointer">
                                <MdGridView />
                            </li>
                            <li className="px-4 flex justify-center md:items-center hover:text-gray-800 font-medium cursor-pointer">
                                <MdOutlineCalendarViewDay />
                            </li>
                            <li className="px-4 flex justify-center md:items-center hover:text-gray-800 font-medium cursor-pointer">
                                <p>Showing 1–16 of 32 results</p>
                            </li>
                            <li className="font-[sans-serif] w-max mx-auto rounded-lg flex lg:flex-row flex-col p-3 cursor-pointer sm:justify-center items-center">
                                <button
                                    type="button"
                                    className="px-6 py-3 border-black border-2 bg-white border-b-0 lg:border-none text-black text-sm font-semibold outline-none hover:bg-gray-200 active:bg-gray-300"
                                >
                                    Show
                                </button>
                                <button
                                    type="button"
                                    className="px-6 py-3 border-black border-2 lg:border-none w-[88px] lg:w-auto bg-white text-black text-sm font-semibold outline-none hover:bg-gray-200 active:bg-gray-300"
                                >
                                    16
                                </button>
                                <div className="text-[#FBEBB5]">Hello</div>
                                <button
                                    type="button"
                                    className="px-5 py-3 lg:px-3 lg:w-32 border-black border-2 border-b-0 lg:border-none bg-white text-black text-sm font-semibold outline-none hover:bg-gray-200 active:bg-gray-300"
                                >
                                    Sort By
                                </button>
                                <button
                                    type="button"
                                    className="px-5 py-3 lg:px-6 border-black border-2 lg:border-none bg-white text-black text-sm font-semibold outline-none hover:bg-gray-200 active:bg-gray-300"
                                >
                                    Default
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <section>
                <div className='w-full grid grid-cols-1 md:grid-cols-3 sm:px-16 px-auto pt-16'>
                    {/* Card 1 */}
                    <div className="sm:w-[287px] flex flex-col items-center">
                        <div>
                            <Image src={"/m1.png"} width={200} height={200} alt=''></Image>
                        </div>
                        <div className="p-6">
                            <p className="mt-4 text-sm text-gray-500 leading-relaxed">Trenton modular sofa_3
                            </p>
                            <h3 className="text-gray-800 text-xl font-bold">Rs. 25,000.00</h3>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="sm:w-[287px] h-[382px] flex flex-col items-center">
                        <div>
                            <Image src={"/m2.png"} width={200} height={200} alt=''></Image>
                        </div>
                        <div className="p-6">
                            <p className="mt-4 text-sm text-gray-500 leading-relaxed">Granite dining table with dining
                            </p>
                            <h3 className="text-gray-800 text-xl font-bold">Rs. 25,000.00</h3>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="sm:w-[287px] h-[382px] flex flex-col items-center">
                        <div>
                            <Image src={"/m3.png"} width={200} height={200} alt=''></Image>
                        </div>
                        <div className="p-6">
                            <p className="mt-4 text-sm text-gray-500 leading-relaxed">Outdoor bar table and stool
                            </p>
                            <h3 className="text-gray-800 text-xl font-bold">Rs. 25,000.00</h3>
                        </div>
                    </div>
                    {/* Card 4 */}
                    <div className="sm:w-[287px] h-[382px] flex flex-col items-center">
                        <div>
                            <Image src={"/m4.png"} width={200} height={200} alt=''></Image>
                        </div>
                        <div className="p-6">
                            <p className="mt-4 text-sm text-gray-500 leading-relaxed">Plain console with teak mirror
                            </p>
                            <h3 className="text-gray-800 text-xl font-bold">Rs. 25,000.00</h3>
                        </div>
                    </div>
                    {/* Card 5 */}
                    <div className="sm:w-[287px] h-[382px] flex flex-col items-center">
                        <div>
                            <Image src={"/m5.png"} width={200} height={200} alt=''></Image>
                        </div>
                        <div className="p-6">
                            <p className="mt-4 text-sm text-gray-500 leading-relaxed">Trenton modular sofa_3
                            </p>
                            <h3 className="text-gray-800 text-xl font-bold">Rs. 25,000.00</h3>
                        </div>
                    </div>
                    {/* Card 6 */}
                    <div className="sm:w-[287px] h-[382px] flex flex-col items-center">
                        <div>
                            <Image src={"/m6.png"} width={200} height={200} alt=''></Image>
                        </div>
                        <div className="p-6">
                            <p className="mt-4 text-sm text-gray-500 leading-relaxed">Granite dining table with dining
                            </p>
                            <h3 className="text-gray-800 text-xl font-bold">Rs. 25,000.00</h3>
                        </div>
                    </div>
                    {/* Card 7 */}
                    <div className="sm:w-[287px] h-[382px] flex flex-col items-center">
                        <div>
                            <Image src={"/m7.png"} width={200} height={200} alt=''></Image>
                        </div>
                        <div className="p-6">
                            <p className="mt-4 text-sm text-gray-500 leading-relaxed">Outdoor bar table and stool
                            </p>
                            <h3 className="text-gray-800 text-xl font-bold">Rs. 25,000.00</h3>
                        </div>
                    </div>
                    {/* Card 8 */}
                    <div className="sm:w-[287px] h-[382px] flex flex-col items-center">
                        <div>
                            <Image src={"/m8.png"} width={200} height={200} alt=''></Image>
                        </div>
                        <div className="p-6">
                            <p className="mt-4 text-sm text-gray-500 leading-relaxed">Plain console with teak mirror
                            </p>
                            <h3 className="text-gray-800 text-xl font-bold">Rs. 25,000.00</h3>
                        </div>
                    </div>
                    {/* Card 9 */}
                    <div className="sm:w-[287px] h-[382px] flex flex-col items-center">
                        <div>
                            <Image src={"/m9.png"} width={200} height={200} alt=''></Image>
                        </div>
                        <div className="p-6">
                            <p className="mt-4 text-sm text-gray-500 leading-relaxed">Trenton modular sofa_3
                            </p>
                            <h3 className="text-gray-800 text-xl font-bold">Rs. 25,000.00</h3>
                        </div>
                    </div>
                    {/* Card 10 */}
                    <div className="sm:w-[287px] h-[382px] flex flex-col items-center">
                        <div>
                            <Image src={"/m10.png"} width={200} height={200} alt=''></Image>
                        </div>
                        <div className="p-6">
                            <p className="mt-4 text-sm text-gray-500 leading-relaxed">Granite dining table with dining
                            </p>
                            <h3 className="text-gray-800 text-xl font-bold">Rs. 25,000.00</h3>
                        </div>
                    </div>
                    {/* Card 11 */}
                    <div className="sm:w-[287px] h-[382px] flex flex-col items-center">
                        <div>
                            <Image src={"/m11.png"} width={200} height={200} alt=''></Image>
                        </div>
                        <div className="p-6">
                            <p className="mt-4 text-sm text-gray-500 leading-relaxed">Outdoor bar table and stool
                            </p>
                            <h3 className="text-gray-800 text-xl font-bold">Rs. 25,000.00</h3>
                        </div>
                    </div>
                    {/* Card 12 */}
                    <div className="sm:w-[287px] h-[382px] flex flex-col items-center">
                        <div>
                            <Image src={"/m12.png"} width={200} height={200} alt=''></Image>
                        </div>
                        <div className="p-6">
                            <p className="mt-4 text-sm text-gray-500 leading-relaxed">Plain console with teak mirror
                            </p>
                            <h3 className="text-gray-800 text-xl font-bold">Rs. 25,000.00</h3>
                        </div>
                    </div>
                    {/* Card 13 */}
                    <div className="sm:w-[287px] h-[382px] flex flex-col items-center">
                        <div>
                            <Image src={"/m13.png"} width={200} height={200} alt=''></Image>
                        </div>
                        <div className="p-6">
                            <p className="mt-4 text-sm text-gray-500 leading-relaxed">Trenton modular sofa_3
                            </p>
                            <h3 className="text-gray-800 text-xl font-bold">Rs. 25,000.00</h3>
                        </div>
                    </div>
                    {/* Card 14 */}
                    <div className="sm:w-[287px] h-[382px] flex flex-col items-center">
                        <div>
                            <Image src={"/m14.png"} width={200} height={200} alt=''></Image>
                        </div>
                        <div className="p-6">
                            <p className="mt-4 text-sm text-gray-500 leading-relaxed">Granite dining table with dining
                            </p>
                            <h3 className="text-gray-800 text-xl font-bold">Rs. 25,000.00</h3>
                        </div>
                    </div>
                    {/* Card 15*/}
                    <div className="sm:w-[287px] h-[382px] flex flex-col items-center">
                        <div>
                            <Image src={"/m15.png"} width={200} height={200} alt=''></Image>
                        </div>
                        <div className="p-6">
                            <p className="mt-4 text-sm text-gray-500 leading-relaxed">Outdoor bar table and stool
                            </p>
                            <h3 className="text-gray-800 text-xl font-bold">Rs. 25,000.00</h3>
                        </div>
                    </div>
                    {/* Card 16 */}
                    <div className="sm:w-[287px] h-[382px] flex flex-col items-center">
                        <div>
                            <Image src={"/m16.png"} width={200} height={200} alt=''></Image>
                        </div>
                        <div className="p-6">
                            <p className="mt-4 text-sm text-gray-500 leading-relaxed">Plain console with teak mirror
                            </p>
                            <h3 className="text-gray-800 text-xl font-bold">Rs. 25,000.00</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Next pages buttons */}
            <div className='flex gap-2 justify-center pb-16'>
                <button type="button" className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium outline-none bg-[#f7e39c] text-black hover:bg-transparent hover:text-black  transition-all duration-300">1</button>
                <button type="button" className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium outline-none bg-[#f7e39c] text-black hover:bg-transparent hover:text-black  transition-all duration-300">2</button>
                <button type="button" className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium outline-none bg-[#f7e39c] text-black hover:bg-transparent hover:text-black  transition-all duration-300">3</button>
                <button type="button" className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium outline-none bg-[#f7e39c] text-black hover:bg-transparent hover:text-black  transition-all duration-300">Next</button>
            </div>


            {/* last section of shop */}
            <section className='h-auto sm:h-[300px] px-16 py-20 bg-[#FAF4F4]'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    <div className='w-[250px] h-[108px]'>
                        <p className='text-[32px]'>Free Delivery</p>
                        <p>For all oders over $50, consectetur adipim scing elit.</p>
                    </div>
                    <div className='w-[250px] h-[108px]'>
                        <p className='text-[32px]'>90 Days Return</p>
                        <p>If goods have problems, consectetur adipim scing elit.</p>
                    </div>
                    <div className='w-[250px] h-[108px]'>
                        <p className='text-[32px]'>Secure Payment</p>
                        <p>100% secure payment, consectetur adipim scing elit..</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Shop;
