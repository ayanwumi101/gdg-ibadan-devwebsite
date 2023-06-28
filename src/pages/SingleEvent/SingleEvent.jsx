"use client";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Icon,
  Text, Image, Stack
} from "@chakra-ui/react";
import React, {useState, useEffect} from "react";
import Line from "../../assets/Pattern 2.png";
import Calendar from "../../assets/image 2.png";
import Navbar from "../../components/Navbar/Navbar";
import {
  DangerIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
} from "../../components/icons";
import Buttons from "../../components/buttons";
import Sponsors from "../../components/sponsors";
import BMW from "../../assets/Rectangle 361.png";
import TM from "../../assets/Rectangle 366.png";
import Dyson from "../../assets/Rectangle 364.png";
import Organisers from "../../components/organisers";
import { useParams } from "react-router-dom";
import {data} from '../../components/data/data'

const SingleEvent = () => {

  // const {id} = useParams()
  // const [event, setEvent] = useState(data);

  // useEffect(() => {
  //   const specificEvent = event.find((event) => event.id === parseInt(id));
  //   setEvent(specificEvent)
  // },[])

  return (
    <Box mx='auto'>
      <EventHeaderImage />
      <EventDetails />
      <EventSchedule />
      <PhotoCollage />
      <Sponsors />
      <Organisers />
      {/* <Box
          display={{ base: "flex", lg: "none" }}
          pl="25px"
          pr="34px"
          pt="46px"
          pb="136px"
          alignItems="center"
          justifyContent="space-between"
        >
          <Image src={BMW} alt={""} />
          <Image src={TM} alt={""} />
          <Image src={Dyson} alt={""} />
        </Box> */}
    </Box>
  );
};

export default SingleEvent;


export const EventHeaderImage = () => {
  return (
      <Box
        bgColor="#1E3747"
        borderRadius="24px"
        color="#fff"
        mt='6'
        mb='12'
        h='550px'
        w='90%'
        mx='auto'
        bgImage={Line}
        backgroundRepeat='no-repeat'
        backgroundSize='cover'
        display='flex'
        alignItems='center'
        justifyContent='center'
      >

        {/* <Box
          position="absolute"
          top={{ base: "3rem", lg: "0.5rem" }}
          right={{ base: "11rem", lg: "4rem" }}
          cursor="pointer"
        >
          <Text pb={{ base: "23px", lg: "15px" }}>
            Share event with friends
          </Text>
          <Box>
            <Box
              display={{ base: "flex", lg: "block" }}
              columnGap="26px"
              pb={{ base: "24px", lg: "0px" }}
            >
              <Box mb={{ base: "0px", lg: "25px" }}>
                <Icon as={WhatsappIcon}></Icon>
              </Box>
              <Box mb={{ base: "0px", lg: "25px" }}>
                <Icon as={FacebookIcon}></Icon>
              </Box>
            </Box>
            <Box display={{ base: "flex", lg: "block" }} columnGap="26px">
              <Box mb={{ base: "0px", lg: "25px" }}>
                <Icon as={TwitterIcon}></Icon>
              </Box>
              <Box mb={{ base: "0px", lg: "25px" }}>
                <Icon as={LinkedinIcon}></Icon>
              </Box>
            </Box>
          </Box>
        </Box> */}

        <Box>
          <Image src={Calendar} objectFit='cover' alt={""} w='100%' h='500px' />
        </Box>
      </Box>
  )
}


export const EventDetails = () => {
  return (
    <>
      <Box
        w='85%'
        mx='auto'
      >
      <Flex w='100%' justifyContent={['center', 'space-between']} flexWrap='wrap-reverse'>
        <Box w={['100%', '60%', '60%']} mt={['250px', '0', '0']}>
          <Box mb='14'>
            <Heading fontWeight="500" fontSize="50px" lineHeight="64px" color="#E05D2F">Dare To Be</Heading>
          </Box>

          <Box mb='14'>
            <Heading mb='3' fontWeight='medium' fontSize='28px' color='#1E3747'>Date and Time</Heading>
            <Text color='#6A7C88'>Fri, Jun 16, 2023, 9:00 AM – Sat, Jun 17, 2023, 4:00 PM WAT</Text>
          </Box>

          <Box mb='14'>
            <Heading mb='3' fontWeight='medium' fontSize='28px' color='#1E3747'>About Event</Heading>
            <Text color='#6A7C88' lineHeight={8}>
              International Women’s Day (IWD) is Women Techmakers’ largest annual event campaign where Ambassador host events all around the world during the months of March and April in celebration of this moment.
              From big summits to smaller, intimate gatherings, IWD is a time to host events that create connections, educate and inspire your tech community. IWD is also a way in which we support our mission of building a world where all women thrive in tech.
            </Text>
          </Box>

          <Box mb='16'>
            <Heading mb='3' fontWeight='medium' fontSize='28px' color='#1E3747'>Tags</Heading>
            <Box>
              <Button color='#8f8f8f' bg='#f1f1f1' h='45px' mr='3'>Ibadan Events</Button>
              <Button color='#8f8f8f' bg='#f1f1f1' h='45px'>IWD</Button>
            </Box>
          </Box>
        </Box>


        <Box w={['100%', '30%', '30%']} textAlign='center'>
          <Box position='relative' >
              <Box position='absolute' w='345px' top='0' bg='white' inset='0' mx='auto' h='180px' boxShadow='xl' borderRadius={5} zIndex='2' py='10'>
                <Text mb='7' color='#1E3747' fontWeight='medium' fontSize={18}>It's free for everyone</Text>
                <Button bg='#E05D2F' color='white'>Register Now</Button>
              </Box>
              <Box position='absolute' w='305px' left='20px' bg='white' mx='auto' top='20px' boxShadow='xl' h='180px' zIndex='-1' borderRadius={5}></Box>
              <Box position='absolute' mx='auto' left='35px' bg='white' w='275px' top='40px' boxShadow='lg' h='180px' zIndex='-2' borderRadius={5}></Box>
          </Box>
        </Box>

      </Flex>
      </Box>
    </>
  )
}


export const EventSchedule = () => {
  return (
    <>
    </>
  )
}

export const PhotoCollage = () => {
  return (
    <>

    </>
  )
}