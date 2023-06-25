import Footer from '@/components/Footer';
import Header from '@/components/Header';
import MainContent from '@/components/MainContent';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    );
}
