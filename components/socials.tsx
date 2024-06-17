import { SocialsProps } from '@/types';
import { ExternalLink } from '.';
import { GithubIcon, LinkedinIcon, EmailIcon } from './icons';

const Socials = ({ github, linkedin, email }: SocialsProps) => {
    return (
        <div className='flex xl:flex-col items-center space-x-2 xl:space-y-4 xl:space-x-0 md:my-6 xl:my-0'>
            <ExternalLink
                href={github}
                ariaLabel='GitHub profile'>
                <GithubIcon className='size-5 text-primary-muted xl:text-secondary transition hover:text-primary xl:group-hover:text-primary' />
            </ExternalLink>
            <ExternalLink
                href={linkedin}
                ariaLabel='LinkedIn profile'>
                <LinkedinIcon className='size-[1.6rem] text-primary-muted transition xl:text-secondary hover:text-primary xl:group-hover:text-primary' />
            </ExternalLink>
            <ExternalLink
                href={`mailto:${email}`}
                ariaLabel='Send email'>
                <EmailIcon className='size-[1.4rem] text-primary-muted transition xl:text-secondary hover:text-primary xl:group-hover:text-primary' />
            </ExternalLink>
        </div>
    );
};

export default Socials;
