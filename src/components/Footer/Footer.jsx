'use client'
import React from 'react'
import {
    Heading, Box, Text, Button, Flex, Stack, List, ListItem, ListIcon, OrderedList, UnorderedList,
} from '@chakra-ui/react'
import Image from 'next/image'
import logo from '../../assets/gdg-logo-2.svg'
import twitter from '../../assets/twitter-bird.svg'
import linkedin from '../../assets/linkedin-logo.svg'
import slack from '../../assets/slack.svg'

const Footer = () => {
    return (<></>
        //     <Box w='100%'  position='relative'>
        //         <FooterOverlay/>
        //     </Box>
        //   )

        // }

        // export default Footer


        // export const FooterOverlay = () => {
        //     return (
        //         <Box position='relative'>

        //             <Box w='80%' mx='auto' bg='#FCEFEA' h='360px' borderRadius={24} position='absolute' inset='0' zIndex='1' display='flex' justifyContent='center' alignItems='center'>
        //                 <Flex w='90%' mx='auto' justifyContent='space-between' alignItems='center'>
        //                     <Box w='580px'>
        //                         <Heading lineHeight='57px'>Ready to take your tech skills to the next level? Join our community now!</Heading>
        //                     </Box>
        //                     <Box w='213px'>
        //                         <Button w='100%' bg='#E05D2F' h='55px' color='white' fontWeight='medium' fontSize={14}>Join our Community</Button>
        //                     </Box>
        //                 </Flex>
        //             </Box>

        //             <Box w='90%' margin='20% auto 0 auto' bg='#172B37' h='530px' borderRadius={24} position='absolute' inset='0' zIndex='-1'>
        //                 <Flex w='80%' mx='auto' mt='15%' justifyContent='space-between'>
        //                     <Box w='335px'>
        //                         <Stack spacing={10} direction='column'>
        //                             <Image src={logo} alt='GDG-Ibadan Logo' />
        //                             <Text color='white' lineHeight='24px' fontSize={14}>
        //                                 We strive to create a space that fosters
        //                                 collaboration and learning among tech enthusiasts of all levels.
        //                                 Whether you're a beginner or an expert, our community welcomes you.
        //                             </Text>

        //                             <Box>
        //                                 <Stack direction='row' spacing={6}>
        //                                     <a href=""><Image src={slack} /></a>
        //                                     <a href=""><Image src={linkedin} /></a>
        //                                     <a href=""><Image src={twitter} /></a>
        //                                 </Stack>
        //                             </Box>
        //                         </Stack>
        //                     </Box>

        //                     <Box>
        //                         <Heading color='#E05D2F' fontSize={14} fontWeight={500} mb='7'>Quick Links</Heading>
        //                         <UnorderedList color='white' fontSize={14}>
        //                             <Stack spacing={6}>
        //                                 <ListItem>About GDG Ibadan</ListItem>
        //                                 <ListItem>Upcoming Events</ListItem>
        //                                 <ListItem>Blog</ListItem>
        //                                 <ListItem>Job Board</ListItem>
        //                             </Stack>
        //                         </UnorderedList>
        //                     </Box>

        //                     <Box>
        //                         <Heading color='#E05D2F' fontSize={14} fontWeight={500} mb='7'>Legal</Heading>
        //                         <UnorderedList color='white' fontSize={14}>
        //                             <Stack spacing={6}>
        //                                 <ListItem>Terms/Privacy</ListItem>
        //                             </Stack>
        //                         </UnorderedList>
        //                     </Box>
        //                 </Flex>
        //             </Box>

        //             <Box h='70px' textAlign='center' boxShadow='sm' position='absolute' margin='60% auto 30% auto' inset='0' display='flex' alignItems='center' justifyContent='center'>
        //                 <Text> &copy; 2023 Ibadan devwebsite</Text>
        //             </Box>

        //         </Box>
    )
}

export default Footer;