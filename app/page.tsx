'use client';

import {
    Head,
    About,
    Skillset,
    Projects,
    Footer,
    SocialsBox,
} from '@/components';
import { motion } from 'framer-motion';

const IndexPage = () => {
    const contentVariations = {
        initial: {
            y: -5,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.5,
                duration: 1.2,
            },
        },
    };

    const socialsVariations = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                delay: 1,
                duration: 2,
            },
        },
    };

    return (
        <div className='flex'>
            <aside className='hidden xl:flex'>
                <motion.span
                    variants={socialsVariations}
                    initial='initial'
                    animate='animate'>
                    <SocialsBox className='group' />
                </motion.span>
            </aside>
            <main className='container'>
                <Head />
                <motion.span
                    variants={contentVariations}
                    initial='initial'
                    whileInView='animate'
                    viewport={{ once: true }}>
                    <About />
                </motion.span>
                <motion.span
                    variants={contentVariations}
                    initial='initial'
                    whileInView='animate'
                    viewport={{ once: true }}>
                    <Skillset />
                </motion.span>
                <motion.span
                    variants={contentVariations}
                    initial='initial'
                    whileInView='animate'
                    viewport={{ once: true }}>
                    <Projects />
                </motion.span>
                <Footer />
            </main>
        </div>
    );
};

export default IndexPage;
