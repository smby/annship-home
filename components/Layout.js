import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';

const Layout = ({ children, title = "Annship - Global Logistics Partner", description = "Streamline your shipping with Annship. Get the best rates and reliable service." }) => {
    return (
        <div className="min-h-screen bg-surface flex flex-col font-sans text-secondary">
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main className="flex-grow pt-20">
                {children}
            </main>

            <Footer />
        </div>
    );
};

export default Layout;
