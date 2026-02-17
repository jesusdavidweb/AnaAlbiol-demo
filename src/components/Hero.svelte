<script>
    import { onMount } from "svelte";
    import { timeline, stagger } from "motion";

    let heroTitle, heroSubtitle, heroButtons, heroImage;

    onMount(() => {
        // Elements are initially hidden by CSS or need to be hidden here to avoid FOUC?
        // global.css sets opacity: 0 for .hero-content h1 etc.

        const sequence = [
            [heroTitle, { opacity: [0, 1], y: [20, 0] }, { duration: 0.8 }],
            [
                heroSubtitle,
                { opacity: [0, 1], y: [20, 0] },
                { duration: 0.8, at: "-0.6" },
            ],
            [
                heroButtons.children,
                { opacity: [0, 1], scale: [0.9, 1] },
                { duration: 0.5, delay: stagger(0.1), at: "-0.4" },
            ],
            [
                heroImage,
                { opacity: [0, 1], scale: [0.95, 1], rotate: [-2, 0] },
                { duration: 1, easing: [0.34, 1.56, 0.64, 1], at: "-0.8" },
            ],
        ];

        timeline(sequence);

        // Interactive Magnify Effect
        if (heroImage) {
            heroImage.addEventListener("mousemove", (e) => {
                const { left, top, width, height } =
                    heroImage.getBoundingClientRect();
                const x = (e.clientX - left) / width - 0.5;
                const y = (e.clientY - top) / height - 0.5;

                // Simple direct manipulation or import animate if needed repeatedly
                // Using style for perf or motion's animate
                heroImage.style.transform = `perspective(1000px) rotateX(${y * -2}deg) rotateY(${x * 2}deg) scale(1.02)`;
            });

            heroImage.addEventListener("mouseleave", () => {
                heroImage.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale(1)`;
                // Or use transition in CSS
            });
        }
    });
</script>

<section class="hero-new-design">
    <div class="hero-wrapper">
        <div class="hero-content fade-up">
            <h1 bind:this={heroTitle}>
                Soy Ana Albiol <em>y el plan es vivir antes de morir.</em>
            </h1>
            <p bind:this={heroSubtitle} class="hero-subtitle">
                Me dirijo a personas que funcionan, rinden y cumplen. <strong
                    >Pero sienten que hay otra forma de vivir.</strong
                >
            </p>
            <div bind:this={heroButtons} class="hero-buttons">
                <a href="/en-privado" class="btn btn-primary">En Privado</a>
                <a href="/quien-soy" class="btn btn-primary">Conóceme</a>
            </div>
        </div>
        <div class="hero-image-wrapper fade-up">
            <img
                bind:this={heroImage}
                src="/assets/images/WEB_AnaAlbiolJUN25-26.webp"
                alt="Ana Albiol"
                width="700"
                height="933"
                fetchpriority="high"
                decoding="async"
            />
        </div>
    </div>
</section>

<style>
    /* Ensure opacity 0 logic from global css works, or enforce it here to be safe */

    h1,
    .hero-subtitle,
    .hero-buttons :global(.btn),
    .hero-image-wrapper img {
        opacity: 0;
    }
</style>
