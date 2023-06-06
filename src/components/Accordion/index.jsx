import { Box, Stack, Text, Icon, Button } from '@chakra-ui/react'
import React from 'react'

const index = ({icon, text, bg, color, fontWeight, fontSize, width}) => {
  return (
    <Box>
        <Button display='flex' gap={2} alignItems='center' bg={bg} width={width}>
            <Text color={color} fontWeight={fontWeight} fontSize={fontSize}>{text}</Text>
            <Icon color={color} as={icon} fontSize={fontSize} />
        </Button>
    </Box>
  )
}

export default index