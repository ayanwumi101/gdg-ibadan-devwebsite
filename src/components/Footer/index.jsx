"use client";
import {
  Box,
  Flex,
  Heading,
  // Icon,
  // ListItem,
  Text,
  // UnorderedList,
   Button, Image
} from "@chakra-ui/react";
// import React from "react";
// import Buttons from "../buttons";
import Logo from "../logo";
// import { LinkedinIcon, SlackIcon, TwitterIcon } from "../icons";
import Slack from '../../assets/slack.svg'
import linkedin from '../../assets/linkedin-logo.svg'
import instagram from '../../assets/instagram-icon.svg'
import twitter from '../../assets/twitter-logo.svg'
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {

  const location = useLocation();
  return (
    <>
      {location.pathname !== '/signin' && location.pathname !== '/signup' && location.pathname !== '/verification' &&   
        (<Box>
        <Box pt={{ base: "40rem", lg: "20rem" }} w='90%' mx='auto'>
          <Box
            as="footer"
            bgColor="#172B37"
            position="relative"
            // ml={{ base: "19px", lg: "50px" }}
            // mr={{ base: "18px", lg: "50px" }}
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
              // inset='0'
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
                  <Heading
                    w={{ base: "267px", lg: "465px" }}
                    fontSize={{ base: "32px", lg: "33px" }}
                    lineHeight={{ base: "48px", lg: "57px" }}
                    fontWeight="500"
                  >
                    Ready to take your tech skills to the next level? Join our
                    community now!
                  </Heading>{" "}
                </Box>
                <Box
                  marginBottom={{ base: "66px", lg: "152px" }}
                  marginTop={{ base: "47px", lg: "159px" }}
                  mr={{ base: "70px", lg: "90px" }}
                  ml={{ base: "17px", lg: "0px" }}
                >
                  {/* <a href="https://gdg.community.dev/gdg-ibadan/" target='_blank'> */}
                    <Button bg='#E05D2F' w='210px' color='white' fontSize={15} h='55px'>Join our community</Button>
                    {/* </a> */}
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
              <motion.div
                initial={{ x: -100 }}
                animate={{ y: 100 }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  repeatType: "reverse",
                }}
              >
                <Box
                  position="absolute"
                  inset="auto auto 20rem 8rem"
                  backgroundColor="#E05D2F"
                  borderRadius="15px"
                  width="9px"
                  height="9px"
                ></Box>
                </motion.div>
                <motion.div
                initial={{ x: -10 }}
                animate={{ x: 10 }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  repeatType: "reverse",
                }}
              >
      <Box
        backgroundColor="#34A853"
        position="absolute"
      inset="-15rem auto auto 8rem"
        borderRadius="50%"
        width="9px"
        height="9px"
      />
    </motion.div>

    <motion.div
                initial={{ y: -100 }}
                animate={{ x: 100 }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  repeatType: "reverse",
                }}
              >
                <Box
                  position="absolute"
                  inset="-15rem 8rem auto auto"
                  backgroundColor="#E05D2F"
                  borderRadius="15px"
                  width="8px"
                  height="8px"
                ></Box>
                </motion.div>

                <motion.div
                initial={{ x: -10 }}
                animate={{ x: 10 }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  repeatType: "reverse",
                }}
              >
                <Box
                  position="absolute"
                  inset="auto auto 3rem 4rem"
                  backgroundColor="#FBBC04"
                  borderRadius="15px"
                  width="11px"
                  height="11px"
                ></Box>
                </motion.div>

                <motion.div
                initial={{ x: -10 }}
                animate={{ x: 10 }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  repeatType: "reverse",
                }}
              >
                <Box
                  position="absolute"
                  inset="auto auto 9rem 15rem"
                  backgroundColor="#4285F4"
                  borderRadius="15px"
                  width="11px"
                  height="11px"
                ></Box>
                </motion.div>

                <motion.div
                initial={{ y: 100 }}
                animate={{ x: -100 }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  repeatType: "reverse",
                }}
              >
                <Box
                  position="absolute"
                  inset="auto auto 17rem 18rem"
                  backgroundColor="#8F8F8F"
                  borderRadius="15px"
                  width="9px"
                  height="9px"
                ></Box>
                </motion.div>

                <motion.div
                initial={{ y: 100 }}
                animate={{ x: -100 }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  repeatType: "reverse",
                }}
              >
                <Box
                  position="absolute"
                  inset="auto auto 19em 14rem"
                  backgroundColor="#4285F4"
                  borderRadius="15px"
                  width="11px"
                  height="11px"
                ></Box>
                </motion.div>
                <motion.div
                initial={{ y: -100 }}
                animate={{ y: 100 }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  repeatType: "reverse",
                }}
              >
                <Box
                  position="absolute"
                  inset="auto auto 15rem 14rem"
                  backgroundColor="#34A853"
                  borderRadius="15px"
                  width="11px"
                  height="11px"
                ></Box>
                </motion.div>
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
                  We strive to create a space that fosters collaboration and
                  learning among tech enthusiasts of all levels. Whether you&apos;re a
                  beginner or an expert, our community welcomes you.
                </Text>
                <Flex
                  paddingTop={{ base: "27px", lg: "56px" }}
                  columnGap="25px"
                  cursor="pointer"
                >
                  {/* <a href="https://gdgibadan.slack.com/?redir=%2Farchives%2FD0465RU7TL1%2Fp1672870979253869" target='_blank'> */}
                    <Image src={Slack} />
                  {/* </a> */}
                  {/* <a href="https://twitter.com/gdgibadan?s=11&t=q2B3F1i2ySbJLEmnk5TtKQ" target="_blank"> */}
                    <Image src={twitter} />
                  {/* </a> */}
                  {/* <a href="https://www.linkedin.com/company/gdg-ibadan/" target="_blank"> */}
                    <Image src={linkedin} />
                  {/* </a> */}
                  {/* <a href="https://instagram.com/gdgibadan" target="_blank"> */}
                    <Image src={instagram} />
                  {/* </a>                   */}
                </Flex>
              </Box>

              <Box pt={{ base: "39px", lg: "0px" }} mt='8'>
                <Text
                  fontSize="16px"
                  fontWeight="500"
                  lineHeight="20px"
                  color="#E05D2F"
                  pb={{ base: "32px", lg: "24px" }}
                >
                  Quick Links
                </Text>
                <Box
                  fontSize="15px"
                  fontWeight="400"
                  lineHeight="20px"
                  // display="block"
                >
                  <Box as="li" pb={{ base: "16px", lg: "24px" }}>
                    <Link to="/about">About GDG Ibadan</Link>
                  </Box>

                  <Box pb={{ base: "16px", lg: "24px" }} as="li">
                    <Link to="/events">Upcoming Events</Link>
                  </Box>

                  <Box pb={{ base: "16px", lg: "24px" }} as="li">
                    <Link to="/blog">Blog</Link>
                  </Box>

                  <Box pb={{ base: "16px", lg: "24px" }} as="li">
                    <Link to='/jobs'>Job Board</Link>
                  </Box>
                </Box>
              </Box>

              <Box pt={{ base: "15px", lg: "0px" }} mt='8'>
                <Text
                  fontSize="15px"
                  fontWeight="500"
                  lineHeight="20px"
                  color="#E05D2F"
                >
                  Legal
                </Text>
                <Box
                  fontSize="15px"
                  fontWeight="400"
                  lineHeight="20px"
                  pt={{ base: "32px", lg: "24px" }}
                >
                  <Box as="li">
                    <Link href="">Terms/Privacy</Link>
                  </Box>
                </Box>
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
