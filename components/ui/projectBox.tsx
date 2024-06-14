import { ProjectProps } from '@/types';
import { GoLinkExternal } from 'react-icons/go';
import { FiGithub } from 'react-icons/fi';
import { ExternalLink } from '..';

const ProjectBox = ({
    title,
    description,
    techStack,
    github,
    demo,
}: ProjectProps) => {
    return (
        <span className='flex flex-col justify-between h-full p-4 rounded-md bg-slate-800/30 transition-all group hover:bg-slate-800/50 shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] '>
            <div>
                <div className='flex justify-between pt-2 pb-6'>
                    <h2 className='text-xl group-hover:drop-shadow-[0_1px_2px_rgba(148,163,184,0.8)]'>
                        {title}
                    </h2>
                    <div className='flex gap-2 items-center pr-2'>
                        <ExternalLink
                            href={github}
                            aria-label='View on GitHub'
                            className='text-secondary group-hover:text-primary transition hover:-translate-y-0.5'>
                            <FiGithub className='size-[1.1rem]' />
                        </ExternalLink>
                        {demo && (
                            <ExternalLink
                                href={demo}
                                aria-label='View in browser'
                                className='text-secondary group-hover:text-primary transition hover:-translate-y-0.5'>
                                <GoLinkExternal className='size-5' />
                            </ExternalLink>
                        )}
                    </div>
                </div>
                <p className='text-primary-muted text-[15px]'>{description}</p>
            </div>
            <div className='flex gap-2 pt-6'>
                {techStack.map((tech, index) => (
                    <span
                        key={index}
                        className='text-xs transition-all tracking-wide text-primary-muted border border-slate-50/10 group-hover:border-slate-50/30 w-fit py-1 px-4 rounded-full cursor-default'>
                        {tech}
                    </span>
                ))}
            </div>
        </span>
    );
};

export default ProjectBox;
