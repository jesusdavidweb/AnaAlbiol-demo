<script>
    import { onMount } from "svelte";
    import { timeline, scroll, animate } from "motion";

    let heroSection, heroTitle, heroSubtitle, heroButtons, heroImage;

    onMount(() => {
        // Animation timeline for text entrance
        const sequence = [
            [
                heroTitle,
                { opacity: [0, 1], y: [40, 0] },
                { duration: 1, easing: "ease-out" },
            ],
            [
                heroSubtitle,
                { opacity: [0, 1], y: [25, 0] },
                { duration: 0.8, at: "-0.5" },
            ],
            [
                heroButtons,
                { opacity: [0, 1], y: [20, 0] },
                { duration: 0.6, at: "-0.4" },
            ],
        ];

        timeline(sequence);

        // Parallax scroll effect
        scroll(animate(heroImage, { y: ["-10%", "10%"] }), {
            target: heroSection,
            offset: ["start start", "end start"],
        });
    });
</script>

<section bind:this={heroSection} class="alt-hero">
    <img
        bind:this={heroImage}
        src="/assets/images/WEB_AnaAlbiolJUN25-26.webp"
        alt="Ana Albiol"
        class="alt-hero__bg"
        width="700"
        height="933"
        fetchpriority="high"
        decoding="async"
    />
    <div class="alt-hero__gradient"></div>

    <div class="alt-hero__text">
        <h1 bind:this={heroTitle} class="alt-hero__title">
            Soy Ana Albiol
            <em>y el plan es vivir antes de morir.</em>
        </h1>
        <p bind:this={heroSubtitle} class="alt-hero__subtitle">
            Me dirijo a personas que funcionan, rinden y cumplen. <br />
            <strong>Pero sienten que hay otra forma de vivir.</strong> <br /><br
            />
            Y no van a conformarse. <br />
            Para que
            <span class="highlight-text"
                >un martes cualquiera te emocione levantarte</span
            >
            y
            <span class="highlight-text"
                >cada noche sientas que podrías morir a gusto.</span
            >
        </p>
        <div bind:this={heroButtons} class="alt-hero__buttons">
            <a href="/en-privado" class="alt-hero__btn alt-hero__btn--filled"
                >EL MAMBO: EN PRIVADO</a
            >
            <a href="/quien-soy" class="alt-hero__btn alt-hero__btn--outline"
                >Conóceme</a
            >
        </div>
    </div>
</section>

<style>
    /* ===== Full-screen Hero with image background ===== */
    .alt-hero {
        position: relative;
        width: 100%;
        height: 100vh;
        height: 100dvh;
        min-height: 600px;
        overflow: hidden;
    }

    /* Background image — keeps face at top */
    .alt-hero__bg {
        position: absolute;
        inset: -15% 0; /* Pre-enlarge for parallax */
        width: 100%;
        height: 130%; /* Taller for movement */
        object-fit: cover;
        object-position: center top; /* Start with face visible */
        z-index: 1;
        will-change: transform;
    }

    /* Gradient overlay — only lower portion */
    .alt-hero__gradient {
        position: absolute;
        inset: 0;
        z-index: 2;
        background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.75) 0%,
            rgba(0, 0, 0, 0.45) 35%,
            rgba(0, 0, 0, 0.05) 60%,
            transparent 70%
        );
    }
    /* Rest of the styles ... kept identical */
    .alt-hero__text {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 10;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 0 2rem 5rem;
        background: none;
        border-radius: 0;
        box-shadow: none;
    }

    .alt-hero__title {
        font-family: var(--font-heading, "Lora", serif);
        font-weight: 500;
        font-style: italic;
        font-size: 3.2rem;
        line-height: 1.1;
        color: #fff;
        margin: 0 0 1.2rem;
        text-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);
        opacity: 0;
    }

    .alt-hero__title em {
        display: block;
        font-weight: 400;
        font-size: 0.88em;
        margin-top: 0.4rem;
    }

    .alt-hero__subtitle {
        font-family: var(--font-body, sans-serif);
        font-size: 1.15rem;
        line-height: 1.6;
        color: rgba(255, 255, 255, 0.85);
        max-width: 600px;
        margin: 0 0 1.8rem;
        text-shadow: 0 1px 6px rgba(0, 0, 0, 0.35);
        opacity: 0;
    }

    .alt-hero__subtitle strong {
        color: #fff;
        font-weight: 600;
    }

    .highlight-text {
        color: #f6f1eb;
        font-style: italic;
        background: rgba(150, 79, 76, 0.4);
        padding: 0.1rem 0.4rem;
        border-radius: 4px;
        white-space: wrap;
    }

    .alt-hero__buttons {
        display: flex;
        gap: 1.2rem;
        opacity: 0;
    }

    .alt-hero__btn {
        display: inline-block;
        padding: 0.75rem 2.4rem;
        border-radius: 50px;
        text-transform: uppercase;
        font-weight: 600;
        font-size: 0.85rem;
        letter-spacing: 1px;
        cursor: pointer;
        transition: all 0.3s ease;
        text-decoration: none;
        white-space: nowrap;
    }

    .alt-hero__btn--filled {
        background: #fff;
        color: #1a1a1a;
        border: 2px solid #fff;
    }

    .alt-hero__btn--filled:hover {
        background: transparent;
        color: #fff;
        transform: translateY(-3px);
    }

    .alt-hero__btn--outline {
        background: transparent;
        color: #fff;
        border: 2px solid rgba(255, 255, 255, 0.7);
    }

    .alt-hero__btn--outline:hover {
        background: #fff;
        color: #1a1a1a;
        transform: translateY(-3px);
    }

    @media (max-width: 768px) {
        .alt-hero__bg {
            object-position: center top;
        }

        .alt-hero__gradient {
            background: linear-gradient(
                to top,
                rgba(0, 0, 0, 0.85) 0%,
                rgba(0, 0, 0, 0.55) 45%,
                rgba(0, 0, 0, 0.1) 75%,
                transparent 100%
            );
        }

        .alt-hero__text {
            padding: 0 1.5rem 3rem;
            width: 100%;
        }

        .alt-hero__title {
            font-size: 2.2rem;
            margin-bottom: 0.8rem;
        }

        .alt-hero__subtitle {
            font-size: 1rem;
            margin-bottom: 1.5rem;
        }

        .alt-hero__buttons {
            flex-direction: column;
            width: 100%;
            max-width: 320px;
            gap: 1rem;
        }

        .alt-hero__btn {
            width: 100%;
            text-align: center;
            padding: 0.9rem 1.2rem;
            white-space: normal;
            line-height: 1.3;
        }
    }

    @media (min-width: 1200px) {
        .alt-hero__title {
            font-size: 4rem;
        }

        .alt-hero__subtitle {
            font-size: 1.3rem;
        }
    }
</style>
