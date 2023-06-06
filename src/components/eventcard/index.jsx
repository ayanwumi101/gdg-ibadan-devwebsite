"use client";
import {
  Box,
  ButtonGroup,
  Card,
  CardFooter,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import Buttons from "../buttons";
import Event from "../../assets/event.png";
import { DownloadIcon, LoveIcon } from "../icons";

const EventCard = () => {
  return (
    <>
      <Card
        borderRadius="12px"
        mb={{ base: "28.7px", lg: "0px" }}
        boxShadow="md"
      >
        <Image
          src={Event}
          alt=""
          style={{
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px",
            position: "relative",
          }}
        />
        <Flex
          position="absolute"
          columnGap={{ base: "13rem", lg: "9rem" }}
          alignItems="center"
          pl="17px"
          pt="23px"
          pr="23px"
        >
          <Buttons
            btnText={"Free"}
            background="#fff"
            color="#303030"
            // width="56px"
            // height="27px"
            fontSize="13px"
            lineHeight="19px"
            fontWeight="500"
            padding="4px 15px 4px 15px"
          />
          <Box display="flex" columnGap="15px">
            <Icon as={DownloadIcon}></Icon>
            <Icon as={LoveIcon}></Icon>
          </Box>
        </Flex>
        <Stack mt="26.83px" spacing="18px" pr="17px" textAlign="center">
          <Heading
            as="h2"
            fontSize="16px"
            lineHeight="20px"
            fontWeight="500"
            color="#E05D2F"
          >
            Celebrate International Women's Day 2023
          </Heading>
          <Text fontSize="14px" lineHeight="20px" fontWeight="400">
            March 1-April 31 | Virtual and in-person
          </Text>
        </Stack>
        <CardFooter>
          <ButtonGroup mt="41.26px">
            <Buttons btnText={"Register"} />
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
};

export default EventCard;
