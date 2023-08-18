<script setup lang="ts">
import MegaphoneIcon from './MegaphoneIcon.vue'

defineProps<{
    msg: string
    btn?: {
        text: string
        url: string
    }
}>()
</script>
<template>
    <div>
        <MegaphoneIcon />
        <span>{{ msg }}</span>
        <a v-if="btn" target="_blank" rel="noopener noreferrer" :href="btn.url">{{ btn.text }}</a>
    </div>
</template>

<style scoped lang="scss">
div {
    background: var(--color-background-soft);
    padding: 0.6rem 0.8rem;
    border-radius: 0.5rem;

    display: flex;
    justify-content: space-between;
    place-items: center;
    column-gap: 0.5rem;

    svg {
        flex: 0 0 auto;
        font-size: 1.25rem;
        stroke-width: 0.7;
    }

    span {
        flex: 1 1 auto;
        font-size: 1rem;
        font-weight: 500;
        line-break: loose;
        overflow-wrap: break-word;
    }

    a {
        flex: 0 0 auto;
        font-size: 0.9rem;
        font-weight: 400;
        padding: 0.15rem 0.3rem;
        background: var(--color-background-transparent);
        border-radius: 0.3rem;
        border: 0.1rem solid var(--color-border);

        &:hover {
            background: var(--color-background-soft);
            border-color: var(--color-border-hover);
        }
    }
}
</style>
