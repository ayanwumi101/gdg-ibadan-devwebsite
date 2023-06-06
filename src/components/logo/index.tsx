import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import GDGLogo from "../../assets/GDG-logo.png";

const Logo = () => {
  return (
    <>
      <Flex columnGap="8.03px" alignItems="center">
        <Image
          src={GDGLogo}
          alt=""
          style={{
            width: "39.7px",
            height: "18.29px",
            // "@media (min-width: 768px)": {
            //   width: "auto",
            //   height: "auto",
            // },
          }}
        />
        <Box
          fontSize={{ base: "12.52px", lg: "19.12px" }}
          lineHeight={{ base: "15.92px", lg: "24.13px" }}
          fontWeight="400"
        >
          GDG Ibadan
        </Box>
      </Flex>
    </>
  );
};

export default Logo;
