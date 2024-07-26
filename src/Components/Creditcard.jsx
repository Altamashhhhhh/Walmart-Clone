// imported recat components
import React from 'react'
// imported images
import creditcardimage from "../assets/Creditcard.webp"


export const Creditcard = () => {
    return (
        <div className='p-5 flex items-center justify-center py-2 rounded-lg m-3 bg-blue-100 border-rounded-'>
            <img src={creditcardimage}></img>  
            <p><span className='font-bold p-2'>Earn 5% cashback on Walmart. </span>See if you're pre-approved with no credit risk. <span><a className='underline font-bold'>Learn how</a></span></p>
        </div>
    )
}
