<script>
    import { onMount } from "svelte";
    import { animate, stagger } from "motion";

    const STORAGE_KEY = "ana_albiol_preloader_visited";

    // Immediate client-side check to avoid showing it if already visited
    let visited = false;
    if (typeof window !== "undefined") {
        visited = sessionStorage.getItem(STORAGE_KEY) === "true";
    }

    let visible = $state(!visited);
    let preloader = $state();
    let svgPaths = $state([]);

    onMount(() => {
        if (visited) return;

        const startAnimation = async () => {
            // 1. Initial State: Set paths to hidden
            svgPaths.forEach((path) => {
                if (path) {
                    path.style.opacity = "0";
                    path.style.transform = "translateY(30px)";
                }
            });

            const activePaths = svgPaths.filter(Boolean);

            // 2. Animate paths
            await animate(
                activePaths,
                {
                    opacity: [0, 1],
                    transform: ["translateY(30px)", "translateY(0px)"],
                },
                {
                    delay: stagger(0.12, { start: 0.2 }),
                    duration: 0.8,
                    easing: [0.22, 1, 0.36, 1],
                },
            ).finished;

            // 3. Scale bloom
            await animate(
                preloader.querySelector(".logo-container"),
                {
                    scale: [1, 1.05, 1],
                    filter: ["blur(0px)", "blur(2px)", "blur(0px)"],
                },
                {
                    duration: 1.2,
                    easing: "ease-in-out",
                },
            ).finished;

            // 4. Final Exit
            await animate(
                preloader,
                {
                    opacity: [1, 0],
                    scale: [1, 1.1],
                    clipPath: [
                        "circle(150% at 50% 50%)",
                        "circle(0% at 50% 50%)",
                    ],
                },
                {
                    duration: 1.5,
                    delay: 0.3,
                    easing: [0.85, 0, 0.15, 1],
                },
            ).finished;

            visible = false;
            sessionStorage.setItem(STORAGE_KEY, "true");
            document.body.style.overflow = "";
        };

        document.body.style.overflow = "hidden";
        startAnimation();
    });
</script>

{#if visible}
    <section bind:this={preloader} class="preloader-overlay" aria-hidden="true">
        <div class="logo-container">
            <svg
                width="834"
                height="224"
                viewBox="0 0 834 224"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    bind:this={svgPaths[0]}
                    d="M87.3403 223.925V203.85C77.0429 216.655 61.4228 223.925 45.0929 223.925C33.3761 224.617 21.6593 220.466 13.1362 212.504C4.61307 204.548 0 193.819 0 182.051C0 135.328 71.7201 127.372 71.7201 106.258C71.7201 85.1448 5.67762 103.837 5.67762 72.6856C5.67762 56.7674 23.4336 45 48.2866 45C83.4369 45 105.09 68.5348 105.09 103.837V188.976C105.09 204.202 110.412 212.856 118.935 210.089L120 213.548L87.3336 223.932L87.3403 223.925ZM17.7493 180.667C17.0396 190.359 20.2332 200.051 26.9821 207.315C33.3761 214.586 42.9571 219.083 52.8996 219.429C67.1004 218.737 79.8817 211.127 87.3403 199.007V97.2581C87.3403 68.8807 72.7847 48.4591 48.9963 48.4591C41.8925 47.7673 34.7955 49.8427 29.1112 54.3395C23.7884 59.1887 20.2332 65.4151 19.8784 72.6856C19.8784 101.755 75.6168 83.4153 75.6168 106.604C75.6168 129.793 17.7493 138.447 17.7493 180.667Z"
                    fill="#964F4C"
                />
                <path
                    bind:this={svgPaths[1]}
                    d="M133 218.443C142.061 218.443 147.98 209.758 147.98 196.889V80.0691C147.98 64.7931 142.428 56.0565 134.048 58.8815L133 55.4287L165.369 45.018V76.9826C172.335 57.5213 190.772 44.6518 211.671 45.018C224.556 44.6518 236.707 49.8833 245.769 58.9338C254.83 68.2982 259.701 80.8539 259.02 93.7234V197.673C259.02 210.177 264.939 218.547 274 218.547V222H227.017V218.547C236.079 218.547 241.631 209.863 241.631 196.993V97.5947C241.631 68.7691 224.556 50.6681 204.757 50.6681C181.082 52.7607 163.327 73.2682 165.422 97.2285V197.673C165.422 210.177 171.34 218.547 180.402 218.547V222H133.052V218.547L133 218.443Z"
                    fill="#964F4C"
                />
                <path
                    bind:this={svgPaths[2]}
                    d="M370.612 223.925V203.85C360.401 216.655 344.911 223.925 328.717 223.925C317.098 224.617 305.479 220.466 297.027 212.504C288.575 204.548 284 193.819 284 182.051C284 135.328 355.122 127.372 355.122 106.258C355.122 85.1448 289.63 103.837 289.63 72.6856C289.63 56.7674 307.238 45 331.884 45C366.742 45 388.214 68.5348 388.214 103.837V188.976C388.214 204.202 393.492 212.856 401.944 210.089L403 213.548L370.606 223.932L370.612 223.925ZM301.601 180.667C300.898 190.359 304.065 200.051 310.757 207.315C317.098 214.586 326.599 219.083 336.459 219.429C350.541 218.737 363.216 211.127 370.612 199.007V97.2581C370.612 68.8807 356.178 48.4591 332.588 48.4591C325.543 47.7673 318.506 49.8427 312.869 54.3395C307.59 59.1887 304.065 65.4151 303.713 72.6856C303.713 101.755 358.987 83.4153 358.987 106.604C358.987 129.793 301.601 138.447 301.601 180.667Z"
                    fill="#964F4C"
                />
                <path
                    bind:this={svgPaths[3]}
                    d="M411 218.52C419.612 218.52 425.237 209.766 425.237 196.794V35.3829C425.237 19.9853 419.96 11.1791 411.996 14.0266L411 10.5463L441.763 0V197.48C441.763 210.083 447.388 218.52 456 218.52V222H411V218.52Z"
                    fill="#964F4C"
                />
                <path
                    bind:this={svgPaths[4]}
                    d="M470.678 203.103V35.1424C470.678 19.8494 465.238 11.1031 457.026 13.9313L456 10.4746L487.717 0V62.1669C496.904 50.3306 510.914 43.365 525.593 43.7316C562.082 43.7316 588 80.6023 588 134.232C588 187.863 561.723 224 523.54 224C501.369 224 489.462 212.844 470.678 203.103ZM570.91 134.913C570.91 83.7447 551.818 48.2881 520.101 48.2881C506.809 48.2881 494.543 55.6203 487.717 67.09V174.979C487.717 202.475 501.677 220.91 522.821 220.91C551.818 220.91 571.269 186.448 570.91 134.966V134.913Z"
                    fill="#964F4C"
                />
                <path
                    bind:this={svgPaths[5]}
                    d="M597 218.493C605.994 218.493 611.869 209.806 611.869 196.931V80.065C611.869 64.783 606.358 56.0429 598.04 58.869L597 55.4148L629.131 45V197.664C629.131 210.172 635.006 218.546 644 218.546V222H597V218.546V218.493Z"
                    fill="#964F4C"
                />
                <path
                    bind:this={svgPaths[6]}
                    d="M713.683 45C752.957 45 779 80.8727 779 133.981C779 187.089 752.957 224 713.683 224C674.409 224 648 187.452 648 133.981C648 80.5093 674.775 45 713.683 45ZM714.049 220.574C742.55 220.574 761.638 185.739 761.638 134.708C761.638 83.676 742.184 48.4782 713.683 48.4782C685.182 48.4782 665.362 82.2744 665.362 133.358C665.362 184.441 685.182 220.626 713.997 220.626L714.049 220.574Z"
                    fill="#964F4C"
                />
                <path
                    bind:this={svgPaths[7]}
                    d="M786 218.52C795.186 218.52 801.186 209.766 801.186 196.794V35.3829C801.186 19.9853 795.557 11.1791 787.062 14.0266L786 10.5463L818.814 0V197.48C818.814 210.083 824.814 218.52 834 218.52V222H786V218.52Z"
                    fill="#964F4C"
                />
            </svg>
        </div>
    </section>
{/if}

<style>
    /* Immediate hiding via CSS before JS hydration if already visited */
    :global([data-preloader-visited="true"]) .preloader-overlay {
        display: none !important;
    }

    .preloader-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(
            circle at center,
            #ffffff 0%,
            var(--color-secondary, #f6f1eb) 100%
        );
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        overflow: hidden;
        will-change: clip-path, opacity, transform;
    }

    .logo-container {
        width: 400px;
        max-width: 85%;
        display: flex;
        justify-content: center;
        align-items: center;
        will-change: transform, filter;
    }

    svg {
        width: 100%;
        height: auto;
    }

    path {
        will-change: transform, opacity;
    }
</style>
