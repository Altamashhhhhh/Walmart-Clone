import { Data } from "../db2.js";
import { useContext } from "react";
import { AuthContext } from "../Context/Authcontext";
import { useNavigate, Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Text, Image, Box, Slide } from '@chakra-ui/react';
import { CiHeart } from "react-icons/ci";
import { useToast } from '@chakra-ui/react';
import { IoCheckmarkDoneCircle } from "react-icons/io5";



export const Items3 = () => {
    const toast = useToast()

    const CustomTitle = ({ children }) => (
        <div style={{ fontSize: "30px", color: "green" }}>{children}</div>
    );

    const { isAuth } = useContext(AuthContext);
    const name = useNavigate();

    const addToCart = (item) => {
        if (!isAuth) {
            name("/signup");
            console.log("Redirecting to signup component...");
            return;
        }
        else {
            toast({
                title: <CustomTitle>Item Added successfully to cart</CustomTitle>,
                status: "success",
                duration: 3000,
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
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <div className="px-5 py-5 w-[100%] m-auto ">
                <Box className="flex justify-between">
                    <Text className='mt-2 font-bold text-xl'>Shop all Easter</Text>
                    <Link to="/Viewall" className="underline">Decor, baskets & more.</Link>
                </Box>
                <Text className='mt-2'>Decor, baskets & more..</Text>
                <div className=" mt-2 px-6">
                    <Slider {...settings}>
                        {Data.map((ele) => (
                            <div className=" p-2 h-[300px] w-[180px]" key={ele.id}>
                                <div className='flex justify-center'>
                                    <img src={ele.img} alt="images"
                                        style={{ height: "100px", width: "120px" }}
                                    />
                                    <CiHeart style={{ height: "30px", width: "50px", marginRight: "-40px" }} />
                                </div>
                                <p className='font-bold' style={{ marginTop: "30px" }}>${ele.price}</p>
                                <p>{ele.title}</p>
                                <div className='flex justify-center m-1'>
                                    <Button onClick={() => handleAddToCart(ele)} className='border mt-2 border-black p-2 rounded-full'>Add to cart+</Button>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
};
