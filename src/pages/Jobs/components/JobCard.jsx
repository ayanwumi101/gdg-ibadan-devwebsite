import { Box, Select, Heading, Text, Flex, Stack, FormLabel, Image, Button } from '@chakra-ui/react'
import React from 'react'
import JobIcon from '../../../assets/single-job-icon.png'

const JobCard = () => {
  return (
    <Box w={['100%', '75%']}>
        <Box mb='5'>
            <Heading fontWeight='medium' color='#1E3747' fontSize={32} mb='5'>All Jobs</Heading>
            <Stack direction='row' justifyContent='space-between' w='100%'>
                <Box><Text color='#6A7C88'>Showing 73 results</Text></Box>
                
                   <Stack direction='row' alignItems='center'>
                          <Box w='70px'>
                              <Text color='#6A7C88' fontSize={15}>Sorted By:</Text>
                          </Box>
                          <Select border='none' outline='none' fontSize={15} p='0' m='0' w='150px' fontWeight='medium' color='#1E3747'>
                              <option>Most relevant</option>
                              <option value="">Most relevant</option>
                          </Select>
                   </Stack>
                
            </Stack>
        </Box>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </Box>
  )
}

export default JobCard


export const Card = () => {
  return (
  <Box w='100%' p={[3, 4]} border='1px solid lightgray' borderRadius={12} mb='7' h='auto'>
      <Stack direction={['column', 'row']} justifyContent='space-between' alignItems={['flex-start', 'center']}>
        <Box w={['20%', '10%']}>
          <Image src={JobIcon} w='50px' h='50px' />
        </Box>

        <Box w='92%'>
          <Stack direction='column' spacing={4}>
            <Box>
              <Stack direction='row' justifyContent='space-between'>
                <Box>
                  <Heading fontSize={22} fontWeight='medium' color='#1E3747' mb='3'>Social Media Assistant</Heading>
                  <Text color='#6A7C88' fontSize={16}>Canva . Ankara, Turkey</Text>
                </Box>

                <Button bg='#E05D2F' w='105px' color='white' fontSize={14} boxShadow='md'>Apply</Button>
              </Stack>
            </Box>

            <Box w='100%' h={['auto', '42px']}>
              <Stack direction={['column', 'row']} justifyContent={['center', 'space-between']} alignItems='center'>
                <Box mb='3'>
                  <Stack direction='row' alignItems='center' gap={[2, 3]} justifyContent='space-between'>
                    <Text bg='#E8F5E9' color='#4CAF50' borderRadius='24px' px='20px' py='6px' border='1px solid #E8F5E9' fontSize={14}>FullTime</Text>
                    <Box w='1px' h='42px' bg='lightgray'></Box>
                    <Text color='#FFC107' border='1px solid #FFC107' borderRadius='24px' px='20px' py='6px' fontSize={14}>Marketing</Text>
                    <Text color='#4285F4' border='1px solid #4285F4' borderRadius='24px' px='20px' py='6px' fontSize={14}>Design</Text>
                  </Stack>
                </Box>
                <Text color='#1E3747' fontWeight='medium' fontSize={15}>804 Applied</Text>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}