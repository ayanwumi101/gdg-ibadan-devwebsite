import React from "react";
import { Button, Heading, Box } from "@chakra-ui/react";
import Hero from "./subsections/Hero";
import Mission from "./subsections/Mission";
import Value from "./subsections/Value";

const About = () => {
  return (
    <Box w="100%" mx="auto" mt="6" mb="16">
      <Box w="100%" bg="#1E3747" minH="500px" borderRadius="24px">
        <Hero />
      </Box>
      <Mission />
      <Value />
    </Box>
  );
};

export default About;
