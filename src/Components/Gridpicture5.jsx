import React from 'react'
import { Grid, GridItem, Button } from '@chakra-ui/react'
import image1 from "../assets/Grid5_pics/1.webp"
import image2 from "../assets/Grid5_pics/2.webp"
import image3 from "../assets/Grid5_pics/3.webp"
import image4 from "../assets/Grid5_pics/4.webp"
import image5 from "../assets/Grid5_pics/5.webp"

export const Gridpicture5 = () => {
    return (
        <div className="hidden md:flex mx-[20px] my-[30px]" >
            <Grid
                h='600px'
                templateRows={'repeat(2, 1fr)'}
                templateColumns={'repeat(5, 1fr)'}
                gap={4}

            >
                <GridItem className="cursor-pointer" borderRadius={15} rowSpan={{ base: 10, lg: 2 }} colSpan={{ base: 2, lg: 2 }} bgImage={`url(${image1})`}
                    backgroundSize="cover"
                    backgroundPosition="center">
                    <p className=' p-5 text-xl text-white'>For everyday & everywhere</p>
                    <p className=' px-3 text-6xl text-white'>Black-led<br />brands</p>
                    <Button className='m-6 fixed p-2 text-xl w-40 border bg-white  border-black bg-blue rounded-full'>Learn more</Button>
                </GridItem>
                <GridItem className="cursor-pointer" borderRadius={15} rowSpan={1} colSpan={2} bgImage={`url(${"https://i5.walmartimages.com/dfw/4ff9c6c9-1d80/k2-_2717e6b4-7f29-450b-be46-415792fb365f.v1.jpg?odnHeight=292&odnWidth=512&odnBg=&odnDynImageQuality=70"})`}
                    backgroundSize="cover"
                    backgroundPosition="center">
                    <p className=' p-3 text-xl text-blue'>New & exclusive collab</p>
                    <p className=' font-bold px-3 text-2xl text-blue'>Midwest kids <br />Collection</p>
                    <a className=' px-5 underline text-blue'>shop now</a> </GridItem>

                <GridItem className="cursor-pointer" borderRadius={15} rowSpan={2} colSpan={1} bgImage={`url(${image5})`}
                    backgroundSize="cover" backgroundPosition="center">
                    <p style={{ marginTop: "400px" }} className=' p-3 text-xl text-blue'>Womend-led products</p>
                    <p className=' font-bold px-3 text-3xl text-blue'>Her barnds, your<br /> faves</p>
                    <a className=' px-5 underline'>Learn more</a>  </GridItem>
                <GridItem className="cursor-pointer" borderRadius={15} rowSpan={1} colSpan={1} bgImage={`url(${"https://i5.walmartimages.com/dfw/4ff9c6c9-4e0f/k2-_7fcd9674-3427-4927-b9fa-b1195d69a7d4.v1.jpg?odnHeight=342&odnWidth=248&odnBg=&odnDynImageQuality=70"})`}
                    backgroundSize="cover" backgroundPosition="center">
                    <p className='font-bold p-5 text-xl text-blue-1000'>The Lip Bar--easy<br />glam Sweet treats Bring on </p>
                    <a className='p-5 underline'>shop now</a> </GridItem>
                <GridItem className="cursor-pointer" borderRadius={15} rowSpan={1} colSpan={1} bgImage={`url(${"https://i5.walmartimages.com/dfw/4ff9c6c9-1a23/k2-_a65f5e7b-f682-4b4d-8f55-012a6be3fdb1.v1.jpg?odnHeight=342&odnWidth=248&odnBg=&odnDynImageQuality=70"})`}
                    backgroundSize="cover" backgroundPosition="center">
                    <p className='font-bold p-5 text-xl text-blue'>Simplify your<br />money</p>
                    <a className='p-5 underline'>Learn more</a></GridItem>



            </Grid>
        </div >
    )
}
