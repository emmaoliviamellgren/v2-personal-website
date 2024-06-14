import {
    Head,
    About,
    Skillset,
    Projects,
    Footer,
    SocialsBox,
} from '@/components';

const IndexPage = () => {
    return (
        <div className='flex'>
            <aside className='hidden xl:flex'>
                <SocialsBox />
            </aside>
            <main className='container'>
                <Head />
                <About />
                <Skillset />
                <Projects />
                <Footer />
            </main>
        </div>
    );
};

export default IndexPage;
