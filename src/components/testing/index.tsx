"use client";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import BlueImg from "../../assets/Image.png";

const Testing = () => {
  return (
    <>
      <Flex
        columnGap="32px"
        display={{ base: "block", lg: "flex" }}
        // pl={{ base: "20px", lg: "0px" }}
        pr={{ base: "28px", lg: "0px" }}
      >
        <Box>
          <Button color="#E05D2F" backgroundColor="#FCEFEA">
            QA Testing
          </Button>
          <Heading
            as="h3"
            fontSize="22px"
            fontWeight="500"
            lineHeight="28px"
            width={{ base: "380px", lg: "451pz" }}
            pb="14px"
            pt="14px"
          >
            The Best Productivity Apps for 2021 - Updated List
          </Heading>
          <Box border="1px" borderStyle="dotted" width="100%" height="1px" />
          <Flex alignItems="center" columnGap="5px" pt="14px">
            <Text fontSize="16px" fontWeight="400" lineHeight="24px">
              May 02, 2022{" "}
            </Text>
            <Box
              backgroundColor="#E05D2F"
              borderRadius="15px"
              width="6.79px"
              height="6.79px"
            ></Box>
            <Text fontSize="16px" fontWeight="400" lineHeight="24px">
              Nattasha
            </Text>
          </Flex>
        </Box>
        <Box pt={{ base: "32px", lg: "0px" }}>
          <Image src={BlueImg} alt={""} style={{ maxWidth: "100%" }} />
        </Box>
      </Flex>
    </>
  );
};

export default Testing;
