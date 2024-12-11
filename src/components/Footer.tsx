import React from "react";
import { LuSendHorizontal } from "react-icons/lu";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-white text-black">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 py-10 px-10">
        {/* Address Section */}
        <div className="flex items-center">
          400 University Drive Suite 200 Coral Gables,
          FL 33134 USA
        </div>

        {/* Links Section */}
        <div>
          <h2 className="text-lg font-bold mb-4 text-gray-500">Links</h2>
          <p className="text-sm mb-2 font-extralight">Home</p>
          <p className="text-sm mb-2 font-extralight">About</p>
          <p className="text-sm mb-2 font-extralight">Shop</p>
          <p className="text-sm font-extralight">Contact</p>

        </div>

        {/* Help Section */}
        <div>
          <h2 className="text-lg font-bold mb-4 text-gray-500">Help</h2>
          <ul className="space-y-2 text-sm">
            <li className="font-extralight">Payment Options</li>
            <li className="font-extralight">Returns</li>
            <li className="font-extralight">Privacy Policy</li>
          </ul>
        </div>

        {/* Quick Link Section */}
        <div>
          <h2 className="text-lg font-bold mb-4 text-gray-500">News Letter</h2>
          <div className="flex gap-2 sm:flex-row flex-col">
            <input type="text" placeholder="Enter Your Email Address" className=" h-[40px] w-[286px] bg-gray-200 rounded-md p-1" />
            <button className="text-[18px] font-light text-gray-500">SUBSCRIBE</button>
          </div>

        </div>


      </div>

      {/* Footer Bottom */}
      <div className="flex justify-center items-center border-t border-gray-300 font-extralight text-sm h-12">
        <p>2022 Meubel House. All rights reverved</p>
      </div>
    </footer>
  );
};

export default Footer;
