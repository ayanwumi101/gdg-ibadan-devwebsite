"use client";
import { Box, Flex, Heading, Image, Button, Text } from "@chakra-ui/react";
import React, {useRef, useEffect} from "react";
import Lead from "../../assets/lead-img.png";
import CoOrganiser from "../../assets/co-organiser.png";
import Organiser from "../../assets/orgaiser.png";
import Secretary from "../../assets/secretary.png";
import { Link } from "react-router-dom";
// import Buttons from "../buttons";
import Rec from "../../assets/Rectangle 9789.png"
import {motion, useAnimation} from 'framer-motion'

const Organisers = () => {
  const cardRef = useRef(null);
  const cardControls = useAnimation();

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust this threshold as needed
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          cardControls.start({ scale: 1.05 });
        } else {
          cardControls.start({ scale: 1 });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [cardControls]);



    return (
    <>
      <Box
        bgColor="#E9ECED"
        mt={{ base: "52px", lg: "104px" }}
        textAlign="center"
        pb='10'
      >
        <Heading
          textAlign="center"
          fontSize={{ base: "32px", lg: "45px" }}
          lineHeight={{ base: "40px", lg: "57px" }}
          fontWeight="500"
          pt={{ base: "61px", lg: "93px" }}
          mb='20'
        >
          Let’s Meet the Organisers
        </Heading>
        <Flex
          w='85%'
          mx='auto'
          justifyContent={['center', 'space-between', 'space-between']}
          flexWrap='wrap'
        >
          <OrganizerCard image={Lead} role='Lead' name='Adeleke Oshin' />
          <OrganizerCard image={CoOrganiser} role='Co-Organizer' name='Peter James' />
          <OrganizerCard image={Organiser} role='Organizer' name='Okoro John' />
          {/* <OrganizerCard image={Secretary} role='Secretary' name='Okafor Nathaniel' /> */}
          <Box position='relative' w='250px' h='250px' mb={[8, 5, 5]}>
            <Image src={Secretary} w='100%' objectFit='cover' />
            <Box position='absolute' top='180px' left='-80px'>
              <Image src={Rec} w='300px' h='170px' />
            </Box>
            <Box position='absolute' zIndex='1' bottom='-20px' textAlign='left'>
              <Heading fontWeight='medium' fontSize='17px' color='#E05D2F'>Secretary</Heading>
              <Text color='#1E3747' fontSize='14px' fontWeight='medium'>Okafor Nathaniel</Text>
            </Box>
          </Box>
        </Flex>

        <Box
          paddingTop={{ base: "60px", lg: "55px" }}
          paddingBottom={{ base: "29px", lg: "76px" }}
        >
          <Link to='/contact'><Button bg='#E05D2F' w='150px' h='50px' color='white' boxShadow='md'>Contact Us</Button></Link>
        </Box>
      </Box>
    </>
  );
};

export default Organisers;


export const OrganizerCard = ({role, name, image}) => {

  const cardRef = useRef(null);
  const cardControls = useAnimation();

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust this threshold as needed
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          cardControls.start({ scale: 1.05 });
        } else {
          cardControls.start({ scale: 1 });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [cardControls]);


  return (
    <Box as='div' position='relative' w='250px' h='250px' mb={[20, 5, 5]}>
        <Box>
          <Image src={image} w='100%' objectFit='cover' />
          <Box position='absolute' top='180px' left='-80px'>
            <Image src={Rec} w='300px' h='170px' />
          </Box>
          <Box position='absolute' zIndex='1' bottom='-20px' textAlign='left'>
            <Heading fontWeight='medium' fontSize='17px' color='#E05D2F'>{role}</Heading>
            <Text color='#1E3747' fontSize='14px' fontWeight='medium'>{name}</Text>
          </Box>
        </Box>
      
    </Box>
  )
}
