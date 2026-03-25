<script>
    import { onMount } from "svelte";
    import logoColor from "../assets/images/LOGO_AnaAlbiol_Color.svg";

    let { theme = "light", currentPath = "" } = $props();

    let isScrolled = $state(false);
    let isMenuOpen = $state(false);

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        if (typeof document !== "undefined") {
            document.body.style.overflow = isMenuOpen ? "hidden" : "";
        }
    }

    onMount(() => {
        const handleScroll = () => {
            isScrolled = window.scrollY > 50;
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });
</script>

<header
    id="header"
    class="header"
    class:scrolled={isScrolled}
    class:header-dark-bg={theme === "dark"}
>
    <div class="header-container">
        <div class="logo">
            <a href="/"
                ><img
                    src={logoColor.src}
                    alt="Ana Albiol Logo"
                    width="149"
                    height="40"
                    fetchpriority="high"
                    loading="eager"
                /></a
            >
        </div>
        <nav class="nav-desktop">
            <ul>
                <li>
                    <a
                        href="/libros"
                        class:active={currentPath === "/libros" ||
                            currentPath === "/libros/"}>Libros</a
                    >
                </li>
                <li>
                    <a
                        href="/formaciones"
                        class:active={currentPath === "/formaciones" ||
                            currentPath === "/formaciones/"}>Formaciones</a
                    >
                </li>
                <li>
                    <a
                        href="/charlas"
                        class:active={currentPath === "/charlas" ||
                            currentPath === "/charlas/"}>Charlas</a
                    >
                </li>
                <li>
                    <a
                        href="/quien-soy"
                        class:active={currentPath === "/quien-soy" ||
                            currentPath === "/quien-soy/"}>Quién soy</a
                    >
                </li>
                <li>
                    <a
                        href="/contacto"
                        class:active={currentPath === "/contacto" ||
                            currentPath === "/contacto/"}>Contacto</a
                    >
                </li>
            </ul>
        </nav>
        <div class="social-icons desktop-only">
            <a
                href="https://www.instagram.com/bloganaalbiol/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-instagram"
                    ><rect x="2" y="2" width="20" height="20" rx="5" ry="5"
                    ></rect><path
                        d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                    ></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"
                    ></line></svg
                >
            </a>
            <a
                href="https://www.youtube.com/@soyanaalbiol?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-youtube"
                >
                    <path
                        d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"
                    ></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
                    ></polygon>
                </svg>
            </a>
        </div>
        <a href="/en-privado" class="btn btn-primary header-cta"
            >El mambo: En Privado</a
        >
        <button
            type="button"
            class="mobile-menu-toggle"
            aria-label="Abrir menú"
            onclick={toggleMenu}
        >
            <span></span><span></span><span></span>
        </button>
    </div>
</header>

<div class="mobile-menu" class:active={isMenuOpen}>
    <button type="button" class="mobile-menu-close" onclick={toggleMenu}
        >&times;</button
    >
    <nav>
        <ul>
            <li>
                <a
                    href="/libros"
                    class:active={currentPath === "/libros" ||
                        currentPath === "/libros/"}
                    onclick={toggleMenu}>Libros</a
                >
            </li>
            <li>
                <a
                    href="/formaciones"
                    class:active={currentPath === "/formaciones" ||
                        currentPath === "/formaciones/"}
                    onclick={toggleMenu}>Formaciones</a
                >
            </li>
            <li>
                <a
                    href="/charlas"
                    class:active={currentPath === "/charlas" ||
                        currentPath === "/charlas/"}
                    onclick={toggleMenu}>Charlas</a
                >
            </li>
            <li>
                <a
                    href="/quien-soy"
                    class:active={currentPath === "/quien-soy" ||
                        currentPath === "/quien-soy/"}
                    onclick={toggleMenu}>Quién soy</a
                >
            </li>
            <li>
                <a
                    href="/contacto"
                    class:active={currentPath === "/contacto" ||
                        currentPath === "/contacto/"}
                    onclick={toggleMenu}>Contacto</a
                >
            </li>
        </ul>
    </nav>
    <div class="social-icons mobile-socials">
        <a
            href="https://www.instagram.com/bloganaalbiol/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-instagram"
                ><rect x="2" y="2" width="20" height="20" rx="5" ry="5"
                ></rect><path
                    d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                ></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"
                ></line></svg
            >
        </a>
        <a
            href="https://www.youtube.com/@soyanaalbiol?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-youtube"
            >
                <path
                    d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"
                ></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
                ></polygon>
            </svg>
        </a>
    </div>
</div>
