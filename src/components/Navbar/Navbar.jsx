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
  Stack, Image, Button, Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure, VStack
} from "@chakra-ui/react";
import React, {useState} from "react";
import logo from "../../assets/gdg-logo.svg";
import aboutIcon from "../../assets/about-icon.svg";
import jobIcon from "../../assets/job-icon.svg";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link, useLocation } from "react-router-dom";
import {HamburgerIcon, CloseIcon} from '@chakra-ui/icons'

const Navbar = () => {
  const location = useLocation();
  const [openModal, setOpenModal] = useState(false);

  const showSideNav = () => {
    setOpenModal(true)
  }

  return (
    <>
    {openModal && <SideNav setOpenModal={setOpenModal} />}
    {location.pathname !== '/signin' && location.pathname !== '/signup' && location.pathname !== '/verification' && 
   ( <Box py="4" position='sticky' top='0' zIndex='2' bg='white' w='100%' borderBottom='1px solid lightgray'>
      <Box w="90%" mx="auto">
        <Flex alignItems="center" justifyContent="space-between">
          <Box>
            <Link to='/'>
              <Image src={logo} w='85%' />
            </Link>
          </Box>

          <Box display={{base: 'none', md: 'none', lg: 'block'}}>
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
                      <Flex alignItems='center' gap={2}>
                          <Image src={aboutIcon} />
                          <Text>About GDG Ibadan</Text>
                      </Flex>
                    </MenuItem>
                  </Link>

                  <Link to='/jobs'>
                  <MenuItem as='a' href='#' fontSize={14}>
                      <Flex alignItems='center' gap={2}>
                        <Image src={jobIcon} />
                        <Text>Job Board</Text>
                      </Flex>
                  </MenuItem>
                  </Link>

                </MenuList>
              </Menu>
              <Link to='/events'><Text fontWeight="medium" fontSize={15}>Events</Text></Link>
              <Link to='/blog'><Text fontWeight="medium" fontSize={15}>Blog</Text></Link>
            </Stack>
          </Box>

          <Box display={{base: 'none', md: 'none', lg: 'block'}}>
            {location.pathname === "/" ? 
            (
              <Link to='/signin'>
                <Button bg='#E05D2F' w='150px' h='43px' color='white' boxShadow='md'>Register </Button>
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

          <Box display={{base: 'block', md: 'block', lg: 'none'}} onClick={showSideNav}>
              <HamburgerIcon color='#E05D2F' fontWeight='extrabold' fontSize={35} />
          </Box>

        </Flex>
      </Box>
    </Box>)}
    </>
  );
};

export default Navbar;




export const SideNav = ({setOpenModal}) => {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true })
  const btnRef = React.useRef();
  return (
    <Drawer
      isOpen={isOpen}
      placement='right'
      onClose={onClose}
      finalFocusRef={btnRef}
      size='lg'
      closeOnOverlayClick={false}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader mt='1' mb='8'>
            <Stack direction='row' justifyContent='space-between'>
              <Image src={logo} />
              <CloseIcon onClick={() => setOpenModal(false)} color='#E05D2F' fontWeight='extrabold' fontSize={20} />
            </Stack>
        </DrawerHeader>

        <DrawerBody>
            <VStack spacing={7}>
              <Menu isLazy color="#1E3747">
                <MenuButton fontWeight="medium" fontSize={15}>
                  GDG Ibadan <ChevronDownIcon />
                </MenuButton>
                <MenuList>
                <Link to='/about' onClick={() => setOpenModal(false)}>
                  <MenuItem as="a" href="#" fontSize={14}>
                    <Flex alignItems='center' gap={2}>
                      <Image src={aboutIcon} />
                      <Text>About GDG Ibadan</Text>
                    </Flex>
                  </MenuItem>
                </Link>

                <Link to='/jobs' onClick={() => setOpenModal(false)}>
                  <MenuItem as='a' href='#' fontSize={14}>
                    <Flex alignItems='center' gap={2}>
                      <Image src={jobIcon} />
                      <Text>Job Board</Text>
                    </Flex>
                  </MenuItem>
                </Link>

                </MenuList>
              </Menu>
              <Link to='/events'><Text fontWeight="medium" fontSize={15} onClick={() => setOpenModal(false)}>Events</Text></Link>
              <Link to='/blog'><Text fontWeight="medium" fontSize={15} onClick={() => setOpenModal(false)}>Blog</Text></Link>
              <Link to='/signin'>
                <Button bg='#E05D2F' w='150px' h='45px' color='white' boxShadow='md' onClick={() => setOpenModal(false)}>Register </Button>
              </Link>
            </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
