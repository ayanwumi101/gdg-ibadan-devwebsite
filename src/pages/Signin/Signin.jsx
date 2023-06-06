import { Box, Text, Heading, Stack, Image, FormControl, FormLabel, Input, Button, Checkbox, Link, InputGroup, InputRightElement, Divider } from '@chakra-ui/react'
import React, {useState} from 'react'
import LoginImage from '../../assets/login-image.png'
import Google from '../../assets/google-icon.png'
import Facebook from '../../assets/facebook-icon.png'
import {ViewIcon, ViewOffIcon} from '@chakra-ui/icons'

const Signin = () => {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  return (
    <Box w='100%' my='10' px={{base: 5}}>
      <Stack direction={{base: 'column', lg: 'row'}} justifyContent='space-between' alignItems='center'>
        <Box w='500px' display={{base: 'none', md: 'block', lg: 'block'}}>
          <Image src={LoginImage} w='100%' alt='Login Image' />
        </Box>

        <Box w={{base: '350px', md: '420px', lg: '480px'}} h='auto' px={{base: 5, md: 7}} py='10' boxShadow='2xl' bg='white' borderRadius={10}>
          <Box mb='7'>
            <Heading color='#1E3747' mb='5' fontSize={32}>Sign in</Heading>
            <Stack direction='row' spacing={2}>
              <Text color='#6A7C88'>Already have an account?</Text>
              <Link><Text color='#E05D2F'>Sign Up</Text></Link>
            </Stack>
          </Box>

          <Box mb='7'>
            <FormControl>
              <Box mb='5'>
                <FormLabel color='#1E3747' fontWeight='medium' fontSize={15}>Email</FormLabel>
                <Input type='email' placeholder='Enter your email' />
              </Box>

              <Box mb='5'>
                <FormLabel color='#1E3747' fontWeight='medium' fontSize={15}>Password</FormLabel>
                <InputGroup size='md'>
                  <Input
                    pr='4.5rem'
                    type={show ? 'text' : 'password'}
                    placeholder='Enter password'
                  />
                  <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleClick} bg='none'>
                      {show ? <ViewIcon/> : <ViewOffIcon />}
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

          <Stack direction='row' alignItems='center' justifyContent='space-between' mb='7'>
            <Button bg='white' w='200px' border='1.5px solid #E9ECED'><Image src={Google} w='45%' /></Button>
            <Button bg='white' w='200px' border='1.5px solid #E9ECED'><Image src={Facebook} w='50%' /></Button>
          </Stack>

          <Divider mb='5' />

          <Box>
            <Text fontSize={13.5} color='#6A7C88'>Protected by recaptcha and subject to the <strong style={{ color: '#E05D2F' }}>Fenkei Privacy Policy</strong> and <strong style={{ color: '#E05D2F' }}>Terms of Service</strong></Text>
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default Signin
