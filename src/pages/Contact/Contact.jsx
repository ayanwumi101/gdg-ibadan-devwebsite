import { Box, Text, Heading, Stack, Image, FormControl, FormLabel, Input, Button, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'
import LoginImage from '../../assets/login-image.png'

const Contact = () => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    return (
        <Box w='100%' my='10' px={{ base: 5 }}>
                <Box maxW='450px' mx='auto' textAlign='center' mb='14'>
                    <Heading>Contact Us</Heading>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda vero quod, sapiente enim obcaecati 
                        saepe delectus.
                    </Text>
                </Box>
                <Stack direction={{ base: 'column', lg: 'row' }} justifyContent='center' spacing={10} alignItems='center' w='90%' mx='auto'>
                    <Box w='500px' display={{ base: 'none', md: 'block', lg: 'block' }}>
                        <Image src={LoginImage} w='100%' alt='Login Image' />
                    </Box>

                    <Box w={{ base: '350px', md: '420px', lg: '480px' }} h='auto' px={{ base: 5, md: 7 }} pt='8' boxShadow='2xl' bg='white' borderRadius={10}>
                        <Box mb='7'>
                            <Heading color='#1E3747' mb='5' fontSize={28}>Send us a message</Heading>
                            <Text color='#6A7C88' fontSize={15}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, autem?</Text>
                        </Box>

                        <Box mb='7'>
                            <FormControl>
                                <Box mb='5'>
                                    <FormLabel color='#1E3747' fontWeight='medium' fontSize={15}>Name</FormLabel>
                                    <Input type='text' placeholder='type your name here' />
                                </Box>
                                <Box mb='5'>
                                    <FormLabel color='#1E3747' fontWeight='medium' fontSize={15}>Message Title</FormLabel>
                                    <Input type='text' placeholder='type your message title here' />
                                </Box>

                                <Box mb='5'>
                                    <FormLabel color='#1E3747' fontWeight='medium' fontSize={15}>Message</FormLabel>
                                    <Textarea placeholder='Type your message here' resize='none' h='150px' />
                                    {/* <InputGroup size='md'>
                                        <Input
                                            pr='4.5rem'
                                            type={show ? 'text' : 'password'}
                                            placeholder='Enter password'
                                        />
                                        <InputRightElement width='4.5rem'>
                                            <Button h='1.75rem' size='sm' onClick={handleClick} bg='none'>
                                                {show ? <ViewIcon /> : <ViewOffIcon />}
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup> */}
                                </Box>

                                

                                <Box>
                                    <Button bg='#E05D2F' w='100%' h='55px' color='white' boxShadow='md'>Send Message</Button>
                                </Box>
                            </FormControl>
                        </Box>
                    </Box>
                </Stack>
        </Box>
    )
}

export default Contact
