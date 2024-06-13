import { MdArrowRight } from "react-icons/md";

const About = () => {
    return (
        <>
            <div className='flex items-center gap-2 pb-2 md:pb-4'>
                <span>
                    <MdArrowRight/>
                </span>
                <p className='text-primary'>About me</p>
            </div>
            <p className='text-primary-muted text-base leading-7'>
                Hi, I{"'"}m Emma, currently studying to become a Front End
                Developer. I{"'"}m passionate about learning all things tech, an
                interest that started super young. It apparently has continued,
                as I often find myself coding late into the nights! While I
                strive to learn as much as I possibly can, I{"'"}ve found that
                my passion lies in crafting responsive and accessible interfaces
                that are beautiful to experience.
            </p>
        </>
    );
};

export default About;
