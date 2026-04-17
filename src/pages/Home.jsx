import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Articles from '../components/Articles';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Services />
            <Portfolio />
            <About />
            <Pricing />
            <FAQ />
            <Articles />
            <CTA />
            <Footer />
        </>
    );
};

export default Home;
