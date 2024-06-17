'use client';

import { motion } from 'framer-motion';
import { Socials } from '.';

const headerTextVariants = {
    initial: {
        y: -5,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1.2,
        },
    },
};

const bioTextVariants = {
    initial: {
        y: -5,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1.2,
        },
    },
}

const Head = () => {
    return (
        <motion.div
            variants={headerTextVariants}
            initial='initial'
            animate='animate'
            className='flex md:justify-center md:items-center md:text-center flex-col gap-2 pb-6 md:pt-8 lg:pt-24'>
            <motion.div
                variants={headerTextVariants}
                className='flex flex-col gap-2'>
                <motion.h1
                    className='title'
                    variants={headerTextVariants}>
                    Emma Mellgren
                </motion.h1>
                <motion.h3
                    className='subtitle'
                    variants={headerTextVariants}>
                    Frontend Developer
                </motion.h3>
            </motion.div>
            <motion.div
                className='md:py-6 max-w-[750px]'
                variants={bioTextVariants}>
                <motion.p
                    className='text-primary-muted text-base leading-7'
                    variants={bioTextVariants}>
                    Currently studying frontend development at KYH, while
                    mastering the art of crafting engaging user interfaces. I
                    {"'"}m eager to learn and grow in tech!
                </motion.p>
            </motion.div>
            <motion.span
                className='block md:hidden'
                variants={bioTextVariants}>
                <Socials
                    github='https://github.com/emmaoliviamellgren'
                    linkedin='https://linkedin.com/in/emma-m-945954192'
                    email='mellgrenemma0@gmail.com'
                />
            </motion.span>
        </motion.div>
    );
};

export default Head;
