import { Box, Select, Heading, Text, Flex, Stack, FormLabel } from '@chakra-ui/react'
import React from 'react'

const JobCard = () => {
  return (
    <Box w='75%'>
        <Box>
            <Heading fontWeight='medium' color='#1E3747' fontSize={32} mb='5'>All Jobs</Heading>
            <Stack direction='row' justifyContent='space-between'>
                <Box><Text color='#6A7C88'>Showing 73 results</Text></Box>
                {/* <Box> */}
                   <Stack direction='row' alignItems='center'>
                          <FormLabel color='#6A7C88' fontSize={15}>Sorted By:</FormLabel>
                          <Select border='none' outline='none' fontSize={15} p='0' m='0'>
                              <option>Most relevant</option>
                              <option value="">Most relevant</option>
                          </Select>
                   </Stack>
                {/* </Box> */}
            </Stack>
        </Box>
    </Box>
  )
}

export default JobCard