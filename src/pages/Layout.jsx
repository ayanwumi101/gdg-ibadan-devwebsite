import { Box, Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import Button from '../components/Button'
import Accordion from '../components/Accordion'
import { AddIcon } from '@chakra-ui/icons'

const Layout = () => {
  const texts = ['Unavailable by Davido', 'Unavailable by Davido', 'Unavailable by Davido', 'Unavailable by Davido', 'Unavailable by Davido']
  return (
    <Box maxW='400px' mx={{base: 'auto', md: '0', lg: '0'}} bg='gray' textAlign='center' p='5' my='4'>
        <Heading mb='3'>Trending Songs</Heading>
        <Stack direction='column' spacing={4} alignItems='center'>
            {texts.map((text) => (<Accordion text={text} icon={AddIcon} />))}
        </Stack>
        <Button bg='orange' text='View more' />
    </Box>
  )
}

export default Layout