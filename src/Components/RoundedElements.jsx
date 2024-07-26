import { Link } from "react-router-dom";
import { Data } from "../db3.js"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Text, Image, Box } from '@chakra-ui/react';

export const RoundedElements = () => {


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



            <div className="px-10">


                <Box className="flex justify-between">
                    <Text className='m-2 font-bold text-xl'>Get it all right here</Text>
                    <Link to="/Viewall" className="underline">View all</Link>
                </Box>

                <Slider {...settings}>
                    {Data.map((ele) => (
                        <div key={ele.id}>
                            <div className='flex justify-center items-center'>
                                <div className='bg-blue-300 overflow-hidden' style={{ height: "140px", width: "140px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <img src={ele.thumbnail} alt="image" style={{ height: "100px", width: "120px" }} />
                                </div>
                            </div>
                            <p className="text-center mt-5">{ele.title}</p>
                        </div>




                    ))}




                </Slider>





            </div>



        </>
    )

}














