import { Heading } from '.';

const About = () => {
    return (
        <>
            <Heading contentTitle='About me' />
            <p className='text-base leading-7'>
                Hi, I{"'"}m Emma! I{"'"}m passionate about learning all things
                tech, an interest that started super young. It apparently has
                continued, as I often find myself coding late into the nights!
                While I strive to learn as much as I possibly can, I{"'"}ve
                found that my passion lies in crafting responsive and accessible
                interfaces that are{' '}
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                    beautiful to experience
                </span>
                .
            </p>
        </>
    );
};

export default About;
