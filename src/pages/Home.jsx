import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/home/Hero';
import Approach from '../components/home/Approach';
import WorkIndex from '../components/home/WorkIndex';
import Services from '../components/home/Services';
import Toolkit from '../components/home/Toolkit';
import Lab from '../components/home/Lab';
import { scrollToTarget } from '../lib/scroll';

const Home = () => {
    const location = useLocation();

    // Arriving from another page via a nav link: land on the requested section
    useEffect(() => {
        const id = location.state?.scrollTo;
        if (!id) return;
        const t = setTimeout(() => scrollToTarget(`#${id}`, { immediate: true }), 50);
        window.history.replaceState({}, document.title);
        return () => clearTimeout(t);
    }, [location.state]);

    return (
        <main>
            <Hero />
            <Approach />
            <WorkIndex />
            <Services />
            <Toolkit />
            <Lab />
            <div className="h-24 md:h-40" />
        </main>
    );
};

export default Home;
