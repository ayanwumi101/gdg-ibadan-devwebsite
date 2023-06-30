"use client";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Icon,
  Text, Image, Stack, Grid, GridItem
} from "@chakra-ui/react";
import React, {useState, useEffect} from "react";
import Line from "../../assets/Pattern 2.png";
import Calendar from "../../assets/image 2.png";
import Sponsors from "../../components/sponsors";
import Organisers from "../../components/organisers";
import { useParams } from "react-router-dom";
import {data} from '../../components/data/data'
import Presenter from '../../assets/presenter.png'
import GalleryImage from '../../assets/gallery-image.png'
import GalleryImage2 from '../../assets/gallery-image2.png'
import GalleryImage3 from '../../assets/gallery-image3.png'
import twitter from '../../assets/twitter-bold-icon.svg'
import linkedin from '../../assets/linkedin-logo.svg'
import {Whatsapp, Facebook} from 'iconsax-react'

const SingleEvent = () => {

  const {id} = useParams()
  const [event, setEvent] = useState(data);

  useEffect(() => {
    const specificEvent = event.find((event) => event.id === parseInt(id));
    setEvent(specificEvent)
  },[])

  return (
    <Box mx='auto'>
      <EventHeaderImage />
      <EventDetails />
      <EventSchedule />
      <PhotoCollage />
      <Sponsors />
      <Organisers />
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
        h={['700px', '550px']}
        w='90%'
        mx='auto'
        bgImage={Line}
        backgroundRepeat='no-repeat'
        backgroundSize='cover'
        display='flex'
        alignItems='center'
        justifyContent='center'
        p='4'
      >

        <Box>
          <Flex gap={3} flexWrap={['wrap-reverse', 'nowrap']}>
            <Image src={Calendar} objectFit='cover' alt={""} w='100%' h={['320px', '500px']} />

            <Box w='200px' mb='5'>
              <Text w={['auto', '180px']} mb='2' fontSize={18}>Share event with friends</Text>
              <Stack fontSize={25} direction={['row', 'column']} spacing={5}>
                <Box>
                  <Stack direction='column' spacing={2}>
                    <Icon as={Whatsapp} variant='Bold'  />
                    <Icon as={Facebook} variant='Bold' />
                  </Stack>
                </Box>
                <Box>
                   <Image src={twitter} w='25px' mb='2' />
                    <Image src={linkedin} w='27px' />
                </Box>
              </Stack>
            </Box>

          </Flex>
        </Box>
      </Box>
  )
}


export const EventDetails = () => {
  return (
    <>
      <Box
        w={['90%', '85%']}
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
          <Box bg='#E8F5E9' mb='3' p='2' borderRadius='24px'><Text color='#34A853'>Ticket closing soon</Text></Box>
          <Box position='relative' >
              <Box position='absolute' w='345px' top='0' bg='white' inset='0' mx='auto' h='180px' boxShadow='xl' borderRadius={5} zIndex='1' py='10'>
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
      <Box w={['90%', '85%']} mx='auto' mb='10'>
        <Box mb='7'>
          <Flex justifyContent='space-between' alignItems='center' flexWrap='wrap'>
            <Heading fontSize='32px' fontWeight='medium' mb='5'>Event Schedule</Heading>
            <Button bg='#E05D2F' color='white' fontWeight='medium' h='50px'>Add to Calendar</Button>
          </Flex>
        </Box>

        <Box display='flex' alignItems='center' gap={2}>
          <Text color='white' bg='#E05D2F' w='170px' textAlign='center' p='2' fontSize={14}>Wed , 12 July 2023</Text>
          <Text fontSize={14}>Thur , 12 July 2023</Text>
        </Box>
        <Box>
          <Box p='4' bg='#E3F2FD' h={['auto', '310px', '310px']} display='flex' alignItems='center' justifyContent='center' w='100%'>
            <Box w='100%'>
              <Stack direction={['column', 'row', 'row']} justifyContent='space-between' alignItems={['flex-start', 'center']}>
                <Box mb='5'>
                  <Text>8:00AM - 9:00AM</Text>
                </Box>

                <Box w='275px'>
                  <Heading fontSize={15} mb='4'>Welcome Address</Heading>
                  <Text mb='5'>Adeyinka AdeyemiManaging Director/CEO,Intermarc Consulting, Nigeria</Text>
                  <Text mb='5'>Adeyinka AdeyemiManaging Director/CEO,Intermarc Consulting, Nigeria</Text>
                </Box>

                <Box maxW='385px' h='265px'>
                  <Image src={Presenter} w='100%' objectFit='cover' borderRadius='24px' />
                </Box>
              </Stack>
            </Box>
          </Box>

          <Box p='4' bg='#FFEBEE' h={['auto', '310px', '310px']} display='flex' alignItems='center' justifyContent='center' w='100%'>
            <Box w='100%'>
              <Stack direction={['column', 'row', 'row']} justifyContent='space-between' alignItems={['flex-start', 'center']}>
                <Box mb='5'>
                  <Text>8:00AM - 9:00AM</Text>
                </Box>

                <Box w='275px'>
                  <Heading fontSize={15} mb='4'>Opening Speech</Heading>
                  <Text mb='5'>Adeyinka AdeyemiManaging Director/CEO,Intermarc Consulting, Nigeria</Text>
                  <Text mb='5'>Adeyinka AdeyemiManaging Director/CEO,Intermarc Consulting, Nigeria</Text>
                </Box>

                <Box maxW='385px' h='265px'>
                  <Image src={Presenter} w='100%' objectFit='cover' borderRadius='24px' />
                </Box>
              </Stack>
            </Box>
          </Box>

          <Box p='4' bg='#FFF8E1' h={['auto', '310px', '310px']} display='flex' alignItems='center' justifyContent='center' w='100%'>
            <Box w='100%'>
              <Stack direction={['column', 'row', 'row']} justifyContent='space-between' alignItems={['flex-start', 'center']}>
                <Box mb='5'>
                  <Text>8:00AM - 9:00AM</Text>
                </Box>

                <Box w='275px'>
                  <Heading fontSize={15} mb='4'>Opening Speech</Heading>
                  <Text mb='5'>Adeyinka AdeyemiManaging Director/CEO,Intermarc Consulting, Nigeria</Text>
                  <Text mb='5'>Adeyinka AdeyemiManaging Director/CEO,Intermarc Consulting, Nigeria</Text>
                </Box>

                <Box maxW='385px' h='265px'>
                  <Image src={Presenter} w='100%' objectFit='cover' borderRadius='24px' />
                </Box>
              </Stack>
            </Box>
          </Box>
        </Box>


      </Box>
    </>
  )
}

export const PhotoCollage = () => {
  return (
      <Box w='85%' mx='auto' minH='985px' mb='20'>
        <Box mb='8'><Heading color='#1E3747' fontSize={32} fontWeight='medium'>Photo collage</Heading></Box>
        <Stack direction={['column', 'row']} justifyContent='space-between'>
          <Box maxW='378px' h='100%'>
            <Stack>
              <Image src={GalleryImage} w='100%' h='212px' objectFit='cover' />
              <Image src={GalleryImage2} w='100%' h='599px' objectFit='cover' />
              <Image src={GalleryImage} w='100%' h='183px' objectFit='cover' />
            </Stack>
          </Box>
          <Box maxW='798px' h='100%'>
            <Stack direction='column' justifyContent='space-between'>
                <Image src={GalleryImage3} w='100%' h='336px' objectFit='cover' />
                <Stack direction='row' w='100%' h='100%'>
                  <Box>
                    <Stack direction='column' justifyContent='space-between'>
                      <Image src={GalleryImage} w='100%' h='212px' objectFit='cover' />
                      <Image src={GalleryImage2} w='100%' h='444px' objectFit='cover' />
                    </Stack>
                  </Box>
                  <Box>
                    <Stack direction='column' justifyContent='space-between'>
                      <Image src={GalleryImage} w='100%' h='212px' objectFit='cover' />
                      <Image src={GalleryImage} w='100%' h='216px' objectFit='cover' />
                      <Image src={GalleryImage} w='100%' h='216px' objectFit='cover' />
                    </Stack>
                  </Box>
                </Stack>
            </Stack>
          </Box>
        </Stack>
      </Box>
  )
}