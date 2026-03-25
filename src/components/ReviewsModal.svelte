<script>
    /** @type {{ reviews: string[], bookTitle: string }} */
    let { reviews, bookTitle } = $props();

    let isOpen = $state(false);

    function open() {
        isOpen = true;
        document.body.style.overflow = 'hidden';
    }

    function close() {
        isOpen = false;
        document.body.style.overflow = '';
    }

    function handleBackdropClick(e) {
        if (e.target === e.currentTarget) {
            close();
        }
    }

    function handleKeydown(e) {
        if (e.key === 'Escape') {
            close();
        }
    }
</script>

<svelte:window onkeydown={handleKeydown} />

<button class="btn reviews-trigger" onclick={open}>
    Ver mas resenas
</button>

{#if isOpen}
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="modal-overlay" onclick={handleBackdropClick} onkeydown={handleKeydown}>
        <div class="modal-content" role="dialog" aria-modal="true" aria-label="Resenas de {bookTitle}">
            <button class="modal-close" onclick={close} aria-label="Cerrar">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>

            <h3 class="modal-title">{bookTitle}</h3>
            <p class="modal-subtitle">Lo que dicen los lectores</p>

            <div class="reviews-list">
                {#each reviews as review, i (i)}
                    <div class="review-item">
                        <div class="review-number">{String(i + 1).padStart(2, '0')}</div>
                        <p class="review-text">"{review}"</p>
                    </div>
                {/each}
            </div>
        </div>
    </div>
{/if}

<style>
    .reviews-trigger {
        display: inline-block;
    }

    .modal-overlay {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(4px);
        z-index: 2000;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        animation: fadeIn 0.3s ease;
    }

    .modal-content {
        background: #FAF9F7;
        border-radius: 16px;
        max-width: 700px;
        width: 100%;
        max-height: 80vh;
        overflow-y: auto;
        padding: 3rem;
        position: relative;
        animation: slideUp 0.3s ease;
    }

    .modal-close {
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        background: none;
        border: none;
        cursor: pointer;
        color: #964F4C;
        transition: transform 0.3s ease;
        padding: 0.5rem;
    }

    .modal-close:hover {
        transform: rotate(90deg);
    }

    .modal-title {
        font-size: 1.75rem;
        color: #964F4C;
        margin-bottom: 0.25rem;
    }

    .modal-subtitle {
        font-size: 0.95rem;
        color: #333;
        margin-bottom: 2rem;
        letter-spacing: 1px;
        text-transform: uppercase;
    }

    .reviews-list {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .review-item {
        display: flex;
        gap: 1.25rem;
        padding: 1.5rem;
        background: white;
        border-radius: 12px;
        border-left: 3px solid rgba(150, 79, 76, 0.3);
        transition: transform 0.2s ease;
    }

    .review-item:hover {
        transform: translateX(4px);
    }

    .review-number {
        font-family: var(--font-heading);
        font-size: 1.5rem;
        color: rgba(150, 79, 76, 0.15);
        line-height: 1;
        flex-shrink: 0;
        padding-top: 0.25rem;
    }

    .review-text {
        font-size: 0.95rem;
        line-height: 1.7;
        color: #333;
        margin: 0;
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media (max-width: 600px) {
        .modal-content {
            padding: 2rem 1.5rem;
            max-height: 90vh;
        }

        .review-item {
            flex-direction: column;
            gap: 0.5rem;
        }

        .review-number {
            font-size: 1rem;
        }
    }
</style>
