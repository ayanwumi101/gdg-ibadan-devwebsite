import { Box, Stack, Heading, Text, Image } from '@chakra-ui/react'
import React from 'react'
import speakerImg from '../../../assets/double-speaker.png'
import map from '../../../assets/map-bg.png'

const Mission = () => {
  return (
    <Box my='20'>
        <Stack spacing={{base: 16, lg: 0}} p='6' direction={{base: 'column-reverse', lg: 'row'}} alignItems='center' justifyContent='space-around'>
            <Box maxW={{base: '100%', lg: '450px'}} position='relative'>
                <Box backdropBlur='xl'>
                    <Image src={speakerImg} alt='speaker' />
                </Box>
                <Box position='absolute' top='0' right={{base: '0', lg: '-150px'}} zIndex='-1'>
                      <Image src={map} w='100%' />
                </Box>
            </Box>
            <Box maxW='380px'>
                <Heading fontSize={40} fontWeight='bold' mb='6' color='#1E3747'>Our Mission</Heading>
                <Text fontSize={{base: 18, lg: 18}} fontWeight='normal' color='#6A7C88'>
                    Access a wealth of knowledge and resources in our extensive library of tech content.
                </Text>
            </Box>
        </Stack>
    </Box>
  )
}

export default Mission