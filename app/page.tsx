import { About, Head, Navigation, Skillset, Projects } from '@/components';

const IndexPage = () => {
    return (
        <div className='container'>
            <Navigation />
            <Head />
            <About />
            <Skillset />
            <Projects />
        </div>
    );
};

export default IndexPage;
