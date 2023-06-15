"use state";
import { Center, Flex, Image, Box } from "@chakra-ui/react";
// import React from "react";
import Lacasera from "../../assets/lacasera.png";
import Cardify from "../../assets/cardify.png";
import Ship from "../../assets/ship.png";
import Altschool from "../../assets/Altschool.png";
import Heyfood from "../../assets/heyfood.png";
import Halal from "../../assets/halal.png";
import { keyframes } from '@emotion/react';

const slideAnimation = keyframes`
  0% {
    transform: translateX(100vw);
  }
  100% {
    transform: translateX(0);
  }
`;

const Sponsors = () => {
  return (
    <Box mb='12' w={['80%', '70%']} mx='auto' overflow='hidden'>
      <Center
        fontSize={{ base: "32px", lg: "45px" }}
        fontWeight="500"
        lineHeight={{ base: "40px", lg: "57px" }}
        // pt={{ base: "27px", lg: "134px" }}
        // pt="134px"
        color='#1E3747'
      >
        Our Sponsors
      </Center>
      <Flex
        // mb='5'
        alignItems="center"
        oberflow="auto"
        justifyContent="center"
        columnGap={{ base: "10px", lg: "52px" }}
        // pl={{ base: "0px", lg: "219px" }}
        // pr={{ base: "30px", lg: "220px" }}
        // pt={{ base: "32px", lg: "67px" }}
        // pb={{ base: "85px", lg: "66px" }}
        // display={{ base: "flex", lg: "flex" }}
        // overflow="hidden"
        // whiteSpace="nowrap"
        transition="all 1s ease"
        animation={`${slideAnimation} 20s linear infinite`}
      >
        <Image src={Lacasera} alt={""} />
        <Image src={Cardify} alt={""} />
        <Image src={Ship} alt={""} />
        <Image src={Altschool} alt={""} />
        <Image src={Heyfood} alt={""} />
        <Image src={Halal} alt={""} />
      </Flex>
    </Box>
  );
};

export default Sponsors;
