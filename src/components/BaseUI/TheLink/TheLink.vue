<script setup lang="ts">
import LinkIcon from './LinkIcon.vue'

defineProps<{
    url: string
    name: string
    intro: string
}>()
</script>
<template>
    <a class="icon-text-align" target="_blank" rel="noopener noreferrer" :href="url">
        <LinkIcon class="icon" />
        <div>
            <p class="name">{{ name }}</p>
            <p class="intro">{{ intro }}</p>
        </div>
    </a>
</template>

<style scoped lang="scss">
a {
    .icon {
        font-size: 1.1rem;
    }

    div {
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        justify-content: space-evenly;

        .name {
            position: relative;
            font-size: 1.1rem;
            font-weight: 700;
            white-space: pre;

            &::after {
                content: '';
                display: block;
                position: absolute;
                height: 0.1rem;
                width: 0%;
                left: 0;
                bottom: -0.01rem;
                background: var(--color-text-bland);
                transition: width 0.3s ease-in-out;
            }
        }

        .intro {
            font-size: 0.9rem;
            font-weight: 500;
            letter-spacing: 0.05rem;
        }
    }

    &:hover .name::after {
        width: 100%;
    }
}
</style>
