import { Heading } from '.';

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
        <>
            <Heading contentTitle='Skill set' />
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
        </>
    );
};

export default Skillset;
