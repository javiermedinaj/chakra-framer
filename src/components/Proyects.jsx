import React from 'react'
import { Container, Box, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Image1 from '../assets/image1.jpeg'
import Image2 from '../assets/image2.jpeg'
import Image3 from '../assets/image3.jpeg'


const proyect = [
    {
        id: 1,
        title: 'Card 1',
        image: Image1,
        description: 'Project in next js',
        link: 'https://github.com/javiermedinaj/crud'
    },
    {
        id: 2,
        title: 'Card 2',
        description: 'Project in react js',
        image: Image2,
        link: 'https://github.com/javiermedinaj/cripto-react'
    },
    {
        id: 3,
        title: 'Card 3',
        description: 'comming soon',
        image: Image3,
        link: 'https://github.com/javiermedinaj'
    }
]

const Proyects = () => {
    const list = { hidden: { opacity: 0 } }
    const item = { hidden: { x: -10, opacity: 0, } }
    return (
        <Container>
            <motion.div
            >
                {proyect.map((e) => {
                    return (
                        <Box>
                            <Image src={e.image} />
                            <motion.ul variants={list}>
                                <motion.li variants={item}> {e.title} </motion.li>
                                <motion.li variants={item}> {e.description} </motion.li>
                                <motion.li variants={item}> <a href={e.link} target="_blank"> Check te code</a> </motion.li>
                            </motion.ul>

                        </Box>
                    );
                })}

            </motion.div>
        </Container>
    )
}

export default Proyects