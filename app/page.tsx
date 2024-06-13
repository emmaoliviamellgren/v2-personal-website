import { Head, Navigation, About, Skillset } from '@/components';

const IndexPage = () => {
    return (
        <div className='container'>
            <Navigation />
            <Head />
            <About />
            <Skillset />
        </div>
    );
};

export default IndexPage;
