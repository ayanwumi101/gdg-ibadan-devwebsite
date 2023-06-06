"use client";
import { Flex } from "@chakra-ui/react";
import React from "react";
import Logo from "../logo";
import Burger from "./Burger";

const Navbar = () => {
  return (
    <Flex
      as="nav"
      alignItems="center"
      justifyContent="space-between"
      bg="#fff"
      pl={{ base: "20px", lg: "128px" }}
      pr={{ base: "22px", lg: "138px" }}
      pt={{ base: "20px", lg: "21px" }}
      pb={{ base: "20px", lg: "21px" }}
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="1000"
    >
      <Logo />

      <Burger />
    </Flex>
  );
};

export default Navbar;
