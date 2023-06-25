"use client";
import { Box, Flex, Heading, Image, Button } from "@chakra-ui/react";
// import React from "react";
import Lead from "../../assets/lead-img.png";
import CoOrganiser from "../../assets/co-organiser.png";
import Organiser from "../../assets/orgaiser.png";
import Secretary from "../../assets/secretary.png";
import { Link } from "react-router-dom";
// import Buttons from "../buttons";
// import Rectangle from "../../assets/Rectangle 9789.png"

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
        //   fontFamily="Recoleta, sans-serif"
        >
          Let’s Meet the Organisers
        </Heading>
        <Flex
          justifyContent="center"
          columnGap="40px"
          pl={{ base: "68px", lg: "180px" }}
          pr={{ base: "67px", lg: "181px" }}
          pt={{ base: "28px", lg: "65px" }}
          display={{ base: "block", lg: "flex" }}
          alignItems="baseline"
        >
          <Box position="relative">
            <Box position="relative" right="7px" top="0rem">
              <Image src={Lead} alt={""} />
            </Box>

            <Box position="absolute" bottom={{ base: "-12rem", lg: "-9rem" }}>
              <Image
                src={Rec}
                alt={""}
                style={{
                  position: "relative",
                  top: "-7.3rem",
                  right: "4.2rem",
                }}
              />
            </Box>
            <Box
              position="relative"
              bottom={{ base: "15px", lg: "34px" }}
              right={{ base: "98px", lg: "70px" }}
            >
              <Heading
                color="#E05D2F"
                fontSize="16px"
                lineHeight="24px"
                fontWeight="500"
              >
                Lead
              </Heading>
              <Box
                as="p"
                fontSize="14px"
                lineHeight="20px"
                fontWeight="400"
                color="#1E3747"
              >
                Adeleke Oshin
              </Box>
            </Box>
          </Box>

          <Box pt="14px" position="relative">
            <Box position="relative" right="7px" top="0rem">
              <Image src={CoOrganiser} alt={""} />
            </Box>
            <Box position="absolute" bottom={{ base: "-12rem", lg: "-9rem" }}>
              <Image
                src={Rec}
                alt={""}
                style={{
                  position: "relative",
                  top: "-7.3rem",
                  right: "4.2rem",
                }}
              />
            </Box>
            <Box
              position="relative"
              bottom={{ base: "15px", lg: "34px" }}
              right={{ base: "85px", lg: "70px" }}
            >
              <Heading
                color="#E05D2F"
                fontSize="16px"
                lineHeight="24px"
                fontWeight="500"
              >
                Co-Organiser
              </Heading>
              <Box
                as="p"
                fontSize="14px"
                lineHeight="20px"
                fontWeight="400"
                color="#1E3747"
              >
                Peters James
              </Box>
            </Box>
          </Box>

          <Box pt="14px" position="relative">
            <Box position="relative" right="7px" top="0rem">
              <Image src={Organiser} alt={""} />
            </Box>
            <Box position="absolute" bottom={{ base: "-12rem", lg: "-9rem" }}>
              <Image
                src={Rec}
                alt={""}
                style={{
                  position: "relative",
                  top: "-7.3rem",
                  right: "4.2rem",
                }}
              />
            </Box>
            <Box
              position="relative"
              bottom={{ base: "15px", lg: "34px" }}
              right={{ base: "85px", lg: "70px" }}
            >
              <Heading
                color="#E05D2F"
                fontSize="16px"
                lineHeight="24px"
                fontWeight="500"
              >
                Organiser
              </Heading>
              <Box
                as="p"
                fontSize="14px"
                lineHeight="20px"
                fontWeight="400"
                color="#1E3747"
              >
                Okoro John
              </Box>
            </Box>
          </Box>

          <Box pt="14px" position="relative">
            <Box position="relative" right="7px" top="0rem">
              <Image src={Secretary} alt={""} />
            </Box>
            <Box position="absolute" bottom={{ base: "-12rem", lg: "-9rem" }}>
              <Image
                src={Rec}
                alt={""}
                style={{
                  position: "relative",
                  top: "-7.3rem",
                  right: "4.2rem",
                }}
              />
            </Box>
            <Box
              position="relative"
              bottom={{ base: "15px", lg: "34px" }}
              right={{ base: "85px", lg: "70px" }}
            >
              <Heading
                color="#E05D2F"
                fontSize="16px"
                lineHeight="24px"
                fontWeight="500"
              >
                Secretary
              </Heading>
              <Box
                as="p"
                fontSize="14px"
                lineHeight="20px"
                fontWeight="400"
                color="#1E3747"
              >
                Okafor Nathaniel
              </Box>
            </Box>
          </Box>
        </Flex>
        <Box
          paddingTop={{ base: "60px", lg: "55px" }}
          paddingBottom={{ base: "29px", lg: "76px" }}
        >
          <Link to='/contact'><Button bg='#E05D2F' w='150px' h='45px' color='white' boxShadow='md'>Contact Us</Button></Link>
        </Box>
      </Box>
    </>
  );
};

export default Organisers;
