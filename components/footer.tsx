import { ExternalLink } from '.';

const Footer = () => {
    return (
        <div className='flex justify-center text-center items-end md:items-center relative h-16 px-6 md:h-24'>
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
