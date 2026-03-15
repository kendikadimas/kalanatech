document.addEventListener('DOMContentLoaded', () => {

    // ═══════════════════════════════════
    // NAVBAR SCROLL EFFECT
    // ═══════════════════════════════════
    const navbar = document.getElementById('navbar');
    const onScroll = () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll);
    onScroll();

    // ═══════════════════════════════════
    // MOBILE MENU TOGGLE
    // ═══════════════════════════════════
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
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
            link.classList.remove('active');
            if (link.getAttribute('href') && link.getAttribute('href').includes(currentSection)) {
                link.classList.add('active');
            }
        });
    });

    // ═══════════════════════════════════
    // PRICING TABS
    // ═══════════════════════════════════
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-tab');

            // Deactivate all
            tabButtons.forEach(b => b.classList.remove('active'));
            tabPanels.forEach(p => p.classList.remove('active'));

            // Activate target
            btn.classList.add('active');
            const targetPanel = document.getElementById(targetId);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });

    // ═══════════════════════════════════
    // SCROLL REVEAL ANIMATIONS
    // ═══════════════════════════════════
    const revealSelectors = [
        '.section-header', '.section-tag', '.section-title', '.section-subtitle',
        '.service-card', '.why-feature', '.why-visual',
        '.portfolio-card', '.price-card', '.article-card',
        '.cta-content', '.hero-visual',
        '.stats-bar', '.pricing-tabs',
        '.articles-top', '.why-content .section-desc',
        '.why-content .section-title'
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
    // STAGGERED DELAYS FOR GRIDS
    // ═══════════════════════════════════
    const staggerContainers = [
        '.services-grid',
        '.portfolio-grid',
        '.pricing-grid',
        '.articles-grid',
        '.stats-grid',
        '.why-features'
    ];

    staggerContainers.forEach(selector => {
        const container = document.querySelector(selector);
        if (container) {
            Array.from(container.children).forEach((child, i) => {
                child.style.transitionDelay = `${i * 0.1}s`;
            });
        }
    });

    // ═══════════════════════════════════
    // COUNTER ANIMATION
    // ═══════════════════════════════════
    const statNumbers = document.querySelectorAll('.stat-number[data-count]');

    const animateCounter = (el) => {
        const target = parseInt(el.getAttribute('data-count'));
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
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offset = 80;
                const pos = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top: pos, behavior: 'smooth' });
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
                
                // Close all
                faqItems.forEach(i => i.classList.remove('active'));
                
                // Toggle current
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });

});
