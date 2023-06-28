"use client";
import { Box, Flex, Heading, Image, Button, Text } from "@chakra-ui/react";
// import React from "react";
import Lead from "../../assets/lead-img.png";
import CoOrganiser from "../../assets/co-organiser.png";
import Organiser from "../../assets/orgaiser.png";
import Secretary from "../../assets/secretary.png";
import { Link } from "react-router-dom";
// import Buttons from "../buttons";
import Rec from "../../assets/Rectangle 9789.png"

const Organisers = () => {
  return (
    <>
      <Box
        bgColor="#E9ECED"
        mt={{ base: "52px", lg: "104px" }}
        textAlign="center"
      >
        <Heading
          textAlign="center"
          fontSize={{ base: "32px", lg: "45px" }}
          lineHeight={{ base: "40px", lg: "57px" }}
          fontWeight="500"
          pt={{ base: "61px", lg: "93px" }}
          mb='20'
        //   fontFamily="Recoleta, sans-serif"
        >
          Let’s Meet the Organisers
        </Heading>
        <Flex
          w='85%'
          mx='auto'
          justifyContent={['center', 'space-between', 'space-between']}
          mb='10'
          flexWrap='wrap'
        >
          <Box position='relative' w='250px' h='250px' mb={[20, 5,5]}>
            <Image src={Lead} w='100%' objectFit='cover' />
            <Box position='absolute' top='160px' left='-80px'>
              <Image src={Rec} w='300px' h='220px' />
            </Box>
            <Box position='absolute' zIndex='1' bottom='-20px' textAlign='left'>
              <Heading fontWeight='medium' fontSize='20px' color='#E05D2F' mb='1'>Lead</Heading>
              <Text color='#1E3747' fontSize='15px' fontWeight='medium'>Adeleke Oshin</Text>
            </Box>
          </Box>

          <Box position='relative' w='250px' h='250px' mb={[20, 5, 5]}>
            <Image src={CoOrganiser} w='100%' objectFit='cover' />
            <Box position='absolute' top='160px' left='-80px'>
              <Image src={Rec} w='300px' h='220px' />
            </Box>
            <Box position='absolute' zIndex='1' bottom='-20px' textAlign='left'>
              <Heading fontWeight='medium' fontSize='20px' color='#E05D2F' mb='1'>Co-Organizer</Heading>
              <Text color='#1E3747' fontSize='15px' fontWeight='medium'>Peter James</Text>
            </Box>
          </Box>

          <Box position='relative' w='250px' h='250px' mb={[20, 5, 5]}>
            <Image src={Organiser} w='100%' objectFit='cover' />
            <Box position='absolute' top='160px' left='-80px'>
              <Image src={Rec} w='300px' h='220px' />
            </Box>
            <Box position='absolute' zIndex='1' bottom='-20px' textAlign='left'>
              <Heading fontWeight='medium' fontSize='20px' color='#E05D2F' mb='1'>Organizer</Heading>
              <Text color='#1E3747' fontSize='15px' fontWeight='medium'>Okoro John</Text>
            </Box>
          </Box>

          <Box position='relative' w='250px' h='250px' mb={[5, 5, 5]}>
            <Image src={Secretary} w='100%' objectFit='cover' />
            <Box position='absolute' top='160px' left='-80px'>
              <Image src={Rec} w='300px' h='220px' />
            </Box>
            <Box position='absolute' zIndex='1' bottom='-20px' textAlign='left'>
              <Heading fontWeight='medium' fontSize='20px' color='#E05D2F' mb='1'>Secretary</Heading>
              <Text color='#1E3747' fontSize='15px' fontWeight='medium'>Okafor Nathaniel</Text>
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
