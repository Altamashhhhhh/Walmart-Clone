import React, { useState } from 'react';
import { Button, Input, Slide } from '@chakra-ui/react'; // Import Chakra UI components
import { useToast } from '@chakra-ui/react'; // Import useToast hook
import Logo from "../../assets/logo.png";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from '../../Context/Authcontext';
import { Link } from "react-router-dom"
import { RxCrossCircled } from "react-icons/rx";


export const Signup = () => {


  const [formData, setFormData] = useState({ email: "", password: "" });
  const toast = useToast(); // Initialize useToast hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  const CustomTitle = ({ children }) => (
    <div style={{ fontSize: "30px", color: "green" }}>{children}</div>
  );


  const CustomTitleErr = ({ children }) => (
    <div style={{ fontSize: "30px", color: "red" }}>{children}</div>
  );


  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;


    if (email.trim() && password.trim()) {
      localStorage.setItem('userData', JSON.stringify(formData));
      setFormData({ email: "", password: "" });


      toast({
        title: <CustomTitle>Account created successfully<br /> Please Login for shop</CustomTitle>,
        status: "success",
        duration: 3000, // 5 seconds
        isClosable: true,
        icon: <IoCheckmarkDoneCircle style={{ fontSize: "50px", color: "green" }} />, // Adjust the size of the icon here
        transition: Slide,
      });
    
    }
    else {
      toast({
        title: <CustomTitleErr>Please Enter Valid Credentails</CustomTitleErr>,
        status: "error",
        duration: 3000, // 5 seconds
        isClosable: true,
        variant: "solid",
        icon: <RxCrossCircled style={{ fontSize: "50px", color: "red" }} />, // Adjust the size of the icon here
        transition: Slide,
      });
    }
  };


  return (
    <div className=' flex flex-col justify-center text-center'>
      <img className="h-[70px] w-[70px] mx-auto" src={Logo} alt="Logo" />
      <p className='font-bold font-2xl m-2'>Sign in or create your account</p>
      <div className='m-2'>
        <p className='font-xl'>Not sure if you have an account?</p>
        <p className='font-xl'>Enter your email and we'll check for you.</p>
      </div>
      <form onSubmit={handleSubmit}>
        <p className='font-bold text '>Enter Email Address</p>
        <Input className="border border-black m-1 h-[50px] w-[350px]" type="email" name="email" value={formData.email} onChange={handleChange} />
        <br />
        <p className='font-bold text '>Enter Password</p>
        <Input className="border border-black m-1 h-[50px] w-[350px]" type="password" name="password" value={formData.password} onChange={handleChange} />
        <br />
        <Button className="bg-[#0071dc] m-3 text-white p-3 rounded-full w-[300px]" type="submit">Submit</Button>
      </form>
      <p>Already a user<Link to="/Login"><span className='underline text-blue-600'> Click Here</span> </Link>to login</p>
      <div>
        <p className='font-xl'>Securing your personal information is our priority.</p>
        <p className='font-xl underline'>See our Privacy measures.</p>
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
