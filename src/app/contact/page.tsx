import React from 'react'
import Image from 'next/image'
import { FaLocationDot } from "react-icons/fa6";

const contact = () => {
    return (
        <div>
            <div>
                <Image src={"/contact.png"} width={1440} height={36} alt=''></Image>
            </div>
            <div className='flex flex-col items-center py-16'>
                <h1 className='text-[36px]'>Get In Touch With Us</h1>
                <p className='text-[#9F9F9F]'>For More Information About Our Product & Services. Please Feel Free To Drop Us</p>
                <p className='text-[#9F9F9F]'>
                    An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
                </p>
            </div>

            {/* Contact Us Section */}
            <div className="grid sm:grid-cols-2 items-start gap-16 p-4 mx-auto max-w-4xl bg-white font-[sans-serif] py-16">
                <div className='flex flex-col px-4 py-4 gap-8'>
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

                <form className="ml-auto space-y-4">
                    <label>Your Name</label>
                    <input type='text' placeholder='Name'
                        className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-black focus:bg-transparent border border-black" />
                    <label>E-mail Address</label>
                    <input type='email' placeholder='Email'
                        className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-black focus:bg-transparent border border-black" />
                    <label>Subject</label>
                    <input type='text' placeholder='Subject'
                        className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-black focus:bg-transparent border border-black" />
                    <label>Message</label>
                    <textarea placeholder='Message' rows={6}
                        className="w-full rounded-md px-4 bg-gray-100 text-gray-800 text-sm pt-3 outline-black focus:bg-transparent border border-black"></textarea>
                    <button type='button'
                        className="text-black border border-black hover:bg-[#f7e39c] tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6">Send</button>
                </form>
            </div>
        </div>
    )
}

export default contact
