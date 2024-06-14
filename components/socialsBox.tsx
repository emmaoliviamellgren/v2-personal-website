import { Socials } from '.';

const SocialsBox = ({ className }: { className: string }) => {
    return (
        <span className={className}>
            <div className='fixed bottom-32 w-[clamp(150px,10vw,350px)] h-12 ml-[clamp(1%,4vw,12%)] transition tracking-wide text-primary-muted border border-slate-50/10 group-hover:border-slate-50/30 py-1 px-4 rounded-full flex items-center justify-evenly'>
                <Socials
                    className='!size-2'
                    github='https://github.com/emmaoliviamellgren'
                    linkedin='https://linkedin.com/in/emma-m-945954192'
                    email='mellgrenemma0@gmail.com'
                />
            </div>
        </span>
    );
};

export default SocialsBox;
