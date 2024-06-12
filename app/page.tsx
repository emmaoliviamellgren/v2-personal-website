import Navigation from './_components/navigation';
import Head from './_components/head';
import About from './_components/about';
import Skillset from './_components/skillset';

const RootPage = () => {
    return (
        <div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0'>
            <Navigation />
            <Head />
            <About />
            <Skillset />
        </div>
    );
};

export default RootPage;
