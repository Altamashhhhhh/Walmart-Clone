import { useState } from "react"
import {Data} from "../db.js"
import { Button, Text, Box, Image, Slide } from '@chakra-ui/react';
import { CiHeart } from "react-icons/ci";
import video1 from "../assets/Videos/2.mp4"
import { useContext } from "react";
import { AuthContext } from "../Context/Authcontext";
import { useNavigate, Link } from "react-router-dom"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useToast } from '@chakra-ui/react';
import { IoCheckmarkDoneCircle } from "react-icons/io5";

export const Flashdeals3 = () => {
    const { isAuth } = useContext(AuthContext);
    const toast = useToast()
    const name = useNavigate()


    const CustomTitle = ({ children }) => (
        <div style={{ fontSize: "30px", color: "green" }}>{children}</div>
    );
    const addToCart = (item) => {
        if (!isAuth) {
            name("/signup")
            console.log("Redirecting to signup component...");
            return;
        }
        else {
            toast({
                title: <CustomTitle>Item Added successfully to cart</CustomTitle>,
                status: "success",
                duration: 3000, // 5 seconds
                isClosable: true,
                icon: <IoCheckmarkDoneCircle style={{ fontSize: "50px", color: "green" }} />,
                transition: Slide,
            });

        }
        const existingItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        existingItems.push(item);
        localStorage.setItem('cartItems', JSON.stringify(existingItems));
    };

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };



    const handleAddToCart = (ele) => {
        addToCart(ele);
    };






    return (
        <>

            <div className="flex mx-[20px] my-[30px] flex-wrap">
                <div className="w-full md:w-[60%] px-8">
                    <Box className="flex justify-between">
                        <Text className='mt-2 font-bold text-xl'>Get what’s going viral</Text>
                        <Link to="/Viewall" className="underline">View all</Link>
                    </Box>
                    <Text className='mt-2'>Find your favorite looks & more.</Text>
                    <div className="mt-2">
                        <Slider {...settings}>
                            {Data.map((ele) => (
                                <div className="w-[230px] h-[300px] px-5" key={ele.id}>
                                    <div className='flex justify-center'>
                                        <Image src={ele.img} alt="image" style={{ height: "100px", width: "120px" }} />
                                        <CiHeart style={{ height: "30px", width: "50px", marginRight: "-40px" }} />
                                    </div>
                                    <p className='font-bold' style={{ marginTop: "30px" }}>{ele.price}</p>
                                    <p>{ele.title.slice(0, 80)}</p>
                                    <div className='flex justify-center m-1'>
                                        <Button onClick={() => handleAddToCart(ele)} className='border mt-2 border-black  p-2 rounded-full'>Add to cart+</Button>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
                <div className="video hidden md:flex video w-[40%] px-8">
                    <video src={video1} className="h-[100%]" autoPlay muted></video>
                </div>
            </div>


        </>



    )
}
