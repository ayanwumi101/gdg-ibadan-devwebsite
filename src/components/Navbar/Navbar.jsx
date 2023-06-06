import {
  Heading,
  Box,
  Text,
  Flex,
  Avatar,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack, Image, Button
} from "@chakra-ui/react";
import React from "react";
import logo from "../../assets/gdg-logo.svg";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <>
    {location.pathname !== '/signin' && location.pathname !== '/signup' && 
   ( <Box py="3" position='sticky' top='0' zIndex='2' bg='white'>
      <Box w="100%" mx="auto">
        <Flex alignItems="center" justifyContent="space-between">
          <Box>
            <Image src={logo} />
          </Box>

          <Box>
            <Stack
              direction="row"
              spacing={7}
              fontWeight="medium"
              color="#1E3747"
            >
              <Menu isLazy color="#1E3747">
                <MenuButton fontWeight="medium" fontSize={15}>
                  GDG Ibadan <ChevronDownIcon />
                </MenuButton>
                <MenuList>
                  <Link to='/about'>
                    <MenuItem as="a" href="#" fontSize={14}>
                      About GDG Ibadan
                    </MenuItem></Link>
                  <MenuItem>Job Board</MenuItem>
                </MenuList>
              </Menu>
              <Text fontWeight="medium" fontSize={15}>Events</Text>
              <Text fontWeight="medium" fontSize={15}>Blog</Text>
            </Stack>
          </Box>

          <Box>
            {location.pathname === "/" ? 
            (
              <Link to='/signin'>
                <Button bg='#E05D2F' w='150px' h='45px' color='white' boxShadow='md'>Register </Button>
              </Link>
            ) 
            :
            <Flex alignItems="center" gap={2}>
              <Avatar size="sm" name="Oluwafolayemi Anifowose" fontSize={15} />
              <Menu isLazy color="#1E3747">
                <MenuButton color="#1E3747" fontWeight="medium" fontSize={15}>
                  Oluwafolayemi Anifowose <ChevronDownIcon />
                </MenuButton>
                <MenuList fontSize={15}>
                  <MenuItem>Edit Profile</MenuItem>
                  <MenuItem>Favourites</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
              <Text></Text>
            </Flex>}
          </Box>
        </Flex>
      </Box>
    </Box>)}
    </>
  );
};

export default Navbar;
