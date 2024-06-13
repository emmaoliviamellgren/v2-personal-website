import { MdArrowRight } from 'react-icons/md';
import { ProjectBox } from '.';
import { ProjectProps } from '@/types';

const projects: ProjectProps[] = [
    {
        title: 'Project 1',
        description: 'This is a description of Project 1.',
        techStack: ['React', 'TypeScript', 'Tailwind CSS'],
        github: 'https://github.com/username/project-1',
        demo: 'https://project-1-demo.com',
    },
    {
        title: 'Project 2',
        description: 'This is a description of Project 2.',
        techStack: ['React', 'Redux', 'Firebase'],
        github: 'https://github.com/username/project-2',
    },
];

const Projects = () => {
    return (
        <div className='py-6 md:py-8 lg:py-12'>
            <div className='flex items-center gap-2 pb-2 md:pb-4'>
                <span>
                    <MdArrowRight />
                </span>
                <p className='text-primary'>Projects</p>
            </div>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-2 relative pb-1'>
                {projects.map((project, index) => (
                    <ProjectBox
                        key={index}
                        {...project}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
