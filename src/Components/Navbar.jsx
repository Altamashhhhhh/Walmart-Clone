import React from 'react'
import { Link } from "react-router-dom"
import { GiAbstract063, GiHamburgerMenu } from "react-icons/gi";
import { BsBorderAll } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { CiHeart, CiUser } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { CiGift } from "react-icons/ci";
import { useContext } from "react";
import { AuthContext } from "../Context/Authcontext";
import Logo from "../assets/walmartLogo.svg"
import { IoColorFillOutline } from "react-icons/io5";
import { HiTemplate } from "react-icons/hi";
import smLogo from "../assets/logo.png";
import { CiBoxList } from "react-icons/ci";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { GrBusinessService } from "react-icons/gr";
import { RiFeedbackFill } from "react-icons/ri";
import w from "../assets/w+.svg"
import { useState } from 'react';
import {
    Input,
    Menu,
    Button,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'




function Leftbar() {

    const [isOpen, setIsOpen] = useState(false);

    const onOpen = () => setIsOpen(true);
    const onClose = () => setIsOpen(false);

    return (
        <div className='flex  items-center gap-x-3'>
            <div className='hidden md:flex hover:bg-[#06529a] p-2 rounded-full '>
                <img className='h-12 cursor-pointer' src={Logo} />
            </div>



            <Button onClick={isOpen ? onClose : onOpen} >
                <div className="md:hidden">
                    <GiHamburgerMenu className="w-8 h-8 text-white" />
                </div>
            </Button>
            <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent className="bg-white py-24 pl-8">
                    <DrawerBody >
                        <div className='flex justify-start h-[50px] items-center '>
                            <img className=" h-[40px] w-[40px] md:hidden" src={smLogo} alt="Logo" />
                            <Link to="/signup">    <Button className='bg-[#0071dc] text-white m-5 p-3 rounded-full'>Sign in or create Account</Button></Link>
                        </div>


                        <p className='py-2.5 flex gap-3 items-center'>
                            <img className="h-[25px] w-[25px]" src={w}></img>
                            Wlamart+</p>
                        <hr />
                        <p className='py-2.5 flex gap-3 items-center'>
                            <BiSolidPurchaseTag />
                            Purchase history</p>
                        <p className='py-2.5 flex gap-3 items-center'>
                            <HiTemplate />My items</p>
                        <p className='py-2.5 flex gap-3 items-center'>
                            <CiUser />Account</p>
                        <hr />
                        <p className='py-2.5 flex gap-3 items-center'>
                            <IoIosHelpCircleOutline />Help</p>
                        <hr />
                        <p className='py-2.5 flex gap-3 items-center'>
                            <CiHeart />Lists</p>
                        <p className='py-2.5 flex gap-3 items-center'>
                            <CiGift />Registeries</p>
                        <hr />
                        <p className='py-2.5 flex gap-3 items-center'>
                            <CiBoxList />Departments</p>
                        <p className='py-2.5 flex gap-3 items-center'>
                            <GrBusinessService />Services</p>
                        <hr />
                        <p className='py-2.5 flex gap-3 items-center'>
                            <RiFeedbackFill />Give Feedback</p>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>

















































            <img className="h-[40px] w-[40px] mx-auto md:hidden" src={smLogo} alt="Logo" />

            <div className='hidden md:flex items-center gap-2 cursor-pointer rounded-full p-3 text-white hover:bg-[#06529a] text-xl justify-center' >
                <GiAbstract063 />
                <Menu>
                    <MenuButton as={Button} className='font-bold'>
                        Departments
                    </MenuButton>
                    <MenuList className='text-black px-5 py-5 border leading-10 bg-[#ffffff] '>
                        <MenuItem className='text-grey font-bold'>All Departments</MenuItem>
                        <MenuItem>Deals</MenuItem>
                        <MenuItem>Grocery</MenuItem>
                        <MenuItem>Home, Furniture & Appliances</MenuItem>
                        <MenuItem>Clothing, Shoes & Accessories</MenuItem>
                        <MenuItem>Electronics</MenuItem>
                        <MenuItem>Patio & Garden</MenuItem>
                        <MenuItem>Baby</MenuItem>
                        <MenuItem>Kids</MenuItem>
                        <MenuItem>Toys & Video Games</MenuItem>
                        <MenuItem>Beauty</MenuItem>
                        <MenuItem>Personal Care</MenuItem>
                        <MenuItem>Pets</MenuItem>
                        <MenuItem>Movies, Music & Books</MenuItem>
                        <MenuItem>Gift Cards</MenuItem>
                        <MenuItem>Shop with Purpose</MenuItem>
                    </MenuList>
                </Menu>
            </div>


            <div className='md:flex hidden gap-2  items-center cursor-pointer hover:bg-[#06529a] rounded-full p-3 text-white text-xl justify-center'>
                <BsBorderAll />

                <Menu>
                    <MenuButton as={Button} className='font-bold'>
                        Services
                    </MenuButton>
                    <MenuList className='text-black px-5 py-5 border leading-10   rounded-bl-lg rounded-br-lg bg-[#ffffff] '>
                        <MenuItem className='text-grey font-bold'>All Services</MenuItem>
                        <MenuItem>Auto Care Center Services</MenuItem>
                        <MenuItem>Pharmacy</MenuItem>
                        <MenuItem>Health & Weliness</MenuItem>
                        <MenuItem>Registry, Lists & Gifts</MenuItem>
                        <MenuItem>Custom Cakes</MenuItem>
                        <MenuItem>Photo Services</MenuItem>
                        <MenuItem>Money Services</MenuItem>
                        <MenuItem>Protection, Home & Tech</MenuItem>
                        <MenuItem>Subscriptions</MenuItem>
                        <MenuItem>Community & Giving</MenuItem>
                        <MenuItem>Ordering Online</MenuItem>
                        <MenuItem>Get Inspired</MenuItem>
                    </MenuList>
                </Menu>
            </div>
        </div>
    )

}

function Centerbar() {
    return (
        <div className='  flex relative items-center flex-1 mx-4'>
            <Input htmlSize={4} className='p-1.5 rounded-full flex-1 ' placeholder='Search everything' />
            <div className='absolute right-2 bg-[#ffc220] rounded-full p-1'>
                <IoIosSearch />
            </div>
        </div>
    )
}

function Rightbar() {
    const { isAuth } = useContext(AuthContext);
    return (
        <>
            <div className='flex items-center gap-x-2'>
                <div className='hidden md:flex items-center gap-2 whitespace-nowrap hover:bg-[#06529a] cursor-pointer p-3 rounded-full text-white' >
                    <CiHeart className='w-6 h-6' />

                    <Menu>
                        <MenuButton as={Button} className='font-bold'>
                            <div className="text">
                                <p>Reorder</p>
                                <p className="font-bold">My Items</p>
                            </div>
                        </MenuButton>
                        <MenuList className='text-black px-5 py-5 border leading-10 bg-[#ffffff]  rounded-bl-lg rounded-br-lg'>
                            <MenuItem><IoColorFillOutline className='mx-2' />Reorder</MenuItem>
                            <MenuItem><CiHeart className='mx-2' />Lists</MenuItem>
                            <MenuItem><CiGift className='mx-2' />Registries</MenuItem>
                        </MenuList>
                    </Menu>

                </div>
                <div className='hidden md:flex items-center gap-2 cursor-pointer whitespace-nowrap hover:bg-[#06529a] p-3 rounded-full text-white'>
                    <CiUser className='w-6 h-6' />



                    <Menu>
                        <MenuButton as={Button} className='font-bold'>
                            <div className="text ">
                                {isAuth ? <p>   Logout</p> : <p>Sign in</p>}
                                {/* <p className="font-bold">Account</p> */}
                            </div>
                        </MenuButton>
                        <MenuList className='text-black px-5 p-5 border bg-[#ffffff] leading-10  rounded-bl-lg rounded-br-lg'>
                            <MenuItem>
                                <Link to="/signup"><Button className='bg-[#0071dc] px-3 rounded-full text-white'>Sign in or create account</Button></Link>
                            </MenuItem>
                            <hr className='mt-5 h-4'></hr>
                            <MenuItem><SlCalender className='mx-2' />Purchase History</MenuItem>
                            <MenuItem><CiGift className='mx-2' />Walmart+</MenuItem>
                        </MenuList>
                    </Menu>



                </div>
                <div className='flex hover:bg-[#06529a] cursor-pointer rounded-full p-3 text-white '>
                    <Link to="/cart"><FiShoppingCart className='w-7 h-7' /></Link>
                </div>
            </div>
        </>
    )

}

export const Navbar = () => {

    return (
        <div className=" sticky top-0 z-10 w-full  navbar bg-[#0071dc] flex justify-between items-center">
            <Leftbar />
            <Centerbar />
            <Rightbar />
        </div>


    )
}
