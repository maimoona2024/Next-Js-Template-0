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
                        className={`${
                            open ? "block" : "hidden"
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

            {/* Add your sections and components below as needed */}
        </div>
    );
};

export default Shop;
