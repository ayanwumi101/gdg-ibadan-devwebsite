import React from 'react'
import { Box, Image, Text } from '@chakra-ui/react'
import logo from '../../assets/GDG-logo.png'

const Loader = () => {
  return (
    <Box w='100%' h='100vh' display='flex' alignItems='center' justifyContent='center'>
        <Box textAlign='center'>
              <Image src={logo} display='block' mx='auto' mb='3' />
              <Text fontWeight='bold' color='#1E3747' fontSize={22}>GDG IBADAN</Text>
        </Box>
    </Box>
  )
}

export default Loader