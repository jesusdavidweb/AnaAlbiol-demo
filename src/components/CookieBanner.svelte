<script>
    import { onMount } from "svelte";
    import { animate } from "motion";

    let show = $state(false);

    onMount(() => {
        // Check if user has already given consent
        const consent = localStorage.getItem("hasConsent");
        if (!consent) {
            show = true;
            // Fade in animation after component mounts
            setTimeout(() => {
                const banner = document.getElementById("cookie-banner");
                if (banner) {
                    animate(
                        banner,
                        { opacity: [0, 1], y: [50, 0] },
                        { duration: 0.8, easing: "ease-out" },
                    );
                }
            }, 500);
        }
    });

    function accept() {
        localStorage.setItem("hasConsent", "accepted");
        hideBanner();
    }

    function decline() {
        localStorage.setItem("hasConsent", "declined");
        hideBanner();
    }

    function hideBanner() {
        const banner = document.getElementById("cookie-banner");
        if (banner) {
            animate(
                banner,
                { opacity: 0, y: 50 },
                { duration: 0.5 },
            ).finished.then(() => {
                show = false;
            });
        } else {
            show = false;
        }
    }
</script>

{#if show}
    <div
        id="cookie-banner"
        class="cookie-banner"
        role="dialog"
        aria-label="Configuración de cookies"
        style="opacity: 0; transform: translateY(50px);"
    >
        <div class="cookie-content">
            <div class="cookie-text">
                <h3>Tu privacidad es importante</h3>
                <p>
                    Utilizamos cookies propias y de terceros para mejorar tu
                    experiencia y analizar el tráfico. Puedes aceptar todas las
                    cookies o configurar tus preferencias. Consulta nuestra <a
                        href="/cookies">Política de Cookies</a
                    >.
                </p>
            </div>
            <div class="cookie-actions">
                <button
                    type="button"
                    class="cookie-btn cookie-btn-secondary"
                    onclick={decline}>Solo necesarias</button
                >
                <button
                    type="button"
                    class="cookie-btn cookie-btn-primary"
                    onclick={accept}>Aceptar todas</button
                >
            </div>
        </div>
    </div>
{/if}

<style>
    .cookie-banner {
        position: fixed;
        bottom: 2rem;
        left: 2rem;
        right: 2rem;
        z-index: 10000;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.3);
        padding: 2rem;
        border-radius: 30px;
        box-shadow: 0 20px 50px rgba(150, 79, 76, 0.2);
        max-width: 900px;
        margin: 0 auto;
    }

    @media (max-width: 768px) {
        .cookie-banner {
            bottom: 1rem;
            left: 1rem;
            right: 1rem;
            padding: 1.5rem;
            border-radius: 20px;
        }
    }

    .cookie-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 3rem;
    }

    @media (max-width: 991px) {
        .cookie-content {
            flex-direction: column;
            gap: 1.5rem;
            text-align: center;
        }
    }

    .cookie-text h3 {
        font-family: var(--font-heading);
        color: var(--color-primary, #964f4c);
        margin-bottom: 0.5rem;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 500;
    }

    .cookie-text p {
        font-family: var(--font-body, "Helvetica", "Arial", sans-serif);
        font-size: 0.95rem;
        color: var(--color-text-light, #333333);
        margin: 0;
        line-height: 1.6;
    }

    .cookie-text a {
        color: var(--color-primary, #964f4c);
        text-decoration: underline;
        font-weight: 600;
    }

    .cookie-actions {
        display: flex;
        gap: 1rem;
        flex-shrink: 0;
    }

    @media (max-width: 600px) {
        .cookie-actions {
            width: 100%;
            flex-direction: column-reverse;
        }

        .cookie-actions button {
            width: 100%;
        }
    }

    .cookie-btn {
        padding: 1rem 2rem;
        border-radius: 50px;
        font-size: 0.85rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        cursor: pointer;
        transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        border: 1.5px solid var(--color-primary, #964f4c);
        font-family: var(--font-body, "Helvetica", "Arial", sans-serif);
    }

    .cookie-btn-primary {
        background: var(--color-primary, #964f4c);
        color: white;
    }

    .cookie-btn-primary:hover {
        background: transparent;
        color: var(--color-primary, #964f4c);
        transform: translateY(-2px);
    }

    .cookie-btn-secondary {
        background: transparent;
        color: var(--color-primary, #964f4c);
    }

    .cookie-btn-secondary:hover {
        background: rgba(150, 79, 76, 0.05);
        transform: translateY(-2px);
    }
</style>
