"use client";
import { Box } from "@chakra-ui/react";
import { useState } from "react";
import RightNav from "./RightNav";

const StyledBurger = (props) => (
    <Box
        width="2rem"
        height="2rem"
        position="absolute"
        top="14px"
        right="20px"
        display={{ base: "flex", lg: "none" }}
        justifyContent="space-around"
        flexFlow="column nowrap"
        zIndex="20"
        onClick={props.onClick}
        cursor="pointer"
    >
        <Box
            width="2rem"
            height="0.25rem"
            backgroundColor={props.open ? "#E05D2F" : "#E05D2F"}
            borderRadius="10px"
            transformOrigin="1px"
            transition="all 0.3s linear"
            transform={props.open ? "rotate(45deg)" : "rotate(0)"}
        />
        <Box
            width="2rem"
            height="0.25rem"
            backgroundColor={props.open ? "#E05D2F" : "#E05D2F"}
            borderRadius="10px"
            transformOrigin="1px"
            transition="all 0.3s linear"
            transform={props.open ? "translateX(100%)" : "translateX(0)"}
            opacity={props.open ? 0 : 1}
        />
        <Box
            width="2rem"
            height="0.25rem"
            backgroundColor={props.open ? "#E05D2F" : "#E05D2F"}
            borderRadius="10px"
            transformOrigin="1px"
            transition="all 0.3s linear"
            transform={props.open ? "rotate(-45deg)" : "rotate(0)"}
        />
    </Box>
);

const Burger = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <StyledBurger open={open} onClick={() => setOpen(!open)} />
            <RightNav open={open} />
        </>
    );
};

export default Burger;
