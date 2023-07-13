"use client";
import {
  Box,
  Flex,
  Heading,
  Icon,
  ListItem,
  Text,
  UnorderedList, Button, Image
} from "@chakra-ui/react";
import React, {useRef, useEffect} from "react";
import Buttons from "../buttons";
import Logo from "../logo";
// import { LinkedinIcon, SlackIcon, TwitterIcon } from "../icons";
import Slack from '../../assets/slack.svg'
import linkedin from '../../assets/linkedin-logo.svg'
import instagram from '../../assets/instagram-icon.svg'
import twitter from '../../assets/twitter-logo.svg'
import { Link, useLocation } from "react-router-dom";
import { motion, useAnimation } from 'framer-motion'

const Footer = () => {
  const location = useLocation();
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const imageRef = useRef(null);


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
        } else {
          headingControls.start({ opacity: 0, y: -20 });
          paragraphControls.start({ opacity: 0, y: 20 });
          imageControls.start({ opacity: 0, scale: 0.8 });
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

    return () => {
      observer.disconnect();
    };
  }, [headingControls, paragraphControls, imageControls]);
  return (
    <>
      {location.pathname !== '/signin' && location.pathname !== '/signup' && location.pathname !== '/verification' &&   
        (<Box>
        <Box pt={{ base: "40rem", lg: "20rem" }} w='90%' mx='auto'>
          <Box
            as="footer"
            bgColor="#172B37"
            position="relative"
            borderRadius="24px"
            pb={{ base: "20px", lg: "119px" }}
            w='100%'
            mx='auto'
            inset='0'
          >
            <Box
              bgColor="#FCEFEA"
              w='90%'
              position="absolute"
              mx='auto'
              borderRadius="24px"
              bottom={{ base: "42.5rem", lg: "27rem" }}
              left="0"
              right="0"
            >
              <Flex
                margin='auto'
                justifyContent={{base:'center', lg: 'space-between'}}
                  width="100%"
                //   mx="auto"
                alignItems={{base: 'center', lg: 'flex-start'}}
                display={{ base: "block", lg: "flex" }}
              >
                <Box
                  // as="h4"
                  color="#1E3747"
                  pt={{ base: "148px", lg: "93px" }}
                  pl={{ base: "16px", lg: "90px" }}
                  pb={{ base: "0px", lg: "103px" }}
                  pr={{ base: "18px" }}
                >
                  <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    ref={headingRef}
                    animate={headingControls}
                  >
                  <Heading
                    w={{ base: "267px", lg: "465px" }}
                    fontSize={{ base: "32px", lg: "33px" }}
                    lineHeight={{ base: "48px", lg: "57px" }}
                    fontWeight="500"
                  >
                    Ready to take your tech skills to the next level? Join our
                    community now!
                  </Heading>{" "}
                  </motion.h1>
                </Box>
                <Box
                  marginBottom={{ base: "66px", lg: "152px" }}
                  marginTop={{ base: "47px", lg: "159px" }}
                  mr={{ base: "70px", lg: "90px" }}
                  ml={{ base: "17px", lg: "0px" }}
                >
                  <a href="https://gdg.community.dev/gdg-ibadan/" target='_blank'>
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                    >
                    <Button bg='#E05D2F' w='210px' color='white' fontSize={15} h='55px'>Join our community</Button>
                    </motion.button>
                  </a>
                </Box>
              </Flex>
              <Box display={{ base: "none" }}>
                <Box
                  position="absolute"
                  inset="2rem auto auto 2rem"
                  backgroundColor="#E05D2F"
                  borderRadius="15px"
                  width="9px"
                  height="9px"
                ></Box>
                <Box
                  position="absolute"
                  inset="2rem auto auto 13rem"
                  backgroundColor="#34A853"
                  borderRadius="15px"
                  width="9px"
                  height="9px"
                ></Box>
                <Box
                  position="absolute"
                  inset="6rem 28rem auto auto"
                  backgroundColor="#E05D2F"
                  borderRadius="15px"
                  width="8px"
                  height="8px"
                ></Box>
                <Box
                  position="absolute"
                  inset="auto auto 4rem 10rem"
                  backgroundColor="#FBBC04"
                  borderRadius="15px"
                  width="11px"
                  height="11px"
                ></Box>
                <Box
                  position="absolute"
                  inset="auto auto 6rem 20rem"
                  backgroundColor="#4285F4"
                  borderRadius="15px"
                  width="11px"
                  height="11px"
                ></Box>
                <Box
                  position="absolute"
                  inset="auto auto 7rem 25rem"
                  backgroundColor="#8F8F8F"
                  borderRadius="15px"
                  width="9px"
                  height="9px"
                ></Box>
                <Box
                  position="absolute"
                  inset="auto auto 6.5em 30rem"
                  backgroundColor="#4285F4"
                  borderRadius="15px"
                  width="11px"
                  height="11px"
                ></Box>
                <Box
                  position="absolute"
                  inset="auto auto 10rem 35rem"
                  backgroundColor="#34A853"
                  borderRadius="15px"
                  width="11px"
                  height="11px"
                ></Box>
              </Box>

              <Box display={{ base: "block" }}>
                <Box
                  position="absolute"
                  inset="2rem auto auto 2rem"
                  backgroundColor="#E05D2F"
                  borderRadius="15px"
                  width="9px"
                  height="9px"
                ></Box>
                <Box
                  position="absolute"
                  inset="2rem auto auto 13rem"
                  backgroundColor="#34A853"
                  borderRadius="15px"
                  width="9px"
                  height="9px"
                ></Box>
                <Box
                  position="absolute"
                  inset="8rem 10rem auto auto"
                  backgroundColor="#E05D2F"
                  borderRadius="15px"
                  width="8px"
                  height="8px"
                ></Box>
                <Box
                  position="absolute"
                  inset="auto auto 4rem 10rem"
                  backgroundColor="#FBBC04"
                  borderRadius="15px"
                  width="11px"
                  height="11px"
                ></Box>
                <Box
                  position="absolute"
                  inset="auto auto 6rem 20rem"
                  backgroundColor="#4285F4"
                  borderRadius="15px"
                  width="11px"
                  height="11px"
                ></Box>
                <Box
                  position="absolute"
                  inset="auto auto 17rem 18rem"
                  backgroundColor="#8F8F8F"
                  borderRadius="15px"
                  width="9px"
                  height="9px"
                ></Box>
                <Box
                  position="absolute"
                  inset="auto auto 13.5em 10rem"
                  backgroundColor="#4285F4"
                  borderRadius="15px"
                  width="11px"
                  height="11px"
                ></Box>
                <Box
                  position="absolute"
                  inset="auto auto 9rem 2rem"
                  backgroundColor="#34A853"
                  borderRadius="15px"
                  width="11px"
                  height="11px"
                ></Box>
              </Box>
            </Box>
            <Box
              display={{ base: "block", lg: "flex" }}
              color="#fff"
              pt={{ base: "8rem", lg: "11rem" }}
              justifyContent="space-between"
              pl={{ base: "32px", lg: "141px" }}
              pr={{ base: "0px", lg: "174px" }}
              // pb="119px"
            >
              <Box mt='8'>
                <Link to='/'><Logo /></Link>
                <Text
                  fontSize={15}
                  fontWeight="400"
                  lineHeight="28px"
                  pt={{ base: "27px", lg: "22px" }}
                  w={{ base: "252px", lg: "335px" }}
                >
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    ref={paragraphRef}
                    animate={paragraphControls}
                  >
                  We strive to create a space that fosters collaboration and
                  learning among tech enthusiasts of all levels. Whether you're a
                  beginner or an expert, our community welcomes you.
                  </motion.p>
                </Text>
                <Flex
                  paddingTop={{ base: "27px", lg: "56px" }}
                  columnGap="25px"
                  cursor="pointer"
                >
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                  <a href="https://gdgibadan.slack.com/?redir=%2Farchives%2FD0465RU7TL1%2Fp1672870979253869" target='_blank'>
                    <Image src={Slack} />
                  </a>
                  </motion.button>

                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                  <a href="https://twitter.com/gdgibadan?s=11&t=q2B3F1i2ySbJLEmnk5TtKQ" target="_blank">
                    <Image src={twitter} />
                  </a>
                  </motion.button>

                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                  <a href="https://www.linkedin.com/company/gdg-ibadan/" target="_blank">
                    <Image src={linkedin} />
                  </a>
                  </motion.button>

                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                  <a href="https://instagram.com/gdgibadan" target="_blank">
                    <Image src={instagram} />
                  </a>
                  </motion.button>                  
                </Flex>
              </Box>

              <Box pt={{ base: "39px", lg: "0px" }} mt='8'>
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.7 }}
                  ref={headingRef}
                  animate={headingControls}
                >
                <Text
                  fontSize="16px"
                  fontWeight="500"
                  lineHeight="20px"
                  color="#E05D2F"
                  pb={{ base: "32px", lg: "24px" }}
                >
                  Quick Links
                </Text>
                </motion.h1>

                <Box
                  fontSize="15px"
                  fontWeight="400"
                  lineHeight="20px"
                  // display="block"
                >
                  <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.4, delay: 0.6 }}
                      ref={paragraphRef}
                      animate={paragraphControls}
                    >
                    <Box as="li" pb={{ base: "16px", lg: "24px" }}>
                      <Link to="/about">About GDG Ibadan</Link>
                    </Box>
                  </motion.p>


                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    ref={paragraphRef}
                    animate={paragraphControls}
                  >
                    <Box as="li" pb={{ base: "16px", lg: "24px" }}>
                      <Link to="/events">Upcoming events</Link>
                    </Box>
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    ref={paragraphRef}
                    animate={paragraphControls}
                  >
                    <Box as="li" pb={{ base: "16px", lg: "24px" }}>
                      <Link to="/jobs">Job board</Link>
                    </Box>
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.7, delay: 0.9 }}
                    ref={paragraphRef}
                    animate={paragraphControls}
                  >
                    <Box as="li" pb={{ base: "16px", lg: "24px" }}>
                      <Link to="/blog">Blog</Link>
                    </Box>
                  </motion.p>
                </Box>
              </Box>

              <Box pt={{ base: "15px", lg: "0px" }} mt='8'>
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.7 }}
                  ref={headingRef}
                  animate={headingControls}
                >
                  <Text
                    fontSize="16px"
                    fontWeight="500"
                    lineHeight="20px"
                    color="#E05D2F"
                    mb='5'
                  >
                    Legal
                  </Text>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.7, delay: 0.9 }}
                  ref={paragraphRef}
                  animate={paragraphControls}
                >
                  <Box as="li" pb={{ base: "16px", lg: "24px" }}>
                    <Link to="/blog">Blog</Link>
                  </Box>
                </motion.p>
              </Box>
            </Box>
          </Box>
        </Box>
      

      <Text
        textAlign="center"
        fontSize="14px"
        fontWeight="400"
        lineHeight="20px"
        pt="25px"
        pb="25px"
      >
        {" "}
        &copy; 2023 Ibadan devwebsite
      </Text>
      </Box>)}
    </>
  );
};

export default Footer;
