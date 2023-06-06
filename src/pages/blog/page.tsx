"use client";
import React from "react";
import Navbar from "../../components/navbar";
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
  Card,
} from "@chakra-ui/react";
import BlogImage from "../../assets/about (4).png";
import Image from "next/image";
import MobileImage from "../../assets/about (5).png";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import Testing from "../../components/testing";
import Footer from "../../components/footer";
import Design1 from "../../assets/Frame 1000004323.png";
import Design2 from "../../assets/Frame 1000004323 (1).png";

const Blog = () => {
  return (
    <>
      <Navbar />
      <Box
        maxW="100%"
        height="auto"
        mt={{ base: "5.1rem", lg: "4.5rem" }}
        ml={{ base: "20px", lg: "50px" }}
        mr={{ base: "20px", lg: "50px" }}
        position="relative"
      >
        <Box display={{ base: "none", lg: "block" }}>
          <Image
            src={BlogImage}
            alt={""}
            style={{
              objectFit: "cover",
              height: "100%",
            }}
          />
        </Box>

        <Box
          height={{ base: "732px", lg: "auto" }}
          display={{ base: "block", lg: "none" }}
        >
          <Image
            src={MobileImage}
            alt={""}
            style={{
              height: "100%",
              width: "100%",
              maxWidth: "100%",
            }}
          />
        </Box>
      </Box>

      <Box pt="76px" pl="121px" display={{ base: "none", lg: "block" }}>
        <Flex columnGap="243px">
          <Heading>Latest News</Heading>
          <Box
            display="flex"
            columnGap="20px"
            alignItems="center"
            color="#213C4E"
          >
            <ChevronLeftIcon />
            <Text>Business</Text>
            <Text>Design</Text>
            <Text>Development</Text>
            <Text>Tech</Text>
            <Text>Development</Text>
            <Text>Branding</Text>
            <ChevronRightIcon />
          </Box>
        </Flex>
      </Box>

      <Box
        display={{ base: "block", lg: "flex" }}
        pl={{ base: "20px", lg: "120px" }}
        pr={{ base: "28px", lg: "132px" }}
        columnGap="75px"
        flexDirection="row-reverse"
      >
        <Box pt={{ base: "42px", lg: "47px" }}>
          <Box
            pl={{ base: "", lg: "40px" }}
            pt={{ base: "", lg: "40px" }}
            pr={{ base: "", lg: "40px" }}
          >
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="gray.300" />}
              />
              <Input placeholder="Search..." borderRadius="24px" />
            </InputGroup>

            <Heading pt={{ base: "32px", lg: "32px" }} pb="32px">
              Recent Posts
            </Heading>
            <Box
              display="flex"
              overflow="hidden"
              columnGap="30px"
              border="none"
              pb="42px"
            >
              <Image objectFit="cover" src={Design1} alt={""} />

              <Box alignSelf="center">
                <Box>
                  <Text
                    fontSize="16px"
                    lineHeight="24px"
                    fontWeight="400"
                    color="#6A7C88"
                    pb="12px"
                  >
                    Design . Jan 2, 2023
                  </Text>

                  <Heading
                    fontSize="16px"
                    lineHeight="20px"
                    fontWeight="500"
                    width="154px"
                  >
                    Inspiration for Content Creating
                  </Heading>
                </Box>
              </Box>
            </Box>

            <Box
              display="flex"
              overflow="hidden"
              columnGap="30px"
              border="none"
              pb="52px"
            >
              <Image objectFit="cover" src={Design2} alt={""} />

              <Box alignSelf="center">
                <Box>
                  <Text
                    fontSize="16px"
                    lineHeight="24px"
                    fontWeight="400"
                    color="#6A7C88"
                    pb="12px"
                  >
                    Design . Jan 2, 2023
                  </Text>

                  <Heading
                    fontSize="16px"
                    lineHeight="20px"
                    fontWeight="500"
                    width="154px"
                  >
                    Inspiration for Content Creating
                  </Heading>
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
                <Button
                  color="#4D6371"
                  backgroundColor="#fff"
                  border=" 1px solid #BAC3C8"
                  borderRadius="24px"
                >
                  Development
                </Button>
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
                <Button
                  color="#4D6371"
                  backgroundColor="#fff"
                  border=" 1px solid #BAC3C8"
                  borderRadius="24px"
                >
                  Startup
                </Button>
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
                <Button
                  color="#4D6371"
                  backgroundColor="#fff"
                  border=" 1px solid #BAC3C8"
                  borderRadius="24px"
                >
                  Brand
                </Button>
              </Flex>
            </Box>
          </Box>
        </Box>

        <Box pt="46px" display={{ base: "block", lg: "none" }}>
          <Box display="block">
            <Heading pb="20px">Latest News</Heading>
            <Box
              display="flex"
              columnGap="20px"
              alignItems="center"
              color="#213C4E"
            >
              <ChevronLeftIcon />
              <Text>Business</Text>
              <Text>Design</Text>
              <Text>Branding</Text>
              <ChevronRightIcon />
            </Box>
          </Box>
        </Box>

        <Box>
          <Box pt={{ base: "48px", lg: "71px" }}>
            {" "}
            <Testing />
          </Box>
          <Box pt="64px">
            {" "}
            <Testing />
          </Box>
          <Box pt="64px">
            {" "}
            <Testing />
          </Box>
          <Box pt="64px">
            {" "}
            <Testing />
          </Box>
          <Box pt="64px">
            {" "}
            <Testing />
          </Box>
          <Box pt="64px">
            {" "}
            <Testing />
          </Box>
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default Blog;
