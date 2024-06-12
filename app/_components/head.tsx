const Head = () => {
    return (
        <div className='flex md:justify-center md:items-center flex-col gap-2 h-[15rem] md:h-[20rem]'>
            <h1 className='title'>Emma Mellgren</h1>
            <h3 className='subtitle'>Frontend Developer</h3>
            <div className='md:py-6 max-w-[750px]'>
                <p className='text-primary-muted'>
                    Currently studying frontend development at KYH, while
                    mastering the art of crafting engaging user interfaces. I
                    {"'"}m eager to learn and grow in tech!
                </p>
            </div>
        </div>
    );
};

export default Head;
