import React from 'react'
import { Grid, GridItem, Button } from '@chakra-ui/react'
import image1 from "../assets/Grid_pics/1.webp"
import image2 from "../assets/Grid_pics/2.webp"
import image3 from "../assets/Grid_pics/3.webp"
import image4 from "../assets/Grid_pics/4.webp"
import image5 from "../assets/Grid_pics/5.webp"
import image6 from "../assets/Grid_pics/6.webp"
import image7 from "../assets/Grid_pics/7.webp"
import image8 from "../assets/Grid_pics/8.webp"
import image9 from "../assets/Grid_pics/9.webp"
import image10 from "../assets/Grid_pics/10.webp"
export const Gridpicture = () => {
    return (
        <div className="mx-[20px] my-[30px]" >
            <Grid h={{ base: 'auto', sm: '600px', lg: '1000px' }}
                templateRows={{ sm: 'repeat(13, 1fr)', lg: 'repeat(5, 1fr)' }}
                templateColumns={{ sm: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
                gap={4}>




                <GridItem className="cursor-pointer" borderRadius={15} rowSpan={{ base: 10, lg: 1 }} colSpan={{ base: 2, lg: 1 }} bgImage={`url(${image1})`}
                    backgroundSize="cover"
                    backgroundPosition="center">
                    <p className='font-bold p-5 text-xl text-blue-1000'>Floor care for so much less</p>
                </GridItem>



                <GridItem className="cursor-pointer" borderRadius={15} rowSpan={2} colSpan={2} bgImage={`url(${image2})`}
                    backgroundSize="cover"
                    backgroundPosition="center">
                    {/* <Button className='mx-10 fixed my-custom-margin p-3 w-40 border font-bold border-black bg-white rounded-full'>Shop All</Button> */}
                </GridItem>
                <GridItem className="cursor-pointer" borderRadius={15} rowSpan={1} colSpan={1} bgImage={`url(${image3})`}
                    backgroundSize="cover" backgroundPosition="center">
                    <p className='font-bold p-5 text-xl text-blue-1000'>Save on personal Care</p>
                    <a className='p-5 underline'>shop now</a> </GridItem>
                <GridItem className="cursor-pointer" borderRadius={15} rowSpan={3} colSpan={1} bgImage={`url(${image4})`}
                    backgroundSize="cover" backgroundPosition="center">
                    <p className='hidden md:flexfont-bold p-5 text-3xl text-blue-1000'>Top styles-low, low prices</p>
                    <a className='p-5 underline'>shop now</a> </GridItem>
                <GridItem className="cursor-pointer" borderRadius={15} rowSpan={1} colSpan={1} bgImage={`url(${"https://i5.walmartimages.com/dfw/4ff9c6c9-c0a8/k2-_7f9bdd0f-177c-4330-9758-ef4f41edad44.v1.jpg?odnHeight=256&odnWidth=385&odnBg=&odnDynImageQuality=70"})`}
                    backgroundSize="cover" backgroundPosition="center">
                    <p className='font-bold p-5 text-xl text-blue-1000'>Apple savings up to $150 <br />off</p>
                    <a className='p-5 underline'>shop now</a></GridItem>
                <GridItem className="cursor-pointer" borderRadius={15} rowSpan={2} colSpan={1} bgImage={`url(${image5})`}
                    backgroundSize="cover" backgroundPosition="center">
                    <p className='font-bold p-5 text-xl text-blue-1000'>Budget-friendly furniture</p>
                    <a className='p-5 underline'>shop now</a>
                </GridItem>
                <GridItem className="cursor-pointer" borderRadius={15} rowSpan={2} colSpan={1} bgImage={`url(${image6})`}
                    backgroundSize="cover" backgroundPosition="center">
                    <p className='font-bold p-5 text-xl text-blue-1000'>Up to 40% off</p>
                    <a className='p-5 underline'>shop now</a></GridItem>
                <GridItem className="cursor-pointer" borderRadius={15} rowSpan={3} colSpan={1} bgImage={`url(${image10})`}
                    backgroundSize="cover" backgroundPosition="center">
                    <p className='hidden md:flex font-bold p-5 text-xl text-blue-1000'>Sports & outdoors for way less</p>
                    <a className='p-5 underline'>shop now</a></GridItem>
                <GridItem borderRadius={15} rowSpan={{ base: 2, lg: 1 }} colSpan={1} bgImage={`url(${image8})`}
                    backgroundSize="cover" backgroundPosition="center">
                    <p className='font-bold p-5 text-xl text-blue-1000'>Let's play! <br /> Under $25</p>
                    <a className='p-5 underline'>shop toys</a></GridItem>
                <GridItem className="cursor-pointer" borderRadius={15} rowSpan={1} colSpan={2} bgImage={`url(${image9})`}
                    backgroundSize="cover" backgroundPosition="center">
                    <p className='font-bold p-5 text-xl text-blue-1000'>Enjoy free same-day delivery, everyday<br /> low prices + more!</p> <p className='px-5'> Terms apply.</p>
                    <p className='px-5 py-3 underline'> join walmart+</p>
                </GridItem>


            </Grid>
        </div>
    )
}
