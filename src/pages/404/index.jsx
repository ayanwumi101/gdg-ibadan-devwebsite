"use client";
import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import NFImage from "../../assets/404.png";


const NotFoundPage = () => {
  return (
    <>
      <Box
        maxW="100%"
        height="auto"
        mt={{ base: "5.1rem", lg: "8.5rem" }}
        // ml={{ base: "20px", lg: "50px" }}
        // mr={{ base: "20px", lg: "50px" }}
        position="relative"
      >
        <Box textAlign="center">
          <Box
            pl={{ base: "0px", lg: "406px" }}
            pr={{ base: "0px", lg: "407px" }}
            pb="36px"
          >
            <Image src={NFImage} alt={""} />
          </Box>
          <Text
            color="#E05D2F"
            fontSize="57px"
            lineHeight="64px"
            fontWeight="500"
            pb="20px"
          >
            Oops! Page not found
          </Text>
          <Text
            color="#6A7C88"
            fontSize="22px"
            lineHeight="28px"
            fontWeight="400"
            pl={{ base: "0px", lg: "376px" }}
            pr={{ base: "0px", lg: "377px" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            congue pretium faucibus leo nisl nulla pharetra nullam.
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default NotFoundPage;
