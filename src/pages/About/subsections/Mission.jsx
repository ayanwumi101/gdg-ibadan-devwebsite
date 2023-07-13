import { Box, Stack, Heading, Text, Image } from '@chakra-ui/react'
import React, {useEffect, useRef} from 'react'
import speakerImg from '../../../assets/double-speaker.png'
import map from '../../../assets/map-bg.png'
import { motion, useAnimation } from 'framer-motion'

const Mission = () => {
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
    }, [headingControls, paragraphControls, imageControls]);
    return (
        <Box my='20'>
            <Stack spacing={{ base: 16, lg: 0 }} p='6' direction={{ base: 'column-reverse', lg: 'row' }} alignItems='center' justifyContent='space-around'>
                <Box maxW={{ base: '100%', lg: '450px' }} position='relative'>
                    <Box backdropBlur='xl'>
                        <motion.img
                            ref={imageRef}
                            src={speakerImg}
                            alt="Your Image"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={imageControls}
                            transition={{ duration: 0.8 }}
                        />
                    </Box>
                    <Box position='absolute' top='0' right={{ base: '0', lg: '-150px' }} zIndex='-1'>
                        <motion.img
                            ref={imageRef}
                            src={map}
                            alt="Your Image"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={imageControls}
                            transition={{ duration: 0.8}}
                        />
                    </Box>
                </Box>
                <Box maxW='380px'>
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.7 }}
                        ref={headingRef}
                        animate={headingControls}
                    >
                        <Heading fontSize={{ base: 35, lg: 40 }} fontWeight='bold' mb='6' color='#1E3747'>Our Mission</Heading>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        ref={paragraphRef}
                        animate={paragraphControls}
                    >
                        <Text fontSize={{ base: 18, lg: 18 }} fontWeight='normal' color='#6A7C88'>
                            Access a wealth of knowledge and resources in our extensive library of tech content.
                        </Text>
                    </motion.p>
                </Box>
            </Stack>
        </Box>
    )
}

export default Mission