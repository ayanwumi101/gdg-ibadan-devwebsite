"use client";
import React from "react";
import {
  Box,
  Flex,
  Heading,
  ListItem,
  Text,
  UnorderedList, Image, Button
} from "@chakra-ui/react";
import Header from "../../assets/gdg-header.jpg";
import carousel1 from "../../assets/carousel-image2.jpg";
import carousel2 from "../../assets/carousel-image3.jpg";
import carousel3 from "../../assets/carousel-image4.jpg";
import About from "../../assets/images asset.png";
import Organisers from "../../components/organisers";
import Sponsors from "../../components/sponsors";
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";
import Features from "../../components/Features/Features";


const Home = () => {
  return (
    <>
      <Box
        maxW="90%"
        height="auto"
        mt='5'
        position="relative"
        mx='auto'
      >
        <Box height={{ base: "650px", lg: "85vh" }}>
          <Swiper spaceBetween={30} centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            style={{ height: '100%', objectFit: 'cover', borderRadius: '24px' }}
          >
            <SwiperSlide><Image src={Header} alt="" borderRadius='24px' objectFit='cover' h='100%' w='100%' /></SwiperSlide>
            <SwiperSlide><Image src={carousel1} alt="" borderRadius='24px' objectFit='cover' h='100%' w='100%' /></SwiperSlide>
            <SwiperSlide><Image src={carousel2} alt="" borderRadius='24px' objectFit='cover' h='100%' w='100%' /></SwiperSlide>
            <SwiperSlide><Image src={carousel3} alt="" borderRadius='24px' objectFit='cover' h='100%' w='100%' /></SwiperSlide>
          </Swiper>
        </Box>

        <Box
          position="absolute"
          zIndex='1'
          top="0rem"
          textAlign="center"
          background="rgba(0, 0, 0, 0.5)"
          width="100%"
          borderRadius="24px"
          height={{ base: "100%" }}
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <Box maxW='800px' px={[7, 5, 0]}>
            <Text
              fontSize={{ base: "32px", lg: "42px" }}
              fontWeight="medium"
              lineHeight={{ base: "45px", lg: "86px" }}
              color="#fff"
              mb='7'
            >
              Welcome to <span style={{ color: "#E05D2F" }}> GDG Ibadan </span> website, where tech enthusiasts gather to share ideas and knowledge.
            </Text>

            <Button bg='#E05D2F' w='210px' h={{ base: '50px', lg: '55px' }} color='white' boxShadow='md'>
              <a href='https://gdg.community.dev/gdg-ibadan/' target='_blank'>
                Join Our Community
              </a>
            </Button>
          </Box>
        </Box>
      </Box>

      <Flex
        justifyContent={{ base: 'center', lg: 'space-around' }}
        alignItems='center'
        w='90%'
        mx='auto'
        flexWrap='wrap'
        mt='8rem'
      >
        <Box
          w={{ base: "100%", lg: "50%" }}
          mb='8'
        >
          <Heading
            color="#1E3747"
            fontWeight="500"
            fontSize={{ base: "32px", lg: "47px" }}
            lineHeight={{ base: "40px", lg: "57px" }}
            pb="38px"
          >
            About Us
          </Heading>
          <UnorderedList
            fontSize="16px"
            fontWeight="500"
            lineHeight="20px"
            columnGap="37px"
            display="flex"
            mb='5'
          >
            <ListItem color="#0F9D58">Connect</ListItem>
            <ListItem color="#4285F4">Learn</ListItem>
            <ListItem color="#EA4335">Grow</ListItem>
          </UnorderedList>
          <Text
            // pt="20px"
            color="#6A7C88"
            fontSize="20px"
            fontWeight="normal"
            lineHeight="35px"
            mb='7'
            // width={{ base: "302px", lg: "367px" }}
            w={['100%', '80%']}
            as="p"
          // fontFamily="Google Sans Display, sans-serif"
          >
            We strive to create a space that fosters collaboration and learning
            among tech enthusiasts of all levels. Whether you're a beginner or
            an expert, our community welcomes you.
          </Text>
          <Link to='/about'><Button bg='#E05D2F' w='150px' h={{ base: '43px', lg: '45px' }} color='white' boxShadow='md'>Know More</Button></Link>
        </Box>
        <Box
          w={{ base: "100%", lg: "50%" }}
          mb='10'
        >
          <Image src={About} w='100%' h='100%' alt="" objectFit='cover' />
        </Box>
      </Flex>

      <Box pt={{ base: "27px", lg: "134px" }} w='90%' mx='auto'>
        <Sponsors />
      </Box>
      <Features />
      <Organisers />
    </>
  );
};

export default Home;
