import React from 'react'
import {Box, Flex, Heading, Stack, Image} from '@chakra-ui/react'
import ellipse from '../../../assets/ellipse.svg'
import pattern from '../../../assets/patterns.svg'
import image1 from '../../../assets/group1.png'
import image2 from '../../../assets/group2.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const Hero = () => {
  return (
    <Box w='100%' position='relative'>
        <Stack justifyContent='space-between' direction={{base: 'column', lg: 'row'}}>
            <Pattern />
            <HeroImage />
        </Stack>
    </Box>
  )
}

export default Hero

export const Pattern = () => {
    return (
        <Box w={{ base: '100%', lg: '50%' }} position='relative' mb={{base: '250px'}}>
            <Box>
                <Image src={pattern} style={{objectFit: 'cover', width: '100%', height: '100%'}}  />
            </Box>
            <Box position='absolute' top='0'>
                <Image src={ellipse} style={{ objectFit: 'cover', width: '100%', height: '500px', borderRadius: 24 }} />
            </Box>
            <Box color='white' position='absolute' zIndex='1' top="50%" left={{base: '4%', lg: '10%'}}>
                <Heading fontSize={{base: 42, lg: 45}} lineHeight={{base: '70px', lg: '80px'}}>We strive to create a space that fosters collaboration</Heading>
            </Box>
        </Box>
    )
}

export const HeroImage = () => {
    return (
        <Box py='5' px={{ base: 2, lg: '10' }} w={{base: '100%', lg: '50%'}}>
            <Swiper 
                spaceBetween={30} 
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                style={{ height: '100%', objectFit: 'cover', borderRadius: '24px', width: '100%' }}
            >
                <SwiperSlide><Image src={image1} alt="" style={{ borderRadius: "24px", objectFit: "cover", height: "500px", width: '500px' }} /></SwiperSlide>
                <SwiperSlide><Image src={image2} alt="" style={{ borderRadius: "24px", objectFit: "cover", height: "500px", width: '500px' }} /></SwiperSlide>
            </Swiper>
        </Box>
    )
}