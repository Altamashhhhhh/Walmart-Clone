import React from 'react';
import { FaChevronDown } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineHome } from "react-icons/ai";
import Address from "../assets/items.webp"

function Component1() {
    return (
        <div className='hidden md:flex items-center text-white'>
            <img src={Address} className='h-6 w-6 my-1.5 mx-5' />
            <p className='font-bold cursor-pointer'>Where do you want items?</p>
            <FaChevronDown className='m-1.5 cursor-pointer' />
            <p className='cursor-pointer mx-2'>|</p>
            <FaLocationDot className='m-1.5 cursor-pointer' />
            <p className='cursor-pointer'>Sacamento, 95829</p>
            <AiOutlineHome className='m-1.5 cursor-pointer' />
            <p className='cursor-pointer'>Sacmento Supercenter</p>
        </div>
    );
}

function Component2() {
    return (
        <div className='hidden md:flex font-bold text-white text-sm items-center gap-x-3'>
            <a className='hover:underline cursor-pointer'>Deals</a>
            <a className='hover:underline cursor-pointer'>Easter</a>
            <a className='hover:underline cursor-pointer'>Walmart Style</a>
            <a className='hover:underline cursor-pointer'>Baby Days</a>
            <a className='hover:underline cursor-pointer'>Balck & Unlimited</a>
            <a className='hover:underline cursor-pointer'>Fashion</a>
            <a className='mx-2 hover:underline cursor-pointer'>Home</a>
        </div>
    );
}

export const Navbar2 = () => {
    return (
        <div className='hidden md:flex mt-0.5 bg-[#0071dc] justify-between py-1 h-12'>
            <Component1 />
            <Component2 />
        </div>
    );
};
