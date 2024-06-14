import { MdArrowRight } from 'react-icons/md';

type Skill = string[];

const skills: Skill = [
    'Next.js',
    'React',
    'Vue',
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS',
    'Sass',
    'Tailwind',
    'Node.js',
    'Git',
    'Framer-Motion',
    'Firebase',
    'MongoDB',
    'Web Accessibility',
    'Insomnia',
    'Figma',
];

const Skillset = () => {
    return (
        <div className='py-6 md:py-8 lg:py-12'>
            <div className='flex items-center gap-2 pb-2 md:pb-4'>
                <span>
                    <MdArrowRight />
                </span>
                <p className='text-primary'>Skill set</p>
            </div>
            <div className='flex gap-2 flex-wrap'>
                {skills.map((skill) => (
                    <div
                        key={skill}
                        className='bg-gradient-to-t from-slate-700/10 to-slate-500/10 border border-slate-50/10 w-fit py-1 px-4'>
                        <span className='text-primary-muted text-sm'>
                            {skill}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skillset;
