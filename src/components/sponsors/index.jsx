"use state";
import { Center, Flex, Image } from "@chakra-ui/react";
import React from "react";
import Lacasera from "../../assets/lacasera.png";
import Cardify from "../../assets/cardify.png";
import Ship from "../../assets/ship.png";
import Altschool from "../../assets/Altschool.png";
import Heyfood from "../../assets/heyfood.png";
import Halal from "../../assets/halal.png";

const Sponsors = () => {
  return (
    <>
      <Center
        fontSize={{ base: "32px", lg: "45px" }}
        fontWeight="500"
        lineHeight={{ base: "40px", lg: "57px" }}
        color='#1E3747'
      >
        Our Sponsors
      </Center>
      <Flex
        alignItems="center"
        justifyContent="center"
        columnGap="52px"
        pl="219px"
        pr="220px"
        pt="67px"
        pb="66px"
        display={{ base: "none", lg: "flex" }}
      >
        <Image src={Lacasera} alt={""} />
        <Image src={Cardify} alt={""} />
        <Image src={Ship} alt={""} />
        <Image src={Altschool} alt={""} />
        <Image src={Heyfood} alt={""} />
        <Image src={Halal} alt={""} />
      </Flex>
    </>
  );
};

export default Sponsors;
