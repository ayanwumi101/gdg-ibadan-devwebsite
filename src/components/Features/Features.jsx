import React from 'react'
import Cards from '../cards'
import { Box, Stack, Heading, Text } from '@chakra-ui/react'
import Line from '../../assets/Line.png'

const Features = () => {
  return (
    <Box w='90%' mx='auto' p={[5, 6, 8]} bg='#1E3747' borderRadius='24px' bgImage={Line} backgroundRepeat='no-repeat' >

      <Box textAlign='center' mt='12' mb='14' color='white'>
        <Heading fontSize={45} mb='8'>Features</Heading>
        <Text fontSize={22}>Fostering collaboration and learning among tech of all enthusiasts level</Text>
      </Box>

      <Stack alignItems='center' spacing={[7, 5, 0]} direction={['column', 'column', 'row']} justifyContent='space-between'>
        <Cards
          hText={"Access"}
          paragraph={
            "Access a wealth of knowledge and resources in our extensive library of tech content."
          }
          background="#4285F4"
          color="#fff"
        />
        <Cards
          hText={"Connect"}
          paragraph={
            "Connect with fellow tech enthusiasts through our online community."
          }
          background="#34A853"
          color="#fff"
        />
        <Cards
          hText={"Events"}
          paragraph={
            "Attend exclusive events and meetups to learn from industry experts and expand your network."
          }
          background="#DA5847"
          color="#fff"
        />
        <Cards
          hText={"Discussion Forum"}
          paragraph={
            "Join groups and discussions centered around your specific interests within the tech industry."
          }
          background="#FBBC04"
          color="#fff"
        />
      </Stack>
    </Box>
  )
}

export default Features