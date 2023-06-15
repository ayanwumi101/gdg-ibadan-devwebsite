"use client";
import React from "react";
import EventCard from "../../components/eventcard";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text, Image
} from "@chakra-ui/react";
import EventImg from "../../assets/aboutImg.png";
import Group from "../../assets/groups.png";
import Buttons from "../../components/buttons";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { BeatLoader } from "react-spinners";


const Event = () => {
  return (
    <>
      <Box
        w="90%"
        height="auto"
        mt='8'
        mx='auto'
        position="relative"
      >
        <Box height={{ base: "732px", lg: '100%' }}>
          <Image
            src={EventImg}
            alt={""}
            style={{ borderRadius: "24px", objectFit: "cover", height: "100%" }}
          />
        </Box>
      </Box>

      <Box position="absolute" top="30rem" bottom="0rem">
        <Image src={Group} alt={""} />
      </Box>
      <Text
        my='10'
        textAlign="center"
        fontSize={{ base: "32px", lg: "45px" }}
        fontWeight="500"
        lineHeight={{ base: "40px", lg: "57px" }}
      >
        Upcoming Events
      </Text>
      <Box
        w='80%'
        mx='auto'
        display='flex'
        justifyContent='space-between'
        mb='12'
        flexWrap='wrap'
      >
        <Flex
          fontSize="16px"
          alignItems='center'
          fontWeight="400"
          w={{ base: '100%', lg: '50%' }}
          gap={6}
          mb='5'
          flexWrap={{ base: 'wrap', lg: 'nowrap' }}
        >
          <Input placeholder="Date" w={{ base: '100%', lg: '200px' }} />
          <Input placeholder="Keyword" w={{ base: '100%', lg: '200px' }} />
          <Button bg='#E05D2F' w={{ base: '100%', lg: '200px' }} h='43px' color='white' boxShadow='md'>Find Event</Button>
        </Flex>
        <Flex
          columnGap={{ base: "45px", lg: "179px" }}
          fontSize="16px"
          lineHeight="24px"
          fontWeight="500"
        >

          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} fontSize={15}>
              Upcoming Events
            </MenuButton>
            <MenuList>
              <MenuItem as={Link} href="https://gdg.community.dev/gdg-ibadan/#past-events" target="_blank">
                Past Events
              </MenuItem>
              <MenuItem as={Link} href="https://gdg.community.dev/gdg-ibadan/#upcoming-events" target='_blank'>
                Future Events
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Box>

      <Flex
        w='80%'
        mx='auto'
        justifyContent={{ base: 'center', lg: 'space-between' }}
        flexWrap='wrap'
        alignItems='center'
      >
        <EventCard />
        <EventCard />
        <EventCard />
      </Flex>

      <Flex
        w='80%'
        mx='auto'
        justifyContent={{ base: 'center', lg: 'space-between' }}
        flexWrap='wrap'
        alignItems='center'
      >
        <EventCard />
        <EventCard />
        <EventCard />
      </Flex>
      <Box
        textAlign="center"
        pt={{ base: "0px", lg: "60px" }}
        // pb={{ base: "0px", lg: "96px" }}
        display={{ base: "none", lg: "block" }}
        color="#E05D2F"
      >
        <Text
          fontSize="16px"
          fontWeight="500"
          lineHeight="20px"
          pb={{ base: "0px", lg: "14px" }}
        >
          Load More
        </Text>
        <Button
          isLoading
          colorScheme="white"
          spinner={<BeatLoader size={8} color="#E05D2F" />}
        >
          Click me
        </Button>
      </Box>
    </>
  );
};

export default Event;
