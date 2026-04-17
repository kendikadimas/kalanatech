"use client";

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            className={`fixed bottom-24 right-8 z-50 p-3 bg-blue-600 text-white rounded-full shadow-lg transition-all duration-300 hover:bg-blue-700 hover:-translate-y-1 ${isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 translate-y-10'}`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            <ArrowUp size={24} />
        </button>
    );
};

export default ScrollToTop;
