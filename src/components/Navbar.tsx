"use client";
import { useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { CiUser } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <header className="bg-[#FBEBB5] py-2">
                <div className="flex justify-between items-center xl:max-w-7xl xl:mx-auto max-w-full px-[8%] flex-wrap">
                    <Link href="/">
                        <h1 className="text-xl text-[#FBEBB5] font-bold">Sofa</h1>
                    </Link>
                    <FiMenu
                        className="lg:hidden block h-6 w-6 cursor-pointer"
                        onClick={() => setOpen(!open)}
                    />
                    <nav className={`${open ? "block" : "hidden"} lg:flex lg:items-center lg:w-auto w-full`}>
                        <ul className="text-base text-black lg:flex lg:justify-between">
                            <li className="lg:px-5 py-2 hover:text-gray-800 font-medium cursor-pointer">
                                <Link href="/">Home</Link>
                            </li>
                            <li className="lg:px-5 py-2 hover:text-gray-800 font-medium cursor-pointer">
                                <Link href="/shop">Shop</Link>
                            </li>
                            <li className="lg:px-5 py-2 hover:text-gray-800 font-medium cursor-pointer">
                                <Link href="/cart">Cart</Link>
                            </li>
                            <li className="lg:px-5 py-2 hover:text-gray-800 font-medium cursor-pointer">
                                <Link href="/contact">Contact</Link>
                            </li>
                            <li className="p-3 cursor-pointer">
                                <CiUser />
                            </li>
                            <li className="p-3 cursor-pointer">
                                <IoSearch />
                            </li>
                            <li className="p-3 cursor-pointer">
                                <CiHeart />
                            </li>
                            <li className="p-3 cursor-pointer">
                                <MdOutlineShoppingCart />
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Navbar;
