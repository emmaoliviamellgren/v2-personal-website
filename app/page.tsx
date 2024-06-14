import { Head, Socials, About, Skillset, Projects, Footer } from '@/components';

const IndexPage = () => {
    return (
        <div className='container'>
            <Head />
            <Socials />
            <About />
            <Skillset />
            <Projects />
            <Footer />
        </div>
    );
};

export default IndexPage;
