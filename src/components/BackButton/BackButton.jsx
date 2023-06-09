import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import {ArrowBackIcon} from '@chakra-ui/icons'
import { Link, useNavigate } from 'react-router-dom'

const BackButton = () => {
    const navigate = useNavigate()
  return (
    <Box color='#E05D2F' cursor='pointer' onClick={() => navigate(-1)} display='flex' gap={3} alignItems='center' mb='5'>
        <ArrowBackIcon fontSize={22} />
        <Text>Back</Text>
    </Box>
  )
}

export default BackButton