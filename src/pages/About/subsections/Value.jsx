import { Box, Text, Stack, Heading, Image } from '@chakra-ui/react'
import React, {useEffect, useRef} from 'react'
import icon1 from '../../../assets/icon1.png'
import icon2 from '../../../assets/icon2.png'
import icon3 from '../../../assets/icon3.png'
import icon4 from '../../../assets/icon4.png'
import Vector from '../../../assets/Vector.png'
import { motion, useAnimation } from 'framer-motion'

const Value = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const imageRef = useRef(null);

  const headingControls = useAnimation();
  const paragraphControls = useAnimation();
  const imageControls = useAnimation();

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust this threshold as needed
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          headingControls.start({ opacity: 1, y: 0 });
          paragraphControls.start({ opacity: 1, y: 0 });
          imageControls.start({ opacity: 1, scale: 1 });
        } else {
          headingControls.start({ opacity: 0, y: -20 });
          paragraphControls.start({ opacity: 0, y: 20 });
          imageControls.start({ opacity: 0, scale: 0.8 });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }
    if (paragraphRef.current) {
      observer.observe(paragraphRef.current);
    }

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [headingControls, paragraphControls, imageControls,]);
  return (
    <Box w='90%' mx='auto'>
        <Stack direction={{base: 'column', md: 'column', lg: 'row'}} justifyContent={{base: 'center', lg: 'space-between'}} alignItems='center'>
              <Box w={{base: '90%', md: '100%', lg: '35%'}} mb='8'>
                  <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.7 }}
                        ref={headingRef}
                        animate={headingControls}
                    >
                      <Heading fontSize={{base: 35, lg: 40}} fontWeight='bold' mb='6' color='#1E3747'>Value Statement</Heading>
                  </motion.h1>

                  <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        ref={paragraphRef}
                        animate={paragraphControls}
                    >
                    <Text fontSize={{ base: 18, lg: 18 }} fontWeight='normal' color='#6A7C88' lineHeight={8}>
                        We strive to create a space that fosters collaboration and learning among tech enthusiasts of all levels. Whether you're a beginner or an expert, our community welcomes you.
                    </Text>
                  </motion.p>
              </Box>
              <Box w={{base: '100%', md: '100%', lg: '50%'}} bgImage={Vector} backgroundRepeat='no-repeat' objectFit='contain' backgroundSize='200px 200px' backgroundPosition='center'> 
                <Stack direction={{base: 'column', md: 'row', lg: 'row'}} justifyContent={{base: 'center'}} alignItems='center' spacing={{base: 5, lg: 8}} mb='5'>
                  <Cards 
                    text='We are passionate about staying up-to-date with the latest trends and technologies in the tech industry, and we encourage our members to explore new ideas and push the boundaries of what is possible.' 
                    hColor='#34A853'
                    hText='Innovation'
                    icon={icon4}
                  />
                  <Cards 
                    text='We believe that building a strong and supportive community is essential to achieving our mission. We are dedicated to creating a community where members can connect with each other and build lasting relationships.' 
                    hColor='#4285F4'
                    hText='Community'
                    icon={icon3}
                  />
                </Stack>
                <Stack direction={{base: 'column', md: 'row', lg: 'row'}} justifyContent={{base: 'center'}} alignItems='center' spacing={{base: 5, lg: 8}}>
                   <Cards 
                        text='We are committed to creating a space where members can learn from each other and from experts in the tech industry' 
                        hColor='#FBBC04'
                        hText='Learning'
                        icon={icon2}
                  />

                    <Cards 
                        text='We believe that everyone, regardless of background or experience, should feel welcome and valued in our community.' 
                        hColor='#DA5847'
                        hText='Inclusivity'
                        icon={icon1}
                  />
                </Stack>
            </Box>
        </Stack>
    </Box>
  )
}

export default Value


export const Cards = ({hText, hColor, text, icon}) => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const imageRef = useRef(null);
  const cardRef = useRef(null);

  const headingControls = useAnimation();
  const paragraphControls = useAnimation();
  const imageControls = useAnimation();
  const cardControls = useAnimation();

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust this threshold as needed
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          headingControls.start({ opacity: 1, y: 0 });
          paragraphControls.start({ opacity: 1, y: 0 });
          imageControls.start({ opacity: 1, scale: 1 });
          cardControls.start({ scale: 1.05, transition: { duration: 0.5, yoyo: Infinity } });
        } else {
          headingControls.start({ opacity: 0, y: -20 });
          paragraphControls.start({ opacity: 0, y: 20 });
          imageControls.start({ opacity: 0, scale: 0.8 });
          cardControls.start({ scale: 1, transition: { duration: 0.5 } });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }
    if (paragraphRef.current) {
      observer.observe(paragraphRef.current);
    }

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [headingControls, paragraphControls, imageControls, cardControls]);
    return (
        <Box boxShadow='md' 
         borderRadius={10} p='4' bg='white' w='270px' 
         h={{base: '270', md: 'auto', lg: '270px'}} 
         mb='5' >
        {/* <motion.div
          animate={cardControls}
          initial={{ opacity: 0, scale: 0.8 }}
          ref={cardRef}
        > */}
            <Stack mb='3' direction='row' spacing={3} alignItems='center'>
                <Box w='30px' h='30px'>
                  <motion.img
                            ref={imageRef}
                            src={icon}
                            alt="Your Image"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={imageControls}
                            transition={{ duration: 0.8}}
                        />
                </Box>
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  ref={headingRef}
                  animate={headingControls}
                  transition={{ duration: 0.7, delay: 0.5 }}
                >
                <Heading fontSize={16} color={hColor}>{hText}</Heading>
                </motion.h2>
            </Stack>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
               ref={paragraphRef}
               animate={paragraphControls}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
            <Text color='#6A7C88' fontSize={15} lineHeight={7}>
                {text}
            </Text>
            </motion.p>
          {/* </motion.div> */}
        </Box>
    )
}