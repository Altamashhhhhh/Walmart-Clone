import React from 'react'
import { Grid, GridItem, Button, useBreakpointValue } from '@chakra-ui/react'
import image1 from "../assets/Grid4_pics/1.webp"
import image2 from "../assets/Grid4_pics/2.webp"
import image3 from "../assets/Grid4_pics/3.webp"
import image4 from "../assets/Grid4_pics/4.webp"
import image5 from "../assets/Grid4_pics/5.jpg"

export const Gridpicture4 = () => {
    const templateColumns = useBreakpointValue({ base: 'repeat(2, 1fr)', lg: 'repeat(5, 1fr)' })
    const templateRows = useBreakpointValue({ base: 'repeat(3, 1fr)', lg: 'repeat(2, 1fr)' })

    return (
        <div className=" mx-[20px] my-[30px]" >
            <Grid
                h='600px'
                templateRows={templateRows}
                templateColumns={templateColumns} gap={4}>
                <GridItem className="cursor-pointer" borderRadius={15} rowSpan={{ base: 10, lg: 2 }} colSpan={{ base: 2, lg: 2 }} bgImage={`url(${image1})`}
                    backgroundSize="cover"
                    backgroundPosition="center">
                    <p className=' p-5 text-xl text-blue'>Make it extra special</p>
                    <p className='hidden md:flex px-3 text-6xl text-blue'>Get all the<br />Goodies</p>
                    <Button className='m-6 fixed p-3 w-40 border bg-white  border-black bg-blue rounded-full'>Shop easter</Button>
                </GridItem>
                <GridItem className="cursor-pointer" borderRadius={15} rowSpan={1} colSpan={2} bgImage={`url(${image2})`}
                    backgroundSize="cover"
                    backgroundPosition="center">
                    <p className=' p-3 text-xl text-blue'>Toys to candy</p>
                    <p className=' font-bold px-3 text-2xl text-blue'>Build the best <br />basket</p>
                    <a className=' px-5 underline text-blue'>shop now</a> </GridItem>

                <GridItem className="cursor-pointer" borderRadius={15} rowSpan={2} colSpan={1} bgImage={`url(${image5})`}
                    backgroundSize="cover" backgroundPosition="center">
                    <p className=' p-3 text-xl text-blue'>Dress to impress</p>
                    <p className='hidden md:flex font-bold px-3 text-3xl text-blue'>Picture-perfect<br /> outfits</p>
                    <a className=' px-5 underline'>shop now</a>  </GridItem>
                <GridItem className="cursor-pointer" borderRadius={15} rowSpan={1} colSpan={1} bgImage={`url(${image3})`}
                    backgroundSize="cover" backgroundPosition="center">
                    <p className='font-bold p-5 text-2xl text-blue-1000'>Sweet treats Bring on </p>
                    <a className='p-5 underline'>shop now</a> </GridItem>
                <GridItem className="cursor-pointer" borderRadius={15} rowSpan={1} colSpan={1} bgImage={`url(${"https://i5.walmartimages.com/dfw/4ff9c6c9-ed3f/k2-_03e32269-d6ea-43f0-8a8d-e5d807f343fa.v1.jpg?odnHeight=342&odnWidth=248&odnBg=&odnDynImageQuality=70"})`}
                    backgroundSize="cover" backgroundPosition="center">
                    <p className='font-bold p-5 text-xl text-blue'>Fun & festive<br />decors</p>
                    <a className='hidden md:flex p-5 underline'>shop now</a></GridItem>

            </Grid>
        </div >
    )
}