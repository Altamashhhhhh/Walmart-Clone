import React from 'react'
import { Routes, Route } from "react-router-dom"
import { Navbar } from '../Components/Navbar'
import { Flashdeals } from '../Components/Flashdeals'
import { Flashdeals2 } from '../Components/Flashdeals2'
import { Gridpicture } from '../Components/Gridpicture'
import { Gridpicture2 } from '../Components/Gridpicture2'
import { Gridpicture3 } from '../Components/Gridpicture3'
import { Navbar2 } from '../Components/Navbar2'
import { Items } from '../Components/Items'
import { Items2 } from '../Components/Items2'
import { RoundedElements } from '../Components/RoundedElements'
import { Creditcard } from '../Components/Creditcard'
import { Creditcard2 } from '../Components/Creditcard2'
import { Flashdeals3 } from '../Components/Flashdeals3'
import { Gridpicture4 } from '../Components/Gridpicture4'
import { Gridpicture5 } from '../Components/Gridpicture5'
import { Items3 } from '../Components/Items3'
import { Items4 } from '../Components/Items4'
import { Footer1 } from '../Components/Footer1'
import { Footer2 } from '../Components/Footer2'
import { Login } from '../Components/Others/Loginpage'
import { Viewallpage } from '../Components/Others/Viewallpage'
export function Allroutes() {

    return (
        <>

            <Navbar />
            <Navbar2 />
            <Gridpicture />
            <Flashdeals />
            <Gridpicture2 />
            <Items />
            <Flashdeals2 />
            <RoundedElements />
            <Creditcard />
            <Gridpicture3 />
             <Items2 />
            <Creditcard2 />
            <Flashdeals3 />
            <Gridpicture4 />
            <Items3 />
            <Gridpicture5 />
            <Items4 />
           <Footer1/>
            <Footer2/>
            
           
            
        </>
    )
}

