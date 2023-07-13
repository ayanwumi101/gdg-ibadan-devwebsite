import { Box, Stack } from '@chakra-ui/react'
import React from 'react'
import Hero from './components/Hero'
import JobCard from './components/JobCard'
import Filters from './components/Filters'

const index = () => {
  return (
    <Box>
      <Hero />
      <Stack w={['90%', '80%']} mx='auto' direction='row' justifyContent='space-between'>
        <Filters />
        <JobCard />
      </Stack>
    </Box>
  )
}

export default index