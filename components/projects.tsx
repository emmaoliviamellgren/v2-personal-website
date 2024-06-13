import { MdArrowRight } from 'react-icons/md';
import { ProjectBox } from '.';
import { ProjectProps } from '@/types';

const projects: ProjectProps[] = [
    {
        title: 'Weather of Today',
        description: 'I wanted to recreate my weather application that was built with vanilla JavaScript. I was interested in learning Vue, so I thought it would be fun to rebuild it with Vue and learn the language in the process. This web applications offers an intuitive and user-friendly experience, with geolocation API and a multi-day forecast.',
        techStack: ['Vue', 'Netlify', 'Geolocation API'],
        github: 'https://github.com/emmaoliviamellgren/weather-vue',
        demo: 'https://weatheroftoday.netlify.app',
    },
    {
        title: 'TaskWise',
        description: 'An intuitive and user-friendly todo web application built with Next.js and Firebase. Taskwise allows users to manage their tasks efficiently by adding, updating, and deleting todo items. The application also features user authentication and authorization.',
        techStack: ['Next.js', 'Firebase', 'Clerk', 'Vercel'],
        github: 'https://github.com/emmaoliviamellgren/taskwise',
        demo: 'https://taskwise.vercel.app/',
    },
    {
        title: 'E-commerce template',
        description: 'As part of a school assignment, I created a full stack e-commerce template application built with React and Node.js. Users can browse through items, add them to their shopping cart and proceed to checkout process. By creating an account, users can see their order history of previously "purchased" items.',
        techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
        github: 'https://github.com/emmaoliviamellgren/e-commerce',
        demo: 'https://e-commerce-client-5p7v.onrender.com/',
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
            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-6 relative pb-1'>
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
