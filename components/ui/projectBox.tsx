import { ProjectProps } from '@/types';
import { GoLinkExternal } from "react-icons/go";
import { FiGithub } from 'react-icons/fi';

const ProjectBox = ({
    title,
    description,
    techStack,
    github,
    demo,
}: ProjectProps) => {
    return (
        <span className='p-4 rounded-md bg-slate-800/30 transition-all group hover:bg-slate-800/50 shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] '>
            <div className='flex justify-between'>
                <h2>{title}</h2>
                <div className='flex gap-2 items-center pr-2'>
                    <a
                        href={github}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='View on GitHub'
                        className='text-secondary group-hover:text-primary transition hover:-translate-y-0.5'>
                        <FiGithub className='size-[1.1rem]'/>
                    </a>
                    {demo && (
                        <a
                            href={demo}
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label='View in browser'
                            className='text-secondary group-hover:text-primary transition hover:-translate-y-0.5'>
                            <GoLinkExternal className='size-5'/>
                        </a>
                    )}
                </div>
            </div>
            <p className='text-primary-muted'>{description}</p>
            <div className='flex gap-2'>
                {techStack.map((tech, index) => (
                    <span key={index}>{tech}</span>
                ))}
            </div>
        </span>
    );
};

export default ProjectBox;
