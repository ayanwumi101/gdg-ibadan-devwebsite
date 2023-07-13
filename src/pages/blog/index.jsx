"use client";
import React, {useRef, useEffect} from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  InputGroup,
  Input,
  InputLeftElement,
  IconButton,
  Stack,
  CardBody,
  Card, Image, Badge
} from "@chakra-ui/react";
import BlogImage from "../../assets/about (4).png";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import Testing from "../../components/testing";
import Design1 from "../../assets/Frame 1000004323.png";
import Design2 from "../../assets/Frame 1000004323 (1).png";
import Design3 from "../../assets/Image.png";
import {motion, useAnimation} from 'framer-motion'

const Blog = () => {

  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const imageRef = useRef(null);
  const cardRef = useRef(null);
  const cardControls = useAnimation();

  const headingControls = useAnimation();
  const paragraphControls = useAnimation();
  const imageControls = useAnimation();

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust this threshold as needed
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          headingControls.start({ opacity: 1, y: 0 });
          paragraphControls.start({ opacity: 1, y: 0 });
          imageControls.start({ opacity: 1, scale: 1 });
          cardControls.start({ scale: 1.05 });
        } else {
          headingControls.start({ opacity: 0, y: -20 });
          paragraphControls.start({ opacity: 0, y: 20 });
          imageControls.start({ opacity: 0, scale: 0.8 });
          cardControls.start({ scale: 1 });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }
    if (paragraphRef.current) {
      observer.observe(paragraphRef.current);
    }

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [headingControls, paragraphControls, imageControls, cardControls]);

  return (
    <>
      <Box
        w="90%"
        mx='auto'
        height="auto"
        mt='7'
      >
        <Box>
          <motion.div
          >
          <Image
            src={BlogImage}
            alt={""}
            objectFit='cover'
            borderRadius='24px'
            w='100%'
            h={{base: '550px', lg: '100%'}}
          />
          </motion.div>
        </Box>
      </Box>

      <Box w='80%' mx='auto' my='16'>
        <Flex alignItems='center' justifyContent='space-between' flexWrap='wrap'>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7 }}
            ref={headingRef}
            animate={headingControls}
          >
          <Heading mb='4'>Latest News</Heading>
          </motion.h1>

          <Box
            display="flex"
            columnGap="20px"
            alignItems="center"
            color="#213C4E"
          >
            <ChevronLeftIcon />
            <Box display='flex' alignItems='center' gap={4} w={{base: '250px', lg: 'auto'}} overflow='auto'>
              <Text>Business</Text>
              <Text>Design</Text>
              <Text>Development</Text>
              <Text>Tech</Text>
              <Text>Development</Text>
              <Text>Branding</Text></Box>
            <ChevronRightIcon />
          </Box>
        </Flex>
      </Box>

      <Stack
        alignItems={{base: 'center', lg: 'flex-start'}}
        justifyContent={{base: 'center', lg: 'space-between'}}
        w='80%'
        mx='auto'
        my='8'
        direction={{base: 'column-reverse', lg: 'row'}}
      >
        <Box my={{base: '10', lg: 0}} w={{base: '100%', lg: '65%'}}>
          <SinglePost />
          <SinglePost />
          <SinglePost />
          <SinglePost />
          <SinglePost />
          <SinglePost />
          <SinglePost />
        </Box>

        <Box mb='8' w={{base: '100%', lg: '28%'}}>
          <Box>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="gray.300" />}
              />
              <Input placeholder="Search..." borderRadius="24px" />
            </InputGroup>

            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7 }}
              ref={headingRef}
              animate={headingControls}
            >
            <Heading fontSize={22} fontWeight='medium' my='8'>
              Recent Posts
            </Heading>
            </motion.h1>

            <Box
              display="flex"
              overflow="hidden"
              columnGap="30px"
              border="none"
              pb="42px"
            >
              <motion.img
                ref={imageRef}
                src={Design1}
                alt="Your Image"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={imageControls}
                transition={{ duration: 0.8 }}
                style={{ objectFit: 'cover', borderRadius: 10 }}
                height='100px'
                width='100px'
              />              

              <Box alignSelf="center">
                <Box>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    ref={paragraphRef}
                    animate={paragraphControls}
                  >
                  <Text
                    fontSize="15px"
                    lineHeight="24px"
                    fontWeight="400"
                    color="#6A7C88"
                    mb='3'
                  >
                    Design . Jan 2, 2023
                  </Text>
                  </motion.p>

                  <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.7 }}
                    ref={headingRef}
                    animate={headingControls}
                  >
                  <Heading
                    fontSize="15px"
                    lineHeight="24px"
                    fontWeight="500"
                    width="154px"
                  >
                    Inspiration for Content Creating
                  </Heading>
                  </motion.h1>
                </Box>
              </Box>
            </Box>


            <Box
              display="flex"
              overflow="hidden"
              columnGap="30px"
              border="none"
              pb="42px"
            >
              <motion.img
                ref={imageRef}
                src={Design2}
                alt="Your Image"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={imageControls}
                transition={{ duration: 0.8 }}
                style={{ objectFit: 'cover', borderRadius: 10 }}
                height='100px'
                width='100px'
              />

              <Box alignSelf="center">
                <Box>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    ref={paragraphRef}
                    animate={paragraphControls}
                  >
                    <Text
                      fontSize="15px"
                      lineHeight="24px"
                      fontWeight="400"
                      color="#6A7C88"
                      mb='3'
                    >
                      Design . Jan 2, 2023
                    </Text>
                  </motion.p>

                  <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.7 }}
                    ref={headingRef}
                    animate={headingControls}
                  >
                    <Heading
                      fontSize="15px"
                      lineHeight="24px"
                      fontWeight="500"
                      width="154px"
                    >
                      Inspiration for Content Creating
                    </Heading>
                  </motion.h1>
                </Box>
              </Box>
            </Box>


            <Heading
              fontSize="22px"
              lineHeight="28px"
              fontWeight="400"
              pb="32px"
            >
              Tags
            </Heading>

            <Box>
              <Flex columnGap="15px" pb="20px">
                <Button
                  color="#4D6371"
                  backgroundColor="#fff"
                  border=" 1px solid #BAC3C8"
                  borderRadius="24px"
                >
                  Brand
                </Button>

                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                <Button
                  color="#4D6371"
                  backgroundColor="#fff"
                  border=" 1px solid #BAC3C8"
                  borderRadius="24px"
                >
                  Development
                </Button>
                </motion.button>

                <Button
                  color="#4D6371"
                  backgroundColor="#fff"
                  border=" 1px solid #BAC3C8"
                  borderRadius="24px"
                >
                  Logo
                </Button>
              </Flex>

              <Flex columnGap="15px" pb="20px">
                <Button
                  color="#4D6371"
                  backgroundColor="#fff"
                  border=" 1px solid #BAC3C8"
                  borderRadius="24px"
                >
                  Clients
                </Button>
                <Button
                  color="#4D6371"
                  backgroundColor="#fff"
                  border=" 1px solid #BAC3C8"
                  borderRadius="24px"
                >
                  AR/VR
                </Button>

                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                <Button
                  color="#4D6371"
                  backgroundColor="#fff"
                  border=" 1px solid #BAC3C8"
                  borderRadius="24px"
                >
                  Startup
                </Button>
                </motion.button>
              </Flex>

              <Flex columnGap="15px">
                <Button
                  color="#4D6371"
                  backgroundColor="#fff"
                  border=" 1px solid #BAC3C8"
                  borderRadius="24px"
                >
                  Portfolio
                </Button>
                <Button
                  color="#4D6371"
                  backgroundColor="#fff"
                  border=" 1px solid #BAC3C8"
                  borderRadius="24px"
                >
                  Business
                </Button>

                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                <Button
                  color="#4D6371"
                  backgroundColor="#fff"
                  border=" 1px solid #BAC3C8"
                  borderRadius="24px"
                >
                  Brand
                </Button>
                </motion.button>
              </Flex>
            </Box>

          </Box>
        </Box>
      </Stack>
    </>
  );
};

export default Blog;



export const SinglePost = () => {

  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const imageRef = useRef(null);
  const cardRef = useRef(null);
  const cardControls = useAnimation();

  const headingControls = useAnimation();
  const paragraphControls = useAnimation();
  const imageControls = useAnimation();

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust this threshold as needed
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          headingControls.start({ opacity: 1, y: 0 });
          paragraphControls.start({ opacity: 1, y: 0 });
          imageControls.start({ opacity: 1, scale: 1 });
          cardControls.start({ scale: 1.05 });
        } else {
          headingControls.start({ opacity: 0, y: -20 });
          paragraphControls.start({ opacity: 0, y: 20 });
          imageControls.start({ opacity: 0, scale: 0.8 });
          cardControls.start({ scale: 1 });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }
    if (paragraphRef.current) {
      observer.observe(paragraphRef.current);
    }

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [headingControls, paragraphControls, imageControls, cardControls]);


  return (
    <Box w='100%' mb='16'> 
      <Stack direction={{base: 'column', lg: 'row'}} justifyContent='space-between' alignItems={{base: 'flex-start', lg: 'center'}}>
        <Box w={{ base: '100%', lg: '65%' }} mb='4'>
          <Box bg='#FCEFEA' py='1.5' px='3.5' borderRadius='85px' w='100px'><Text color='#E05D2F' fontSize={14} fontWeight='medium'>QA Testing</Text></Box>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7 }}
            ref={headingRef}
            animate={headingControls}
          >
              <Heading my='3.5' fontSize={22} color='#1E3747'>The Best Productivity Apps for 2021 - Updated List</Heading>
          </motion.h1>
          <Box w='100%' border='1px dashed #BAC3C8' my='3'></Box>

          <Stack direction='row' alignItems='center' gap={2}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              ref={paragraphRef}
              animate={paragraphControls}
            >
            <Text color='#6A7C88' fontSize={14}>May 02, 2022</Text>
            </motion.p>
            <Box w='6.5px' h='6.5px' borderRadius='50%' bg='#E05D2F'></Box>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              ref={paragraphRef}
              animate={paragraphControls}
            >
            <Text color='#6A7C88' fontSize={14}>Nattasha</Text>
            </motion.p>
          </Stack>
          
        </Box>
        <Box w={{base: '80%', lg: '30%'}}>
          <motion.img
            ref={imageRef}
            src={Design3}
            alt="Your Image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={imageControls}
            transition={{ duration: 0.8 }}
            style={{objectFit: 'cover', borderRadius: 10}}
            height='155px'
            width='100%'
          />
          {/* <Image src={Design3} h='155px' objectFit='cover' w='100%' borderRadius={10} /> */}
        </Box>
      </Stack>
    </Box>
  )
}