import { animate, stagger, inView, timeline } from "https://cdn.jsdelivr.net/npm/motion@10.18.0/+esm";

document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       1. Global Page Entry Animation
       ========================================= */
    animate(
        "body",
        { opacity: [0, 1] },
        { duration: 0.8, easing: "ease-out" }
    );

    /* =========================================
       2. Hero Section Animations
       ========================================= */

    // Staggered Text Reveal in Hero
    const heroTitle = document.querySelector(".hero-content h1");
    const heroSubtitle = document.querySelector(".hero-content .hero-subtitle");
    const heroButtons = document.querySelectorAll(".hero-buttons .btn");
    const heroImage = document.querySelector(".hero-image-wrapper img");
    const watermark = document.querySelector(".hero-watermark");

    // Timeline for Hero Sequence
    const heroSequence = [
        [heroTitle, { opacity: [0, 1], y: [20, 0] }, { duration: 0.8 }],
        [heroSubtitle, { opacity: [0, 1], y: [20, 0] }, { duration: 0.8, at: "-0.6" }],
        [heroButtons, { opacity: [0, 1], scale: [0.9, 1] }, { duration: 0.5, delay: stagger(0.1), at: "-0.4" }],
        [heroImage, { opacity: [0, 1], scale: [0.95, 1], rotate: [-2, 0] }, { duration: 1, easing: "spring(0.5, 50, 10)", at: "-0.8" }],
        [watermark, { opacity: [0, 0.08], rotate: [-15, -10], scale: [0.8, 1] }, { duration: 1.2, at: "-0.8" }]
    ];

    timeline(heroSequence);


    /* =========================================
       3. Scroll Animations (ScrollTrigger-like)
       ========================================= */

    // Value Proposition Section
    inView(".value-prop .container", ({ target }) => {
        animate(
            target.children,
            { opacity: [0, 1], y: [30, 0] },
            { duration: 0.8, delay: stagger(0.2) }
        );
    });

    // Navigation Cards (Hub) - Staggered Entry
    inView(".steps-grid", ({ target }) => {
        animate(
            target.querySelectorAll(".step-item"),
            { opacity: [0, 1], y: [50, 0] },
            {
                duration: 0.6,
                delay: stagger(0.2),
                easing: "spring(0.4, 60, 10)" // Bouncy effect
            }
        );
    });

    // About Section
    inView(".about-content", ({ target }) => {
        animate(
            target.children,
            { opacity: [0, 1], x: [-20, 0] },
            { duration: 0.8, delay: stagger(0.2) }
        );
    });

    // Newsletter Section
    inView(".newsletter .container", ({ target }) => {
        animate(
            target.children,
            { opacity: [0, 1], scale: [0.9, 1] },
            { duration: 0.6, delay: stagger(0.1) }
        );
    });

    /* =========================================
       4. Page-Specific Grid Animations
       ========================================= */

    // Formations Grid
    inView(".formations-grid", ({ target }) => {
        animate(
            target.querySelectorAll(".formation-card"),
            { opacity: [0, 1], y: [40, 0] },
            { duration: 0.6, delay: stagger(0.15) }
        );
    });

    // Topics Grid (Charlas)
    inView(".topics-grid", ({ target }) => {
        animate(
            target.querySelectorAll(".topic-pill"),
            { opacity: [0, 1], scale: [0.8, 1] },
            { duration: 0.5, delay: stagger(0.1), easing: "spring(0.5, 50, 10)" }
        );
    });

    // Values Grid (En Privado)
    inView(".values-grid-large", ({ target }) => {
        animate(
            target.querySelectorAll(".value-item"),
            { opacity: [0, 1], y: [30, 0], rotate: [-10, 0] },
            { duration: 0.8, delay: stagger(0.2), easing: "back.out(2)" }
        );
    });

    /* =========================================
       5. Generic Fade-Up Fallback
       ========================================= */
    // Catches any .fade-up element not already handled by specific logic above
    // We use a small delay to allow specific observers to claim elements if they conflict (though logic here is additive)
    const fadeUpElements = document.querySelectorAll('.fade-up');
    fadeUpElements.forEach(el => {
        inView(el, () => {
            animate(el, { opacity: [0, 1], y: [40, 0] }, { duration: 0.8, easing: "ease-out" });
        });
    });

    // Footer
    inView(".footer-links a", ({ target }) => {
        animate(
            target,
            { opacity: [0, 1], y: [10, 0] },
            { duration: 0.5, delay: stagger(0.05) }
        );
    });


    /* =========================================
       4. Hover Effects (Micro-interactions)
       ========================================= */

    // Interactive Magnify Effect on Hero Image
    if (heroImage) {
        heroImage.addEventListener("mousemove", (e) => {
            const { left, top, width, height } = heroImage.getBoundingClientRect();
            const x = (e.clientX - left) / width - 0.5;
            const y = (e.clientY - top) / height - 0.5;

            animate(heroImage, { x: x * 20, y: y * 20 }, { duration: 0.2 });
        });

        heroImage.addEventListener("mouseleave", () => {
            animate(heroImage, { x: 0, y: 0 }, { duration: 0.5 });
        });
    }

    // Button Hover State managed nicely by CSS, but could enhance with JS spring if needed.
    // Keeping CSS for buttons for performance/simplicity as CSS transitions are usually smoother for simple hovers.


    /* =========================================
       5. Mobile Menu Logic (Kept from original)
       ========================================= */
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const menuClose = document.querySelector('.mobile-menu-close');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuLinks = document.querySelectorAll('.mobile-menu a');

    function toggleMenu() {
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';

        if (mobileMenu.classList.contains('active')) {
            // Animate links in
            animate(
                menuLinks,
                { opacity: [0, 1], x: [-50, 0] },
                { duration: 0.5, delay: stagger(0.1) }
            );
        }
    }

    if (menuToggle) menuToggle.addEventListener('click', toggleMenu);
    if (menuClose) menuClose.addEventListener('click', toggleMenu);

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu.classList.contains('active')) toggleMenu();
        });
    });


    /* =========================================
       6. Header Scroll Effect
       ========================================= */
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });


    /* =========================================
       7. Cookie Banner
       ========================================= */
    if (!localStorage.getItem('cookieConsent')) {
        createCookieBanner();
    }

    function createCookieBanner() {
        const banner = document.createElement('div');
        banner.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background-color: white;
            padding: 20px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.2);
            border-radius: 8px;
            display: flex;
            align-items: center;
            gap: 20px;
            z-index: 2000;
            width: 90%;
            max-width: 600px;
            opacity: 0;
        `;

        banner.innerHTML = `
            <p style="margin:0; font-size:0.9rem; color:#333;">
                Utilizamos cookies para asegurar que damos la mejor experiencia al usuario en nuestra web. 
                Si sigues utilizando este sitio asumiremos que estás de acuerdo.
            </p>
            <button id="acceptCookies" class="btn btn-primary" style="padding: 0.5rem 1rem; white-space: nowrap;">Aceptar</button>
        `;

        document.body.appendChild(banner);

        // Animate banner in
        animate(banner, { opacity: [0, 1], y: [20, 0] }, { duration: 0.5, delay: 1 });

        document.getElementById('acceptCookies').addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'true');
            animate(banner, { opacity: 0, y: 20 }, { duration: 0.5 }).finished.then(() => banner.remove());
        });
    }

});
