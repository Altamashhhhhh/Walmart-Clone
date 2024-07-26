// impotred react components
import React from 'react';
// imported images
import creditcardimage from "../assets/Creditcard2.png";
    
export const Creditcard2 = () => {
    return (
        <div className='md p-5 flex items-center justify-center rounded-lg shadow-md py-2 m-3 bg-blue-100 border-rounded'>
            <img src={creditcardimage} alt="Credit Card" />
            <p className='p-2'>
                <span className='text-blue-600 text-xl'>Earn 3% cashback on Walmart.</span>
                <button className='ml-2 px-4 py-2 text-blue-900 border border-black rounded-full'>Learn More</button>
            </p>
        </div>
    );
};
