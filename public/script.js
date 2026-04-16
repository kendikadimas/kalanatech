document.addEventListener('DOMContentLoaded', () => {

    // ═══════════════════════════════════
    // NAVBAR SCROLL EFFECT
    // ═══════════════════════════════════
    const navbar = document.getElementById('navbar');
    const onScroll = () => {
        if(navbar) navbar.classList.toggle('scrolled', window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll);
    onScroll();

    // ═══════════════════════════════════
    // MOBILE MENU TOGGLE
    // ═══════════════════════════════════
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.classList.toggle('nav-open');
        });
    }

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navToggle) navToggle.classList.remove('active');
            if (navLinks) navLinks.classList.remove('active');
            document.body.classList.remove('nav-open');
        });
    });

    // ═══════════════════════════════════
    // ACTIVE NAVIGATION ON SCROLL
    // ═══════════════════════════════════
    const sections = document.querySelectorAll('section[id]');
    const navLinkEls = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
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

            if (currentSection !== '') {
                link.classList.remove('active');
                if (href.includes('#' + currentSection)) {
                    link.classList.add('active');
                }
            }
        });
    });

    // ═══════════════════════════════════
    // FAQ ACCORDION
    // ═══════════════════════════════════
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                faqItems.forEach(i => i.classList.remove('active'));
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });

    // ═══════════════════════════════════
    // PRICING CAROUSEL NAV
    // ═══════════════════════════════════
    const pricingCarousel = document.getElementById('pricingCarousel');
    const pricingPrev = document.getElementById('pricingPrev');
    const pricingNext = document.getElementById('pricingNext');

    if (pricingCarousel && pricingPrev && pricingNext) {
        pricingNext.addEventListener('click', () => {
            const cardWidth = pricingCarousel.querySelector('.price-card').offsetWidth + 16;
            pricingCarousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
        });

        pricingPrev.addEventListener('click', () => {
            const cardWidth = pricingCarousel.querySelector('.price-card').offsetWidth + 16;
            pricingCarousel.scrollBy({ left: -cardWidth, behavior: 'smooth' });
        });
    }

    // ═══════════════════════════════════
    // SCROLL REVEAL ANIMATIONS
    // ═══════════════════════════════════
    const revealSelectors = [
        '.section-header', '.section-tag', '.section-title', '.section-subtitle',
        '.service-card', '.about-stat-item', '.about-content',
        '.portfolio-card', '.price-card', '.article-card',
        '.cta-content', '.faq-item'
    ];

    document.querySelectorAll(revealSelectors.join(', ')).forEach(el => {
        el.classList.add('reveal');
    });

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // ═══════════════════════════════════
    // COUNTER ANIMATION
    // ═══════════════════════════════════
    const statNumbers = document.querySelectorAll('.stat-number');

    const animateCounter = (el) => {
        const target = parseInt(el.getAttribute('data-count'));
        if (isNaN(target)) return;
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            el.textContent = Math.floor(current);
        }, 16);
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(el => counterObserver.observe(el));

    // ═══════════════════════════════════
    // SMOOTH SCROLL
    // ═══════════════════════════════════
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || !href.startsWith('#')) return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offset = 80;
                const pos = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top: pos, behavior: 'smooth' });
            }
        });
    });
});
