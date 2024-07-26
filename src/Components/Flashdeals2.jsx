// imported react hook
import { useState, useContext } from "react"
// imported data
import {Data} from "../db.js"
// imported Chakra components
import { Button, GridItem, Text, Image, Box, Slide, useToast } from '@chakra-ui/react';
// imported icon
import { CiHeart } from "react-icons/ci";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
// imported image
import GrassImage from "../assets/Grass.webp"
import { AuthContext } from "../Context/Authcontext";
// imported router hook
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
// imported slider component
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";






export const Flashdeals2 = () => {
    const { isAuth } = useContext(AuthContext);

    const name = useNavigate()
    const toast = useToast()


    const CustomTitle = ({ children }) => (
        <div style={{ fontSize: "30px", color: "green" }}>{children}</div>
    );


    const addToCart = (item) => {
        if (!isAuth) {
            name("/signup")
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



    const handleAddToCart = (ele) => {
        addToCart(ele);
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


    return (
        <>

            <div className="flex mx-[20px] my-[30px] flex-wrap">
                <div className="w-full md:w-[60%] px-8">
                    <Box className="flex justify-between">
                        <Text className='mt-2 font-bold text-xl'>Keep it all safe & sound</Text>
                        <Link to="/Viewall" className="underline">View all</Link>
                    </Box>
                    <Text className='mt-2'>So many ways to get organized.</Text>
                    <div className="mt-2">
                        <Slider {...settings}>
                            {Data.map((ele) => (
                                <div className="w-[230px] h-[300px] px-5" key={ele.id}>
                                    <div className='flex justify-center'>
                                        <Image src={ele.img} alt="image" style={{ height: "100px", width: "120px" }} />
                                        <CiHeart style={{ height: "30px", width: "50px", marginRight: "-40px" }} />
                                    </div>
                                    <p className='font-bold' style={{ marginTop: "30px" }}>{ele.price}</p>
                                    <p>{ele.description.slice(0, 80)}</p>
                                    <div className='flex justify-center m-1'>
                                        <Button onClick={() => handleAddToCart(ele)} className='border mt-2 border-black  p-2 rounded-full'>Add to cart+</Button>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>





                <div className="hidden md:flex px-8 video w-[40%] ">
                    <GridItem className="h-[90%] w-[100%]" borderRadius={15} bgImage={`url(${GrassImage})`}
                        backgroundSize="cover" backgroundPosition="center">
                        <p className='font-bold p-3 text-xl text-white'>Concert-ready outfits</p>
                        <p className='font-bold p-3 text-5xl text-white'>The Festival <br />Shop</p>
                        <Button className=' m-10  p-3 w-40 border font-bold border-black bg-white rounded-full'>Shop now</Button>
                    </GridItem>
                </div>


            </div>


        </>



    )
}
