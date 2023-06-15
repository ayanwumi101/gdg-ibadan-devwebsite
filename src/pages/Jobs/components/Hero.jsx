import { Box, Image, Text, Input, Button, Stack, Heading, Select } from '@chakra-ui/react'
import React from 'react'
import bgImage from '../../../assets/hero-bg.svg'
import location from '../../../assets/location.svg'
import { Search2Icon } from '@chakra-ui/icons'

const Hero = () => {
  return (
    <Box 
        w='90%' 
        mx='auto' 
        bg='#E9ECED' 
        h={['700px', 'auto', '500px']} 
        my='7'
        borderRadius='24px' 
        backgroundImage={bgImage} 
        backgroundRepeat='no-repeat'
        backgroundPosition='center'
        backgroundSize='contain'
        position='relative'
    >
        <HeadingText />
        <FilterInputs/>
        <Box w='80%' position='absolute' mx='auto' inset='0' top={['600px', '430px']}>
            <Text color='#6A7C88'>Popular: UI Designer , UX Researcher, Andriod, Admin</Text>
        </Box>
    </Box> 
  )
}

export default Hero

export const HeadingText = () => {
    return (
        <Box  position='absolute' mx='auto' inset='0' top='120px'>
            <Box>
                <Stack direction='row' alignItems='center' justifyContent='center' spacing={[2, 4,6]}>
                    <Heading fontSize={[32, 50,57]} fontWeight='medium' color='#1E3747'>Find your</Heading>
                    <Heading fontSize={[32,50,57]} fontWeight='medium' color='#E05D2F'>Dreamjob</Heading>
                </Stack>
                <Text color='#6A7C88' textAlign='center' fontSize={22} w={['240px', '50%', '100%']} mx='auto' my='3'>Find your next career at companies that suite your dream</Text>
            </Box>
        </Box>
    )
}

export const FilterInputs = () => {
    return (
        <Box position='absolute' mx='auto' inset='0' top='306px' w='80%' h={['275px', '100%', '100px']} bg='white' borderRadius='12px' py='6' px='8' boxShadow=''>
            <Stack direction={['column', 'row', 'row']} spacing={12} justifyContent='center' alignItems='center'>
                <Box w={['100%', '50%', '30%']}>
                    <Stack direction='row' alignItems='center' spacing={3}>
                        <Search2Icon color='#4D6371' fontSize={15} />
                        <Input type='text' py='0' w='100%' fontSize={14} placeholder='Job title or keyword' borderBottom='1.5px solid #BAC3C8' variant='flushed' />
                    </Stack>
                </Box>
                <Box h='50px' w='0.8px' bg='#BAC3C8' display={['none', 'none', 'block']}></Box>
                <Box w={['100%', '50%', '30%']}>
                    <Stack direction='row' alignItems='center' spacing={3}>
                        <Image src={location} alt='location-icon' />
                        <Select type='text' py='0' w='100%' fontSize={14} placeholder='Job title or keyword' borderBottom='1.5px solid #BAC3C8' variant='flushed' >
                            <option value="">testing</option>
                            <option value="">San francisco USA</option>
                            <option value="">testing</option>
                            <option value="">San francisco USA</option>
                            <option value="">testing</option>
                            <option value="">San francisco USA</option>
                        </Select>
                    </Stack>
                </Box>
                <Box w={['100%', '50%', '20%']}>
                    <Button bg='#E05D2F' w='100%' color='white' fontWeight='medium' fontSize={15}>Search</Button>
                </Box>
            </Stack>
        </Box>
    )
}