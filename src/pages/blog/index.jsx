"use client";
import React from "react";
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
  Card, Image
} from "@chakra-ui/react";
import BlogImage from "../../assets/about (4).png";
import MobileImage from "../../assets/about (5).png";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import Testing from "../../components/testing";
import Design1 from "../../assets/Frame 1000004323.png";
import Design2 from "../../assets/Frame 1000004323 (1).png";

const Blog = () => {
  return (
    <>
      <Box
        maxW="100%"
        height="auto"
        mt='7'
      >
        <Box>
          <Image
            src={BlogImage}
            alt={""}
            objectFit='cover'
            borderRadius='24px'
            w='100%'
            h={{base: '550px', lg: '100%'}}
          />
        </Box>
      </Box>

      <Box w='90%' mx='auto' my='16'>
        <Flex alignItems='center' justifyContent='space-between' flexWrap='wrap'>
          <Heading mb='4'>Latest News</Heading>
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

      <Box
        display='flex'
        flexDirection='row-reverse'
        alignItems={{base: 'center', lg: 'flex-start'}}
        justifyContent={{base: 'center', lg: 'space-between'}}
        w='90%'
        mx='auto'
        flex-flexWrap='wrap'
        my='8'
      >
        <Box>
          <Box>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="gray.300" />}
              />
              <Input placeholder="Search..." borderRadius="24px" />
            </InputGroup>

            <Heading fontSize={22} fontWeight='medium' my='8'>
              Recent Posts
            </Heading>

            <Box
              display="flex"
              overflow="hidden"
              columnGap="30px"
              border="none"
              pb="42px"
            >
              <Image objectFit="cover" w='100px' h='100px' src={Design1} alt={""} />

              <Box alignSelf="center">
                <Box>
                  <Text
                    fontSize="15px"
                    lineHeight="24px"
                    fontWeight="400"
                    color="#6A7C88"
                    mb='3'
                  >
                    Design . Jan 2, 2023
                  </Text>

                  <Heading
                    fontSize="15px"
                    lineHeight="24px"
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
              <Image objectFit="cover" w='100px' h='100px' src={Design2} alt={""} />

              <Box alignSelf="center">
                <Box>
                  <Text
                    fontSize="15px"
                    lineHeight="24px"
                    fontWeight="400"
                    color="#6A7C88"
                    mb='3'
                  >
                    Design . Jan 2, 2023
                  </Text>

                  <Heading
                    fontSize="15px"
                    lineHeight="24px"
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

        <Box>
         
        </Box>
       
      </Box>
    </>
  );
};

export default Blog;
