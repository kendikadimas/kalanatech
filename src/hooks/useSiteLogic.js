import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useSiteLogic() {
  const location = useLocation();

  useEffect(() => {
    // ═══════════════════════════════════
    // INITIALIZATION (Wait for DOM)
    // ═══════════════════════════════════
    let carouselInterval;
    
    // Use a small delay to ensure DOM is ready on route changes
    const timer = setTimeout(() => {
        const navbar = document.getElementById('navbar');
        const navToggle = document.getElementById('navToggle');
        const navLinks = document.getElementById('navLinks');
        const navLinkEls = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('section[id]');
        const tabButtons = document.querySelectorAll('.tab-btn');
        const tabPanels = document.querySelectorAll('.tab-panel');
        const faqItems = document.querySelectorAll('.faq-item');
        const heroCarouselNext = document.getElementById('heroCarouselNext');
        const heroCarouselPrev = document.getElementById('heroCarouselPrev');
        const heroCarouselItems = document.querySelectorAll('#heroCarousel .carousel-item');
        const statNumbers = document.querySelectorAll('.stat-number[data-count]');

        // --- Navbar Scroll ---
        const onScroll = () => {
            if(navbar) navbar.classList.toggle('scrolled', window.scrollY > 20);
        };
        window.addEventListener('scroll', onScroll);
        onScroll();

        // --- Mobile Menu ---
        const handleToggle = () => {
            if(navToggle) navToggle.classList.toggle('active');
            if(navLinks) navLinks.classList.toggle('active');
        };

        if (navToggle) {
            navToggle.addEventListener('click', handleToggle);
        }

        const closeMenu = () => {
            if(navToggle) navToggle.classList.remove('active');
            if(navLinks) navLinks.classList.remove('active');
        };

        navLinkEls.forEach(link => link.addEventListener('click', closeMenu));

        // --- Active Nav on Scroll ---
        const onScrollActiveNav = () => {
            const scrollPos = window.scrollY + 200;
            let currentSection = '';

            sections.forEach(section => {
                const top = section.offsetTop;
                const height = section.offsetHeight;
                if (scrollPos >= top && scrollPos < top + height) {
                    currentSection = section.getAttribute('id');
                }
            });

            navLinkEls.forEach(link => {
                const href = link.getAttribute('href');
                if (!href) return;
                link.classList.remove('active');
                if (currentSection !== '' && href.includes('#' + currentSection)) {
                    link.classList.add('active');
                }
            });
        };
        window.addEventListener('scroll', onScrollActiveNav);

        // --- Pricing Tabs ---
        const handleTabClick = (e) => {
            const btn = e.currentTarget;
            const targetId = btn.getAttribute('data-tab');

            tabButtons.forEach(b => b.classList.remove('active'));
            tabPanels.forEach(p => p.classList.remove('active'));

            btn.classList.add('active');
            const targetPanel = document.getElementById(targetId);
            if (targetPanel) targetPanel.classList.add('active');
        };

        tabButtons.forEach(btn => btn.addEventListener('click', handleTabClick));

        // --- Smooth Scroll ---
        const handleSmoothScroll = (e) => {
            const anchor = e.currentTarget;
            const href = anchor.getAttribute('href');
            if (href && href.startsWith('#')) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const offset = 80;
                    const pos = target.getBoundingClientRect().top + window.pageYOffset - offset;
                    window.scrollTo({ top: pos, behavior: 'smooth' });
                }
            }
        };

        document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', handleSmoothScroll));

        // --- FAQ Accordion ---
        const handleFaqClick = (item) => {
            const isActive = item.classList.contains('active');
            faqItems.forEach(i => i.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        };

        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            if (question) question.onclick = () => handleFaqClick(item);
        });

        // --- Hero Carousel ---
        if (heroCarouselNext && heroCarouselPrev && heroCarouselItems.length > 0) {
            let currentIndex = 0;
            const showItem = (index) => {
                heroCarouselItems.forEach(it => it.classList.remove('active'));
                heroCarouselItems[index].classList.add('active');
            };
            const next = () => { currentIndex = (currentIndex + 1) % heroCarouselItems.length; showItem(currentIndex); };
            const prev = () => { currentIndex = (currentIndex - 1 + heroCarouselItems.length) % heroCarouselItems.length; showItem(currentIndex); };
            
            heroCarouselNext.onclick = () => { next(); start(); };
            heroCarouselPrev.onclick = () => { prev(); start(); };
            
            const start = () => { clearInterval(carouselInterval); carouselInterval = setInterval(next, 5000); };
            start();
        }

        // --- Scroll Reveal ---
        const revealSelectors = [
            '.section-header', '.section-tag', '.section-title', '.section-subtitle',
            '.service-card', '.why-feature', '.why-visual',
            '.portfolio-card', '.price-card', '.article-card',
            '.cta-content', '.hero-visual', '.pricing-tabs', '.reveal'
        ];

        document.querySelectorAll(revealSelectors.join(', ')).forEach(el => el.classList.add('reveal'));

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('visible');
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // --- Counters ---
        const animateCounter = (el) => {
            const target = parseInt(el.dataset.count);
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            const timerCount = setInterval(() => {
                current += step;
                if (current >= target) { current = target; clearInterval(timerCount); }
                el.textContent = Math.floor(current);
            }, 16);
        };

        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) { animateCounter(entry.target); counterObserver.unobserve(entry.target); }
            });
        }, { threshold: 0.5 });
        statNumbers.forEach(el => counterObserver.observe(el));

    }, 100);

    return () => {
        clearTimeout(timer);
        clearInterval(carouselInterval);
        // We rely on browser cleanup for simple event listeners on elements that get unmounted, 
        // but it's cleaner to remove global ones if we tracked them properly. 
        // For simplicity in this vanilla-to-react hybrid, the above is enough.
    };
  }, [location.pathname]);
}
