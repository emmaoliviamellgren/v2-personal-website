import { Head, Socials, About, Skillset, Projects, Footer } from '@/components';

const IndexPage = () => {
    return (
        <div className='container'>
            <Head />
            <Socials
                github='https://github.com/emmaoliviamellgren'
                linkedin='https://linkedin.com/in/emma-m-945954192'
                email='mellgrenemma0@gmail.com'
            />
            <About />
            <Skillset />
            <Projects />
            <Footer />
        </div>
    );
};

export default IndexPage;
