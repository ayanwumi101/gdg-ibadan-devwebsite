"use client";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Icon,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Line from "../../assets/Pattern 2.png";
import Calendar from "../../assets/image 2.png";
import Navbar from "../../components/navbar";
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
import Footer from "../../components/footer";

const DareEvent = () => {
  return (
    <>
      <Navbar />
      <Box
        bgColor="#1E3747"
        mt={{ base: "5.1rem", lg: "4.5rem" }}
        ml={{ base: "20px", lg: "50px" }}
        mr={{ base: "20px", lg: "50px" }}
        borderRadius="24px"
        color="#fff"
        overflow="hidden"
        position="relative"
        height={{ base: "50rem", lg: "42rem" }}
      >
        <Box pt={{ base: "4rem" }}>
          <Image src={Line} alt={""} />
        </Box>

        <Box
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
        </Box>

        <Box
          textAlign="center"
          position="absolute"
          top={{ base: "16rem", lg: "2rem" }}
          right="0"
          left={{ base: "0px", lg: "16rem" }}
        >
          <Image src={Calendar} alt={""} />
        </Box>
      </Box>

      <Box
        pt={{ base: "91px", lg: "70px" }}
        ml={{ base: "19px", lg: "112px" }}
        mr={{ base: "20px", lg: "134px" }}
      >
        <Heading
          as="h1"
          fontWeight="500"
          fontSize="57px"
          lineHeight="64px"
          color="#E05D2F"
        >
          Dare To Be
        </Heading>
        <Box
          display={{ base: "block", lg: "flex" }}
          flexDirection="row-reverse"
          columnGap="92px"
        >
          <Box pt={{ base: "60px", lg: "0px" }}>
            <Button
              leftIcon={<DangerIcon />}
              color="#34A853"
              background="#E8F5E9"
              borderRadius="24px"
            >
              Ticket closing soon
            </Button>
            <Box
              w="345px"
              borderRadius="4px"
              mt="18px"
              h="180px"
              bg="#fff"
              boxShadow="0px 15px 60px rgba(30, 55, 71, 0.1)"
            >
              <Box pt="35px" pb="34px" textAlign="center">
                <Text
                  pb="39px"
                  fontWeight="400"
                  fontSize="22px"
                  lineHeight="28px"
                >
                  It’s free for everyone
                </Text>
                <Buttons btnText={"Register Now"} />
              </Box>
            </Box>
          </Box>

          <Box pt={{ base: "60px", lg: "63px" }}>
            <Heading as="h2" pb={{ base: "20px", lg: "20px" }}>
              Date and time
            </Heading>
            <Text>
              Fri, Jun 16, 2023, 9:00 AM – Sat, Jun 17, 2023, 4:00 PM WAT
            </Text>
            <Box pt={{ base: "82px", lg: "80px" }}>
              <Heading as="h2" pb={{ base: "20px", lg: "20px" }}>
                Date and time
              </Heading>
              <Text maxWidth="100%" width={{ base: "320px", lg: "580px" }}>
                International Women’s Day (IWD) is Women Techmakers’ largest
                annual event campaign where Ambassador host events all around
                the world during the months of March and April in celebration of
                this moment. From big summits to smaller, intimate gatherings,
                IWD is a time to host events that create connections, educate
                and inspire your tech community. IWD is also a way in which we
                support our mission of building a world where all women thrive
                in tech.
              </Text>
            </Box>
            <Box pt={{ base: "90px", lg: "44px" }}>
              <Heading as="h2" pb={{ base: "20px", lg: "20px" }}>
                Tags
              </Heading>
              <Flex columnGap="14px">
                <Button
                  color="#8F8F8F"
                  background="#F1F1F1"
                  borderRadius="12px"
                >
                  IbadanEvents
                </Button>
                <Button
                  color="#8F8F8F"
                  background="#F1F1F1"
                  borderRadius="12px"
                >
                  IWD
                </Button>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box pt={{ base: "93px", lg: "140px" }}>
        <Sponsors />
        <Box
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
        </Box>
      </Box>
      <Organisers />
      <Footer />
    </>
  );
};

export default DareEvent;
