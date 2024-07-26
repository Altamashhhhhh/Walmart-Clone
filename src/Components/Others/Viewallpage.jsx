import React, { useState, useEffect } from 'react';
import { Navbar } from '../Navbar';
import { Navbar2 } from '../Navbar2';
import discount from "../../assets/discount.webp";
import Timer from './Timer';
import axios from 'axios';
import { Image } from '@chakra-ui/react';
function FlashTimer() {
    return (
        <>
            <div className='bg-blue-950 p-6 text-center mx-8 rounded-lg'>
                <p><span className='text-yellow-500 text-3xl'>Flash Deals</span>
                    <span className='text-white  text-3xl'> end in </span>
                    <span className='text-white text-2xl inline-block'><Timer /></span></p>
            </div>
        </>
    )
}

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products');
                setProducts(response.data.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p className='text-center text-5xl font-bold'>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className='flex flex-wrap p-5 justify-center'>
            {products.map((product) => (
                <div key={product.id} className='p-5 m-3 border border-black text-center'>
                    <Image src={product.img} className='h-[250px] w-[300px]' />
                    <hr />
                    <h2>{product.brand}</h2>
                    <p>Price: {product.price}</p>
                    <p>{product.details.slice(0, 30)}</p>
                </div>
            ))}
        </div>
    );
};

export const Viewallpage = () => {
    return (
        <>
            <Navbar />
            <Navbar2 />
            <p className='m-2 p-2'>Flash deals</p>
            <hr />
            <div className='p-12 justify-around relative'>
                <div className="relative">
                    <Image src={discount} className=' block' alt="discount" />
                    <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
                        <h4 className='font-bold text-blue-950 text-2xl sm:text-3xl'>Up to 65% off</h4>

                    </div>
                    <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
                        <h4 className='hidden md:flex font-bold text-xl text-blue-950 mt-20'>Weekly finds, limited time!</h4>
                    </div>
                </div>
            </div>
            <FlashTimer />
            <Products />
        </>
    );
};
