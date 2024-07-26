import React from 'react'
import { Grid, GridItem, Button, useBreakpointValue } from '@chakra-ui/react'
import image1 from "../assets/Grid3_pics/1.webp"
import image2 from "../assets/Grid3_pics/2.jpg"
import image3 from "../assets/Grid3_pics/3.webp"
import image4 from "../assets/Grid3_pics/4.webp"
import image5 from "../assets/Grid3_pics/5.webp"

export const Gridpicture3 = () => {
    const templateColumns = useBreakpointValue({ base: 'repeat(2, 1fr)', lg: 'repeat(5, 1fr)' })
    const templateRows = useBreakpointValue({ base: 'repeat(3, 1fr)', lg: 'repeat(2, 1fr)' })

    return (
        <div className="mx-[20px] my-[30px]" >
            <Grid
                h='600px'
                templateRows={templateRows}
                templateColumns={templateColumns} gap={4}>
                <GridItem className="cursor-pointer" borderRadius={15} rowSpan={{ base: 10, lg: 2 }} colSpan={{ base: 2, lg: 2 }} bgImage={`url(${image1})`}
                    backgroundSize="cover"
                    backgroundPosition="center">
                    <p className=' p-5 text-xl text-white'>Patio & Garden</p>
                    <p className=' hidden md:flex font-bold px-3 text-4xl text-white'>Receive your<br /> bayward</p>
                    {/* <Button className='m-10 p-3 w-40 border  border-black bg-white rounded-full'>Shop now</Button> */}
                </GridItem>
                <GridItem className="cursor-pointer" borderRadius={15} rowSpan={1} colSpan={2} bgImage={`url(${image2})`}
                    backgroundSize="cover"
                    backgroundPosition="center">
                    <p className=' p-3 text-xl text-white'>From 5$</p>
                    <p className=' font-bold px-3 text-2xl text-white'>Toss in pop of color</p>
                    <a className=' px-5 underline text-white'>show pillows</a> </GridItem>

                <GridItem className="cursor-pointer" borderRadius={15} rowSpan={2} colSpan={1} bgImage={`url(${image5})`}
                    backgroundSize="cover" backgroundPosition="center">
                    <p className=' p-3 text-xl text-blue'>Patio sets</p>
                    <p className=' font-bold px-3 text-2xl text-blue'>Take a set</p>
                    <a className=' px-5 underline'>shop now</a>  </GridItem>
                <GridItem className="cursor-pointer" borderRadius={15} rowSpan={1} colSpan={1} bgImage={`url(${"https://i5.walmartimages.com/dfw/4ff9c6c9-fa6a/k2-_11ec95f1-13e0-4bb6-8127-9fd4b7d71d0e.v1.jpg?odnHeight=342&odnWidth=248&odnBg=&odnDynImageQuality=70"})`}
                    backgroundSize="cover" backgroundPosition="center">
                    <p className='font-bold p-5 text-2xl text-blue-1000'>Bring on the heat</p>
                    <a className='p-5 underline'>shop heaters</a> </GridItem>
                <GridItem className="cursor-pointer" borderRadius={15} rowSpan={1} colSpan={1} bgImage={`url(${"https://i5.walmartimages.com/dfw/4ff9c6c9-6f04/k2-_75263dfe-61db-4685-a480-8d95de37ea41.v1.jpg?odnHeight=342&odnWidth=248&odnBg=&odnDynImageQuality=70"})`}
                    backgroundSize="cover" backgroundPosition="center">
                    <p className='font-bold p-5 text-xl text-blue'>All outdoors <br />lighting</p>
                    <a className='p-5 underline'>shop now</a></GridItem>



            </Grid>
        </div >
    )
}