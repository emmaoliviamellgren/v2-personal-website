import Navigation from '../components/navigation';
import Head from '../components/head';
import About from '../components/about';
import Skillset from '../components/skillset';

const Index = () => {
    return (
        <div className='mx-auto min-h-screen max-w-screen-lg px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0'>
            <Navigation />
            <Head />
            <About />
            <Skillset />
        </div>
    );
};

export default Index;
