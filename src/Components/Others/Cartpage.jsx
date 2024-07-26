import React from 'react'
import { Navbar } from "../Navbar"
import cartlogo from "../../assets/Cart.svg"
import { useNavigate } from 'react-router-dom'
import { useContext, useState, useEffect } from "react";
import { AuthContext } from '../../Context/Authcontext';
import { CiHeart } from "react-icons/ci";
import { Button, Image } from '@chakra-ui/react';

export const Cartpage = () => {
    const { isAuth } = useContext(AuthContext);
    const name = useNavigate()
    const [cartItems, setCartItems] = useState([]);


    function handleSignin() {
        name("/signup")
    }

    const removeFromCart = (ind) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(ind, 1);
        setCartItems(updatedCartItems);
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

    };

    useEffect(() => {
        if (isAuth) {
            const storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            setCartItems(storedItems);
        }
    }, [isAuth]);

    {
        {
            return (
                <div>
                    <Navbar />
                    {(!isAuth) ?
                        <div className=' flex flex-col justify-center items-center text-center '>
                            <p className='font-2xl font-bold m-4'>{`Cart (${cartItems.length} items)`}</p>
                            <img style={{ height: "250px", width: "250px" }} src={cartlogo} />
                            <p className='font-bold text-2xl'>Sign in to see your items.</p>

                            <button onClick={handleSignin} className="bg-[#0071dc] m-4 text-white p-3 rounded-full w-[250px]">Sign in</button>

                            <hr className='my-4' />
                            <div>
                                <p className="font-bold text-xl">Time to start shopping!</p>
                                <p className='m-3'>Fill it up with savings from these popular departments.</p>
                            </div>
                            <div className='text-start md:text-center'>
                                <p className="cursor-pointer  mx-2 my-2 block md:inline">@2024 Walmart. All Rights Reserved.</p>
                                <a className="cursor-pointer  mx-2 my-2 block md:inline">Give feedback</a>
                                <a className="cursor-pointer  mx-2 my-2 block md:inline">CA Privacy Rights</a>
                                <a className="cursor-pointer  mx-2 my-2 block md:inline">Your Privacy Choices</a>
                                <a className="cursor-pointer  mx-2 my-2 block md:inline">Notice at collection</a>
                                <a className="cursor-pointer  mx-2 my-2 block md:inline">Request my personal Information</a>
                                <a className="cursor-pointer  mx-2 my-2 block md:inline">California Supply Chains Act</a>
                            </div>

                        </div> :
                        (
                            <div>
                                {cartItems.length > 0 ? (
                                    <div className=''>
                                        <h1 className='text-center text-5xl'>My cart</h1>
                                        <div className='flex items-center flex-wrap p-20'>
                                            {cartItems.map((ele, index) => (
                                                <div className="h-[250px] w-[180px] m-10" key={ele.index}>
                                                    <div className='flex justify-center'>
                                                        <Image src={ele.img} alt="images"
                                                            style={{ height: "100px", width: "120px" }}
                                                        />
                                                        <CiHeart style={{ height: "30px", width: "50px", marginRight: "-40px" }} />
                                                    </div>
                                                    <p className='font-bold' style={{ marginTop: "30px" }}>${ele.price}</p>
                                                    <p>{ele.title.slice(0, 40)}</p>
                                                    <div className='flex justify-center m-1'>
                                                        <Button onClick={() => removeFromCart(index)} className='border mt-2 border-black p-2 rounded-full'>Remove from cart</Button>
                                                    </div>
                                                </div>

                                            ))} </div>
                                    </div>
                                ) : (
                                    <>
                                        <img style={{ height: '250px', width: '250px' }} src={cartlogo} alt="Cart" />
                                        <p className='font-bold text-2xl'>Your cart is empty.</p>
                                    </>
                                )}
                            </div>
                        )}
                </div>
            )
        }



    }

}
