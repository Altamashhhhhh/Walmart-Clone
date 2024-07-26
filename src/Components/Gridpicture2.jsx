import React from 'react'
import { Grid, GridItem, Button, useBreakpointValue } from '@chakra-ui/react'
import image1 from "../assets/Grid2_pics/img1.webp"
import image2 from "../assets/Grid2_pics/img2.webp"
import image3 from "../assets/Grid2_pics/img3.jpg"
import image4 from "../assets/Grid2_pics/img4.webp"
import image5 from "../assets/Grid2_pics/img5.webp"

export const Gridpicture2 = () => {
    const templateColumns = useBreakpointValue({ base: 'repeat(2, 1fr)', lg: 'repeat(5, 1fr)' })
    const templateRows = useBreakpointValue({ base: 'repeat(2, 1fr)', lg: 'repeat(2, 1fr)' })

    return (
        <div className="mx-[20px] my-[30px]" >
            <Grid
                h='600px'
                templateRows={templateRows}
                templateColumns={templateColumns} gap={4}>




                <GridItem className="cursor-pointer" borderRadius={15} rowSpan={{ base: 10, lg: 2 }} colSpan={{ base: 2, lg: 2 }} bgImage={`url(${image1})`}
                    backgroundSize="cover"
                    backgroundPosition="center">
                    <p className=' p-5 text-xl text-blue-1000'>Beauty, home & more</p>
                    {/* <Button className='mx-10 fixed p-3 w-40 border  border-black bg-white rounded-full'>Shop All</Button> */}
                </GridItem>


                <GridItem className="cursor-pointer" borderRadius={15} rowSpan={1} colSpan={2} bgImage={`url(${image2})`}
                    backgroundSize="cover"
                    backgroundPosition="center">
                    <p className=' p-3 text-xl text-blue-1000'>The latest trends</p>
                    <p className=' font-bold px-3 text-2xl text-blue-1000'>Styles your need</p>
                    <a className=' px-5 underline'>shop now</a> </GridItem>
                <GridItem className="cursor-pointer" borderRadius={15} rowSpan={2} colSpan={1} bgImage={`url(${image3})`}
                    backgroundSize="cover" backgroundPosition="center">
                    <p className='hidden md:flex font-bold p-5 text-2xl text-blue-1000'>Window curtains</p>
                    <p className=' font-bold px-3 text-2xl text-blue-1000'>Just in: easy updates</p>
                    <a className=' px-5 underline'>shop now</a>  </GridItem>
                <GridItem className="cursor-pointer" borderRadius={15} rowSpan={1} colSpan={1} bgImage={`url(${image4})`}
                    backgroundSize="cover" backgroundPosition="center">
                    <p className='font-bold p-5 text-xl text-blue-1000'>Seasonal home scents</p>
                    <a className='p-5 underline'>shop now</a> </GridItem>
                <GridItem className="cursor-pointer" borderRadius={15} rowSpan={1} colSpan={1} bgImage={`url(${"https://i5.walmartimages.com/dfw/4ff9c6c9-a2f9/k2-_d5e0e537-1240-482c-8553-9ac587d17bf0.v1.jpg?odnHeight=342&odnWidth=248&odnBg=&odnDynImageQuality=70"})`}
                    backgroundSize="cover" backgroundPosition="center">
                    <p className='font-bold p-5 text-xl text-blue-1000'>New beauty <br />obsessions</p>
                    <a className='p-5 underline'>shop now</a></GridItem>
            </Grid>
        </div >
    )
}