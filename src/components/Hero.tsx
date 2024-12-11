import React from 'react'
import Image from 'next/image'
import { CiClock2 } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";


const Hero = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className='bg-[#FBEBB5]'>
                <div className='grid grid-cols-1 lg:grid-cols-2 px-20'>
                    {/* Left Side */}
                    <div className='sm:w-[440px] h-[276px] sm:px-14 py-44'>
                        <p className='font-bold text-[25px] md:text-[44px]'>Rocket Single</p>
                        <p className='font-bold text-[25px] md:text-[44px]'>Seater</p>
                        <button className=' border-b border-gray-950 font-bold'>Shop Now</button>
                    </div>
                    {/* Right SIde */}
                    <div>
                        <Image src={"/Rocket single seater 1.png"} width={853} height={1000} alt=''></Image>
                    </div>
                </div>
            </section>





            {/* Section no 2 side table section */}
            <section className='bg-[#FAF4F4]'>
                <div className='grid grid-cols-1 md:grid-cols-2 py-10 px-20'>
                    {/* Left Side */}
                    <div>
                        <Image src={"/s1.png"} width={400} height={400} alt=''></Image>
                        <p className='font-bold text-[30px]'>Side table</p>
                        <button className=' border-b border-gray-950 font-bold'>View More</button>
                    </div>
                    {/* Right Side */}
                    <div>
                        <Image src={"/s2.png"} width={400} height={400} alt=''></Image>
                        <p className='font-bold text-[30px] mt-7'>Side table</p>
                        <button className=' border-b border-gray-950 font-bold'>View More</button>
                    </div>
                </div>
            </section>



            {/* Section no 3 top pick for you */}
            <section className='h-auto md:h-[900px] py-20 px-8 w-full'>
                <div className='flex flex-col items-center'>
                    <h1 className='text-[36px]'>Top Picks For You</h1>
                    <p className='text-[#9F9F9F]'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
                </div>


                {/* Cards of top pick for you */}
                <div className='grid grid-cols-1 md:grid-cols-3'>
                    {/* Card 1 */}
                    <div className="w-[240px] h-[382px]">
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
                    <div className="w-[240px] h-[382px]">
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
                    <div className="w-[240px] h-[382px]">
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
                    <div className="w-[240px] h-[382px]">
                        <div>
                            <Image src={"/m4.png"} width={200} height={200} alt=''></Image>
                        </div>
                        <div className="p-6">
                            <p className="mt-4 text-sm text-gray-500 leading-relaxed">Plain console with teak mirror
                            </p>
                            <h3 className="text-gray-800 text-xl font-bold">Rs. 25,000.00</h3>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button className=' border-b border-gray-950 font-bold'>View More</button>
                </div>
            </section>



            {/* New Arrival Asgaard Sofa Section */}
            <section className='bg-[#FFF9E5] h-auto md:h-[550px] py-20 px-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    {/* left side */}
                    <div>
                        <Image src={"/asgaard.png"} width={900} height={700} alt=''></Image>
                    </div>
                    {/* right Side */}
                    <div className='pt-10 flex flex-col gap-4 items-center'>
                        <p className='text-xl'>New Arrivals</p>
                        <h1 className='text-[48px] font-extrabold font-mono'>Asgaard sofa</h1>
                        <button type="button" className="text-[20px] w-[255px] h-[64px] px-5 py-2.5 rounded-md text-sm tracking-wider font-medium border border-black outline-none bg-transparent hover:bg-[#FBEBB5] text-black hover:text-black transition-all duration-300">Order Now</button>
                    </div>
                </div>
            </section>




            {/* Our Blogs section */}
            <section className='px-8 py-8 w-full'>
                {/* Our blogs Heading */}
                <div className='flex flex-col items-center py-8'>
                    <h1 className='text-[36px]'>Our Blogs</h1>
                    <p className='text-[#9F9F9F]'>Find a bright ideal to suit your taste with our great selection</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {/* Card 1 */}
                    <div className='flex flex-col gap-2'>
                        <Image src={"/b2.png"} width={393} height={393} alt=''></Image>
                        <div className='flex justify-center'>
                            <p>Going all-in with millennial design</p>
                        </div>
                        <div className='flex justify-center'>
                            <button className=' border-b border-gray-950 font-bold'>View More</button>
                        </div>
                        <div className='flex justify-center gap-1'>
                            <div className='flex items-center gap-1'>
                                <CiClock2 />
                                <p>5 min</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <CiCalendar />
                                <p>12th Oct 2022</p>
                            </div>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className='flex flex-col gap-2'>
                        <Image src={"/b3.png"} width={393} height={393} alt=''></Image>
                        <div className='flex justify-center'>
                            <p>Going all-in with millennial design</p>
                        </div>
                        <div className='flex justify-center'>
                            <button className=' border-b border-gray-950 font-bold'>View More</button>
                        </div>
                        <div className='flex justify-center gap-1'>
                            <div className='flex items-center gap-1'>
                                <CiClock2 />
                                <p>5 min</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <CiCalendar />
                                <p>12th Oct 2022</p>
                            </div>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className='flex flex-col gap-2'>
                        <Image src={"/b1.png"} width={393} height={393} alt=''></Image>
                        <div className='flex justify-center'>
                            <p>Going all-in with millennial design</p>
                        </div>
                        <div className='flex justify-center'>
                            <button className=' border-b border-gray-950 font-bold'>View More</button>
                        </div>
                        <div className='flex justify-center gap-1'>
                            <div className='flex items-center gap-1'>
                                <CiClock2 />
                                <p>5 min</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <CiCalendar />
                                <p>12th Oct 2022</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* View all Posts button */}
            <div className='flex justify-center py-12'>
                <button className=' border-b border-gray-950 font-bold'>View All Post</button>
            </div>


            {/* Instagram Section */}
            <section className='bg-[url("/ins.png")] bg-cover bg-center h-[450px] w-full flex flex-col justify-center items-center'>
                <div className='flex flex-col items-center gap-4'>
                    <h1 className='text-4xl font-extrabold sm:text-[45px]'>Our Instagram</h1>
                    <p>Follow our store on Instagram</p>
                    <button className='bg-[#f8e6e6] shadow-lg px-8 py-1 w-[255px] h-[64px] rounded-3xl texl-[20px]'>Follow Us</button>
                </div>
            </section>
        </div>
    )
}

export default Hero
