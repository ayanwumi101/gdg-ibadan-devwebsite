import { Box, Image, Text, Heading } from '@chakra-ui/react'
import Bg from '../../assets/verification-bg.png'
import Message from '../../assets/message-icon.png'
import Logo from '../../assets/gdg-logo.svg'
import React from 'react'

const EmailVerification = () => {
  return (
    <Box display='flex' alignItems='center' justifyContent='center' h='600px'>
        <Box backgroundImage={Bg} maxW='700px' mx='auto' backgroundRepeat='no-repeat' backgroundPosition='center'>
            <Image src={Logo} display='block' mx='auto' mb='4' />
            <Box maxW='450px' h='300px' bg='white' boxShadow='2xl' mx='auto' borderRadius={10} p='5'>
                <Image src={Message} display='block' mx='auto' mt='5' mb='5' />
                <Heading mb='5' fontSize={30} textAlign='center'>Please verify your email</Heading>
                <Text fontSize={16} color='#6A7C88' textAlign='center'>An email has been sent to you. Please click the link to login to your account</Text>
            </Box>
        </Box>
    </Box>
  )
}

export default EmailVerification