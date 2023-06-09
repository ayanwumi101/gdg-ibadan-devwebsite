import { Box, Text, Heading, Stack, Image, FormControl, FormLabel, Input, Button, Checkbox, InputGroup, InputRightElement, Divider, Select } from '@chakra-ui/react'
import React, { useState } from 'react'
import LoginImage from '../../assets/login-image.png'
import Google from '../../assets/google-icon.png'
import Facebook from '../../assets/facebook-icon.png'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Link} from 'react-router-dom'
import BackButton from '../../components/BackButton/BackButton'

const Signup = () => {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  return (
    <Box w='100%' my='10' px={{ base: 5 }}>
      <Stack direction={{base: 'column', lg: 'row'}} alignItems={{base: 'center', lg: 'flex-start'}} justifyContent='center' mx='auto'>
      <BackButton />
      <Stack direction={{ base: 'column', lg: 'row' }} justifyContent='space-between' alignItems='center'>
        <Box w='550px' display={{ base: 'none', md: 'block', lg: 'block' }}>
          <Image src={LoginImage} w='100%' alt='Login Image' />
        </Box>

        <Box w={{ base: '350px', md: '420px', lg: '480px' }} h='auto' px={{ base: 5, md: 7 }} py='10' boxShadow='2xl' bg='white' borderRadius={10}>
          <Box mb='7'>
            <Heading color='#1E3747' mb='5' fontSize={32}>Sign Up</Heading>
            <Stack direction='row' spacing={2}>
              <Text color='#6A7C88'>Already have an account?</Text>
              <Link to='/signin'><Text color='#E05D2F'>Sign in</Text></Link>
            </Stack>
          </Box>

          <Stack direction={{ base: 'column', lg: 'row' }} justifyContent='space-between' mb={{ base: '5', lg: 0 }}>
            <Box mb='5' w={{ base: '100%', lg: '47%' }}>
              <FormLabel color='#1E3747' fontWeight='medium' fontSize={14.5}>First Name</FormLabel>
              <Input type='text' w='100%' placeholder='Enter your first name' fontSize={14.5} />
            </Box>
            <Box w={{base: '100%', lg: '47%'}}>
              <FormLabel color='#1E3747' fontWeight='medium' fontSize={14.5}>Last Name</FormLabel>
              <Input type='text' w='100%' placeholder='Enter your last name' fontSize={14.5} />
            </Box>
          </Stack>

          <Box mb='7'>
            <FormControl>
              <Box mb='5'>
                <FormLabel color='#1E3747' fontWeight='medium' fontSize={14.5}>Email</FormLabel>
                <Input type='email' placeholder='Enter your email' fontSize={15} />
              </Box>

              <Box mb='5'>
                <FormLabel color='#1E3747' fontWeight='medium' fontSize={14.5}>What do you do?</FormLabel>
                <Select fontSize={15}>
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                  <option value='option3'>Option 3</option>
                </Select>
              </Box>

              <Box mb='5'>
                <FormLabel color='#1E3747' fontWeight='medium' fontSize={14.5}>Password</FormLabel>
                <InputGroup size='md'>
                  <Input
                    pr='4.5rem'
                    type={show ? 'text' : 'password'}
                    placeholder='Enter password'
                    fontSize={15}
                  />
                  <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleClick} bg='none'>
                      {show ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </Box>

              <Box mb='10'>
                <Stack direction='row' alignItems='center' justifyContent='space-between'>
                  <Checkbox color='#6A7C88' size='sm' colorScheme='red'>Remember me</Checkbox>
                  <Text color='#E05D2F' fontSize={13.5} fontWeight='medium'>Forgot password?</Text>
                </Stack>
              </Box>

              <Box>
                <Button bg='#E05D2F' w='100%' h='55px' color='white' boxShadow='md'>Sign in</Button>
              </Box>
            </FormControl>
          </Box>

          <Box position='relative' mb='14'>
            <Box position='absolute' w='100%' h='0.8px' bg='#BAC3C8'></Box>
            <Text color='#6A7C88' bg='white' fontSize={14} w='50px' textAlign='center' position='absolute' top='-11px' left='45%'>or</Text>
          </Box>

          <Stack direction={{ base: 'column', md: 'row' }} alignItems='center' justifyContent='space-between' mb='7'>
            <Button bg='white' w={{ base: '100%', md: '200px' }} border='1.5px solid #E9ECED'><Image src={Google} w={{ base: '33%', md: '45%' }} /></Button>
            <Button bg='white' w={{ base: '100%', md: '200px' }} border='1.5px solid #E9ECED'><Image src={Facebook} w={{ base: '38%', md: '50%' }} /></Button>
          </Stack>

          <Divider mb='5' />

          <Box>
            <Text fontSize={13.5} color='#6A7C88'>Protected by recaptcha and subject to the <a style={{ color: '#E05D2F' }}>Fenkei Privacy Policy</a> and <a style={{ color: '#E05D2F' }}>Terms of Service</a></Text>
          </Box>
        </Box>
      </Stack>
      </Stack>
    </Box>
  )
}

export default Signup
