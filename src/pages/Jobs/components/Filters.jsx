import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { Box, Checkbox, Text, Heading, Stack } from '@chakra-ui/react'
import React from 'react'

const Filters = () => {
  return (
    <Box w='20%'>
        <FilterTemplate />
        <FilterTemplate />
    </Box>
  )
}

export default Filters


export const FilterTemplate = () => {
    return (
        <Box mb='10'>
            <Stack direction='row' spacing={5} mb='5'>
                <Heading fontSize={15} fontWeight='medium' color='#1E3747'>Type of Employment</Heading>
                <ChevronUpIcon fontSize={22} color='#1E3747' />
            </Stack>
           <Box>
            <Checkbox colorScheme='red' mb='4' spacing={7} color='#6A7C88'>Full time (3)</Checkbox>
            <Checkbox colorScheme='red' mb='4' spacing={7} color='#6A7C88'>Part time (7)</Checkbox>
            <Checkbox colorScheme='red' mb='4' spacing={7} color='#6A7C88'>Contract (8)</Checkbox>
            <Checkbox colorScheme='red' mb='4' spacing={7} color='#6A7C88'>Internship (5)</Checkbox>
            <Checkbox colorScheme='red' mb='4' spacing={7} color='#6A7C88'>Remote (12)</Checkbox>
           </Box>
        </Box>
    )
}