<script setup lang="ts"></script>
<template>
    <main>
        <div class="head">
            <slot name="head"></slot>
        </div>
        <div class="content">
            <slot name="content"></slot>
        </div>
    </main>
</template>

<style scoped lang="scss">
main {
    height: 50vh;
    display: flex;
    flex-direction: column;
    place-content: center;
    place-items: center;
    gap: 1rem;

    .head {
        font-size: 3rem;
        font-weight: 500;
        letter-spacing: 0.5rem;
        color: var(--color-text-bland);
    }

    .content {
        text-align: center;
        font-size: 1.2rem;
        font-weight: 300;
        letter-spacing: 0.2rem;
    }
}
</style>
