import { Socials } from '.';

const SocialsBox = ({ className }: { className: string }) => {
    return (
        <span className={className}>
            <div className='fixed bottom-24 w-12 ml-[clamp(1%,4vw,12%)] transition tracking-wide text-primary-muted border border-slate-50/10 group-hover:border-slate-50/30 px-2 py-6 rounded-full flex xl:flex-col items-center justify-evenly'>
                <Socials
                    github='https://github.com/emmaoliviamellgren'
                    linkedin='https://linkedin.com/in/emma-m-945954192'
                    email='mellgrenemma0@gmail.com'
                />
            </div>
        </span>
    );
};

export default SocialsBox;
