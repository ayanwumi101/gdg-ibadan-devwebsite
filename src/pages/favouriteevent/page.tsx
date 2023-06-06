"use client";
import React from "react";
import Navbar from "../../components/navbar";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import EventCard from "../../components/eventcard";
import Footer from "../../components/footer";

const FavouriteEvent = () => {
  return (
    <>
      <Navbar />
      <Box mt={{ base: "5.1rem", lg: "4.5rem" }}>
        <Heading
          pb="48px"
          pl={{ base: "19px", lg: "116px" }}
          fontSize="32px"
          fontWeight="500"
          lineHeight="40px"
        >
          Favourites Events
        </Heading>
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
      </Box>
      <Footer />
    </>
  );
};

export default FavouriteEvent;
