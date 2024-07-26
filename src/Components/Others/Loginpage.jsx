import React, { useState } from 'react';
import { Button, Input, Slide } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import Logo from "../../assets/logo.png";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from '../../Context/Authcontext';
import { Link } from 'react-router-dom';
import { RxCrossCircled } from "react-icons/rx";
import { useNavigate } from 'react-router-dom'



export const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const toast = useToast()
    const name = useNavigate()


    const { isAuth, setisAuth } = useContext(AuthContext);


    const CustomTitle = ({ children }) => (
        <div style={{ fontSize: "30px", color: "green" }}>{children}</div>
    );

    const CustomTitleErr = ({ children }) => (
        <div style={{ fontSize: "30px", color: "red" }}>{children}</div>
    );



    function handleSubmit(e) {
        e.preventDefault();
        const { email, password } = formData;
        const storedData = JSON.parse(localStorage.getItem('userData')) || {};


        if (storedData.email === email && storedData.password === password) {
            
            localStorage.setItem("isAuth", "Authenticated")
            toast({
                title: <CustomTitle>Successfully Logged In</CustomTitle>,
                status: "success",
                duration: 3000, // 3 seconds
                isClosable: true,
                icon: <IoCheckmarkDoneCircle style={{ fontSize: "50px", color: "green" }} />,
                transition: Slide,
            });
            console.log("Done")
            setisAuth(true);
            console.log(isAuth)
            name("/")


        } else {
            toast({
                title: <CustomTitleErr>Please Enter Valid Credentails</CustomTitleErr>,
                status: "error",
                duration: 3000, // 5 seconds
                isClosable: true,
                icon: <RxCrossCircled style={{ fontSize: "50px", color: "red" }} />, // Adjust the size of the icon here
                transition: Slide,
            });

            console.log("Not done")
        }
        setFormData({ email: "", password: "" });
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };








    return (
        <div className=' flex flex-col justify-center text-center'>
            <img className="h-[70px] w-[70px] mx-auto" src={Logo} alt="Logo" />
            <p className='font-bold font-2xl m-2'>Enter your Credentials</p>
            <form onSubmit={handleSubmit}>
                <p className='font-bold text '>Enter Email Address</p>
                <Input className="border border-black m-1 h-[50px] w-[350px]" onChange={handleChange} value={formData.email} type="email" name="email" />
                <br />
                <p className='font-bold text '>Enter Password</p>
                <Input className="border border-black m-1 h-[50px] w-[350px]" onChange={handleChange} value={formData.password} type="password" name="password" />
                <br />
                <Button className="bg-[#0071dc] m-3 text-white p-3 rounded-full w-[300px]" type="submit">Submit</Button>
                <p>Not a user<Link to="/Signup"><span className='underline text-blue-600'>Click Here</span> </Link>to Signup</p>
            </form>
            <div>
                <p className='font-xl'>Securing your personal information is our priority.</p>
                <p className='font-xl'>See our Privacy measures.</p>
            </div>
            <hr className='my-10' />

            <div className='text-start md:text-center'>
                <p className="cursor-pointer  mx-2 my-2 block md:inline">@2024 Walmart. All Rights Reserved.</p>
                <a className="cursor-pointer  mx-2 my-2 block md:inline">Give feedback</a>
                <a className="cursor-pointer  mx-2 my-2 block md:inline">CA Privacy Rights</a>
                <a className="cursor-pointer  mx-2 my-2 block md:inline">Your Privacy Choices</a>
                <a className="cursor-pointer  mx-2 my-2 block md:inline">Notice at collection</a>
                <a className="cursor-pointer  mx-2 my-2 block md:inline">Request my personal Information</a>
                <a className="cursor-pointer  mx-2 my-2 block md:inline">California Supply Chains Act</a>
            </div>
        </div>
    );
};
