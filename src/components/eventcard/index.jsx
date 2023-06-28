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
  Text, Image, Button
} from "@chakra-ui/react";
import React from "react";
import Buttons from "../buttons";
import Event from "../../assets/event.png";
import loveIcon from "../../assets/loveIcon.svg";
import downloadIcon from "../../assets/downloadIcon.svg";
import { Link } from "react-router-dom";

const EventCard = ({id}) => {
  return (
    <>
      <Card
        borderRadius="12px"
        mb='8'
        boxShadow="lg"
        w='315px'
        h='400px'id={id}
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
        
        <Box position='absolute' top='20px' mx='3' w='93%'>
          <Stack justifyContent='space-between' direction='row'>
            <Text bg='white' w='56px' textAlign='center' h='27px' borderRadius={10} fontSize={14} pt='0.5' boxShadow='md' fontWeight='medium' color='#303030'>Free</Text>
            <Box display='flex' alignItems='center' gap={2}>
              <Image src={downloadIcon} />
              <Image src={loveIcon} />
            </Box>
          </Stack>
        </Box>
        
        <Stack mt='2' direction='column' spacing={4} p='3'>
          <Heading
            as="h2"
            fontSize="15px"
            lineHeight="20px"
            fontWeight="500"
            color="#E05D2F"
          >
            Celebrate International Women's Day 2023
          </Heading>
          <Text fontSize="14px" lineHeight="20px" fontWeight="400" color='#1E3747'>
            March 1-April 31 | Virtual and in-person
          </Text>
          <Link to={`/events/${id}`}>
            <Button bg='#E05D2F' w='100px' h={{ base: '35px', lg: '40px' }} fontWeight='medium' fontSize={14} color='white' boxShadow='md'>Register</Button>
          </Link>
        </Stack>
      </Card>
    </>
  );
};

export default EventCard;
