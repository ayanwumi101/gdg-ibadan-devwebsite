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
import carousel1 from "../../assets/carousel-image2.png";
import carousel2 from "../../assets/carousel-image3.png";
import Buttons from "../../components/buttons";
import About from "../../assets/images asset.png";
import Ship from "../../assets/ship.png";
import Altschool from "../../assets/Altschool.png";
import Line from "../../assets/Line.png";
import Cards from "../../components/cards";
import Organisers from "../../components/organisers";
import HCardify from "../../assets/image 3.png";
import Sponsors from "../../components/sponsors";
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const Home = () => {
  return (
    <>
      <Box
        maxW="100%"
        height="auto"
        mt='5'
        position="relative"
      >
        <Box height={{ base: "732px", lg: "100vh" }}>
          <Swiper spaceBetween={30} centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            style={{height: '100%', objectFit: 'cover', borderRadius: '24px'}}
          >
            <SwiperSlide><Image src={Header} alt="" borderRadius='24px' objectFit='cover' h='100%' w='100%' /></SwiperSlide>
            <SwiperSlide><Image src={carousel1} alt="" style={{ borderRadius: "24px", objectFit: "cover", height: "100%" }} /></SwiperSlide>
            <SwiperSlide><Image src={carousel2} alt="" style={{ borderRadius: "24px", objectFit: "cover", height: "100%" }} /></SwiperSlide>
          </Swiper>
        </Box>

        <Box
          position="absolute"
          zIndex='1'
          top="0rem"
          textAlign="center"
          background="rgba(0, 0, 0, 0.5)"
          width="100%"
          pb={{ base: "0rem", lg: "14.5rem" }}
          pt={{ base: "0rem", lg: "6rem" }}
          borderRadius="24px"
          height={{ base: "100%" }}
        >
          <Text
            pt={{ base: "95px", lg: "94px" }}
            pl={{ base: "49px", lg: "163px" }}
            fontSize={{ base: "32px", lg: "42px" }}
            pr={{ base: "42px", lg: "164px" }}
            fontWeight="medium"
            lineHeight={{ base: "60px", lg: "86px" }}
            color="#fff"
            paddingBottom={{ base: "56px" }}
          >
            Welcome to{" "}
            <Text as="span" color="#E05D2F">
              GDG Ibadan
            </Text>{" "}
            website, where tech enthusiasts gather to share ideas and knowledge.
          </Text>
          <Button bg='#E05D2F' w='210px' h={{ base: '40px', lg: '47px' }} color='white' boxShadow='md'>Join Our Community</Button>
        </Box>
      </Box>

      <Flex
        justifyContent={{base: 'center', lg: 'space-around'}}
        alignItems='center'
        w='100%'
        mx='auto'
        flexWrap='wrap'
        mt='8rem'
      >
        <Box
          w={{ base: "100%", lg: "45%" }}
          mb='8'
        >
          <Heading
            color="#1E3747"
            fontWeight="500"
            fontSize={{ base: "32px", lg: "45px" }}
            lineHeight={{ base: "40px", lg: "57px" }}
            pb="38px"
          // fontFamily="Recoleta, sans-serif"
          >
            About Us
          </Heading>
          <UnorderedList
            fontSize="16px"
            fontWeight="500"
            lineHeight="20px"
            columnGap="37px"
            display="flex"
          >
            <ListItem color="#0F9D58">Connect</ListItem>
            <ListItem color="#4285F4">Learn</ListItem>
            <ListItem color="#EA4335">Grow</ListItem>
          </UnorderedList>
          <Text
            pt="20px"
            color="#6A7C88"
            fontSize="18px"
            fontWeight="400"
            lineHeight="32px"
            mb='5'
            width={{ base: "302px", lg: "367px" }}
            as="p"
          // fontFamily="Google Sans Display, sans-serif"
          >
            We strive to create a space that fosters collaboration and learning
            among tech enthusiasts of all levels. Whether you're a beginner or
            an expert, our community welcomes you.
          </Text>
          <Button bg='#E05D2F' w='150px' h={{base: '40px', lg: '45px'}} color='white' boxShadow='md'>Know More</Button>
        </Box>
        <Box 
        w={{ base: "100%", lg: "50%" }}
        mb='10'
        >
          <Image src={About} w='100%' alt="" />
        </Box>
      </Flex>

      <Box pt={{ base: "27px", lg: "134px" }}>
        <Sponsors />
        <Box
          display={{ base: "flex", lg: "none" }}
          pl="0px"
          pr="30px"
          pt="32px"
          pb="85px"
          alignItems="center"
          justifyContent="space-between"
        >
          <Image src={HCardify} alt={""} />
          <Image src={Ship} alt={""} />
          <Image src={Altschool} alt={""} />
        </Box>
      </Box>

      <Box
        bgColor="#1E3747"
        borderRadius="24px"
        color="#fff"
        position="relative"
        mx='auto'
        w='100%'
        height={{ base: "103rem", lg: "650px" }}
      >
        <Box pt={{ base: "4rem" }}>
          <Image src={Line} alt={""} />
        </Box>

        <Box
          textAlign="center"
          position="absolute"
          top={{base: '3.5rem', lg: '5rem'}}
          right="0"
          left="0"
          bottom='0'
        >
          <Heading
            fontSize={{ base: "32px", lg: "45px" }}
            lineHeight={{ base: "40px", lg: "60px" }}
            fontWeight="500"
          >
            Features
          </Heading>
          <Box
            fontSize={{ base: "22px", lg: "22px" }}
            lineHeight={{ base: "33px", lg: "33px" }}
            fontWeight="400"
            pt={{ base: "63px", lg: "27px" }}
            ml={{ base: "18.97px", lg: "313px" }}
            // width="563px"
            mr={{ base: "18.97px", lg: "313px" }}
            fontFamily="'Google Sans Display', sans-serif"
            mb={{base: '20px'}}
          >
            Fostering collaboration and learning among tech of all enthusiasts
            level
          </Box>
        </Box>
        <Flex
          // justifyContent='space-between'
          // alignItems='center'
          flexWrap='wrap'
          // p='5'
          // gap={2}
          pl={{ base: "20px", lg: "25px" }}
          pr={{ base: "13px", lg: "25px" }}
          columnGap="15px"
          position="relative"
          // bottom={{ base: "0rem", lg: "0rem" }}
          cursor="pointer"
          top={{ base: "7rem", lg: "-7rem" }}
          // display={{ base: "block", lg: "flex" }}
        >
          <Cards
            hText={"Access"}
            paragraph={
              "Access a wealth of knowledge and resources in our extensive library of tech content."
            }
            background="#4285F4"
            color="#fff"
          />
          <Cards
            hText={"Connect"}
            paragraph={
              "Connect with fellow tech enthusiasts through our online community."
            }
            background="#34A853"
            color="#fff"
          />
          <Cards
            hText={"Events"}
            paragraph={
              "Attend exclusive events and meetups to learn from industry experts and expand your network."
            }
            background="#DA5847"
            color="#fff"
          />
          <Cards
            hText={"Discussion Forum"}
            paragraph={
              "Join groups and discussions centered around your specific interests within the tech industry."
            }
            background="#FBBC04"
            color="#fff"
          />
        </Flex>
      </Box>

      <Organisers />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
