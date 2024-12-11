import React from 'react'
import Image from 'next/image'
import { CiFilter } from "react-icons/ci";
import { MdGridView } from "react-icons/md";
import { MdOutlineCalendarViewDay } from "react-icons/md";

const shop = () => {
    return (
        <div>
            <div>
                <Image src={"/shop.png"} width={1440} height={36} alt=''></Image>
            </div>
            <div className='bg-[#f0dbdb] w-full flex-col sm:flex sm:flex-row items-center gap-4 px-8 py-4'>
                <div className='flex items-center gap-4'>
                    <CiFilter />
                    <p>Filter</p>
                </div>
                <div>
                    <MdGridView />
                </div>
                <div>
                    <MdOutlineCalendarViewDay />
                </div>
                <div className='border border-l-2 border-black border-none'>
                    <p>Showing 1–16 of 32 results</p>
                </div>
                {/* Button Group 1 */}
                <div className="font-[sans-serif] w-max mx-auto  rounded-lg flex sm:flex-row flex-col">
                    <button type="button" className="px-6 py-3 bg-white text-black text-sm font-semibold border-none outline-none hover:bg-gray-200 active:bg-gray-300">Show</button>
                    <button type="button" className="px-6 py-3 bg-white text-black text-sm font-semibold border-none outline-none hover:bg-gray-200 active:bg-gray-300">16</button>
                    <div className='text-[#f0dbdb]'>
                        Hello
                    </div>
                    <button type="button" className="px-6 py-3 bg-white text-black text-sm font-semibold border-none outline-none hover:bg-gray-200 active:bg-gray-300">Sort By</button>
                    <button type="button" className="px-6 py-3 bg-white text-black text-sm font-semibold border-none outline-none hover:bg-gray-200 active:bg-gray-300">Default</button>
                </div>
            </div>


            <section>
                <div className='grid grid-cols-1 md:grid-cols-3 sm:px-16 px-auto pt-16'>
                    {/* Card 1 */}
                    <div className="w-[287px] h-[382px]">
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
                    <div className="w-[287px] h-[382px]">
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
                    <div className="w-[287px] h-[382px]">
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
                    <div className="w-[287px] h-[382px]">
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
                    <div className="w-[287px] h-[382px]">
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
                    <div className="w-[287px] h-[382px]">
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
                    <div className="w-[287px] h-[382px]">
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
                    <div className="w-[287px] h-[382px]">
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
                    <div className="w-[287px] h-[382px]">
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
                    <div className="w-[287px] h-[382px]">
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
                    <div className="w-[287px] h-[382px]">
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
                    <div className="w-[287px] h-[382px]">
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
                    <div className="w-[287px] h-[382px]">
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
                    <div className="w-[287px] h-[382px]">
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
                    <div className="w-[287px] h-[382px]">
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
                    <div className="w-[287px] h-[382px]">
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
    )
}

export default shop
