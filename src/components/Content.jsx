import { Container } from '@chakra-ui/react'
import React from 'react'
import videoBg from '../assets/Secuencias de codificación.mp4'
import { motion } from 'framer-motion'

const Content = () => {
    return (
        <Container>
            <motion.div animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}>
                <video
                    src={videoBg}
                    poster="/masthead-poster.jpg"
                    autoplay="autoplay"
                    muted="muted"
                    loop="loop"
                    playsinline
                />
            </motion.div>
        </Container>
    )
}

export default Content

