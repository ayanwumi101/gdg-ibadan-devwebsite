"use client";
import React from "react";
import Navbar from "../../components/navbar";
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
  Text,
} from "@chakra-ui/react";
import EventImg from "../../assets/about (1).png";
import Image from "next/image";
import Group from "../../assets/Group 60.png";
import Buttons from "../../components/buttons";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { BeatLoader } from "react-spinners";
import Footer from "../../components/footer";

const Event = () => {
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
        <Box height={{ base: "732px", lg: "auto" }}>
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
        pt={{ base: "58px", lg: "98px" }}
        pb={{ base: "20px", lg: "90px" }}
        textAlign="center"
        fontSize={{ base: "32px", lg: "45px" }}
        fontWeight="500"
        lineHeight={{ base: "40px", lg: "57px" }}
      >
        Upcoming Events
      </Text>
      <Box
        display={{ base: "block", lg: "flex" }}
        pl={{ base: "21px", lg: "118px" }}
        pr={{ base: "19px", lg: "135px" }}
        pb={{ base: "58px", lg: "90px" }}
        columnGap={{ lg: "48px" }}
      >
        <Flex
          columnGap={{ base: "20px", lg: "25px" }}
          fontSize="16px"
          lineHeight="24px"
          fontWeight="400"
        >
          <Input placeholder="Date" />
          <Input placeholder="Keyword" />
        </Flex>
        <Flex
          columnGap={{ base: "45px", lg: "179px" }}
          fontSize="16px"
          lineHeight="24px"
          fontWeight="500"
        >
          <Buttons btnText={"Find Events"} />
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Upcoming Events
            </MenuButton>
            <MenuList>
              <MenuItem as={Link} href="/pastevent">
                Past Events
              </MenuItem>
              <MenuItem as={Link} href="">
                Future Events
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Box>

      <Flex
        pl={{ base: "19px", lg: "116px" }}
        pr={{ base: "19.08px", lg: "133.8px" }}
        columnGap={{ lg: "32px" }}
        pb={{ base: "0px", lg: "32.9px" }}
        display={{ base: "block", lg: "flex" }}
      >
        <EventCard />
        <EventCard />
        <EventCard />
      </Flex>

      <Flex
        pl={{ base: "19px", lg: "116px" }}
        pr={{ base: "19.08px", lg: "133.8px" }}
        columnGap={{ lg: "32px" }}
        display={{ base: "block", lg: "flex" }}
      >
        <EventCard />
        <EventCard />
        <EventCard />
      </Flex>
      <Box
        textAlign="center"
        pt={{ base: "0px", lg: "60px" }}
        pb={{ base: "0px", lg: "96px" }}
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
      <Footer />
    </>
  );
};

export default Event;
