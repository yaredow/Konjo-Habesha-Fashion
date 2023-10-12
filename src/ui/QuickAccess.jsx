import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const QuickAccess = () => {
  return (
    <div className="bg-gray-100 border-b text-stone-600 py-6">
      <div className="container mx-auto flex gap-8 items-center flex-col">
        <nav className="flex md:space-x-4 px-6 md:px-0 flex-wrap justify-center gap-2 font-custom text-lg">
          <Link to="/search">Search</Link>
          <Link to="/home">Terms of Service</Link>
          <Link to="/home">Shipping & Returns</Link>
          <Link to="/home">Privacy Policy</Link>
          <Link to="/contact-us">Contact Us</Link>
          <Link to="/about-us">About Us</Link>
        </nav>
        <div className=" flex flex-row gap-2">
          <div className=" h-12 w-12">
            <CiFacebook className=" text-3xl hover:text-4xl  text-blue-500 " />
          </div>

          <div className=" h-12 w-12">
            <FaXTwitter className=" text-3xl hover:text-4xl  text-blue-500 " />
          </div>

          <div className=" h-12 w-12">
            <AiOutlineInstagram className=" text-3xl hover:text-4xl text-blue-500 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickAccess;
