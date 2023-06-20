import { Box, Text, Heading, Stack, Icon, Image, FormControl, FormLabel, Input, Button, Textarea, useToast, Spinner, Flex } from '@chakra-ui/react'
import React, { useState,  } from 'react'
import shadowBg from '../../assets/shadow-img.png'
import telephone from '../../assets/telephone-icon.svg'
import messageIcon from '../../assets/mail-icon.svg'
import location from '../../assets/location-icon.svg'
import linkedin from '../../assets/linkedin-logo.svg'
import twitter from '../../assets/twitter-logo.svg'
import { useForm, ValidationError } from '@formspree/react';
import {Instagram, Slack, } from 'iconsax-react'

const Contact = () => {
    const toast = useToast();
    const [state, handleSubmit] = useForm("mgebgnwk");
    const [name, setName] = useState('')
    const [title, setTitle] = useState('')
    const [message, setMessage] = useState('')
    const [loading , setLoading] = useState(false)

    const handleClick = async (e) => {
        e.preventDefault();
        if (message && name && title) {
            await handleSubmit();
            setLoading(true);
            if(state.succeeded){
                await setLoading(false)
                setName('');
                setTitle('');
                setMessage('');
                toast({
                    title: "Success",
                    description: "We'll get back to you soon.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                    position: 'top-right'
                })
            }else{
                await setLoading(true);
            }
        } else {
            toast({
                title: "Error",
                description: "Please fill all fields.",
                status: "error",
                duration: 3000,
                isClosable: true,
                position: 'top-right'
            });
        }
    }
   
    

    return (
        <Box w='100%' my='10' px={{ base: 5 }}>
                <Box maxW={['400px', '450px', '550px']} mx='auto' textAlign='center' mb='14'>
                    <Heading color='#1E3747' fontSize={45} mb='2'>Contact Us</Heading>
                    <Text color='#6A7C88' fontSize={22} w={['300px', '500px', '550px']} mx='auto'>
                        Any question or remarks? Just write us a message!
                    </Text>
                </Box>
                <Stack direction={{ base: 'column', lg: 'row' }} justifyContent='space-between' spacing={10} alignItems='flex-start' w={['97%', '90%', '90%']} mx='auto' boxShadow='2xl' p='3' borderRadius={24}>
                    <Box h='620px' borderRadius={12} maxW='490px' bg='#172B37' p='10' bgImg={shadowBg} backgroundRepeat='no-repeat' backgroundPosition='bottom right'>
                        <Box>
                            <Stack color='white' direction='column'>
                                <Box mb='16'>
                                    <Heading mb='3' fontSize={[24, 32,32]}>Contact Information</Heading>
                                    <Text>Say something to start a live chat!</Text>
                                </Box>
                                <Box mb={['100px', '180px', '180px']}>
                                    <Stack spacing={10}>
                                        <Flex gap={5} alignItems='center'>
                                            <Image src={telephone} alt='telephone icon' />
                                            <Text>+234 7035 585261</Text>
                                        </Flex>
                                        <Flex gap={5} alignItems='center'>
                                            <Image src={messageIcon} alt='email icon' />
                                            <Text>mary@gmail.com</Text>
                                        </Flex>
                                        <Flex gap={5} alignItems='flex-start'>
                                            <Image src={location} alt='location icon' />
                                            <Text>James Simeon , Akinfala street opp. the university of ibadan, ibadan.</Text>
                                        </Flex>
                                    </Stack>
                                </Box>
                                <Box>
                                    <Stack direction='row' spacing={8}>
                                        <Flex w='30px' h='30px' _hover={{ bg: '#E05D2F' }} borderRadius='50%' bg='white' justifyContent='center' alignItems='center'><Icon as={Slack} color='#172B37' fontSize={20} /></Flex>
                                        <Flex w='30px' h='30px' _hover={{ bg: '#E05D2F' }} borderRadius='50%' bg='white' justifyContent='center' alignItems='center'><Icon as={Instagram} color='#172B37' fontSize={20} /></Flex>
                                        <Box w='30px' h='30px'><Image src={linkedin} w='100%' alt='linkedin logo' /></Box>
                                        <Box w='25px' h='25px'><Image src={twitter} w='100%' alt='linkedin logo' /></Box>
                                    </Stack>
                                </Box>
                            </Stack>
                        </Box>
                    </Box>

                    <Box w={{ base: '350px', md: '420px', lg: '570px' }} h='auto' px={{ base: 5, md: 7 }} pt='8' bg='white' borderRadius={10}>

                        <Box mb='7'>
                            <form onSubmit={handleClick} type='POST'>
                                <Stack w='100%' direction='row' spacing={6} mb='2'>
                                    <Box mb='5' w='50%'>
                                        <FormLabel color='#1E3747' fontWeight='medium' fontSize={15}>First Name</FormLabel>
                                        <Input type='text' name='name' placeholder='first name' w='100%' value={name} onChange={(e) => setName(e.target.value)} />
                                    </Box>
                                    <Box mb='5' w='50%'>
                                        <FormLabel color='#1E3747' fontWeight='medium' fontSize={15}>Last Name</FormLabel>
                                        <Input type='text' name='title' placeholder='last name' w='100%' value={title} onChange={(e) => setTitle(e.target.value)} />
                                    </Box>
                                </Stack>

                                <Box mb='6'>
                                        <FormLabel color='#1E3747' fontWeight='medium' fontSize={15}>Last Name</FormLabel>
                                        <Input type='text' name='title' placeholder='last name' w='100%' value={title} onChange={(e) => setTitle(e.target.value)} />
                                </Box>

                                <Box mb='6'>
                                    <FormLabel color='#1E3747' fontWeight='medium' fontSize={15}>Write your message here</FormLabel>
                                <Textarea placeholder='Type your message here' name='message' resize='none' h='150px' value={message} onChange={(e) => setMessage(e.target.value)} />
                                </Box>

                                

                                <Box>
                                    <button style={{ backgroundColor: '#E05D2F', width: '100%', height: '55px', color:'white', borderRadius: '5px'}} type='submit'>{loading ? <Spinner size='md' /> : 'Send Message'}</button>
                                </Box>
                            </form>
                        </Box>
                    </Box>
                </Stack>
        </Box>
    )
}

export default Contact