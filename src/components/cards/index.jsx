"use client";  
import React from "react";
import { Box, Card, Heading, Text, Image } from "@chakra-ui/react";
import Access from "../../assets/access.png";

export default function Cards({ hText, paragraph, background, color, mb, hoverBg }) {
  return (
    <>
      <Card
        width={{ base: "100%px", md: '250px', lg: "26                         0px" }}
        height={{ base: '300px', lg: "277px" }}
        background={background}
        color="#fff"
        borderRadius="32px"
        fontFamily="'Google Sans Display', sans-serif"
        boxShadow="md"
        _hover={{ bg: hoverBg, color: '#303030'}}
      >
        <Box
        p='6'
        >
          <Image
            src={Access}
            alt={""}
            // bg={hoverBg}
            _hover
            style={{
              paddingBottom: "16px",
            }}
          />
          <Heading
            as="h1"
            fontSize="16px"
            fontWeight="500"
            lineHeight="24px"
            pb="16px"
          >
            {hText}
          </Heading>
          <Text
            as="p"
            fontSize={{base: '19px', lg: '16px'}}
            fontWeight="400"
            lineHeight="27px"
            fontFamily="'Google Sans Display', sans-serif"
          >
            {paragraph}
          </Text>
        </Box>
      </Card>
    </>
  );
}
