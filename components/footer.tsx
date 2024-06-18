import { ExternalLink, Socials } from '.';

const Footer = () => {
    return (
        <div className='flex flex-col gap-2 justify-center text-center items-center relative h-36 px-6'>
            <span className='hidden md:block xl:hidden'>
                <Socials
                    github='https://github.com/emmaoliviamellgren'
                    linkedin='https://linkedin.com/in/emma-m-945954192'
                    email='mellgrenemma0@gmail.com'
                />
            </span>
            <p className='leading-6 text-secondary font-light text-sm'>
                Developed with ♡ by Emma. Built with{' '}
                <ExternalLink href='https://nextjs.org'>Next.js</ExternalLink>,
                TypeScript and{' '}
                <ExternalLink href='https://tailwindcss.com'>
                    Tailwind CSS
                </ExternalLink>
                . All text is set in the{' '}
                <ExternalLink href='https://vercel.com/font'>
                    Geist
                </ExternalLink>{' '}
                typeface.
            </p>
        </div>
    );
};

export default Footer;
